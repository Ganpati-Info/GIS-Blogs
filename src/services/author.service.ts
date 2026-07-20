import { client } from "@/lib/sanity/client";
import { AUTHOR_QUERY, AUTHORS_QUERY } from "@/lib/sanity/queries";

export async function getAuthors() {
  return client.fetch(AUTHORS_QUERY);
}

export async function getAuthor(slug: string) {
  return client.fetch(AUTHOR_QUERY, {
    slug,
  });
}
