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
        className="pr-20 pl-4"
      />

      <div className="absolute inset-y-0 right-4 flex items-center gap-2">
        {loading && <Loader2 className="h-4 w-4 animate-spin text-primary" />}

        {value && (
          <button
            type="button"
            onClick={() => onValueChange("")}
            className="rounded-md p-1 text-muted-foreground transition hover:bg-muted hover:text-foreground"
            aria-label="Clear search"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>
    </div>
  );
}
