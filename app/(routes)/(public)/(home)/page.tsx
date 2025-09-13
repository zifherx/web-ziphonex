import { HeroSection } from "./components/Hero-Section";
import { StatsSection } from "./components/Stats-Section";
import { ServiceSection } from "./components/Service-Section";

export default function HomePage() {
  return (
    <div>
      <HeroSection/>
      <StatsSection/>
      <ServiceSection/>
    </div>
  )
}
