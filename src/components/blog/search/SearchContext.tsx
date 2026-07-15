"use client";

import {
  createContext,
  useContext,
  useMemo,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";


import { Post } from "@/types";
import { useSearch } from "@/hooks/useSearch";

interface SearchContextValue {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;

  query: string;
  setQuery: Dispatch<SetStateAction<string>>;

  results: Post[];

  totalResults: number;

  loading: boolean;
}

const SearchContext = createContext<SearchContextValue | null>(null);

interface SearchProviderProps {
  children: ReactNode;
  posts: Post[];
}

export function SearchProvider({ children, posts }: SearchProviderProps) {
  const [open, setOpen] = useState(false);

  const { query, setQuery, results, totalResults, isSearching } = useSearch({
    posts,
  });

  const value = useMemo(
    () => ({
      open,
      setOpen,

      query,
      setQuery,

      results,

      totalResults,

      loading: isSearching,
    }),
    [open, query, results, totalResults, isSearching],
  );

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
}

export function useBlogSearch() {
  const context = useContext(SearchContext);

  if (!context) {
    throw new Error("useBlogSearch must be used within SearchProvider");
  }

  return context;
}
