import {urlFor} from './client'

import type {SanityDashboardOverview, SanityPost, SanityPostId} from './sanity-types'

import type {DashboardOverview, DashboardPost} from './types'

function mapPost(post: SanityPost): DashboardPost {
  let coverImage: string | undefined

  if (post.coverImage?.asset) {
    coverImage = urlFor(post.coverImage).width(1200).height(675).fit('crop').url()
  }

  const isDraft = post._id.startsWith('drafts.') || post._originalId?.startsWith('drafts.') === true

  return {
    id: post._id,
    title: post.title,
    slug: post.slug?.current ?? '',
    excerpt: post.excerpt,
    coverImage,
    publishedAt: post.publishedAt,
    createdAt: post._createdAt,
    updatedAt: post._updatedAt,
    featured: post.featured ?? false,
    isPopular: post.isPopular ?? false,
    isDraft,
  }
}

export function mapDashboardOverview(
  data: SanityDashboardOverview,
  postDocuments: SanityPostId[],
): DashboardOverview {
  const publishedIds = new Set<string>()
  const draftIds = new Set<string>()

  for (const post of postDocuments) {
    if (post._id.startsWith('drafts.')) {
      draftIds.add(post._id.replace(/^drafts\./, ''))
    } else {
      publishedIds.add(post._id)
    }
  }

  const logicalPostIds = new Set([...publishedIds, ...draftIds])

  return {
    stats: {
      posts: logicalPostIds.size,
      drafts: draftIds.size,
      categories: data.stats.categories,
      authors: data.stats.authors,
      popularPosts: data.stats.popularPosts,
    },

    featuredPost: data.featuredPost ? mapPost(data.featuredPost) : null,

    recentPosts: data.recentPosts.map(mapPost),

    popularPosts: data.popularPosts.map(mapPost),
  }
}
