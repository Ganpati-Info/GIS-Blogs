import { getPosts } from "@/services/post.service";

import PostsPageClient from "@/components/blog/posts/PostPageClient";

export default async function PostsPage() {
  const posts = await getPosts();

  return <PostsPageClient posts={posts} />;
}
