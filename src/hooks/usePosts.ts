"use client";

import { useEffect, useMemo, useState } from "react";

import { Post } from "@/types";

export type ViewType = "grid" | "list";

export type SortType = "newest" | "oldest" | "a-z" | "z-a" | "reading-time";

interface UsePostsProps {
  posts: Post[];
  initialVisible?: number;
  initialQuery?: string;
}

export function usePosts({
  posts,
  initialVisible = 8,
  initialQuery = "",
}: UsePostsProps) {
  const [query, setQuery] = useState(initialQuery);

  const [view, setView] = useState<ViewType>("grid");

  const [sort, setSort] = useState<SortType>("newest");

  const [selectedCategory, setSelectedCategory] = useState("all");

  const [visiblePosts, setVisiblePosts] = useState(initialVisible);

  const filteredPosts = useMemo(() => {
    let data = [...posts];

    // Category filtering
    if (selectedCategory !== "all") {
      data = data.filter((post) =>
        post.categories.some((category) => category.slug === selectedCategory),
      );
    }

    // Search filtering
    const keyword = query.trim().toLowerCase();

    if (keyword) {
      data = data.filter((post) => {
        const title = post.title?.toLowerCase() ?? "";

        const excerpt = post.excerpt?.toLowerCase() ?? "";

        const categories =
          post.categories?.map((category) => category.name.toLowerCase()) ?? [];

        const author = post.author?.name?.toLowerCase() ?? "";

        const tags = post.tags?.map((tag) => tag.toLowerCase()) ?? [];

        return (
          title.includes(keyword) ||
          excerpt.includes(keyword) ||
          categories.some((category) => category.includes(keyword)) ||
          author.includes(keyword) ||
          tags.some((tag) => tag.includes(keyword))
        );
      });
    }

    // Sorting
    switch (sort) {
      case "oldest":
        data.sort(
          (a, b) =>
            new Date(a.publishedAt).getTime() -
            new Date(b.publishedAt).getTime(),
        );
        break;

      case "a-z":
        data.sort((a, b) => a.title.localeCompare(b.title));
        break;

      case "z-a":
        data.sort((a, b) => b.title.localeCompare(a.title));
        break;

      case "reading-time":
        data.sort((a, b) => a.readingTime - b.readingTime);
        break;

      case "newest":
      default:
        data.sort(
          (a, b) =>
            new Date(b.publishedAt).getTime() -
            new Date(a.publishedAt).getTime(),
        );
        break;
    }

    return data;
  }, [posts, query, selectedCategory, sort]);

  // Reset Load More whenever filtering changes
  useEffect(() => {
    setVisiblePosts(initialVisible);
  }, [query, selectedCategory, sort, initialVisible]);

  return {
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
  };
}
