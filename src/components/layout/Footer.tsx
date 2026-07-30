import Link from "next/link";

import Container from "./Container";

export default function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <Container className="py-4 md:py-8">
        <div className="flex flex-col items-center justify-around gap-4 text-center text-sm text-muted-foreground md:flex-row">
          <p>
            © {new Date().getFullYear()} Ganpati Info Solutions. All rights
            reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-5">
            <Link
              href="https://www.ganpatiinfosolutions.com/privacy-policy/"
              className="transition-colors hover:text-primary"
            >
              Privacy Policy
            </Link>
            |
            <Link
              href="https://www.ganpatiinfosolutions.com/terms-conditions/"
              className="transition-colors hover:text-primary"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
