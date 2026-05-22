import type { ImagePart, MediaInputMetadata } from '@tanstack/ai'

/**
 * Map TanStack `imageInputs` onto fal.ai endpoint fields.
 *
 * fal endpoints use different field names for image-conditioned generation
 * (~80% use `image_url` for single; the rest use `image_urls`,
 * `reference_image_urls`, `mask_url`, `control_image_url`, etc.). Without
 * per-endpoint metadata we apply this heuristic:
 *
 * - parts with `metadata.role === 'mask'`         → `mask_url`        (single)
 * - parts with `metadata.role === 'control'`      → `control_image_url` (single)
 * - parts with `metadata.role === 'reference'`    → `reference_image_urls` (array)
 * - parts with `metadata.role === 'character'`    → `reference_image_urls` (array)
 * - remaining parts (no role, or unknown role):
 *     - exactly 1 part                            → `image_url`
 *     - >1 parts                                  → `image_urls`
 *
 * Users can always override the resulting field shape via `modelOptions`
 * (spread before these fields), or pass everything through `modelOptions`
 * directly when the heuristic doesn't match an obscure endpoint.
 *
 * This mapping is interim and will be replaced by a per-endpoint mapping
 * sourced from the `@fal-ai/schemas` library once it lands.
 */
export function mapImageInputsToFalFields(
  imageInputs?: ReadonlyArray<ImagePart<MediaInputMetadata>>,
): Record<string, unknown> {
  if (!imageInputs || imageInputs.length === 0) return {}

  const fields: Record<string, unknown> = {}

  const masks: Array<string> = []
  const controls: Array<string> = []
  const references: Array<string> = []
  const sources: Array<string> = []

  for (const part of imageInputs) {
    const url = imagePartToUrl(part)
    const role = part.metadata?.role
    switch (role) {
      case 'mask':
        masks.push(url)
        break
      case 'control':
        controls.push(url)
        break
      case 'reference':
      case 'character':
        references.push(url)
        break
      case 'start_frame':
      case 'end_frame':
        // Frame roles aren't meaningful for image generation; treat as the
        // primary source. Video adapter handles start/end framing.
        sources.push(url)
        break
      default:
        sources.push(url)
    }
  }

  if (masks.length > 1) {
    throw new Error(
      `fal: only one input with metadata.role === 'mask' is supported per request (received ${masks.length}).`,
    )
  }
  if (controls.length > 1) {
    throw new Error(
      `fal: only one input with metadata.role === 'control' is supported per request (received ${controls.length}).`,
    )
  }

  if (masks[0]) fields.mask_url = masks[0]
  if (controls[0]) fields.control_image_url = controls[0]
  if (references.length > 0) fields.reference_image_urls = references

  if (sources.length === 1) {
    fields.image_url = sources[0]
  } else if (sources.length > 1) {
    fields.image_urls = sources
  }

  return fields
}

/**
 * Map TanStack `imageInputs` onto fal.ai video-endpoint fields.
 *
 * Video endpoints often expose a start frame as `image_url` (76% of i2v
 * models) plus an optional `end_image_url`. Multi-reference video models
 * (Kling O3, Seedance reference-to-video) use `reference_image_urls` or
 * `image_urls`. Mapping:
 *
 * - `metadata.role === 'start_frame'`              → `start_image_url`
 * - `metadata.role === 'end_frame'`                → `end_image_url`
 * - `metadata.role === 'reference' | 'character'`  → `reference_image_urls`
 * - remaining parts (no role or unknown role):
 *     - exactly 1 part                             → `image_url`
 *     - >1 parts                                   → `image_urls`
 */
export function mapImageInputsToFalVideoFields(
  imageInputs?: ReadonlyArray<ImagePart<MediaInputMetadata>>,
): Record<string, unknown> {
  if (!imageInputs || imageInputs.length === 0) return {}

  const fields: Record<string, unknown> = {}

  const startFrames: Array<string> = []
  const endFrames: Array<string> = []
  const references: Array<string> = []
  const sources: Array<string> = []

  for (const part of imageInputs) {
    const url = imagePartToUrl(part)
    const role = part.metadata?.role
    switch (role) {
      case 'start_frame':
        startFrames.push(url)
        break
      case 'end_frame':
        endFrames.push(url)
        break
      case 'reference':
      case 'character':
        references.push(url)
        break
      default:
        sources.push(url)
    }
  }

  if (startFrames.length > 1) {
    throw new Error(
      `fal: only one input with metadata.role === 'start_frame' is supported (received ${startFrames.length}).`,
    )
  }
  if (endFrames.length > 1) {
    throw new Error(
      `fal: only one input with metadata.role === 'end_frame' is supported (received ${endFrames.length}).`,
    )
  }

  if (startFrames[0]) fields.start_image_url = startFrames[0]
  if (endFrames[0]) fields.end_image_url = endFrames[0]
  if (references.length > 0) fields.reference_image_urls = references

  if (sources.length === 1) {
    fields.image_url = sources[0]
  } else if (sources.length > 1) {
    fields.image_urls = sources
  }

  return fields
}

/**
 * Convert a TanStack ImagePart into a string suitable for fal's URL-based
 * input fields. URL sources pass through; data sources are emitted as a
 * `data:<mime>;base64,<value>` URI which fal endpoints accept on the wire.
 */
function imagePartToUrl(part: ImagePart<MediaInputMetadata>): string {
  if (part.source.type === 'url') return part.source.value
  return `data:${part.source.mimeType};base64,${part.source.value}`
}
