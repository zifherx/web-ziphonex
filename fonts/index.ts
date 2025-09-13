import { Geist, Geist_Mono, Playfair_Display, Source_Sans_3 } from "next/font/google";

export const playfairDisplay = Playfair_Display({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-playfair',
    weight: ['400', '600', '700', "900"]
})

export const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-source-sans",
  weight: ["300", "400", "500", "600", "700"],
});

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
