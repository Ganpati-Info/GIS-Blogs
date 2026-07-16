"use client";

import { useMemo, useState } from "react";

import Container from "@/components/layout/Container";

import {
  PostsHeader,
  PostsSearch,
  ViewSwitcher,
  PostsGrid,
  PostsList,
  LoadMore,
  EmptyState,
  SortDropdown,
} from "@/components/blog/posts";
import { usePosts } from "@/hooks/usePosts";

import { homePageData } from "@/data";

const INITIAL_POSTS = 8;

export default function PostsPage() {


const {
  query,
  setQuery,

  view,
  setView,

  sort,
  setSort,

  selectedCategory,
  setSelectedCategory,

  visiblePosts,
  setVisiblePosts,

  filteredPosts,
} = usePosts({
  posts: homePageData.allPosts,
  initialVisible: INITIAL_POSTS,
});

  // const filteredPosts = useMemo(() => {
  //   if (!query.trim()) {
  //     return homePageData.latestPosts;
  //   }

  //   const keyword = query.toLowerCase();

  //   return homePageData.latestPosts.filter((post) => {
  //     return (
  //       post.title.toLowerCase().includes(keyword) ||
  //       post.excerpt.toLowerCase().includes(keyword) ||
  //       post.category.name.toLowerCase().includes(keyword) ||
  //       post.author.name.toLowerCase().includes(keyword) ||
  //       post.tags.some((tag) => tag.toLowerCase().includes(keyword))
  //     );
  //   });
  // }, [query]);

  const visible = filteredPosts.slice(0, visiblePosts);

  return (
    <main>
      <Container className="py-8 lg:py-10">
        <PostsHeader total={filteredPosts.length} />

        <div className="mt-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <PostsSearch value={query} onChange={setQuery} />

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <SortDropdown value={sort} onChange={setSort} />

            <ViewSwitcher view={view} onChange={setView} />
          </div>
        </div>

        <section className="lg:mt-10 mt-5">
          {filteredPosts.length === 0 ? (
            <EmptyState />
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
