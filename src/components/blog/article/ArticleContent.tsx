"use client";

import { injectHeadingIds } from "@/lib/blog/toc";
import { Post } from "@/types";

interface ArticleContentProps {
  post: Post;
}

export default function ArticleContent({ post }: ArticleContentProps) {
  return (
    <article
      className="
        prose
        prose-lg
        dark:prose-invert

        mx-auto

        prose-headings:scroll-mt-24
        prose-headings:font-bold
        prose-headings:tracking-tight
        prose-headings:text-foreground

        prose-h2:mt-16
        prose-h2:mb-6
        prose-h2:text-4xl

        prose-h3:mt-12
        prose-h3:mb-4
        prose-h3:text-2xl

        prose-p:my-7
        prose-p:text-lg
        prose-p:leading-9
        prose-p:text-muted-foreground

        prose-ul:my-8
        prose-ol:my-8
        prose-li:my-2
        prose-li:text-muted-foreground

        prose-a:font-medium
        prose-a:text-primary
        prose-a:no-underline
        hover:prose-a:underline

        prose-img:my-12
        prose-img:overflow-hidden
        prose-img:rounded-2xl

        prose-blockquote:my-12
        prose-blockquote:border-l-4
        prose-blockquote:border-primary
        prose-blockquote:pl-6
        prose-blockquote:text-xl
        prose-blockquote:italic
        prose-blockquote:text-foreground

        prose-hr:my-16

        prose-pre:my-10
        prose-pre:overflow-x-auto
        prose-pre:rounded-2xl
        prose-pre:p-6

        prose-code:rounded
        prose-code:bg-muted
        prose-code:px-1.5
        prose-code:py-0.5
        prose-code:font-medium
        prose-code:text-primary
        prose-code:before:content-none
        prose-code:after:content-none
      "
    >
      <div
        dangerouslySetInnerHTML={{
          __html: injectHeadingIds(post.content),
        }}
      />
    </article>
  );
}
