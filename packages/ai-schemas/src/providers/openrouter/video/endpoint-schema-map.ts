// AUTO-GENERATED - Do not edit manually
// Generated via scripts/generate-endpoint-maps.ts

import { VideoGenerationRequestSchema } from './schemas.gen.js'

/**
 * Map of openrouter-video endpoint id -> self-contained JSON Schemas.
 * Each input/output schema bundles its $ref closure under `$defs`, so it
 * can be handed directly to LLM tool APIs or `z.fromJSONSchema`.
 * Entries without `output` stream binary media (audio/video) rather
 * than returning JSON.
 */
export const openrouterVideoEndpointSchemaMap: {
  readonly videos: { readonly input: typeof VideoGenerationRequestSchema }
} = {
  videos: { input: VideoGenerationRequestSchema },
}
