import { Post } from "@/types";

export function getArticleCounts(posts: Post[]) {
  return posts.reduce<Record<string, number>>((acc, post) => {
    acc[post.category.slug] = (acc[post.category.slug] ?? 0) + 1;

    return acc;
  }, {});
}
