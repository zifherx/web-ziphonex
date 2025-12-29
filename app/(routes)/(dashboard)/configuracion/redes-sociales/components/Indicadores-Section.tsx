import { Ban, Check, Edit, Quote } from "lucide-react";

import { IndicadoresStats } from "@/components/shared/Indicadores-Stats";

import { SOCIALMEDIA_INDICATORS_PROPS } from "@/common/types/socialmedia.props";
import { IIndicator } from "@/common/interfaces";

export function IndicadoresSection({ isLoading, socialMedia }: SOCIALMEDIA_INDICATORS_PROPS) {
  const stats = {
    total: socialMedia.length,
    published: socialMedia.filter((a) => a.status === "published").length,
    inactive: socialMedia.filter((a) => a.isActive === false).length,
    draft: socialMedia.filter((a) => a.status === "draft").length,
  };

  const indicators: IIndicator[] = [
    {
      id: 1,
      title: "Total",
      value: stats.total,
      icon: Quote,
      bgIcon: "bg-blue-100",
      colorIcon: "text-blue-600",
    },
    {
      id: 2,
      title: "Publicados",
      value: stats.published,
      icon: Check,
      bgIcon: "bg-green-100",
      colorIcon: "text-green-600",
    },
    {
      id: 3,
      title: "Inactivos",
      value: stats.inactive,
      icon: Ban,
      bgIcon: "bg-red-100",
      colorIcon: "text-red-600",
    },
    {
      id: 4,
      title: "Borradores",
      value: stats.draft,
      icon: Edit,
      bgIcon: "bg-gray-100",
      colorIcon: "text-gray-600",
    },
  ];

  return <IndicadoresStats data={socialMedia} isLoading={isLoading} indicators={indicators} />;
}
