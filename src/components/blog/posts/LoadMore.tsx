import { ChevronDown } from "lucide-react";

interface LoadMoreProps {
  onClick: () => void;
  loading?: boolean;
}

export default function LoadMore({ onClick, loading = false }: LoadMoreProps) {
  return (
    <div className="mt-12 flex justify-center">
      <button
        type="button"
        onClick={onClick}
        disabled={loading}
        className="inline-flex items-center gap-2 rounded-xl border bg-background px-6 py-3 text-sm font-semibold transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground disabled:pointer-events-none disabled:opacity-50"
      >
        {loading ? (
          <>
            <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
            Loading...
          </>
        ) : (
          <>
            View More
            <ChevronDown className="h-4 w-4" />
          </>
        )}
      </button>
    </div>
  );
}
