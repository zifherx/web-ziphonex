import { Ban, Check, Edit, Quote } from "lucide-react";

import { SkeletonStat } from "@/components/shared/Skeleton-Stat";

import { SOCIALMEDIA_INDICATORS_PROPS } from "@/common/types/socialmedia-props";
import { ITrustIndicators } from "@/common/interfaces/social-media.interface";

import { cn } from "@/lib/utils";

export function IndicadoresSection({
  isLoading,
  socialMedia,
}: SOCIALMEDIA_INDICATORS_PROPS) {
  const arraySocialMedia = {
    published: socialMedia.filter((a) => a.status === "published").length,
    inactive: socialMedia.filter((a) => a.isActive === false).length,
    draft: socialMedia.filter((a) => a.status === "draft").length,
  };

  const arrayIndicadores: ITrustIndicators[] = [
    {
      id: 1,
      title: "Total",
      value: socialMedia.length,
      icon: Quote,
      bgIcon: "bg-blue-100",
      colorIcon: "text-blue-600",
    },
    {
      id: 2,
      title: "Publicados",
      value: arraySocialMedia.published,
      icon: Check,
      bgIcon: "bg-green-100",
      colorIcon: "text-green-600",
    },
    {
      id: 3,
      title: "Inactivos",
      value: arraySocialMedia.inactive,
      icon: Ban,
      bgIcon: "bg-red-100",
      colorIcon: "text-red-600",
    },
    {
      id: 4,
      title: "Borradores",
      value: arraySocialMedia.draft,
      icon: Edit,
      bgIcon: "bg-gray-100",
      colorIcon: "text-gray-600",
    },
  ];

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <SkeletonStat />
        <SkeletonStat />
        <SkeletonStat />
        <SkeletonStat />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
      {arrayIndicadores.map(
        ({ bgIcon, colorIcon, icon: Icon, id, title, value }) => (
          <div key={id} className="bg-white rounded-lg p-4 border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">{title}</p>
                <p className="text-2xl font-bold text-gray-900">{value}</p>
              </div>

              <div
                className={cn(
                  "w-12 h-12 rounded-lg flex items-center justify-center",
                  bgIcon
                )}
              >
                <Icon className={`w-6 h-6 ${colorIcon}`} />
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
}
