"use client";

import Link from "next/link";

import { BOTTOM_BAR_PROP } from "@/common/types";

export function BottomBar({ currentYear }: BOTTOM_BAR_PROP) {
  return (
    <div className="py-6 border-t border-background/20">
      <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <p className="text-background/60 text-sm">
          © {currentYear} Ziphonex. Todos los derechos reservados.
        </p>
        <div className="flex space-x-6">
          <Link
            href="#"
            className="text-background/60 hover:text-white text-sm transition-colors"
          >
            Política de Privacidad
          </Link>
          <Link
            href="#"
            className="text-background/60 hover:text-white text-sm transition-colors"
          >
            Términos de Servicio
          </Link>
        </div>
      </div>
    </div>
  );
}
