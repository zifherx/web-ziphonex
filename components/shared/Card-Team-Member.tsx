"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Linkedin, Twitter } from "lucide-react";
import { FaTiktok } from "react-icons/fa";

import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

import { TEAM_MEMBER_PROP } from "@/common/types";

export function CardTeamMember({ member }: TEAM_MEMBER_PROP) {
  const { description, id, image, name, role } = member;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: id * 0.1 }}
      viewport={{ once: true }}
      className="group cursor-pointer"
    >
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white via-blue-50/50 to-purple-50/50 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:rotate-1">
        {/* Efecto de brillo animado */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />

        {/* Imagen con efectos */}
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={`/images/team/${image}`}
            alt={name}
            fill
            className="object-contain transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />

          {/* Overlay con gradiente dinámico */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

          {/* Iconos sociales que aparecen en hover */}
          <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
            <div className="w-8 h-8 rounded-full bg-gray-500/60 backdrop-blur-sm flex items-center justify-center hover:bg-blue-500 hover:scale-110 transition-all duration-300">
              <Linkedin className="h-4 w-4 text-white" />
            </div>
            <div className="w-8 h-8 rounded-full bg-gray-500/60 backdrop-blur-sm flex items-center justify-center hover:bg-purple-500 hover:scale-110 transition-all duration-300">
              <FaTiktok className="h-4 w-4 text-white" />
            </div>
          </div>

          {/* Badge flotante con rol */}
          <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
            <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white/30">
              {role}
            </Badge>
          </div>
        </div>

        {/* Contenido con animaciones */}
        <div className="p-6 space-y-4 relative">
          {/* Decoración geométrica */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

          <div className="space-y-3">
            <h3 className="font-playfair text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
              {name}
            </h3>

            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse" />
              <p className="text-primary text-sm font-semibold uppercase tracking-wider">
                {role}
              </p>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
              {description}
            </p>
          </div>

          {/* Botón de acción que aparece en hover */}
          <div className="pt-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
            <Button
              size="sm"
              variant="outline"
              className="w-full border-primary/20 text-primary hover:bg-primary hover:text-white transition-all duration-300 bg-transparent"
            >
              Ver Perfil
              <ArrowRight className="ml-2 h-3 w-3" />
            </Button>
          </div>
        </div>

        {/* Efecto de partículas en las esquinas */}
        <div className="absolute top-2 left-2 w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-ping" />
        <div className="absolute top-2 right-2 w-1 h-1 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-ping" />
        <div className="absolute bottom-2 left-2 w-1 h-1 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-600 animate-ping" />
        <div className="absolute bottom-2 right-2 w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-800 animate-ping" />
      </div>
    </motion.div>
  );
}
