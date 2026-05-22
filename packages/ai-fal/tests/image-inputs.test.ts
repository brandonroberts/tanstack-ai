import { describe, expect, it } from 'vitest'
import {
  mapImageInputsToFalFields,
  mapImageInputsToFalVideoFields,
} from '../src/image/image-inputs'
import type { ImagePart, MediaInputMetadata } from '@tanstack/ai'

function urlPart(
  value: string,
  metadata?: MediaInputMetadata,
): ImagePart<MediaInputMetadata> {
  return {
    type: 'image',
    source: { type: 'url', value },
    ...(metadata && { metadata }),
  }
}

describe('mapImageInputsToFalFields', () => {
  it('returns an empty object when imageInputs is missing or empty', () => {
    expect(mapImageInputsToFalFields(undefined)).toEqual({})
    expect(mapImageInputsToFalFields([])).toEqual({})
  })

  it('routes a single source to image_url', () => {
    expect(
      mapImageInputsToFalFields([urlPart('https://example.com/a.png')]),
    ).toEqual({ image_url: 'https://example.com/a.png' })
  })

  it('routes multiple sources to image_urls', () => {
    expect(
      mapImageInputsToFalFields([
        urlPart('https://example.com/a.png'),
        urlPart('https://example.com/b.png'),
      ]),
    ).toEqual({
      image_urls: ['https://example.com/a.png', 'https://example.com/b.png'],
    })
  })

  it('routes role=mask to mask_url alongside the source image_url', () => {
    expect(
      mapImageInputsToFalFields([
        urlPart('https://example.com/img.png'),
        urlPart('https://example.com/mask.png', { role: 'mask' }),
      ]),
    ).toEqual({
      image_url: 'https://example.com/img.png',
      mask_url: 'https://example.com/mask.png',
    })
  })

  it('routes role=reference to reference_image_urls', () => {
    expect(
      mapImageInputsToFalFields([
        urlPart('https://example.com/product.png'),
        urlPart('https://example.com/style.png', { role: 'reference' }),
        urlPart('https://example.com/character.png', { role: 'character' }),
      ]),
    ).toEqual({
      image_url: 'https://example.com/product.png',
      reference_image_urls: [
        'https://example.com/style.png',
        'https://example.com/character.png',
      ],
    })
  })

  it('routes role=control to control_image_url', () => {
    expect(
      mapImageInputsToFalFields([
        urlPart('https://example.com/img.png'),
        urlPart('https://example.com/depth.png', { role: 'control' }),
      ]),
    ).toEqual({
      image_url: 'https://example.com/img.png',
      control_image_url: 'https://example.com/depth.png',
    })
  })

  it('encodes data sources as data URIs', () => {
    expect(
      mapImageInputsToFalFields([
        {
          type: 'image',
          source: { type: 'data', value: 'aGVsbG8=', mimeType: 'image/png' },
        },
      ]),
    ).toEqual({ image_url: 'data:image/png;base64,aGVsbG8=' })
  })

  it('throws when more than one mask is provided', () => {
    expect(() =>
      mapImageInputsToFalFields([
        urlPart('https://example.com/m1.png', { role: 'mask' }),
        urlPart('https://example.com/m2.png', { role: 'mask' }),
      ]),
    ).toThrow(/only one input with metadata.role === 'mask'/)
  })
})

describe('mapImageInputsToFalVideoFields', () => {
  it('returns empty for missing/empty inputs', () => {
    expect(mapImageInputsToFalVideoFields(undefined)).toEqual({})
    expect(mapImageInputsToFalVideoFields([])).toEqual({})
  })

  it('routes a single positional source to image_url (start frame)', () => {
    expect(
      mapImageInputsToFalVideoFields([
        urlPart('https://example.com/start.png'),
      ]),
    ).toEqual({ image_url: 'https://example.com/start.png' })
  })

  it('routes role=start_frame to start_image_url and role=end_frame to end_image_url', () => {
    expect(
      mapImageInputsToFalVideoFields([
        urlPart('https://example.com/a.png', { role: 'start_frame' }),
        urlPart('https://example.com/z.png', { role: 'end_frame' }),
      ]),
    ).toEqual({
      start_image_url: 'https://example.com/a.png',
      end_image_url: 'https://example.com/z.png',
    })
  })

  it('routes role=reference to reference_image_urls', () => {
    expect(
      mapImageInputsToFalVideoFields([
        urlPart('https://example.com/start.png'),
        urlPart('https://example.com/character.png', { role: 'reference' }),
      ]),
    ).toEqual({
      image_url: 'https://example.com/start.png',
      reference_image_urls: ['https://example.com/character.png'],
    })
  })
})
