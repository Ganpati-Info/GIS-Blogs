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
      <div className="grid gap-6 p-5 sm:gap-8 sm:p-8 lg:p-10 xl:grid-cols-2">
        {/* Image */}
        <Link href={`/${post.category.slug}/${post.slug}`} className="group order-1 xl:order-2">
          <div className="overflow-hidden rounded-lg">
            <Image
              src={post.coverImage}
              alt={post.title}
              width={900}
              height={700}
              priority
              className="aspect-[16/10] h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />
          </div>
        </Link>

        {/* Content */}
        <div className="order-2 flex flex-col justify-center xl:order-1">
          <span className="mb-4 inline-flex w-fit rounded-lg bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
            Featured
          </span>

          <Link href={`/${post.category.slug}/${post.slug}`} className="group">
            <h1 className="text-2xl font-bold leading-tight transition-colors group-hover:text-primary md:text-3xl xl:text-4xl">
              {post.title}
            </h1>
          </Link>

          <p className="mt-5 text-sm leading-7 text-muted-foreground sm:text-base lg:text-lg">
            {post.excerpt}
          </p>

          {/* Author */}
          <div className="mt-8 flex items-center gap-4">
            <Link href={`/author/${post.author.slug}`}>
            <Image
              src={post.author.avatar}
              alt={post.author.name}
              width={52}
              height={52}
              className="h-12 w-12 rounded-full object-cover sm:h-14 sm:w-14"
            />
            </Link>

            <div>
              <Link href={`/author/${post.author.slug}`} className="font-semibold text-foreground transition-colors hover:text-primary">
              <p className="font-semibold">{post.author.name}</p>
              </Link>

              <div className="mt-1 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
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
            href={`/${post.category.slug}/${post.slug}`}
            className="mt-8 inline-flex w-fit items-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground transition hover:bg-primary/90"
          >
            Read Article
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
