import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock3 } from "lucide-react";

import { Post } from "@/types";

interface FeaturedPostProps {
  post: Post;
}

export default function FeaturedPost({ post }: FeaturedPostProps) {
  return (
    <section className="rounded-lg border bg-card shadow-sm">
      <div className="grid gap-6 p-6 sm:gap-8 sm:p-8 lg:grid-cols-2 lg:p-10">
        {/* Left */}

        <div className="flex flex-col justify-center">
          <span className="mb-5 inline-flex w-fit rounded-xl bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
            Featured
          </span>

          <Link href={`/blog/${post.slug}`} className="group">
            <h1 className="text-2xl font-bold leading-tight transition-colors duration-200 hover-text sm:text-3xl lg:text-5xl">
              {post.title}
            </h1>
          </Link>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            {post.excerpt}
          </p>

          {/* Author */}

          <div className="mt-8 flex items-center gap-4">
            <Image
              src={post.author.avatar}
              alt={post.author.name}
              width={52}
              height={52}
              className="rounded-full object-cover"
            />

            <div>
              <p className="font-semibold">{post.author.name}</p>

              <div className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
                <span>
                  {new Date(post.publishedAt).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>

                <span>•</span>

                <Clock3 className="h-4 w-4" />

                <span>{post.readingTime} min read</span>
              </div>
            </div>
          </div>

          <Link
            href={`/blog/${post.slug}`}
            className="mt-8 inline-flex w-fit items-center gap-2 rounded-md bg-primary px-6 py-3 font-medium text-white transition hover:bg-primary/90"
          >
            Read Article
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Right */}

        <Link href={`/blog/${post.slug}`} className="group">
          <div className="overflow-hidden rounded-lg">
            <Image
              src={post.coverImage}
              alt={post.title}
              width={900}
              height={700}
              priority
              className="aspect-16/10 h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />
          </div>
        </Link>
      </div>
    </section>
  );
}
