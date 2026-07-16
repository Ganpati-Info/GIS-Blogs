"use client";

import { useMemo, useState } from "react";

import { Post } from "@/types";

export type ViewType = "grid" | "list";

export type SortType = "newest" | "oldest" | "a-z" | "z-a" | "reading-time";

interface UsePostsProps {
  posts: Post[];
  initialVisible?: number;
}

export function usePosts({ posts, initialVisible = 8 }: UsePostsProps) {
  const [query, setQuery] = useState("");

  const [view, setView] = useState<ViewType>("grid");

  const [sort, setSort] = useState<SortType>("newest");

  const [selectedCategory, setSelectedCategory] = useState("all");

  const [visiblePosts, setVisiblePosts] = useState(initialVisible);

  const filteredPosts = useMemo(() => {
    let data = [...posts];

    if (selectedCategory !== "all") {
      data = data.filter((post) => post.category.slug === selectedCategory);
    }

    if (query.trim()) {
      const keyword = query.toLowerCase();

      data = data.filter((post) => {
        return (
          post.title.toLowerCase().includes(keyword) ||
          post.excerpt.toLowerCase().includes(keyword) ||
          post.category.name.toLowerCase().includes(keyword) ||
          post.author.name.toLowerCase().includes(keyword) ||
          post.tags.some((tag) => tag.toLowerCase().includes(keyword))
        );
      });
    }

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

      default:
        data.sort(
          (a, b) =>
            new Date(b.publishedAt).getTime() -
            new Date(a.publishedAt).getTime(),
        );
    }

    return data;
  }, [posts, query, selectedCategory, sort]);

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
