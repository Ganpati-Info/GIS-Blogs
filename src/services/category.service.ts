import { client } from "@/lib/sanity/client";
import {
  CATEGORY_QUERY,
  CATEGORIES_QUERY,
  POSTS_BY_CATEGORY_QUERY,
} from "@/lib/sanity/queries";

import { mapCategory } from "@/lib/sanity/mappers/category.mapper";
import { mapPost } from "@/lib/sanity/mappers/post.mapper";
import { fallbackCategories, fallbackPosts } from "@/data/fallback-content";

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

export async function getCategories() {
  if (!hasSanityConfig) {
    return fallbackCategories;
  }

  const categories = client
    .fetch(CATEGORIES_QUERY)
    .catch(() => fallbackCategories);

  const resolvedCategories = await withTimeout(categories, fallbackCategories);

  return Array.isArray(resolvedCategories)
    ? resolvedCategories.map(mapCategory)
    : fallbackCategories;
}

export async function getCategory(slug: string) {
  if (!hasSanityConfig) {
    return (
      fallbackCategories.find((category) => category.slug === slug) ?? null
    );
  }

  const category = client
    .fetch(CATEGORY_QUERY, {
      slug,
    })
    .catch(() => null);

  const resolvedCategory = await withTimeout(category, null);

  return resolvedCategory
    ? mapCategory(resolvedCategory)
    : (fallbackCategories.find((item) => item.slug === slug) ?? null);
}

export async function getPostsByCategory(slug: string) {
  if (!hasSanityConfig) {
    return fallbackPosts.filter((post) =>
      post.categories.some((category) => category.slug === slug),
    );
  }

  const posts = client
    .fetch(POSTS_BY_CATEGORY_QUERY, {
      categorySlug: slug,
    })
    .catch(() => fallbackPosts);

  const resolvedPosts = await withTimeout(posts, fallbackPosts);

  return Array.isArray(resolvedPosts)
    ? resolvedPosts.map(mapPost)
    : fallbackPosts.filter((post) => post.categories.some((category) => category.slug === slug));
}
