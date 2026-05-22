// AUTO-GENERATED - Do not edit manually
// Generated via scripts/generate-endpoint-maps.ts

import {
  zBetaCountMessageTokensParams,
  zBetaCountMessageTokensResponse,
  zBetaCreateMessageBatchParams,
  zBetaCreateMessageParams,
  zBetaCreateUserProfileRequest,
  zBetaEnvironment,
  zBetaManagedAgentsAddSessionResource,
  zBetaManagedAgentsAddSessionResourceParams,
  zBetaManagedAgentsAgent,
  zBetaManagedAgentsCreateAgentParams,
  zBetaManagedAgentsCreateCredentialRequestBody,
  zBetaManagedAgentsCreateMemoryParams,
  zBetaManagedAgentsCreateMemoryStoreRequest,
  zBetaManagedAgentsCreateMemoryStoreResponse,
  zBetaManagedAgentsCreateSessionParams,
  zBetaManagedAgentsCreateVaultRequest,
  zBetaManagedAgentsCredential,
  zBetaManagedAgentsMemory,
  zBetaManagedAgentsSendSessionEvents,
  zBetaManagedAgentsSendSessionEventsParams,
  zBetaManagedAgentsSession,
  zBetaManagedAgentsUpdateAgentParams,
  zBetaManagedAgentsUpdateCredentialRequestBody,
  zBetaManagedAgentsUpdateMemoryParams,
  zBetaManagedAgentsUpdateMemoryStoreRequestBody,
  zBetaManagedAgentsUpdateMemoryStoreResponse,
  zBetaManagedAgentsUpdateSessionParams,
  zBetaManagedAgentsUpdateSessionResource,
  zBetaManagedAgentsUpdateSessionResourceParams,
  zBetaManagedAgentsUpdateVaultRequestBody,
  zBetaManagedAgentsVault,
  zBetaMessage,
  zBetaMessageBatch,
  zBetaPublicEnvironmentCreateRequest,
  zBetaPublicEnvironmentUpdateRequest,
  zBetaSelfHostedWork,
  zBetaSelfHostedWorkStopRequest,
  zBetaSelfHostedWorkUpdateRequest,
  zBetaUpdateUserProfileRequestBody,
  zBetaUserProfile,
  zCompletionRequest,
  zCompletionResponse,
  zCountMessageTokensParams,
  zCountMessageTokensResponse,
  zCreateMessageBatchParams,
  zCreateMessageParams,
  zMessage,
  zMessageBatch,
} from './zod.gen.js'

/** Map of anthropic endpoint id -> Zod input/output schemas. */
export const anthropicEndpointZodMap: {
  readonly 'v1/agents?beta=true': {
    readonly input: typeof zBetaManagedAgentsCreateAgentParams
    readonly output: typeof zBetaManagedAgentsAgent
  }
  readonly 'v1/agents/{agent_id}?beta=true': {
    readonly input: typeof zBetaManagedAgentsUpdateAgentParams
    readonly output: typeof zBetaManagedAgentsAgent
  }
  readonly 'v1/complete': {
    readonly input: typeof zCompletionRequest
    readonly output: typeof zCompletionResponse
  }
  readonly 'v1/environments?beta=true': {
    readonly input: typeof zBetaPublicEnvironmentCreateRequest
    readonly output: typeof zBetaEnvironment
  }
  readonly 'v1/environments/{environment_id}?beta=true': {
    readonly input: typeof zBetaPublicEnvironmentUpdateRequest
    readonly output: typeof zBetaEnvironment
  }
  readonly 'v1/environments/{environment_id}/work/{work_id}?beta=true': {
    readonly input: typeof zBetaSelfHostedWorkUpdateRequest
    readonly output: typeof zBetaSelfHostedWork
  }
  readonly 'v1/environments/{environment_id}/work/{work_id}/stop?beta=true': {
    readonly input: typeof zBetaSelfHostedWorkStopRequest
    readonly output: typeof zBetaSelfHostedWork
  }
  readonly 'v1/memory_stores?beta=true': {
    readonly input: typeof zBetaManagedAgentsCreateMemoryStoreRequest
    readonly output: typeof zBetaManagedAgentsCreateMemoryStoreResponse
  }
  readonly 'v1/memory_stores/{memory_store_id}?beta=true': {
    readonly input: typeof zBetaManagedAgentsUpdateMemoryStoreRequestBody
    readonly output: typeof zBetaManagedAgentsUpdateMemoryStoreResponse
  }
  readonly 'v1/memory_stores/{memory_store_id}/memories?beta=true': {
    readonly input: typeof zBetaManagedAgentsCreateMemoryParams
    readonly output: typeof zBetaManagedAgentsMemory
  }
  readonly 'v1/memory_stores/{memory_store_id}/memories/{memory_id}?beta=true': {
    readonly input: typeof zBetaManagedAgentsUpdateMemoryParams
    readonly output: typeof zBetaManagedAgentsMemory
  }
  readonly 'v1/messages': {
    readonly input: typeof zCreateMessageParams
    readonly output: typeof zMessage
  }
  readonly 'v1/messages?beta=true': {
    readonly input: typeof zBetaCreateMessageParams
    readonly output: typeof zBetaMessage
  }
  readonly 'v1/messages/batches': {
    readonly input: typeof zCreateMessageBatchParams
    readonly output: typeof zMessageBatch
  }
  readonly 'v1/messages/batches?beta=true': {
    readonly input: typeof zBetaCreateMessageBatchParams
    readonly output: typeof zBetaMessageBatch
  }
  readonly 'v1/messages/count_tokens': {
    readonly input: typeof zCountMessageTokensParams
    readonly output: typeof zCountMessageTokensResponse
  }
  readonly 'v1/messages/count_tokens?beta=true': {
    readonly input: typeof zBetaCountMessageTokensParams
    readonly output: typeof zBetaCountMessageTokensResponse
  }
  readonly 'v1/sessions?beta=true': {
    readonly input: typeof zBetaManagedAgentsCreateSessionParams
    readonly output: typeof zBetaManagedAgentsSession
  }
  readonly 'v1/sessions/{session_id}?beta=true': {
    readonly input: typeof zBetaManagedAgentsUpdateSessionParams
    readonly output: typeof zBetaManagedAgentsSession
  }
  readonly 'v1/sessions/{session_id}/events?beta=true': {
    readonly input: typeof zBetaManagedAgentsSendSessionEventsParams
    readonly output: typeof zBetaManagedAgentsSendSessionEvents
  }
  readonly 'v1/sessions/{session_id}/resources?beta=true': {
    readonly input: typeof zBetaManagedAgentsAddSessionResourceParams
    readonly output: typeof zBetaManagedAgentsAddSessionResource
  }
  readonly 'v1/sessions/{session_id}/resources/{resource_id}?beta=true': {
    readonly input: typeof zBetaManagedAgentsUpdateSessionResourceParams
    readonly output: typeof zBetaManagedAgentsUpdateSessionResource
  }
  readonly 'v1/user_profiles?beta=true': {
    readonly input: typeof zBetaCreateUserProfileRequest
    readonly output: typeof zBetaUserProfile
  }
  readonly 'v1/user_profiles/{user_profile_id}?beta=true': {
    readonly input: typeof zBetaUpdateUserProfileRequestBody
    readonly output: typeof zBetaUserProfile
  }
  readonly 'v1/vaults?beta=true': {
    readonly input: typeof zBetaManagedAgentsCreateVaultRequest
    readonly output: typeof zBetaManagedAgentsVault
  }
  readonly 'v1/vaults/{vault_id}?beta=true': {
    readonly input: typeof zBetaManagedAgentsUpdateVaultRequestBody
    readonly output: typeof zBetaManagedAgentsVault
  }
  readonly 'v1/vaults/{vault_id}/credentials?beta=true': {
    readonly input: typeof zBetaManagedAgentsCreateCredentialRequestBody
    readonly output: typeof zBetaManagedAgentsCredential
  }
  readonly 'v1/vaults/{vault_id}/credentials/{credential_id}?beta=true': {
    readonly input: typeof zBetaManagedAgentsUpdateCredentialRequestBody
    readonly output: typeof zBetaManagedAgentsCredential
  }
} = {
  'v1/agents?beta=true': {
    input: zBetaManagedAgentsCreateAgentParams,
    output: zBetaManagedAgentsAgent,
  },
  'v1/agents/{agent_id}?beta=true': {
    input: zBetaManagedAgentsUpdateAgentParams,
    output: zBetaManagedAgentsAgent,
  },
  'v1/complete': { input: zCompletionRequest, output: zCompletionResponse },
  'v1/environments?beta=true': {
    input: zBetaPublicEnvironmentCreateRequest,
    output: zBetaEnvironment,
  },
  'v1/environments/{environment_id}?beta=true': {
    input: zBetaPublicEnvironmentUpdateRequest,
    output: zBetaEnvironment,
  },
  'v1/environments/{environment_id}/work/{work_id}?beta=true': {
    input: zBetaSelfHostedWorkUpdateRequest,
    output: zBetaSelfHostedWork,
  },
  'v1/environments/{environment_id}/work/{work_id}/stop?beta=true': {
    input: zBetaSelfHostedWorkStopRequest,
    output: zBetaSelfHostedWork,
  },
  'v1/memory_stores?beta=true': {
    input: zBetaManagedAgentsCreateMemoryStoreRequest,
    output: zBetaManagedAgentsCreateMemoryStoreResponse,
  },
  'v1/memory_stores/{memory_store_id}?beta=true': {
    input: zBetaManagedAgentsUpdateMemoryStoreRequestBody,
    output: zBetaManagedAgentsUpdateMemoryStoreResponse,
  },
  'v1/memory_stores/{memory_store_id}/memories?beta=true': {
    input: zBetaManagedAgentsCreateMemoryParams,
    output: zBetaManagedAgentsMemory,
  },
  'v1/memory_stores/{memory_store_id}/memories/{memory_id}?beta=true': {
    input: zBetaManagedAgentsUpdateMemoryParams,
    output: zBetaManagedAgentsMemory,
  },
  'v1/messages': { input: zCreateMessageParams, output: zMessage },
  'v1/messages?beta=true': {
    input: zBetaCreateMessageParams,
    output: zBetaMessage,
  },
  'v1/messages/batches': {
    input: zCreateMessageBatchParams,
    output: zMessageBatch,
  },
  'v1/messages/batches?beta=true': {
    input: zBetaCreateMessageBatchParams,
    output: zBetaMessageBatch,
  },
  'v1/messages/count_tokens': {
    input: zCountMessageTokensParams,
    output: zCountMessageTokensResponse,
  },
  'v1/messages/count_tokens?beta=true': {
    input: zBetaCountMessageTokensParams,
    output: zBetaCountMessageTokensResponse,
  },
  'v1/sessions?beta=true': {
    input: zBetaManagedAgentsCreateSessionParams,
    output: zBetaManagedAgentsSession,
  },
  'v1/sessions/{session_id}?beta=true': {
    input: zBetaManagedAgentsUpdateSessionParams,
    output: zBetaManagedAgentsSession,
  },
  'v1/sessions/{session_id}/events?beta=true': {
    input: zBetaManagedAgentsSendSessionEventsParams,
    output: zBetaManagedAgentsSendSessionEvents,
  },
  'v1/sessions/{session_id}/resources?beta=true': {
    input: zBetaManagedAgentsAddSessionResourceParams,
    output: zBetaManagedAgentsAddSessionResource,
  },
  'v1/sessions/{session_id}/resources/{resource_id}?beta=true': {
    input: zBetaManagedAgentsUpdateSessionResourceParams,
    output: zBetaManagedAgentsUpdateSessionResource,
  },
  'v1/user_profiles?beta=true': {
    input: zBetaCreateUserProfileRequest,
    output: zBetaUserProfile,
  },
  'v1/user_profiles/{user_profile_id}?beta=true': {
    input: zBetaUpdateUserProfileRequestBody,
    output: zBetaUserProfile,
  },
  'v1/vaults?beta=true': {
    input: zBetaManagedAgentsCreateVaultRequest,
    output: zBetaManagedAgentsVault,
  },
  'v1/vaults/{vault_id}?beta=true': {
    input: zBetaManagedAgentsUpdateVaultRequestBody,
    output: zBetaManagedAgentsVault,
  },
  'v1/vaults/{vault_id}/credentials?beta=true': {
    input: zBetaManagedAgentsCreateCredentialRequestBody,
    output: zBetaManagedAgentsCredential,
  },
  'v1/vaults/{vault_id}/credentials/{credential_id}?beta=true': {
    input: zBetaManagedAgentsUpdateCredentialRequestBody,
    output: zBetaManagedAgentsCredential,
  },
}

/** Union of valid anthropic endpoint ids. */
export type AnthropicEndpointId = keyof typeof anthropicEndpointZodMap
