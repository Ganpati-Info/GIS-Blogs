import Link from "next/link";
import { FileSearch, ArrowLeft } from "lucide-react";

interface EmptyStateProps {
  query?: string;
  onClear?: () => void;
}

export default function EmptyState({
  query,
  onClear,
}: EmptyStateProps) {
  return (
    <section className="flex min-h-[420px] flex-col items-center justify-center rounded-2xl border border-dashed bg-muted/20 px-6 text-center">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
        <FileSearch className="h-10 w-10 text-primary" />
      </div>

      <h2 className="mt-6 text-2xl font-bold">
        No articles found
      </h2>

      <p className="mt-3 max-w-md text-muted-foreground">
        {query
          ? `We couldn't find any articles matching &quot;${query}&quot;. Try a different keyword or browse all articles.`
          : "There are no articles available yet."}
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        {onClear && (
          <button
            type="button"
            onClick={onClear}
            className="rounded-xl bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90"
          >
            Clear Search
          </button>
        )}

        <Link
          href="/blog"
          className="inline-flex items-center gap-2 rounded-xl border px-5 py-3 text-sm font-medium transition hover:bg-muted"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Blog
        </Link>
      </div>
    </section>
  );
}