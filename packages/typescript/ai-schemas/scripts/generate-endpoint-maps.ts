#!/usr/bin/env tsx
/**
 * Post-process @hey-api/openapi-ts output for every (provider, category) tuple.
 *
 * For each unit we emit:
 *   - schemas.gen.ts (rewritten in place to bundle $ref closures under $defs).
 *   - endpoint-zod-map.ts: { [endpointId]: { input, output } } Zod schemas.
 *   - endpoint-schema-map.ts: same shape, JSON Schemas.
 *   - index.ts: Zod barrel for `@tanstack/ai-schemas/zod/{provider-id}`.
 *   - schemas-index.ts: JSON Schema barrel for `@tanstack/ai-schemas/schemas/{provider-id}`.
 *
 * At the package root we then emit:
 *   - src/schemas.ts: namespaced JSON Schema barrels (one per provider unit).
 *   - src/zod.ts: namespaced Zod barrels.
 *   - src/index.ts: default entry, re-exports schemas.ts.
 *
 * Ported from fal-ai/fal-js PR #212 and generalised so every provider unit
 * (with optional category) lives under src/providers/{providerId}/[category]/.
 */

import { existsSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import * as prettier from 'prettier'

import type { ProviderCategorySpec } from './providers.js'
import { loadAllProviderSpecs } from './load-all-specs.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const SCHEMAS_SRC = join(__dirname, '..', 'src')
const PROVIDERS_ROOT = join(SCHEMAS_SRC, 'providers')

interface EndpointInfo {
  endpointId: string
  inputType: string
  outputType: string
}

function extractEndpointsFromSpec(
  unit: ProviderCategorySpec,
): Array<EndpointInfo> {
  const endpoints: Array<EndpointInfo> = []
  const strategy = unit.outputStrategy ?? 'post-200'

  for (const [pathKey, pathItem] of Object.entries(unit.mergedSpec.paths)) {
    const post = (pathItem as { post?: Record<string, any> }).post
    if (!post) continue

    const inputRef =
      post.requestBody?.content?.['application/json']?.schema?.$ref
    if (typeof inputRef !== 'string') continue

    let outputRef: string | undefined
    if (strategy === 'sibling-get') {
      const resultPathKey = `${pathKey}/requests/{request_id}`
      const resultGet = (
        unit.mergedSpec.paths[resultPathKey] as
          | { get?: Record<string, any> }
          | undefined
      )?.get
      outputRef =
        resultGet?.responses?.['200']?.content?.['application/json']?.schema
          ?.$ref
    } else {
      outputRef =
        post.responses?.['200']?.content?.['application/json']?.schema?.$ref
    }

    if (typeof outputRef !== 'string') {
      // Many provider operations return a top-level shape inline rather than
      // by ref. We skip those — they can't be addressed by a single named
      // schema export and bloat the map needlessly.
      continue
    }

    const inputType = inputRef.replace(/^#\/components\/schemas\//, '')
    const outputType = outputRef.replace(/^#\/components\/schemas\//, '')
    const endpointId = pathKey.replace(/^\//, '')
    endpoints.push({ endpointId, inputType, outputType })
  }

  return endpoints.sort((a, b) => a.endpointId.localeCompare(b.endpointId))
}

function normalizeId(name: string): string {
  return name.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
}

function buildZodExportLookup(unitPath: string): Map<string, string> {
  const source = readFileSync(join(unitPath, 'zod.gen.ts'), 'utf8')
  const lookup = new Map<string, string>()
  for (const match of source.matchAll(/export const (z[A-Za-z0-9_$]+)/g)) {
    const exportName = match[1]!
    lookup.set(normalizeId(exportName.slice(1)), exportName)
  }
  return lookup
}

function buildSchemaExportLookup(unitPath: string): Map<string, string> {
  const source = readFileSync(join(unitPath, 'schemas.gen.ts'), 'utf8')
  const lookup = new Map<string, string>()
  for (const match of source.matchAll(
    /export const ([A-Za-z0-9_$]+)Schema\b/g,
  )) {
    lookup.set(normalizeId(match[1]!), `${match[1]}Schema`)
  }
  return lookup
}

function toPascalCase(str: string): string {
  const pascalCase = str
    .split(/[-_/]/)
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join('')
  return /^\d/.test(pascalCase) ? 'Gen' + pascalCase : pascalCase
}

function toCamelCase(str: string): string {
  const pascal = toPascalCase(str)
  return pascal.charAt(0).toLowerCase() + pascal.slice(1)
}

async function formatTypeScript(content: string): Promise<string> {
  const config = await prettier.resolveConfig(process.cwd())
  return prettier.format(content, { ...config, parser: 'typescript' })
}

// ──────────────────────────────────────────────────────────────────────────────
// $defs bundling
// ──────────────────────────────────────────────────────────────────────────────

const COMPONENT_REF_PREFIX = '#/components/schemas/'
const DEFS_REF_PREFIX = '#/$defs/'

type JsonValue =
  | string
  | number
  | boolean
  | null
  | { readonly [key: string]: JsonValue }
  | ReadonlyArray<JsonValue>

function collectComponentRefs(node: unknown, into: Set<string>): void {
  if (typeof node !== 'object' || node === null) return
  if (Array.isArray(node)) {
    for (const v of node) collectComponentRefs(v, into)
    return
  }
  for (const [key, value] of Object.entries(node)) {
    if (
      key === '$ref' &&
      typeof value === 'string' &&
      value.startsWith(COMPONENT_REF_PREFIX)
    ) {
      into.add(value.slice(COMPONENT_REF_PREFIX.length))
    } else {
      collectComponentRefs(value, into)
    }
  }
}

function rewriteRefs(node: JsonValue): JsonValue {
  if (typeof node !== 'object' || node === null) return node
  if (Array.isArray(node)) return node.map(rewriteRefs)
  const out: Record<string, JsonValue> = {}
  for (const [key, value] of Object.entries(node)) {
    if (
      key === '$ref' &&
      typeof value === 'string' &&
      value.startsWith(COMPONENT_REF_PREFIX)
    ) {
      out[key] = DEFS_REF_PREFIX + value.slice(COMPONENT_REF_PREFIX.length)
    } else {
      out[key] = rewriteRefs(value)
    }
  }
  return out
}

function bundleSchemaWithDefs(
  name: string,
  schemas: Record<string, JsonValue>,
  context: string,
): JsonValue {
  const root = schemas[name]
  if (root === undefined) {
    throw new Error(`Schema not found in ${context}: ${name}`)
  }

  const closure = new Set<string>()
  const queue: Array<string> = []
  const seedRefs = new Set<string>()
  collectComponentRefs(root, seedRefs)
  for (const r of seedRefs) {
    if (r !== name) queue.push(r)
  }
  while (queue.length > 0) {
    const cur = queue.shift()!
    if (closure.has(cur)) continue
    closure.add(cur)
    const target = schemas[cur]
    if (target === undefined) {
      console.warn(
        `  Warning: ref target '${cur}' not found in ${context}/schemas.gen.ts (transitively referenced from '${name}')`,
      )
      continue
    }
    const subRefs = new Set<string>()
    collectComponentRefs(target, subRefs)
    for (const r of subRefs) {
      if (r !== name && !closure.has(r)) queue.push(r)
    }
  }

  const rewrittenRoot = rewriteRefs(root) as Record<string, JsonValue>
  if (closure.size === 0) return rewrittenRoot

  const defs: Record<string, JsonValue> = {}
  for (const refName of [...closure].sort()) {
    const target = schemas[refName]
    if (target === undefined) continue
    defs[refName] = rewriteRefs(target)
  }
  return { ...rewrittenRoot, $defs: defs }
}

async function loadUnitSchemas(
  unitPath: string,
): Promise<Record<string, JsonValue>> {
  const url = pathToFileURL(join(unitPath, 'schemas.gen.ts')).href
  const mod = (await import(url)) as Record<string, unknown>
  const out: Record<string, JsonValue> = {}
  for (const [exportName, value] of Object.entries(mod)) {
    if (exportName === 'default') continue
    if (!exportName.endsWith('Schema')) continue
    out[exportName.slice(0, -'Schema'.length)] = value as JsonValue
  }
  return out
}

async function rewriteSchemasGen(
  label: string,
  unitPath: string,
): Promise<void> {
  const schemas = await loadUnitSchemas(unitPath)
  const sortedNames = Object.keys(schemas).sort()

  const lines = [
    `/* eslint-disable */`,
    `// AUTO-GENERATED - Do not edit manually`,
    `// Generated by @hey-api/openapi-ts and post-processed by`,
    `// scripts/generate-endpoint-maps.ts to embed each schema's $defs closure.`,
    ``,
  ]

  for (const name of sortedNames) {
    const bundled = bundleSchemaWithDefs(name, schemas, label)
    lines.push(
      `export const ${name}Schema = ${JSON.stringify(bundled)} as const;`,
      ``,
    )
  }

  const out = await formatTypeScript(lines.join('\n'))
  writeFileSync(join(unitPath, 'schemas.gen.ts'), out)
  console.log(`  ✓ Rewrote ${label}/schemas.gen.ts with $defs bundling`)
}

/**
 * Prefix every `zod.gen.ts` with file-level escape hatches.
 *
 * - `/* eslint-disable * /`: machine-written code shouldn't be policed by
 *   project lint rules (style choices, `no-control-regex` on regex strings
 *   the upstream spec embedded verbatim, etc.).
 * - `// @ts-nocheck`: the heyapi Zod plugin has edge cases that no spec
 *   transform fixes cleanly — most prominently nested polymorphic types
 *   that emit `.extend()` on a `z.discriminatedUnion`, which doesn't accept
 *   that method. Spec-level transforms already cover the common cases
 *   (`coerceDefaults` strips type/value mismatches, `default: null` on
 *   non-nullable, etc.); `@ts-nocheck` covers the remaining long tail. The
 *   runtime Zod schemas are still valid — only the type-level wiring
 *   reports as un-`.extend`-able.
 *
 * The hand-written source under src/ still type-checks strictly.
 */
function postProcessZodGen(unitPath: string): void {
  const file = join(unitPath, 'zod.gen.ts')
  let source = readFileSync(file, 'utf8')

  // Runtime fix: heyapi emits `zFoo.extend({ ... })` to graft a discriminator
  // onto each member of a `z.discriminatedUnion(...)`. When `zFoo` is itself
  // a `z.discriminatedUnion`, `.extend` isn't a method on that Zod type —
  // calling it throws at runtime. `z.intersection(zFoo, z.object({ ... }))`
  // is the equivalent that works for both ZodObject and ZodDiscriminatedUnion
  // at runtime. (The outer `discriminatedUnion` still flags a type error in
  // that case because intersections aren't `$ZodTypeDiscriminable` — covered
  // by the `@ts-nocheck` below.)
  const discriminatedUnionNames = new Set<string>()
  for (const match of source.matchAll(
    /export const (z[A-Za-z0-9_$]+)\s*=\s*z\.discriminatedUnion\(/g,
  )) {
    discriminatedUnionNames.add(match[1]!)
  }
  if (discriminatedUnionNames.size > 0) {
    const namePattern = [...discriminatedUnionNames].join('|')
    const extendPattern = new RegExp(
      String.raw`(${namePattern})\.extend\((\{[^{}]*\})\)`,
      'g',
    )
    source = source.replace(
      extendPattern,
      (_, name: string, extension: string) =>
        `z.intersection(${name}, z.object(${extension}))`,
    )
  }

  // Strip any prior headers (idempotent re-runs) so we produce a stable result.
  source = source.replace(
    /^(\/\* eslint-disable \*\/\n|\/\/ @ts-nocheck\n)+/,
    '',
  )
  source = `/* eslint-disable */\n// @ts-nocheck\n${source}`
  writeFileSync(file, source)
}

// ──────────────────────────────────────────────────────────────────────────────
// Per-unit generators
// ──────────────────────────────────────────────────────────────────────────────

async function generateEndpointZodMap(
  unitLabel: string,
  unitPath: string,
  endpoints: Array<EndpointInfo>,
): Promise<void> {
  const typeName = toPascalCase(unitLabel)
  const constName = `${toCamelCase(unitLabel)}EndpointZodMap`
  const idTypeName = `${typeName}EndpointId`
  const zodExports = buildZodExportLookup(unitPath)

  const resolveZodName = (
    schemaName: string,
    endpointId: string,
  ): string | null => {
    const hit = zodExports.get(normalizeId(schemaName))
    if (!hit) {
      console.warn(
        `  Warning: no zod export found for "${schemaName}" (endpoint ${endpointId}) in ${unitLabel}/zod.gen.ts`,
      )
      return null
    }
    return hit
  }

  const resolved = endpoints.flatMap(
    ({ endpointId, inputType, outputType }) => {
      const inputName = resolveZodName(inputType, endpointId)
      const outputName = resolveZodName(outputType, endpointId)
      if (!inputName || !outputName) return []
      return [{ endpointId, inputName, outputName }]
    },
  )

  const schemaImports = Array.from(
    new Set(resolved.flatMap((e) => [e.inputName, e.outputName])),
  ).sort()

  const lines = [
    `// AUTO-GENERATED - Do not edit manually`,
    `// Generated via scripts/generate-endpoint-maps.ts`,
    ``,
    `import {`,
    ...schemaImports.map((t) => `  ${t},`),
    `} from './zod.gen.js'`,
    ``,
    `/** Map of ${unitLabel} endpoint id -> Zod input/output schemas. */`,
    `export const ${constName}: {`,
  ]
  for (const { endpointId, inputName, outputName } of resolved) {
    lines.push(
      `  readonly '${endpointId}': { readonly input: typeof ${inputName}; readonly output: typeof ${outputName} },`,
    )
  }
  lines.push(`} = {`)
  for (const { endpointId, inputName, outputName } of resolved) {
    lines.push(
      `  '${endpointId}': { input: ${inputName}, output: ${outputName} },`,
    )
  }
  lines.push(`}`)
  lines.push(``)
  lines.push(`/** Union of valid ${unitLabel} endpoint ids. */`)
  lines.push(`export type ${idTypeName} = keyof typeof ${constName}`)

  const out = await formatTypeScript(lines.join('\n'))
  writeFileSync(join(unitPath, 'endpoint-zod-map.ts'), out)
  console.log(`  ✓ Generated ${unitLabel}/endpoint-zod-map.ts`)
}

async function generateEndpointSchemaMap(
  unitLabel: string,
  unitPath: string,
  endpoints: Array<EndpointInfo>,
): Promise<void> {
  const constName = `${toCamelCase(unitLabel)}EndpointSchemaMap`
  const schemaExports = buildSchemaExportLookup(unitPath)

  const resolveSchemaName = (
    schemaName: string,
    endpointId: string,
  ): string | null => {
    const hit = schemaExports.get(normalizeId(schemaName))
    if (!hit) {
      console.warn(
        `  Warning: no JSON Schema export found for "${schemaName}" (endpoint ${endpointId}) in ${unitLabel}/schemas.gen.ts`,
      )
      return null
    }
    return hit
  }

  const resolved = endpoints.flatMap(
    ({ endpointId, inputType, outputType }) => {
      const inputName = resolveSchemaName(inputType, endpointId)
      const outputName = resolveSchemaName(outputType, endpointId)
      if (!inputName || !outputName) return []
      return [{ endpointId, inputName, outputName }]
    },
  )

  const schemaImports = Array.from(
    new Set(resolved.flatMap((e) => [e.inputName, e.outputName])),
  ).sort()

  const lines = [
    `// AUTO-GENERATED - Do not edit manually`,
    `// Generated via scripts/generate-endpoint-maps.ts`,
    ``,
    `import {`,
    ...schemaImports.map((t) => `  ${t},`),
    `} from './schemas.gen.js'`,
    ``,
    `/**`,
    ` * Map of ${unitLabel} endpoint id -> self-contained JSON Schemas.`,
    ` * Each input/output schema bundles its $ref closure under \`$defs\`, so it`,
    ` * can be handed directly to LLM tool APIs or \`z.fromJSONSchema\`.`,
    ` */`,
    `export const ${constName}: {`,
  ]
  for (const { endpointId, inputName, outputName } of resolved) {
    lines.push(
      `  readonly '${endpointId}': { readonly input: typeof ${inputName}; readonly output: typeof ${outputName} },`,
    )
  }
  lines.push(`} = {`)
  for (const { endpointId, inputName, outputName } of resolved) {
    lines.push(
      `  '${endpointId}': { input: ${inputName}, output: ${outputName} },`,
    )
  }
  lines.push(`}`)

  const out = await formatTypeScript(lines.join('\n'))
  writeFileSync(join(unitPath, 'endpoint-schema-map.ts'), out)
  console.log(`  ✓ Generated ${unitLabel}/endpoint-schema-map.ts`)
}

async function generateUnitZodIndex(
  unitLabel: string,
  unitPath: string,
): Promise<void> {
  const lines = [
    `// AUTO-GENERATED - Do not edit manually`,
    `// Generated via scripts/generate-endpoint-maps.ts`,
    ``,
    `export * from './endpoint-zod-map.js'`,
    `export * from './zod.gen.js'`,
  ]
  const out = await formatTypeScript(lines.join('\n'))
  writeFileSync(join(unitPath, 'index.ts'), out)
  console.log(`  ✓ Generated ${unitLabel}/index.ts`)
}

async function generateUnitSchemasIndex(
  unitLabel: string,
  unitPath: string,
): Promise<void> {
  const lines = [
    `// AUTO-GENERATED - Do not edit manually`,
    `// Generated via scripts/generate-endpoint-maps.ts`,
    ``,
    `export * from './endpoint-schema-map.js'`,
    `export * from './schemas.gen.js'`,
  ]
  const out = await formatTypeScript(lines.join('\n'))
  writeFileSync(join(unitPath, 'schemas-index.ts'), out)
  console.log(`  ✓ Generated ${unitLabel}/schemas-index.ts`)
}

// ──────────────────────────────────────────────────────────────────────────────
// Top-level barrels
// ──────────────────────────────────────────────────────────────────────────────

interface ProcessedUnit {
  /** Full label, e.g. "openai" or "fal/video". Drives namespace name. */
  label: string
  /** Subpath segment exposed in package.json exports (e.g. "openai" or "fal-video"). */
  subpath: string
  /** Source-relative directory (e.g. "providers/openai" or "providers/fal-video/video"). */
  relSrc: string
}

async function generateSchemasBarrel(
  units: Array<ProcessedUnit>,
): Promise<void> {
  const lines = [
    `// AUTO-GENERATED - Do not edit manually`,
    `// Generated via scripts/generate-endpoint-maps.ts`,
    ``,
    `// Per-provider JSON Schemas + endpoint schema maps. Namespaced so identical`,
    `// schema names across providers (e.g. \`MessageInputSchema\`) don't collide.`,
    ...units.map(
      (u) =>
        `export * as ${toPascalCase(u.label)} from './${u.relSrc}/schemas-index.js'`,
    ),
  ]
  const out = await formatTypeScript(lines.join('\n'))
  writeFileSync(join(SCHEMAS_SRC, 'schemas.ts'), out)
  console.log(`  ✓ Generated schemas.ts`)
}

async function generateZodBarrel(units: Array<ProcessedUnit>): Promise<void> {
  const lines = [
    `// AUTO-GENERATED - Do not edit manually`,
    `// Generated via scripts/generate-endpoint-maps.ts`,
    ``,
    `// Per-provider Zod barrels. Requires the optional \`zod ^4\` peer.`,
    ...units.map(
      (u) =>
        `export * as ${toPascalCase(u.label)} from './${u.relSrc}/index.js'`,
    ),
  ]
  const out = await formatTypeScript(lines.join('\n'))
  writeFileSync(join(SCHEMAS_SRC, 'zod.ts'), out)
  console.log(`  ✓ Generated zod.ts`)
}

async function generateIndex(): Promise<void> {
  const lines = [
    `// AUTO-GENERATED - Do not edit manually`,
    `// Generated via scripts/generate-endpoint-maps.ts`,
    ``,
    `export * from './schemas.js'`,
  ]
  const out = await formatTypeScript(lines.join('\n'))
  writeFileSync(join(SCHEMAS_SRC, 'index.ts'), out)
  console.log(`  ✓ Generated index.ts`)
}

// ──────────────────────────────────────────────────────────────────────────────
// Entry point
// ──────────────────────────────────────────────────────────────────────────────

async function main(): Promise<void> {
  if (!existsSync(SCHEMAS_SRC)) {
    console.error('Error: packages/typescript/ai-schemas/src/ not found.')
    process.exit(1)
  }

  console.log('Loading provider specs...')
  const units = loadAllProviderSpecs()
  console.log(`Found ${units.length} provider/category units`)

  const processed: Array<ProcessedUnit> = []
  for (const unit of units) {
    const subpath = unit.category
      ? `${unit.providerId}-${unit.category}`
      : unit.providerId
    const relSrc = unit.category
      ? `providers/${unit.providerId}/${unit.category}`
      : `providers/${unit.providerId}`
    const unitPath = join(SCHEMAS_SRC, relSrc)
    const label = subpath

    if (!existsSync(unitPath)) {
      console.warn(
        `\n  Warning: ${unitPath} does not exist — run \`pnpm generate-schemas\` first. Skipping ${label}.`,
      )
      continue
    }

    console.log(`\nProcessing ${label}...`)
    const endpoints = extractEndpointsFromSpec(unit)
    if (endpoints.length === 0) {
      console.warn(`  Warning: no endpoints found for ${label}, skipping`)
      continue
    }

    await rewriteSchemasGen(label, unitPath)
    postProcessZodGen(unitPath)
    await generateEndpointZodMap(label, unitPath, endpoints)
    await generateEndpointSchemaMap(label, unitPath, endpoints)
    await generateUnitZodIndex(label, unitPath)
    await generateUnitSchemasIndex(label, unitPath)
    processed.push({ label, subpath, relSrc })
  }

  console.log('\nGenerating top-level barrels...')
  await generateSchemasBarrel(processed)
  await generateZodBarrel(processed)
  await generateIndex()

  console.log(`\n✓ Done! Generated schemas under ${PROVIDERS_ROOT}`)
  for (const u of processed) console.log(`  - ${u.label} (${u.relSrc})`)
}

main().catch((error) => {
  console.error('Error:', error)
  process.exit(1)
})
