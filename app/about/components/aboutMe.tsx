import Image from "next/image";
import React from "react";
import me from "public/images/aboutme.png";

const AboutMe = () => {
  return (
    <div className="mt-40  h-screen px-10 flex items-center w-full gap-20 ">
      <div className="w-[60%] h-[75%] relative ">
        <Image
          fill
          alt=""
          quality={100}
          src={me}
          className="object-cover rounded-lg"
        />
      </div>
      <div className="w-[50%] flex flex-col  justify-center gap-4   h-full ">
        <h2 className="uppercase  text-[2rem]  ">more about me</h2>

        <p className="text-[1.3rem] text-[#7e7e7e]">
          Coding serves as my creative canvas, a medium to unravel challenges,
          and a conduit to contribute to the world s betterment through
          technological progress . Beyond coding, I m passionate about
          mindfulness, self-care, self improvement, and weight lifting. I
          believe in the importance of a healthy body to complement a healthy
          mind.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
