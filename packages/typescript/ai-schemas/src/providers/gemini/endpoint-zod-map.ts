// AUTO-GENERATED - Do not edit manually
// Generated via scripts/generate-endpoint-maps.ts

import {
  zAsyncBatchEmbedContentRequest,
  zBatchEmbedContentsRequest,
  zBatchEmbedContentsResponse,
  zBatchEmbedTextRequest,
  zBatchEmbedTextResponse,
  zBatchGenerateContentRequest,
  zCachedContent,
  zCorpus,
  zCountMessageTokensRequest,
  zCountMessageTokensResponse,
  zCountTextTokensRequest,
  zCountTextTokensResponse,
  zCountTokensRequest,
  zCountTokensResponse,
  zCreateFileRequest,
  zCreateFileResponse,
  zCustomLongRunningOperation,
  zEmbedContentRequest,
  zEmbedContentResponse,
  zEmbedTextRequest,
  zEmbedTextResponse,
  zFileSearchStore,
  zGenerateAnswerRequest,
  zGenerateAnswerResponse,
  zGenerateContentRequest,
  zGenerateContentResponse,
  zGenerateMessageRequest,
  zGenerateMessageResponse,
  zGenerateTextRequest,
  zGenerateTextResponse,
  zImportFileRequest,
  zOperation,
  zPermission,
  zPredictLongRunningRequest,
  zPredictRequest,
  zPredictResponse,
  zRegisterFilesRequest,
  zRegisterFilesResponse,
  zTransferOwnershipRequest,
  zTransferOwnershipResponse,
  zTunedModel,
  zUploadToFileSearchStoreRequest,
} from './zod.gen.js'

/** Map of gemini endpoint id -> Zod input/output schemas. */
export const geminiEndpointZodMap: {
  readonly 'v1beta/cachedContents': {
    readonly input: typeof zCachedContent
    readonly output: typeof zCachedContent
  }
  readonly 'v1beta/corpora': {
    readonly input: typeof zCorpus
    readonly output: typeof zCorpus
  }
  readonly 'v1beta/corpora/{corporaId}/permissions': {
    readonly input: typeof zPermission
    readonly output: typeof zPermission
  }
  readonly 'v1beta/dynamic/{dynamicId}:generateContent': {
    readonly input: typeof zGenerateContentRequest
    readonly output: typeof zGenerateContentResponse
  }
  readonly 'v1beta/dynamic/{dynamicId}:streamGenerateContent': {
    readonly input: typeof zGenerateContentRequest
    readonly output: typeof zGenerateContentResponse
  }
  readonly 'v1beta/files': {
    readonly input: typeof zCreateFileRequest
    readonly output: typeof zCreateFileResponse
  }
  readonly 'v1beta/files:register': {
    readonly input: typeof zRegisterFilesRequest
    readonly output: typeof zRegisterFilesResponse
  }
  readonly 'v1beta/fileSearchStores': {
    readonly input: typeof zFileSearchStore
    readonly output: typeof zFileSearchStore
  }
  readonly 'v1beta/fileSearchStores/{fileSearchStoresId}:importFile': {
    readonly input: typeof zImportFileRequest
    readonly output: typeof zOperation
  }
  readonly 'v1beta/fileSearchStores/{fileSearchStoresId}:uploadToFileSearchStore': {
    readonly input: typeof zUploadToFileSearchStoreRequest
    readonly output: typeof zCustomLongRunningOperation
  }
  readonly 'v1beta/models/{modelsId}:asyncBatchEmbedContent': {
    readonly input: typeof zAsyncBatchEmbedContentRequest
    readonly output: typeof zOperation
  }
  readonly 'v1beta/models/{modelsId}:batchEmbedContents': {
    readonly input: typeof zBatchEmbedContentsRequest
    readonly output: typeof zBatchEmbedContentsResponse
  }
  readonly 'v1beta/models/{modelsId}:batchEmbedText': {
    readonly input: typeof zBatchEmbedTextRequest
    readonly output: typeof zBatchEmbedTextResponse
  }
  readonly 'v1beta/models/{modelsId}:batchGenerateContent': {
    readonly input: typeof zBatchGenerateContentRequest
    readonly output: typeof zOperation
  }
  readonly 'v1beta/models/{modelsId}:countMessageTokens': {
    readonly input: typeof zCountMessageTokensRequest
    readonly output: typeof zCountMessageTokensResponse
  }
  readonly 'v1beta/models/{modelsId}:countTextTokens': {
    readonly input: typeof zCountTextTokensRequest
    readonly output: typeof zCountTextTokensResponse
  }
  readonly 'v1beta/models/{modelsId}:countTokens': {
    readonly input: typeof zCountTokensRequest
    readonly output: typeof zCountTokensResponse
  }
  readonly 'v1beta/models/{modelsId}:embedContent': {
    readonly input: typeof zEmbedContentRequest
    readonly output: typeof zEmbedContentResponse
  }
  readonly 'v1beta/models/{modelsId}:embedText': {
    readonly input: typeof zEmbedTextRequest
    readonly output: typeof zEmbedTextResponse
  }
  readonly 'v1beta/models/{modelsId}:generateAnswer': {
    readonly input: typeof zGenerateAnswerRequest
    readonly output: typeof zGenerateAnswerResponse
  }
  readonly 'v1beta/models/{modelsId}:generateContent': {
    readonly input: typeof zGenerateContentRequest
    readonly output: typeof zGenerateContentResponse
  }
  readonly 'v1beta/models/{modelsId}:generateMessage': {
    readonly input: typeof zGenerateMessageRequest
    readonly output: typeof zGenerateMessageResponse
  }
  readonly 'v1beta/models/{modelsId}:generateText': {
    readonly input: typeof zGenerateTextRequest
    readonly output: typeof zGenerateTextResponse
  }
  readonly 'v1beta/models/{modelsId}:predict': {
    readonly input: typeof zPredictRequest
    readonly output: typeof zPredictResponse
  }
  readonly 'v1beta/models/{modelsId}:predictLongRunning': {
    readonly input: typeof zPredictLongRunningRequest
    readonly output: typeof zOperation
  }
  readonly 'v1beta/models/{modelsId}:streamGenerateContent': {
    readonly input: typeof zGenerateContentRequest
    readonly output: typeof zGenerateContentResponse
  }
  readonly 'v1beta/tunedModels': {
    readonly input: typeof zTunedModel
    readonly output: typeof zOperation
  }
  readonly 'v1beta/tunedModels/{tunedModelsId}:asyncBatchEmbedContent': {
    readonly input: typeof zAsyncBatchEmbedContentRequest
    readonly output: typeof zOperation
  }
  readonly 'v1beta/tunedModels/{tunedModelsId}:batchGenerateContent': {
    readonly input: typeof zBatchGenerateContentRequest
    readonly output: typeof zOperation
  }
  readonly 'v1beta/tunedModels/{tunedModelsId}:generateContent': {
    readonly input: typeof zGenerateContentRequest
    readonly output: typeof zGenerateContentResponse
  }
  readonly 'v1beta/tunedModels/{tunedModelsId}:generateText': {
    readonly input: typeof zGenerateTextRequest
    readonly output: typeof zGenerateTextResponse
  }
  readonly 'v1beta/tunedModels/{tunedModelsId}:streamGenerateContent': {
    readonly input: typeof zGenerateContentRequest
    readonly output: typeof zGenerateContentResponse
  }
  readonly 'v1beta/tunedModels/{tunedModelsId}:transferOwnership': {
    readonly input: typeof zTransferOwnershipRequest
    readonly output: typeof zTransferOwnershipResponse
  }
  readonly 'v1beta/tunedModels/{tunedModelsId}/permissions': {
    readonly input: typeof zPermission
    readonly output: typeof zPermission
  }
} = {
  'v1beta/cachedContents': { input: zCachedContent, output: zCachedContent },
  'v1beta/corpora': { input: zCorpus, output: zCorpus },
  'v1beta/corpora/{corporaId}/permissions': {
    input: zPermission,
    output: zPermission,
  },
  'v1beta/dynamic/{dynamicId}:generateContent': {
    input: zGenerateContentRequest,
    output: zGenerateContentResponse,
  },
  'v1beta/dynamic/{dynamicId}:streamGenerateContent': {
    input: zGenerateContentRequest,
    output: zGenerateContentResponse,
  },
  'v1beta/files': { input: zCreateFileRequest, output: zCreateFileResponse },
  'v1beta/files:register': {
    input: zRegisterFilesRequest,
    output: zRegisterFilesResponse,
  },
  'v1beta/fileSearchStores': {
    input: zFileSearchStore,
    output: zFileSearchStore,
  },
  'v1beta/fileSearchStores/{fileSearchStoresId}:importFile': {
    input: zImportFileRequest,
    output: zOperation,
  },
  'v1beta/fileSearchStores/{fileSearchStoresId}:uploadToFileSearchStore': {
    input: zUploadToFileSearchStoreRequest,
    output: zCustomLongRunningOperation,
  },
  'v1beta/models/{modelsId}:asyncBatchEmbedContent': {
    input: zAsyncBatchEmbedContentRequest,
    output: zOperation,
  },
  'v1beta/models/{modelsId}:batchEmbedContents': {
    input: zBatchEmbedContentsRequest,
    output: zBatchEmbedContentsResponse,
  },
  'v1beta/models/{modelsId}:batchEmbedText': {
    input: zBatchEmbedTextRequest,
    output: zBatchEmbedTextResponse,
  },
  'v1beta/models/{modelsId}:batchGenerateContent': {
    input: zBatchGenerateContentRequest,
    output: zOperation,
  },
  'v1beta/models/{modelsId}:countMessageTokens': {
    input: zCountMessageTokensRequest,
    output: zCountMessageTokensResponse,
  },
  'v1beta/models/{modelsId}:countTextTokens': {
    input: zCountTextTokensRequest,
    output: zCountTextTokensResponse,
  },
  'v1beta/models/{modelsId}:countTokens': {
    input: zCountTokensRequest,
    output: zCountTokensResponse,
  },
  'v1beta/models/{modelsId}:embedContent': {
    input: zEmbedContentRequest,
    output: zEmbedContentResponse,
  },
  'v1beta/models/{modelsId}:embedText': {
    input: zEmbedTextRequest,
    output: zEmbedTextResponse,
  },
  'v1beta/models/{modelsId}:generateAnswer': {
    input: zGenerateAnswerRequest,
    output: zGenerateAnswerResponse,
  },
  'v1beta/models/{modelsId}:generateContent': {
    input: zGenerateContentRequest,
    output: zGenerateContentResponse,
  },
  'v1beta/models/{modelsId}:generateMessage': {
    input: zGenerateMessageRequest,
    output: zGenerateMessageResponse,
  },
  'v1beta/models/{modelsId}:generateText': {
    input: zGenerateTextRequest,
    output: zGenerateTextResponse,
  },
  'v1beta/models/{modelsId}:predict': {
    input: zPredictRequest,
    output: zPredictResponse,
  },
  'v1beta/models/{modelsId}:predictLongRunning': {
    input: zPredictLongRunningRequest,
    output: zOperation,
  },
  'v1beta/models/{modelsId}:streamGenerateContent': {
    input: zGenerateContentRequest,
    output: zGenerateContentResponse,
  },
  'v1beta/tunedModels': { input: zTunedModel, output: zOperation },
  'v1beta/tunedModels/{tunedModelsId}:asyncBatchEmbedContent': {
    input: zAsyncBatchEmbedContentRequest,
    output: zOperation,
  },
  'v1beta/tunedModels/{tunedModelsId}:batchGenerateContent': {
    input: zBatchGenerateContentRequest,
    output: zOperation,
  },
  'v1beta/tunedModels/{tunedModelsId}:generateContent': {
    input: zGenerateContentRequest,
    output: zGenerateContentResponse,
  },
  'v1beta/tunedModels/{tunedModelsId}:generateText': {
    input: zGenerateTextRequest,
    output: zGenerateTextResponse,
  },
  'v1beta/tunedModels/{tunedModelsId}:streamGenerateContent': {
    input: zGenerateContentRequest,
    output: zGenerateContentResponse,
  },
  'v1beta/tunedModels/{tunedModelsId}:transferOwnership': {
    input: zTransferOwnershipRequest,
    output: zTransferOwnershipResponse,
  },
  'v1beta/tunedModels/{tunedModelsId}/permissions': {
    input: zPermission,
    output: zPermission,
  },
}

/** Union of valid gemini endpoint ids. */
export type GeminiEndpointId = keyof typeof geminiEndpointZodMap
