/**
 * Provider registry — declares how each upstream source is fetched, where the
 * raw spec is cached on disk, and how the merge step should categorise/clean
 * the spec before handing it to @hey-api/openapi-ts.
 *
 * Add a new provider by adding an entry here. The fetcher decides whether the
 * provider produces one spec or many (FAL's per-model split is the only N:1
 * case today); the rest of the pipeline is provider-agnostic.
 */

import type { MergedSpec } from './merge-openapi-specs.js'

export interface ProviderCategorySpec {
  /** Provider id, used as the subpath segment in @tanstack/ai-schemas/schemas/{providerId}. */
  providerId: string
  /** Optional category split (e.g. "video" for FAL). Empty for single-category providers. */
  category: string
  /** Merged OpenAPI spec ready for @hey-api/openapi-ts. */
  mergedSpec: MergedSpec
  /**
   * How to derive the output schema for each endpoint:
   *   - "post-200": read from POST .responses["200"].content (most providers).
   *   - "sibling-get": read from the sibling GET `${path}/requests/{request_id}`
   *     because the POST returns a queue ack (FAL).
   */
  outputStrategy?: 'post-200' | 'sibling-get'
}

export interface ProviderConfig {
  /** Unique provider id (e.g. "openai", "fal-image"). Lowercase, kebab-case. */
  id: string
  /** Human-readable namespace used in the barrel exports (PascalCase). */
  namespace: string
  /** Fetcher — writes raw spec JSON files under scripts/specs/{id}/. */
  fetch: (opts: FetchOptions) => Promise<void>
  /** Loader — reads cached spec files and returns merged spec(s) ready for codegen. */
  load: () => Array<ProviderCategorySpec>
  /** Whether this provider requires an API key (skipped when key is absent). */
  requiresAuth: boolean
  /** Env var name holding the API key (when requiresAuth is true). */
  authEnvVar?: string
}

export interface FetchOptions {
  /** Root directory for cached specs — scripts/specs/{provider}/. */
  outDir: string
}
