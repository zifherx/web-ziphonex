"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, Quote, Users } from "lucide-react";

import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

import { CARD_CASO_EXITO_PROP } from "@/common/types";
import Image from "next/image";

export function CardCasoExito({ cliente }: CARD_CASO_EXITO_PROP) {
  const {
    id,
    category,
    results,
    description,
    title,
    technologies,
    testimonial,
    image,
    link_website,
  } = cliente;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      viewport={{ once: true }}
      className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
        id % 2 === 1 ? "md:grid-flow-col-dense" : ""
      }`}
    >
      {/* Content */}
      <div className={`space-y-6 ${id % 2 === 1 ? "md:col-start-2" : ""}`}>
        <div className="space-y-4">
          <Badge variant="secondary" className="text-white">
            {category}
          </Badge>
          <h2 className="font-playfair font-bold text-3xl md:text-4xl text-foreground">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground">{description}</p>
        </div>

        {/* Results */}
        <div className="grid grid-cols-3 gap-4">
          {results.map(({ id, label, metric }) => (
            <div key={id} className="text-center p-4 bg-muted/50 rounded-lg">
              <div className="text-2xl font-bold text-primary">{metric}</div>
              <div className="text-sm text-muted-foreground">{label}</div>
            </div>
          ))}
        </div>

        {/* Technologies */}
        <div className="space-y-3">
          <h3 className="font-semibold text-foreground">
            Tecnologías Utilizadas:
          </h3>
          <div className="flex flex-wrap gap-2">
            {technologies.map(({ id, name }) => (
              <Badge key={id} variant="outline" className="text-xs">
                {name}
              </Badge>
            ))}
          </div>
        </div>

        {/* Testimonial */}
        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="p-6">
            <Quote className="h-8 w-8 text-primary mb-4" />
            <p className="text-muted-foreground italic mb-4">
              "{testimonial.text}"
            </p>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                <Users className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="font-semibold text-foreground">
                  {testimonial.author}
                </div>
                <div className="text-sm text-muted-foreground">
                  {testimonial.position}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Button
          className="bg-primary hover:bg-accent group cursor-pointer"
          asChild
        >
          <Link href={link_website} target="_blank" rel="noopener noreferrer">
            Ver Proyecto Completo
            <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </div>

      {/* Image */}
      <div className={`${id % 2 === 1 ? "md:col-start-1" : ""}`}>
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className="relative overflow-hidden rounded-2xl shadow-2xl"
        >
          <Image
            src={`/images/casos-exito/${image}`}
            alt={title}
            width={600}
            height={400}
            className="w-full h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </motion.div>
      </div>
    </motion.div>
  );
}
