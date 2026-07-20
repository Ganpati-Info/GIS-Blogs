import { notFound } from "next/navigation";

import Container from "@/components/layout/Container";
import CategoryHero from "@/components/blog/category/CategoryHero";
import CategoryPageClient from "@/components/blog/category/CategoryPageClient";

import { getCategory, getPostsByCategory } from "@/services/category.service";

interface CategoryPageProps {
  params: Promise<{
    categorySlug: string;
  }>;
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { categorySlug } = await params;

  const [category, posts] = await Promise.all([
    getCategory(categorySlug),
    getPostsByCategory(categorySlug),
  ]);

  if (!category) {
    notFound();
  }

  return (
    <main>
      <Container className="max-w-7xl py-8 lg:py-10">
        <CategoryHero category={category} total={posts.length} />

        <CategoryPageClient posts={posts} />
      </Container>
    </main>
  );
}
