import { client } from "@/lib/sanity/client";
import {
  CATEGORY_QUERY,
  CATEGORIES_QUERY,
  POSTS_BY_CATEGORY_QUERY,
} from "@/lib/sanity/queries";

import { mapCategory } from "@/lib/sanity/mappers/category.mapper";
import { mapPost } from "@/lib/sanity/mappers/post.mapper";

export async function getCategories() {
  const categories = await client.fetch(CATEGORIES_QUERY);

  return categories.map(mapCategory);
}

export async function getCategory(slug: string) {
  const category = await client.fetch(CATEGORY_QUERY, {
    slug,
  });

  return category ? mapCategory(category) : null;
}

export async function getPostsByCategory(slug: string) {
  const posts = await client.fetch(POSTS_BY_CATEGORY_QUERY, {
    categorySlug: slug,
  });

  return posts.map(mapPost);
}
