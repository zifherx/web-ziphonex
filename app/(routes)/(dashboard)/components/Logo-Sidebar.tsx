"use client";

import Image from "next/image";

import { useSidebar } from "@/components/ui/sidebar";

export function LogoSidebar() {
  const { open } = useSidebar();

  return (
    <div className="flex items-center justify-between mb-4">
      {open ? (
        <div className="flex items-center gap-3">
          <div className="w-16 h-16 bg-transparent rounded-lg flex items-center justify-between">
            <Image
              src="/images/logo/logo.png"
              alt="Logo Ziphonex"
              height={100}
              width={100}
              priority
              className="rounded-full"
            />
          </div>
          <div>
            <h1 className="font-bold text-gray-800">Ziphonex CMS</h1>
            <p className="text-xs text-gray-500">Panel Administrativo</p>
          </div>
        </div>
      ) : (
        <div className="p-0 mt-2 rounded-lg">
          <Image
            src="/images/logo/logo.png"
            alt="Logo Ziphonex"
            height={150}
            width={150}
            className="rounded-full"
            priority
          />
        </div>
      )}
    </div>
  );
}
