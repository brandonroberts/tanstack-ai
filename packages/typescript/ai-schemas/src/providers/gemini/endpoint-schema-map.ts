// AUTO-GENERATED - Do not edit manually
// Generated via scripts/generate-endpoint-maps.ts

import {
  AsyncBatchEmbedContentRequestSchema,
  BatchEmbedContentsRequestSchema,
  BatchEmbedContentsResponseSchema,
  BatchEmbedTextRequestSchema,
  BatchEmbedTextResponseSchema,
  BatchGenerateContentRequestSchema,
  CachedContentSchema,
  CorpusSchema,
  CountMessageTokensRequestSchema,
  CountMessageTokensResponseSchema,
  CountTextTokensRequestSchema,
  CountTextTokensResponseSchema,
  CountTokensRequestSchema,
  CountTokensResponseSchema,
  CreateFileRequestSchema,
  CreateFileResponseSchema,
  CustomLongRunningOperationSchema,
  EmbedContentRequestSchema,
  EmbedContentResponseSchema,
  EmbedTextRequestSchema,
  EmbedTextResponseSchema,
  FileSearchStoreSchema,
  GenerateAnswerRequestSchema,
  GenerateAnswerResponseSchema,
  GenerateContentRequestSchema,
  GenerateContentResponseSchema,
  GenerateMessageRequestSchema,
  GenerateMessageResponseSchema,
  GenerateTextRequestSchema,
  GenerateTextResponseSchema,
  ImportFileRequestSchema,
  OperationSchema,
  PermissionSchema,
  PredictLongRunningRequestSchema,
  PredictRequestSchema,
  PredictResponseSchema,
  RegisterFilesRequestSchema,
  RegisterFilesResponseSchema,
  TransferOwnershipRequestSchema,
  TransferOwnershipResponseSchema,
  TunedModelSchema,
  UploadToFileSearchStoreRequestSchema,
} from './schemas.gen.js'

/**
 * Map of gemini endpoint id -> self-contained JSON Schemas.
 * Each input/output schema bundles its $ref closure under `$defs`, so it
 * can be handed directly to LLM tool APIs or `z.fromJSONSchema`.
 */
export const geminiEndpointSchemaMap: {
  readonly 'v1beta/cachedContents': {
    readonly input: typeof CachedContentSchema
    readonly output: typeof CachedContentSchema
  }
  readonly 'v1beta/corpora': {
    readonly input: typeof CorpusSchema
    readonly output: typeof CorpusSchema
  }
  readonly 'v1beta/corpora/{corporaId}/permissions': {
    readonly input: typeof PermissionSchema
    readonly output: typeof PermissionSchema
  }
  readonly 'v1beta/dynamic/{dynamicId}:generateContent': {
    readonly input: typeof GenerateContentRequestSchema
    readonly output: typeof GenerateContentResponseSchema
  }
  readonly 'v1beta/dynamic/{dynamicId}:streamGenerateContent': {
    readonly input: typeof GenerateContentRequestSchema
    readonly output: typeof GenerateContentResponseSchema
  }
  readonly 'v1beta/files': {
    readonly input: typeof CreateFileRequestSchema
    readonly output: typeof CreateFileResponseSchema
  }
  readonly 'v1beta/files:register': {
    readonly input: typeof RegisterFilesRequestSchema
    readonly output: typeof RegisterFilesResponseSchema
  }
  readonly 'v1beta/fileSearchStores': {
    readonly input: typeof FileSearchStoreSchema
    readonly output: typeof FileSearchStoreSchema
  }
  readonly 'v1beta/fileSearchStores/{fileSearchStoresId}:importFile': {
    readonly input: typeof ImportFileRequestSchema
    readonly output: typeof OperationSchema
  }
  readonly 'v1beta/fileSearchStores/{fileSearchStoresId}:uploadToFileSearchStore': {
    readonly input: typeof UploadToFileSearchStoreRequestSchema
    readonly output: typeof CustomLongRunningOperationSchema
  }
  readonly 'v1beta/models/{modelsId}:asyncBatchEmbedContent': {
    readonly input: typeof AsyncBatchEmbedContentRequestSchema
    readonly output: typeof OperationSchema
  }
  readonly 'v1beta/models/{modelsId}:batchEmbedContents': {
    readonly input: typeof BatchEmbedContentsRequestSchema
    readonly output: typeof BatchEmbedContentsResponseSchema
  }
  readonly 'v1beta/models/{modelsId}:batchEmbedText': {
    readonly input: typeof BatchEmbedTextRequestSchema
    readonly output: typeof BatchEmbedTextResponseSchema
  }
  readonly 'v1beta/models/{modelsId}:batchGenerateContent': {
    readonly input: typeof BatchGenerateContentRequestSchema
    readonly output: typeof OperationSchema
  }
  readonly 'v1beta/models/{modelsId}:countMessageTokens': {
    readonly input: typeof CountMessageTokensRequestSchema
    readonly output: typeof CountMessageTokensResponseSchema
  }
  readonly 'v1beta/models/{modelsId}:countTextTokens': {
    readonly input: typeof CountTextTokensRequestSchema
    readonly output: typeof CountTextTokensResponseSchema
  }
  readonly 'v1beta/models/{modelsId}:countTokens': {
    readonly input: typeof CountTokensRequestSchema
    readonly output: typeof CountTokensResponseSchema
  }
  readonly 'v1beta/models/{modelsId}:embedContent': {
    readonly input: typeof EmbedContentRequestSchema
    readonly output: typeof EmbedContentResponseSchema
  }
  readonly 'v1beta/models/{modelsId}:embedText': {
    readonly input: typeof EmbedTextRequestSchema
    readonly output: typeof EmbedTextResponseSchema
  }
  readonly 'v1beta/models/{modelsId}:generateAnswer': {
    readonly input: typeof GenerateAnswerRequestSchema
    readonly output: typeof GenerateAnswerResponseSchema
  }
  readonly 'v1beta/models/{modelsId}:generateContent': {
    readonly input: typeof GenerateContentRequestSchema
    readonly output: typeof GenerateContentResponseSchema
  }
  readonly 'v1beta/models/{modelsId}:generateMessage': {
    readonly input: typeof GenerateMessageRequestSchema
    readonly output: typeof GenerateMessageResponseSchema
  }
  readonly 'v1beta/models/{modelsId}:generateText': {
    readonly input: typeof GenerateTextRequestSchema
    readonly output: typeof GenerateTextResponseSchema
  }
  readonly 'v1beta/models/{modelsId}:predict': {
    readonly input: typeof PredictRequestSchema
    readonly output: typeof PredictResponseSchema
  }
  readonly 'v1beta/models/{modelsId}:predictLongRunning': {
    readonly input: typeof PredictLongRunningRequestSchema
    readonly output: typeof OperationSchema
  }
  readonly 'v1beta/models/{modelsId}:streamGenerateContent': {
    readonly input: typeof GenerateContentRequestSchema
    readonly output: typeof GenerateContentResponseSchema
  }
  readonly 'v1beta/tunedModels': {
    readonly input: typeof TunedModelSchema
    readonly output: typeof OperationSchema
  }
  readonly 'v1beta/tunedModels/{tunedModelsId}:asyncBatchEmbedContent': {
    readonly input: typeof AsyncBatchEmbedContentRequestSchema
    readonly output: typeof OperationSchema
  }
  readonly 'v1beta/tunedModels/{tunedModelsId}:batchGenerateContent': {
    readonly input: typeof BatchGenerateContentRequestSchema
    readonly output: typeof OperationSchema
  }
  readonly 'v1beta/tunedModels/{tunedModelsId}:generateContent': {
    readonly input: typeof GenerateContentRequestSchema
    readonly output: typeof GenerateContentResponseSchema
  }
  readonly 'v1beta/tunedModels/{tunedModelsId}:generateText': {
    readonly input: typeof GenerateTextRequestSchema
    readonly output: typeof GenerateTextResponseSchema
  }
  readonly 'v1beta/tunedModels/{tunedModelsId}:streamGenerateContent': {
    readonly input: typeof GenerateContentRequestSchema
    readonly output: typeof GenerateContentResponseSchema
  }
  readonly 'v1beta/tunedModels/{tunedModelsId}:transferOwnership': {
    readonly input: typeof TransferOwnershipRequestSchema
    readonly output: typeof TransferOwnershipResponseSchema
  }
  readonly 'v1beta/tunedModels/{tunedModelsId}/permissions': {
    readonly input: typeof PermissionSchema
    readonly output: typeof PermissionSchema
  }
} = {
  'v1beta/cachedContents': {
    input: CachedContentSchema,
    output: CachedContentSchema,
  },
  'v1beta/corpora': { input: CorpusSchema, output: CorpusSchema },
  'v1beta/corpora/{corporaId}/permissions': {
    input: PermissionSchema,
    output: PermissionSchema,
  },
  'v1beta/dynamic/{dynamicId}:generateContent': {
    input: GenerateContentRequestSchema,
    output: GenerateContentResponseSchema,
  },
  'v1beta/dynamic/{dynamicId}:streamGenerateContent': {
    input: GenerateContentRequestSchema,
    output: GenerateContentResponseSchema,
  },
  'v1beta/files': {
    input: CreateFileRequestSchema,
    output: CreateFileResponseSchema,
  },
  'v1beta/files:register': {
    input: RegisterFilesRequestSchema,
    output: RegisterFilesResponseSchema,
  },
  'v1beta/fileSearchStores': {
    input: FileSearchStoreSchema,
    output: FileSearchStoreSchema,
  },
  'v1beta/fileSearchStores/{fileSearchStoresId}:importFile': {
    input: ImportFileRequestSchema,
    output: OperationSchema,
  },
  'v1beta/fileSearchStores/{fileSearchStoresId}:uploadToFileSearchStore': {
    input: UploadToFileSearchStoreRequestSchema,
    output: CustomLongRunningOperationSchema,
  },
  'v1beta/models/{modelsId}:asyncBatchEmbedContent': {
    input: AsyncBatchEmbedContentRequestSchema,
    output: OperationSchema,
  },
  'v1beta/models/{modelsId}:batchEmbedContents': {
    input: BatchEmbedContentsRequestSchema,
    output: BatchEmbedContentsResponseSchema,
  },
  'v1beta/models/{modelsId}:batchEmbedText': {
    input: BatchEmbedTextRequestSchema,
    output: BatchEmbedTextResponseSchema,
  },
  'v1beta/models/{modelsId}:batchGenerateContent': {
    input: BatchGenerateContentRequestSchema,
    output: OperationSchema,
  },
  'v1beta/models/{modelsId}:countMessageTokens': {
    input: CountMessageTokensRequestSchema,
    output: CountMessageTokensResponseSchema,
  },
  'v1beta/models/{modelsId}:countTextTokens': {
    input: CountTextTokensRequestSchema,
    output: CountTextTokensResponseSchema,
  },
  'v1beta/models/{modelsId}:countTokens': {
    input: CountTokensRequestSchema,
    output: CountTokensResponseSchema,
  },
  'v1beta/models/{modelsId}:embedContent': {
    input: EmbedContentRequestSchema,
    output: EmbedContentResponseSchema,
  },
  'v1beta/models/{modelsId}:embedText': {
    input: EmbedTextRequestSchema,
    output: EmbedTextResponseSchema,
  },
  'v1beta/models/{modelsId}:generateAnswer': {
    input: GenerateAnswerRequestSchema,
    output: GenerateAnswerResponseSchema,
  },
  'v1beta/models/{modelsId}:generateContent': {
    input: GenerateContentRequestSchema,
    output: GenerateContentResponseSchema,
  },
  'v1beta/models/{modelsId}:generateMessage': {
    input: GenerateMessageRequestSchema,
    output: GenerateMessageResponseSchema,
  },
  'v1beta/models/{modelsId}:generateText': {
    input: GenerateTextRequestSchema,
    output: GenerateTextResponseSchema,
  },
  'v1beta/models/{modelsId}:predict': {
    input: PredictRequestSchema,
    output: PredictResponseSchema,
  },
  'v1beta/models/{modelsId}:predictLongRunning': {
    input: PredictLongRunningRequestSchema,
    output: OperationSchema,
  },
  'v1beta/models/{modelsId}:streamGenerateContent': {
    input: GenerateContentRequestSchema,
    output: GenerateContentResponseSchema,
  },
  'v1beta/tunedModels': { input: TunedModelSchema, output: OperationSchema },
  'v1beta/tunedModels/{tunedModelsId}:asyncBatchEmbedContent': {
    input: AsyncBatchEmbedContentRequestSchema,
    output: OperationSchema,
  },
  'v1beta/tunedModels/{tunedModelsId}:batchGenerateContent': {
    input: BatchGenerateContentRequestSchema,
    output: OperationSchema,
  },
  'v1beta/tunedModels/{tunedModelsId}:generateContent': {
    input: GenerateContentRequestSchema,
    output: GenerateContentResponseSchema,
  },
  'v1beta/tunedModels/{tunedModelsId}:generateText': {
    input: GenerateTextRequestSchema,
    output: GenerateTextResponseSchema,
  },
  'v1beta/tunedModels/{tunedModelsId}:streamGenerateContent': {
    input: GenerateContentRequestSchema,
    output: GenerateContentResponseSchema,
  },
  'v1beta/tunedModels/{tunedModelsId}:transferOwnership': {
    input: TransferOwnershipRequestSchema,
    output: TransferOwnershipResponseSchema,
  },
  'v1beta/tunedModels/{tunedModelsId}/permissions': {
    input: PermissionSchema,
    output: PermissionSchema,
  },
}
