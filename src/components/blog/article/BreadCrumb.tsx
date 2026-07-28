"use client";

import Link from "next/link";
import { Home } from "lucide-react";

import { Post } from "@/types";

interface BreadcrumbProps {
  post: Post;
}

export default function Breadcrumb({ post }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8 overflow-x-auto">
      <ol className="flex min-w-max items-center gap-2 text-sm">
        <li>
          <Link
            href="/"
            className="flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-primary"
          >
            <Home className="h-4 w-4" />
            Home
          </Link>
        </li>
        <li className="text-muted-foreground">{'>'}</li>
        <li
          className="hidden max-w-xs truncate font-medium text-foreground sm:block sm:max-w-md"
          aria-current="page"
        >
          {post.title}
        </li>
      </ol>
    </nav>
  );
}
