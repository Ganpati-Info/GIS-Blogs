import type { Metadata } from "next";
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

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { categorySlug, postSlug } = await params;

  const post = await getPost(categorySlug, postSlug);

  if (!post) {
    return {
      title: "Post Not Found",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const title = post.seo?.title || post.title;
  const description = post.seo?.description || post.excerpt;
  const keywords = post.seo?.keywords ?? post.tags;
  const canonicalUrl = `/blogs/${categorySlug}/${postSlug}`;

  return {
    title,
    description,
    keywords,

    alternates: {
      canonical: canonicalUrl,
    },

    robots: {
      index: true,
      follow: true,
    },

    openGraph: {
      type: "article",

      url: canonicalUrl,

      title,
      description,

      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,

      authors: post.author?.name ? [post.author.name] : undefined,

      tags: post.tags,

      images: post.coverImage
        ? [
            {
              url: post.coverImage,
              alt: post.title,
            },
          ]
        : undefined,
    },

    twitter: {
      card: "summary_large_image",

      title,
      description,

      images: post.coverImage ? [post.coverImage] : undefined,
    },
  };
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
