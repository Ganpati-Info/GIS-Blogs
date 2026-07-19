export interface Author {
  id: string;

  name: string;

  slug: string;

  avatar: string;

  designation: string;

  bio: string;

  email?: string;

  location?: string;

  joinedAt?: string;

  social: {
    website?: string;
    email?: string;

    // Professional
    linkedin?: string;
    github?: string;

    // Blogging
    medium?: string;
    devto?: string;

    // Social
    twitter?: string;
    facebook?: string;
    instagram?: string;

    // Video
    youtube?: string;
    tiktok?: string;

    // Design
    behance?: string;

    // Messaging & Community
    discord?: string;
    telegram?: string;
    whatsapp?: string;
  };
}
