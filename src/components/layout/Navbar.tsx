"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import Container from "./Container";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Categories", href: "/web-development" },
  { label: "Authors", href: "/authors" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b bg-background">
        <Container className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary font-bold text-white">
              G
            </div>

            <div className="hidden sm:block">
              <p className="font-bold">GIS Blog</p>
              <p className="text-xs text-muted-foreground">
                Ganpati Info Solutions
              </p>
            </div>
          </Link>

          <nav className="hidden gap-8 md:flex">
            {navItems.map((item) => (
              <Link key={item.label} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setOpen(true)}
              className="rounded-lg border p-2 md:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </Container>
      </header>

      {open && (
        <div className="fixed inset-0 z-[9999] bg-white md:hidden">
          <div className="flex h-16 items-center justify-between border-b px-5">
            <div className="font-semibold">Menu</div>

            <button
              onClick={() => setOpen(false)}
              className="rounded-lg border p-2"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <nav className="flex flex-col p-6">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-4 py-4 text-lg font-medium hover:bg-muted"
              >
                {item.label}
              </Link>
            ))}

            <div className="mt-10 border-t pt-6">
              <p className="font-medium">GIS Blog</p>

              <p className="text-sm text-muted-foreground">
                Ganpati Info Solutions
              </p>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
