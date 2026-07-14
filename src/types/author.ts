export interface Author {
  id: string;

  name: string;

  slug: string;

  avatar: string;

  designation: string;

  bio: string;

  social: {
    linkedin?: string;
    twitter?: string;
    github?: string;
    website?: string;
  };
}
