"use client";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { describe } from "node:test";
import React, { useEffect, useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";
import { upDesc, upProjects } from "../animations";

const WorkHeadline = () => {
  const textSlide = useRef(null);
  const container = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    createAnimations();
  }, []);

  const createAnimations = () => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,

        scrub: 0.1,
        start: `-10% 80%`,
        end: `bottom 83%`,
      },

      ease: "none",
      stagger: 0.01,
    });
    tl.from(textSlide.current, {
      x: "-400",
    });
    tl.to(textSlide.current, {
      x: "100",
    });
  };
  return (
    <div className="h-[20rem] overflow-x-hidden relative ">
      <h2
        ref={textSlide}
        className="absolute  whitespace-nowrap z-10  top-0 left-[-15%]  font-bold text-[13rem] uppercase text-[#EDEDED] "
      >
        My projects
      </h2>
      <motion.p className="absolute z-10 top-24 text-[2rem] left-[30%] whitespace-nowrap">
        I am developer who cares deeply about <br /> user experience and
        functionality{" "}
      </motion.p>
    </div>
  );
};

export default WorkHeadline;
