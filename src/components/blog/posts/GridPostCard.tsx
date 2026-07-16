import Image from "next/image";
import Link from "next/link";
import { CalendarDays, Clock } from "lucide-react";

import { Post } from "@/types";

interface GridPostCardProps {
  post: Post;
}

export default function GridPostCard({ post }: GridPostCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <Link href={`/blog/${post.category.slug}/${post.slug}`}>
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            sizes="(max-width: 640px) 100vw,
                   (max-width: 768px) 50vw,
                   (max-width: 1280px) 33vw,
                   25vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />

          <div className="absolute left-3 top-3 sm:left-4 sm:top-4">
            <span
              className="rounded-full px-2.5 py-1 text-[11px] font-semibold text-white sm:px-3 sm:text-xs"
              style={{
                backgroundColor: post.category.color,
              }}
            >
              {post.category.name}
            </span>
          </div>
        </div>
      </Link>

      <div className="flex min-h-[230px] flex-col p-4 sm:p-5">
        <div className="mb-3 flex flex-wrap items-center gap-2 text-xs text-muted-foreground sm:gap-4">
          <span className="flex items-center gap-1">
            <CalendarDays className="h-3.5 w-3.5 shrink-0" />

            {new Date(post.publishedAt).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </span>

          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5 shrink-0" />
            {post.readingTime} min
          </span>
        </div>

        <Link href={`/blog/${post.category.slug}/${post.slug}`}>
          <h2 className="line-clamp-2 text-lg font-bold transition-colors group-hover:text-primary sm:text-xl">
            {post.title}
          </h2>
        </Link>

        <p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground line-clamp-3">
          {post.excerpt}
        </p>

        <div className="mt-5 flex items-center gap-3 border-t pt-4">
          <Image
            src={post.author.avatar}
            alt={post.author.name}
            width={40}
            height={40}
            sizes="40px"
            className="h-9 w-9 rounded-full object-cover sm:h-10 sm:w-10"
          />

          <div className="min-w-0">
            <p className="truncate text-sm font-semibold">{post.author.name}</p>

            <p className="text-xs text-muted-foreground">Author</p>
          </div>
        </div>
      </div>
    </article>
  );
}
