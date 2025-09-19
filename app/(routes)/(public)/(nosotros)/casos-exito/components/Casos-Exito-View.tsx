import { CasosSection } from "./Casos-Section";
import { HeroSection } from "./Hero-Section";
import { StatsSection } from "./Stats-Section";

export function CasosExitoView() {
  return (
    <div>
      <HeroSection />
      <StatsSection />
      <CasosSection />
    </div>
  );
}
