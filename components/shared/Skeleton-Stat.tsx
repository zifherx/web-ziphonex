import { Skeleton } from "../ui/skeleton";

export function SkeletonStat() {
  return (
    <div className="flex items-center justify-between shadow-md p-4 rounded-xl">
      <div className="space-y-2">
        <Skeleton className="h-4 w-[100px] rounded-xl" />
        <Skeleton className="h-4 w-[100px] rounded-xl" />
      </div>
      <Skeleton className="w-12 h-12 rounded-lg" />
    </div>
  );
}
