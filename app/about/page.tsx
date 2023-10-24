"use client";
import Footer from "@/components/home-ui/footer";
import React, { useEffect, useState } from "react";
import AboutMe from "./components/aboutMe";
import Experience from "./components/experience";
import Landing from "./components/landing";
import Skills from "./components/skills";

const AboutPage = () => {
  const [loading, setIsLoading] = useState(true);

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
    <div className=" overflow-hidden">
      <Landing />
      <Skills />
      <Experience />
      <AboutMe />
      <Footer
        title="Contact Me"
        info="I am open for hiring, lets create something awesome together !"
      />
    </div>
  );
};

export default AboutPage;
