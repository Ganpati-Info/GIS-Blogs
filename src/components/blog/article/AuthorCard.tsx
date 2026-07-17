"use client";

import Image from "next/image";
import Link from "next/link";
import { Author } from "@/types";

interface AuthorCardProps {
  author: Author;
}

export default function AuthorCard({ author }: AuthorCardProps) {
  return (
    <section className="mt-16 rounded-3xl border bg-card px-8 py-4">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
        <Link href={`/author/${author.slug}`}>
  <Image
    src={author.avatar}
    alt={author.name}
    width={96}
    height={96}
    className="rounded-full object-cover transition-transform hover:scale-105"
  />
</Link>

        <div className="flex-1">
          <h3 className="text-lg text-foreground">
            Written by{" "}
            <Link
              href={`/author/${author.slug}`}
              className="mt-1 inline-block text-2xl font-bold text-foreground transition-colors hover:text-primary"
            >
              {author.name}
            </Link>
          </h3>

          <p className="mt-3 leading-7 text-muted-foreground">{author.bio}</p>
          {author.designation && (
            <p className="text-sm text-muted-foreground">
              {author.designation}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
