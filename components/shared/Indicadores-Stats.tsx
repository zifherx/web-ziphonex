import { cn } from "@/lib/utils";
import { SkeletonStat } from "./Skeleton-Stat";

import { IIndicatorsProps } from "@/common/types";

export function IndicadoresStats<T>({ data, indicators, isLoading }: IIndicatorsProps<T>) {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        {indicators.map((_, index) => (
          <SkeletonStat key={index} />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
      {indicators.map(({ bgIcon, colorIcon, icon: Icon, id, title, value }) => (
        <div key={id} className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">{title}</p>
              <p className="text-2xl font-bold text-gray-900">{value}</p>
            </div>

            <div className={cn("w-12 h-12 rounded-lg flex items-center justify-center", bgIcon)}>
              <Icon className={cn("w-6 h-6", colorIcon)} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
