import { client } from "@/lib/sanity/client";

import {
  POSTS_QUERY,
  POST_QUERY,
  POSTS_BY_CATEGORY_QUERY,
} from "@/lib/sanity/queries";

import { mapPost } from "@/lib/sanity/mappers/post.mapper";

import { Post } from "@/types";

export async function getPosts(): Promise<Post[]> {
  const posts = await client.fetch(
    POSTS_QUERY,
    {},
    {
      cache: "no-store",
    },
  );

  console.log("SANITY DEBUG", {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    postCount: posts.length,
    posts: posts.map((post: any) => ({
      id: post._id,
      title: post.title,
    })),
  });

  return posts.map(mapPost);
}

export async function getPost(
  categorySlug: string,
  postSlug: string,
): Promise<Post | null> {
  const post = await client.fetch(POST_QUERY, {
    categorySlug,
    postSlug,
  });

  return post ? mapPost(post) : null;
}

export async function getPostsByCategory(
  categorySlug: string,
): Promise<Post[]> {
  const posts = await client.fetch(POSTS_BY_CATEGORY_QUERY, {
    categorySlug,
  });

  return posts.map(mapPost);
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
