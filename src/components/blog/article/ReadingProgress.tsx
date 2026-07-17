"use client";

import { useEffect, useState } from "react";

export default function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const calculateProgress = () => {
      const scrollTop = window.scrollY;

      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const percentage =
        documentHeight > 0 ? (scrollTop / documentHeight) * 100 : 0;

      setProgress(Math.min(100, Math.max(0, percentage)));
    };

    calculateProgress();

    window.addEventListener("scroll", calculateProgress);

    return () => window.removeEventListener("scroll", calculateProgress);
  }, []);

  return (
    <div className="fixed left-0 top-0 z-50 h-1 w-full bg-transparent">
      <div
        className="h-full bg-primary transition-[width] duration-150"
        style={{
          width: `${progress}%`,
        }}
      />
    </div>
  );
}
