export interface PopularPost {
  _id: string
  title: string
  isPopular: boolean
  publishedAt: string

  coverImage?: string

  category?: {
    title: string
  }
}
