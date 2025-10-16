"use client";

import { notFound } from "next/navigation";

import { BreadcrumbSection } from "./Breadcrumb-Section";
import { HeroSection } from "./Hero-Section";
import { StatsSection } from "./Stats-Section";
import { FeaturesSection } from "./Features-Section";
import { RelatedServices } from "./Related-Services";

import { SERVICE_VIEW_PROP } from "@/common/types";
import { getRelatedServiceBySlug, getServiceBySlug } from "@/data";

export function OneServiceView({ servicioSlug }: SERVICE_VIEW_PROP) {
  const serviceFounded = getServiceBySlug(servicioSlug);

  if (!serviceFounded) {
    notFound();
  }

  const relatedServices = getRelatedServiceBySlug(serviceFounded, 3);

  return (
    <>
      <BreadcrumbSection namePage={serviceFounded.title} />
      <HeroSection service={serviceFounded} />
      <StatsSection />
      <FeaturesSection service={serviceFounded} />
      {relatedServices.length > 0 && (
        <RelatedServices relatedServices={relatedServices} />
      )}
    </>
  );
}
