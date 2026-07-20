import { Author } from "./author";
import { Category } from "./category";
import { SEO } from "./seo";
import { PortableTextBlock } from "@portabletext/types";


export interface Post {
  id: string;

  title: string;

  slug: string;

  excerpt: string;

  content: PortableTextBlock[];

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
