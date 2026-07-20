"use client";

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
import { Post } from "@/types";

interface PostsPageClientProps {
  posts: Post[];
}

const INITIAL_POSTS = 8;

export default function PostsPageClient({ posts }: PostsPageClientProps) {
  const {
    query,
    setQuery,

    view,
    setView,

    sort,
    setSort,

    visiblePosts,
    setVisiblePosts,

    filteredPosts,
  } = usePosts({
    posts,
    initialVisible: INITIAL_POSTS,
  });

  const visible = filteredPosts.slice(0, visiblePosts);

  return (
    <main>
      <Container className="max-w-7xl! py-8 lg:py-10">
        <PostsHeader total={filteredPosts.length} />

        <div className="mt-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <PostsSearch value={query} onChange={setQuery} />

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <SortDropdown value={sort} onChange={setSort} />

            <ViewSwitcher view={view} onChange={setView} />
          </div>
        </div>

        <section className="mt-5 lg:mt-10">
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
