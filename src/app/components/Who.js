"use client";
import React from "react";
import Who_bg_star from "./assets/images/Who_bg_star.png";
import Who_bg_line from "./assets/images/Who_bg_line.png";
import Image from "next/image";

const Who = () => {
  return (
    <div className="relative py-6 px-3 lg:py-20 container mx-auto">
      <div className=" relative text-center z-10 space-y-4 xl:space-y-5  lg:w-4/6 xl:w-9/12 mx-auto  ">
        <h1 className="text-dark text-3xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-prompt font-extrabold 2xl:space-y-10">
          Who We Are
        </h1>
        <p className="text-lg sm:text-2xl lg:text-xs 2xl:text-sm xl:px-20 mx-auto">
          At EduMingle, we believe that every student deserves the tools to
          thrive. Our mission is to provide high-quality, stylish, and
          functional school accessories that enhance the learning experience.
          Whether you’re gearing up for a new school year or looking to upgrade
          your supplies, we’ve got you covered.
        </p>
      </div>
      <div className="flex top-20 ">
        <Image
          src={Who_bg_line}
          alt={Who_bg_line}
          className="absolute top-12 xl:top-20 lg:left-20 h-2 w-20 rotate-12 xl:rotate-0 "
        />
        <Image
          src={Who_bg_star}
          alt={Who_bg_star}
          className="absolute top-1/4 lg:top-10 right-0
          xl:top-16 xl:right-60 h-8 w-8 xl:h-6 xl:w-6"
        />
        <Image
          src={Who_bg_star}
          alt={Who_bg_star}
          className="absolute top-2/4 left-5 lg:right-28 xl:top-24 xl:left-56 xl:h-8 xl:w-8 h-6 w-6 bg"
        />
        <Image
          src={Who_bg_line}
          alt={Who_bg_line}
          className="absolute right-20 h-2 w-10 -rotate-12 xl:rotate-0 xl:w-20 xl:top-2/4 xl:right-12 2xl:top-36 "
        />
      </div>
    </div>
  );
};

export default Who;
