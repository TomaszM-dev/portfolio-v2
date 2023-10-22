import React from "react";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useTransform, useScroll, motion } from "framer-motion";
import LocomotiveScroll from "locomotive-scroll";

const images = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
  "10.jpg",
  "11.jpg",
  "12.jpg",
];

const Gallery = () => {
  const gallery = useRef(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ["start end", "end start"],
  });
  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();

    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", resize);

    resize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    // main
    <div>
      {/* spacer */}
      <div className=""></div>
      {/* gallery */}
      <div
        ref={gallery}
        className="h-[175vh] relative flex  gap-[2vw] p-[2vw] box-border
    "
      >
        <Column images={[images[0], images[1], images[2]]} y={y} />
        <Column images={[images[3], images[4], images[5]]} y={y2} />
        <Column images={[images[6], images[7], images[8]]} y={y3} />
        <Column images={[images[9], images[10], images[11]]} y={y4} />
      </div>
      {/* spacer */}
      <div className=""></div>
    </div>
  );
};

const Column = ({ images, y }) => {
  return (
    // column
    <motion.div
      className="relative h-full w-[25%] min-w-[250px] flex flex-col gap-[2vw]"
      style={{ y }}
    >
      {images.map((src, i) => {
        return (
          // imageContainer
          <div
            key={i}
            className=" [&>*:nth-child(1)]:top-[-45%] [&>*:nth-child(2)]:top-[-95%] h-full w-full relative rounded-lg overflow-hidden"
          >
            <Image src={`/images/gallery/${src}`} alt="image" fill />
          </div>
        );
      })}
    </motion.div>
  );
};

export default Gallery;
