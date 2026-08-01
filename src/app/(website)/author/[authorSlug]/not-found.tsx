import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";

export default function AuthorNotFound() {
  return (
    <main className="flex min-h-[70vh] items-center">
      <Container className="max-w-xl text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">
          Author
        </p>

        <h1 className="mt-4 text-4xl font-bold">Author not found.</h1>

        <p className="mt-5 text-muted-foreground">
          The author you're looking for doesn't exist or is no longer available.
        </p>

        <Button
          className="mt-8 inline-flex items-center gap-2"
          variant="secondary"
        >
          <Link href="/posts">
            <ArrowLeft className="h-4 w-4" />
            Browse All Posts
          </Link>
        </Button>
      </Container>
    </main>
  );
}
