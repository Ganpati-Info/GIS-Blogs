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

    return () => {
      document.removeEventListener("keydown", down);
    };
  }, []);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex h-10 items-center gap-2 rounded-lg border bg-background px-4 text-sm text-muted-foreground transition hover:bg-muted"
      >
        <Search className="h-4 w-4" />

        <span>Search articles...</span>

        <kbd className="ml-4 rounded border bg-muted px-2 py-1 text-xs">
          Ctrl K
        </kbd>
      </button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <Command>
          <SearchInput
            value={query}
            onValueChange={setQuery}
            loading={isSearching}
          />

          <CommandList className="max-h-[520px]">
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
