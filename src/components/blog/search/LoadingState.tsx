import { Skeleton } from "@/components/ui/skeleton";

interface LoadingStateProps {
  count?: number;
}

export default function LoadingState({ count = 5 }: LoadingStateProps) {
  return (
    <div className="space-y-2 p-2">
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="flex items-center gap-4 rounded-lg p-3">
          <Skeleton className="h-16 w-24 shrink-0 rounded-lg" />

          <div className="flex flex-1 flex-col gap-2">
            <Skeleton className="h-3 w-24 rounded-full" />

            <Skeleton className="h-5 w-3/4 rounded-full" />

            <Skeleton className="h-3 w-full rounded-full" />

            <Skeleton className="h-3 w-1/2 rounded-full" />
          </div>
        </div>
      ))}
    </div>
  );
}
