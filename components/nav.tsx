"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import me from "public/images/nav/me-photo.png";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div
      className={`${
        pathname === "/" ? "bg-[#C8C6C9] text-white" : "text-black"
      } flex w-full items-center justify-between  px-10 pt-9 text-[1.3rem] `}
    >
      <Link
        data-scroll
        data-scroll-speed="0.05"
        href="/"
        className="w-14 h-14 cursor-pointer "
      >
        <Image
          alt="me"
          width={500}
          height={500}
          quality={100}
          src={me}
          className="w-14 h-14"
        />
      </Link>
      <div data-scroll data-scroll-speed="0.05" className="flex  gap-7  ml-10">
        <Link href="/work">Work</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <div
        data-scroll
        data-scroll-speed="0.05"
        className={`text-[1.1rem]  text-white bg-black flex justify-center items-center px-7 rounded-lg py-3 `}
      >
        Resume
      </div>
    </div>
  );
};

export default Navbar;
