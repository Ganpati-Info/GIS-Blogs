import { getPosts } from "@/services/post.service";

import PostsPageClient from "@/components/blog/posts/PostPageClient";

interface PostsPageProps {
  searchParams: Promise<{
    q?: string;
  }>;
}

export default async function PostsPage({
  searchParams,
}: PostsPageProps) {
  const posts = await getPosts();

  const { q } = await searchParams;

  const initialQuery = q?.trim() ?? "";

  return (
    <PostsPageClient
      posts={posts}
      initialQuery={initialQuery}
    />
  );
}