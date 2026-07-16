import { Category, Post } from ".";

export interface HomePageData {
  featuredPost: Post;
  latestPosts: Post[];
  popularPosts: Post[];
  categories: Category[];
  allPosts: Post[];
}
