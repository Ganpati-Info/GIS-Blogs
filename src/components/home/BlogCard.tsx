import Image from "next/image";
import Link from "next/link";
import { CalendarDays, Clock3 } from "lucide-react";

import { Post } from "@/types";

interface BlogCardProps {
  post: Post;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="group overflow-hidden rounded-lg border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <Link href={`/${post.category.slug}/${post.slug}`}>
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            sizes="(max-width:768px) 100vw, 33vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        </div>
      </Link>

      <div className="p-6">
        <Link href={`/${post.category.slug}`}>
          <span
            className="inline-flex rounded-full px-3 py-1 text-xs font-semibold text-white"
            style={{
              backgroundColor: post.category.color,
            }}
          >
            {post.category.name}
          </span>
        </Link>

        <Link href={`/${post.category.slug}/${post.slug}`}>
          <h3 className="mt-4 line-clamp-2 text-2xl font-bold transition-colors group-hover:text-primary">
            {post.title}
          </h3>
        </Link>

        <p className="mt-4 line-clamp-3 text-muted-foreground">
          {post.excerpt}
        </p>

        <div className="mt-6 flex items-center gap-3">
          <Link href={`/author/${post.author.slug}`}>
            <Image
              src={post.author.avatar}
              alt={post.author.name}
              width={42}
              height={42}
              className="rounded-full object-center"
            />
          </Link>

          <div className="min-w-0">
            <Link href={`/author/${post.author.slug}`} className="flex items-center gap-2">
            <p className="truncate text-sm font-semibold">{post.author.name}</p>
            </Link>

            <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
              <CalendarDays className="h-3.5 w-3.5" />

              <span>
                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>

              <span>•</span>

              <Clock3 className="h-3.5 w-3.5" />

              <span>{post.readingTime} min read</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
