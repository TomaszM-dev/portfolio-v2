import React, { useState } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import {
  containerVars,
  fadeIn,
  menuLinkVars,
  menuSlide,
  menuVars,
  upProjects,
} from "./animations";
import Link from "next/link";
import { slideUp } from "./preloader/anim";

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Work",
    href: "/work",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

const HamburgerNav = () => {
  return (
    <motion.div
      variants={menuVars}
      initial="initial"
      exit="exit"
      animate="animate"
      className="h-screen origin-top-right max-md:w-full w-[38%] fixed right-0 top-0 text-white z-20  bg-[#101010]"
    >
      <div className="w-full  mt-48 px-20  h-full box-border flex flex-col   ">
        <motion.p
          variants={fadeIn("up", 0)}
          initial="hidden"
          whileInView={"show"}
          className="uppercase text-[#999] text-[0.9rem]"
        >
          navigation
        </motion.p>
        <motion.p
          variants={fadeIn("up", 0)}
          initial="hidden"
          whileInView={"show"}
          className="w-full mx-auto h-[1px] bg-[#999] mb-10 "
        ></motion.p>
        <motion.div
          variants={containerVars}
          initial="initial"
          animate="open"
          exit="initial"
          className="flex flex-col"
        >
          {navItems.map((data, index) => {
            return (
              <motion.div variants={menuLinkVars} key={index}>
                <Link href={data.href} className="text-[4rem] leading-[5rem]">
                  {data.title}
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.p className="uppercase text-[#999] text-end text-[0.9rem] mt-40">
          Socials & Resume
        </motion.p>
        <motion.p className="w-full mx-auto h-[1px] bg-[#999] mb-12 "></motion.p>
        <motion.div
          variants={fadeIn("down", 0)}
          initial="hidden"
          whileInView={"show"}
          className="flex gap-10 text-[1rem]"
        >
          <p>LinkedIn</p>
          <p>Instagram</p>
          <p>Github</p>
          <p>Resume</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HamburgerNav;
