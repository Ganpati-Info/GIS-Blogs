"use client";

import { notFound, useParams } from "next/navigation";

import {
  getNextPost,
  getPost,
  getPreviousPost,
  getRelatedPosts,
} from "@/lib/blog/articles";

import Container from "@/components/layout/Container";

import {
  ArticleContent,
  ArticleHero,
  ArticleSidebar,
  AuthorCard,
  BreadCrumb,
  PreviousNextPost,
  ReadingProgress,
  RelatedPosts,
} from "@/components/blog/article";

export default function BlogPostPage() {
  const params = useParams();

  const categorySlug = params.categorySlug as string;
  const postSlug = params.postSlug as string;

  const post = getPost(categorySlug, postSlug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(post);
  // const previousPost = getPreviousPost(post);
  // const nextPost = getNextPost(post);

  return (
    <>
      <ReadingProgress />

      <main className="pb-24">
        {/* Hero */}
        <Container className="max-w-7xl py-10 lg:py-14">
          <BreadCrumb post={post} />

          <ArticleHero post={post} />
        </Container>

        {/* Reading Experience */}
        <Container className="max-w-7xl">
          <div className="">
            {/* Move this later to floating left/right if desired */}
            <div className="mb-10">
              <ArticleSidebar post={post} />
            </div>

            <ArticleContent post={post} />

            <AuthorCard author={post.author} />

            {/* <PreviousNextPost previous={previousPost} next={nextPost} /> */}
          </div>
        </Container>

        {/* Related Articles */}
        <Container className="max-w-7xl">
          <RelatedPosts posts={relatedPosts} />

          {/* <Newsletter /> */}
        </Container>
      </main>
    </>
  );
}
