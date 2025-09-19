"use client";

import { LIST_CASOS_EXITO } from "@/data";
import { CardCasoExito } from "@/components/shared/Card-Caso-Exito";

export function CasosSection() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="space-y-24">
          {LIST_CASOS_EXITO.map((caseStudy, index) => (
            <CardCasoExito key={index} cliente={caseStudy} />
          ))}
        </div>
      </div>
    </section>
  );
}
