"use client";

import { notFound, useParams } from "next/navigation";

import Container from "@/components/layout/Container";

import {
  PostsGrid,
  PostsList,
  PostsSearch,
  ViewSwitcher,
  SortDropdown,
  LoadMore,
  EmptyState,
} from "@/components/blog/posts";

import CategoryHero from "@/components/blog/category/CategoryHero";

import { categories } from "@/data/categories";
import { posts } from "@/data/posts";

import { usePosts } from "@/hooks/usePosts";

const INITIAL_POSTS = 8;

export default function CategoryPage() {
  const params = useParams();

  const slug = params.categorySlug as string;

  const category = categories.find((category) => category.slug === slug);

  if (!category) {
    notFound();
  }

  const categoryPosts = posts.filter((post) => post.category.slug === slug);

  const {
    query,
    setQuery,

    view,
    setView,

    sort,
    setSort,

    filteredPosts,

    visiblePosts,
    setVisiblePosts,
  } = usePosts({
    posts: categoryPosts,
    initialVisible: INITIAL_POSTS,
  });

  const visible = filteredPosts.slice(0, visiblePosts);

  return (
    <main>
      <Container className="py-8 lg:py-10 max-w-7xl!">
        <CategoryHero category={category} total={filteredPosts.length} />

        <div className="mt-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <PostsSearch value={query} onChange={setQuery} />

          <div className="flex flex-col gap-3 sm:flex-row">
            <SortDropdown value={sort} onChange={setSort} />

            <ViewSwitcher view={view} onChange={setView} />
          </div>
        </div>

        <section className="mt-10">
          {filteredPosts.length === 0 ? (
            <EmptyState query={query} onClear={() => setQuery("")} />
          ) : view === "grid" ? (
            <PostsGrid posts={visible} />
          ) : (
            <PostsList posts={visible} />
          )}
        </section>

        {visiblePosts < filteredPosts.length && (
          <LoadMore
            onClick={() => setVisiblePosts((prev) => prev + INITIAL_POSTS)}
          />
        )}
      </Container>
    </main>
  );
}
