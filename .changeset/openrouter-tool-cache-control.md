---
'@tanstack/ai-openrouter': patch
---

Forward a tool's `metadata.cacheControl` breakpoint to OpenRouter so Anthropic
prompt caching of tool definitions works through the adapter. The function-tool
converter now emits the SDK's camelCase `cacheControl` field (which serializes
to `cache_control` on the wire); previously it was dropped, so caching a leading
tool definition was impossible over OpenRouter. Additive and non-breaking — the
field is only present when supplied, mirroring `@tanstack/ai-anthropic`.
