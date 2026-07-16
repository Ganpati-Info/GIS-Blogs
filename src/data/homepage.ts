import { HomePageData } from "@/types";

import { categories } from "./categories";
import { posts } from "./posts";

export const homePageData: HomePageData = {
  featuredPost: posts.find((post) => post.featured)!,

  latestPosts: [...posts]
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    )
    .slice(0, 6),

  popularPosts: posts.filter((post) => post.popular).slice(0, 5),

  categories,
};
