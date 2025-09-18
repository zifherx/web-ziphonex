import { FormularioCard } from "./Formulario-Card";
import { InfoCards } from "./Info-Cards";

export function GridSection() {
  return (
    <section className="relative z-20 py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <FormularioCard />
          <InfoCards />
        </div>
      </div>
    </section>
  );
}
