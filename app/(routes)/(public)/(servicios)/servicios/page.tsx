"use client";

import { useState } from "react";

import { CTASection } from "./components/CTA-Section";
import { HeroSection } from "./components/Hero-Section";
import { ProcessSection } from "./components/Process-Section";
import { ServiciosGrid } from "./components/Servicios-Grid";

import { SERVICES_LIST } from "@/data";

export default function ServiciosPage() {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  return (
    <div>
      <HeroSection />
      <ServiciosGrid
        servicios={SERVICES_LIST}
        hoveredService={hoveredService}
        setHoveredService={setHoveredService}
      />
      <ProcessSection />
      <CTASection />
    </div>
  );
}
