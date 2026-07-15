"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface SearchFooterProps {
  query: string;
  totalResults: number;
  onClose: () => void;
}

export default function SearchFooter({
  query,
  totalResults,
  onClose,
}: SearchFooterProps) {
  return (
    <div className="sticky bottom-0 border-t bg-background p-2">
      <Link
        href={`/posts?q=${encodeURIComponent(query)}`}
        onClick={onClose}
        className="flex items-center justify-between rounded-lg px-3 py-3 transition hover:bg-muted"
      >
        <div>
          <p className="font-medium">
            View all {totalResults} result
            {totalResults !== 1 && "s"}
          </p>

          <p className="text-sm text-muted-foreground">
            Browse every matching article
          </p>
        </div>

        <ArrowRight className="h-5 w-5 text-primary" />
      </Link>
    </div>
  );
}
