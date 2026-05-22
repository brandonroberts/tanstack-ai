// AUTO-GENERATED - Do not edit manually
// Generated via scripts/generate-endpoint-maps.ts

import {
  zAssistantObject,
  zCertificate,
  zChatSessionResource,
  zCompactResource,
  zCompactResponseMethodPublicBody,
  zCompleteUploadRequest,
  zContainerFileResource,
  zContainerResource,
  zConversationResource,
  zCreateAssistantRequest,
  zCreateChatCompletionRequest,
  zCreateChatCompletionResponse,
  zCreateChatSessionBody,
  zCreateCompletionRequest,
  zCreateCompletionResponse,
  zCreateContainerBody,
  zCreateContainerFileBody,
  zCreateConversationBody,
  zCreateEmbeddingRequest,
  zCreateEmbeddingResponse,
  zCreateFineTuningCheckpointPermissionRequest,
  zCreateFineTuningJobRequest,
  zCreateGroupBody,
  zCreateGroupUserBody,
  zCreateImageRequest,
  zCreateMessageRequest,
  zCreateModerationRequest,
  zCreateModerationResponse,
  zCreateResponse,
  zCreateRunRequest,
  zCreateSkillBody,
  zCreateSkillVersionBody,
  zCreateThreadAndRunRequest,
  zCreateThreadRequest,
  zCreateUploadRequest,
  zCreateVectorStoreFileBatchRequest,
  zCreateVectorStoreFileRequest,
  zCreateVectorStoreRequest,
  zCreateVideoEditJsonBody,
  zCreateVideoExtendJsonBody,
  zCreateVideoJsonBody,
  zCreateVideoRemixBody,
  zEditImageBodyJsonParam,
  zFineTuningJob,
  zGroupResourceWithSuccess,
  zGroupResponse,
  zGroupRoleAssignment,
  zGroupUserAssignment,
  zImagesResponse,
  zInvite,
  zInviteProjectGroupBody,
  zInviteRequest,
  zListFineTuningCheckpointPermissionResponse,
  zMessageObject,
  zModifyAssistantRequest,
  zModifyCertificateRequest,
  zModifyMessageRequest,
  zModifyRunRequest,
  zModifyThreadRequest,
  zOrganizationCertificateActivationResponse,
  zOrganizationCertificateDeactivationResponse,
  zOrganizationProjectCertificateActivationResponse,
  zOrganizationProjectCertificateDeactivationResponse,
  zProject,
  zProjectCreateRequest,
  zProjectGroup,
  zProjectRateLimit,
  zProjectRateLimitUpdateRequest,
  zProjectServiceAccountCreateRequest,
  zProjectServiceAccountCreateResponse,
  zProjectUpdateRequest,
  zProjectUser,
  zProjectUserCreateRequest,
  zProjectUserUpdateRequest,
  zPublicAssignOrganizationGroupRoleBody,
  zPublicCreateOrganizationRoleBody,
  zPublicUpdateOrganizationRoleBody,
  zRealtimeCreateClientSecretRequest,
  zRealtimeCreateClientSecretResponse,
  zRealtimeSessionCreateRequest,
  zRealtimeSessionCreateResponse,
  zRealtimeTranscriptionSessionCreateRequest,
  zRealtimeTranscriptionSessionCreateResponse,
  zRealtimeTranslationClientSecretCreateRequest,
  zRealtimeTranslationClientSecretCreateResponse,
  zResponse,
  zRole,
  zRunGraderRequest,
  zRunGraderResponse,
  zRunObject,
  zSetDefaultSkillVersionBody,
  zSkillResource,
  zSkillVersionResource,
  zSubmitToolOutputsRunRequest,
  zThreadObject,
  zToggleCertificatesRequest,
  zTokenCountsBody,
  zTokenCountsResource,
  zUpdateConversationBody,
  zUpdateGroupBody,
  zUpdateVectorStoreFileAttributesRequest,
  zUpdateVectorStoreRequest,
  zUpdateVoiceConsentRequest,
  zUpload,
  zUploadCertificateRequest,
  zUser,
  zUserRoleAssignment,
  zUserRoleUpdateRequest,
  zValidateGraderRequest,
  zValidateGraderResponse,
  zVectorStoreFileBatchObject,
  zVectorStoreFileObject,
  zVectorStoreObject,
  zVectorStoreSearchRequest,
  zVectorStoreSearchResultsPage,
  zVideoResource,
  zVoiceConsentResource,
} from './zod.gen.js'

/** Map of openai endpoint id -> Zod input/output schemas. */
export const openaiEndpointZodMap: {
  readonly assistants: {
    readonly input: typeof zCreateAssistantRequest
    readonly output: typeof zAssistantObject
  }
  readonly 'assistants/{assistant_id}': {
    readonly input: typeof zModifyAssistantRequest
    readonly output: typeof zAssistantObject
  }
  readonly 'audio/voice_consents/{consent_id}': {
    readonly input: typeof zUpdateVoiceConsentRequest
    readonly output: typeof zVoiceConsentResource
  }
  readonly 'chat/completions': {
    readonly input: typeof zCreateChatCompletionRequest
    readonly output: typeof zCreateChatCompletionResponse
  }
  readonly 'chatkit/sessions': {
    readonly input: typeof zCreateChatSessionBody
    readonly output: typeof zChatSessionResource
  }
  readonly completions: {
    readonly input: typeof zCreateCompletionRequest
    readonly output: typeof zCreateCompletionResponse
  }
  readonly containers: {
    readonly input: typeof zCreateContainerBody
    readonly output: typeof zContainerResource
  }
  readonly 'containers/{container_id}/files': {
    readonly input: typeof zCreateContainerFileBody
    readonly output: typeof zContainerFileResource
  }
  readonly conversations: {
    readonly input: typeof zCreateConversationBody
    readonly output: typeof zConversationResource
  }
  readonly 'conversations/{conversation_id}': {
    readonly input: typeof zUpdateConversationBody
    readonly output: typeof zConversationResource
  }
  readonly embeddings: {
    readonly input: typeof zCreateEmbeddingRequest
    readonly output: typeof zCreateEmbeddingResponse
  }
  readonly 'fine_tuning/alpha/graders/run': {
    readonly input: typeof zRunGraderRequest
    readonly output: typeof zRunGraderResponse
  }
  readonly 'fine_tuning/alpha/graders/validate': {
    readonly input: typeof zValidateGraderRequest
    readonly output: typeof zValidateGraderResponse
  }
  readonly 'fine_tuning/checkpoints/{fine_tuned_model_checkpoint}/permissions': {
    readonly input: typeof zCreateFineTuningCheckpointPermissionRequest
    readonly output: typeof zListFineTuningCheckpointPermissionResponse
  }
  readonly 'fine_tuning/jobs': {
    readonly input: typeof zCreateFineTuningJobRequest
    readonly output: typeof zFineTuningJob
  }
  readonly 'images/edits': {
    readonly input: typeof zEditImageBodyJsonParam
    readonly output: typeof zImagesResponse
  }
  readonly 'images/generations': {
    readonly input: typeof zCreateImageRequest
    readonly output: typeof zImagesResponse
  }
  readonly moderations: {
    readonly input: typeof zCreateModerationRequest
    readonly output: typeof zCreateModerationResponse
  }
  readonly 'organization/certificates': {
    readonly input: typeof zUploadCertificateRequest
    readonly output: typeof zCertificate
  }
  readonly 'organization/certificates/{certificate_id}': {
    readonly input: typeof zModifyCertificateRequest
    readonly output: typeof zCertificate
  }
  readonly 'organization/certificates/activate': {
    readonly input: typeof zToggleCertificatesRequest
    readonly output: typeof zOrganizationCertificateActivationResponse
  }
  readonly 'organization/certificates/deactivate': {
    readonly input: typeof zToggleCertificatesRequest
    readonly output: typeof zOrganizationCertificateDeactivationResponse
  }
  readonly 'organization/groups': {
    readonly input: typeof zCreateGroupBody
    readonly output: typeof zGroupResponse
  }
  readonly 'organization/groups/{group_id}': {
    readonly input: typeof zUpdateGroupBody
    readonly output: typeof zGroupResourceWithSuccess
  }
  readonly 'organization/groups/{group_id}/roles': {
    readonly input: typeof zPublicAssignOrganizationGroupRoleBody
    readonly output: typeof zGroupRoleAssignment
  }
  readonly 'organization/groups/{group_id}/users': {
    readonly input: typeof zCreateGroupUserBody
    readonly output: typeof zGroupUserAssignment
  }
  readonly 'organization/invites': {
    readonly input: typeof zInviteRequest
    readonly output: typeof zInvite
  }
  readonly 'organization/projects': {
    readonly input: typeof zProjectCreateRequest
    readonly output: typeof zProject
  }
  readonly 'organization/projects/{project_id}': {
    readonly input: typeof zProjectUpdateRequest
    readonly output: typeof zProject
  }
  readonly 'organization/projects/{project_id}/certificates/activate': {
    readonly input: typeof zToggleCertificatesRequest
    readonly output: typeof zOrganizationProjectCertificateActivationResponse
  }
  readonly 'organization/projects/{project_id}/certificates/deactivate': {
    readonly input: typeof zToggleCertificatesRequest
    readonly output: typeof zOrganizationProjectCertificateDeactivationResponse
  }
  readonly 'organization/projects/{project_id}/groups': {
    readonly input: typeof zInviteProjectGroupBody
    readonly output: typeof zProjectGroup
  }
  readonly 'organization/projects/{project_id}/rate_limits/{rate_limit_id}': {
    readonly input: typeof zProjectRateLimitUpdateRequest
    readonly output: typeof zProjectRateLimit
  }
  readonly 'organization/projects/{project_id}/service_accounts': {
    readonly input: typeof zProjectServiceAccountCreateRequest
    readonly output: typeof zProjectServiceAccountCreateResponse
  }
  readonly 'organization/projects/{project_id}/users': {
    readonly input: typeof zProjectUserCreateRequest
    readonly output: typeof zProjectUser
  }
  readonly 'organization/projects/{project_id}/users/{user_id}': {
    readonly input: typeof zProjectUserUpdateRequest
    readonly output: typeof zProjectUser
  }
  readonly 'organization/roles': {
    readonly input: typeof zPublicCreateOrganizationRoleBody
    readonly output: typeof zRole
  }
  readonly 'organization/roles/{role_id}': {
    readonly input: typeof zPublicUpdateOrganizationRoleBody
    readonly output: typeof zRole
  }
  readonly 'organization/users/{user_id}': {
    readonly input: typeof zUserRoleUpdateRequest
    readonly output: typeof zUser
  }
  readonly 'organization/users/{user_id}/roles': {
    readonly input: typeof zPublicAssignOrganizationGroupRoleBody
    readonly output: typeof zUserRoleAssignment
  }
  readonly 'projects/{project_id}/groups/{group_id}/roles': {
    readonly input: typeof zPublicAssignOrganizationGroupRoleBody
    readonly output: typeof zGroupRoleAssignment
  }
  readonly 'projects/{project_id}/roles': {
    readonly input: typeof zPublicCreateOrganizationRoleBody
    readonly output: typeof zRole
  }
  readonly 'projects/{project_id}/roles/{role_id}': {
    readonly input: typeof zPublicUpdateOrganizationRoleBody
    readonly output: typeof zRole
  }
  readonly 'projects/{project_id}/users/{user_id}/roles': {
    readonly input: typeof zPublicAssignOrganizationGroupRoleBody
    readonly output: typeof zUserRoleAssignment
  }
  readonly 'realtime/client_secrets': {
    readonly input: typeof zRealtimeCreateClientSecretRequest
    readonly output: typeof zRealtimeCreateClientSecretResponse
  }
  readonly 'realtime/sessions': {
    readonly input: typeof zRealtimeSessionCreateRequest
    readonly output: typeof zRealtimeSessionCreateResponse
  }
  readonly 'realtime/transcription_sessions': {
    readonly input: typeof zRealtimeTranscriptionSessionCreateRequest
    readonly output: typeof zRealtimeTranscriptionSessionCreateResponse
  }
  readonly 'realtime/translations/client_secrets': {
    readonly input: typeof zRealtimeTranslationClientSecretCreateRequest
    readonly output: typeof zRealtimeTranslationClientSecretCreateResponse
  }
  readonly responses: {
    readonly input: typeof zCreateResponse
    readonly output: typeof zResponse
  }
  readonly 'responses/compact': {
    readonly input: typeof zCompactResponseMethodPublicBody
    readonly output: typeof zCompactResource
  }
  readonly 'responses/input_tokens': {
    readonly input: typeof zTokenCountsBody
    readonly output: typeof zTokenCountsResource
  }
  readonly skills: {
    readonly input: typeof zCreateSkillBody
    readonly output: typeof zSkillResource
  }
  readonly 'skills/{skill_id}': {
    readonly input: typeof zSetDefaultSkillVersionBody
    readonly output: typeof zSkillResource
  }
  readonly 'skills/{skill_id}/versions': {
    readonly input: typeof zCreateSkillVersionBody
    readonly output: typeof zSkillVersionResource
  }
  readonly threads: {
    readonly input: typeof zCreateThreadRequest
    readonly output: typeof zThreadObject
  }
  readonly 'threads/{thread_id}': {
    readonly input: typeof zModifyThreadRequest
    readonly output: typeof zThreadObject
  }
  readonly 'threads/{thread_id}/messages': {
    readonly input: typeof zCreateMessageRequest
    readonly output: typeof zMessageObject
  }
  readonly 'threads/{thread_id}/messages/{message_id}': {
    readonly input: typeof zModifyMessageRequest
    readonly output: typeof zMessageObject
  }
  readonly 'threads/{thread_id}/runs': {
    readonly input: typeof zCreateRunRequest
    readonly output: typeof zRunObject
  }
  readonly 'threads/{thread_id}/runs/{run_id}': {
    readonly input: typeof zModifyRunRequest
    readonly output: typeof zRunObject
  }
  readonly 'threads/{thread_id}/runs/{run_id}/submit_tool_outputs': {
    readonly input: typeof zSubmitToolOutputsRunRequest
    readonly output: typeof zRunObject
  }
  readonly 'threads/runs': {
    readonly input: typeof zCreateThreadAndRunRequest
    readonly output: typeof zRunObject
  }
  readonly uploads: {
    readonly input: typeof zCreateUploadRequest
    readonly output: typeof zUpload
  }
  readonly 'uploads/{upload_id}/complete': {
    readonly input: typeof zCompleteUploadRequest
    readonly output: typeof zUpload
  }
  readonly vector_stores: {
    readonly input: typeof zCreateVectorStoreRequest
    readonly output: typeof zVectorStoreObject
  }
  readonly 'vector_stores/{vector_store_id}': {
    readonly input: typeof zUpdateVectorStoreRequest
    readonly output: typeof zVectorStoreObject
  }
  readonly 'vector_stores/{vector_store_id}/file_batches': {
    readonly input: typeof zCreateVectorStoreFileBatchRequest
    readonly output: typeof zVectorStoreFileBatchObject
  }
  readonly 'vector_stores/{vector_store_id}/files': {
    readonly input: typeof zCreateVectorStoreFileRequest
    readonly output: typeof zVectorStoreFileObject
  }
  readonly 'vector_stores/{vector_store_id}/files/{file_id}': {
    readonly input: typeof zUpdateVectorStoreFileAttributesRequest
    readonly output: typeof zVectorStoreFileObject
  }
  readonly 'vector_stores/{vector_store_id}/search': {
    readonly input: typeof zVectorStoreSearchRequest
    readonly output: typeof zVectorStoreSearchResultsPage
  }
  readonly videos: {
    readonly input: typeof zCreateVideoJsonBody
    readonly output: typeof zVideoResource
  }
  readonly 'videos/{video_id}/remix': {
    readonly input: typeof zCreateVideoRemixBody
    readonly output: typeof zVideoResource
  }
  readonly 'videos/edits': {
    readonly input: typeof zCreateVideoEditJsonBody
    readonly output: typeof zVideoResource
  }
  readonly 'videos/extensions': {
    readonly input: typeof zCreateVideoExtendJsonBody
    readonly output: typeof zVideoResource
  }
} = {
  assistants: { input: zCreateAssistantRequest, output: zAssistantObject },
  'assistants/{assistant_id}': {
    input: zModifyAssistantRequest,
    output: zAssistantObject,
  },
  'audio/voice_consents/{consent_id}': {
    input: zUpdateVoiceConsentRequest,
    output: zVoiceConsentResource,
  },
  'chat/completions': {
    input: zCreateChatCompletionRequest,
    output: zCreateChatCompletionResponse,
  },
  'chatkit/sessions': {
    input: zCreateChatSessionBody,
    output: zChatSessionResource,
  },
  completions: {
    input: zCreateCompletionRequest,
    output: zCreateCompletionResponse,
  },
  containers: { input: zCreateContainerBody, output: zContainerResource },
  'containers/{container_id}/files': {
    input: zCreateContainerFileBody,
    output: zContainerFileResource,
  },
  conversations: {
    input: zCreateConversationBody,
    output: zConversationResource,
  },
  'conversations/{conversation_id}': {
    input: zUpdateConversationBody,
    output: zConversationResource,
  },
  embeddings: {
    input: zCreateEmbeddingRequest,
    output: zCreateEmbeddingResponse,
  },
  'fine_tuning/alpha/graders/run': {
    input: zRunGraderRequest,
    output: zRunGraderResponse,
  },
  'fine_tuning/alpha/graders/validate': {
    input: zValidateGraderRequest,
    output: zValidateGraderResponse,
  },
  'fine_tuning/checkpoints/{fine_tuned_model_checkpoint}/permissions': {
    input: zCreateFineTuningCheckpointPermissionRequest,
    output: zListFineTuningCheckpointPermissionResponse,
  },
  'fine_tuning/jobs': {
    input: zCreateFineTuningJobRequest,
    output: zFineTuningJob,
  },
  'images/edits': { input: zEditImageBodyJsonParam, output: zImagesResponse },
  'images/generations': { input: zCreateImageRequest, output: zImagesResponse },
  moderations: {
    input: zCreateModerationRequest,
    output: zCreateModerationResponse,
  },
  'organization/certificates': {
    input: zUploadCertificateRequest,
    output: zCertificate,
  },
  'organization/certificates/{certificate_id}': {
    input: zModifyCertificateRequest,
    output: zCertificate,
  },
  'organization/certificates/activate': {
    input: zToggleCertificatesRequest,
    output: zOrganizationCertificateActivationResponse,
  },
  'organization/certificates/deactivate': {
    input: zToggleCertificatesRequest,
    output: zOrganizationCertificateDeactivationResponse,
  },
  'organization/groups': { input: zCreateGroupBody, output: zGroupResponse },
  'organization/groups/{group_id}': {
    input: zUpdateGroupBody,
    output: zGroupResourceWithSuccess,
  },
  'organization/groups/{group_id}/roles': {
    input: zPublicAssignOrganizationGroupRoleBody,
    output: zGroupRoleAssignment,
  },
  'organization/groups/{group_id}/users': {
    input: zCreateGroupUserBody,
    output: zGroupUserAssignment,
  },
  'organization/invites': { input: zInviteRequest, output: zInvite },
  'organization/projects': { input: zProjectCreateRequest, output: zProject },
  'organization/projects/{project_id}': {
    input: zProjectUpdateRequest,
    output: zProject,
  },
  'organization/projects/{project_id}/certificates/activate': {
    input: zToggleCertificatesRequest,
    output: zOrganizationProjectCertificateActivationResponse,
  },
  'organization/projects/{project_id}/certificates/deactivate': {
    input: zToggleCertificatesRequest,
    output: zOrganizationProjectCertificateDeactivationResponse,
  },
  'organization/projects/{project_id}/groups': {
    input: zInviteProjectGroupBody,
    output: zProjectGroup,
  },
  'organization/projects/{project_id}/rate_limits/{rate_limit_id}': {
    input: zProjectRateLimitUpdateRequest,
    output: zProjectRateLimit,
  },
  'organization/projects/{project_id}/service_accounts': {
    input: zProjectServiceAccountCreateRequest,
    output: zProjectServiceAccountCreateResponse,
  },
  'organization/projects/{project_id}/users': {
    input: zProjectUserCreateRequest,
    output: zProjectUser,
  },
  'organization/projects/{project_id}/users/{user_id}': {
    input: zProjectUserUpdateRequest,
    output: zProjectUser,
  },
  'organization/roles': {
    input: zPublicCreateOrganizationRoleBody,
    output: zRole,
  },
  'organization/roles/{role_id}': {
    input: zPublicUpdateOrganizationRoleBody,
    output: zRole,
  },
  'organization/users/{user_id}': {
    input: zUserRoleUpdateRequest,
    output: zUser,
  },
  'organization/users/{user_id}/roles': {
    input: zPublicAssignOrganizationGroupRoleBody,
    output: zUserRoleAssignment,
  },
  'projects/{project_id}/groups/{group_id}/roles': {
    input: zPublicAssignOrganizationGroupRoleBody,
    output: zGroupRoleAssignment,
  },
  'projects/{project_id}/roles': {
    input: zPublicCreateOrganizationRoleBody,
    output: zRole,
  },
  'projects/{project_id}/roles/{role_id}': {
    input: zPublicUpdateOrganizationRoleBody,
    output: zRole,
  },
  'projects/{project_id}/users/{user_id}/roles': {
    input: zPublicAssignOrganizationGroupRoleBody,
    output: zUserRoleAssignment,
  },
  'realtime/client_secrets': {
    input: zRealtimeCreateClientSecretRequest,
    output: zRealtimeCreateClientSecretResponse,
  },
  'realtime/sessions': {
    input: zRealtimeSessionCreateRequest,
    output: zRealtimeSessionCreateResponse,
  },
  'realtime/transcription_sessions': {
    input: zRealtimeTranscriptionSessionCreateRequest,
    output: zRealtimeTranscriptionSessionCreateResponse,
  },
  'realtime/translations/client_secrets': {
    input: zRealtimeTranslationClientSecretCreateRequest,
    output: zRealtimeTranslationClientSecretCreateResponse,
  },
  responses: { input: zCreateResponse, output: zResponse },
  'responses/compact': {
    input: zCompactResponseMethodPublicBody,
    output: zCompactResource,
  },
  'responses/input_tokens': {
    input: zTokenCountsBody,
    output: zTokenCountsResource,
  },
  skills: { input: zCreateSkillBody, output: zSkillResource },
  'skills/{skill_id}': {
    input: zSetDefaultSkillVersionBody,
    output: zSkillResource,
  },
  'skills/{skill_id}/versions': {
    input: zCreateSkillVersionBody,
    output: zSkillVersionResource,
  },
  threads: { input: zCreateThreadRequest, output: zThreadObject },
  'threads/{thread_id}': { input: zModifyThreadRequest, output: zThreadObject },
  'threads/{thread_id}/messages': {
    input: zCreateMessageRequest,
    output: zMessageObject,
  },
  'threads/{thread_id}/messages/{message_id}': {
    input: zModifyMessageRequest,
    output: zMessageObject,
  },
  'threads/{thread_id}/runs': { input: zCreateRunRequest, output: zRunObject },
  'threads/{thread_id}/runs/{run_id}': {
    input: zModifyRunRequest,
    output: zRunObject,
  },
  'threads/{thread_id}/runs/{run_id}/submit_tool_outputs': {
    input: zSubmitToolOutputsRunRequest,
    output: zRunObject,
  },
  'threads/runs': { input: zCreateThreadAndRunRequest, output: zRunObject },
  uploads: { input: zCreateUploadRequest, output: zUpload },
  'uploads/{upload_id}/complete': {
    input: zCompleteUploadRequest,
    output: zUpload,
  },
  vector_stores: {
    input: zCreateVectorStoreRequest,
    output: zVectorStoreObject,
  },
  'vector_stores/{vector_store_id}': {
    input: zUpdateVectorStoreRequest,
    output: zVectorStoreObject,
  },
  'vector_stores/{vector_store_id}/file_batches': {
    input: zCreateVectorStoreFileBatchRequest,
    output: zVectorStoreFileBatchObject,
  },
  'vector_stores/{vector_store_id}/files': {
    input: zCreateVectorStoreFileRequest,
    output: zVectorStoreFileObject,
  },
  'vector_stores/{vector_store_id}/files/{file_id}': {
    input: zUpdateVectorStoreFileAttributesRequest,
    output: zVectorStoreFileObject,
  },
  'vector_stores/{vector_store_id}/search': {
    input: zVectorStoreSearchRequest,
    output: zVectorStoreSearchResultsPage,
  },
  videos: { input: zCreateVideoJsonBody, output: zVideoResource },
  'videos/{video_id}/remix': {
    input: zCreateVideoRemixBody,
    output: zVideoResource,
  },
  'videos/edits': { input: zCreateVideoEditJsonBody, output: zVideoResource },
  'videos/extensions': {
    input: zCreateVideoExtendJsonBody,
    output: zVideoResource,
  },
}

/** Union of valid openai endpoint ids. */
export type OpenaiEndpointId = keyof typeof openaiEndpointZodMap
