import { Post } from "@/types";

import ListPostCard from "./ListPostCard";

interface PostsListProps {
  posts: Post[];
}

export default function PostsList({ posts }: PostsListProps) {
  return (
    <section aria-label="All blog posts" className="flex flex-col gap-6">
      {posts.map((post) => (
        <ListPostCard key={post.id} post={post} />
      ))}
    </section>
  );
}
