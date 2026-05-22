---
'@tanstack/ai-schemas': minor
---

Initial release of `@tanstack/ai-schemas` — JSON Schema and Zod schemas for AI provider endpoints, generated nightly from upstream OpenAPI specs.

Covers OpenAI, Anthropic, Gemini, ElevenLabs, and FAL. Architecture ported from fal-ai/fal-js PR #212; extended to every provider that publishes an OpenAPI spec.

Sources:

- OpenAI: `github.com/openai/openai-openapi`
- Anthropic: `docs.anthropic.com/openapi.json`
- Gemini: Google Generative Language Discovery doc, converted to OpenAPI in-pipeline
- ElevenLabs: `api.elevenlabs.io/openapi.json`
- FAL: per-model OpenAPI from the FAL models API (requires `FAL_KEY`)

The `.github/workflows/sync-schemas.yml` workflow runs daily and opens a PR when any provider's spec changes. Resolves #619.
