"use client";
import React, { useLayoutEffect } from "react";
import Image from "next/image";
import hero from "public/images/hero/hero.png";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import { BsArrowDownLeft } from "react-icons/bs";
import { GiDiamonds } from "react-icons/gi";
import Navbar from "../nav";
import { motion } from "framer-motion";
import { slideUp } from "../preloader/anim";
import { upDesc, upText } from "../animations";

const Hero = () => {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => (direction = e.direction * -1),
      },
      x: "-500px",
    });
    requestAnimationFrame(animation);
  }, []);

  const animation = () => {
    if (xPercent < -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    requestAnimationFrame(animation);
    xPercent += 0.1 * direction;
  };

  return (
    <div className="w-full h-[92vh] bg-[#C8C6C9] relative flex overflow-hidden ">
      <Image
        src={hero}
        fill
        quality={100}
        priority={true}
        alt=""
        className="object-cover max-w-[1300px] mx-auto "
      />
      <motion.div
        variants={upText}
        initial="initial"
        whileInView="animate"
        exit="exit"
        viewport={{ once: true }}
        className="absolute bottom-16 whitespace-nowrap "
      >
        <div
          ref={slider}
          className="m-0 flex  text-white text-[10rem] font-[600] relative"
        >
          <p ref={firstText}>Tomasz Malocha -</p>
          <p ref={secondText} className="absolute left-[100%]">
            Tomasz Malocha
          </p>
        </div>
      </motion.div>
      <motion.div
        variants={upDesc}
        initial="initial"
        whileInView="animate"
        exit="exit"
        viewport={{ once: true }}
        className="z-10  whitespace-nowrap mt-[17rem] text-white h-full  w-[740px] flex justify-between mx-auto"
      >
        <div data-scroll data-scroll-speed="0.2" className="flex flex-col">
          <BsArrowDownLeft className="text-[1.7rem]  self-end mb-7" />
          <h1 className="text-[1.5rem]">
            Next.js Full Stack <br /> Developer
          </h1>
        </div>
        <div
          data-scroll
          data-scroll-speed="0.2"
          className="mt-5 bg-black/90 flex items-center justify-center rounded-full w-28 h-28"
        >
          <h2 className="">
            Based In <br /> Poland
          </h2>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
