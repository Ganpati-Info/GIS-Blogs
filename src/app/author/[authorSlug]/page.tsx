import { notFound } from "next/navigation";

import Container from "@/components/layout/Container";
import { AuthorHero, AuthorArticles } from "@/components/blog/author";

import { getAuthor, getPostsByAuthor } from "@/services/author.service";

interface AuthorPageProps {
  params: Promise<{
    authorSlug: string;
  }>;
}

export default async function AuthorPage({ params }: AuthorPageProps) {
  const { authorSlug } = await params;

  const [author, posts] = await Promise.all([
    getAuthor(authorSlug),
    getPostsByAuthor(authorSlug),
  ]);

  if (!author) {
    notFound();
  }

  return (
    <main className="py-14">
      <Container className="max-w-6xl space-y-20">
        <AuthorHero author={author} articlesCount={posts.length} />

        <AuthorArticles author={author} posts={posts} />
      </Container>
    </main>
  );
}
