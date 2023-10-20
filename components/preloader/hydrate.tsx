"use client";
import { ReactNode, useEffect, useState } from "react";

import React from "react";
import Preloader from "./preloader";
import { AnimatePresence } from "framer-motion";

const Hydrate = ({ children }: { children: ReactNode }) => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsHydrated(true);
    }, 2500);
  }, []);
  return (
    <div>
      <AnimatePresence mode="wait">
        {!isHydrated && (
          <div>
            <Preloader />
          </div>
        )}
      </AnimatePresence>
      {isHydrated && <>{children}</>}
    </div>
  );
};

export default Hydrate;
