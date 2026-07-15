import Link from "next/link";

import Container from "./Container";

export default function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <Container className="py-8 sm:py-12 lg:py-16">
        <div className="grid gap-8 sm:grid-cols-2 md:gap-12 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-bold">GIS Blog</h3>

            <p className="text-sm text-muted-foreground">
              Insights on AI, software development, cloud, mobile apps,
              cybersecurity and digital transformation.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Explore</h4>

            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link href="/">Home</Link>
              </li>

              <li>
                <Link href="/authors">Authors</Link>
              </li>

              <li>
                <Link href="/search">Search</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Categories</h4>

            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>Artificial Intelligence</li>
              <li>Web Development</li>
              <li>Cloud</li>
              <li>UI / UX</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Company</h4>

            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a
                  href="https://ganpatiinfosolutions.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Website
                </a>
              </li>

              <li>
                <a
                  href="https://ganpatiinfosolutions.com/contact"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contact
                </a>
              </li>

              <li>
                <a
                  href="https://ganpatiinfosolutions.com/services"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Services
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t pt-8 text-center text-sm text-muted-foreground md:mt-12 md:flex-row md:items-center md:justify-between md:gap-0">
          <p>
            © {new Date().getFullYear()} Ganpati Info Solutions. All rights
            reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-6 md:gap-6">
            <Link href="/privacy-policy">Privacy Policy</Link>

            <Link href="/terms">Terms</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
