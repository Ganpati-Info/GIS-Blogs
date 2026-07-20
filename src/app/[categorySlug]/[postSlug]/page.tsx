import { notFound } from "next/navigation";

import Container from "@/components/layout/Container";

import {
  ArticleContent,
  ArticleHero,
  ArticleSidebar,
  AuthorCard,
  BreadCrumb,
  ReadingProgress,
  RelatedPosts,
} from "@/components/blog/article";

import { getPost, getRelatedPosts } from "@/services/post.service";

interface BlogPostPageProps {
  params: Promise<{
    categorySlug: string;
    postSlug: string;
  }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { categorySlug, postSlug } = await params;

  const post = await getPost(categorySlug, postSlug);

  if (!post) {
    notFound();
  }

  const relatedPosts = await getRelatedPosts(post);

  return (
    <>
      <ReadingProgress />

      <main className="pb-24">
        <Container className="max-w-7xl py-10 lg:py-14">
          <BreadCrumb post={post} />

          <ArticleHero post={post} />
        </Container>

        <Container className="max-w-7xl">
          <div>
            <div className="mb-10">
              <ArticleSidebar post={post} />
            </div>

            <ArticleContent post={post} />

            <AuthorCard author={post.author} />
          </div>
        </Container>

        <Container className="max-w-7xl">
          <RelatedPosts posts={relatedPosts} />
        </Container>
      </main>
    </>
  );
}
