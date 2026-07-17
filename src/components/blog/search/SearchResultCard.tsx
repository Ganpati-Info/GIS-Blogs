"use client";

import Image from "next/image";
import Link from "next/link";
import { Clock } from "lucide-react";

import { Post } from "@/types";

interface SearchResultCardProps {
  post: Post;
  query: string;
}

function highlight(text: string, query: string) {
  if (!query.trim()) return text;

  const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const regex = new RegExp(`(${escaped})`, "gi");

  return text.split(regex).map((part, index) =>
    regex.test(part) ? (
      <mark key={index} className="rounded bg-secondary/20 px-0.5 text-inherit">
        {part}
      </mark>
    ) : (
      part
    ),
  );
}

export default function SearchResultCard({
  post,
  query,
}: SearchResultCardProps) {
  return (
    <Link
      href={`/${post.category.slug}/${post.slug}`}
      className="group flex gap-4 rounded-lg p-3 transition hover:bg-muted"
    >
      <Image
        src={post.coverImage}
        alt={post.title}
        width={96}
        height={72}
        className="h-18 w-24 rounded-lg object-cover"
      />

      <div className="min-w-0 flex-1">
        <p
          className="mb-1 text-xs font-semibold"
          style={{
            color: post.category.color,
          }}
        >
          {post.category.name}
        </p>

        <h3 className="line-clamp-2 text-sm font-semibold transition-colors group-hover:text-primary">
          {highlight(post.title, query)}
        </h3>

        <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">
          {highlight(post.excerpt, query)}
        </p>

        <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
          <Clock className="h-3.5 w-3.5" />
          <span>{post.readingTime} min read</span>
        </div>
      </div>
    </Link>
  );
}
