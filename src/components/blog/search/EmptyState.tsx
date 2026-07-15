import { Search, Sparkles } from "lucide-react";

interface EmptyStateProps {
  query: string;
  onClear?: () => void;
}

export default function EmptyState({ query, onClear }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-14 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
        <Search className="h-7 w-7 text-primary" />
      </div>

      <h3 className="mt-6 text-lg font-semibold">No articles found</h3>

      <p className="mt-2 max-w-sm text-sm text-muted-foreground">
        We couldn&apos;t find any articles matching{" "}
        <span className="font-medium text-foreground">&quot;{query}&quot;</span>.
      </p>

      <div className="mt-6 flex items-center gap-3">
        {onClear && (
          <button
            onClick={onClear}
            className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90"
          >
            Clear Search
          </button>
        )}

        <div className="flex items-center gap-1 text-sm text-muted-foreground">
          <Sparkles className="h-4 w-4" />
          <span>Try another keyword</span>
        </div>
      </div>
    </div>
  );
}
