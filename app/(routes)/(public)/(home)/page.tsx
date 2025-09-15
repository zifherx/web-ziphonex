import { HeroSection } from "./components/Hero-Section";
import { StatsSection } from "./components/Stats-Section";
import { ServiceSection } from "./components/Service-Section";
import { ProcessSection } from "./components/Process-Section";
import { TestimonialsSection } from "./components/Testimonials-Section";
import { NewsletterSection } from "./components/Newsletter-Section";

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <StatsSection />
      <ServiceSection />
      <ProcessSection />
      <TestimonialsSection />
      <NewsletterSection />
    </div>
  );
}
