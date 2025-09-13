import { CTASection } from './components/CTA-Section';
import { HeroSection } from './components/Hero-Section';
import { ProcessSection } from './components/Process-Section';
import { ServiciosGrid } from './components/Servicios-Grid';

export default function ServiciosPage() {
  return (
    <div>
      <HeroSection />
      <ServiciosGrid />
      <ProcessSection />
      <CTASection />
    </div>
  );
}
