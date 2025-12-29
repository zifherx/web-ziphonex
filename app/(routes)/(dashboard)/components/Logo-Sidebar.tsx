"use client";

import { useState } from "react";
import Image from "next/image";

import { useSidebar } from "@/components/ui/sidebar";
import { Building2 } from "lucide-react";

export function LogoSidebar() {
  const { open } = useSidebar();
  const [imageError, setImageError] = useState(false);

  if (imageError) {
    return (
      <div className="flex items-center justify-center mb-4 px-2">
        <div
          className={`bg-primary/10 rounded-lg flex items-center justify-center ${open ? "w-16 h-16" : "w-12 h-12"}`}
        >
          <Building2 className={`text-primary ${open ? "h-8 w-8" : "h-6 w-6"}`} />
        </div>
        {open && (
          <div className="ml-3">
            <h1 className="font-bold text-gray-800 text-base ">Ziphonex CMS</h1>
            <p className="text-xs text-gray-500">Panel Administrativo</p>
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      className={`flex items-center mb-4 transition-all duration-200 ${open ? "justify-start px-2" : "justify-center"}`}
    >
      {open ? (
        <div className="flex items-center gap-3">
          <div className="relative w-14 h-14 flex shrink-0">
            <Image
              src="/images/logo/logo.png"
              alt="Logo Ziphonex"
              fill
              className="rounded-full object-cover"
              priority
              onError={() => setImageError(true)}
              sizes="56px"
            />
          </div>

          <div className="flex flex-col">
            <h1 className="font-bold text-gray-800 text-base leading-tight">Ziphonex CMS</h1>
            <p className="text-xs text-gray-500 mt-0.5">Panel Administrativo</p>
          </div>
        </div>
      ) : (
        <div className="relative w-10 h-10">
          <Image
            src="/images/logo/logo.png"
            alt="Logo Ziphonex"
            fill
            className="rounded-full object-cover"
            priority
            onError={() => setImageError(true)}
            sizes="40px"
          />
        </div>
      )}
    </div>
  );
}
