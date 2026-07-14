import { cn } from "@/lib/utils";

interface PageHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  className?: string;
}

export default function PageHeader({
  badge,
  title,
  description,
  className,
}: PageHeaderProps) {
  return (
    <div className={cn("mx-auto max-w-3xl text-center", className)}>
      {badge && (
        <span className="mb-4 inline-flex rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
          {badge}
        </span>
      )}

      <h1 className="text-balance">{title}</h1>

      {description && (
        <p className="mx-auto mt-6 max-w-2xl text-lg">{description}</p>
      )}
    </div>
  );
}
