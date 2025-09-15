"use client";

import { notFound } from "next/navigation";

import { BreadcrumbSection } from "./Breadcrumb-Section";
import { HeroSection } from "./Hero-Section";
import { FeaturesSection } from "./Features-Section";

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
      <FeaturesSection service={serviceFounded} />
    </>
  );
}
