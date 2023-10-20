"use client";
import React from "react";
import Image from "next/image";
import hero from "public/images/hero/hero-img.png";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import { BsArrowDownLeft } from "react-icons/bs";

const Hero = () => {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        scrub: 0.25,
        onUpdate: (e) => (direction = e.direction * -1),
      },
      x: "-300px",
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
    <div className="w-full h-[100vh] bg-[#C8C6C9] relative flex overflow-hidden ">
      <Image
        src={hero}
        fill
        alt=""
        className="object-cover max-w-[1300px] mx-auto "
      />
      <div className="absolute bottom-8 whitespace-nowrap ">
        <div
          ref={slider}
          className="m-0 flex  text-white text-[10rem] font-[500] relative"
        >
          <p ref={firstText}>Tomasz Malocha - </p>
          <p ref={secondText} className="absolute left-[100%]">
            Tomasz Malocha
          </p>
        </div>
      </div>
      <div className="z-10 text-white h-full mt-[23rem] w-[680px] flex justify-between mx-auto">
        <div className="flex flex-col">
          <BsArrowDownLeft className="text-[1.5rem]  self-end mb-7" />
          <h1 className="text-[1.1rem]">
            Next.js Full Stack <br /> Developer
          </h1>
        </div>
        <div className="mt-5 bg-black/90 flex items-center justify-center rounded-full w-28 h-28">
          <h2 className="">
            Based In <br /> Poland
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Hero;
