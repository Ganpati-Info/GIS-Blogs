import { Post } from "@/types";

export function generateArticleMetadata(post: Post) {
  return {
    title: post.title,
    description: post.excerpt,

    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
      type: "article",
    },

    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
    },
  };
}

export function generateArticleSchema(post: Post, siteUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",

    headline: post.title,

    description: post.excerpt,

    image: `${siteUrl}${post.coverImage}`,

    datePublished: post.publishedAt,

    author: {
      "@type": "Person",
      name: post.author.name,
    },

    publisher: {
      "@type": "Organization",
      name: "Ganpati Infosolutions",
    },

    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteUrl}/${post.category.slug}/${post.slug}`,
    },
  };
}
