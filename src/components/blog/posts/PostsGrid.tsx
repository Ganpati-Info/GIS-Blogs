import { Post } from "@/types";

import GridPostCard from "./GridPostCard";

interface PostsGridProps {
  posts: Post[];
}

export default function PostsGrid({ posts }: PostsGridProps) {
  return (
    <section
      aria-label="All blog posts"
      className="
        grid
        grid-cols-1
        gap-6

        sm:grid-cols-2

        lg:grid-cols-3

        
      "
    >
      {posts.map((post) => (
        <GridPostCard key={post.id} post={post} />
      ))}
    </section>
  );
}
