"use client";

import { HeroSection } from "./Hero-Section";

import { FloatingIcons } from "@/components/shared/Floating-Icons";

import { FLOATING_ICON_LIST } from "@/data";

export function ContactoView() {
  return (
    <main>
      <div className="fixed inset-0 pt-32 pb-20">
        <FloatingIcons iconList={FLOATING_ICON_LIST} />
      </div>
      <HeroSection />
    </main>
  );
}
