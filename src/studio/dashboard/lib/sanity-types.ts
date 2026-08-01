import type {Image} from 'sanity'

export interface SanitySlug {
  current: string
}

export interface SanityPostId {
  _id: string
}

export interface SanityStats {
  categories: number
  authors: number
  popularPosts: number
}

export interface SanityPostImage extends Image {
  alt?: string
}

export interface SanityPost {
  _id: string
  _originalId?: string
  _type: 'post'

  title: string
  slug?: SanitySlug
  excerpt?: string

  featured?: boolean
  isPopular?: boolean

  coverImage?: SanityPostImage

  publishedAt?: string

  _createdAt: string
  _updatedAt: string
}

export interface SanityDashboardOverview {
  stats: SanityStats

  featuredPost: SanityPost | null

  recentPosts: SanityPost[]

  popularPosts: SanityPost[]
}
