"use client";

import { notFound, useParams } from "next/navigation";

import Container from "@/components/layout/Container";

import { AuthorHero, AuthorArticles } from "@/components/blog/author";

import { getAuthorBySlug, getPostsByAuthor } from "@/lib/blog/author";

export default function AuthorPage() {
  const params = useParams();

  const slug = params.authorSlug as string;

  const author = getAuthorBySlug(slug);

  if (!author) {
    notFound();
  }

  const posts = getPostsByAuthor(author.slug);

  return (
    <main className="py-14">
      <Container className="max-w-6xl space-y-20">
        <AuthorHero author={author} articlesCount={posts.length} />

        <AuthorArticles author={author} posts={posts} />
      </Container>
    </main>
  );
}
