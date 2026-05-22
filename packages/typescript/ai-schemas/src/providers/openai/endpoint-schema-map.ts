// AUTO-GENERATED - Do not edit manually
// Generated via scripts/generate-endpoint-maps.ts

import {
  AssistantObjectSchema,
  CertificateSchema,
  ChatSessionResourceSchema,
  CompactResourceSchema,
  CompactResponseMethodPublicBodySchema,
  CompleteUploadRequestSchema,
  ContainerFileResourceSchema,
  ContainerResourceSchema,
  ConversationResourceSchema,
  CreateAssistantRequestSchema,
  CreateChatCompletionRequestSchema,
  CreateChatCompletionResponseSchema,
  CreateChatSessionBodySchema,
  CreateCompletionRequestSchema,
  CreateCompletionResponseSchema,
  CreateContainerBodySchema,
  CreateContainerFileBodySchema,
  CreateConversationBodySchema,
  CreateEmbeddingRequestSchema,
  CreateEmbeddingResponseSchema,
  CreateFineTuningCheckpointPermissionRequestSchema,
  CreateFineTuningJobRequestSchema,
  CreateGroupBodySchema,
  CreateGroupUserBodySchema,
  CreateImageRequestSchema,
  CreateMessageRequestSchema,
  CreateModerationRequestSchema,
  CreateModerationResponseSchema,
  CreateResponseSchema,
  CreateRunRequestSchema,
  CreateSkillBodySchema,
  CreateSkillVersionBodySchema,
  CreateThreadAndRunRequestSchema,
  CreateThreadRequestSchema,
  CreateUploadRequestSchema,
  CreateVectorStoreFileBatchRequestSchema,
  CreateVectorStoreFileRequestSchema,
  CreateVectorStoreRequestSchema,
  CreateVideoEditJsonBodySchema,
  CreateVideoExtendJsonBodySchema,
  CreateVideoJsonBodySchema,
  CreateVideoRemixBodySchema,
  EditImageBodyJsonParamSchema,
  FineTuningJobSchema,
  GroupResourceWithSuccessSchema,
  GroupResponseSchema,
  GroupRoleAssignmentSchema,
  GroupUserAssignmentSchema,
  ImagesResponseSchema,
  InviteProjectGroupBodySchema,
  InviteRequestSchema,
  InviteSchema,
  ListFineTuningCheckpointPermissionResponseSchema,
  MessageObjectSchema,
  ModifyAssistantRequestSchema,
  ModifyCertificateRequestSchema,
  ModifyMessageRequestSchema,
  ModifyRunRequestSchema,
  ModifyThreadRequestSchema,
  OrganizationCertificateActivationResponseSchema,
  OrganizationCertificateDeactivationResponseSchema,
  OrganizationProjectCertificateActivationResponseSchema,
  OrganizationProjectCertificateDeactivationResponseSchema,
  ProjectCreateRequestSchema,
  ProjectGroupSchema,
  ProjectRateLimitSchema,
  ProjectRateLimitUpdateRequestSchema,
  ProjectSchema,
  ProjectServiceAccountCreateRequestSchema,
  ProjectServiceAccountCreateResponseSchema,
  ProjectUpdateRequestSchema,
  ProjectUserCreateRequestSchema,
  ProjectUserSchema,
  ProjectUserUpdateRequestSchema,
  PublicAssignOrganizationGroupRoleBodySchema,
  PublicCreateOrganizationRoleBodySchema,
  PublicUpdateOrganizationRoleBodySchema,
  RealtimeCreateClientSecretRequestSchema,
  RealtimeCreateClientSecretResponseSchema,
  RealtimeSessionCreateRequestSchema,
  RealtimeSessionCreateResponseSchema,
  RealtimeTranscriptionSessionCreateRequestSchema,
  RealtimeTranscriptionSessionCreateResponseSchema,
  RealtimeTranslationClientSecretCreateRequestSchema,
  RealtimeTranslationClientSecretCreateResponseSchema,
  ResponseSchema,
  RoleSchema,
  RunGraderRequestSchema,
  RunGraderResponseSchema,
  RunObjectSchema,
  SetDefaultSkillVersionBodySchema,
  SkillResourceSchema,
  SkillVersionResourceSchema,
  SubmitToolOutputsRunRequestSchema,
  ThreadObjectSchema,
  ToggleCertificatesRequestSchema,
  TokenCountsBodySchema,
  TokenCountsResourceSchema,
  UpdateConversationBodySchema,
  UpdateGroupBodySchema,
  UpdateVectorStoreFileAttributesRequestSchema,
  UpdateVectorStoreRequestSchema,
  UpdateVoiceConsentRequestSchema,
  UploadCertificateRequestSchema,
  UploadSchema,
  UserRoleAssignmentSchema,
  UserRoleUpdateRequestSchema,
  UserSchema,
  ValidateGraderRequestSchema,
  ValidateGraderResponseSchema,
  VectorStoreFileBatchObjectSchema,
  VectorStoreFileObjectSchema,
  VectorStoreObjectSchema,
  VectorStoreSearchRequestSchema,
  VectorStoreSearchResultsPageSchema,
  VideoResourceSchema,
  VoiceConsentResourceSchema,
} from './schemas.gen.js'

/**
 * Map of openai endpoint id -> self-contained JSON Schemas.
 * Each input/output schema bundles its $ref closure under `$defs`, so it
 * can be handed directly to LLM tool APIs or `z.fromJSONSchema`.
 */
export const openaiEndpointSchemaMap: {
  readonly assistants: {
    readonly input: typeof CreateAssistantRequestSchema
    readonly output: typeof AssistantObjectSchema
  }
  readonly 'assistants/{assistant_id}': {
    readonly input: typeof ModifyAssistantRequestSchema
    readonly output: typeof AssistantObjectSchema
  }
  readonly 'audio/voice_consents/{consent_id}': {
    readonly input: typeof UpdateVoiceConsentRequestSchema
    readonly output: typeof VoiceConsentResourceSchema
  }
  readonly 'chat/completions': {
    readonly input: typeof CreateChatCompletionRequestSchema
    readonly output: typeof CreateChatCompletionResponseSchema
  }
  readonly 'chatkit/sessions': {
    readonly input: typeof CreateChatSessionBodySchema
    readonly output: typeof ChatSessionResourceSchema
  }
  readonly completions: {
    readonly input: typeof CreateCompletionRequestSchema
    readonly output: typeof CreateCompletionResponseSchema
  }
  readonly containers: {
    readonly input: typeof CreateContainerBodySchema
    readonly output: typeof ContainerResourceSchema
  }
  readonly 'containers/{container_id}/files': {
    readonly input: typeof CreateContainerFileBodySchema
    readonly output: typeof ContainerFileResourceSchema
  }
  readonly conversations: {
    readonly input: typeof CreateConversationBodySchema
    readonly output: typeof ConversationResourceSchema
  }
  readonly 'conversations/{conversation_id}': {
    readonly input: typeof UpdateConversationBodySchema
    readonly output: typeof ConversationResourceSchema
  }
  readonly embeddings: {
    readonly input: typeof CreateEmbeddingRequestSchema
    readonly output: typeof CreateEmbeddingResponseSchema
  }
  readonly 'fine_tuning/alpha/graders/run': {
    readonly input: typeof RunGraderRequestSchema
    readonly output: typeof RunGraderResponseSchema
  }
  readonly 'fine_tuning/alpha/graders/validate': {
    readonly input: typeof ValidateGraderRequestSchema
    readonly output: typeof ValidateGraderResponseSchema
  }
  readonly 'fine_tuning/checkpoints/{fine_tuned_model_checkpoint}/permissions': {
    readonly input: typeof CreateFineTuningCheckpointPermissionRequestSchema
    readonly output: typeof ListFineTuningCheckpointPermissionResponseSchema
  }
  readonly 'fine_tuning/jobs': {
    readonly input: typeof CreateFineTuningJobRequestSchema
    readonly output: typeof FineTuningJobSchema
  }
  readonly 'images/edits': {
    readonly input: typeof EditImageBodyJsonParamSchema
    readonly output: typeof ImagesResponseSchema
  }
  readonly 'images/generations': {
    readonly input: typeof CreateImageRequestSchema
    readonly output: typeof ImagesResponseSchema
  }
  readonly moderations: {
    readonly input: typeof CreateModerationRequestSchema
    readonly output: typeof CreateModerationResponseSchema
  }
  readonly 'organization/certificates': {
    readonly input: typeof UploadCertificateRequestSchema
    readonly output: typeof CertificateSchema
  }
  readonly 'organization/certificates/{certificate_id}': {
    readonly input: typeof ModifyCertificateRequestSchema
    readonly output: typeof CertificateSchema
  }
  readonly 'organization/certificates/activate': {
    readonly input: typeof ToggleCertificatesRequestSchema
    readonly output: typeof OrganizationCertificateActivationResponseSchema
  }
  readonly 'organization/certificates/deactivate': {
    readonly input: typeof ToggleCertificatesRequestSchema
    readonly output: typeof OrganizationCertificateDeactivationResponseSchema
  }
  readonly 'organization/groups': {
    readonly input: typeof CreateGroupBodySchema
    readonly output: typeof GroupResponseSchema
  }
  readonly 'organization/groups/{group_id}': {
    readonly input: typeof UpdateGroupBodySchema
    readonly output: typeof GroupResourceWithSuccessSchema
  }
  readonly 'organization/groups/{group_id}/roles': {
    readonly input: typeof PublicAssignOrganizationGroupRoleBodySchema
    readonly output: typeof GroupRoleAssignmentSchema
  }
  readonly 'organization/groups/{group_id}/users': {
    readonly input: typeof CreateGroupUserBodySchema
    readonly output: typeof GroupUserAssignmentSchema
  }
  readonly 'organization/invites': {
    readonly input: typeof InviteRequestSchema
    readonly output: typeof InviteSchema
  }
  readonly 'organization/projects': {
    readonly input: typeof ProjectCreateRequestSchema
    readonly output: typeof ProjectSchema
  }
  readonly 'organization/projects/{project_id}': {
    readonly input: typeof ProjectUpdateRequestSchema
    readonly output: typeof ProjectSchema
  }
  readonly 'organization/projects/{project_id}/certificates/activate': {
    readonly input: typeof ToggleCertificatesRequestSchema
    readonly output: typeof OrganizationProjectCertificateActivationResponseSchema
  }
  readonly 'organization/projects/{project_id}/certificates/deactivate': {
    readonly input: typeof ToggleCertificatesRequestSchema
    readonly output: typeof OrganizationProjectCertificateDeactivationResponseSchema
  }
  readonly 'organization/projects/{project_id}/groups': {
    readonly input: typeof InviteProjectGroupBodySchema
    readonly output: typeof ProjectGroupSchema
  }
  readonly 'organization/projects/{project_id}/rate_limits/{rate_limit_id}': {
    readonly input: typeof ProjectRateLimitUpdateRequestSchema
    readonly output: typeof ProjectRateLimitSchema
  }
  readonly 'organization/projects/{project_id}/service_accounts': {
    readonly input: typeof ProjectServiceAccountCreateRequestSchema
    readonly output: typeof ProjectServiceAccountCreateResponseSchema
  }
  readonly 'organization/projects/{project_id}/users': {
    readonly input: typeof ProjectUserCreateRequestSchema
    readonly output: typeof ProjectUserSchema
  }
  readonly 'organization/projects/{project_id}/users/{user_id}': {
    readonly input: typeof ProjectUserUpdateRequestSchema
    readonly output: typeof ProjectUserSchema
  }
  readonly 'organization/roles': {
    readonly input: typeof PublicCreateOrganizationRoleBodySchema
    readonly output: typeof RoleSchema
  }
  readonly 'organization/roles/{role_id}': {
    readonly input: typeof PublicUpdateOrganizationRoleBodySchema
    readonly output: typeof RoleSchema
  }
  readonly 'organization/users/{user_id}': {
    readonly input: typeof UserRoleUpdateRequestSchema
    readonly output: typeof UserSchema
  }
  readonly 'organization/users/{user_id}/roles': {
    readonly input: typeof PublicAssignOrganizationGroupRoleBodySchema
    readonly output: typeof UserRoleAssignmentSchema
  }
  readonly 'projects/{project_id}/groups/{group_id}/roles': {
    readonly input: typeof PublicAssignOrganizationGroupRoleBodySchema
    readonly output: typeof GroupRoleAssignmentSchema
  }
  readonly 'projects/{project_id}/roles': {
    readonly input: typeof PublicCreateOrganizationRoleBodySchema
    readonly output: typeof RoleSchema
  }
  readonly 'projects/{project_id}/roles/{role_id}': {
    readonly input: typeof PublicUpdateOrganizationRoleBodySchema
    readonly output: typeof RoleSchema
  }
  readonly 'projects/{project_id}/users/{user_id}/roles': {
    readonly input: typeof PublicAssignOrganizationGroupRoleBodySchema
    readonly output: typeof UserRoleAssignmentSchema
  }
  readonly 'realtime/client_secrets': {
    readonly input: typeof RealtimeCreateClientSecretRequestSchema
    readonly output: typeof RealtimeCreateClientSecretResponseSchema
  }
  readonly 'realtime/sessions': {
    readonly input: typeof RealtimeSessionCreateRequestSchema
    readonly output: typeof RealtimeSessionCreateResponseSchema
  }
  readonly 'realtime/transcription_sessions': {
    readonly input: typeof RealtimeTranscriptionSessionCreateRequestSchema
    readonly output: typeof RealtimeTranscriptionSessionCreateResponseSchema
  }
  readonly 'realtime/translations/client_secrets': {
    readonly input: typeof RealtimeTranslationClientSecretCreateRequestSchema
    readonly output: typeof RealtimeTranslationClientSecretCreateResponseSchema
  }
  readonly responses: {
    readonly input: typeof CreateResponseSchema
    readonly output: typeof ResponseSchema
  }
  readonly 'responses/compact': {
    readonly input: typeof CompactResponseMethodPublicBodySchema
    readonly output: typeof CompactResourceSchema
  }
  readonly 'responses/input_tokens': {
    readonly input: typeof TokenCountsBodySchema
    readonly output: typeof TokenCountsResourceSchema
  }
  readonly skills: {
    readonly input: typeof CreateSkillBodySchema
    readonly output: typeof SkillResourceSchema
  }
  readonly 'skills/{skill_id}': {
    readonly input: typeof SetDefaultSkillVersionBodySchema
    readonly output: typeof SkillResourceSchema
  }
  readonly 'skills/{skill_id}/versions': {
    readonly input: typeof CreateSkillVersionBodySchema
    readonly output: typeof SkillVersionResourceSchema
  }
  readonly threads: {
    readonly input: typeof CreateThreadRequestSchema
    readonly output: typeof ThreadObjectSchema
  }
  readonly 'threads/{thread_id}': {
    readonly input: typeof ModifyThreadRequestSchema
    readonly output: typeof ThreadObjectSchema
  }
  readonly 'threads/{thread_id}/messages': {
    readonly input: typeof CreateMessageRequestSchema
    readonly output: typeof MessageObjectSchema
  }
  readonly 'threads/{thread_id}/messages/{message_id}': {
    readonly input: typeof ModifyMessageRequestSchema
    readonly output: typeof MessageObjectSchema
  }
  readonly 'threads/{thread_id}/runs': {
    readonly input: typeof CreateRunRequestSchema
    readonly output: typeof RunObjectSchema
  }
  readonly 'threads/{thread_id}/runs/{run_id}': {
    readonly input: typeof ModifyRunRequestSchema
    readonly output: typeof RunObjectSchema
  }
  readonly 'threads/{thread_id}/runs/{run_id}/submit_tool_outputs': {
    readonly input: typeof SubmitToolOutputsRunRequestSchema
    readonly output: typeof RunObjectSchema
  }
  readonly 'threads/runs': {
    readonly input: typeof CreateThreadAndRunRequestSchema
    readonly output: typeof RunObjectSchema
  }
  readonly uploads: {
    readonly input: typeof CreateUploadRequestSchema
    readonly output: typeof UploadSchema
  }
  readonly 'uploads/{upload_id}/complete': {
    readonly input: typeof CompleteUploadRequestSchema
    readonly output: typeof UploadSchema
  }
  readonly vector_stores: {
    readonly input: typeof CreateVectorStoreRequestSchema
    readonly output: typeof VectorStoreObjectSchema
  }
  readonly 'vector_stores/{vector_store_id}': {
    readonly input: typeof UpdateVectorStoreRequestSchema
    readonly output: typeof VectorStoreObjectSchema
  }
  readonly 'vector_stores/{vector_store_id}/file_batches': {
    readonly input: typeof CreateVectorStoreFileBatchRequestSchema
    readonly output: typeof VectorStoreFileBatchObjectSchema
  }
  readonly 'vector_stores/{vector_store_id}/files': {
    readonly input: typeof CreateVectorStoreFileRequestSchema
    readonly output: typeof VectorStoreFileObjectSchema
  }
  readonly 'vector_stores/{vector_store_id}/files/{file_id}': {
    readonly input: typeof UpdateVectorStoreFileAttributesRequestSchema
    readonly output: typeof VectorStoreFileObjectSchema
  }
  readonly 'vector_stores/{vector_store_id}/search': {
    readonly input: typeof VectorStoreSearchRequestSchema
    readonly output: typeof VectorStoreSearchResultsPageSchema
  }
  readonly videos: {
    readonly input: typeof CreateVideoJsonBodySchema
    readonly output: typeof VideoResourceSchema
  }
  readonly 'videos/{video_id}/remix': {
    readonly input: typeof CreateVideoRemixBodySchema
    readonly output: typeof VideoResourceSchema
  }
  readonly 'videos/edits': {
    readonly input: typeof CreateVideoEditJsonBodySchema
    readonly output: typeof VideoResourceSchema
  }
  readonly 'videos/extensions': {
    readonly input: typeof CreateVideoExtendJsonBodySchema
    readonly output: typeof VideoResourceSchema
  }
} = {
  assistants: {
    input: CreateAssistantRequestSchema,
    output: AssistantObjectSchema,
  },
  'assistants/{assistant_id}': {
    input: ModifyAssistantRequestSchema,
    output: AssistantObjectSchema,
  },
  'audio/voice_consents/{consent_id}': {
    input: UpdateVoiceConsentRequestSchema,
    output: VoiceConsentResourceSchema,
  },
  'chat/completions': {
    input: CreateChatCompletionRequestSchema,
    output: CreateChatCompletionResponseSchema,
  },
  'chatkit/sessions': {
    input: CreateChatSessionBodySchema,
    output: ChatSessionResourceSchema,
  },
  completions: {
    input: CreateCompletionRequestSchema,
    output: CreateCompletionResponseSchema,
  },
  containers: {
    input: CreateContainerBodySchema,
    output: ContainerResourceSchema,
  },
  'containers/{container_id}/files': {
    input: CreateContainerFileBodySchema,
    output: ContainerFileResourceSchema,
  },
  conversations: {
    input: CreateConversationBodySchema,
    output: ConversationResourceSchema,
  },
  'conversations/{conversation_id}': {
    input: UpdateConversationBodySchema,
    output: ConversationResourceSchema,
  },
  embeddings: {
    input: CreateEmbeddingRequestSchema,
    output: CreateEmbeddingResponseSchema,
  },
  'fine_tuning/alpha/graders/run': {
    input: RunGraderRequestSchema,
    output: RunGraderResponseSchema,
  },
  'fine_tuning/alpha/graders/validate': {
    input: ValidateGraderRequestSchema,
    output: ValidateGraderResponseSchema,
  },
  'fine_tuning/checkpoints/{fine_tuned_model_checkpoint}/permissions': {
    input: CreateFineTuningCheckpointPermissionRequestSchema,
    output: ListFineTuningCheckpointPermissionResponseSchema,
  },
  'fine_tuning/jobs': {
    input: CreateFineTuningJobRequestSchema,
    output: FineTuningJobSchema,
  },
  'images/edits': {
    input: EditImageBodyJsonParamSchema,
    output: ImagesResponseSchema,
  },
  'images/generations': {
    input: CreateImageRequestSchema,
    output: ImagesResponseSchema,
  },
  moderations: {
    input: CreateModerationRequestSchema,
    output: CreateModerationResponseSchema,
  },
  'organization/certificates': {
    input: UploadCertificateRequestSchema,
    output: CertificateSchema,
  },
  'organization/certificates/{certificate_id}': {
    input: ModifyCertificateRequestSchema,
    output: CertificateSchema,
  },
  'organization/certificates/activate': {
    input: ToggleCertificatesRequestSchema,
    output: OrganizationCertificateActivationResponseSchema,
  },
  'organization/certificates/deactivate': {
    input: ToggleCertificatesRequestSchema,
    output: OrganizationCertificateDeactivationResponseSchema,
  },
  'organization/groups': {
    input: CreateGroupBodySchema,
    output: GroupResponseSchema,
  },
  'organization/groups/{group_id}': {
    input: UpdateGroupBodySchema,
    output: GroupResourceWithSuccessSchema,
  },
  'organization/groups/{group_id}/roles': {
    input: PublicAssignOrganizationGroupRoleBodySchema,
    output: GroupRoleAssignmentSchema,
  },
  'organization/groups/{group_id}/users': {
    input: CreateGroupUserBodySchema,
    output: GroupUserAssignmentSchema,
  },
  'organization/invites': { input: InviteRequestSchema, output: InviteSchema },
  'organization/projects': {
    input: ProjectCreateRequestSchema,
    output: ProjectSchema,
  },
  'organization/projects/{project_id}': {
    input: ProjectUpdateRequestSchema,
    output: ProjectSchema,
  },
  'organization/projects/{project_id}/certificates/activate': {
    input: ToggleCertificatesRequestSchema,
    output: OrganizationProjectCertificateActivationResponseSchema,
  },
  'organization/projects/{project_id}/certificates/deactivate': {
    input: ToggleCertificatesRequestSchema,
    output: OrganizationProjectCertificateDeactivationResponseSchema,
  },
  'organization/projects/{project_id}/groups': {
    input: InviteProjectGroupBodySchema,
    output: ProjectGroupSchema,
  },
  'organization/projects/{project_id}/rate_limits/{rate_limit_id}': {
    input: ProjectRateLimitUpdateRequestSchema,
    output: ProjectRateLimitSchema,
  },
  'organization/projects/{project_id}/service_accounts': {
    input: ProjectServiceAccountCreateRequestSchema,
    output: ProjectServiceAccountCreateResponseSchema,
  },
  'organization/projects/{project_id}/users': {
    input: ProjectUserCreateRequestSchema,
    output: ProjectUserSchema,
  },
  'organization/projects/{project_id}/users/{user_id}': {
    input: ProjectUserUpdateRequestSchema,
    output: ProjectUserSchema,
  },
  'organization/roles': {
    input: PublicCreateOrganizationRoleBodySchema,
    output: RoleSchema,
  },
  'organization/roles/{role_id}': {
    input: PublicUpdateOrganizationRoleBodySchema,
    output: RoleSchema,
  },
  'organization/users/{user_id}': {
    input: UserRoleUpdateRequestSchema,
    output: UserSchema,
  },
  'organization/users/{user_id}/roles': {
    input: PublicAssignOrganizationGroupRoleBodySchema,
    output: UserRoleAssignmentSchema,
  },
  'projects/{project_id}/groups/{group_id}/roles': {
    input: PublicAssignOrganizationGroupRoleBodySchema,
    output: GroupRoleAssignmentSchema,
  },
  'projects/{project_id}/roles': {
    input: PublicCreateOrganizationRoleBodySchema,
    output: RoleSchema,
  },
  'projects/{project_id}/roles/{role_id}': {
    input: PublicUpdateOrganizationRoleBodySchema,
    output: RoleSchema,
  },
  'projects/{project_id}/users/{user_id}/roles': {
    input: PublicAssignOrganizationGroupRoleBodySchema,
    output: UserRoleAssignmentSchema,
  },
  'realtime/client_secrets': {
    input: RealtimeCreateClientSecretRequestSchema,
    output: RealtimeCreateClientSecretResponseSchema,
  },
  'realtime/sessions': {
    input: RealtimeSessionCreateRequestSchema,
    output: RealtimeSessionCreateResponseSchema,
  },
  'realtime/transcription_sessions': {
    input: RealtimeTranscriptionSessionCreateRequestSchema,
    output: RealtimeTranscriptionSessionCreateResponseSchema,
  },
  'realtime/translations/client_secrets': {
    input: RealtimeTranslationClientSecretCreateRequestSchema,
    output: RealtimeTranslationClientSecretCreateResponseSchema,
  },
  responses: { input: CreateResponseSchema, output: ResponseSchema },
  'responses/compact': {
    input: CompactResponseMethodPublicBodySchema,
    output: CompactResourceSchema,
  },
  'responses/input_tokens': {
    input: TokenCountsBodySchema,
    output: TokenCountsResourceSchema,
  },
  skills: { input: CreateSkillBodySchema, output: SkillResourceSchema },
  'skills/{skill_id}': {
    input: SetDefaultSkillVersionBodySchema,
    output: SkillResourceSchema,
  },
  'skills/{skill_id}/versions': {
    input: CreateSkillVersionBodySchema,
    output: SkillVersionResourceSchema,
  },
  threads: { input: CreateThreadRequestSchema, output: ThreadObjectSchema },
  'threads/{thread_id}': {
    input: ModifyThreadRequestSchema,
    output: ThreadObjectSchema,
  },
  'threads/{thread_id}/messages': {
    input: CreateMessageRequestSchema,
    output: MessageObjectSchema,
  },
  'threads/{thread_id}/messages/{message_id}': {
    input: ModifyMessageRequestSchema,
    output: MessageObjectSchema,
  },
  'threads/{thread_id}/runs': {
    input: CreateRunRequestSchema,
    output: RunObjectSchema,
  },
  'threads/{thread_id}/runs/{run_id}': {
    input: ModifyRunRequestSchema,
    output: RunObjectSchema,
  },
  'threads/{thread_id}/runs/{run_id}/submit_tool_outputs': {
    input: SubmitToolOutputsRunRequestSchema,
    output: RunObjectSchema,
  },
  'threads/runs': {
    input: CreateThreadAndRunRequestSchema,
    output: RunObjectSchema,
  },
  uploads: { input: CreateUploadRequestSchema, output: UploadSchema },
  'uploads/{upload_id}/complete': {
    input: CompleteUploadRequestSchema,
    output: UploadSchema,
  },
  vector_stores: {
    input: CreateVectorStoreRequestSchema,
    output: VectorStoreObjectSchema,
  },
  'vector_stores/{vector_store_id}': {
    input: UpdateVectorStoreRequestSchema,
    output: VectorStoreObjectSchema,
  },
  'vector_stores/{vector_store_id}/file_batches': {
    input: CreateVectorStoreFileBatchRequestSchema,
    output: VectorStoreFileBatchObjectSchema,
  },
  'vector_stores/{vector_store_id}/files': {
    input: CreateVectorStoreFileRequestSchema,
    output: VectorStoreFileObjectSchema,
  },
  'vector_stores/{vector_store_id}/files/{file_id}': {
    input: UpdateVectorStoreFileAttributesRequestSchema,
    output: VectorStoreFileObjectSchema,
  },
  'vector_stores/{vector_store_id}/search': {
    input: VectorStoreSearchRequestSchema,
    output: VectorStoreSearchResultsPageSchema,
  },
  videos: { input: CreateVideoJsonBodySchema, output: VideoResourceSchema },
  'videos/{video_id}/remix': {
    input: CreateVideoRemixBodySchema,
    output: VideoResourceSchema,
  },
  'videos/edits': {
    input: CreateVideoEditJsonBodySchema,
    output: VideoResourceSchema,
  },
  'videos/extensions': {
    input: CreateVideoExtendJsonBodySchema,
    output: VideoResourceSchema,
  },
}
