"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaLinkedin,
  FaGithub,
  FaXTwitter,
  FaGlobe,
  FaMedium,
  FaDev,
} from "react-icons/fa6";

import { Author } from "@/types";

interface Props {
  author: Author;
  articlesCount: number;
}

export default function AuthorHero({ author, articlesCount }: Props) {
  return (
    <section className="mx-auto max-w-3xl text-center">
      <Image
        src={author.avatar}
        alt={author.name}
        width={140}
        height={140}
        className="mx-auto rounded-full"
      />

      <h1 className="mt-8 text-5xl font-bold tracking-tight">{author.name}</h1>

      {author.designation && (
        <p className="mt-3 text-xl text-primary">{author.designation}</p>
      )}

      <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-muted-foreground">
        {author.bio}
      </p>

      {Object.values(author.social).some(Boolean) && (
        <div className="mt-8 flex justify-center gap-4">
          {author.social.linkedin && (
            <Link
              href={author.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border p-3 transition-colors hover:bg-muted"
            >
              <FaLinkedin className="h-5 w-5" />
            </Link>
          )}

          {author.social.twitter && (
            <Link
              href={author.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border p-3 transition-colors hover:bg-muted"
            >
              <FaXTwitter className="h-5 w-5" />
            </Link>
          )}

          {author.social.github && (
            <Link
              href={author.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border p-3 transition-colors hover:bg-muted"
            >
              <FaGithub className="h-5 w-5" />
            </Link>
          )}

          {author.social.website && (
            <Link
              href={author.social.website}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border p-3 transition-colors hover:bg-muted"
            >
              <FaGlobe className="h-5 w-5" />
            </Link>
          )}

          {author.social.medium && (
            <Link
              href={author.social.medium}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border p-3 transition-colors hover:bg-muted"
            >
              <FaMedium className="h-5 w-5" />
            </Link>
          )}

          {author.social.devto && (
            <Link
              href={author.social.devto}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border p-3 transition-colors hover:bg-muted"
            >
              <FaDev className="h-5 w-5" />
            </Link>
          )}
        </div>
      )}

      <div className="mt-10 flex justify-center gap-10 text-sm text-muted-foreground">
        <div>
          <p className="text-3xl font-bold text-foreground">{articlesCount}</p>
          <p>Articles</p>
        </div>
      </div>
    </section>
  );
}
