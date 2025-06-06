"use client";
import React, { useState } from "react";
// fontawesomeIcon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faBars } from "@fortawesome/free-solid-svg-icons";
// Images
import Image from "next/image";
import Logo from "./assets/images/Logo.png";

const Header = () => {
  const [hamburger, sethamburger] = useState(false);
  const toggleMenu = () => {
    sethamburger(!hamburger);
  };
  return (
    <header className="container mx-auto font-poppins font-semibold ">
      {/*close NAV is main div */}
      <nav className="flex flex-wrap justify-between p-2  items-center bg-dark lg:pl-10 lg:pr-16 xl:pl-14 xl:pr-20 xl:py-4 rounded-s-lg rounded-r-lg">
        {/* open LOGO and HAMBURGER --parent */}
        <div className="flex justify-between w-full lg:w-auto items-center ">
          <Image
            className="w-12 sm:w-16 md:w-1/12 lg:w-5/6 xl:w-full cursor-pointer"
            src={Logo}
            alt="Logo"
          />
          <FontAwesomeIcon
            className="text-3xl sm:text-5xl lg:hidden text-white ml-auto cursor-pointer"
            onClick={toggleMenu}
            icon={faBars}
          />
        </div>
        {/* close LOGO and HAMBURGER --parent */}

        {/* open List and BUTTOn div */}
        <div
          className={` bg-light lg:bg-transparent w-full lg:w-9/12 xl:w-10/12 2xl:pl-60 py-8 mt-2 text-lg sm:text-2xl lg:text-xs   2xl:text-sm space-y-2 sm:space-y-6 rounded-md lg:flex justify-between lg:p-0 lg:mt-0 lg:space-y-0 ${
            hamburger ? "block" : "hidden"
          }`}
        >
          <ul className="text-center space-y-2 sm:space-y-6 lg:flex justify-between lg:space-x-16 items-center lg:space-y-0  lg:text-white cursor-pointer">
            <li>ABOUT US</li>
            <li>OUR PRODUCTS</li>
            <li>CONTACT US</li>
          </ul>
          <div className="space-x-10 lg:space-x-5 text-center ">
            <button className="bg-white py-2 px-4 lg:py-3 lg:px-6 rounded-full">
              LOGIN
            </button>

            <button className="bg-yellow py-2 px-4 lg:py-3 lg:px-6 rounded-full  ">
              Sign Up Now
              <FontAwesomeIcon icon={faArrowRight} className="pl-2" />
            </button>
          </div>
          {/* close List and BUTTOn div */}
        </div>
      </nav>
    </header>
  );
};

export default Header;
