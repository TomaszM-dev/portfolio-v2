import Image from "next/image";
import React from "react";
import me from "public/images/hero/me.png";
import { BsArrowDownLeft, BsArrowDownRight } from "react-icons/bs";
import { BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";

const Landing = () => {
  return (
    <div className="h-[80vh]  w-full flex items-center overflow-hidden   px-10 ">
      <p className="text-[15rem] top-[13rem] left-6 whitespace-nowrap absolute uppercase font-bold text-[#f5f4f4] z-1">
        About Me
      </p>
      <div className="w-[48%] h-full relative z-10">
        <Image
          fill
          quality={100}
          priority={true}
          src={me}
          alt=""
          className="object-cover"
        />
        <BsArrowDownRight className="text-[1.7rem] absolute  right-10 top-48 stroke-black stroke-1 " />
      </div>
      <div className="w-[60%] flex flex-col px-10  z-10">
        <h1 className="leading-[3.3rem] mt-40 text-[2.4rem]">
          Hello I am Tomasz `Malocha and i want to give you a glimpse to my
          world
        </h1>
        <div className="w-[50%] flex flex-col ml-auto gap-2 mt-[6rem]">
          <p className="self-end uppercase  text-[#a1a1a1]">Social Profiles</p>
          <p className="bg-[#f5f4f4] w-fit h-[1px]"></p>
          <div className="flex gap-4 text-[2rem] self-end mt-1">
            <BsGithub className="text-[black]" />
            <BsInstagram className="text-[black]" />
            <BsLinkedin className="text-[black]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
