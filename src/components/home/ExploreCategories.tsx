import Link from "next/link";
import { Category } from "@/types";

interface ExploreCategoriesProps {
  categories: Category[];
  articleCounts: Record<string, number>;
}

export default function ExploreCategories({
  categories,
  articleCounts,
}: ExploreCategoriesProps) {
  return (
    <section className="rounded-lg border bg-card p-5 shadow-sm sm:p-6">
      <div className="mb-6">
        <h2 className="text-lg font-bold sm:text-xl">Explore Categories</h2>

        <p className="mt-1 text-sm text-muted-foreground">
          Browse articles by topic.
        </p>
      </div>

      <div className="space-y-2">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/${category.slug}`}
            className="group flex items-center justify-between rounded-lg px-4 py-3 transition-colors hover:bg-muted"
          >
            <div className="flex min-w-0 items-center gap-3">
              <span
                className="h-3 w-3 flex-shrink-0 rounded-full"
                style={{
                  backgroundColor: category.color,
                }}
              />

              <span className="truncate text-sm font-medium transition-colors group-hover:text-primary sm:text-base">
                {category.name}
              </span>
            </div>

            <span className="ml-3 rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
              {articleCounts[category.slug] ?? 0}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
