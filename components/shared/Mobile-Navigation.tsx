"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

import { MOBILE_NAV_PROP } from "@/common/types";

export function MobileNavigation({
  isOpen,
  setIsOpen,
  navMenu,
}: MOBILE_NAV_PROP) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-background border-b border-border"
        >
          <div className="px-4 py-4 space-y-4">
            {navMenu.map(({ href, id, label }) => (
              <Link
                key={id}
                href={href}
                className="block text-muted-foreground hover:text-primary transition-colors duration-200 font-medium"
                onClick={() => setIsOpen(false)}
              >
                {label}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
