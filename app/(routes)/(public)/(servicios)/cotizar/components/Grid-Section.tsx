"use client";

import { InfoProduct } from "./Info-Product";
import { FormularioProduct } from "./Formulario-Product";

import { SERVICE_GRID_PROP } from "@/common/types";

export function GridSection({ service }: SERVICE_GRID_PROP) {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InfoProduct service={service} />
          <FormularioProduct />
        </div>
      </div>
    </section>
  );
}
