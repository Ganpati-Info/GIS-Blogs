"use client";

import BlogCard from "../../home/BlogCard";

import { Author, Post } from "@/types";

interface Props {
  author: Author;
  posts: Post[];
}

export default function AuthorArticles({ author, posts }: Props) {
  return (
    <section>
      <h2 className="mb-10 text-4xl font-bold">Articles by {author.name}</h2>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}
