"use client";

import { HeroSection } from "./Hero-Section";
import { MisionVisionSection } from "./Mision-Vision-Section";
import { PrincipiosSection } from "./Principios-Section";

import { LIST_PRINCIPIOS } from "@/data";
import { TeamSection } from "./Team-Section";
import { CTASection } from "./CTA-Section";
import { StatsSection } from "./Stats-Section";

export function NosotrosView() {
  return (
    <div>
      <HeroSection />
      <MisionVisionSection />
      <PrincipiosSection principios={LIST_PRINCIPIOS} />
      <TeamSection />
      <StatsSection />
      <CTASection />
    </div>
  );
}
