"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import Container from "./Container";
import { Post } from "@/types";
import { SearchDialog } from "@/components/blog/search";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Categories", href: "/web-development" },
  { label: "Authors", href: "/authors" },
];

interface NavbarProps {
  allPosts: Post[];
}

export default function Navbar({ allPosts }: NavbarProps) {
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
            <Image src="/logos/gis_logo.png" alt="GIS Blog Logo" className="" width={128} height={32} />
          </Link>

          <SearchDialog posts={allPosts} />

          <div>
            <Link href="https://ganpatiinfosolutions.com/" className="hidden rounded-lg border px-4 py-2 text-sm font-medium transition-colors hover:bg-muted md:inline-flex">
              Back to Website
            </Link>
          </div>

          <div className="flex items-center gap-2 md:hidden">
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
