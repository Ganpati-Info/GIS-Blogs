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
import CategoryHero from "@/components/blog/category/CategoryHero";
import CategoryPageClient from "@/components/blog/category/CategoryPageClient";

import { getCategory, getPostsByCategory } from "@/services/category.service";
import { getPost, getRelatedPosts } from "@/services/post.service";

interface SlugPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: SlugPageProps): Promise<Metadata> {
  const { slug } = await params;

  const category = await getCategory(slug);

  if (category) {
    return {
      title: category.name,
      description: category.description,
      robots: {
        index: true,
        follow: true,
      },
    };
  }

  const post = await getPost(slug);

  if (!post) {
    return {
      title: "Page Not Found",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const title = post.seo?.title || post.title;
  const description = post.seo?.description || post.excerpt;
  const keywords = post.seo?.keywords ?? post.tags;
  const canonicalUrl = `/${slug}`;

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

export default async function SlugPage({ params }: SlugPageProps) {
  const { slug } = await params;

  const category = await getCategory(slug);

  if (category) {
    const posts = await getPostsByCategory(slug);

    return (
      <main>
        <Container className="max-w-7xl py-8 lg:py-10">
          <CategoryHero category={category} total={posts.length} />

          <CategoryPageClient posts={posts} />
        </Container>
      </main>
    );
  }

  const post = await getPost(slug);

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