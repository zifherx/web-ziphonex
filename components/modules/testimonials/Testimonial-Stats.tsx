"use client";

import { Ban, Check, Edit, Quote } from "lucide-react";

import { IndicadoresStats } from "@/components/shared/Indicadores-Stats";

import { TESTIMONIAL_INDICATORS_PROPS } from "@/common/types/testimonial.props";
import { IIndicator } from "@/common/interfaces";

export function TestimonialStats({ isLoading, testimonial }: TESTIMONIAL_INDICATORS_PROPS) {
  const stats = {
    total: testimonial.length,
    published: testimonial.filter((a) => a.status === "published").length,
    inactive: testimonial.filter((a) => a.isActive === false).length,
    draft: testimonial.filter((a) => a.status === "draft").length,
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

  return <IndicadoresStats data={testimonial} isLoading={isLoading} indicators={indicators} />;
}
