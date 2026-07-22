"use client";

import Link from "next/link";
import { ArrowLeft, FolderOpen } from "lucide-react";

import { Category } from "@/types";

interface CategoryHeroProps {
  category: Category;
  total: number;
}

export default function CategoryHero({ category, total }: CategoryHeroProps) {
  return (
    <section className="relative overflow-hidden">
      <div className="relative z-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <div className="mt-6 flex flex-wrap items-center gap-4">
          <div>
            <span
              className="inline-flex rounded-full px-4 py-1.5 text-sm font-semibold"
              style={{
                backgroundColor: `${category.color}15`,
                color: category.color,
              }}
            >
              Category
            </span>

            <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              {category.name}
            </h1>
          </div>
        </div>

        <p className="mt-6 max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg">
          {category.description}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <div className="rounded-full border bg-background px-4 py-2 text-sm font-medium">
            {total} {total === 1 ? "Article" : "Articles"}
          </div>

          <div
            className="rounded-full px-4 py-2 text-sm font-medium"
            style={{
              backgroundColor: `${category.color}15`,
              color: category.color,
            }}
          >
            {category.name}
          </div>
        </div>
      </div>
    </section>
  );
}
