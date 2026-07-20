import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex min-h-[80vh] items-center">
      <Container className="max-w-2xl text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-primary">
          404 Error
        </p>

        <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
          Page Not Found
        </h1>

        <p className="mx-auto mt-6 max-w-lg text-lg text-muted-foreground">
          Sorry, the page you're looking for doesn't exist or may have been
          moved.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button>
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>

          <Button variant="outline">
            <Link href="/posts">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Browse Articles
            </Link>
          </Button>
        </div>
      </Container>
    </main>
  );
}
