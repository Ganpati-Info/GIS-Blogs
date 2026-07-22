import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";

export default function BlogEmptyState() {
  return (
    <main className="flex min-h-[70vh] items-center">
      <Container className="max-w-xl text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">
          Blog
        </p>

        <h1 className="mt-4 text-4xl font-bold">No posts available yet.</h1>

        <p className="mt-5 text-muted-foreground">
          We're working on new articles. Check back soon for updates, guides,
          and insights.
        </p>

        <Button
          className="mt-8 inline-flex items-center gap-2"
          variant="secondary"
          
        >
          <Link href="/">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </Button>
      </Container>
    </main>
  );
}
