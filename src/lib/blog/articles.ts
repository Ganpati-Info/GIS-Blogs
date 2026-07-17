import { posts } from "@/data/posts";
import { Post } from "@/types";

export function getPost(
  categorySlug: string,
  postSlug: string,
): Post | undefined {
  return posts.find(
    (post) => post.category.slug === categorySlug && post.slug === postSlug,
  );
}

export function getRelatedPosts(post: Post, limit = 3) {
  return posts
    .filter(
      (item) =>
        item.category.slug === post.category.slug && item.id !== post.id,
    )
    .slice(0, limit);
}

export function getPreviousPost(post: Post) {
  const index = posts.findIndex((item) => item.id === post.id);

  return index > 0 ? posts[index - 1] : null;
}

export function getNextPost(post: Post) {
  const index = posts.findIndex((item) => item.id === post.id);

  return index < posts.length - 1 ? posts[index + 1] : null;
}
