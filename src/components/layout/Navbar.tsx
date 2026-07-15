"use client";

import Link from "next/link";
import { Search, Menu, X } from "lucide-react";
import { useState } from "react";

import Container from "./Container";

const navItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Categories",
    href: "/web-development",
  },
  {
    label: "Authors",
    href: "/authors",
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-xl">
      <Container className="flex items-center justify-between py-4">
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

        <div className="flex items-center gap-2">
          <button
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Toggle menu"
            className="inline-flex items-center justify-center rounded-xl border p-2 md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          <button className="rounded-xl border p-2 transition-colors hover:bg-muted">
            <Search className="h-5 w-5" />
          </button>
        </div>
      </Container>

      {open && (
        <div className="md:hidden">
          <div className="border-b bg-card">
            <Container className="py-3">
              <nav className="flex w-full flex-col gap-3">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </Container>
          </div>
        </div>
      )}
    </header>
  );
}
