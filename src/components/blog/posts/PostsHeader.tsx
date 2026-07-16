import { FileText } from "lucide-react";

interface PostsHeaderProps {
  total: number;
}

export default function PostsHeader({ total }: PostsHeaderProps) {
  return (
    <section className="space-y-4">
      <div className="inline-flex items-center gap-2 rounded-full border bg-primary/5 px-4 py-2 text-sm font-medium text-primary">
        <FileText className="h-4 w-4" />
        All Articles
      </div>

      <div className="space-y-3">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          Explore Our Blog
        </h1>

        <p className="max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg">
          Discover articles on software development, artificial intelligence,
          cloud computing, UI/UX, mobile development, digital transformation,
          and real world case studies.
        </p>

        <div className="flex flex-wrap items-center gap-3 pt-2 text-sm text-muted-foreground">
          <div className="rounded-full bg-muted px-3 py-1">
            {total} Articles
          </div>

          <div className="rounded-full bg-muted px-3 py-1">
            Updated Regularly
          </div>
        </div>
      </div>
    </section>
  );
}
