  import { authors } from "@/data/authors";
  import { posts } from "@/data/posts";

  export function getAuthorBySlug(slug: string) {
    return authors.find((author) => author.slug === slug);
  }

  export function getPostsByAuthor(authorSlug: string) {
    return posts.filter((post) => post.author.slug === authorSlug);
  }
