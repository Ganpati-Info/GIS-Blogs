"use client";

import { useEffect, useMemo, useState } from "react";

import { Post } from "@/types";

interface UseSearchOptions {
  posts: Post[];
  delay?: number;
  limit?: number;
}

export function useSearch({ posts, delay = 250, limit = 5 }: UseSearchOptions) {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
    }, delay);

    return () => clearTimeout(timer);
  }, [query, delay]);

  const results = useMemo(() => {
    if (!debouncedQuery.trim()) return [];

    const keyword = debouncedQuery.toLowerCase();

    return posts
      .filter((post) => {
        return (
          post.title.toLowerCase().includes(keyword) ||
          post.excerpt.toLowerCase().includes(keyword) ||
          post.category.name.toLowerCase().includes(keyword) ||
          post.author.name.toLowerCase().includes(keyword) ||
          post.tags.some((tag) => tag.toLowerCase().includes(keyword))
        );
      })
      .slice(0, limit);
  }, [posts, debouncedQuery, limit]);

  const totalResults = useMemo(() => {
    if (!debouncedQuery.trim()) return 0;

    const keyword = debouncedQuery.toLowerCase();

    return posts.filter((post) => {
      return (
        post.title.toLowerCase().includes(keyword) ||
        post.excerpt.toLowerCase().includes(keyword) ||
        post.category.name.toLowerCase().includes(keyword) ||
        post.author.name.toLowerCase().includes(keyword) ||
        post.tags.some((tag) => tag.toLowerCase().includes(keyword))
      );
    }).length;
  }, [posts, debouncedQuery]);

  return {
    query,
    setQuery,
    debouncedQuery,
    results,
    totalResults,
    isSearching: query !== debouncedQuery,
  };
}
