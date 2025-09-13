"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  Layers,
  Shield,
  Target,
  Users,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import { PROCESS_LIST } from "@/data";

export function ProcessSection() {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  return (
    <section className="py-32 bg-gradient-to-br from-muted/30 via-background to-muted/30 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="font-playfair font-bold text-4xl md:text-6xl text-foreground mb-6">
            Nuestro <span className="text-primary">Proceso Interactivo</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Metodología probada que garantiza resultados excepcionales en cada
            proyecto
          </p>
          <Badge className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 text-lg border-0">
            ✨ Haz clic en cada paso para explorar
          </Badge>
        </motion.div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Connection Line */}
          <div className="absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary opacity-20 hidden lg:block" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
            {PROCESS_LIST.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
                onMouseEnter={() => setHoveredStep(step.id)}
                onMouseLeave={() => setHoveredStep(null)}
              >
                {/* Step Card */}
                <motion.div
                  className="relative cursor-pointer group"
                  onClick={() =>
                    setActiveStep(activeStep === step.id ? null : step.id)
                  }
                  whileHover={{ y: -10 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Card
                    className={`
                    relative overflow-hidden border-2 transition-all duration-500
                    ${
                      activeStep === step.id
                        ? "border-primary shadow-2xl shadow-primary/25 bg-gradient-to-br from-primary/5 to-secondary/5"
                        : "border-muted hover:border-primary/50 hover:shadow-xl"
                    }
                  `}
                  >
                    <CardContent className="p-6 text-center">
                      {/* Step Number */}
                      <motion.div
                        className={`
                          absolute -top-1 -right-1 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg
                          bg-gradient-to-br ${step.color}
                        `}
                        animate={
                          activeStep === step.id
                            ? {
                                scale: [1, 1.2, 1],
                                rotate: [0, 360, 0],
                              }
                            : {}
                        }
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                        }}
                      >
                        {step.id}
                      </motion.div>

                      {/* Icon */}
                      <motion.div
                        className={`
                          w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center relative overflow-hidden
                          bg-gradient-to-br ${step.bgColor}
                          ${activeStep === step.id ? "shadow-lg" : ""}
                        `}
                        whileHover={{ rotate: [0, -10, 10, 0] }}
                        transition={{ duration: 0.5 }}
                      >
                        <step.icon
                          className={`
                          h-10 w-10 transition-colors duration-300
                          ${
                            activeStep === step.id
                              ? "text-primary"
                              : "text-muted-foreground group-hover:text-primary"
                          }
                        `}
                        />

                        {/* Glow Effect */}
                        {(activeStep === step.id ||
                          hoveredStep === step.id) && (
                          <motion.div
                            className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-20 blur-xl`}
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{
                              duration: 2,
                              repeat: Number.POSITIVE_INFINITY,
                            }}
                          />
                        )}
                      </motion.div>

                      {/* Content */}
                      <h3
                        className={`
                        font-playfair font-semibold text-xl mb-3 transition-colors duration-300
                        ${
                          activeStep === step.id
                            ? "text-primary"
                            : "text-foreground group-hover:text-primary"
                        }
                      `}
                      >
                        {step.title}
                      </h3>

                      <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300 mb-4">
                        {step.description}
                      </p>

                      {/* Duration Badge */}
                      <Badge
                        variant="outline"
                        className={`
                        transition-all duration-300
                        ${
                          activeStep === step.id
                            ? "border-primary text-primary"
                            : "border-muted-foreground/30"
                        }
                      `}
                      >
                        ⏱️ {step.duration}
                      </Badge>

                      {/* Hover Indicator */}
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: activeStep === step.id ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                      />
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Expanded Details */}
                <AnimatePresence>
                  {activeStep === step.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0, y: -20 }}
                      animate={{ opacity: 1, height: "auto", y: 0 }}
                      exit={{ opacity: 0, height: 0, y: -20 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className="mt-6"
                    >
                      <Card className="border-0 shadow-2xl bg-gradient-to-br from-white to-muted/20 backdrop-blur-sm">
                        <CardContent className="p-6">
                          <div
                            className={`w-full h-1 bg-gradient-to-r ${step.color} rounded-full mb-4`}
                          />

                          <h4 className="font-playfair font-semibold text-lg text-foreground mb-3">
                            {step.title} - Detalles
                          </h4>

                          <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                            {step.details}
                          </p>

                          {/* Features List */}
                          <div className="space-y-3 mb-6">
                            <h5 className="font-semibold text-foreground text-sm">
                              Incluye:
                            </h5>
                            {step.features.map(({ id, name }) => (
                              <motion.div
                                key={id}
                                className="flex items-center text-sm text-muted-foreground"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: id * 0.1 }}
                              >
                                <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                                {name}
                              </motion.div>
                            ))}
                          </div>

                          <Button
                            size="sm"
                            className={`w-full bg-gradient-to-r ${step.color} text-white border-0 hover:opacity-90 transition-all duration-300`}
                          >
                            Más Información
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </CardContent>
                      </Card>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Process Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: "5", label: "Fases Estructuradas", icon: Layers },
            { number: "98%", label: "Proyectos Exitosos", icon: Target },
            { number: "24/7", label: "Soporte Continuo", icon: Shield },
            { number: "100%", label: "Transparencia Total", icon: Users },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center group cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full flex items-center justify-center group-hover:from-primary/20 group-hover:to-secondary/20 transition-all duration-300"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
              >
                <stat.icon className="h-8 w-8 text-primary" />
              </motion.div>
              <div className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-1">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
