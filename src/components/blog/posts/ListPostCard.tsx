import Image from "next/image";
import Link from "next/link";
import { CalendarDays, Clock, ArrowRight } from "lucide-react";

import { Post } from "@/types";

interface ListPostCardProps {
  post: Post;
}

export default function ListPostCard({ post }: ListPostCardProps) {
  return (
    <article className="group overflow-hidden rounded-lg border bg-card transition-all duration-300 hover:border-primary/30 hover:shadow-lg">
      <div className="flex flex-col md:flex-row">
        <Link
          href={`/${post.category.slug}/${post.slug}`}
          className="relative block aspect-[16/10] w-full md:w-72 lg:w-80 md:flex-shrink-0"
        >
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 288px, 320px"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </Link>

        <div className="flex flex-1 flex-col p-4 sm:p-5 lg:p-6">
          <div className="mb-4 flex flex-wrap items-center gap-2 sm:gap-3">
            <span
              className="rounded-full px-2.5 py-1 text-[11px] font-semibold text-white sm:px-3 sm:text-xs"
              style={{
                backgroundColor: post.category.color,
              }}
            >
              {post.category.name}
            </span>

            <span className="flex items-center gap-1 text-xs text-muted-foreground sm:text-sm">
              <CalendarDays className="h-4 w-4 shrink-0" />

              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </span>

            <span className="flex items-center gap-1 text-xs text-muted-foreground sm:text-sm">
              <Clock className="h-4 w-4 shrink-0" />
              {post.readingTime} min read
            </span>
          </div>

          <Link href={`/${post.category.slug}/${post.slug}`}>
            <h2 className="text-xl font-bold transition-colors group-hover:text-primary sm:text-2xl">
              {post.title}
            </h2>
          </Link>

          <p className="mt-4 line-clamp-3 text-sm leading-6 text-muted-foreground sm:text-base">
            {post.excerpt}
          </p>

          <div className="mt-6 flex flex-col gap-4 border-t pt-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex min-w-0 items-center gap-3">
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                width={44}
                height={44}
                sizes="44px"
                className="h-10 w-10 rounded-full object-cover sm:h-11 sm:w-11"
              />

              <div className="min-w-0">
                <p className="truncate font-semibold">{post.author.name}</p>

                <p className="text-sm text-muted-foreground">Author</p>
              </div>
            </div>

            <Link
              href={`/${post.category.slug}/${post.slug}`}
              className="inline-flex items-center gap-2 font-medium text-primary transition-colors hover:text-primary/80"
            >
              Read Article
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
