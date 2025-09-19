import "./globals.css";

import { Analytics } from "@vercel/analytics/next";
import { geistMono, geistSans, playfairDisplay, sourceSans } from "@/fonts";
import { METADATA } from "@/common/utils/metadata";

export const metadata = METADATA;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable} ${sourceSans.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
