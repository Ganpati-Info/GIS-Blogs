import HomePageClient from "@/components/home/HomePageClient";

import { getPosts, getPopularPosts } from "@/services/post.service";
import { getCategories } from "@/services/category.service";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const [posts, popularPosts, categories] = await Promise.all([
    getPosts(),
    getPopularPosts(),
    getCategories(),
  ]);

  const featuredPost = posts.find((post) => post.featured) ?? posts[0];

  return (
    <HomePageClient
      featuredPost={featuredPost}
      popularPosts={popularPosts}
      allPosts={posts}
      categories={categories}
    />
  );
}
