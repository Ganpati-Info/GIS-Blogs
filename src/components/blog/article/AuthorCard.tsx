"use client";

import Image from "next/image";

import { Author } from "@/types";

interface AuthorCardProps {
  author: Author;
}

export default function AuthorCard({ author }: AuthorCardProps) {
  return (
    <section className="mt-16 rounded-3xl border bg-card p-8">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
        <Image
          src={author.avatar}
          alt={author.name}
          width={96}
          height={96}
          className="rounded-full object-cover"
        />

        <div className="flex-1">
          <p className="text-sm font-medium uppercase tracking-wider text-primary">
            Written by
          </p>

          <h3 className="mt-2 text-2xl font-bold">{author.name}</h3>

          <p className="mt-3 leading-7 text-muted-foreground">{author.bio}</p>

          {author.designation && (
            <p className="mt-4 text-sm text-muted-foreground">{author.designation}</p>
          )}
        </div>
      </div>
    </section>
  );
}
