"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getArticleCounts } from "@/utils/articles";
import BlogCard from "@/components/home/BlogCard";
import CategoryTabs from "@/components/home/CategoryCard";
import FeaturedPost from "@/components/home/FeaturedPost";
import Sidebar from "@/components/home/Sidebar";
import Container from "@/components/layout/Container";
import { SearchDialog } from "@/components/blog/search";

import { homePageData } from "@/data";

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const articleCounts = useMemo(
    () => getArticleCounts(homePageData.latestPosts),
    [],
  );

  const filteredPosts = useMemo(() => {
    if (selectedCategory === "all") {
      return homePageData.latestPosts;
    }

    return homePageData.latestPosts.filter(
      (post) => post.category.slug === selectedCategory,
    );
  }, [selectedCategory]);

  const sectionTitle =
    selectedCategory === "all"
      ? "Latest Stories"
      : (homePageData.categories.find(
          (category) => category.slug === selectedCategory,
        )?.name ?? "Latest Stories");

  return (
      <main>
        <Container className="py-6 sm:py-8 lg:py-10">
          <section className="grid gap-8 md:gap-10 lg:grid-cols-12">
            <div className="w-full lg:col-span-8 xl:col-span-9">
              <FeaturedPost post={homePageData.featuredPost} />

              {/* Categories */}
              <CategoryTabs
                categories={homePageData.categories}
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
              />

              {/* Latest Articles */}
              <section className="mt-12 sm:mt-14 lg:mt-16">
                <div className="mb-6 flex flex-col gap-3 sm:gap-4 sm:mb-8">
                  <div>
                    <h2 className="text-2xl font-bold sm:text-3xl">
                      {sectionTitle}
                    </h2>

                    <p className="mt-2 text-sm text-muted-foreground sm:text-base">
                      {selectedCategory === "all"
                        ? "Discover our latest technology insights, tutorials and case studies."
                        : `Explore the latest articles in ${sectionTitle}.`}
                    </p>
                  </div>

                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <Link
                      href={
                        selectedCategory === "all"
                          ? "/posts"
                          : `/${selectedCategory}`
                      }
                      className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
                    >
                      View All Articles
                      <ArrowRight className="h-4 w-4" />
                    </Link>

                    <SearchDialog />
                  </div>

                  {/* right side small search icon with some text to implement modal search component */}
                </div>

                {filteredPosts.length > 0 ? (
                  <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                    {filteredPosts.slice(0, 3).map((post) => (
                      <BlogCard key={post.id} post={post} />
                    ))}
                  </div>
                ) : (
                  <div className="rounded-2xl border py-12 text-center sm:py-16">
                    <h3 className="text-lg font-semibold sm:text-xl">
                      No articles found
                    </h3>

                    <p className="mt-2 text-sm text-muted-foreground sm:text-base">
                      Articles for this category will be published soon.
                    </p>
                  </div>
                )}
              </section>
            </div>

            <div className="w-full lg:col-span-4 xl:col-span-3">
              <Sidebar
                popularPosts={homePageData.popularPosts}
                categories={homePageData.categories}
                articleCounts={articleCounts}
              />
            </div>
          </section>

          {/* Newsletter */}
          <section className="mt-16 sm:mt-20 lg:mt-24">
            {/* <Newsletter /> */}
          </section>
        </Container>
      </main>
  );
}
