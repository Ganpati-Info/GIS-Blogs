"use client";

import { useMemo } from "react";

import { extractHeadings } from "@/lib/blog/toc";

interface ArticleTOCProps {
  content: string;
}

export default function ArticleTOC({ content }: ArticleTOCProps) {
const headings = useMemo(() => extractHeadings(content), [content]);


  if (!headings.length) return null;

  return (
    <div className="rounded-2xl border bg-card p-6">
      <h3 className="mb-4 text-lg font-semibold">Table of Contents</h3>

      <nav>
        <ul className="space-y-3">
          {headings.map((heading) => (
            <li
              key={heading.id}
              className={heading.level === "H3" ? "ml-4" : ""}
            >
              <a
                href={`#${heading.id}`}
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
