"use client";

import { useEffect, useState } from "react";
import { Search } from "lucide-react";

import { Command, CommandDialog, CommandList } from "@/components/ui/command";

import { homePageData } from "@/data";
import { useSearch } from "@/hooks/useSearch";

import SearchInput from "./SearchInput";
import SearchResults from "./SearchResults";

export default function SearchDialog() {
  const [open, setOpen] = useState(false);

  const { query, setQuery, results, totalResults, isSearching } = useSearch({
    posts: homePageData.latestPosts,
  });

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }

      if (e.key === "/") {
        const target = e.target as HTMLElement;

        if (
          target.tagName !== "INPUT" &&
          target.tagName !== "TEXTAREA" &&
          !target.isContentEditable
        ) {
          e.preventDefault();
          setOpen(true);
        }
      }

      if (e.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", down);

    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="flex h-11 w-full items-center justify-between rounded-lg border bg-background px-4 text-sm text-muted-foreground transition-colors hover:bg-muted sm:h-10 sm:w-auto sm:justify-start sm:gap-3"
      >
        <div className="flex items-center gap-2">
          <Search className="h-4 w-4" />
          <span>Search articles...</span>
        </div>

        <kbd className="hidden rounded-md border bg-muted px-2 py-1 text-xs sm:inline-flex">
          Ctrl K
        </kbd>
      </button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <Command className="w-full rounded-lg sm:max-w-2xl">
          <SearchInput
            value={query}
            onValueChange={setQuery}
            loading={isSearching}
          />

          <CommandList className="max-h-[55vh] sm:max-h-[65vh]">
            <SearchResults
              query={query}
              results={results}
              totalResults={totalResults}
              loading={isSearching}
              onClear={() => setQuery("")}
              onClose={() => setOpen(false)}
            />
          </CommandList>
        </Command>
      </CommandDialog>
    </>
  );
}
