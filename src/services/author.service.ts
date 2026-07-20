import { client } from "@/lib/sanity/client";
import {
  AUTHORS_QUERY,
  AUTHOR_QUERY,
  POSTS_BY_AUTHOR_QUERY,
} from "@/lib/sanity/queries";

import { mapAuthor } from "@/lib/sanity/mappers/author.mapper";
import { mapPost } from "@/lib/sanity/mappers/post.mapper";

export async function getAuthors() {
  const authors = await client.fetch(AUTHORS_QUERY);

  return authors.map(mapAuthor);
}

export async function getAuthor(slug: string) {
  const author = await client.fetch(AUTHOR_QUERY, { slug });

  return author ? mapAuthor(author) : null;
}

export async function getPostsByAuthor(slug: string) {
  const posts = await client.fetch(POSTS_BY_AUTHOR_QUERY, {
    slug,
  });

  return posts.map(mapPost);
}
