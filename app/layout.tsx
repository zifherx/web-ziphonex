import { ReactNode } from "react";
import type { Metadata } from "next";
import NextTopLoader from "nextjs-toploader";

import { Toaster } from "@/components/ui/toaster";

import { Roboto_Mono, Open_Sans } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "next-themes";

const roboto_mono = Roboto_Mono({ subsets: ["latin"] });
const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ziphonex Tech",
  description: "Innovación en cada byte",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={openSans.className} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <NextTopLoader
            color="#4364CB"
            initialPosition={0.08}
            crawlSpeed={500}
            height={5}
            crawl={true}
            showSpinner={true}
            easing="ease"
            speed={500}
            shadow="0 0 10px #4364CB,0 0 5px #4364CB"
          />
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
