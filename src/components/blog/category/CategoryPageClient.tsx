"use client";

import {
  PostsGrid,
  PostsList,
  PostsSearch,
  ViewSwitcher,
  SortDropdown,
  LoadMore,
  EmptyState,
} from "@/components/blog/posts";

import { usePosts } from "@/hooks/usePosts";
import { Post } from "@/types";

interface CategoryPageClientProps {
  posts: Post[];
}

const INITIAL_POSTS = 8;

export default function CategoryPageClient({
  posts,
}: CategoryPageClientProps) {
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
    posts,
    initialVisible: INITIAL_POSTS,
  });

  const visible = filteredPosts.slice(0, visiblePosts);

  return (
    <>
      <div className="mt-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <PostsSearch value={query} onChange={setQuery} />

        <div className="flex flex-col gap-3 sm:flex-row">
          <SortDropdown
            value={sort}
            onChange={setSort}
          />

          <ViewSwitcher
            view={view}
            onChange={setView}
          />
        </div>
      </div>

      <section className="mt-10">
        {filteredPosts.length === 0 ? (
          <EmptyState
            query={query}
            onClear={() => setQuery("")}
          />
        ) : view === "grid" ? (
          <PostsGrid posts={visible} />
        ) : (
          <PostsList posts={visible} />
        )}
      </section>

      {visiblePosts < filteredPosts.length && (
        <LoadMore
          onClick={() =>
            setVisiblePosts((prev) => prev + INITIAL_POSTS)
          }
        />
      )}
    </>
  );
}