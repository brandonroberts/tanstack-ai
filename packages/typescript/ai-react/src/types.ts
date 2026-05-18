import type {
  AnyClientTool,
  InferSchemaType,
  ModelMessage,
  SchemaInput,
} from '@tanstack/ai'
import type {
  ChatClientOptions,
  ChatClientState,
  ChatRequestBody,
  ConnectionStatus,
  MultimodalContent,
  UIMessage,
} from '@tanstack/ai-client'

// Re-export types from ai-client
export type { ChatRequestBody, MultimodalContent, UIMessage }

/**
 * Recursive partial — every property and every nested array element is optional.
 * Used to type the in-flight `partial` value the hook exposes while a structured
 * output stream is still arriving (the JSON has shape but is incomplete).
 */
export type DeepPartial<T> =
  T extends ReadonlyArray<infer U>
    ? Array<DeepPartial<U>>
    : T extends object
      ? { [K in keyof T]?: DeepPartial<T[K]> }
      : T

/**
 * Options for the useChat hook.
 *
 * This extends ChatClientOptions but omits the state change callbacks that are
 * managed internally by React state:
 * - `onMessagesChange` - Managed by React state (exposed as `messages`)
 * - `onLoadingChange` - Managed by React state (exposed as `isLoading`)
 * - `onErrorChange` - Managed by React state (exposed as `error`)
 * - `onStatusChange` - Managed by React state (exposed as `status`)
 *
 * All other callbacks (onResponse, onChunk, onFinish, onError) are
 * passed through to the underlying ChatClient and can be used for side effects.
 *
 * When `outputSchema` is supplied, the hook returns a typed `partial` (live
 * progressive object, updated from `TEXT_MESSAGE_CONTENT` deltas via
 * `parsePartialJSON`) and `final` (validated terminal payload from the
 * `structured-output.complete` event). The schema is used purely for type
 * inference on the client — server-side validation still runs against the
 * schema you pass to `chat({ outputSchema })` on the server route.
 *
 * Note: Connection and body changes will recreate the ChatClient instance.
 * To update these options, remount the component or use a key prop.
 */
/**
 * A record of named schemas, used to multiplex per-turn structured-output
 * shapes in one conversation. Each `sendMessage` call can pick which schema
 * the assistant should respond against; the resulting `structured-output`
 * part carries the name as `schemaName` so render code can narrow.
 */
export type SchemaMap = Record<string, SchemaInput>

export type UseChatOptions<
  TTools extends ReadonlyArray<AnyClientTool> = any,
  TSchema extends SchemaInput | undefined = undefined,
  TSchemas extends SchemaMap | undefined = undefined,
> = Omit<
  ChatClientOptions<TTools>,
  | 'onMessagesChange'
  | 'onLoadingChange'
  | 'onErrorChange'
  | 'onStatusChange'
  | 'onSubscriptionChange'
  | 'onConnectionStatusChange'
  | 'onSessionGeneratingChange'
> & {
  /**
   * Opt into mount-time live subscription behavior.
   * When enabled, the hook subscribes on mount and unsubscribes on unmount.
   */
  live?: boolean
  /**
   * Standard-schema-compatible schema (Zod, Valibot, ArkType, or a plain JSON
   * Schema). Used to infer the shape of `partial` and `final` in the return.
   * The schema is **not** sent to the server — server-side validation runs
   * against the schema passed to `chat({ outputSchema })` on the server route.
   */
  outputSchema?: TSchema
  /**
   * Map of named schemas for per-turn structured output. Pair with
   * `sendMessage(content, { schema: 'name' })` to pick which schema the
   * assistant should respond against for that turn. The structured-output
   * part on the resulting assistant message carries `schemaName: 'name'` so
   * render code can narrow on the discriminator.
   *
   * Mutually exclusive with `outputSchema` in practice; if both are set,
   * `outputSchemas` wins at the type level for narrowing and `sendMessage`'s
   * `schema` option becomes available.
   */
  outputSchemas?: TSchemas
}

/**
 * Discriminated return shape: when `outputSchema` is supplied, the hook adds
 * typed `partial` / `final` fields; when it is omitted (default), the return
 * is unchanged.
 */
export type UseChatReturn<
  TTools extends ReadonlyArray<AnyClientTool> = any,
  TSchema extends SchemaInput | undefined = undefined,
  TSchemas extends SchemaMap | undefined = undefined,
> = BaseUseChatReturn<TTools, TSchemas> &
  (TSchema extends SchemaInput
    ? {
        /**
         * Live, progressively-parsed structured output. Updated from
         * `TEXT_MESSAGE_CONTENT` deltas via `parsePartialJSON` while the stream
         * is still arriving, and snapped to the validated payload when
         * `structured-output.complete` fires. Resets on every new run
         * (`sendMessage` / `reload`).
         */
        partial: DeepPartial<InferSchemaType<TSchema>>
        /**
         * Final, schema-validated structured output. `null` until the terminal
         * `structured-output.complete` event arrives. Resets on every new run.
         */
        final: InferSchemaType<TSchema> | null
      }
    : Record<never, never>)

/**
 * Typed view of a `structured-output` part for a specific named schema. The
 * `partial` and `data` fields are narrowed against the schema's inferred
 * type, so render code can read them without manual casts.
 */
export interface TypedStructuredPart<TSchema extends SchemaInput> {
  type: 'structured-output'
  status: 'streaming' | 'complete' | 'error'
  schemaName: string
  raw: string
  reasoning?: string
  errorMessage?: string
  partial?: DeepPartial<InferSchemaType<TSchema>>
  data?: InferSchemaType<TSchema>
}

interface BaseUseChatReturn<
  TTools extends ReadonlyArray<AnyClientTool> = any,
  TSchemas extends SchemaMap | undefined = undefined,
> {
  /**
   * Current messages in the conversation
   */
  messages: Array<UIMessage<TTools>>

  /**
   * Look up a typed `structured-output` part on a message by its schemaName.
   * Returns `undefined` if the message has no structured-output part, or if
   * the part's `schemaName` doesn't match. The returned view's `data` and
   * `partial` are narrowed against the corresponding schema in `outputSchemas`.
   *
   * Only available when `outputSchemas` was supplied at hook creation.
   */
  getStructuredPart: TSchemas extends SchemaMap
    ? <TKey extends keyof TSchemas & string>(
        message: UIMessage<TTools>,
        schemaName: TKey,
      ) => TypedStructuredPart<NonNullable<TSchemas[TKey]>> | undefined
    : undefined

  /**
   * Send a message and get a response.
   * Can be a simple string or multimodal content with images, audio, etc.
   *
   * When the hook was created with `outputSchemas`, pass `{ schema: 'name' }`
   * to pick which named schema the assistant should respond against for
   * this turn. The resulting assistant message's `structured-output` part
   * will carry `schemaName: 'name'`.
   */
  sendMessage: (
    content: string | MultimodalContent,
    options?: TSchemas extends SchemaMap
      ? { schema?: keyof TSchemas & string }
      : { schema?: never },
  ) => Promise<void>

  /**
   * Append a message to the conversation
   */
  append: (message: ModelMessage | UIMessage<TTools>) => Promise<void>

  /**
   * Add the result of a client-side tool execution
   */
  addToolResult: (result: {
    toolCallId: string
    tool: string
    output: any
    state?: 'output-available' | 'output-error'
    errorText?: string
  }) => Promise<void>

  /**
   * Respond to a tool approval request
   */
  addToolApprovalResponse: (response: {
    id: string // approval.id, not toolCallId
    approved: boolean
  }) => Promise<void>

  /**
   * Reload the last assistant message
   */
  reload: () => Promise<void>

  /**
   * Stop the current response generation
   */
  stop: () => void

  /**
   * Whether a response is currently being generated
   */
  isLoading: boolean

  /**
   * Current error, if any
   */
  error: Error | undefined

  /**
   * Current status of the chat client
   */
  status: ChatClientState

  /**
   * Whether the subscription loop is currently active
   */
  isSubscribed: boolean

  /**
   * Current connection lifecycle status
   */
  connectionStatus: ConnectionStatus

  /**
   * Whether the shared session is actively generating.
   * Derived from stream run events (RUN_STARTED / RUN_FINISHED / RUN_ERROR).
   * Unlike `isLoading` (request-local), this reflects shared generation
   * activity visible to all subscribers (e.g. across tabs/devices).
   */
  sessionGenerating: boolean

  /**
   * Set messages manually
   */
  setMessages: (messages: Array<UIMessage<TTools>>) => void

  /**
   * Clear all messages
   */
  clear: () => void
}

// Note: createChatClientOptions and InferChatMessages are now in @tanstack/ai-client
// and re-exported from there for convenience
