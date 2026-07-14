import { Author } from "./author";
import { Category } from "./category";
import { SEO } from "./seo";

export interface Post {
  id: string;

  title: string;

  slug: string;

  excerpt: string;

  content: string;

  coverImage: string;

  category: Category;

  author: Author;

  tags: string[];

  seo: SEO;

  publishedAt: string;

  updatedAt?: string;

  readingTime: number;

  featured: boolean;

  popular: boolean;
}
