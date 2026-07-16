import Link from "next/link";

import Container from "./Container";

export default function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <Container className="py-10 lg:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="mb-4 text-xl font-bold">GIS Blog</h3>

            <p className="max-w-sm text-sm leading-6 text-muted-foreground">
              Insights on AI, software development, cloud computing, mobile
              apps, cybersecurity, and digital transformation.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h4 className="mb-4 font-semibold">Explore</h4>

            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link href="/" className="transition-colors hover:text-primary">
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/authors"
                  className="transition-colors hover:text-primary"
                >
                  Authors
                </Link>
              </li>

              <li>
                <Link
                  href="/search"
                  className="transition-colors hover:text-primary"
                >
                  Search
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="mb-4 font-semibold">Categories</h4>

            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>Artificial Intelligence</li>
              <li>Web Development</li>
              <li>Cloud</li>
              <li>UI / UX</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-4 font-semibold">Company</h4>

            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a
                  href="https://ganpatiinfosolutions.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-primary"
                >
                  Website
                </a>
              </li>

              <li>
                <a
                  href="https://ganpatiinfosolutions.com/contact"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-primary"
                >
                  Contact
                </a>
              </li>

              <li>
                <a
                  href="https://ganpatiinfosolutions.com/services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-primary"
                >
                  Services
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t pt-6 text-center text-sm text-muted-foreground md:mt-12 md:flex-row">
          <p>
            © {new Date().getFullYear()} Ganpati Info Solutions. All rights
            reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-5">
            <Link
              href="/privacy-policy"
              className="transition-colors hover:text-primary"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="transition-colors hover:text-primary"
            >
              Terms
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
