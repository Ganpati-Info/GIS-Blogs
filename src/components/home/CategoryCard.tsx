"use client";

import { useEffect, useRef, useState } from "react";
import {
  Bot,
  Briefcase,
  Cloud,
  Code2,
  Palette,
  Smartphone,
  Cpu,
  LayoutGrid,
} from "lucide-react";

import { Category } from "@/types";

interface CategoryTabsProps {
  categories: Category[];
  selectedCategory: string;
  onCategoryChange: (slug: string) => void;
}

const icons = {
  "artificial-intelligence": Bot,
  "web-development": Code2,
  "mobile-development": Smartphone,
  "cloud-computing": Cloud,
  "ui-ux-design": Palette,
  "digital-transformation": Cpu,
  "case-studies": Briefcase,
  default: LayoutGrid,
};

export default function CategoryTabs({
  categories,
  selectedCategory,
  onCategoryChange,
}: CategoryTabsProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const [thumbWidth, setThumbWidth] = useState(0);
  const [thumbLeft, setThumbLeft] = useState(0);

  const isDragging = useRef(false);

  const updateThumb = () => {
    const container = scrollRef.current;
    const track = trackRef.current;

    if (!container || !track) return;

    const visible = container.clientWidth;
    const total = container.scrollWidth;

    const width = Math.max((visible / total) * track.clientWidth, 50);

    const maxScroll = total - visible;
    const maxThumb = track.clientWidth - width;

    const left =
      maxScroll === 0 ? 0 : (container.scrollLeft / maxScroll) * maxThumb;

    setThumbWidth(width);
    setThumbLeft(left);
  };

  useEffect(() => {
    updateThumb();

    const container = scrollRef.current;

    if (!container) return;

    container.addEventListener("scroll", updateThumb);
    window.addEventListener("resize", updateThumb);

    return () => {
      container.removeEventListener("scroll", updateThumb);
      window.removeEventListener("resize", updateThumb);
    };
  }, []);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();

    isDragging.current = true;

    const startX = e.clientX;

    const startLeft = thumbLeft;

    const move = (event: MouseEvent) => {
      if (!isDragging.current) return;

      const container = scrollRef.current;
      const track = trackRef.current;

      if (!container || !track) return;

      const maxThumb = track.clientWidth - thumbWidth;

      const nextLeft = Math.min(
        Math.max(0, startLeft + event.clientX - startX),
        maxThumb,
      );

      const maxScroll = container.scrollWidth - container.clientWidth;

      container.scrollLeft = (nextLeft / maxThumb) * maxScroll;
    };

    const up = () => {
      isDragging.current = false;

      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseup", up);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup", up);
  };

  return (
    <section className="mt-10 bg-card">
      <div ref={scrollRef} className="no-scrollbar overflow-x-auto">
        <div className="flex w-max gap-3">
          {/* All Stories */}

          <button
            type="button"
            onClick={() => onCategoryChange("all")}
            className={`flex shrink-0 items-center gap-3 rounded-lg border px-5 py-3 transition ${
              selectedCategory === "all"
                ? "border-primary bg-primary/10"
                : "hover:bg-muted"
            }`}
          >
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-lg ${
                selectedCategory === "all" ? "bg-primary" : "bg-primary/10"
              }`}
            >
              <LayoutGrid
                className={`h-5 w-5 ${
                  selectedCategory === "all" ? "text-white" : "text-primary"
                }`}
              />
            </div>

            <span
              className={`font-medium ${
                selectedCategory === "all" ? "text-primary" : "text-foreground"
              }`}
            >
              All Stories
            </span>
          </button>

          {/* Categories */}

          {categories.map((category) => {
            const Icon =
              icons[category.slug as keyof typeof icons] ?? icons.default;

            const active = selectedCategory === category.slug;

            return (
              <button
                key={category.id}
                type="button"
                onClick={() => onCategoryChange(category.slug)}
                className={`flex shrink-0 items-center gap-3 rounded-lg border px-5 py-3 transition ${
                  active ? "border-primary bg-primary/10" : "hover:bg-muted"
                }`}
              >
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-lg transition-colors"
                  style={{
                    backgroundColor: active
                      ? category.color
                      : `${category.color}15`,
                  }}
                >
                  <Icon
                    className="h-5 w-5"
                    style={{
                      color: active ? "#ffffff" : category.color,
                    }}
                  />
                </div>

                <span
                  className={`font-medium ${active ? "text-primary" : ""}`}
                  style={{
                    color: active ? undefined : category.color,
                  }}
                >
                  {category.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Custom Scrollbar */}

      <div ref={trackRef} className="mt-4 h-1.5 w-full rounded-full bg-muted">
        <div
          onMouseDown={handleMouseDown}
          className="h-full cursor-grab rounded-full bg-primary transition-colors hover:bg-primary/90 active:cursor-grabbing"
          style={{
            width: thumbWidth,
            transform: `translateX(${thumbLeft}px)`,
          }}
        />
      </div>
    </section>
  );
}
