"use client";

import { Post } from "@/types";

// import ArticleTOC from "./ArticleTOC";
import ShareButtons from "./ShareButtons";

interface ArticleSidebarProps {
  post: Post;
}

export default function ArticleSidebar({ post }: ArticleSidebarProps) {
  return (
    <div className="space-y-8 lg:sticky lg:top-24">

      {/* <ArticleTOC content={post.content} /> */}

      <ShareButtons post={post} />
    </div>
  );
}
