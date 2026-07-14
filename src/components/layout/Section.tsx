import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";
import Container from "./Container";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  container?: boolean;
}

export default function Section({
  children,
  className,
  container = true,
  ...props
}: SectionProps) {
  return (
    <section className={cn("section-padding", className)} {...props}>
      {container ? <Container>{children}</Container> : children}
    </section>
  );
}
