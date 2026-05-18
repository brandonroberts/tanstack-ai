import { createFileRoute } from '@tanstack/react-router'
import {
  chat,
  chatParamsFromRequestBody,
  toServerSentEventsResponse,
} from '@tanstack/ai'
import { openaiText } from '@tanstack/ai-openai'
import { z } from 'zod'
import type { StreamChunk } from '@tanstack/ai'

// Two schemas the assistant can produce, picked per turn by the client via
// `sendMessage(content, { schema: 'recipe' | 'plan' })`. The route looks up
// the schema by name from `forwardedProps.schemaName` and passes it to
// `chat({ outputSchema, schemaName })` so the structured-output events
// carry the discriminator down to the client part.

export const RecipeSchema = z.object({
  title: z.string(),
  cuisine: z.string(),
  servings: z.number().int().min(1),
  ingredients: z.array(z.object({ item: z.string(), amount: z.string() })),
  steps: z.array(z.string()),
})
export type Recipe = z.infer<typeof RecipeSchema>

export const WeeklyPlanSchema = z.object({
  title: z.string(),
  days: z.array(
    z.object({
      day: z.string(),
      focus: z.string(),
      tasks: z.array(z.string()),
    }),
  ),
})
export type WeeklyPlan = z.infer<typeof WeeklyPlanSchema>

// The canonical map. Keys are the discriminator strings that round-trip on
// the wire; values are the schemas the orchestrator uses for validation.
const SCHEMAS = {
  recipe: RecipeSchema,
  plan: WeeklyPlanSchema,
} as const

export type SchemaName = keyof typeof SCHEMAS

const SYSTEM_PROMPT = `You produce one of two structured artifacts each turn, depending on the user's request: a recipe or a weekly plan. Always emit a single JSON object matching the requested schema. Stay terse.`

export const Route = createFileRoute('/api/structured-multi')({
  server: {
    handlers: {
      POST: async ({ request }) => {
        if (request.signal.aborted) {
          return new Response(null, { status: 499 })
        }

        const abortController = new AbortController()
        request.signal.addEventListener('abort', () => abortController.abort())

        let params
        try {
          params = await chatParamsFromRequestBody(await request.json())
        } catch (error) {
          return new Response(
            error instanceof Error ? error.message : 'Bad request',
            { status: 400 },
          )
        }

        // Pick the schema based on the client-supplied schemaName. Default
        // to `recipe` if the client didn't specify (e.g. opened the page and
        // sent a message before picking from the selector). An invalid name
        // is treated as a 400 so the client knows it asked for something
        // the route doesn't know how to produce.
        const rawRequested = params.forwardedProps.schemaName
        const requested =
          typeof rawRequested === 'string' ? rawRequested : undefined
        if (requested && !(requested in SCHEMAS)) {
          return new Response(
            JSON.stringify({ error: `unknown schema: ${requested}` }),
            { status: 400, headers: { 'Content-Type': 'application/json' } },
          )
        }
        const schemaName: SchemaName =
          requested && requested in SCHEMAS
            ? (requested as SchemaName)
            : 'recipe'
        const outputSchema = SCHEMAS[schemaName]

        try {
          const stream = chat({
            adapter: openaiText('gpt-4o'),
            messages: params.messages,
            systemPrompts: [SYSTEM_PROMPT],
            outputSchema,
            schemaName,
            stream: true,
            threadId: params.threadId,
            runId: params.runId,
            abortController,
          }) as AsyncIterable<StreamChunk>
          return toServerSentEventsResponse(stream, { abortController })
        } catch (error) {
          const message =
            error instanceof Error ? error.message : 'An error occurred'
          console.error('[api/structured-multi] Error:', error)
          return new Response(JSON.stringify({ error: message }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
          })
        }
      },
    },
  },
})
