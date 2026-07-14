"use client";

import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";

import Container from "@/components/layout/Container";

const trendingTopics = [
  "Artificial Intelligence",
  "Next.js",
  "React",
  "Cloud",
  "UI / UX",
  "TypeScript",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b bg-grid">
      <Container className="py-24 lg:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center rounded-full border bg-primary/5 px-4 py-2 text-sm font-medium text-primary">
            Insights & Resources
          </span>

          <h1 className="mt-8 text-balance">
            Build better software.
            <br />
            <span className="text-gradient">Grow smarter businesses.</span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg">
            Explore articles on artificial intelligence, web development, cloud
            computing, mobile applications, cybersecurity, and digital
            transformation.
          </p>

          <div className="mx-auto mt-12 flex max-w-2xl items-center rounded-2xl border bg-card px-5 py-4 shadow-soft">
            <Search className="mr-3 h-5 w-5 text-muted-foreground" />

            <input
              type="text"
              placeholder="Search articles..."
              className="flex-1 bg-transparent outline-none placeholder:text-muted-foreground"
            />

            <button className="rounded-xl bg-primary px-5 py-2 text-sm font-medium text-white transition hover:opacity-90">
              Search
            </button>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <span className="text-sm font-medium text-muted-foreground">
              Trending
            </span>

            {trendingTopics.map((topic) => (
              <Link
                key={topic}
                href="#"
                className="rounded-full bg-muted px-4 py-2 text-sm transition hover:bg-primary hover:text-white"
              >
                {topic}
              </Link>
            ))}
          </div>

          <div className="mt-16 flex items-center justify-center gap-10">
            <div>
              <p className="text-3xl font-bold text-primary">50+</p>
              <p className="text-sm text-muted-foreground">Articles</p>
            </div>

            <div className="h-10 w-px bg-border" />

            <div>
              <p className="text-3xl font-bold text-primary">8</p>
              <p className="text-sm text-muted-foreground">Categories</p>
            </div>

            <div className="h-10 w-px bg-border" />

            <div>
              <p className="text-3xl font-bold text-primary">10k+</p>
              <p className="text-sm text-muted-foreground">Monthly Readers</p>
            </div>
          </div>

          <Link
            href="#latest"
            className="mt-14 inline-flex items-center gap-2 text-primary"
          >
            Explore Articles
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
