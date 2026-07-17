"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ReadingProgress() {
  const { scrollYProgress } = useScroll();

  // Smooth the progress value
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    mass: 0.2,
  });

  return (
    <div className="fixed left-0 top-0 z-50 h-1 w-full bg-transparent">
      <motion.div
        className="h-full origin-left bg-primary"
        style={{ scaleX }}
      />
    </div>
  );
}
