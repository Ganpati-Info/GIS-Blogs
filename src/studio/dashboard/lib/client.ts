import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import type {Image} from 'sanity'

const imageClient = createClient({
  projectId: 'm8fvgkve',
  dataset: 'production',
  apiVersion: '2025-07-01',
  useCdn: true,
})

const builder = imageUrlBuilder(imageClient)

export function urlFor(source: Image) {
  return builder.image(source)
}
