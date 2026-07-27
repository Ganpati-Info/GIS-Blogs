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

  const allResults = useMemo(() => {
    const keyword = debouncedQuery.trim().toLowerCase();

    if (!keyword) {
      return [];
    }

    return posts.filter((post) => {
      const title = post.title?.toLowerCase() ?? "";
      const excerpt = post.excerpt?.toLowerCase() ?? "";
      const category = post.category?.name?.toLowerCase() ?? "";
      const author = post.author?.name?.toLowerCase() ?? "";

      const tags = post.tags?.map((tag) => tag.toLowerCase()) ?? [];

      return (
        title.includes(keyword) ||
        excerpt.includes(keyword) ||
        category.includes(keyword) ||
        author.includes(keyword) ||
        tags.some((tag) => tag.includes(keyword))
      );
    });
  }, [posts, debouncedQuery]);

  // Only these appear inside the search dialog
  const results = useMemo(() => {
    return allResults.slice(0, limit);
  }, [allResults, limit]);

  // Real number of matches
  const totalResults = allResults.length;

  return {
    query,
    setQuery,

    debouncedQuery,

    results,
    totalResults,

    isSearching: query !== debouncedQuery,
  };
}
