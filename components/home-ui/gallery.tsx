import React from "react";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useTransform, useScroll, motion } from "framer-motion";
import Lenis from "@studio-freight/lenis";

const images = [
  "1.png",
  "2.png",
  "3.png",
  "4.png",
  "5.png",
  "6.png",
  "7.png",
  "8.png",
  "9.png",
  "10.png",
  "11.png",
  "12.png",
];

const Gallery = () => {
  const gallery = useRef(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ["start end", "end start"],
  });

  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 1]);
  const y2 = useTransform(scrollYProgress, [0, 3], [0, height * 2]);
  const y3 = useTransform(scrollYProgress, [0, 4], [0, height * 3.2]);
  const y4 = useTransform(scrollYProgress, [0, 5], [0, height * 2.8]);
  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", resize);
    requestAnimationFrame(raf);

    resize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    // main
    <div className="">
      {/* spacer */}
      <div className="h-[10vh]"></div>
      {/* gallery */}
      <div
        ref={gallery}
        className="bg-black h-[150vh] relative flex  gap-[2vw] p-[1vw] box-border overflow-hidden
    "
      >
        <Column images={[images[0], images[1], images[2]]} y={y} />
        <Column images={[images[3], images[4], images[5]]} y={y2} />
        <Column images={[images[6], images[7], images[8]]} y={y3} />
        <Column images={[images[9], images[10], images[11]]} y={y4} />
      </div>
      {/* spacer */}
      <div className="h-[10vh] bg-black"></div>
    </div>
  );
};

const Column = ({ images, y }) => {
  return (
    // column
    <motion.div
      className="relative h-full w-[25%] min-w-[250px] flex flex-col gap-[2vw] [&>*:nth-child(1)]:top-[-25%] [&>*:nth-child(2)]:top-[-25%] [&>*:nth-child(4)]:top-[-25%] [&>*:nth-child(3)]:top-[-25%]"
      style={{ y }}
    >
      {images.map((src, i) => {
        return (
          // imageContainer
          <div
            key={i}
            className=" h-full w-full relative rounded-lg  object-cover "
          >
            <Image
              src={`/images/gallery/${src}`}
              alt="image"
              fill
              className="object-cover"
            />
          </div>
        );
      })}
    </motion.div>
  );
};

export default Gallery;
