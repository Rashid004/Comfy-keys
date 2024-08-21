/** @format */
import { RiMapPin2Fill } from "react-icons/ri";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

import { RiInstagramFill } from "react-icons/ri";
import { FaPinterest } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import React from "react";

function FormCta() {
  return (
    <section
      className="section-container mt-1  py-24 sm:pt-60 md:py-0 relative"
      id="contact"
    >
      <div className="md:hidden absolute bottom-1/2 flex flex-col items-start justify-center gap-4 bg-dark-500 text-primary-50 w-3/4 sm:w-3/5  max-h-fit md:h-[400px]  px-6 py-8  left-1/2 transform -translate-x-1/2  -translate-y-1/2 sm:bottom-2/3 sm:translate-y-20 z-50 ">
        <h2 className="text-lg sm:text-2xl font-semibold mb-4 sm:mb-8 md:text-nowrap text-center md:text-left">
          Contact info
        </h2>
        <div className="flex items-center md:items-start gap-2 sm:gap-4">
          <span className="flex-shrink-0">
            <RiMapPin2Fill className="w-5 h-5 sm:w-8 sm:h-8 text-dark-600" />
          </span>
          <p className="text-sm sm:text-base">
            1234 Elm Street, Suite <br /> 567, Springfield, 62704 <br /> United
            Kingdom
          </p>
        </div>
        <div className="flex items-center gap-2 sm:gap-4">
          <span className="flex-shrink-0">
            <IoCall className="w-5 h-5 sm:w-8 sm:h-8 text-dark-600" />
          </span>
          <p className="text-sm sm:text-base">+1 (555) 123-4567</p>
        </div>
        <div className="flex items-center gap-2 sm:gap-4">
          <MdEmail className="w-5 h-5 sm:w-8 sm:h-8 text-dark-600" />
          <p className="text-sm sm:text-base">sample.email@abc.com</p>
        </div>

        <div className="flex items-center justify-center gap-3 sm:gap-6 mt-4 sm:mt-8">
          <span className="flex-shrink-0">
            <RiInstagramFill className="w-5 h-5 sm:w-8 sm:h-8 text-primary-50" />
          </span>
          <span className="flex-shrink-0">
            <FaPinterest className="w-5 h-5 sm:w-8 sm:h-8 text-primary-50" />
          </span>
          <span className="flex-shrink-0">
            <FaLinkedin className="w-5 h-5 sm:w-8 sm:h-8 text-primary-50" />
          </span>
          <span className="flex-shrink-0">
            <FaXTwitter className="w-5 h-5 sm:w-8 sm:h-8 text-primary-50" />
          </span>
        </div>
      </div>
      <div className="relative flex flex-col md:flex-row items-center w-full mt-28 sm:mt-6 md:mt-0">
        {/* Contact Info Box */}
        <div className="hidden  absolute  md:flex flex-col items-start gap-4 bg-dark-500 text-primary-50 max-w-full md:max-w-xs lg:max-w-sm max-h-fit md:h-[400px]  px-8 py-4 top-0 left-0 transform md:translate-x-0 translate-x-1/2 md:translate-y-24 -translate-y-2/3 z-50 ">
          <h2 className="text-lg sm:text-2xl font-semibold mb-4 sm:mb-8 md:text-nowrap text-center md:text-left">
            Contact info
          </h2>
          <div className="flex items-center md:items-start gap-2 sm:gap-4">
            <span className="flex-shrink-0">
              <RiMapPin2Fill className="w-5 h-5 sm:w-8 sm:h-8 text-dark-600" />
            </span>
            <p className="text-sm sm:text-base">
              1234 Elm Street, Suite <br /> 567, Springfield, 62704 <br />{" "}
              United Kingdom
            </p>
          </div>
          <div className="flex items-center gap-2 sm:gap-4">
            <span className="flex-shrink-0">
              <IoCall className="w-5 h-5 sm:w-8 sm:h-8 text-dark-600" />
            </span>
            <p className="text-sm sm:text-base">+1 (555) 123-4567</p>
          </div>
          <div className="flex items-center gap-2 sm:gap-4">
            <MdEmail className="w-5 h-5 sm:w-8 sm:h-8 text-dark-600" />
            <p className="text-sm sm:text-base">sample.email@abc.com</p>
          </div>

          <div className="flex items-center justify-center gap-3 sm:gap-6 mt-4 sm:mt-8">
            <span className="flex-shrink-0">
              <RiInstagramFill className="w-5 h-5 sm:w-8 sm:h-8 text-primary-50" />
            </span>
            <span className="flex-shrink-0">
              <FaPinterest className="w-5 h-5 sm:w-8 sm:h-8 text-primary-50" />
            </span>
            <span className="flex-shrink-0">
              <FaLinkedin className="w-5 h-5 sm:w-8 sm:h-8 text-primary-50" />
            </span>
            <span className="flex-shrink-0">
              <FaXTwitter className="w-5 h-5 sm:w-8 sm:h-8 text-primary-50" />
            </span>
          </div>
        </div>

        {/* Form Box */}
        <div className="md:ml-20 lg:ml-32 flex flex-col items-center justify-center w-full md:w-[90%] mx-4  min-h-[583px] z-0 pb-6 border border-gray-400 mt-4 md:mt-0 pt-16 md:pt-0 pl-8 md:pl-72 lg:pl-[400px]  px-6">
          <div className="flex flex-col items-start gap-4 w-full px-4 md:px-0">
            <h2 className="text-dark-500 text-lg sm:text-2xl font-semibold md:mb-8">
              Send a message
            </h2>
            <form className="flex flex-col gap-6 sm:gap-8 sm:items-start md:items-center justify-center md:pt-0 w-full">
              <input
                type="text"
                placeholder="Name*"
                className="border-b border-primary-500 outline-none p-2 bg-transparent w-full  py-2 sm:py-4"
              />
              <div className="flex flex-col sm:flex-row md:items-center md:gap-8 gap-4 ">
                <input
                  type="email"
                  placeholder="Email Address*"
                  className="border-b border-primary-500 outline-none p-2 w-full   bg-transparent "
                />
                <input
                  type="text"
                  placeholder="Mobile Number*"
                  className="border-b border-primary-500 outline-none p-2 w-full   bg-transparent "
                />
              </div>
              <input
                placeholder="Write your message here*"
                type="text"
                className="border-b border-primary-500 outline-none p-2 w-full  bg-transparent  "
              />
            </form>
            <div className="w-full">
              <button className="border border-primary-500 rounded-full px-6 sm:px-8 py-1 sm:py-2 mt-4 text-left hover:bg-primary-700 hover:text-primary-50 transition-colors duration-300">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FormCta;
