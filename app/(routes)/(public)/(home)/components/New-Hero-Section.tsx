"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { NUMBERS } from "@/common/utils/Constants";
import { CardHero } from "@/components/shared/Card-Hero";
import { MAIN_HERO_SLIDES } from "@/data";
import { AnimatedDot } from "@/components/shared/Animated-Dot";

export function NewHeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slidesData = MAIN_HERO_SLIDES;
  const SLIDE_DURATION = NUMBERS.FIVE_THOUSAND;
  const PROGRESS_INTERVAL = NUMBERS.FIFTY;
  const currentHero = slidesData[currentSlide];

  useEffect(() => {
    if (isPaused) return;

    const progresssIncrement = PROGRESS_INTERVAL / SLIDE_DURATION;

    const timer = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + progresssIncrement;

        if (newProgress >= 1) {
          setCurrentSlide((current) => (current + 1) % slidesData.length);
          return 0;
        }

        return newProgress;
      });
    }, PROGRESS_INTERVAL);

    return () => clearInterval(timer);
  }, [currentSlide, isPaused, slidesData.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setProgress(0);
  };

  return (
    <section
      className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-linear-to-br from-slate-50 via-blue-50/50 to-purple-50/50"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ rotate: 360, scale: [1, 1.2, 1] }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-linear-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"
        />

        <motion.div
          animate={{ rotate: 360, scale: [1.2, 1, 1.2] }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-linear-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl  mx-auto text-center">
        <AnimatePresence mode="wait">
          <CardHero key={currentHero.id} contentCard={currentHero} />
        </AnimatePresence>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {slidesData.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className="focus:outline-none focus:ring-2 focus:ring-white/50 rounded-full p-1"
            aria-label={`Ir a diapositiva ${index + 1}`}
          >
            <AnimatedDot
              isActive={index === currentSlide}
              progress={index === currentSlide ? progress : 0}
            />
          </button>
        ))}
      </div>
    </section>
  );
}
