import { Author } from "@/types";
import { Category } from "@/types";
import { Post } from "@/types";

const fallbackCategories: Category[] = [
  {
    id: "cat-ai",
    name: "Artificial Intelligence",
    slug: "artificial-intelligence",
    description:
      "Latest news, tutorials, tools, machine learning, and practical AI applications.",
    color: "#25499F",
    icon: "Bot",
  },
  {
    id: "cat-web",
    name: "Web Development",
    slug: "web-development",
    description:
      "React, Next.js, TypeScript, APIs, performance, and frontend best practices.",
    color: "#2563EB",
    icon: "Code2",
  },
  {
    id: "cat-cloud",
    name: "Cloud & DevOps",
    slug: "cloud-devops",
    description:
      "AWS, Docker, Kubernetes, CI/CD, infrastructure, and deployment guides.",
    color: "#7C3AED",
    icon: "Cloud",
  },
];

const fallbackAuthors: Author[] = [
  {
    id: "author-1",
    name: "Souvik Basak",
    slug: "souvik-basak",
    avatar: "https://i.pravatar.cc/?img=37",
    designation: "Full Stack Developer",
    bio: "Passionate about building scalable web applications using React, Next.js, Node.js, and modern cloud technologies.",
    social: {
      linkedin: "https://linkedin.com/in/souvikbasak",
      github: "https://github.com/souvikbasak",
      website: "https://ganpatiinfosolutions.com",
    },
  },
  {
    id: "author-2",
    name: "Priya Sharma",
    slug: "priya-sharma",
    avatar: "https://i.pravatar.cc/?img=5",
    designation: "AI Consultant",
    bio: "Helping businesses adopt AI solutions that improve productivity and customer experience.",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
  },
];

const aiCategory = fallbackCategories[0];
const webCategory = fallbackCategories[1];
const cloudCategory = fallbackCategories[2];

const souvik = fallbackAuthors[0];
const priya = fallbackAuthors[1];

export const fallbackPosts: Post[] = [
  {
    id: "post-1",
    title: "How Artificial Intelligence Is Transforming Modern Businesses",
    slug: "how-artificial-intelligence-is-transforming-modern-businesses",
    excerpt:
      "Explore how businesses are leveraging artificial intelligence to automate operations, improve customer experiences, and make data-driven decisions.",
    content: [],
    coverImage:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1600&q=80",
    categories: [aiCategory],
    author: priya,
    tags: [
      "Artificial Intelligence",
      "Machine Learning",
      "Business",
      "Automation",
    ],
    seo: {
      title: "How Artificial Intelligence Is Transforming Modern Businesses",
      description:
        "Discover how AI is helping businesses automate workflows, improve customer experience, and increase productivity.",
      keywords: ["AI", "Artificial Intelligence", "Business", "Automation"],
    },
    publishedAt: "2026-07-10",
    updatedAt: "2026-07-12",
    readingTime: 7,
    featured: true,
    popular: true,
  },
  {
    id: "post-2",
    title: "Next.js Best Practices for Modern Applications",
    slug: "nextjs-best-practices-modern-applications",
    excerpt:
      "Learn the architecture, rendering, and optimization patterns that keep Next.js apps fast and maintainable.",
    content: [],
    coverImage:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1600&q=80",
    categories: [webCategory],
    author: souvik,
    tags: ["Next.js", "React", "TypeScript", "Performance"],
    seo: {
      title: "Next.js Best Practices for Modern Applications",
      description:
        "Learn how to build scalable applications using modern Next.js patterns.",
      keywords: ["Next.js", "React", "Frontend", "Performance"],
    },
    publishedAt: "2026-07-07",
    readingTime: 8,
    featured: false,
    popular: true,
  },
  {
    id: "post-3",
    title: "Cloud Deployment Patterns That Reduce Operational Overhead",
    slug: "cloud-deployment-patterns-reduce-operational-overhead",
    excerpt:
      "Practical deployment and infrastructure patterns that simplify operations and improve reliability.",
    content: [],
    coverImage:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1600&q=80",
    categories: [cloudCategory],
    author: souvik,
    tags: ["Cloud", "DevOps", "AWS", "Infrastructure"],
    seo: {
      title: "Cloud Deployment Patterns That Reduce Operational Overhead",
      description:
        "Practical deployment patterns for reliable and cost-effective cloud systems.",
      keywords: ["Cloud", "DevOps", "Deployment", "Infrastructure"],
    },
    publishedAt: "2026-07-03",
    readingTime: 6,
    featured: false,
    popular: false,
  },
];

export { fallbackAuthors, fallbackCategories };
