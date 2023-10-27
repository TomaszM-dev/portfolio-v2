"use client";
import { ReactNode, useEffect, useState } from "react";

import React from "react";

import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export const slideUp = {
  initial: {
    scale: 1,
  },

  exit: {
    scale: 0,
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
  },
};

const PageAnim = ({ children }: { children: ReactNode }) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsHydrated(false);
    setTimeout(() => {
      setIsHydrated(true);
    }, 2500);
  }, [pathname]);
  return (
    <>
      <AnimatePresence mode="wait">
        {!isHydrated && (
          <>
            <motion.div className="h-screen w-screen fixed z-10 flex items-center justify-center text-white bg-black scale-0"></motion.div>
          </>
        )}
      </AnimatePresence>
      <AnimatePresence mode="wait">
        {isHydrated && (
          <motion.div
            className="scale-1"
            variants={slideUp}
            exit={"exit"}
            initial="initial"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PageAnim;
