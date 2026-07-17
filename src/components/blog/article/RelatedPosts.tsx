"use client";

import { Post } from "@/types";
import BlogCard from "../../home/BlogCard"

interface RelatedPostsProps {
  posts: Post[];
}

export default function RelatedPosts({ posts }: RelatedPostsProps) {
  if (!posts.length) return null;

  return (
    <section className="mt-24">
      <div className="mb-10">
        <span className="text-sm font-semibold uppercase tracking-wider text-primary">
          Keep Reading
        </span>

        <h2 className="mt-2 text-3xl font-bold">Related Articles</h2>

        <p className="mt-3 text-muted-foreground">
          Explore more articles from this category.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}
