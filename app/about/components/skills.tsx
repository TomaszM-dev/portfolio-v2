import React, { useEffect, useState } from "react";
import { BsArrowDownLeft, BsArrowDownRight } from "react-icons/bs";

const Skills = () => {
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

  const phrase =
    "Next.js, React.js, TypeScript, Tailwind CSS, JavaScript, CSS / Sass / Styled-Components, HTML, Framer Motion, Lottie Animations, Chart.js, React Chart, Bootstrap, Swiper, react-dom, react-router, react-intersection-observer, SWR, hooks,";
  const phrase2 =
    "Prisma, Stripe, bcrypt, Prisma Client, Zustand, React-Reducer, React-Chart, Framer Motion, Lottie Animations, Locomotive Scroll, GSAP";
  const phrase3 =
    "Next-Auth, micro, next, figma, GitHub, Vercel, Netlify, WordPress-CLI, SEO optimization, Railway, Clerk, Email.js, ZOD, clsx, ";

  return (
    <div className="bg-[#f3f3f3] rounded-3xl">
      <div className="flex flex-col gap-10 px-10 pt-40 pb-28  w-full">
        <h2 className="text-[3.3rem] font-bold">
          I can fluently work with ...
        </h2>
        <div className="flex gap-14 mt-10">
          <div className="w-[33%] h-96  flex flex-col ">
            <p className="text-[#7C7B7B] text-[1.4rem] mb-1">01</p>
            <div className="bg-[#dedcdc] w-full h-[1px] mb-7"></div>
            <h2 className="text-[2rem] mb-7">Front-end tools</h2>
            <p className="text-[1.2rem] text-[#686868]"> {phrase}</p>
          </div>
          <div className="w-[33%] h-96  flex flex-col ">
            <p className="text-[#7C7B7B] text-[1.4rem] mb-1">03</p>
            <div className="bg-[#dedcdc] w-full h-[1px] mb-7"></div>
            <h2 className="text-[2rem] mb-7">Frameworks</h2>
            <p className="text-[1.2rem] text-[#686868]"> {phrase3}</p>
          </div>
          <div className="w-[33%] h-96  flex flex-col ">
            <p className="text-[#7C7B7B] text-[1.4rem] mb-1">02</p>
            <div className="bg-[#dedcdc] w-full h-[1px] mb-7"></div>
            <h2 className="text-[2rem] mb-7">Libraries</h2>
            <p className="text-[1.2rem] text-[#686868]"> {phrase2}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
