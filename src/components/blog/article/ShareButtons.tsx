"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import {
  FaFacebookF,
  FaCheck,
  FaLink,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import { MdShare } from "react-icons/md";

import {
  copyToClipboard,
  getFacebookShareUrl,
  getLinkedInShareUrl,
  getTwitterShareUrl,
  nativeShare,
} from "@/lib/blog/share";

import { Button } from "@/components/ui/button";
import { Post } from "@/types";

interface ShareButtonsProps {
  post: Post;
}

export default function ShareButtons({ post }: ShareButtonsProps) {
  const pathname = usePathname();
  const [copied, setCopied] = useState(false);

  const url =
    typeof window !== "undefined" ? `${window.location.origin}${pathname}` : "";

  const canShare =
    typeof navigator !== "undefined" && typeof navigator.share === "function";

  const handleCopy = async () => {
    const success = await copyToClipboard(url);

    if (!success) return;

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1800);
  };

  const handleNativeShare = () => {
    nativeShare(post.title, post.excerpt, url);
  };

  return (
    <section className="space-y-4 justify-center text-center">
      <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
        Share this article
      </h3>

      <div className="flex flex-wrap gap-3 justify-center">
        <Button
          size="icon"
          variant="outline"
          onClick={handleCopy}
          aria-label="Copy link"
        >
          <span className="relative flex h-4 w-4 items-center justify-center">
            <FaLink
              className={`absolute transition-all duration-300 ${
                copied
                  ? "scale-75 rotate-90 opacity-0"
                  : "scale-100 rotate-0 opacity-100"
              }`}
            />

            <FaCheck
              className={`absolute text-green-600 transition-all duration-300 ${
                copied
                  ? "scale-100 rotate-0 opacity-100"
                  : "scale-75 -rotate-90 opacity-0"
              }`}
            />
          </span>
        </Button>

        {canShare && (
          <Button
            size="icon"
            variant="outline"
            onClick={handleNativeShare}
            aria-label="Share"
          >
            <MdShare className="h-5 w-5" />
          </Button>
        )}

        <a
          href={getLinkedInShareUrl(url)}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button size="icon" variant="outline">
            <FaLinkedinIn className="h-4 w-4" />
          </Button>
        </a>

        <a
          href={getTwitterShareUrl(url, post.title)}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button size="icon" variant="outline">
            <FaXTwitter className="h-4 w-4" />
          </Button>
        </a>

        <a
          href={getFacebookShareUrl(url)}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button size="icon" variant="outline">
            <FaFacebookF className="h-4 w-4" />
          </Button>
        </a>
      </div>
    </section>
  );
}
