"use client";

import { LayoutGrid, Rows3 } from "lucide-react";

interface ViewSwitcherProps {
  view: "grid" | "list";
  onChange: (view: "grid" | "list") => void;
}

export default function ViewSwitcher({ view, onChange }: ViewSwitcherProps) {
  return (
    <div className="inline-flex w-fit items-center rounded-full border bg-background p-1 shadow-sm">
      <button
        type="button"
        onClick={() => onChange("grid")}
        aria-label="Grid view"
        aria-pressed={view === "grid"}
        className={`flex h-10 w-10 items-center justify-center rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary sm:h-auto sm:w-auto sm:gap-2 sm:px-4 sm:py-2 ${
          view === "grid"
            ? "bg-primary text-primary-foreground shadow"
            : "text-muted-foreground hover:bg-muted"
        }`}
      >
        <LayoutGrid className="h-4 w-4" />
        <span className="hidden sm:inline">Grid</span>
      </button>

      <button
        type="button"
        onClick={() => onChange("list")}
        aria-label="List view"
        aria-pressed={view === "list"}
        className={`flex h-10 w-10 items-center justify-center rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary sm:h-auto sm:w-auto sm:gap-2 sm:px-4 sm:py-2 ${
          view === "list"
            ? "bg-primary text-primary-foreground shadow"
            : "text-muted-foreground hover:bg-muted"
        }`}
      >
        <Rows3 className="h-4 w-4" />
        <span className="hidden sm:inline">List</span>
      </button>
    </div>
  );
}
