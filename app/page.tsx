"use client";
import About from "@/components/home-ui/about";
import Footer from "@/components/home-ui/footer";
import Gallery from "@/components/home-ui/gallery";
import Hero from "@/components/home-ui/hero";
import Work from "@/components/home-ui/work";
import WorkHeadline from "@/components/home-ui/headline";
import Preloader from "@/components/preloader/preloader";
import { AnimatePresence } from "framer-motion";

import Image from "next/image";
import { useEffect, useState } from "react";
import Headline from "@/components/home-ui/headline";

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
      <Headline
        title="My Projects"
        info="I am developer who cares deeply about user experience and functionality "
      />
      <Work />
      <Gallery />
      <Footer
        title="Contact Me"
        info="I am open for hiring, lets create something awesome together !"
      />
    </div>
  );
}
