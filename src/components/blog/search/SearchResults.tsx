"use client";

import SearchResultCard from "./SearchResultCard";
import LoadingState from "./LoadingState";
import EmptyState from "./EmptyState";
import SearchFooter from "./SearchFooter";

import { Post } from "@/types";

interface SearchResultsProps {
  query: string;
  results: Post[];
  totalResults: number;
  loading: boolean;
  onClear: () => void;
  onClose: () => void;
}

export default function SearchResults({
  query,
  results,
  totalResults,
  loading,
  onClear,
  onClose,
}: SearchResultsProps) {
  if (loading) {
    return <LoadingState />;
  }

  if (!query.trim()) {
    return (
      <div className="flex h-80 items-center justify-center">
        <p className="text-sm text-muted-foreground">
          Start typing to search articles...
        </p>
      </div>
    );
  }

  if (results.length === 0) {
    return <EmptyState query={query} onClear={onClear} />;
  }

  return (
    <>
      <div className="px-4 py-3">
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Top Results
        </p>
      </div>

      <div className="space-y-1 px-2 pb-2">
        {results.map((post) => (
          <SearchResultCard key={post.id} post={post} query={query} />
        ))}
      </div>

      <SearchFooter
        query={query}
        totalResults={totalResults}
        onClose={onClose}
      />
    </>
  );
}
