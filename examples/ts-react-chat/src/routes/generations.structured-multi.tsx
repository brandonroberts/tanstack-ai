import { useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { fetchServerSentEvents, useChat } from '@tanstack/ai-react'
import type { StructuredOutputPart } from '@tanstack/ai-client'
import {
  RecipeSchema,
  WeeklyPlanSchema,
  type Recipe,
  type WeeklyPlan,
  type SchemaName,
} from './api.structured-multi'

const SCHEMA_OPTIONS: ReadonlyArray<{
  value: SchemaName
  label: string
  prompt: string
}> = [
  {
    value: 'recipe',
    label: 'Recipe',
    prompt: 'A weeknight pasta dish for two',
  },
  {
    value: 'plan',
    label: 'Weekly plan',
    prompt: 'A focused week for learning TypeScript',
  },
]

/**
 * Phase 2 example: two schemas in one conversation. Each turn picks which
 * schema the assistant should respond against, and the resulting message's
 * structured-output part carries the chosen name as the discriminator.
 *
 * The render walks `messages` and branches on `part.schemaName`. Using
 * `getStructuredPart(message, 'recipe' | 'plan')` gives a typed view of the
 * part — `data` is narrowed against the schema in `outputSchemas`.
 */
function StructuredMultiPage() {
  const [input, setInput] = useState('')
  const [schema, setSchema] = useState<SchemaName>('recipe')

  const { messages, sendMessage, isLoading, getStructuredPart } = useChat({
    outputSchemas: { recipe: RecipeSchema, plan: WeeklyPlanSchema },
    connection: fetchServerSentEvents('/api/structured-multi'),
  })

  const handleSubmit = async (text: string, withSchema: SchemaName) => {
    if (!text.trim() || isLoading) return
    setInput('')
    await sendMessage(text.trim(), { schema: withSchema })
  }

  return (
    <div className="flex h-[calc(100vh-72px)] flex-col bg-gray-900 text-white">
      <div className="border-b border-orange-500/20 bg-gray-800 px-6 py-4">
        <h2 className="text-xl font-semibold">
          Structured Chat — Per-turn Schemas
        </h2>
        <p className="mt-1 text-sm text-gray-400">
          Pick a schema per turn. The assistant message's{' '}
          <code className="text-orange-400">structured-output</code> part
          carries the schema name as a discriminator; render code branches on it
          and reads typed <code className="text-orange-400">data</code> via{' '}
          <code className="text-orange-400">getStructuredPart</code>.
        </p>
      </div>

      <div className="flex-1 overflow-y-auto p-6">
        <div className="mx-auto max-w-3xl space-y-6">
          {messages.length === 0 && (
            <div className="text-sm text-gray-500">
              Try these:
              <ul className="mt-2 space-y-1">
                {SCHEMA_OPTIONS.map((opt) => (
                  <li key={opt.value}>
                    <button
                      onClick={() => {
                        setSchema(opt.value)
                        void handleSubmit(opt.prompt, opt.value)
                      }}
                      className="text-left text-orange-400 hover:text-orange-300"
                    >
                      <strong>{opt.label}:</strong> {opt.prompt}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {messages.map((m, i) => {
            if (m.role === 'user') {
              const text = m.parts
                .filter((p) => p.type === 'text')
                .map((p) => (p as { content: string }).content)
                .join('')
              return (
                <div key={i} className="space-y-1">
                  <div className="text-xs uppercase tracking-wider text-gray-500">
                    You
                  </div>
                  <div className="text-sm text-gray-200">{text}</div>
                </div>
              )
            }
            if (m.role !== 'assistant') return null

            const part = m.parts.find((p) => p.type === 'structured-output') as
              | StructuredOutputPart
              | undefined
            if (!part) {
              return (
                <div key={i} className="text-sm italic text-gray-500">
                  {isLoading ? 'Streaming…' : 'No response'}
                </div>
              )
            }

            if (part.schemaName === 'recipe') {
              const view = getStructuredPart!(m, 'recipe')
              return (
                <RecipeCard
                  key={i}
                  status={part.status}
                  recipe={
                    (view?.data ?? view?.partial ?? {}) as Partial<Recipe>
                  }
                />
              )
            }
            if (part.schemaName === 'plan') {
              const view = getStructuredPart!(m, 'plan')
              return (
                <PlanCard
                  key={i}
                  status={part.status}
                  plan={
                    (view?.data ?? view?.partial ?? {}) as Partial<WeeklyPlan>
                  }
                />
              )
            }
            return null
          })}
        </div>
      </div>

      <div className="border-t border-orange-500/20 bg-gray-800 px-6 py-4">
        <div className="mx-auto flex max-w-3xl gap-3">
          <select
            value={schema}
            onChange={(e) => setSchema(e.target.value as SchemaName)}
            disabled={isLoading}
            className="rounded-lg border border-orange-500/20 bg-gray-900 px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-orange-500/50 disabled:opacity-50"
          >
            {SCHEMA_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault()
                void handleSubmit(input, schema)
              }
            }}
            placeholder="ask for a recipe or a weekly plan…"
            disabled={isLoading}
            className="flex-1 rounded-lg border border-orange-500/20 bg-gray-900 px-4 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500/50 disabled:opacity-50"
          />
          <button
            onClick={() => handleSubmit(input, schema)}
            disabled={!input.trim() || isLoading}
            className="rounded-lg bg-orange-600 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-orange-700 disabled:bg-gray-700 disabled:text-gray-500"
          >
            {isLoading ? 'Streaming…' : 'Send'}
          </button>
        </div>
      </div>
    </div>
  )
}

function RecipeCard({
  status,
  recipe,
}: {
  status: 'streaming' | 'complete' | 'error'
  recipe: Partial<Recipe>
}) {
  return (
    <div
      className={`rounded-lg border p-4 ${
        status === 'streaming'
          ? 'border-orange-500/40 bg-gray-800/50'
          : status === 'error'
            ? 'border-red-500/40 bg-red-500/5'
            : 'border-gray-700 bg-gray-800/50'
      }`}
    >
      <p className="mb-1 text-xs uppercase tracking-wider text-orange-400">
        Recipe
      </p>
      <h3 className="text-lg font-semibold">{recipe.title || 'Generating…'}</h3>
      {recipe.cuisine && (
        <p className="text-xs text-gray-400">
          {recipe.cuisine}
          {recipe.servings ? ` · serves ${recipe.servings}` : ''}
        </p>
      )}
      {recipe.ingredients && recipe.ingredients.length > 0 && (
        <ul className="mt-3 space-y-0.5 text-sm text-gray-200">
          {recipe.ingredients.map((ing, i) => (
            <li key={i}>
              {ing?.amount} {ing?.item}
            </li>
          ))}
        </ul>
      )}
      {recipe.steps && recipe.steps.length > 0 && (
        <ol className="mt-3 list-inside list-decimal space-y-1 text-sm text-gray-200">
          {recipe.steps.map((s, i) => (
            <li key={i}>{s}</li>
          ))}
        </ol>
      )}
    </div>
  )
}

function PlanCard({
  status,
  plan,
}: {
  status: 'streaming' | 'complete' | 'error'
  plan: Partial<WeeklyPlan>
}) {
  return (
    <div
      className={`rounded-lg border p-4 ${
        status === 'streaming'
          ? 'border-orange-500/40 bg-gray-800/50'
          : status === 'error'
            ? 'border-red-500/40 bg-red-500/5'
            : 'border-gray-700 bg-gray-800/50'
      }`}
    >
      <p className="mb-1 text-xs uppercase tracking-wider text-orange-400">
        Weekly plan
      </p>
      <h3 className="text-lg font-semibold">{plan.title || 'Generating…'}</h3>
      {plan.days && plan.days.length > 0 && (
        <div className="mt-3 space-y-2">
          {plan.days.map((day, i) => (
            <div key={i}>
              <p className="text-sm font-medium text-gray-200">
                {day?.day} <span className="text-gray-400">— {day?.focus}</span>
              </p>
              {day?.tasks && day.tasks.length > 0 && (
                <ul className="mt-1 list-inside list-disc text-sm text-gray-300">
                  {day.tasks.map((t, j) => (
                    <li key={j}>{t}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export const Route = createFileRoute('/generations/structured-multi')({
  component: StructuredMultiPage,
})
