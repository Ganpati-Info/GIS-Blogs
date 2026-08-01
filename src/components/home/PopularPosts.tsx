"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import BlogCard from "@/components/home/BlogCard";
import { Post } from "@/types";

interface PopularPostsProps {
  posts: Post[];
}

export default function PopularPosts({ posts }: PopularPostsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth < 768) {
        setCardsPerView(1);
      } else if (window.innerWidth < 1280) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };

    updateCardsPerView();

    window.addEventListener("resize", updateCardsPerView);

    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  useEffect(() => {
    const maxIndex = Math.max(0, posts.length - cardsPerView);

    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [cardsPerView, currentIndex, posts.length]);

  const maxIndex = Math.max(0, posts.length - cardsPerView);

  return (
    <section className="rounded-xl border bg-card p-5 shadow-sm sm:p-6">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-bold">Popular Posts</h2>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setCurrentIndex((prev) => prev - 1)}
            disabled={currentIndex === 0}
            className="flex h-10 w-10 items-center justify-center rounded-full border transition hover:bg-muted disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            onClick={() => setCurrentIndex((prev) => prev + 1)}
            disabled={currentIndex >= maxIndex}
            className="flex h-10 w-10 items-center justify-center rounded-full border transition hover:bg-muted disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`,
          }}
        >
          {posts.map((post) => (
            <div
              key={post.id}
              className="w-full shrink-0 px-3 md:w-1/2 xl:w-1/3"
            >
              <BlogCard post={post} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}