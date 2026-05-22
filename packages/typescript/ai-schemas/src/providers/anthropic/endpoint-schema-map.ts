// AUTO-GENERATED - Do not edit manually
// Generated via scripts/generate-endpoint-maps.ts

import {
  BetaCountMessageTokensParamsSchema,
  BetaCountMessageTokensResponseSchema,
  BetaCreateMessageBatchParamsSchema,
  BetaCreateMessageParamsSchema,
  BetaCreateUserProfileRequestSchema,
  BetaEnvironmentSchema,
  BetaManagedAgentsAddSessionResourceParamsSchema,
  BetaManagedAgentsAddSessionResourceSchema,
  BetaManagedAgentsAgentSchema,
  BetaManagedAgentsCreateAgentParamsSchema,
  BetaManagedAgentsCreateCredentialRequestBodySchema,
  BetaManagedAgentsCreateMemoryParamsSchema,
  BetaManagedAgentsCreateMemoryStoreRequestSchema,
  BetaManagedAgentsCreateMemoryStoreResponseSchema,
  BetaManagedAgentsCreateSessionParamsSchema,
  BetaManagedAgentsCreateVaultRequestSchema,
  BetaManagedAgentsCredentialSchema,
  BetaManagedAgentsMemorySchema,
  BetaManagedAgentsSendSessionEventsParamsSchema,
  BetaManagedAgentsSendSessionEventsSchema,
  BetaManagedAgentsSessionSchema,
  BetaManagedAgentsUpdateAgentParamsSchema,
  BetaManagedAgentsUpdateCredentialRequestBodySchema,
  BetaManagedAgentsUpdateMemoryParamsSchema,
  BetaManagedAgentsUpdateMemoryStoreRequestBodySchema,
  BetaManagedAgentsUpdateMemoryStoreResponseSchema,
  BetaManagedAgentsUpdateSessionParamsSchema,
  BetaManagedAgentsUpdateSessionResourceParamsSchema,
  BetaManagedAgentsUpdateSessionResourceSchema,
  BetaManagedAgentsUpdateVaultRequestBodySchema,
  BetaManagedAgentsVaultSchema,
  BetaMessageBatchSchema,
  BetaMessageSchema,
  BetaPublicEnvironmentCreateRequestSchema,
  BetaPublicEnvironmentUpdateRequestSchema,
  BetaSelfHostedWorkSchema,
  BetaSelfHostedWorkStopRequestSchema,
  BetaSelfHostedWorkUpdateRequestSchema,
  BetaUpdateUserProfileRequestBodySchema,
  BetaUserProfileSchema,
  CompletionRequestSchema,
  CompletionResponseSchema,
  CountMessageTokensParamsSchema,
  CountMessageTokensResponseSchema,
  CreateMessageBatchParamsSchema,
  CreateMessageParamsSchema,
  MessageBatchSchema,
  MessageSchema,
} from './schemas.gen.js'

/**
 * Map of anthropic endpoint id -> self-contained JSON Schemas.
 * Each input/output schema bundles its $ref closure under `$defs`, so it
 * can be handed directly to LLM tool APIs or `z.fromJSONSchema`.
 */
export const anthropicEndpointSchemaMap: {
  readonly 'v1/agents?beta=true': {
    readonly input: typeof BetaManagedAgentsCreateAgentParamsSchema
    readonly output: typeof BetaManagedAgentsAgentSchema
  }
  readonly 'v1/agents/{agent_id}?beta=true': {
    readonly input: typeof BetaManagedAgentsUpdateAgentParamsSchema
    readonly output: typeof BetaManagedAgentsAgentSchema
  }
  readonly 'v1/complete': {
    readonly input: typeof CompletionRequestSchema
    readonly output: typeof CompletionResponseSchema
  }
  readonly 'v1/environments?beta=true': {
    readonly input: typeof BetaPublicEnvironmentCreateRequestSchema
    readonly output: typeof BetaEnvironmentSchema
  }
  readonly 'v1/environments/{environment_id}?beta=true': {
    readonly input: typeof BetaPublicEnvironmentUpdateRequestSchema
    readonly output: typeof BetaEnvironmentSchema
  }
  readonly 'v1/environments/{environment_id}/work/{work_id}?beta=true': {
    readonly input: typeof BetaSelfHostedWorkUpdateRequestSchema
    readonly output: typeof BetaSelfHostedWorkSchema
  }
  readonly 'v1/environments/{environment_id}/work/{work_id}/stop?beta=true': {
    readonly input: typeof BetaSelfHostedWorkStopRequestSchema
    readonly output: typeof BetaSelfHostedWorkSchema
  }
  readonly 'v1/memory_stores?beta=true': {
    readonly input: typeof BetaManagedAgentsCreateMemoryStoreRequestSchema
    readonly output: typeof BetaManagedAgentsCreateMemoryStoreResponseSchema
  }
  readonly 'v1/memory_stores/{memory_store_id}?beta=true': {
    readonly input: typeof BetaManagedAgentsUpdateMemoryStoreRequestBodySchema
    readonly output: typeof BetaManagedAgentsUpdateMemoryStoreResponseSchema
  }
  readonly 'v1/memory_stores/{memory_store_id}/memories?beta=true': {
    readonly input: typeof BetaManagedAgentsCreateMemoryParamsSchema
    readonly output: typeof BetaManagedAgentsMemorySchema
  }
  readonly 'v1/memory_stores/{memory_store_id}/memories/{memory_id}?beta=true': {
    readonly input: typeof BetaManagedAgentsUpdateMemoryParamsSchema
    readonly output: typeof BetaManagedAgentsMemorySchema
  }
  readonly 'v1/messages': {
    readonly input: typeof CreateMessageParamsSchema
    readonly output: typeof MessageSchema
  }
  readonly 'v1/messages?beta=true': {
    readonly input: typeof BetaCreateMessageParamsSchema
    readonly output: typeof BetaMessageSchema
  }
  readonly 'v1/messages/batches': {
    readonly input: typeof CreateMessageBatchParamsSchema
    readonly output: typeof MessageBatchSchema
  }
  readonly 'v1/messages/batches?beta=true': {
    readonly input: typeof BetaCreateMessageBatchParamsSchema
    readonly output: typeof BetaMessageBatchSchema
  }
  readonly 'v1/messages/count_tokens': {
    readonly input: typeof CountMessageTokensParamsSchema
    readonly output: typeof CountMessageTokensResponseSchema
  }
  readonly 'v1/messages/count_tokens?beta=true': {
    readonly input: typeof BetaCountMessageTokensParamsSchema
    readonly output: typeof BetaCountMessageTokensResponseSchema
  }
  readonly 'v1/sessions?beta=true': {
    readonly input: typeof BetaManagedAgentsCreateSessionParamsSchema
    readonly output: typeof BetaManagedAgentsSessionSchema
  }
  readonly 'v1/sessions/{session_id}?beta=true': {
    readonly input: typeof BetaManagedAgentsUpdateSessionParamsSchema
    readonly output: typeof BetaManagedAgentsSessionSchema
  }
  readonly 'v1/sessions/{session_id}/events?beta=true': {
    readonly input: typeof BetaManagedAgentsSendSessionEventsParamsSchema
    readonly output: typeof BetaManagedAgentsSendSessionEventsSchema
  }
  readonly 'v1/sessions/{session_id}/resources?beta=true': {
    readonly input: typeof BetaManagedAgentsAddSessionResourceParamsSchema
    readonly output: typeof BetaManagedAgentsAddSessionResourceSchema
  }
  readonly 'v1/sessions/{session_id}/resources/{resource_id}?beta=true': {
    readonly input: typeof BetaManagedAgentsUpdateSessionResourceParamsSchema
    readonly output: typeof BetaManagedAgentsUpdateSessionResourceSchema
  }
  readonly 'v1/user_profiles?beta=true': {
    readonly input: typeof BetaCreateUserProfileRequestSchema
    readonly output: typeof BetaUserProfileSchema
  }
  readonly 'v1/user_profiles/{user_profile_id}?beta=true': {
    readonly input: typeof BetaUpdateUserProfileRequestBodySchema
    readonly output: typeof BetaUserProfileSchema
  }
  readonly 'v1/vaults?beta=true': {
    readonly input: typeof BetaManagedAgentsCreateVaultRequestSchema
    readonly output: typeof BetaManagedAgentsVaultSchema
  }
  readonly 'v1/vaults/{vault_id}?beta=true': {
    readonly input: typeof BetaManagedAgentsUpdateVaultRequestBodySchema
    readonly output: typeof BetaManagedAgentsVaultSchema
  }
  readonly 'v1/vaults/{vault_id}/credentials?beta=true': {
    readonly input: typeof BetaManagedAgentsCreateCredentialRequestBodySchema
    readonly output: typeof BetaManagedAgentsCredentialSchema
  }
  readonly 'v1/vaults/{vault_id}/credentials/{credential_id}?beta=true': {
    readonly input: typeof BetaManagedAgentsUpdateCredentialRequestBodySchema
    readonly output: typeof BetaManagedAgentsCredentialSchema
  }
} = {
  'v1/agents?beta=true': {
    input: BetaManagedAgentsCreateAgentParamsSchema,
    output: BetaManagedAgentsAgentSchema,
  },
  'v1/agents/{agent_id}?beta=true': {
    input: BetaManagedAgentsUpdateAgentParamsSchema,
    output: BetaManagedAgentsAgentSchema,
  },
  'v1/complete': {
    input: CompletionRequestSchema,
    output: CompletionResponseSchema,
  },
  'v1/environments?beta=true': {
    input: BetaPublicEnvironmentCreateRequestSchema,
    output: BetaEnvironmentSchema,
  },
  'v1/environments/{environment_id}?beta=true': {
    input: BetaPublicEnvironmentUpdateRequestSchema,
    output: BetaEnvironmentSchema,
  },
  'v1/environments/{environment_id}/work/{work_id}?beta=true': {
    input: BetaSelfHostedWorkUpdateRequestSchema,
    output: BetaSelfHostedWorkSchema,
  },
  'v1/environments/{environment_id}/work/{work_id}/stop?beta=true': {
    input: BetaSelfHostedWorkStopRequestSchema,
    output: BetaSelfHostedWorkSchema,
  },
  'v1/memory_stores?beta=true': {
    input: BetaManagedAgentsCreateMemoryStoreRequestSchema,
    output: BetaManagedAgentsCreateMemoryStoreResponseSchema,
  },
  'v1/memory_stores/{memory_store_id}?beta=true': {
    input: BetaManagedAgentsUpdateMemoryStoreRequestBodySchema,
    output: BetaManagedAgentsUpdateMemoryStoreResponseSchema,
  },
  'v1/memory_stores/{memory_store_id}/memories?beta=true': {
    input: BetaManagedAgentsCreateMemoryParamsSchema,
    output: BetaManagedAgentsMemorySchema,
  },
  'v1/memory_stores/{memory_store_id}/memories/{memory_id}?beta=true': {
    input: BetaManagedAgentsUpdateMemoryParamsSchema,
    output: BetaManagedAgentsMemorySchema,
  },
  'v1/messages': { input: CreateMessageParamsSchema, output: MessageSchema },
  'v1/messages?beta=true': {
    input: BetaCreateMessageParamsSchema,
    output: BetaMessageSchema,
  },
  'v1/messages/batches': {
    input: CreateMessageBatchParamsSchema,
    output: MessageBatchSchema,
  },
  'v1/messages/batches?beta=true': {
    input: BetaCreateMessageBatchParamsSchema,
    output: BetaMessageBatchSchema,
  },
  'v1/messages/count_tokens': {
    input: CountMessageTokensParamsSchema,
    output: CountMessageTokensResponseSchema,
  },
  'v1/messages/count_tokens?beta=true': {
    input: BetaCountMessageTokensParamsSchema,
    output: BetaCountMessageTokensResponseSchema,
  },
  'v1/sessions?beta=true': {
    input: BetaManagedAgentsCreateSessionParamsSchema,
    output: BetaManagedAgentsSessionSchema,
  },
  'v1/sessions/{session_id}?beta=true': {
    input: BetaManagedAgentsUpdateSessionParamsSchema,
    output: BetaManagedAgentsSessionSchema,
  },
  'v1/sessions/{session_id}/events?beta=true': {
    input: BetaManagedAgentsSendSessionEventsParamsSchema,
    output: BetaManagedAgentsSendSessionEventsSchema,
  },
  'v1/sessions/{session_id}/resources?beta=true': {
    input: BetaManagedAgentsAddSessionResourceParamsSchema,
    output: BetaManagedAgentsAddSessionResourceSchema,
  },
  'v1/sessions/{session_id}/resources/{resource_id}?beta=true': {
    input: BetaManagedAgentsUpdateSessionResourceParamsSchema,
    output: BetaManagedAgentsUpdateSessionResourceSchema,
  },
  'v1/user_profiles?beta=true': {
    input: BetaCreateUserProfileRequestSchema,
    output: BetaUserProfileSchema,
  },
  'v1/user_profiles/{user_profile_id}?beta=true': {
    input: BetaUpdateUserProfileRequestBodySchema,
    output: BetaUserProfileSchema,
  },
  'v1/vaults?beta=true': {
    input: BetaManagedAgentsCreateVaultRequestSchema,
    output: BetaManagedAgentsVaultSchema,
  },
  'v1/vaults/{vault_id}?beta=true': {
    input: BetaManagedAgentsUpdateVaultRequestBodySchema,
    output: BetaManagedAgentsVaultSchema,
  },
  'v1/vaults/{vault_id}/credentials?beta=true': {
    input: BetaManagedAgentsCreateCredentialRequestBodySchema,
    output: BetaManagedAgentsCredentialSchema,
  },
  'v1/vaults/{vault_id}/credentials/{credential_id}?beta=true': {
    input: BetaManagedAgentsUpdateCredentialRequestBodySchema,
    output: BetaManagedAgentsCredentialSchema,
  },
}
