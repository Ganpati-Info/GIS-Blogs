"use client";

import { Mail } from "lucide-react";

export default function Newsletter() {
  return (
    <section className="rounded-lg border bg-card px-6 py-8 shadow-sm sm:px-8 sm:py-10 lg:px-12 lg:py-14">
      <div className="mx-auto max-w-3xl text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
          <Mail className="h-7 w-7 text-primary" />
        </div>

        <h2 className="mt-6 text-2xl font-bold sm:text-3xl">Stay Updated</h2>

        <p className="mt-3 text-sm leading-6 text-muted-foreground sm:text-base">
          Get the latest insights on technology, software development, AI, cloud
          computing, cybersecurity, and digital transformation delivered
          directly to your inbox.
        </p>

        <form className="mx-auto mt-8 flex w-full max-w-2xl flex-col gap-3 sm:flex-row">
          <input
            type="email"
            placeholder="Enter your email"
            className="h-12 flex-1 rounded-lg border bg-background px-4 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
          />

          <button
            type="submit"
            className="h-12 rounded-lg bg-primary px-8 text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
          >
            Subscribe
          </button>
        </form>

        <p className="mt-4 text-xs text-muted-foreground sm:text-sm">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
