import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Post } from "@/types";

interface PopularPostsProps {
  posts: Post[];
}

export default function PopularPosts({ posts }: PopularPostsProps) {
  return (
    <section className="rounded-lg border bg-card p-5 shadow-sm sm:p-6">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-lg font-bold sm:text-xl">Popular Posts</h2>

        <Link
          href="/posts"
          className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
        >
          View all
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="space-y-5">
        {posts.map((post) => (
          <Link
            key={post.id}
            href={`/${post.category.slug}/${post.slug}`}
            className="group flex gap-4"
          >
            <div className="h-20 w-28 flex-shrink-0 overflow-hidden rounded-lg">
              <Image
                src={post.coverImage}
                alt={post.title}
                width={120}
                height={80}
                className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
              />
            </div>

            <div className="min-w-0 flex-1">
              <h3 className="line-clamp-2 text-sm font-semibold transition-colors group-hover:text-primary sm:text-base">
                {post.title}
              </h3>

              <div className="mt-2 text-xs text-muted-foreground">
                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
                <span className="mx-2">•</span>
                {post.readingTime} min read
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
