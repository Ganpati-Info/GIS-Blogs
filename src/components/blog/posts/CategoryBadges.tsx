"use client";

import Link from "next/link";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { Category } from "@/types";

interface CategoryBadgesProps {
  categories: Category[];
  maxVisible?: number;
  size?: "sm" | "md";
  showAll?: boolean;
  variant?: "solid" | "soft";
}

export default function CategoryBadges({
  categories,
  maxVisible = 1,
  size = "sm",
  showAll = false,
  variant = "solid",
}: CategoryBadgesProps) {
  if (!categories.length) return null;

  const visibleCategories = showAll
    ? categories
    : categories.slice(0, maxVisible);

  const hiddenCategories = showAll
    ? []
    : categories.slice(maxVisible);

  const badgeSize =
    size === "md"
      ? "px-4 py-1.5 text-sm"
      : "px-3 py-1 text-xs";

  return (
    <div className="relative z-10 flex flex-wrap items-center gap-2">
      {visibleCategories.map((category) => (
        <Link key={category.id} href={`/${category.slug}`}>
          <span
            className={`inline-flex rounded-full font-semibold transition-opacity hover:opacity-80 ${badgeSize}`}
            style={
              variant === "soft"
                ? {
                    backgroundColor: `${category.color}15`,
                    color: category.color,
                  }
                : {
                    backgroundColor: category.color,
                    color: "#fff",
                  }
            }
          >
            {category.name}
          </span>
        </Link>
      ))}

      {hiddenCategories.length > 0 && (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <button
                type="button"
                className={`inline-flex items-center rounded-full border bg-muted font-semibold text-muted-foreground transition-colors hover:bg-muted/80 ${badgeSize}`}
              >
                +{hiddenCategories.length}
              </button>
            </TooltipTrigger>

            <TooltipContent side="top" className="p-2">
              <div className="flex min-w-40 flex-col gap-2">
                {hiddenCategories.map((category) => (
                  <Link
                    key={category.id}
                    href={`/${category.slug}`}
                    className="rounded-md transition-colors hover:bg-accent"
                  >
                    <span
                      className={`inline-flex rounded-full font-semibold ${badgeSize}`}
                      style={
                        variant === "soft"
                          ? {
                              backgroundColor: `${category.color}15`,
                              color: category.color,
                            }
                          : {
                              backgroundColor: category.color,
                              color: "#fff",
                            }
                      }
                    >
                      {category.name}
                    </span>
                  </Link>
                ))}
              </div>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )}
    </div>
  );
}