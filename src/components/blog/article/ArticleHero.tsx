"use client";

import Image from "next/image";
import Link from "next/link";
import { CalendarDays, Clock } from "lucide-react";

import { formatDate } from "@/lib/date";
import { Post } from "@/types";

interface ArticleHeroProps {
  post: Post;
}

export default function ArticleHero({ post }: ArticleHeroProps) {
  return (
    <header className="pt-4">
      {/* Category */}
      <Link
        href={`/${post.category.slug}`}
        className="inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition-opacity hover:opacity-80"
        style={{
          backgroundColor: `${post.category.color}15`,
          color: post.category.color,
        }}
      >
        {post.category.name}
      </Link>

      {/* Title */}
      <h1 className="mt-8 max-w-4xl text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl xl:text-6xl text-center justify-center mx-auto">
        {post.title}
      </h1>

      {/* Excerpt */}
      <p className="mt-8 max-w-3xl text-xl leading-9 text-muted-foreground justify-center mx-auto text-center">
        {post.excerpt}
      </p>

      {/* Meta */}
      <div className="mt-10 flex flex-col gap-6 border-y py-2 sm:flex-row sm:items-center sm:justify-between">
        {/* Author */}
        <div className="flex items-center gap-4">
          <Link href={`/author/${post.author.slug}`}>
            <Image
              src={post.author.avatar}
              alt={post.author.name}
              width={56}
              height={56}
            className="rounded-full object-center"
          />
          </Link>

          <div className="flex items-center gap-2">
            <Link
              href={`/author/${post.author.slug}`}
              className="font-semibold text-foreground transition-colors hover:text-primary"
            >
              {post.author.name}
            </Link>

            {post.author.designation && (
              <>
                <span className="text-muted-foreground">•</span>

                <span className="text-sm text-muted-foreground">
                  {post.author.designation}
                </span>
              </>
            )}
          </div>
        </div>

        {/* Article Info */}
        <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <CalendarDays className="h-4 w-4" />
            <span>{formatDate(post.publishedAt)}</span>
          </div>

          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>{post.readingTime} min read</span>
          </div>
        </div>
      </div>

      {/* Cover Image */}
      <div className="relative mt-12 aspect-16/8 overflow-hidden rounded-2xl">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          priority
          className="object-cover transition-transform duration-700 hover:scale-105"
        />
      </div>
    </header>
  );
}
