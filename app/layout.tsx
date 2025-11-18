import "./globals.css";

import { StackProvider, StackTheme } from "@stackframe/stack";
import { stackClientApp } from "../stack/client";
import { Analytics } from "@vercel/analytics/next";

import { Toaster } from "@/components/ui/sonner";

import { geistMono, geistSans, playfairDisplay, sourceSans } from "@/fonts";
import { METADATA } from "@/common/utils/metadata";
import { GENERAL_TYPE } from "@/common/types";

export const metadata = METADATA;

export default function RootLayout({ children }: Readonly<GENERAL_TYPE>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable} ${sourceSans.variable} antialiased`}
      >
        <StackProvider app={stackClientApp}>
          <StackTheme>
            {children}
            <Toaster />
            <Analytics />
          </StackTheme>
        </StackProvider>
      </body>
    </html>
  );
}
