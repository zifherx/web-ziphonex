"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import { Button } from "../ui/button";

import { Logo } from "./Logo";
import { NewDesktopMenu } from "./New-Desktop-Menu";
import { MobileMenu } from "./Mobile-Menu";

export function NewHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full bg-background/95 backdrop-blur-lg border-b border-border/50 z-50 shadow-lg shadow-primary/5"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-0">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Logo
            badge="Agencia Digital"
            name="Ziphonex"
            href="/"
            imageSource="/images/logo/logo.png"
          />

          {/* Desktop-Menu */}
          <NewDesktopMenu />

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="ml-6"
          >
            <Button className="bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300 font-medium">
              Cotizar Proyecto
            </Button>
          </motion.div>

          {/* Mobile-Menu */}
          <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} navMenu={[]} />
        </div>
      </div>
    </motion.nav>
  );
}
