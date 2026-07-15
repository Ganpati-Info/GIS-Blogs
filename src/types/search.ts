export interface SearchResult {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  coverImage: string;

  category: {
    name: string;
    slug: string;
    color: string;
  };

  author: {
    name: string;
  };

  readingTime: number;
}
