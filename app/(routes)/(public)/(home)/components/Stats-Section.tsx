"use client";

import { useRef } from "react";

import { TitleSection } from "@/components/shared/Title-Section";

export function StatsSection() {
  const ref = useRef(null);

  return (
    <section
      ref={ref}
      className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <TitleSection
          plainTitle="Números que Hablan"
          colorTitle="por Nosotros"
          description="Nuestra trayectoria está respaldada por resultados concretos y la confianza de nuestros clientes"
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8"></div>
      </div>
    </section>
  );
}
