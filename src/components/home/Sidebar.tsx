import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

import { Category, Post } from "@/types";

interface SidebarProps {
  popularPosts: Post[];
  categories: Category[];
  articleCounts: Record<string, number>;
}

export default function Sidebar({
  popularPosts,
  categories,
  articleCounts,
}: SidebarProps) {
  return (
    <aside className="space-y-6 lg:sticky lg:top-24">
      {/* Newsletter */}

      <div className="rounded-lg border bg-card p-5 shadow-sm sm:p-6">
        <h3 className="text-xl font-bold sm:text-2xl">Stay Updated</h3>

        <p className="mt-2 text-sm text-muted-foreground sm:mt-3">
          Get the latest insights on technology, software development, AI,
          cloud, and digital transformation.
        </p>

        <div className="mt-4 space-y-3 sm:mt-6">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full rounded-xl border px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
          />

          <button className="w-full rounded-xl bg-primary py-3 text-sm font-medium text-white transition hover:bg-primary/90">
            Subscribe
          </button>
        </div>

        <div className="mt-4 flex items-center justify-center gap-2 text-xs text-muted-foreground sm:text-sm">
          <Mail className="h-4 w-4 flex-shrink-0" />
          <span>No spam. Unsubscribe anytime.</span>
        </div>
      </div>

      {/* Popular Posts */}

      <div className="rounded-lg border bg-card p-5 shadow-sm sm:p-6">
        <h3 className="mb-4 text-lg font-bold sm:mb-6 sm:text-xl">
          Popular Posts
        </h3>

        <div className="space-y-5">
          {popularPosts.map((post) => (
            <Link
              key={post.id}
              href={`/${post.category.slug}/${post.slug}`}
              className="group flex flex-col gap-3 sm:flex-row sm:gap-4"
            >
              <Image
                src={post.coverImage}
                alt={post.title}
                width={100}
                height={70}
                className="h-32 w-full rounded-lg object-cover sm:h-20 sm:w-28 sm:flex-shrink-0"
              />

              <div className="flex-1 min-w-0">
                <h4 className="line-clamp-2 text-sm font-semibold transition-colors group-hover:text-primary sm:text-base">
                  {post.title}
                </h4>

                <div className="mt-2 text-xs text-muted-foreground sm:text-sm">
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

        <Link
          href="/posts"
          className="mt-4 inline-flex items-center gap-2 text-xs font-medium text-primary hover:underline sm:mt-6 sm:text-sm"
        >
          View all posts
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      {/* Categories */}

      <div className="rounded-lg border bg-card p-5 shadow-sm sm:p-6">
        <h3 className="mb-4 text-lg font-bold sm:mb-5 sm:text-xl">
          Explore Categories
        </h3>

        <div className="space-y-2">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/${category.slug}`}
              className="flex items-center justify-between rounded-xl px-3 py-3 transition hover:bg-muted"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div
                  className="h-3 w-3 flex-shrink-0 rounded-full"
                  style={{
                    backgroundColor: category.color,
                  }}
                />

                <span className="truncate text-sm font-medium sm:text-base">
                  {category.name}
                </span>
              </div>

              <span className="ml-2 flex-shrink-0 rounded-full bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground">
                {articleCounts[category.slug] ?? 0}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
}
