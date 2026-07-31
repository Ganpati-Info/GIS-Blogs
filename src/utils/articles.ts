import { Post } from "@/types";

export function getArticleCounts(posts: Post[]) {
  return posts.reduce<Record<string, number>>((acc, post) => {
    post.categories.forEach((category) => {
      acc[category.slug] = (acc[category.slug] ?? 0) + 1;
    });

    return acc;
  }, {});
}
