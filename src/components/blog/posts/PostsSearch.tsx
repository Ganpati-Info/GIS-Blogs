"use client";

import { Search, X } from "lucide-react";

interface PostsSearchProps {
  value: string;
  onChange: (value: string) => void;
}

export default function PostsSearch({ value, onChange }: PostsSearchProps) {
  return (
    <div className="w-full md:max-w-md">
      <div className="group relative">
        <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground transition-colors group-focus-within:text-primary" />

        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search articles..."
          className="h-12 w-full rounded-lg border bg-background pl-12 pr-12 text-sm outline-none transition-all placeholder:text-muted-foreground focus:border-primary"
        />

        {value && (
          <button
            type="button"
            onClick={() => onChange("")}
            className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full transition hover:bg-muted"
            aria-label="Clear search"
          >
            <X className="h-4 w-4 text-muted-foreground" />
          </button>
        )}
      </div>

      {value && (
        <p className="mt-2 text-sm text-muted-foreground">
          Searching for{" "}
          <span className="font-semibold text-foreground">
            &quot;{value}&quot;
          </span>
        </p>
      )}
    </div>
  );
}
