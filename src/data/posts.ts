import { Post } from "@/types";

import { authors } from "./authors";
import { categories } from "./categories";

export const posts: Post[] = [
  {
    id: "post-1",

    title: "How Artificial Intelligence Is Transforming Modern Businesses",

    slug: "how-artificial-intelligence-is-transforming-modern-businesses",

    excerpt:
      "Explore how businesses are leveraging artificial intelligence to automate operations, improve customer experiences, and make data-driven decisions.",

    content: `
## Introduction

Artificial Intelligence has become one of the fastest growing technologies in modern business. Organizations across industries are adopting AI to improve efficiency, reduce operational costs, and deliver better customer experiences.

## Why AI Matters

AI enables businesses to process massive amounts of data, automate repetitive tasks, and uncover insights that were previously impossible to identify manually.

Companies are using AI for:

- Customer support chatbots
- Predictive analytics
- Fraud detection
- Process automation
- Recommendation systems

## Benefits

Businesses adopting AI often experience:

- Faster decision making
- Lower operational costs
- Better customer engagement
- Increased productivity
- Improved scalability

## Challenges

Despite its benefits, AI implementation requires careful planning.

Organizations should focus on:

- Data quality
- Security
- Privacy
- Ethical AI
- Continuous monitoring

## Final Thoughts

Artificial Intelligence is no longer a future technology. Businesses that embrace AI today position themselves for long-term growth and competitive advantage.
`,

    coverImage:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1600&q=80",

    category: categories[0],

    author: authors[1],

    tags: [
      "Artificial Intelligence",
      "Machine Learning",
      "Business",
      "Automation",
      "Technology",
    ],

    seo: {
      title: "How Artificial Intelligence Is Transforming Modern Businesses",

      description:
        "Discover how AI is helping businesses automate workflows, improve customer experience, and increase productivity.",

      keywords: [
        "AI",
        "Artificial Intelligence",
        "Business",
        "Automation",
        "Machine Learning",
      ],

      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1600&q=80",
    },

    publishedAt: "2026-07-10",

    updatedAt: "2026-07-12",

    readingTime: 7,

    featured: true,

    popular: true,
  },

  {
    id: "post-2",

    title: "Next.js 15 Best Practices for Enterprise Applications",

    slug: "nextjs-15-best-practices-enterprise-applications",

    excerpt:
      "Learn the architecture, rendering strategies, caching techniques, and optimization methods used to build enterprise-grade Next.js applications.",

    content: `
## Introduction

Next.js has become one of the most popular frameworks for building production-ready React applications.

## Server Components

Server Components reduce JavaScript sent to the browser while improving performance.

## Data Fetching

Use Server Components whenever possible.

Cache expensive requests.

Use streaming for slow data.

## Performance

Focus on:

- Image optimization
- Dynamic imports
- Route prefetching
- Metadata generation
- Partial rendering

## Deployment

Deploy using modern edge platforms with caching enabled.

## Conclusion

Following these practices results in scalable and maintainable enterprise applications.
`,

    coverImage:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1600&q=80",

    category: categories[1],

    author: authors[0],

    tags: ["Next.js", "React", "TypeScript", "Performance", "Frontend"],

    seo: {
      title: "Next.js 15 Best Practices for Enterprise Applications",

      description:
        "Learn how to build scalable enterprise applications using Next.js 15.",

      keywords: ["Next.js", "React", "Frontend", "Enterprise"],

      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1600&q=80",
    },

    publishedAt: "2026-07-07",

    readingTime: 8,

    featured: false,

    popular: true,
  },

  {
    id: "post-3",

    title: "Building High Performance React Applications",

    slug: "building-high-performance-react-applications",

    excerpt:
      "Discover practical React optimization techniques including memoization, lazy loading, virtualization, and efficient state management.",

    content: `
## Introduction

Performance plays a critical role in user experience.

A slow interface results in lower engagement and reduced conversions.

## Common Bottlenecks

- Large bundle sizes
- Unnecessary renders
- Heavy components
- Poor state management

## Optimization Techniques

Improve performance by using:

- React.memo
- useMemo
- useCallback
- Lazy loading
- Code splitting
- Image optimization
- Virtualized lists

## Monitoring

Always measure before optimizing.

Use:

- React DevTools
- Lighthouse
- Chrome Performance
- Web Vitals

## Conclusion

Small improvements across many components produce significant performance gains.
`,

    coverImage:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=1600&q=80",

    category: categories[1],

    author: authors[0],

    tags: ["React", "Performance", "JavaScript", "Frontend", "Optimization"],

    seo: {
      title: "Building High Performance React Applications",

      description:
        "Learn practical techniques to optimize React applications for speed and scalability.",

      keywords: ["React", "Performance", "Optimization", "Frontend"],

      image:
        "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=1600&q=80",
    },

    publishedAt: "2026-07-04",

    readingTime: 6,

    featured: false,

    popular: true,
  },
  {
    id: "post-4",

    title: "Building Secure REST APIs with Node.js",

    slug: "building-secure-rest-apis-with-nodejs",

    excerpt:
      "Learn security best practices for building production-ready REST APIs using Node.js, Express, JWT authentication, and proper validation.",

    content: `
## Introduction

Security should never be treated as an afterthought.

Modern APIs process sensitive user information, authentication tokens and business-critical data.

## Authentication

Use JWT or session-based authentication depending on your application's requirements.

Never store passwords directly.

Always hash passwords using bcrypt or Argon2.

## Validation

Every incoming request should be validated.

Use libraries like Zod or Joi to validate:

- Request body
- Query parameters
- Route parameters

## Authorization

Authentication identifies the user.

Authorization determines what they are allowed to do.

Never rely only on frontend checks.

## Final Thoughts

Building secure APIs requires continuous monitoring, testing and regular dependency updates.
`,

    coverImage:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1600&q=80",

    category: categories[5],

    author: authors[2],

    tags: ["Node.js", "Express", "API", "Security", "JWT"],

    seo: {
      title: "Building Secure REST APIs with Node.js",

      description:
        "Learn production-ready API security practices using Node.js and Express.",

      keywords: ["Node.js", "REST API", "Express", "Security", "JWT"],

      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1600&q=80",
    },

    publishedAt: "2026-07-02",

    readingTime: 8,

    featured: false,

    popular: false,
  },

  {
    id: "post-5",

    title: "Cloud Migration Checklist for Modern Enterprises",

    slug: "cloud-migration-checklist-modern-enterprises",

    excerpt:
      "A practical guide to planning, executing and optimizing enterprise cloud migration projects with minimal downtime.",

    content: `
## Introduction

Moving infrastructure to the cloud is more than copying servers.

Successful migrations require planning.

## Assessment

Review:

- Existing infrastructure
- Databases
- Applications
- Dependencies

## Migration Strategy

Choose the right strategy.

- Rehost
- Refactor
- Rebuild
- Replace

## Cost Optimization

Monitor cloud usage continuously.

Implement autoscaling.

Use managed services whenever possible.

## Conclusion

Cloud migration should improve scalability, reliability and operational efficiency.
`,

    coverImage:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&q=80",

    category: categories[3],

    author: authors[2],

    tags: ["AWS", "Azure", "Cloud", "DevOps", "Migration"],

    seo: {
      title: "Cloud Migration Checklist",

      description:
        "Learn how enterprises migrate applications to the cloud successfully.",

      keywords: ["Cloud", "AWS", "Azure", "Migration"],

      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&q=80",
    },

    publishedAt: "2026-06-28",

    readingTime: 9,

    featured: false,

    popular: true,
  },

  {
    id: "post-6",

    title: "Designing Scalable Design Systems for Growing Products",

    slug: "designing-scalable-design-systems",

    excerpt:
      "Learn how reusable UI components, design tokens and accessibility improve consistency across modern digital products.",

    content: `
## Introduction

Design systems help teams build consistent user experiences.

They improve collaboration between designers and developers.

## Core Principles

Every design system should include:

- Typography
- Colors
- Spacing
- Components
- Accessibility

## Component Library

Build reusable components.

Examples include:

- Buttons
- Inputs
- Cards
- Dialogs
- Tables

## Documentation

Good documentation is just as important as the components themselves.

## Conclusion

A design system reduces duplication while improving development speed and user experience.
`,

    coverImage:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1600&q=80",

    category: categories[4],

    author: authors[3],

    tags: ["UI", "UX", "Design System", "Accessibility", "Figma"],

    seo: {
      title: "Designing Scalable Design Systems",

      description: "Build reusable design systems for modern web applications.",

      keywords: ["Design System", "UI", "UX", "Accessibility"],

      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1600&q=80",
    },

    publishedAt: "2026-06-25",

    readingTime: 7,

    featured: false,

    popular: false,
  },
  {
    id: "post-7",

    title: "Why Every Business Needs Digital Transformation",

    slug: "why-every-business-needs-digital-transformation",

    excerpt:
      "Digital transformation helps organizations improve efficiency, reduce operational costs, and deliver better customer experiences through modern technology.",

    content: `
## Introduction

Digital transformation is no longer optional.

Businesses that modernize their operations gain a competitive advantage through automation, analytics and improved customer engagement.

## What Is Digital Transformation?

Digital transformation involves adopting technology across every department.

Examples include:

- Cloud computing
- AI automation
- CRM systems
- ERP solutions
- Mobile applications

## Common Challenges

Organizations often struggle with:

- Legacy systems
- Employee adoption
- Data migration
- Security

## Benefits

- Faster operations
- Better customer service
- Lower costs
- Improved scalability

## Conclusion

Technology should support business goals. Successful digital transformation starts with solving real business problems.
`,

    coverImage:
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=1600&q=80",

    category: categories[7],

    author: authors[1],

    tags: [
      "Digital Transformation",
      "Business",
      "Automation",
      "Cloud",
      "Technology",
    ],

    seo: {
      title: "Why Every Business Needs Digital Transformation",

      description:
        "Learn how digital transformation helps businesses become more efficient and competitive.",

      keywords: ["Digital Transformation", "Business", "Technology"],

      image:
        "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=1600&q=80",
    },

    publishedAt: "2026-06-21",

    readingTime: 7,

    featured: false,

    popular: false,
  },

  {
    id: "post-8",

    title: "Kubernetes for Beginners: Deploying Modern Applications",

    slug: "kubernetes-for-beginners",

    excerpt:
      "Understand the fundamentals of Kubernetes, containers, deployments, services and scaling applications in production.",

    content: `
## Introduction

Containers changed software deployment.

Kubernetes made container orchestration practical at scale.

## Core Concepts

- Pods
- Deployments
- Services
- ConfigMaps
- Secrets

## Why Kubernetes?

Benefits include:

- Auto scaling
- Self healing
- Rolling updates
- High availability

## Best Practices

- Monitor workloads
- Limit resource usage
- Keep clusters updated
- Use namespaces

## Conclusion

Kubernetes provides a reliable platform for deploying modern cloud-native applications.
`,

    coverImage:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&q=80",

    category: categories[3],

    author: authors[2],

    tags: ["Kubernetes", "Docker", "Cloud", "DevOps"],

    seo: {
      title: "Kubernetes for Beginners",

      description:
        "Learn Kubernetes fundamentals for deploying scalable cloud applications.",

      keywords: ["Kubernetes", "Docker", "Cloud", "DevOps"],

      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&q=80",
    },

    publishedAt: "2026-06-17",

    readingTime: 9,

    featured: false,

    popular: true,
  },

  {
    id: "post-9",

    title: "10 TypeScript Tips Every Frontend Developer Should Know",

    slug: "typescript-tips-for-frontend-developers",

    excerpt:
      "Improve maintainability and reduce runtime errors with practical TypeScript techniques used in modern React applications.",

    content: `
## Introduction

TypeScript helps developers write safer and more maintainable code.

## Use Interfaces

Define clear contracts between components.

## Prefer Strict Mode

Enable strict mode from the beginning of every project.

## Utility Types

Learn:

- Partial
- Pick
- Omit
- Record

## Generics

Generics improve reusability while maintaining type safety.

## Conclusion

Mastering TypeScript makes large React applications easier to scale and maintain.
`,

    coverImage:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1600&q=80",

    category: categories[1],

    author: authors[0],

    tags: ["TypeScript", "JavaScript", "React", "Frontend"],

    seo: {
      title: "TypeScript Tips for Frontend Developers",

      description:
        "Essential TypeScript techniques every frontend developer should know.",

      keywords: ["TypeScript", "JavaScript", "Frontend"],

      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1600&q=80",
    },

    publishedAt: "2026-06-12",

    readingTime: 6,

    featured: false,

    popular: true,
  },
];
