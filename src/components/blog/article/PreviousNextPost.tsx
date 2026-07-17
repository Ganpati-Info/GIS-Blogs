"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { Post } from "@/types";

interface PreviousNextPostProps {
  previous: Post | null;
  next: Post | null;
}

export default function PreviousNextPost({
  previous,
  next,
}: PreviousNextPostProps) {
  const renderCard = (post: Post, direction: "previous" | "next") => (
    <Link
      href={`/${post.category.slug}/${post.slug}`}
      className="group rounded-2xl border bg-card p-6 transition-all hover:border-primary hover:shadow-lg"
    >
      <div className="mb-3 flex items-center gap-2 text-sm text-muted-foreground">
        {direction === "previous" ? (
          <>
            <ArrowLeft className="h-4 w-4" />
            Previous Article
          </>
        ) : (
          <>
            Next Article
            <ArrowRight className="h-4 w-4" />
          </>
        )}
      </div>

      <h4 className="line-clamp-2 text-lg font-semibold transition-colors group-hover:text-primary">
        {post.title}
      </h4>

      <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
        {post.excerpt}
      </p>
    </Link>
  );

  return (
    <section className="mt-16">
      <div className="grid gap-6 md:grid-cols-2">
        {previous ? renderCard(previous, "previous") : <div />}

        {next ? renderCard(next, "next") : <div />}
      </div>
    </section>
  );
}
