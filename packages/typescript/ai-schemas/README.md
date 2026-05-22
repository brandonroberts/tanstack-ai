# @tanstack/ai-schemas

Runtime schemas for AI provider endpoints. Ships **JSON Schema** definitions for tooling plus **Zod** schemas for runtime validation — no hand-maintained TypeScript types. Derive types from Zod with `z.infer<typeof someSchema>`.

Schemas are generated nightly from each provider's official OpenAPI spec (or equivalent), so the package tracks upstream changes automatically.

## Install

```bash
pnpm add @tanstack/ai-schemas
# Zod is an optional peer; only required if you import from `./zod` or `./zod/{provider}`.
pnpm add zod
```

## Providers covered

| Provider   | Source                                                                          | Notes                                                |
| ---------- | ------------------------------------------------------------------------------- | ---------------------------------------------------- |
| OpenAI     | `github.com/openai/openai-openapi` (raw `openapi.yaml`)                         | Public, no API key required.                         |
| Anthropic  | Official OpenAPI from `anthropic-sdk-typescript` repo                           | Public.                                              |
| Gemini     | `generativelanguage.googleapis.com/$discovery/rest?version=v1beta`              | Google Discovery doc converted to OpenAPI in-pipeline. |
| ElevenLabs | `api.elevenlabs.io/openapi.json`                                                | Public.                                              |
| FAL        | `api.fal.ai/v1/models?status=active&expand=openapi-3.0` (per-model OpenAPI)     | Needs `FAL_KEY` to fetch. Per-category split.        |

OpenAI-compatible providers (Groq, xAI/Grok) reuse the OpenAI schemas.

## Entry points

ES modules only, per-provider subpath exports:

```ts
// Default entry — namespaced JSON Schemas across providers.
import { OpenAi, Anthropic, Gemini, Fal, ElevenLabs } from '@tanstack/ai-schemas'

// Per-provider JSON Schemas (no `zod` peer required).
import { openaiEndpointSchemaMap } from '@tanstack/ai-schemas/schemas/openai'

// Per-provider Zod (requires `zod ^4`).
import { openaiEndpointZodMap } from '@tanstack/ai-schemas/zod/openai'

// OpenAI structured-outputs strict-mode helper.
import { toOpenAIStrict } from '@tanstack/ai-schemas/openai-strict'
```

For multi-category providers (currently just FAL), schemas are further split:

```ts
import { videoEndpointZodMap } from '@tanstack/ai-schemas/zod/fal-video'
import { imageEndpointSchemaMap } from '@tanstack/ai-schemas/schemas/fal-image'
```

## Examples

Validate a video generation request before hitting the network:

```ts
import { videoEndpointZodMap } from '@tanstack/ai-schemas/zod/fal-video'

const result = videoEndpointZodMap[
  'fal-ai/kling-video/o3/pro/text-to-video'
].input.safeParse({
  prompt: 'A mecha lands on the ground to save the city, in anime style',
  duration: '8',
  aspect_ratio: '9:16',
})

if (!result.success) console.error(result.error.issues)
```

Discover what a model supports (build a duration picker):

```ts
import { KlingVideoO3ProTextToVideoInputSchema } from '@tanstack/ai-schemas/schemas/fal-video'

KlingVideoO3ProTextToVideoInputSchema.properties.duration.enum
// ['3', '4', …, '15']
```

## Bundle size and tree-shaking

The package is `sideEffects: false` and JSON Schemas ship self-contained — each schema bundles its `$ref` closure under `$defs`. Importing one schema pulls only that schema's transitive closure, not the whole category. See the [fal-ai/schemas reference](https://github.com/fal-ai/fal-js/pull/212) for the design rationale.

## How updates work

The `.github/workflows/sync-schemas.yml` workflow runs nightly:

1. `fetch-schemas` — pulls upstream OpenAPI specs (or equivalents) per provider.
2. `generate-schemas` — runs `@hey-api/openapi-ts` to emit per-provider `schemas.gen.ts` (JSON Schemas) and `zod.gen.ts` (Zod).
3. `generate-endpoint-maps` — emits endpoint-id-keyed maps and bundles `$defs` closures into each JSON Schema.

If any provider's spec changes, the workflow bumps the package version, creates a changeset, and opens an automated PR.

## Local development

```bash
# Pull every provider's spec.
pnpm fetch-schemas

# Pull a single provider.
pnpm fetch-schemas --provider=openai

# Full regeneration.
pnpm update-schemas
```

`FAL_KEY` must be set in your environment to fetch FAL specs.
