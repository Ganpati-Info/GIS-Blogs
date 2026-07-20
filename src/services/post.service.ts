import { client } from "@/lib/sanity/client";
import { POSTS_QUERY, POST_QUERY } from "@/lib/sanity/queries";

export async function getPosts() {
  return client.fetch(POSTS_QUERY);
}

export async function getPost(categorySlug: string, postSlug: string) {
  return client.fetch(POST_QUERY, {
    categorySlug,
    postSlug,
  });
}
