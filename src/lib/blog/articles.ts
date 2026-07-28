import { getPost as fetchPost, getPosts } from "@/services/post.service";
import type { Post } from "@/types";

export async function getPost(_categorySlug: string, postSlug: string) {
  return await fetchPost(postSlug);
}

export async function getRelatedPosts(post: Post, limit = 3) {
  const posts = await getPosts();

  return posts
    .filter(
      (item: Post) =>
        item.category.slug === post.category.slug && item.id !== post.id,
    )
    .slice(0, limit);
}

export async function getPreviousPost(post: Post) {
  const posts = await getPosts();

  const index = posts.findIndex((item: Post) => item.id === post.id);

  return index > 0 ? posts[index - 1] : null;
}

export async function getNextPost(post: Post) {
  const posts = await getPosts();

  const index = posts.findIndex((item: Post) => item.id === post.id);

  return index < posts.length - 1 ? posts[index + 1] : null;
}
