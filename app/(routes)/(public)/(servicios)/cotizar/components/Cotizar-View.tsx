"use client";

import { useRef } from "react";
import { notFound, useSearchParams } from "next/navigation";

import { BreadcrumbSection } from "./Breadcrumb-Section";
import { HeroSection } from "./Hero-Section";
import { GridSection } from "./Grid-Section";

import { getServiceBySlug } from "@/data";

export function CotizarView() {
  const searchParams = useSearchParams();
  const servicio = searchParams.get("service");
  const serviceFound = getServiceBySlug(servicio!);

  if (!serviceFound) {
    notFound();
  }

  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="min-h-screen">
      <BreadcrumbSection
        namePage={serviceFound.title}
        slugPage={serviceFound.slug}
      />
      <HeroSection namePage={serviceFound.title} />
      <GridSection service={serviceFound} />
    </div>
  );
}
