"use client";

import Image from "next/image";

export function LogoLogin() {
  return (
    <Image
      src="/images/logo/logo.png"
      alt="Logo Ziphonex"
      width={100}
      height={100}
      className="rounded-full w-12 h-12"
      priority
    />
  );
}
