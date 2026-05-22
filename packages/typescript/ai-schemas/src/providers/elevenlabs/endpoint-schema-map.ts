// AUTO-GENERATED - Do not edit manually
// Generated via scripts/generate-endpoint-maps.ts

import {
  AddChapterResponseModelSchema,
  AddKnowledgeBaseResponseModelSchema,
  AddPronunciationDictionaryResponseModelSchema,
  AddVoiceResponseModelSchema,
  AddWorkspaceGroupMemberResponseModelSchema,
  AddWorkspaceInviteResponseModelSchema,
  AgentDeploymentResponseSchema,
  AgentSimulatedChatTestResponseModelSchema,
  AudioNativeEditContentResponseModelSchema,
  AudioWithTimestampsAndVoiceSegmentsResponseModelSchema,
  AudioWithTimestampsResponseModelSchema,
  BatchCallResponseSchema,
  Body_Add_a_pronunciation_dictionary_v1_pronunciation_dictionaries_add_from_rules_postSchema,
  Body_Add_member_to_user_group_v1_workspace_groups__group_id__members_postSchema,
  Body_Add_rules_to_the_pronunciation_dictionary_v1_pronunciation_dictionaries__pronunciation_dictionary_id__add_rules_postSchema,
  Body_Add_shared_voice_v1_voices_add__public_user_id___voice_id__postSchema,
  Body_Create_Agent_v1_convai_agents_create_postSchema,
  Body_Create_PVC_voice_v1_voices_pvc_postSchema,
  Body_Create_Pronunciation_Dictionaries_v1_studio_projects__project_id__pronunciation_dictionaries_postSchema,
  Body_Create_URL_document_v1_convai_knowledge_base_url_postSchema,
  Body_Create_a_new_branch_v1_convai_agents__agent_id__branches_postSchema,
  Body_Create_a_new_speaker_v1_dubbing_resource__dubbing_id__speaker_postSchema,
  Body_Create_a_new_voice_from_voice_preview_v1_text_to_voice_postSchema,
  Body_Create_agent_test_folder_v1_convai_agent_testing_folders_postSchema,
  Body_Create_chapter_v1_studio_projects__project_id__chapters_postSchema,
  Body_Create_folder_v1_convai_knowledge_base_folder_postSchema,
  Body_Create_or_update_deployments_v1_convai_agents__agent_id__deployments_postSchema,
  Body_Create_podcast_v1_studio_podcasts_postSchema,
  Body_Create_text_document_v1_convai_knowledge_base_text_postSchema,
  Body_Create_workspace_webhook_v1_workspace_webhooks_postSchema,
  Body_Delete_member_from_user_group_v1_workspace_groups__group_id__members_remove_postSchema,
  Body_Dubs_all_or_some_segments_and_languages_v1_dubbing_resource__dubbing_id__dub_postSchema,
  Body_Duplicate_Agent_v1_convai_agents__agent_id__duplicate_postSchema,
  Body_Edit_PVC_voice_v1_voices_pvc__voice_id__postSchema,
  Body_Generate_composition_plan_v1_music_plan_postSchema,
  Body_Get_Workspace_Usage_v1_workspace_analytics_query_usage_by_product_over_time_postSchema,
  Body_Handle_an_outbound_call_via_SIP_trunk_v1_convai_sip_trunk_outbound_call_postSchema,
  Body_Handle_an_outbound_call_via_Twilio_v1_convai_twilio_outbound_call_postSchema,
  Body_Invite_multiple_users_v1_workspace_invites_add_bulk_postSchema,
  Body_Invite_user_v1_workspace_invites_add_postSchema,
  Body_List_API_requests_v1_workspace_analytics_requests_postSchema,
  Body_Make_an_outbound_call_via_WhatsApp_v1_convai_whatsapp_outbound_call_postSchema,
  Body_Move_segments_between_speakers_v1_dubbing_resource__dubbing_id__migrate_segments_postSchema,
  Body_Remove_rules_from_the_pronunciation_dictionary_v1_pronunciation_dictionaries__pronunciation_dictionary_id__remove_rules_postSchema,
  Body_Render_audio_or_video_for_the_given_language_v1_dubbing_resource__dubbing_id__render__language__postSchema,
  Body_Run_PVC_training_v1_voices_pvc__voice_id__train_postSchema,
  Body_Send_an_outbound_message_via_WhatsApp_v1_convai_whatsapp_outbound_message_postSchema,
  Body_Set_rules_on_the_pronunciation_dictionary_v1_pronunciation_dictionaries__pronunciation_dictionary_id__set_rules_postSchema,
  Body_Simulates_a_conversation_v1_convai_agents__agent_id__simulate_conversation_postSchema,
  Body_Submit_a_batch_call_request__v1_convai_batch_calling_submit_postSchema,
  Body_Transcribes_segments_v1_dubbing_resource__dubbing_id__transcribe_postSchema,
  Body_Translates_all_or_some_segments_and_languages_v1_dubbing_resource__dubbing_id__translate_postSchema,
  Body_Update_PVC_voice_sample_v1_voices_pvc__voice_id__samples__sample_id__postSchema,
  Body_Update_Studio_project_v1_studio_projects__project_id__postSchema,
  Body_Update_audio_native_content_from_URL_v1_audio_native_content_postSchema,
  Body_Update_chapter_v1_studio_projects__project_id__chapters__chapter_id__postSchema,
  Body_Update_member_v1_workspace_members_postSchema,
  Body_Upsert_order_item_v1_productions_orders__order_id__items_postSchema,
  Body_create_service_account_api_key_v1_service_accounts__service_account_user_id__api_keys_postSchema,
  Body_text_to_dialogue_full_with_timestampsSchema,
  Body_text_to_dialogue_stream_with_timestampsSchema,
  Body_text_to_speech_full_with_timestampsSchema,
  Body_text_to_speech_stream_with_timestampsSchema,
  ConversationTagResponseModelSchema,
  CreateAgentBranchResponseModelSchema,
  CreateAgentResponseModelSchema,
  CreateAgentTestFolderResponseModelSchema,
  CreateConversationTagRequestModelSchema,
  CreatePronunciationDictionaryResponseModelSchema,
  DeleteWorkspaceGroupMemberResponseModelSchema,
  DubbingRenderResponseModelSchema,
  EditChapterResponseModelSchema,
  EditProjectResponseModelSchema,
  EditVoiceSettingsResponseModelSchema,
  GetTestSuiteInvocationResponseModelSchema,
  GetTestsSummariesByIdsResponseModelSchema,
  LLMUsageCalculatorPublicRequestModelSchema,
  LLMUsageCalculatorRequestModelSchema,
  LLMUsageCalculatorResponseModelSchema,
  ListTestsByIdsRequestModelSchema,
  MCPServerRequestModelSchema,
  MCPServerResponseModelSchema,
  MCPToolAddApprovalRequestModelSchema,
  MCPToolConfigOverrideCreateRequestModelSchema,
  MusicPromptSchema,
  PodcastProjectResponseModelSchema,
  PostWorkspaceSecretRequestSchema,
  PostWorkspaceSecretResponseModelSchema,
  PronunciationDictionaryRulesResponseModelSchema,
  RAGDocumentIndexResponseModelSchema,
  RAGIndexRequestModelSchema,
  RunAgentTestsRequestModelSchema,
  SIPTrunkOutboundCallResponseSchema,
  SegmentDubResponseSchema,
  SegmentMigrationResponseSchema,
  SegmentTranscriptionResponseSchema,
  SegmentTranslationResponseSchema,
  SpeakerCreatedResponseSchema,
  StartPVCVoiceTrainingResponseModelSchema,
  StreamingAudioChunkWithTimestampsAndVoiceSegmentsResponseModelSchema,
  StreamingAudioChunkWithTimestampsResponseModelSchema,
  ToolRequestModelSchema,
  ToolResponseModelSchema,
  TwilioOutboundCallResponseSchema,
  UpdateWorkspaceMemberResponseModelSchema,
  UpsertOrderItemResponseSchema,
  VoiceDesignRequestModelSchema,
  VoicePreviewsRequestModelSchema,
  VoicePreviewsResponseModelSchema,
  VoiceRemixRequestModelSchema,
  VoiceResponseModelSchema,
  VoiceSettingsResponseModelSchema,
  WhatsAppOutboundCallResponseSchema,
  WhatsAppOutboundMessageResponseSchema,
  WorkspaceAnalyticsQueryResponseModelSchema,
  WorkspaceCreateApiKeyResponseModelSchema,
  WorkspaceCreateWebhookResponseModelSchema,
} from './schemas.gen.js'

/**
 * Map of elevenlabs endpoint id -> self-contained JSON Schemas.
 * Each input/output schema bundles its $ref closure under `$defs`, so it
 * can be handed directly to LLM tool APIs or `z.fromJSONSchema`.
 */
export const elevenlabsEndpointSchemaMap: {
  readonly 'v1/audio-native/content': {
    readonly input: typeof Body_Update_audio_native_content_from_URL_v1_audio_native_content_postSchema
    readonly output: typeof AudioNativeEditContentResponseModelSchema
  }
  readonly 'v1/convai/agent-testing/folders': {
    readonly input: typeof Body_Create_agent_test_folder_v1_convai_agent_testing_folders_postSchema
    readonly output: typeof CreateAgentTestFolderResponseModelSchema
  }
  readonly 'v1/convai/agent-testing/summaries': {
    readonly input: typeof ListTestsByIdsRequestModelSchema
    readonly output: typeof GetTestsSummariesByIdsResponseModelSchema
  }
  readonly 'v1/convai/agent/{agent_id}/llm-usage/calculate': {
    readonly input: typeof LLMUsageCalculatorRequestModelSchema
    readonly output: typeof LLMUsageCalculatorResponseModelSchema
  }
  readonly 'v1/convai/agents/{agent_id}/branches': {
    readonly input: typeof Body_Create_a_new_branch_v1_convai_agents__agent_id__branches_postSchema
    readonly output: typeof CreateAgentBranchResponseModelSchema
  }
  readonly 'v1/convai/agents/{agent_id}/deployments': {
    readonly input: typeof Body_Create_or_update_deployments_v1_convai_agents__agent_id__deployments_postSchema
    readonly output: typeof AgentDeploymentResponseSchema
  }
  readonly 'v1/convai/agents/{agent_id}/duplicate': {
    readonly input: typeof Body_Duplicate_Agent_v1_convai_agents__agent_id__duplicate_postSchema
    readonly output: typeof CreateAgentResponseModelSchema
  }
  readonly 'v1/convai/agents/{agent_id}/run-tests': {
    readonly input: typeof RunAgentTestsRequestModelSchema
    readonly output: typeof GetTestSuiteInvocationResponseModelSchema
  }
  readonly 'v1/convai/agents/{agent_id}/simulate-conversation': {
    readonly input: typeof Body_Simulates_a_conversation_v1_convai_agents__agent_id__simulate_conversation_postSchema
    readonly output: typeof AgentSimulatedChatTestResponseModelSchema
  }
  readonly 'v1/convai/agents/create': {
    readonly input: typeof Body_Create_Agent_v1_convai_agents_create_postSchema
    readonly output: typeof CreateAgentResponseModelSchema
  }
  readonly 'v1/convai/batch-calling/submit': {
    readonly input: typeof Body_Submit_a_batch_call_request__v1_convai_batch_calling_submit_postSchema
    readonly output: typeof BatchCallResponseSchema
  }
  readonly 'v1/convai/knowledge-base/{documentation_id}/rag-index': {
    readonly input: typeof RAGIndexRequestModelSchema
    readonly output: typeof RAGDocumentIndexResponseModelSchema
  }
  readonly 'v1/convai/knowledge-base/folder': {
    readonly input: typeof Body_Create_folder_v1_convai_knowledge_base_folder_postSchema
    readonly output: typeof AddKnowledgeBaseResponseModelSchema
  }
  readonly 'v1/convai/knowledge-base/text': {
    readonly input: typeof Body_Create_text_document_v1_convai_knowledge_base_text_postSchema
    readonly output: typeof AddKnowledgeBaseResponseModelSchema
  }
  readonly 'v1/convai/knowledge-base/url': {
    readonly input: typeof Body_Create_URL_document_v1_convai_knowledge_base_url_postSchema
    readonly output: typeof AddKnowledgeBaseResponseModelSchema
  }
  readonly 'v1/convai/llm-usage/calculate': {
    readonly input: typeof LLMUsageCalculatorPublicRequestModelSchema
    readonly output: typeof LLMUsageCalculatorResponseModelSchema
  }
  readonly 'v1/convai/mcp-servers': {
    readonly input: typeof MCPServerRequestModelSchema
    readonly output: typeof MCPServerResponseModelSchema
  }
  readonly 'v1/convai/mcp-servers/{mcp_server_id}/tool-approvals': {
    readonly input: typeof MCPToolAddApprovalRequestModelSchema
    readonly output: typeof MCPServerResponseModelSchema
  }
  readonly 'v1/convai/mcp-servers/{mcp_server_id}/tool-configs': {
    readonly input: typeof MCPToolConfigOverrideCreateRequestModelSchema
    readonly output: typeof MCPServerResponseModelSchema
  }
  readonly 'v1/convai/secrets': {
    readonly input: typeof PostWorkspaceSecretRequestSchema
    readonly output: typeof PostWorkspaceSecretResponseModelSchema
  }
  readonly 'v1/convai/sip-trunk/outbound-call': {
    readonly input: typeof Body_Handle_an_outbound_call_via_SIP_trunk_v1_convai_sip_trunk_outbound_call_postSchema
    readonly output: typeof SIPTrunkOutboundCallResponseSchema
  }
  readonly 'v1/convai/tags': {
    readonly input: typeof CreateConversationTagRequestModelSchema
    readonly output: typeof ConversationTagResponseModelSchema
  }
  readonly 'v1/convai/tools': {
    readonly input: typeof ToolRequestModelSchema
    readonly output: typeof ToolResponseModelSchema
  }
  readonly 'v1/convai/twilio/outbound-call': {
    readonly input: typeof Body_Handle_an_outbound_call_via_Twilio_v1_convai_twilio_outbound_call_postSchema
    readonly output: typeof TwilioOutboundCallResponseSchema
  }
  readonly 'v1/convai/whatsapp/outbound-call': {
    readonly input: typeof Body_Make_an_outbound_call_via_WhatsApp_v1_convai_whatsapp_outbound_call_postSchema
    readonly output: typeof WhatsAppOutboundCallResponseSchema
  }
  readonly 'v1/convai/whatsapp/outbound-message': {
    readonly input: typeof Body_Send_an_outbound_message_via_WhatsApp_v1_convai_whatsapp_outbound_message_postSchema
    readonly output: typeof WhatsAppOutboundMessageResponseSchema
  }
  readonly 'v1/dubbing/resource/{dubbing_id}/dub': {
    readonly input: typeof Body_Dubs_all_or_some_segments_and_languages_v1_dubbing_resource__dubbing_id__dub_postSchema
    readonly output: typeof SegmentDubResponseSchema
  }
  readonly 'v1/dubbing/resource/{dubbing_id}/migrate-segments': {
    readonly input: typeof Body_Move_segments_between_speakers_v1_dubbing_resource__dubbing_id__migrate_segments_postSchema
    readonly output: typeof SegmentMigrationResponseSchema
  }
  readonly 'v1/dubbing/resource/{dubbing_id}/render/{language}': {
    readonly input: typeof Body_Render_audio_or_video_for_the_given_language_v1_dubbing_resource__dubbing_id__render__language__postSchema
    readonly output: typeof DubbingRenderResponseModelSchema
  }
  readonly 'v1/dubbing/resource/{dubbing_id}/speaker': {
    readonly input: typeof Body_Create_a_new_speaker_v1_dubbing_resource__dubbing_id__speaker_postSchema
    readonly output: typeof SpeakerCreatedResponseSchema
  }
  readonly 'v1/dubbing/resource/{dubbing_id}/transcribe': {
    readonly input: typeof Body_Transcribes_segments_v1_dubbing_resource__dubbing_id__transcribe_postSchema
    readonly output: typeof SegmentTranscriptionResponseSchema
  }
  readonly 'v1/dubbing/resource/{dubbing_id}/translate': {
    readonly input: typeof Body_Translates_all_or_some_segments_and_languages_v1_dubbing_resource__dubbing_id__translate_postSchema
    readonly output: typeof SegmentTranslationResponseSchema
  }
  readonly 'v1/music/plan': {
    readonly input: typeof Body_Generate_composition_plan_v1_music_plan_postSchema
    readonly output: typeof MusicPromptSchema
  }
  readonly 'v1/productions/orders/{order_id}/items': {
    readonly input: typeof Body_Upsert_order_item_v1_productions_orders__order_id__items_postSchema
    readonly output: typeof UpsertOrderItemResponseSchema
  }
  readonly 'v1/pronunciation-dictionaries/{pronunciation_dictionary_id}/add-rules': {
    readonly input: typeof Body_Add_rules_to_the_pronunciation_dictionary_v1_pronunciation_dictionaries__pronunciation_dictionary_id__add_rules_postSchema
    readonly output: typeof PronunciationDictionaryRulesResponseModelSchema
  }
  readonly 'v1/pronunciation-dictionaries/{pronunciation_dictionary_id}/remove-rules': {
    readonly input: typeof Body_Remove_rules_from_the_pronunciation_dictionary_v1_pronunciation_dictionaries__pronunciation_dictionary_id__remove_rules_postSchema
    readonly output: typeof PronunciationDictionaryRulesResponseModelSchema
  }
  readonly 'v1/pronunciation-dictionaries/{pronunciation_dictionary_id}/set-rules': {
    readonly input: typeof Body_Set_rules_on_the_pronunciation_dictionary_v1_pronunciation_dictionaries__pronunciation_dictionary_id__set_rules_postSchema
    readonly output: typeof PronunciationDictionaryRulesResponseModelSchema
  }
  readonly 'v1/pronunciation-dictionaries/add-from-rules': {
    readonly input: typeof Body_Add_a_pronunciation_dictionary_v1_pronunciation_dictionaries_add_from_rules_postSchema
    readonly output: typeof AddPronunciationDictionaryResponseModelSchema
  }
  readonly 'v1/service-accounts/{service_account_user_id}/api-keys': {
    readonly input: typeof Body_create_service_account_api_key_v1_service_accounts__service_account_user_id__api_keys_postSchema
    readonly output: typeof WorkspaceCreateApiKeyResponseModelSchema
  }
  readonly 'v1/studio/podcasts': {
    readonly input: typeof Body_Create_podcast_v1_studio_podcasts_postSchema
    readonly output: typeof PodcastProjectResponseModelSchema
  }
  readonly 'v1/studio/projects/{project_id}': {
    readonly input: typeof Body_Update_Studio_project_v1_studio_projects__project_id__postSchema
    readonly output: typeof EditProjectResponseModelSchema
  }
  readonly 'v1/studio/projects/{project_id}/chapters': {
    readonly input: typeof Body_Create_chapter_v1_studio_projects__project_id__chapters_postSchema
    readonly output: typeof AddChapterResponseModelSchema
  }
  readonly 'v1/studio/projects/{project_id}/chapters/{chapter_id}': {
    readonly input: typeof Body_Update_chapter_v1_studio_projects__project_id__chapters__chapter_id__postSchema
    readonly output: typeof EditChapterResponseModelSchema
  }
  readonly 'v1/studio/projects/{project_id}/pronunciation-dictionaries': {
    readonly input: typeof Body_Create_Pronunciation_Dictionaries_v1_studio_projects__project_id__pronunciation_dictionaries_postSchema
    readonly output: typeof CreatePronunciationDictionaryResponseModelSchema
  }
  readonly 'v1/text-to-dialogue/stream/with-timestamps': {
    readonly input: typeof Body_text_to_dialogue_stream_with_timestampsSchema
    readonly output: typeof StreamingAudioChunkWithTimestampsAndVoiceSegmentsResponseModelSchema
  }
  readonly 'v1/text-to-dialogue/with-timestamps': {
    readonly input: typeof Body_text_to_dialogue_full_with_timestampsSchema
    readonly output: typeof AudioWithTimestampsAndVoiceSegmentsResponseModelSchema
  }
  readonly 'v1/text-to-speech/{voice_id}/stream/with-timestamps': {
    readonly input: typeof Body_text_to_speech_stream_with_timestampsSchema
    readonly output: typeof StreamingAudioChunkWithTimestampsResponseModelSchema
  }
  readonly 'v1/text-to-speech/{voice_id}/with-timestamps': {
    readonly input: typeof Body_text_to_speech_full_with_timestampsSchema
    readonly output: typeof AudioWithTimestampsResponseModelSchema
  }
  readonly 'v1/text-to-voice': {
    readonly input: typeof Body_Create_a_new_voice_from_voice_preview_v1_text_to_voice_postSchema
    readonly output: typeof VoiceResponseModelSchema
  }
  readonly 'v1/text-to-voice/{voice_id}/remix': {
    readonly input: typeof VoiceRemixRequestModelSchema
    readonly output: typeof VoicePreviewsResponseModelSchema
  }
  readonly 'v1/text-to-voice/create-previews': {
    readonly input: typeof VoicePreviewsRequestModelSchema
    readonly output: typeof VoicePreviewsResponseModelSchema
  }
  readonly 'v1/text-to-voice/design': {
    readonly input: typeof VoiceDesignRequestModelSchema
    readonly output: typeof VoicePreviewsResponseModelSchema
  }
  readonly 'v1/voices/{voice_id}/settings/edit': {
    readonly input: typeof VoiceSettingsResponseModelSchema
    readonly output: typeof EditVoiceSettingsResponseModelSchema
  }
  readonly 'v1/voices/add/{public_user_id}/{voice_id}': {
    readonly input: typeof Body_Add_shared_voice_v1_voices_add__public_user_id___voice_id__postSchema
    readonly output: typeof AddVoiceResponseModelSchema
  }
  readonly 'v1/voices/pvc': {
    readonly input: typeof Body_Create_PVC_voice_v1_voices_pvc_postSchema
    readonly output: typeof AddVoiceResponseModelSchema
  }
  readonly 'v1/voices/pvc/{voice_id}': {
    readonly input: typeof Body_Edit_PVC_voice_v1_voices_pvc__voice_id__postSchema
    readonly output: typeof AddVoiceResponseModelSchema
  }
  readonly 'v1/voices/pvc/{voice_id}/samples/{sample_id}': {
    readonly input: typeof Body_Update_PVC_voice_sample_v1_voices_pvc__voice_id__samples__sample_id__postSchema
    readonly output: typeof AddVoiceResponseModelSchema
  }
  readonly 'v1/voices/pvc/{voice_id}/train': {
    readonly input: typeof Body_Run_PVC_training_v1_voices_pvc__voice_id__train_postSchema
    readonly output: typeof StartPVCVoiceTrainingResponseModelSchema
  }
  readonly 'v1/workspace/analytics/query/usage-by-product-over-time': {
    readonly input: typeof Body_Get_Workspace_Usage_v1_workspace_analytics_query_usage_by_product_over_time_postSchema
    readonly output: typeof WorkspaceAnalyticsQueryResponseModelSchema
  }
  readonly 'v1/workspace/analytics/requests': {
    readonly input: typeof Body_List_API_requests_v1_workspace_analytics_requests_postSchema
    readonly output: typeof WorkspaceAnalyticsQueryResponseModelSchema
  }
  readonly 'v1/workspace/groups/{group_id}/members': {
    readonly input: typeof Body_Add_member_to_user_group_v1_workspace_groups__group_id__members_postSchema
    readonly output: typeof AddWorkspaceGroupMemberResponseModelSchema
  }
  readonly 'v1/workspace/groups/{group_id}/members/remove': {
    readonly input: typeof Body_Delete_member_from_user_group_v1_workspace_groups__group_id__members_remove_postSchema
    readonly output: typeof DeleteWorkspaceGroupMemberResponseModelSchema
  }
  readonly 'v1/workspace/invites/add': {
    readonly input: typeof Body_Invite_user_v1_workspace_invites_add_postSchema
    readonly output: typeof AddWorkspaceInviteResponseModelSchema
  }
  readonly 'v1/workspace/invites/add-bulk': {
    readonly input: typeof Body_Invite_multiple_users_v1_workspace_invites_add_bulk_postSchema
    readonly output: typeof AddWorkspaceInviteResponseModelSchema
  }
  readonly 'v1/workspace/members': {
    readonly input: typeof Body_Update_member_v1_workspace_members_postSchema
    readonly output: typeof UpdateWorkspaceMemberResponseModelSchema
  }
  readonly 'v1/workspace/webhooks': {
    readonly input: typeof Body_Create_workspace_webhook_v1_workspace_webhooks_postSchema
    readonly output: typeof WorkspaceCreateWebhookResponseModelSchema
  }
} = {
  'v1/audio-native/content': {
    input:
      Body_Update_audio_native_content_from_URL_v1_audio_native_content_postSchema,
    output: AudioNativeEditContentResponseModelSchema,
  },
  'v1/convai/agent-testing/folders': {
    input:
      Body_Create_agent_test_folder_v1_convai_agent_testing_folders_postSchema,
    output: CreateAgentTestFolderResponseModelSchema,
  },
  'v1/convai/agent-testing/summaries': {
    input: ListTestsByIdsRequestModelSchema,
    output: GetTestsSummariesByIdsResponseModelSchema,
  },
  'v1/convai/agent/{agent_id}/llm-usage/calculate': {
    input: LLMUsageCalculatorRequestModelSchema,
    output: LLMUsageCalculatorResponseModelSchema,
  },
  'v1/convai/agents/{agent_id}/branches': {
    input:
      Body_Create_a_new_branch_v1_convai_agents__agent_id__branches_postSchema,
    output: CreateAgentBranchResponseModelSchema,
  },
  'v1/convai/agents/{agent_id}/deployments': {
    input:
      Body_Create_or_update_deployments_v1_convai_agents__agent_id__deployments_postSchema,
    output: AgentDeploymentResponseSchema,
  },
  'v1/convai/agents/{agent_id}/duplicate': {
    input:
      Body_Duplicate_Agent_v1_convai_agents__agent_id__duplicate_postSchema,
    output: CreateAgentResponseModelSchema,
  },
  'v1/convai/agents/{agent_id}/run-tests': {
    input: RunAgentTestsRequestModelSchema,
    output: GetTestSuiteInvocationResponseModelSchema,
  },
  'v1/convai/agents/{agent_id}/simulate-conversation': {
    input:
      Body_Simulates_a_conversation_v1_convai_agents__agent_id__simulate_conversation_postSchema,
    output: AgentSimulatedChatTestResponseModelSchema,
  },
  'v1/convai/agents/create': {
    input: Body_Create_Agent_v1_convai_agents_create_postSchema,
    output: CreateAgentResponseModelSchema,
  },
  'v1/convai/batch-calling/submit': {
    input:
      Body_Submit_a_batch_call_request__v1_convai_batch_calling_submit_postSchema,
    output: BatchCallResponseSchema,
  },
  'v1/convai/knowledge-base/{documentation_id}/rag-index': {
    input: RAGIndexRequestModelSchema,
    output: RAGDocumentIndexResponseModelSchema,
  },
  'v1/convai/knowledge-base/folder': {
    input: Body_Create_folder_v1_convai_knowledge_base_folder_postSchema,
    output: AddKnowledgeBaseResponseModelSchema,
  },
  'v1/convai/knowledge-base/text': {
    input: Body_Create_text_document_v1_convai_knowledge_base_text_postSchema,
    output: AddKnowledgeBaseResponseModelSchema,
  },
  'v1/convai/knowledge-base/url': {
    input: Body_Create_URL_document_v1_convai_knowledge_base_url_postSchema,
    output: AddKnowledgeBaseResponseModelSchema,
  },
  'v1/convai/llm-usage/calculate': {
    input: LLMUsageCalculatorPublicRequestModelSchema,
    output: LLMUsageCalculatorResponseModelSchema,
  },
  'v1/convai/mcp-servers': {
    input: MCPServerRequestModelSchema,
    output: MCPServerResponseModelSchema,
  },
  'v1/convai/mcp-servers/{mcp_server_id}/tool-approvals': {
    input: MCPToolAddApprovalRequestModelSchema,
    output: MCPServerResponseModelSchema,
  },
  'v1/convai/mcp-servers/{mcp_server_id}/tool-configs': {
    input: MCPToolConfigOverrideCreateRequestModelSchema,
    output: MCPServerResponseModelSchema,
  },
  'v1/convai/secrets': {
    input: PostWorkspaceSecretRequestSchema,
    output: PostWorkspaceSecretResponseModelSchema,
  },
  'v1/convai/sip-trunk/outbound-call': {
    input:
      Body_Handle_an_outbound_call_via_SIP_trunk_v1_convai_sip_trunk_outbound_call_postSchema,
    output: SIPTrunkOutboundCallResponseSchema,
  },
  'v1/convai/tags': {
    input: CreateConversationTagRequestModelSchema,
    output: ConversationTagResponseModelSchema,
  },
  'v1/convai/tools': {
    input: ToolRequestModelSchema,
    output: ToolResponseModelSchema,
  },
  'v1/convai/twilio/outbound-call': {
    input:
      Body_Handle_an_outbound_call_via_Twilio_v1_convai_twilio_outbound_call_postSchema,
    output: TwilioOutboundCallResponseSchema,
  },
  'v1/convai/whatsapp/outbound-call': {
    input:
      Body_Make_an_outbound_call_via_WhatsApp_v1_convai_whatsapp_outbound_call_postSchema,
    output: WhatsAppOutboundCallResponseSchema,
  },
  'v1/convai/whatsapp/outbound-message': {
    input:
      Body_Send_an_outbound_message_via_WhatsApp_v1_convai_whatsapp_outbound_message_postSchema,
    output: WhatsAppOutboundMessageResponseSchema,
  },
  'v1/dubbing/resource/{dubbing_id}/dub': {
    input:
      Body_Dubs_all_or_some_segments_and_languages_v1_dubbing_resource__dubbing_id__dub_postSchema,
    output: SegmentDubResponseSchema,
  },
  'v1/dubbing/resource/{dubbing_id}/migrate-segments': {
    input:
      Body_Move_segments_between_speakers_v1_dubbing_resource__dubbing_id__migrate_segments_postSchema,
    output: SegmentMigrationResponseSchema,
  },
  'v1/dubbing/resource/{dubbing_id}/render/{language}': {
    input:
      Body_Render_audio_or_video_for_the_given_language_v1_dubbing_resource__dubbing_id__render__language__postSchema,
    output: DubbingRenderResponseModelSchema,
  },
  'v1/dubbing/resource/{dubbing_id}/speaker': {
    input:
      Body_Create_a_new_speaker_v1_dubbing_resource__dubbing_id__speaker_postSchema,
    output: SpeakerCreatedResponseSchema,
  },
  'v1/dubbing/resource/{dubbing_id}/transcribe': {
    input:
      Body_Transcribes_segments_v1_dubbing_resource__dubbing_id__transcribe_postSchema,
    output: SegmentTranscriptionResponseSchema,
  },
  'v1/dubbing/resource/{dubbing_id}/translate': {
    input:
      Body_Translates_all_or_some_segments_and_languages_v1_dubbing_resource__dubbing_id__translate_postSchema,
    output: SegmentTranslationResponseSchema,
  },
  'v1/music/plan': {
    input: Body_Generate_composition_plan_v1_music_plan_postSchema,
    output: MusicPromptSchema,
  },
  'v1/productions/orders/{order_id}/items': {
    input:
      Body_Upsert_order_item_v1_productions_orders__order_id__items_postSchema,
    output: UpsertOrderItemResponseSchema,
  },
  'v1/pronunciation-dictionaries/{pronunciation_dictionary_id}/add-rules': {
    input:
      Body_Add_rules_to_the_pronunciation_dictionary_v1_pronunciation_dictionaries__pronunciation_dictionary_id__add_rules_postSchema,
    output: PronunciationDictionaryRulesResponseModelSchema,
  },
  'v1/pronunciation-dictionaries/{pronunciation_dictionary_id}/remove-rules': {
    input:
      Body_Remove_rules_from_the_pronunciation_dictionary_v1_pronunciation_dictionaries__pronunciation_dictionary_id__remove_rules_postSchema,
    output: PronunciationDictionaryRulesResponseModelSchema,
  },
  'v1/pronunciation-dictionaries/{pronunciation_dictionary_id}/set-rules': {
    input:
      Body_Set_rules_on_the_pronunciation_dictionary_v1_pronunciation_dictionaries__pronunciation_dictionary_id__set_rules_postSchema,
    output: PronunciationDictionaryRulesResponseModelSchema,
  },
  'v1/pronunciation-dictionaries/add-from-rules': {
    input:
      Body_Add_a_pronunciation_dictionary_v1_pronunciation_dictionaries_add_from_rules_postSchema,
    output: AddPronunciationDictionaryResponseModelSchema,
  },
  'v1/service-accounts/{service_account_user_id}/api-keys': {
    input:
      Body_create_service_account_api_key_v1_service_accounts__service_account_user_id__api_keys_postSchema,
    output: WorkspaceCreateApiKeyResponseModelSchema,
  },
  'v1/studio/podcasts': {
    input: Body_Create_podcast_v1_studio_podcasts_postSchema,
    output: PodcastProjectResponseModelSchema,
  },
  'v1/studio/projects/{project_id}': {
    input:
      Body_Update_Studio_project_v1_studio_projects__project_id__postSchema,
    output: EditProjectResponseModelSchema,
  },
  'v1/studio/projects/{project_id}/chapters': {
    input:
      Body_Create_chapter_v1_studio_projects__project_id__chapters_postSchema,
    output: AddChapterResponseModelSchema,
  },
  'v1/studio/projects/{project_id}/chapters/{chapter_id}': {
    input:
      Body_Update_chapter_v1_studio_projects__project_id__chapters__chapter_id__postSchema,
    output: EditChapterResponseModelSchema,
  },
  'v1/studio/projects/{project_id}/pronunciation-dictionaries': {
    input:
      Body_Create_Pronunciation_Dictionaries_v1_studio_projects__project_id__pronunciation_dictionaries_postSchema,
    output: CreatePronunciationDictionaryResponseModelSchema,
  },
  'v1/text-to-dialogue/stream/with-timestamps': {
    input: Body_text_to_dialogue_stream_with_timestampsSchema,
    output:
      StreamingAudioChunkWithTimestampsAndVoiceSegmentsResponseModelSchema,
  },
  'v1/text-to-dialogue/with-timestamps': {
    input: Body_text_to_dialogue_full_with_timestampsSchema,
    output: AudioWithTimestampsAndVoiceSegmentsResponseModelSchema,
  },
  'v1/text-to-speech/{voice_id}/stream/with-timestamps': {
    input: Body_text_to_speech_stream_with_timestampsSchema,
    output: StreamingAudioChunkWithTimestampsResponseModelSchema,
  },
  'v1/text-to-speech/{voice_id}/with-timestamps': {
    input: Body_text_to_speech_full_with_timestampsSchema,
    output: AudioWithTimestampsResponseModelSchema,
  },
  'v1/text-to-voice': {
    input:
      Body_Create_a_new_voice_from_voice_preview_v1_text_to_voice_postSchema,
    output: VoiceResponseModelSchema,
  },
  'v1/text-to-voice/{voice_id}/remix': {
    input: VoiceRemixRequestModelSchema,
    output: VoicePreviewsResponseModelSchema,
  },
  'v1/text-to-voice/create-previews': {
    input: VoicePreviewsRequestModelSchema,
    output: VoicePreviewsResponseModelSchema,
  },
  'v1/text-to-voice/design': {
    input: VoiceDesignRequestModelSchema,
    output: VoicePreviewsResponseModelSchema,
  },
  'v1/voices/{voice_id}/settings/edit': {
    input: VoiceSettingsResponseModelSchema,
    output: EditVoiceSettingsResponseModelSchema,
  },
  'v1/voices/add/{public_user_id}/{voice_id}': {
    input:
      Body_Add_shared_voice_v1_voices_add__public_user_id___voice_id__postSchema,
    output: AddVoiceResponseModelSchema,
  },
  'v1/voices/pvc': {
    input: Body_Create_PVC_voice_v1_voices_pvc_postSchema,
    output: AddVoiceResponseModelSchema,
  },
  'v1/voices/pvc/{voice_id}': {
    input: Body_Edit_PVC_voice_v1_voices_pvc__voice_id__postSchema,
    output: AddVoiceResponseModelSchema,
  },
  'v1/voices/pvc/{voice_id}/samples/{sample_id}': {
    input:
      Body_Update_PVC_voice_sample_v1_voices_pvc__voice_id__samples__sample_id__postSchema,
    output: AddVoiceResponseModelSchema,
  },
  'v1/voices/pvc/{voice_id}/train': {
    input: Body_Run_PVC_training_v1_voices_pvc__voice_id__train_postSchema,
    output: StartPVCVoiceTrainingResponseModelSchema,
  },
  'v1/workspace/analytics/query/usage-by-product-over-time': {
    input:
      Body_Get_Workspace_Usage_v1_workspace_analytics_query_usage_by_product_over_time_postSchema,
    output: WorkspaceAnalyticsQueryResponseModelSchema,
  },
  'v1/workspace/analytics/requests': {
    input: Body_List_API_requests_v1_workspace_analytics_requests_postSchema,
    output: WorkspaceAnalyticsQueryResponseModelSchema,
  },
  'v1/workspace/groups/{group_id}/members': {
    input:
      Body_Add_member_to_user_group_v1_workspace_groups__group_id__members_postSchema,
    output: AddWorkspaceGroupMemberResponseModelSchema,
  },
  'v1/workspace/groups/{group_id}/members/remove': {
    input:
      Body_Delete_member_from_user_group_v1_workspace_groups__group_id__members_remove_postSchema,
    output: DeleteWorkspaceGroupMemberResponseModelSchema,
  },
  'v1/workspace/invites/add': {
    input: Body_Invite_user_v1_workspace_invites_add_postSchema,
    output: AddWorkspaceInviteResponseModelSchema,
  },
  'v1/workspace/invites/add-bulk': {
    input: Body_Invite_multiple_users_v1_workspace_invites_add_bulk_postSchema,
    output: AddWorkspaceInviteResponseModelSchema,
  },
  'v1/workspace/members': {
    input: Body_Update_member_v1_workspace_members_postSchema,
    output: UpdateWorkspaceMemberResponseModelSchema,
  },
  'v1/workspace/webhooks': {
    input: Body_Create_workspace_webhook_v1_workspace_webhooks_postSchema,
    output: WorkspaceCreateWebhookResponseModelSchema,
  },
}
