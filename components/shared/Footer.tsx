"use client"

import { FooterContent } from "./Footer-Content"
import { BottomBar } from "./Bottom-Bar"

export function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <FooterContent/>
        
        {/* Bottom Bar */}
        <BottomBar currentYear={currentYear}/>
      </div>
    </footer>
  )
}
