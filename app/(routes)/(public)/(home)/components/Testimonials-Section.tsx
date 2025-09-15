"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, motion } from "framer-motion";
import { TitleSection } from "@/components/shared/Title-Section";
import { TESTIMONIAL_LIST } from "@/data";
import { CardTestimonial } from "@/components/shared/Card-Testimonial";
import { Button } from "@/components/ui/button";

export function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalTestimonials = TESTIMONIAL_LIST.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const maxIndex = totalTestimonials - 3;
        return prevIndex >= maxIndex ? 0 : prevIndex + 1;
      });
    }, 5000);
  }, [totalTestimonials]);

  return (
    <section
      ref={ref}
      className="py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TitleSection
          plainTitle="Testimonios que"
          colorTitle="Inspiran"
          description="La satisfacción de nuestros clientes es nuestro mayor logro. Descubre cómo hemos transformado suss negocios y superado sus expectativas."
        />

        <div className="relative max-w-7xl mx-auto">
          <div className="overflow-hidden">
            <motion.div
              animate={{ x: -currentIndex * (100 / 3) + "%" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
              style={{
                transform: `translateX(-${currentIndex * (100 / 3)}%)`,
                width: `${Math.ceil(totalTestimonials / 3) * 30}%`,
                display: "flex",
              }}
            >
              {TESTIMONIAL_LIST.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-full sm:w-1/2 md:w-1/3 shrink-0 px-3"
                >
                  <CardTestimonial testimonial={testimonial} />
                </div>
              ))}
            </motion.div>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalTestimonials - 2 }).map((_, index) => (
              <Button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-primary scale-125"
                    : "bg-primary/30 hover:bg-primary/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
