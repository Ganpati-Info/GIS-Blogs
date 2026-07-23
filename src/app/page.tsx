import HomePageClient from "@/components/home/HomePageClient";

import { getPosts } from "@/services/post.service";
import { getCategories } from "@/services/category.service";
export const dynamic = "force-dynamic";

export default async function HomePage() {
  const posts = await getPosts();
  const categories = await getCategories();

  const featuredPost = posts.find((post) => post.featured) ?? posts[0];

  const popularPosts = posts.filter((post) => post.popular);

console.log(
  posts.map((p) => ({
    title: p.title,
    featured: p.featured,
  }))
);

  return (
    <HomePageClient
      featuredPost={featuredPost}
      popularPosts={popularPosts}
      allPosts={posts}
      categories={categories}
    />
  );
}
