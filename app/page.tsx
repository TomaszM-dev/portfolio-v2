"use client";
import About from "@/components/home-ui/about";
import Hero from "@/components/home-ui/hero";
import Work from "@/components/home-ui/work";
import WorkHeadline from "@/components/home-ui/work-headline";
import Preloader from "@/components/preloader/preloader";
import { AnimatePresence } from "framer-motion";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
      console.log(locomotiveScroll);

      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);
  return (
    <div className="">
      <Hero />
      <About />
      <WorkHeadline />
      <Work />
    </div>
  );
}
