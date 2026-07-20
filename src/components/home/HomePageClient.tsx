"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { getArticleCounts } from "@/utils/articles";

import BlogCard from "@/components/home/BlogCard";
import CategoryTabs from "@/components/home/CategoryCard";
import ExploreCategories from "@/components/home/ExploreCategories";
import FeaturedPost from "@/components/home/FeaturedPost";
import Newsletter from "@/components/common/Newsletter";
import PopularPosts from "@/components/home/PopularPosts";

import Container from "@/components/layout/Container";
import { SearchDialog } from "@/components/blog/search";

import { Category, Post } from "@/types";

interface HomePageClientProps {
  featuredPost: Post;
  popularPosts: Post[];
  allPosts: Post[];
  categories: Category[];
}

export default function HomePageClient({
  featuredPost,
  popularPosts,
  allPosts,
  categories,
}: HomePageClientProps) {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const articleCounts = useMemo(() => getArticleCounts(allPosts), [allPosts]);

  const filteredPosts = useMemo(() => {
    if (selectedCategory === "all") {
      return allPosts;
    }

    return allPosts.filter((post) => post.category.slug === selectedCategory);
  }, [selectedCategory, allPosts]);

  const sectionTitle =
    selectedCategory === "all"
      ? "Latest Stories"
      : (categories.find((category) => category.slug === selectedCategory)
          ?.name ?? "Latest Stories");

  return (
    <main>
      <Container className="py-6 sm:py-8 lg:py-10 max-w-7xl!">
        {/* Featured Post */}
        <FeaturedPost post={featuredPost} />

        {/* Categories */}
        <section className="mt-10">
          <CategoryTabs
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        </section>

        {/* Latest Stories */}
        <section className="mt-12 lg:mt-16">
          <div className="mb-8 space-y-5">
            <div>
              <h2 className="text-2xl font-bold sm:text-3xl">{sectionTitle}</h2>

              <p className="mt-2 text-sm text-muted-foreground sm:text-base">
                {selectedCategory === "all"
                  ? "Discover our latest technology insights, tutorials, and case studies."
                  : `Explore the latest articles in ${sectionTitle}.`}
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <Link
                href={
                  selectedCategory === "all" ? "/posts" : `/${selectedCategory}`
                }
                className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
              >
                View All Articles
                <ArrowRight className="h-4 w-4" />
              </Link>

              <SearchDialog posts={allPosts} />
            </div>
          </div>

          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {filteredPosts.slice(0, 3).map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="rounded-lg border px-6 py-12 text-center sm:px-10 sm:py-16">
              <h3 className="text-lg font-semibold sm:text-xl">
                No articles found
              </h3>

              <p className="mt-2 text-sm text-muted-foreground sm:text-base">
                Articles for this category will be published soon.
              </p>
            </div>
          )}
        </section>

        {/* Popular Posts & Categories */}
        <section className="mt-16 lg:mt-20">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <PopularPosts posts={popularPosts} />

            <ExploreCategories
              categories={categories}
              articleCounts={articleCounts}
            />
          </div>
        </section>

        {/* Newsletter */}
        <section className="mt-16 lg:mt-20">
          <Newsletter />
        </section>
      </Container>
    </main>
  );
}
