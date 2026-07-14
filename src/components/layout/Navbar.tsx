import Link from "next/link";
import { Search } from "lucide-react";

import Container from "./Container";

const navItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Categories",
    href: "/category/web-development",
  },
  {
    label: "Authors",
    href: "/authors",
  },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-xl">
      <Container className="flex h-18 items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-lg font-bold text-white">
            G
          </div>

          <div>
            <p className="text-lg font-bold">GIS Blog</p>
            <p className="text-xs text-muted-foreground">
              Ganpati Info Solutions
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button className="rounded-xl border p-2 transition-colors hover:bg-muted">
          <Search className="h-5 w-5" />
        </button>
      </Container>
    </header>
  );
}
