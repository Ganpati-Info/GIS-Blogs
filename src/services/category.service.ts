import { client } from "@/lib/sanity/client";
import { CATEGORY_QUERY, CATEGORIES_QUERY } from "@/lib/sanity/queries";

export async function getCategories() {
  return client.fetch(CATEGORIES_QUERY);
}

export async function getCategory(slug: string) {
  return client.fetch(CATEGORY_QUERY, {
    slug,
  });
}