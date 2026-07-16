import { HomePageData } from "@/types";

import { categories } from "./categories";
import { posts } from "./posts";

const sortedPosts = [...posts].sort(
  (a, b) =>
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
);

export const homePageData: HomePageData = {
  featuredPost: sortedPosts.find((post) => post.featured)!,

  allPosts: sortedPosts,

  latestPosts: sortedPosts.slice(0, 6),

  popularPosts: sortedPosts.filter((post) => post.popular).slice(0, 5),

  categories,
};
