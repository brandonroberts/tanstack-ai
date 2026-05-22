/**
 * FAL provider — fetches one OpenAPI spec per model from the FAL models API
 * and splits them by category (image, video, audio, …). Ported from
 * fal-ai/fal-js PR #212 (scripts/fetch-openapi-models.ts).
 */

import { mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

import {
  applyTransforms,
  mergeOpenAPISpecs,
  type MergedSpec,
} from '../merge-openapi-specs.js'
import type {
  FetchOptions,
  ProviderCategorySpec,
  ProviderConfig,
} from '../providers.js'

interface FalApiModel {
  endpoint_id: string
  openapi: Record<string, unknown>
  metadata: {
    display_name?: string
    category: string
    description?: string
    status?: 'active' | 'inactive' | 'deprecated'
    tags?: Array<string>
    updated_at?: string
    [key: string]: unknown
  }
}

interface FalApiResponse {
  models: Array<FalApiModel>
  has_more: boolean
  next_cursor: string | null
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

async function fetchPageWithRetry(
  url: string,
  apiKey: string,
  retries = 3,
): Promise<FalApiResponse> {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const response = await fetch(url, {
        headers: { Authorization: `Key ${apiKey}` },
      })

      if (response.status === 429) {
        const waitTime = Math.min(2000 * Math.pow(2, attempt), 10000)
        console.log(`  Rate limited. Waiting ${waitTime}ms before retry...`)
        await sleep(waitTime)
        continue
      }

      if (!response.ok) {
        throw new Error(
          `Failed to fetch FAL models: ${response.status} ${response.statusText}`,
        )
      }

      return (await response.json()) as FalApiResponse
    } catch (error) {
      if (attempt === retries) throw error
      console.log(`  Attempt ${attempt} failed, retrying...`)
      await sleep(1000 * attempt)
    }
  }

  throw new Error('Max retries exceeded')
}

async function fetchFalModels(apiKey: string): Promise<Array<FalApiModel>> {
  const allModels: Array<FalApiModel> = []
  let cursor: string | null = null
  let pageNumber = 1

  do {
    const params = new URLSearchParams({
      status: 'active',
      'expand[]': 'openapi-3.0',
    })
    if (cursor) params.set('cursor', cursor)

    const url = `https://api.fal.ai/v1/models?${params.toString()}`
    console.log(`  Fetching FAL page ${pageNumber}...`)
    const data = await fetchPageWithRetry(url, apiKey)
    allModels.push(...data.models)
    console.log(
      `  Retrieved ${data.models.length} models (total: ${allModels.length})`,
    )

    cursor = data.has_more ? data.next_cursor : null
    pageNumber++
  } while (cursor)

  return allModels
}

function sanitizeCategoryName(category: string): string {
  return category.replace(/[^a-zA-Z0-9_-]/g, '-')
}

function groupByCategory(
  models: Array<FalApiModel>,
): Map<string, Array<FalApiModel>> {
  const map = new Map<string, Array<FalApiModel>>()
  for (const model of models) {
    const category = sanitizeCategoryName(
      model.metadata.category || 'uncategorized',
    )
    if (!map.has(category)) map.set(category, [])
    map.get(category)!.push(model)
  }
  return map
}

async function fetchFal({ outDir }: FetchOptions): Promise<void> {
  const apiKey = process.env.FAL_KEY
  if (!apiKey) {
    console.log('  FAL_KEY not set — skipping FAL fetch.')
    return
  }
  mkdirSync(outDir, { recursive: true })

  console.log('Fetching FAL model OpenAPI specs...')
  const models = await fetchFalModels(apiKey)
  const grouped = groupByCategory(models)
  console.log(`Found ${grouped.size} categories`)

  for (const [category, categoryModels] of grouped.entries()) {
    const filename = `fal.models.${category}.json`
    const payload = {
      generated_at: new Date().toISOString(),
      total_models: categoryModels.length,
      category,
      models: categoryModels,
    }
    writeFileSync(join(outDir, filename), JSON.stringify(payload, null, 2))
    console.log(`  Wrote ${filename} (${categoryModels.length} models)`)
  }
}

function loadFal(): Array<ProviderCategorySpec> {
  // Mirrors fetch's outDir resolution at sync time (kept inline to avoid
  // threading the dir through every load() call site).
  const specDir = new URL('../specs/fal/', import.meta.url).pathname
  let filenames: Array<string>
  try {
    filenames = readdirSync(specDir).filter((f) => f.endsWith('.json'))
  } catch {
    return []
  }
  // Group `fal.models.<sub>-to-<target>.json` into one category named after
  // the target modality (`<target>`), so `image-to-video` and `text-to-video`
  // both land in the `video` category.
  const grouped = filenames.reduce<Record<string, Array<string>>>((acc, f) => {
    const category = f.replace(
      /fal\.models\.([^-.]+-to-([^.]+)|([^-.]+))\.json/,
      '$2$3',
    )
    if (!acc[category]) acc[category] = []
    acc[category]!.push(f)
    return acc
  }, {})

  return Object.entries(grouped).map(([category, files]) => {
    const specs = files.flatMap((filename) => {
      const fileContents = readFileSync(join(specDir, filename), 'utf8')
      const json = JSON.parse(fileContents) as { models: Array<FalApiModel> }
      return json.models.map((model) => {
        const spec = model.openapi as Record<string, unknown>
        // Stash endpointId on `info.x-fal-metadata` so the merge step can use
        // it when remapping conflicting schema names per endpoint.
        const info = (spec.info ??= {}) as Record<string, unknown>
        const meta = (info['x-fal-metadata'] ??= {}) as Record<string, unknown>
        meta.endpointId = model.endpoint_id
        applyTransforms(spec, {
          providerId: 'fal',
          markFalFileFields: true,
        })
        return spec
      })
    })
    const mergedSpec: MergedSpec = mergeOpenAPISpecs(
      specs,
      `FAL.ai ${category} API`,
      (spec) => {
        const info = (
          spec as { info?: { 'x-fal-metadata'?: { endpointId?: string } } }
        ).info
        return info?.['x-fal-metadata']?.endpointId ?? 'unknown'
      },
    )
    return {
      providerId: `fal-${category}`,
      category,
      mergedSpec,
      outputStrategy: 'sibling-get' as const,
    }
  })
}

export const falProvider: ProviderConfig = {
  id: 'fal',
  namespace: 'Fal',
  fetch: fetchFal,
  load: loadFal,
  requiresAuth: true,
  authEnvVar: 'FAL_KEY',
}
