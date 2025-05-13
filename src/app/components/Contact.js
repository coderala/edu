"use client";
import Image from "next/image";
import Contact from "./assets/images/Contact.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faBell, faXmark } from "@fortawesome/free-solid-svg-icons";

const ContactSection = () => {
  return (
    <div className="flex flex-col lg:flex-row m-5 bg-light p-5 lg:p-0 rounded-lg  lg:rounded-2xl">
      {/* Left Image Side */}
      <div className="w-full lg:w-1/2 bg-dark rounded-lg flex items-center justify-center relative p-5">
        {/* <FontAwesomeIcon
          icon={faXmark}
          className="absolute top-3 right-3 text-white text-xl cursor-pointer"
        /> */}
        <Image className="w-1/2" src={Contact} alt="Contact" />
      </div>

      {/* Right Form Side */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center mt-8 lg:mt-0 lg:pl-10 text-center lg:text-center lg:p-20 ">
        <FontAwesomeIcon
          icon={faXmark}
          className="absolute top-8 right-8 text-black text-xl cursor-pointer"
        />
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-5xl 2xl:text-5xl font font-prompt">
          Enjoy 15% Off Your First Order
        </h1>

        <p className="mt-2 text-base sm:text-xl lg:text-lg font-bold 2xl:text-base text-gray-700">
          + free shipping & returns
        </p>

        <div className="mt-6 relative flex flex-col items-center lg:items-center w-full">
          <div className="relative w-full lg:w-10/12">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg"
            />
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full pl-12 pr-4 py-3 rounded-lg text-base focus:outline-none"
            />
          </div>

          <button className="mt-4 bg-yellow  font-poppins font-semibold py-3 px-6 rounded-lg text-base flex items-center gap-2 lg:w-10/12">
            Get Code
            <FontAwesomeIcon icon={faBell} />
          </button>
          <p className="mt-3">By entering your email, you agree to our Terms of Service + privacy Notice, including receipt of emails and promotions.You can unsubscribe at any time.</p>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
