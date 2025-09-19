"use client";

import { FloatingIcons } from "@/components/shared/Floating-Icons";
import { ParticlesFloating } from "@/components/shared/Particles-Floating";

import { HeroSection } from "./Hero-Section";
import { GridSection } from "./Grid-Section";

import { FLOATING_ICON_LIST } from "@/data";

export function ContactoView() {
  return (
    <div>
      <div className="fixed inset-0 bg-gradient-to-br from-background via-muted/30 to-background">
        <ParticlesFloating quantity={20} />
      </div>

      <div className="fixed inset-0 ">
        <FloatingIcons iconList={FLOATING_ICON_LIST} />
      </div>

      <HeroSection />

      <GridSection />
    </div>
  );
}
