"use client";

import Link from "next/link";
import { Search, Menu, X } from "lucide-react";
import { useState } from "react";

import Container from "./Container";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Categories", href: "/web-development" },
  { label: "Authors", href: "/authors" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-background/90 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary font-bold text-white">
            G
          </div>

          <div className="hidden sm:block">
            <p className="text-base font-bold">GIS Blog</p>
            <p className="text-xs text-muted-foreground">
              Ganpati Info Solutions
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
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

        {/* Right Side */}
        <div className="flex items-center gap-2">
          {/* Search */}
          <button className="hidden rounded-lg border p-2 hover:bg-muted sm:flex">
            <Search className="h-5 w-5" />
          </button>

          {/* Mobile Menu */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="rounded-lg border p-2 md:hidden"
          >
            {open ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </Container>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 top-16 z-40 bg-background transition-transform duration-300 md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <Container className="py-6">
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-4 py-3 text-base font-medium hover:bg-muted"
              >
                {item.label}
              </Link>
            ))}

            <button className="mt-4 flex items-center gap-2 rounded-lg border px-4 py-3 sm:hidden">
              <Search className="h-5 w-5" />
              Search
            </button>
          </nav>
        </Container>
      </div>
    </header>
  );
}