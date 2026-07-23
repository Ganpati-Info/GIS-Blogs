"use client";

import * as LucideIcons from "lucide-react";
import { LayoutGrid } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface IconProps {
  name?: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function Icon({
  name,
  className,
  style,
}: IconProps) {
  const Component =
    (LucideIcons as unknown as Record<string, LucideIcon>)[name ?? ""] ??
    LayoutGrid;

  return <Component className={className} style={style} />;
}