import { getPost as fetchPost, getPosts } from "@/services/post.service";

export async function getPost(categorySlug: string, postSlug: string) {
  return await fetchPost(categorySlug, postSlug);
}

export async function getRelatedPosts(post: any, limit = 3) {
  const posts = await getPosts();

  return posts
    .filter(
      (item: any) =>
        item.category.slug === post.category.slug && item.id !== post.id,
    )
    .slice(0, limit);
}

export async function getPreviousPost(post: any) {
  const posts = await getPosts();

  const index = posts.findIndex((item: any) => item.id === post.id);

  return index > 0 ? posts[index - 1] : null;
}

export async function getNextPost(post: any) {
  const posts = await getPosts();

  const index = posts.findIndex((item: any) => item.id === post.id);

  return index < posts.length - 1 ? posts[index + 1] : null;
}
