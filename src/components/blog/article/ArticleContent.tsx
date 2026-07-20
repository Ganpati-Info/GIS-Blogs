"use client";

import { PortableText, PortableTextComponents } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import { Post } from "@/types";

interface ArticleContentProps {
  post: Post;
}

export default function ArticleContent({ post }: ArticleContentProps) {
  const imageCounter = useRef(0);

  const components: PortableTextComponents = {
    block: {
      h2: ({ children }) => (
        <h2 className="mt-16 mb-6 scroll-mt-24 text-4xl font-bold tracking-tight text-foreground">
          {children}
        </h2>
      ),

      h3: ({ children }) => (
        <h3 className="mt-12 mb-4 scroll-mt-24 text-2xl font-bold tracking-tight text-foreground">
          {children}
        </h3>
      ),

      h4: ({ children }) => (
        <h4 className="mt-10 mb-3 text-xl font-semibold">{children}</h4>
      ),

      normal: ({ children }) => (
        <p className="my-7 text-lg leading-9 text-muted-foreground">
          {children}
        </p>
      ),

      blockquote: ({ children }) => (
        <blockquote className="my-10 border-l-4 border-primary pl-6 text-xl italic text-foreground">
          {children}
        </blockquote>
      ),
    },

    list: {
      bullet: ({ children }) => (
        <ul className="my-8 list-disc space-y-2 pl-6">{children}</ul>
      ),

      number: ({ children }) => (
        <ol className="my-8 list-decimal space-y-2 pl-6">{children}</ol>
      ),
    },

    listItem: {
      bullet: ({ children }) => (
        <li className="text-muted-foreground">{children}</li>
      ),

      number: ({ children }) => (
        <li className="text-muted-foreground">{children}</li>
      ),
    },

    marks: {
      link: ({ children, value }) => {
        const href = value?.href ?? "#";
        const external = href.startsWith("http");

        if (external) {
          return (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary underline-offset-4 hover:underline"
            >
              {children}
            </a>
          );
        }

        return (
          <Link
            href={href}
            className="font-medium text-primary underline-offset-4 hover:underline"
          >
            {children}
          </Link>
        );
      },

      code: ({ children }) => (
        <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[0.9em] text-primary">
          {children}
        </code>
      ),
    },

    types: {
      image: ({ value }) => {
        const url = value?.asset?.url;

        if (!url) return null;

        imageCounter.current += 1;

        return (
          <figure className="my-14">
            <Image
              src={url}
              alt={value.alt ?? ""}
              width={1600}
              height={900}
              sizes="100vw"
              className="h-auto w-full rounded-xl border object-cover"
            />

            {value.caption && (
              <figcaption className="mt-3 text-center text-sm italic text-muted-foreground">
                <span className="font-medium">
                  Figure {imageCounter.current}:
                </span>{" "}
                {value.caption}
              </figcaption>
            )}
          </figure>
        );
      },

      code: ({ value }) => {
        return (
          <div className="not-prose my-10 overflow-hidden rounded-xl border border-zinc-800">
            <div className="flex items-center justify-between border-b border-zinc-800 bg-zinc-900 px-4 py-2">
              <div className="flex gap-2">
                <span className="h-3 w-3 rounded-full bg-red-500" />
                <span className="h-3 w-3 rounded-full bg-yellow-500" />
                <span className="h-3 w-3 rounded-full bg-green-500" />
              </div>

              <span className="text-xs capitalize tracking-wide text-zinc-400">
                {value.language ?? "typescript"}
              </span>
            </div>

            <SyntaxHighlighter
              language={value.language ?? "typescript"}
              style={oneDark}
              customStyle={{
                margin: 0,
                borderRadius: 0,
                background: "#09090b",
                padding: "1.5rem",
                fontSize: "0.9rem",
              }}
            >
              {value.code}
            </SyntaxHighlighter>
          </div>
        );
      },
    },

    hardBreak: () => <br />,
  };

  return (
    <article className="prose prose-lg dark:prose-invert mx-auto max-w-5xl">
      <PortableText value={post.content} components={components} />
    </article>
  );
}
