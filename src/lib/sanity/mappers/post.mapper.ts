import { Post } from "@/types";

import { mapAuthor } from "./author.mapper";
import { mapCategory } from "./category.mapper";
import { calculateReadingTime } from "@/lib/blog/reading-time";

export function mapPost(post: any): Post {
  return {
    id: post._id,

    title: post.title,

    slug: post.slug.current,

    excerpt: post.excerpt,

    // We'll replace this with Portable Text later
    content: post.body ?? [],

    coverImage: post.coverImage?.asset?.url ?? "",

    category: post.categories?.length
      ? mapCategory(post.categories[0])
      : {
          id: "",
          name: "",
          slug: "",
          description: "",
          color: "#25499F",
          icon: "",
        },

    author: mapAuthor(post.author),

    tags: post.tags ?? [],

    seo: {
      title: post.seoTitle,
      description: post.seoDescription,
      keywords: post.seoKeywords?.split(",").map((keyword: string) => keyword.trim()) ?? [],
    },

    publishedAt: post.publishedAt,

    updatedAt: post.updatedAt,

    readingTime: calculateReadingTime(post.body ?? []),

    featured: post.featured,

    popular: false,
  };
}
