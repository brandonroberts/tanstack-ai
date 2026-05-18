---
'@tanstack/ai': minor
'@tanstack/ai-client': minor
'@tanstack/ai-react': minor
---

feat: per-turn schemas for structured-output chat

`useChat` now accepts an `outputSchemas: Record<string, SchemaInput>` map and
`sendMessage(content, { schema: 'name' })` to pick which schema the assistant
should respond against on a per-turn basis. Each assistant message's
`structured-output` part carries the chosen `schemaName` as a runtime
discriminator, and the new `getStructuredPart(message, name)` helper returns
a typed view of the part for that schema (`data` and `partial` narrowed
against `InferSchemaType<TSchemas[name]>`).

Server-side, `chat()` accepts an optional `schemaName` field that propagates
into the `structured-output.start` and `structured-output.complete` events,
so the client-side StreamProcessor stamps the discriminator onto the part
without any extra plumbing.

Useful when one chat surface produces multiple kinds of structured artifacts
(e.g. a single assistant that can return either a recipe or a weekly plan
depending on the user's request). Builds on the message-part design from the
previous release; single-schema `outputSchema` flows continue to work unchanged.

A new example demonstrating this pattern is at
`/generations/structured-multi` in the `ts-react-chat` example.
