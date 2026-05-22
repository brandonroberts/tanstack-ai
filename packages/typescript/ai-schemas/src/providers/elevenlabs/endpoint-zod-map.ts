// AUTO-GENERATED - Do not edit manually
// Generated via scripts/generate-endpoint-maps.ts

import {
  zAddChapterResponseModel,
  zAddKnowledgeBaseResponseModel,
  zAddPronunciationDictionaryResponseModel,
  zAddVoiceResponseModel,
  zAddWorkspaceGroupMemberResponseModel,
  zAddWorkspaceInviteResponseModel,
  zAgentDeploymentResponse,
  zAgentSimulatedChatTestResponseModel,
  zAudioNativeEditContentResponseModel,
  zAudioWithTimestampsAndVoiceSegmentsResponseModel,
  zAudioWithTimestampsResponseModel,
  zBatchCallResponse,
  zBodyAddAPronunciationDictionaryV1PronunciationDictionariesAddFromRulesPost,
  zBodyAddMemberToUserGroupV1WorkspaceGroupsGroupIdMembersPost,
  zBodyAddRulesToThePronunciationDictionaryV1PronunciationDictionariesPronunciationDictionaryIdAddRulesPost,
  zBodyAddSharedVoiceV1VoicesAddPublicUserIdVoiceIdPost,
  zBodyCreateANewBranchV1ConvaiAgentsAgentIdBranchesPost,
  zBodyCreateANewSpeakerV1DubbingResourceDubbingIdSpeakerPost,
  zBodyCreateANewVoiceFromVoicePreviewV1TextToVoicePost,
  zBodyCreateAgentTestFolderV1ConvaiAgentTestingFoldersPost,
  zBodyCreateAgentV1ConvaiAgentsCreatePost,
  zBodyCreateChapterV1StudioProjectsProjectIdChaptersPost,
  zBodyCreateFolderV1ConvaiKnowledgeBaseFolderPost,
  zBodyCreateOrUpdateDeploymentsV1ConvaiAgentsAgentIdDeploymentsPost,
  zBodyCreatePodcastV1StudioPodcastsPost,
  zBodyCreatePronunciationDictionariesV1StudioProjectsProjectIdPronunciationDictionariesPost,
  zBodyCreatePvcVoiceV1VoicesPvcPost,
  zBodyCreateServiceAccountApiKeyV1ServiceAccountsServiceAccountUserIdApiKeysPost,
  zBodyCreateTextDocumentV1ConvaiKnowledgeBaseTextPost,
  zBodyCreateUrlDocumentV1ConvaiKnowledgeBaseUrlPost,
  zBodyCreateWorkspaceWebhookV1WorkspaceWebhooksPost,
  zBodyDeleteMemberFromUserGroupV1WorkspaceGroupsGroupIdMembersRemovePost,
  zBodyDubsAllOrSomeSegmentsAndLanguagesV1DubbingResourceDubbingIdDubPost,
  zBodyDuplicateAgentV1ConvaiAgentsAgentIdDuplicatePost,
  zBodyEditPvcVoiceV1VoicesPvcVoiceIdPost,
  zBodyGenerateCompositionPlanV1MusicPlanPost,
  zBodyGetWorkspaceUsageV1WorkspaceAnalyticsQueryUsageByProductOverTimePost,
  zBodyHandleAnOutboundCallViaSipTrunkV1ConvaiSipTrunkOutboundCallPost,
  zBodyHandleAnOutboundCallViaTwilioV1ConvaiTwilioOutboundCallPost,
  zBodyInviteMultipleUsersV1WorkspaceInvitesAddBulkPost,
  zBodyInviteUserV1WorkspaceInvitesAddPost,
  zBodyListApiRequestsV1WorkspaceAnalyticsRequestsPost,
  zBodyMakeAnOutboundCallViaWhatsAppV1ConvaiWhatsappOutboundCallPost,
  zBodyMoveSegmentsBetweenSpeakersV1DubbingResourceDubbingIdMigrateSegmentsPost,
  zBodyRemoveRulesFromThePronunciationDictionaryV1PronunciationDictionariesPronunciationDictionaryIdRemoveRulesPost,
  zBodyRenderAudioOrVideoForTheGivenLanguageV1DubbingResourceDubbingIdRenderLanguagePost,
  zBodyRunPvcTrainingV1VoicesPvcVoiceIdTrainPost,
  zBodySendAnOutboundMessageViaWhatsAppV1ConvaiWhatsappOutboundMessagePost,
  zBodySetRulesOnThePronunciationDictionaryV1PronunciationDictionariesPronunciationDictionaryIdSetRulesPost,
  zBodySimulatesAConversationV1ConvaiAgentsAgentIdSimulateConversationPost,
  zBodySubmitABatchCallRequestV1ConvaiBatchCallingSubmitPost,
  zBodyTextToDialogueFullWithTimestamps,
  zBodyTextToDialogueStreamWithTimestamps,
  zBodyTextToSpeechFullWithTimestamps,
  zBodyTextToSpeechStreamWithTimestamps,
  zBodyTranscribesSegmentsV1DubbingResourceDubbingIdTranscribePost,
  zBodyTranslatesAllOrSomeSegmentsAndLanguagesV1DubbingResourceDubbingIdTranslatePost,
  zBodyUpdateAudioNativeContentFromUrlV1AudioNativeContentPost,
  zBodyUpdateChapterV1StudioProjectsProjectIdChaptersChapterIdPost,
  zBodyUpdateMemberV1WorkspaceMembersPost,
  zBodyUpdatePvcVoiceSampleV1VoicesPvcVoiceIdSamplesSampleIdPost,
  zBodyUpdateStudioProjectV1StudioProjectsProjectIdPost,
  zBodyUpsertOrderItemV1ProductionsOrdersOrderIdItemsPost,
  zConversationTagResponseModel,
  zCreateAgentBranchResponseModel,
  zCreateAgentResponseModel,
  zCreateAgentTestFolderResponseModel,
  zCreateConversationTagRequestModel,
  zCreatePronunciationDictionaryResponseModel,
  zDeleteWorkspaceGroupMemberResponseModel,
  zDubbingRenderResponseModel,
  zEditChapterResponseModel,
  zEditProjectResponseModel,
  zEditVoiceSettingsResponseModel,
  zGetTestSuiteInvocationResponseModel,
  zGetTestsSummariesByIdsResponseModel,
  zListTestsByIdsRequestModel,
  zLlmUsageCalculatorPublicRequestModel,
  zLlmUsageCalculatorRequestModel,
  zLlmUsageCalculatorResponseModel,
  zMcpServerRequestModel,
  zMcpServerResponseModel,
  zMcpToolAddApprovalRequestModel,
  zMcpToolConfigOverrideCreateRequestModel,
  zMusicPrompt,
  zPodcastProjectResponseModel,
  zPostWorkspaceSecretRequest,
  zPostWorkspaceSecretResponseModel,
  zPronunciationDictionaryRulesResponseModel,
  zRagDocumentIndexResponseModel,
  zRagIndexRequestModel,
  zRunAgentTestsRequestModel,
  zSegmentDubResponse,
  zSegmentMigrationResponse,
  zSegmentTranscriptionResponse,
  zSegmentTranslationResponse,
  zSipTrunkOutboundCallResponse,
  zSpeakerCreatedResponse,
  zStartPvcVoiceTrainingResponseModel,
  zStreamingAudioChunkWithTimestampsAndVoiceSegmentsResponseModel,
  zStreamingAudioChunkWithTimestampsResponseModel,
  zToolRequestModel,
  zToolResponseModel,
  zTwilioOutboundCallResponse,
  zUpdateWorkspaceMemberResponseModel,
  zUpsertOrderItemResponse,
  zVoiceDesignRequestModel,
  zVoicePreviewsRequestModel,
  zVoicePreviewsResponseModel,
  zVoiceRemixRequestModel,
  zVoiceResponseModel,
  zVoiceSettingsResponseModel,
  zWhatsappOutboundCallResponse,
  zWhatsappOutboundMessageResponse,
  zWorkspaceAnalyticsQueryResponseModel,
  zWorkspaceCreateApiKeyResponseModel,
  zWorkspaceCreateWebhookResponseModel,
} from './zod.gen.js'

/** Map of elevenlabs endpoint id -> Zod input/output schemas. */
export const elevenlabsEndpointZodMap: {
  readonly 'v1/audio-native/content': {
    readonly input: typeof zBodyUpdateAudioNativeContentFromUrlV1AudioNativeContentPost
    readonly output: typeof zAudioNativeEditContentResponseModel
  }
  readonly 'v1/convai/agent-testing/folders': {
    readonly input: typeof zBodyCreateAgentTestFolderV1ConvaiAgentTestingFoldersPost
    readonly output: typeof zCreateAgentTestFolderResponseModel
  }
  readonly 'v1/convai/agent-testing/summaries': {
    readonly input: typeof zListTestsByIdsRequestModel
    readonly output: typeof zGetTestsSummariesByIdsResponseModel
  }
  readonly 'v1/convai/agent/{agent_id}/llm-usage/calculate': {
    readonly input: typeof zLlmUsageCalculatorRequestModel
    readonly output: typeof zLlmUsageCalculatorResponseModel
  }
  readonly 'v1/convai/agents/{agent_id}/branches': {
    readonly input: typeof zBodyCreateANewBranchV1ConvaiAgentsAgentIdBranchesPost
    readonly output: typeof zCreateAgentBranchResponseModel
  }
  readonly 'v1/convai/agents/{agent_id}/deployments': {
    readonly input: typeof zBodyCreateOrUpdateDeploymentsV1ConvaiAgentsAgentIdDeploymentsPost
    readonly output: typeof zAgentDeploymentResponse
  }
  readonly 'v1/convai/agents/{agent_id}/duplicate': {
    readonly input: typeof zBodyDuplicateAgentV1ConvaiAgentsAgentIdDuplicatePost
    readonly output: typeof zCreateAgentResponseModel
  }
  readonly 'v1/convai/agents/{agent_id}/run-tests': {
    readonly input: typeof zRunAgentTestsRequestModel
    readonly output: typeof zGetTestSuiteInvocationResponseModel
  }
  readonly 'v1/convai/agents/{agent_id}/simulate-conversation': {
    readonly input: typeof zBodySimulatesAConversationV1ConvaiAgentsAgentIdSimulateConversationPost
    readonly output: typeof zAgentSimulatedChatTestResponseModel
  }
  readonly 'v1/convai/agents/create': {
    readonly input: typeof zBodyCreateAgentV1ConvaiAgentsCreatePost
    readonly output: typeof zCreateAgentResponseModel
  }
  readonly 'v1/convai/batch-calling/submit': {
    readonly input: typeof zBodySubmitABatchCallRequestV1ConvaiBatchCallingSubmitPost
    readonly output: typeof zBatchCallResponse
  }
  readonly 'v1/convai/knowledge-base/{documentation_id}/rag-index': {
    readonly input: typeof zRagIndexRequestModel
    readonly output: typeof zRagDocumentIndexResponseModel
  }
  readonly 'v1/convai/knowledge-base/folder': {
    readonly input: typeof zBodyCreateFolderV1ConvaiKnowledgeBaseFolderPost
    readonly output: typeof zAddKnowledgeBaseResponseModel
  }
  readonly 'v1/convai/knowledge-base/text': {
    readonly input: typeof zBodyCreateTextDocumentV1ConvaiKnowledgeBaseTextPost
    readonly output: typeof zAddKnowledgeBaseResponseModel
  }
  readonly 'v1/convai/knowledge-base/url': {
    readonly input: typeof zBodyCreateUrlDocumentV1ConvaiKnowledgeBaseUrlPost
    readonly output: typeof zAddKnowledgeBaseResponseModel
  }
  readonly 'v1/convai/llm-usage/calculate': {
    readonly input: typeof zLlmUsageCalculatorPublicRequestModel
    readonly output: typeof zLlmUsageCalculatorResponseModel
  }
  readonly 'v1/convai/mcp-servers': {
    readonly input: typeof zMcpServerRequestModel
    readonly output: typeof zMcpServerResponseModel
  }
  readonly 'v1/convai/mcp-servers/{mcp_server_id}/tool-approvals': {
    readonly input: typeof zMcpToolAddApprovalRequestModel
    readonly output: typeof zMcpServerResponseModel
  }
  readonly 'v1/convai/mcp-servers/{mcp_server_id}/tool-configs': {
    readonly input: typeof zMcpToolConfigOverrideCreateRequestModel
    readonly output: typeof zMcpServerResponseModel
  }
  readonly 'v1/convai/secrets': {
    readonly input: typeof zPostWorkspaceSecretRequest
    readonly output: typeof zPostWorkspaceSecretResponseModel
  }
  readonly 'v1/convai/sip-trunk/outbound-call': {
    readonly input: typeof zBodyHandleAnOutboundCallViaSipTrunkV1ConvaiSipTrunkOutboundCallPost
    readonly output: typeof zSipTrunkOutboundCallResponse
  }
  readonly 'v1/convai/tags': {
    readonly input: typeof zCreateConversationTagRequestModel
    readonly output: typeof zConversationTagResponseModel
  }
  readonly 'v1/convai/tools': {
    readonly input: typeof zToolRequestModel
    readonly output: typeof zToolResponseModel
  }
  readonly 'v1/convai/twilio/outbound-call': {
    readonly input: typeof zBodyHandleAnOutboundCallViaTwilioV1ConvaiTwilioOutboundCallPost
    readonly output: typeof zTwilioOutboundCallResponse
  }
  readonly 'v1/convai/whatsapp/outbound-call': {
    readonly input: typeof zBodyMakeAnOutboundCallViaWhatsAppV1ConvaiWhatsappOutboundCallPost
    readonly output: typeof zWhatsappOutboundCallResponse
  }
  readonly 'v1/convai/whatsapp/outbound-message': {
    readonly input: typeof zBodySendAnOutboundMessageViaWhatsAppV1ConvaiWhatsappOutboundMessagePost
    readonly output: typeof zWhatsappOutboundMessageResponse
  }
  readonly 'v1/dubbing/resource/{dubbing_id}/dub': {
    readonly input: typeof zBodyDubsAllOrSomeSegmentsAndLanguagesV1DubbingResourceDubbingIdDubPost
    readonly output: typeof zSegmentDubResponse
  }
  readonly 'v1/dubbing/resource/{dubbing_id}/migrate-segments': {
    readonly input: typeof zBodyMoveSegmentsBetweenSpeakersV1DubbingResourceDubbingIdMigrateSegmentsPost
    readonly output: typeof zSegmentMigrationResponse
  }
  readonly 'v1/dubbing/resource/{dubbing_id}/render/{language}': {
    readonly input: typeof zBodyRenderAudioOrVideoForTheGivenLanguageV1DubbingResourceDubbingIdRenderLanguagePost
    readonly output: typeof zDubbingRenderResponseModel
  }
  readonly 'v1/dubbing/resource/{dubbing_id}/speaker': {
    readonly input: typeof zBodyCreateANewSpeakerV1DubbingResourceDubbingIdSpeakerPost
    readonly output: typeof zSpeakerCreatedResponse
  }
  readonly 'v1/dubbing/resource/{dubbing_id}/transcribe': {
    readonly input: typeof zBodyTranscribesSegmentsV1DubbingResourceDubbingIdTranscribePost
    readonly output: typeof zSegmentTranscriptionResponse
  }
  readonly 'v1/dubbing/resource/{dubbing_id}/translate': {
    readonly input: typeof zBodyTranslatesAllOrSomeSegmentsAndLanguagesV1DubbingResourceDubbingIdTranslatePost
    readonly output: typeof zSegmentTranslationResponse
  }
  readonly 'v1/music/plan': {
    readonly input: typeof zBodyGenerateCompositionPlanV1MusicPlanPost
    readonly output: typeof zMusicPrompt
  }
  readonly 'v1/productions/orders/{order_id}/items': {
    readonly input: typeof zBodyUpsertOrderItemV1ProductionsOrdersOrderIdItemsPost
    readonly output: typeof zUpsertOrderItemResponse
  }
  readonly 'v1/pronunciation-dictionaries/{pronunciation_dictionary_id}/add-rules': {
    readonly input: typeof zBodyAddRulesToThePronunciationDictionaryV1PronunciationDictionariesPronunciationDictionaryIdAddRulesPost
    readonly output: typeof zPronunciationDictionaryRulesResponseModel
  }
  readonly 'v1/pronunciation-dictionaries/{pronunciation_dictionary_id}/remove-rules': {
    readonly input: typeof zBodyRemoveRulesFromThePronunciationDictionaryV1PronunciationDictionariesPronunciationDictionaryIdRemoveRulesPost
    readonly output: typeof zPronunciationDictionaryRulesResponseModel
  }
  readonly 'v1/pronunciation-dictionaries/{pronunciation_dictionary_id}/set-rules': {
    readonly input: typeof zBodySetRulesOnThePronunciationDictionaryV1PronunciationDictionariesPronunciationDictionaryIdSetRulesPost
    readonly output: typeof zPronunciationDictionaryRulesResponseModel
  }
  readonly 'v1/pronunciation-dictionaries/add-from-rules': {
    readonly input: typeof zBodyAddAPronunciationDictionaryV1PronunciationDictionariesAddFromRulesPost
    readonly output: typeof zAddPronunciationDictionaryResponseModel
  }
  readonly 'v1/service-accounts/{service_account_user_id}/api-keys': {
    readonly input: typeof zBodyCreateServiceAccountApiKeyV1ServiceAccountsServiceAccountUserIdApiKeysPost
    readonly output: typeof zWorkspaceCreateApiKeyResponseModel
  }
  readonly 'v1/studio/podcasts': {
    readonly input: typeof zBodyCreatePodcastV1StudioPodcastsPost
    readonly output: typeof zPodcastProjectResponseModel
  }
  readonly 'v1/studio/projects/{project_id}': {
    readonly input: typeof zBodyUpdateStudioProjectV1StudioProjectsProjectIdPost
    readonly output: typeof zEditProjectResponseModel
  }
  readonly 'v1/studio/projects/{project_id}/chapters': {
    readonly input: typeof zBodyCreateChapterV1StudioProjectsProjectIdChaptersPost
    readonly output: typeof zAddChapterResponseModel
  }
  readonly 'v1/studio/projects/{project_id}/chapters/{chapter_id}': {
    readonly input: typeof zBodyUpdateChapterV1StudioProjectsProjectIdChaptersChapterIdPost
    readonly output: typeof zEditChapterResponseModel
  }
  readonly 'v1/studio/projects/{project_id}/pronunciation-dictionaries': {
    readonly input: typeof zBodyCreatePronunciationDictionariesV1StudioProjectsProjectIdPronunciationDictionariesPost
    readonly output: typeof zCreatePronunciationDictionaryResponseModel
  }
  readonly 'v1/text-to-dialogue/stream/with-timestamps': {
    readonly input: typeof zBodyTextToDialogueStreamWithTimestamps
    readonly output: typeof zStreamingAudioChunkWithTimestampsAndVoiceSegmentsResponseModel
  }
  readonly 'v1/text-to-dialogue/with-timestamps': {
    readonly input: typeof zBodyTextToDialogueFullWithTimestamps
    readonly output: typeof zAudioWithTimestampsAndVoiceSegmentsResponseModel
  }
  readonly 'v1/text-to-speech/{voice_id}/stream/with-timestamps': {
    readonly input: typeof zBodyTextToSpeechStreamWithTimestamps
    readonly output: typeof zStreamingAudioChunkWithTimestampsResponseModel
  }
  readonly 'v1/text-to-speech/{voice_id}/with-timestamps': {
    readonly input: typeof zBodyTextToSpeechFullWithTimestamps
    readonly output: typeof zAudioWithTimestampsResponseModel
  }
  readonly 'v1/text-to-voice': {
    readonly input: typeof zBodyCreateANewVoiceFromVoicePreviewV1TextToVoicePost
    readonly output: typeof zVoiceResponseModel
  }
  readonly 'v1/text-to-voice/{voice_id}/remix': {
    readonly input: typeof zVoiceRemixRequestModel
    readonly output: typeof zVoicePreviewsResponseModel
  }
  readonly 'v1/text-to-voice/create-previews': {
    readonly input: typeof zVoicePreviewsRequestModel
    readonly output: typeof zVoicePreviewsResponseModel
  }
  readonly 'v1/text-to-voice/design': {
    readonly input: typeof zVoiceDesignRequestModel
    readonly output: typeof zVoicePreviewsResponseModel
  }
  readonly 'v1/voices/{voice_id}/settings/edit': {
    readonly input: typeof zVoiceSettingsResponseModel
    readonly output: typeof zEditVoiceSettingsResponseModel
  }
  readonly 'v1/voices/add/{public_user_id}/{voice_id}': {
    readonly input: typeof zBodyAddSharedVoiceV1VoicesAddPublicUserIdVoiceIdPost
    readonly output: typeof zAddVoiceResponseModel
  }
  readonly 'v1/voices/pvc': {
    readonly input: typeof zBodyCreatePvcVoiceV1VoicesPvcPost
    readonly output: typeof zAddVoiceResponseModel
  }
  readonly 'v1/voices/pvc/{voice_id}': {
    readonly input: typeof zBodyEditPvcVoiceV1VoicesPvcVoiceIdPost
    readonly output: typeof zAddVoiceResponseModel
  }
  readonly 'v1/voices/pvc/{voice_id}/samples/{sample_id}': {
    readonly input: typeof zBodyUpdatePvcVoiceSampleV1VoicesPvcVoiceIdSamplesSampleIdPost
    readonly output: typeof zAddVoiceResponseModel
  }
  readonly 'v1/voices/pvc/{voice_id}/train': {
    readonly input: typeof zBodyRunPvcTrainingV1VoicesPvcVoiceIdTrainPost
    readonly output: typeof zStartPvcVoiceTrainingResponseModel
  }
  readonly 'v1/workspace/analytics/query/usage-by-product-over-time': {
    readonly input: typeof zBodyGetWorkspaceUsageV1WorkspaceAnalyticsQueryUsageByProductOverTimePost
    readonly output: typeof zWorkspaceAnalyticsQueryResponseModel
  }
  readonly 'v1/workspace/analytics/requests': {
    readonly input: typeof zBodyListApiRequestsV1WorkspaceAnalyticsRequestsPost
    readonly output: typeof zWorkspaceAnalyticsQueryResponseModel
  }
  readonly 'v1/workspace/groups/{group_id}/members': {
    readonly input: typeof zBodyAddMemberToUserGroupV1WorkspaceGroupsGroupIdMembersPost
    readonly output: typeof zAddWorkspaceGroupMemberResponseModel
  }
  readonly 'v1/workspace/groups/{group_id}/members/remove': {
    readonly input: typeof zBodyDeleteMemberFromUserGroupV1WorkspaceGroupsGroupIdMembersRemovePost
    readonly output: typeof zDeleteWorkspaceGroupMemberResponseModel
  }
  readonly 'v1/workspace/invites/add': {
    readonly input: typeof zBodyInviteUserV1WorkspaceInvitesAddPost
    readonly output: typeof zAddWorkspaceInviteResponseModel
  }
  readonly 'v1/workspace/invites/add-bulk': {
    readonly input: typeof zBodyInviteMultipleUsersV1WorkspaceInvitesAddBulkPost
    readonly output: typeof zAddWorkspaceInviteResponseModel
  }
  readonly 'v1/workspace/members': {
    readonly input: typeof zBodyUpdateMemberV1WorkspaceMembersPost
    readonly output: typeof zUpdateWorkspaceMemberResponseModel
  }
  readonly 'v1/workspace/webhooks': {
    readonly input: typeof zBodyCreateWorkspaceWebhookV1WorkspaceWebhooksPost
    readonly output: typeof zWorkspaceCreateWebhookResponseModel
  }
} = {
  'v1/audio-native/content': {
    input: zBodyUpdateAudioNativeContentFromUrlV1AudioNativeContentPost,
    output: zAudioNativeEditContentResponseModel,
  },
  'v1/convai/agent-testing/folders': {
    input: zBodyCreateAgentTestFolderV1ConvaiAgentTestingFoldersPost,
    output: zCreateAgentTestFolderResponseModel,
  },
  'v1/convai/agent-testing/summaries': {
    input: zListTestsByIdsRequestModel,
    output: zGetTestsSummariesByIdsResponseModel,
  },
  'v1/convai/agent/{agent_id}/llm-usage/calculate': {
    input: zLlmUsageCalculatorRequestModel,
    output: zLlmUsageCalculatorResponseModel,
  },
  'v1/convai/agents/{agent_id}/branches': {
    input: zBodyCreateANewBranchV1ConvaiAgentsAgentIdBranchesPost,
    output: zCreateAgentBranchResponseModel,
  },
  'v1/convai/agents/{agent_id}/deployments': {
    input: zBodyCreateOrUpdateDeploymentsV1ConvaiAgentsAgentIdDeploymentsPost,
    output: zAgentDeploymentResponse,
  },
  'v1/convai/agents/{agent_id}/duplicate': {
    input: zBodyDuplicateAgentV1ConvaiAgentsAgentIdDuplicatePost,
    output: zCreateAgentResponseModel,
  },
  'v1/convai/agents/{agent_id}/run-tests': {
    input: zRunAgentTestsRequestModel,
    output: zGetTestSuiteInvocationResponseModel,
  },
  'v1/convai/agents/{agent_id}/simulate-conversation': {
    input:
      zBodySimulatesAConversationV1ConvaiAgentsAgentIdSimulateConversationPost,
    output: zAgentSimulatedChatTestResponseModel,
  },
  'v1/convai/agents/create': {
    input: zBodyCreateAgentV1ConvaiAgentsCreatePost,
    output: zCreateAgentResponseModel,
  },
  'v1/convai/batch-calling/submit': {
    input: zBodySubmitABatchCallRequestV1ConvaiBatchCallingSubmitPost,
    output: zBatchCallResponse,
  },
  'v1/convai/knowledge-base/{documentation_id}/rag-index': {
    input: zRagIndexRequestModel,
    output: zRagDocumentIndexResponseModel,
  },
  'v1/convai/knowledge-base/folder': {
    input: zBodyCreateFolderV1ConvaiKnowledgeBaseFolderPost,
    output: zAddKnowledgeBaseResponseModel,
  },
  'v1/convai/knowledge-base/text': {
    input: zBodyCreateTextDocumentV1ConvaiKnowledgeBaseTextPost,
    output: zAddKnowledgeBaseResponseModel,
  },
  'v1/convai/knowledge-base/url': {
    input: zBodyCreateUrlDocumentV1ConvaiKnowledgeBaseUrlPost,
    output: zAddKnowledgeBaseResponseModel,
  },
  'v1/convai/llm-usage/calculate': {
    input: zLlmUsageCalculatorPublicRequestModel,
    output: zLlmUsageCalculatorResponseModel,
  },
  'v1/convai/mcp-servers': {
    input: zMcpServerRequestModel,
    output: zMcpServerResponseModel,
  },
  'v1/convai/mcp-servers/{mcp_server_id}/tool-approvals': {
    input: zMcpToolAddApprovalRequestModel,
    output: zMcpServerResponseModel,
  },
  'v1/convai/mcp-servers/{mcp_server_id}/tool-configs': {
    input: zMcpToolConfigOverrideCreateRequestModel,
    output: zMcpServerResponseModel,
  },
  'v1/convai/secrets': {
    input: zPostWorkspaceSecretRequest,
    output: zPostWorkspaceSecretResponseModel,
  },
  'v1/convai/sip-trunk/outbound-call': {
    input: zBodyHandleAnOutboundCallViaSipTrunkV1ConvaiSipTrunkOutboundCallPost,
    output: zSipTrunkOutboundCallResponse,
  },
  'v1/convai/tags': {
    input: zCreateConversationTagRequestModel,
    output: zConversationTagResponseModel,
  },
  'v1/convai/tools': { input: zToolRequestModel, output: zToolResponseModel },
  'v1/convai/twilio/outbound-call': {
    input: zBodyHandleAnOutboundCallViaTwilioV1ConvaiTwilioOutboundCallPost,
    output: zTwilioOutboundCallResponse,
  },
  'v1/convai/whatsapp/outbound-call': {
    input: zBodyMakeAnOutboundCallViaWhatsAppV1ConvaiWhatsappOutboundCallPost,
    output: zWhatsappOutboundCallResponse,
  },
  'v1/convai/whatsapp/outbound-message': {
    input:
      zBodySendAnOutboundMessageViaWhatsAppV1ConvaiWhatsappOutboundMessagePost,
    output: zWhatsappOutboundMessageResponse,
  },
  'v1/dubbing/resource/{dubbing_id}/dub': {
    input:
      zBodyDubsAllOrSomeSegmentsAndLanguagesV1DubbingResourceDubbingIdDubPost,
    output: zSegmentDubResponse,
  },
  'v1/dubbing/resource/{dubbing_id}/migrate-segments': {
    input:
      zBodyMoveSegmentsBetweenSpeakersV1DubbingResourceDubbingIdMigrateSegmentsPost,
    output: zSegmentMigrationResponse,
  },
  'v1/dubbing/resource/{dubbing_id}/render/{language}': {
    input:
      zBodyRenderAudioOrVideoForTheGivenLanguageV1DubbingResourceDubbingIdRenderLanguagePost,
    output: zDubbingRenderResponseModel,
  },
  'v1/dubbing/resource/{dubbing_id}/speaker': {
    input: zBodyCreateANewSpeakerV1DubbingResourceDubbingIdSpeakerPost,
    output: zSpeakerCreatedResponse,
  },
  'v1/dubbing/resource/{dubbing_id}/transcribe': {
    input: zBodyTranscribesSegmentsV1DubbingResourceDubbingIdTranscribePost,
    output: zSegmentTranscriptionResponse,
  },
  'v1/dubbing/resource/{dubbing_id}/translate': {
    input:
      zBodyTranslatesAllOrSomeSegmentsAndLanguagesV1DubbingResourceDubbingIdTranslatePost,
    output: zSegmentTranslationResponse,
  },
  'v1/music/plan': {
    input: zBodyGenerateCompositionPlanV1MusicPlanPost,
    output: zMusicPrompt,
  },
  'v1/productions/orders/{order_id}/items': {
    input: zBodyUpsertOrderItemV1ProductionsOrdersOrderIdItemsPost,
    output: zUpsertOrderItemResponse,
  },
  'v1/pronunciation-dictionaries/{pronunciation_dictionary_id}/add-rules': {
    input:
      zBodyAddRulesToThePronunciationDictionaryV1PronunciationDictionariesPronunciationDictionaryIdAddRulesPost,
    output: zPronunciationDictionaryRulesResponseModel,
  },
  'v1/pronunciation-dictionaries/{pronunciation_dictionary_id}/remove-rules': {
    input:
      zBodyRemoveRulesFromThePronunciationDictionaryV1PronunciationDictionariesPronunciationDictionaryIdRemoveRulesPost,
    output: zPronunciationDictionaryRulesResponseModel,
  },
  'v1/pronunciation-dictionaries/{pronunciation_dictionary_id}/set-rules': {
    input:
      zBodySetRulesOnThePronunciationDictionaryV1PronunciationDictionariesPronunciationDictionaryIdSetRulesPost,
    output: zPronunciationDictionaryRulesResponseModel,
  },
  'v1/pronunciation-dictionaries/add-from-rules': {
    input:
      zBodyAddAPronunciationDictionaryV1PronunciationDictionariesAddFromRulesPost,
    output: zAddPronunciationDictionaryResponseModel,
  },
  'v1/service-accounts/{service_account_user_id}/api-keys': {
    input:
      zBodyCreateServiceAccountApiKeyV1ServiceAccountsServiceAccountUserIdApiKeysPost,
    output: zWorkspaceCreateApiKeyResponseModel,
  },
  'v1/studio/podcasts': {
    input: zBodyCreatePodcastV1StudioPodcastsPost,
    output: zPodcastProjectResponseModel,
  },
  'v1/studio/projects/{project_id}': {
    input: zBodyUpdateStudioProjectV1StudioProjectsProjectIdPost,
    output: zEditProjectResponseModel,
  },
  'v1/studio/projects/{project_id}/chapters': {
    input: zBodyCreateChapterV1StudioProjectsProjectIdChaptersPost,
    output: zAddChapterResponseModel,
  },
  'v1/studio/projects/{project_id}/chapters/{chapter_id}': {
    input: zBodyUpdateChapterV1StudioProjectsProjectIdChaptersChapterIdPost,
    output: zEditChapterResponseModel,
  },
  'v1/studio/projects/{project_id}/pronunciation-dictionaries': {
    input:
      zBodyCreatePronunciationDictionariesV1StudioProjectsProjectIdPronunciationDictionariesPost,
    output: zCreatePronunciationDictionaryResponseModel,
  },
  'v1/text-to-dialogue/stream/with-timestamps': {
    input: zBodyTextToDialogueStreamWithTimestamps,
    output: zStreamingAudioChunkWithTimestampsAndVoiceSegmentsResponseModel,
  },
  'v1/text-to-dialogue/with-timestamps': {
    input: zBodyTextToDialogueFullWithTimestamps,
    output: zAudioWithTimestampsAndVoiceSegmentsResponseModel,
  },
  'v1/text-to-speech/{voice_id}/stream/with-timestamps': {
    input: zBodyTextToSpeechStreamWithTimestamps,
    output: zStreamingAudioChunkWithTimestampsResponseModel,
  },
  'v1/text-to-speech/{voice_id}/with-timestamps': {
    input: zBodyTextToSpeechFullWithTimestamps,
    output: zAudioWithTimestampsResponseModel,
  },
  'v1/text-to-voice': {
    input: zBodyCreateANewVoiceFromVoicePreviewV1TextToVoicePost,
    output: zVoiceResponseModel,
  },
  'v1/text-to-voice/{voice_id}/remix': {
    input: zVoiceRemixRequestModel,
    output: zVoicePreviewsResponseModel,
  },
  'v1/text-to-voice/create-previews': {
    input: zVoicePreviewsRequestModel,
    output: zVoicePreviewsResponseModel,
  },
  'v1/text-to-voice/design': {
    input: zVoiceDesignRequestModel,
    output: zVoicePreviewsResponseModel,
  },
  'v1/voices/{voice_id}/settings/edit': {
    input: zVoiceSettingsResponseModel,
    output: zEditVoiceSettingsResponseModel,
  },
  'v1/voices/add/{public_user_id}/{voice_id}': {
    input: zBodyAddSharedVoiceV1VoicesAddPublicUserIdVoiceIdPost,
    output: zAddVoiceResponseModel,
  },
  'v1/voices/pvc': {
    input: zBodyCreatePvcVoiceV1VoicesPvcPost,
    output: zAddVoiceResponseModel,
  },
  'v1/voices/pvc/{voice_id}': {
    input: zBodyEditPvcVoiceV1VoicesPvcVoiceIdPost,
    output: zAddVoiceResponseModel,
  },
  'v1/voices/pvc/{voice_id}/samples/{sample_id}': {
    input: zBodyUpdatePvcVoiceSampleV1VoicesPvcVoiceIdSamplesSampleIdPost,
    output: zAddVoiceResponseModel,
  },
  'v1/voices/pvc/{voice_id}/train': {
    input: zBodyRunPvcTrainingV1VoicesPvcVoiceIdTrainPost,
    output: zStartPvcVoiceTrainingResponseModel,
  },
  'v1/workspace/analytics/query/usage-by-product-over-time': {
    input:
      zBodyGetWorkspaceUsageV1WorkspaceAnalyticsQueryUsageByProductOverTimePost,
    output: zWorkspaceAnalyticsQueryResponseModel,
  },
  'v1/workspace/analytics/requests': {
    input: zBodyListApiRequestsV1WorkspaceAnalyticsRequestsPost,
    output: zWorkspaceAnalyticsQueryResponseModel,
  },
  'v1/workspace/groups/{group_id}/members': {
    input: zBodyAddMemberToUserGroupV1WorkspaceGroupsGroupIdMembersPost,
    output: zAddWorkspaceGroupMemberResponseModel,
  },
  'v1/workspace/groups/{group_id}/members/remove': {
    input:
      zBodyDeleteMemberFromUserGroupV1WorkspaceGroupsGroupIdMembersRemovePost,
    output: zDeleteWorkspaceGroupMemberResponseModel,
  },
  'v1/workspace/invites/add': {
    input: zBodyInviteUserV1WorkspaceInvitesAddPost,
    output: zAddWorkspaceInviteResponseModel,
  },
  'v1/workspace/invites/add-bulk': {
    input: zBodyInviteMultipleUsersV1WorkspaceInvitesAddBulkPost,
    output: zAddWorkspaceInviteResponseModel,
  },
  'v1/workspace/members': {
    input: zBodyUpdateMemberV1WorkspaceMembersPost,
    output: zUpdateWorkspaceMemberResponseModel,
  },
  'v1/workspace/webhooks': {
    input: zBodyCreateWorkspaceWebhookV1WorkspaceWebhooksPost,
    output: zWorkspaceCreateWebhookResponseModel,
  },
}

/** Union of valid elevenlabs endpoint ids. */
export type ElevenlabsEndpointId = keyof typeof elevenlabsEndpointZodMap
