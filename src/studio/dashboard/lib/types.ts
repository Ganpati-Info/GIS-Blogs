export interface DashboardStats {
  posts: number
  categories: number
  authors: number
  drafts: number
  popularPosts: number
}

export interface DashboardPost {
  id: string
  title: string
  slug: string

  excerpt?: string
  coverImage?: string
  publishedAt?: string

  createdAt: string
  updatedAt: string

  featured: boolean
  isPopular: boolean
  isDraft: boolean
}

export interface DashboardOverview {
  stats: DashboardStats

  featuredPost: DashboardPost | null

  recentPosts: DashboardPost[]

  popularPosts: DashboardPost[]
}
