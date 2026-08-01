import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center">
      <Container className="max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">
          Page Not Found
        </p>

        <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
          We couldn't find that page.
        </h1>

        <p className="mt-5 text-lg text-muted-foreground">
          The post or category may have been removed or renamed.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg">
            <Link href="/">
              <Home className="mr-2 h-5 w-5" />
              Back to Home
            </Link>
          </Button>

          <Button variant="secondary" size="lg">
            <Link href="/posts">
              <ArrowLeft className="mr-2 h-5 w-5" />
              Browse Posts
            </Link>
          </Button>
        </div>
      </Container>
    </main>
  );
}