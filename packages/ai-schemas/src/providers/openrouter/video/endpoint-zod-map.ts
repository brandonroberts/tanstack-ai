// AUTO-GENERATED - Do not edit manually
// Generated via scripts/generate-endpoint-maps.ts

import { zVideoGenerationRequest } from './zod.gen.js'

/**
 * Map of openrouter-video endpoint id -> Zod input/output schemas.
 * Entries without `output` stream binary media (audio/video) rather
 * than returning JSON.
 */
export const openrouterVideoEndpointZodMap: {
  readonly videos: { readonly input: typeof zVideoGenerationRequest }
} = {
  videos: { input: zVideoGenerationRequest },
}

/** Union of valid openrouter-video endpoint ids. */
export type OpenrouterVideoEndpointId =
  keyof typeof openrouterVideoEndpointZodMap
