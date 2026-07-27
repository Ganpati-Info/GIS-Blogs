import { client } from "@/lib/sanity/client";

import {
  POSTS_QUERY,
  POST_QUERY,
  POSTS_BY_CATEGORY_QUERY,
} from "@/lib/sanity/queries";

import { mapPost } from "@/lib/sanity/mappers/post.mapper";

import { Post } from "@/types";
import { fallbackPosts } from "@/data/fallback-content";

const hasSanityConfig =
  Boolean(process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) &&
  Boolean(process.env.NEXT_PUBLIC_SANITY_DATASET) &&
  Boolean(process.env.NEXT_PUBLIC_SANITY_API_VERSION);

async function withTimeout<T>(
  promise: Promise<T>,
  fallback: T,
  timeoutMs = 5000,
) {
  const timeout = new Promise<T>((resolve) => {
    setTimeout(() => resolve(fallback), timeoutMs);
  });

  return Promise.race([promise.catch(() => fallback), timeout]);
}

export async function getPosts(): Promise<Post[]> {
  if (!hasSanityConfig) {
    return fallbackPosts;
  }

  const posts = client
    .fetch(
      POSTS_QUERY,
      {},
      {
        cache: "no-store",
      },
    )
    .catch(() => fallbackPosts);

  const resolvedPosts = await withTimeout(posts, fallbackPosts);

  return Array.isArray(resolvedPosts)
    ? resolvedPosts.map(mapPost)
    : fallbackPosts;
}

export async function getPost(postSlug: string): Promise<Post | null> {
  if (!hasSanityConfig) {
    return fallbackPosts.find((post) => post.slug === postSlug) ?? null;
  }

  const post = client
    .fetch(POST_QUERY, {
      postSlug,
    })
    .catch(() => null);

  const resolvedPost = await withTimeout(post, null);

  return resolvedPost
    ? mapPost(resolvedPost)
    : (fallbackPosts.find((item) => item.slug === postSlug) ?? null);
}

export async function getPostsByCategory(
  categorySlug: string,
): Promise<Post[]> {
  if (!hasSanityConfig) {
    return fallbackPosts.filter((post) => post.category.slug === categorySlug);
  }

  const posts = client
    .fetch(POSTS_BY_CATEGORY_QUERY, {
      categorySlug,
    })
    .catch(() => fallbackPosts);

  const resolvedPosts = await withTimeout(posts, fallbackPosts);

  return Array.isArray(resolvedPosts)
    ? resolvedPosts.map(mapPost)
    : fallbackPosts.filter((post) => post.category.slug === categorySlug);
}

export async function getRelatedPosts(
  currentPost: Post,
  limit = 3,
): Promise<Post[]> {
  const posts = await getPosts();

  return posts
    .filter(
      (post) =>
        post.id !== currentPost.id &&
        post.category.slug === currentPost.category.slug,
    )
    .slice(0, limit);
}
