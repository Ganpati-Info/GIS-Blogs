"use client";

import { Loader2, X } from "lucide-react";

import { CommandInput } from "@/components/ui/command";

interface SearchInputProps {
  value?: string;
  onValueChange: (value: string) => void;
  loading?: boolean;
  placeholder?: string;
}

export default function SearchInput({
  value = "",
  onValueChange,
  loading = false,
  placeholder = "Search articles, technologies, categories...",
}: SearchInputProps) {
  return (
    <div className="relative border-b">
      <CommandInput
        value={value}
        onValueChange={onValueChange}
        placeholder={placeholder}
        className="h-12 px-4 pr-20 text-sm sm:h-14 sm:text-base"
      />

      <div className="absolute inset-y-0 right-3 flex items-center gap-2 sm:right-4">
        {loading && <Loader2 className="h-4 w-4 animate-spin text-primary" />}

        {value.length > 0 && (
          <button
            type="button"
            onClick={() => onValueChange("")}
            aria-label="Clear search"
            className="flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>
    </div>
  );
}
