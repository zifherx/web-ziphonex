"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

import { Button } from "../ui/button";
import { DesktopMenu } from "./Desktop-Menu";
import { MobileNavigation } from "./Mobile-Navigation";

import { HEADER_MENU } from "@/data";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-sm border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="relative w-20 h-20"
            >
              <Image
                src="/images/logo/logo.png"
                alt="Ziphonex Logo"
                fill
                className="object-contain rounded-lg"
              />
            </motion.div>
          </Link>

          {/* Desktop Menu */}
          <DesktopMenu navMenu={HEADER_MENU} />

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="lg"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-8 w-8" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <MobileNavigation
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        navMenu={HEADER_MENU}
      />
    </nav>
  );
}
