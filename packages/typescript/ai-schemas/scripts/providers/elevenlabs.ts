/**
 * ElevenLabs provider — pulls the public OpenAPI spec served at
 * api.elevenlabs.io/openapi.json. No auth required for the spec itself.
 */

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
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

const ELEVENLABS_OPENAPI_URL = 'https://api.elevenlabs.io/openapi.json'

async function fetchElevenLabs({ outDir }: FetchOptions): Promise<void> {
  mkdirSync(outDir, { recursive: true })

  console.log(`Fetching ElevenLabs OpenAPI from ${ELEVENLABS_OPENAPI_URL}...`)
  const response = await fetch(ELEVENLABS_OPENAPI_URL)
  if (!response.ok) {
    throw new Error(
      `ElevenLabs fetch failed: ${response.status} ${response.statusText}`,
    )
  }
  const spec = (await response.json()) as object

  writeFileSync(
    join(outDir, 'elevenlabs.openapi.json'),
    JSON.stringify(spec, null, 2),
  )
  console.log('  Wrote elevenlabs.openapi.json')
}

function loadElevenLabs(): Array<ProviderCategorySpec> {
  const specDir = new URL('../specs/elevenlabs/', import.meta.url).pathname
  let raw: string
  try {
    raw = readFileSync(join(specDir, 'elevenlabs.openapi.json'), 'utf8')
  } catch {
    return []
  }
  const spec = JSON.parse(raw) as object
  applyTransforms(spec, { providerId: 'elevenlabs' })
  const mergedSpec: MergedSpec = mergeOpenAPISpecs([spec], 'ElevenLabs API')
  return [
    {
      providerId: 'elevenlabs',
      category: '',
      mergedSpec,
    },
  ]
}

export const elevenlabsProvider: ProviderConfig = {
  id: 'elevenlabs',
  namespace: 'ElevenLabs',
  fetch: fetchElevenLabs,
  load: loadElevenLabs,
  requiresAuth: false,
}
