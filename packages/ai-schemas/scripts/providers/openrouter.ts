/**
 * OpenRouter provider — pulls the public OpenAPI 3.1 spec served at
 * openrouter.ai/openapi.json. No auth required for the spec itself.
 *
 * The static spec describes the request/response shape per endpoint
 * (including video generation's frame_images / input_references). Per-model
 * video constraints (supported_durations, resolutions, aspect ratios) live
 * in the separate GET /api/v1/videos/models metadata API — synthesising
 * per-model schemas from that is a candidate follow-up, not covered here.
 */

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

import {
  applyTransforms,
  mergeOpenAPISpecs,
  toActivitySpecs,
  type MergedSpec,
} from '../merge-openapi-specs.js'
import type {
  Activity,
  FetchOptions,
  ProviderCategorySpec,
  ProviderConfig,
} from '../providers.js'

const OPENROUTER_OPENAPI_URL = 'https://openrouter.ai/openapi.json'

async function fetchOpenRouter({ outDir }: FetchOptions): Promise<void> {
  mkdirSync(outDir, { recursive: true })

  console.log(`Fetching OpenRouter OpenAPI from ${OPENROUTER_OPENAPI_URL}...`)
  const response = await fetch(OPENROUTER_OPENAPI_URL)
  if (!response.ok) {
    throw new Error(
      `OpenRouter fetch failed: ${response.status} ${response.statusText}`,
    )
  }
  // The spec's key-management examples embed realistic-looking
  // `sk-or-v1-…` API keys that trip GitHub push protection when the spec is
  // committed. Redact them — they only appear in platform endpoints that
  // are dropped from generation anyway.
  const text = (await response.text()).replace(
    /sk-or-v1-[0-9a-f]{16,}/g,
    'sk-or-v1-REDACTED',
  )
  const spec = JSON.parse(text) as object
  writeFileSync(
    join(outDir, 'openrouter.openapi.json'),
    JSON.stringify(spec, null, 2),
  )
  console.log('  Wrote openrouter.openapi.json')
}

/**
 * Path rules — OpenRouter's generation surface spans the OpenAI-compatible
 * endpoints (chat/completions, completions-style responses) and the
 * Anthropic-compatible /messages. Account management (auth/keys, byok,
 * credits, guardrails, workspaces, observability), the preset-scoped
 * endpoint variants, and rerank (no core activity) drop out of generation.
 */
function classifyOpenRouter(path: string): Activity | null {
  if (
    path === '/chat/completions' ||
    path === '/messages' ||
    path === '/responses'
  ) {
    return 'chat'
  }
  if (path.startsWith('/audio/')) return 'audio'
  if (path === '/videos') return 'video'
  // NB: /embeddings is intentionally unclassified — OpenRouter declares its
  // request/response schemas inline rather than via $ref, so the endpoint
  // can't be mapped to named schema exports. Revisit if upstream refactors.
  return null
}

function loadOpenRouter(): Array<ProviderCategorySpec> {
  const specDir = new URL('../specs/openrouter/', import.meta.url).pathname
  let raw: string
  try {
    raw = readFileSync(join(specDir, 'openrouter.openapi.json'), 'utf8')
  } catch {
    return []
  }
  const spec = JSON.parse(raw) as object
  applyTransforms(spec, { providerId: 'openrouter' })
  const mergedSpec: MergedSpec = mergeOpenAPISpecs([spec], 'OpenRouter API')
  return toActivitySpecs('openrouter', mergedSpec, classifyOpenRouter)
}

export const openrouterProvider: ProviderConfig = {
  id: 'openrouter',
  namespace: 'OpenRouter',
  fetch: fetchOpenRouter,
  load: loadOpenRouter,
  requiresAuth: false,
}
