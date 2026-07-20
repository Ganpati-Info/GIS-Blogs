import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center">
      <Container className="max-w-xl text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">
          Category Not Found
        </p>

        <h1 className="mt-4 text-4xl font-bold">
          We couldn't find this category.
        </h1>

        <p className="mt-5 text-muted-foreground">
          The category may have been removed or renamed.
        </p>

        <Button className="mt-8">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Explore Categories
          </Link>
        </Button>
      </Container>
    </main>
  );
}