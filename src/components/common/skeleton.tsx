import { Skeleton } from "@/components/ui/skeleton";

export function BlogCardSkeleton() {
  return (
    <div className="overflow-hidden rounded-lg border bg-card max-w-7xl!">
      <Skeleton className="aspect-[16/9] w-full" />

      <div className="space-y-4 p-5">
        <Skeleton className="h-5 w-24 rounded-full" />

        <Skeleton className="h-7 w-5/6" />

        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-11/12" />
        <Skeleton className="h-4 w-3/4" />

        <div className="flex items-center justify-between pt-3">
          <Skeleton className="h-10 w-40 rounded-full" />
          <Skeleton className="h-4 w-20" />
        </div>
      </div>
    </div>
  );
}

export function ArticleHeroSkeleton() {
  return (
    <section className="space-y-8 max-w-7xl!">
      <Skeleton className="h-6 w-48" />

      <Skeleton className="h-14 w-5/6" />

      <Skeleton className="h-6 w-full" />
      <Skeleton className="h-6 w-4/5" />

      <div className="flex items-center gap-6">
        <Skeleton className="h-12 w-12 rounded-full" />
        <Skeleton className="h-5 w-40" />
        <Skeleton className="h-5 w-28" />
      </div>

      <Skeleton className="aspect-[16/8] w-full rounded-2xl" />
    </section>
  );
}

import Container from "@/components/layout/Container";

export function HomePageSkeleton() {
  return (
    <Container className="space-y-16 py-12 max-w-7xl!">
      <ArticleHeroSkeleton />

      <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <BlogCardSkeleton key={index} />
        ))}
      </section>
    </Container>
  );
}

export function PostsPageSkeleton() {
  return (
    <Container className="space-y-10 py-12 max-w-7xl!">
      <div className="space-y-4">
        <div className="h-10 w-72 rounded bg-muted animate-pulse" />
        <div className="h-5 w-96 rounded bg-muted animate-pulse" />
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 9 }).map((_, i) => (
          <BlogCardSkeleton key={i} />
        ))}
      </div>
    </Container>
  );
}

export function CategoryPageSkeleton() {
  return (
    <Container className="space-y-16 py-12 max-w-7xl!">
      <ArticleHeroSkeleton />

      <section className="space-y-8">
        <div className="flex items-center justify-between">
          <Skeleton className="h-8 w-56" />

          <Skeleton className="h-10 w-36 rounded-lg" />
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <BlogCardSkeleton key={index} />
          ))}
        </div>
      </section>
    </Container>
  );
}

export function AuthorPageSkeleton() {
  return (
    <Container className="space-y-16 py-12 max-w-7xl!">
      <section className="rounded-2xl border bg-card p-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-center">
          <Skeleton className="h-36 w-36 rounded-full" />

          <div className="flex-1 space-y-4">
            <Skeleton className="h-10 w-72" />

            <Skeleton className="h-6 w-52" />

            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-5/6" />
            <Skeleton className="h-5 w-4/6" />

            <div className="flex gap-3 pt-2">
              <Skeleton className="h-10 w-10 rounded-full" />
              <Skeleton className="h-10 w-10 rounded-full" />
              <Skeleton className="h-10 w-10 rounded-full" />
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <Skeleton className="h-8 w-64" />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <BlogCardSkeleton key={index} />
          ))}
        </div>
      </section>
    </Container>
  );
}

export function ArticlePageSkeleton() {
  return (
    <Container className="space-y-14 py-12 max-w-7xl!">
      <ArticleHeroSkeleton />

      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">
        <article className="space-y-6">
          {Array.from({ length: 14 }).map((_, index) => (
            <Skeleton
              key={index}
              className={`h-5 ${
                index % 4 === 0
                  ? "w-full"
                  : index % 4 === 1
                    ? "w-11/12"
                    : index % 4 === 2
                      ? "w-5/6"
                      : "w-4/6"
              }`}
            />
          ))}

          <Skeleton className="my-10 aspect-video w-full rounded-2xl" />

          {Array.from({ length: 12 }).map((_, index) => (
            <Skeleton
              key={`bottom-${index}`}
              className={`h-5 ${
                index % 3 === 0
                  ? "w-full"
                  : index % 3 === 1
                    ? "w-10/12"
                    : "w-8/12"
              }`}
            />
          ))}
        </article>

        <aside className="space-y-8">
          <div className="rounded-2xl border bg-card p-6">
            <Skeleton className="mb-6 h-7 w-44" />

            <div className="space-y-4">
              <Skeleton className="h-4 w-11/12" />
              <Skeleton className="h-4 w-9/12" />
              <Skeleton className="h-4 w-10/12" />
              <Skeleton className="h-4 w-8/12" />
            </div>
          </div>

          <div className="rounded-2xl border bg-card p-6">
            <Skeleton className="mb-4 h-7 w-40" />

            <Skeleton className="mb-4 h-5 w-full" />
            <Skeleton className="mb-6 h-5 w-5/6" />

            <Skeleton className="h-11 w-full rounded-lg" />
          </div>
        </aside>
      </div>
    </Container>
  );
}

export default function SearchPageSkeleton() {
  return (
    <Container className="space-y-10 py-12 max-w-7xl!">
      <div className="space-y-4">
        <Skeleton className="h-10 w-64" />

        <Skeleton className="h-12 w-full rounded-lg" />
      </div>

      <div className="space-y-6">
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index} className="flex gap-5 rounded-lg border bg-card p-5">
            <Skeleton className="h-32 w-48 rounded-lg" />

            <div className="flex flex-1 flex-col justify-center space-y-4">
              <Skeleton className="h-5 w-28 rounded-full" />

              <Skeleton className="h-7 w-4/5" />

              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-10/12" />

              <Skeleton className="h-4 w-40" />
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}