/** @format */

import { LinkIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaLinkedin,
} from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="text-[#FAFFF7] body-font bg-[#143F36] mt-14 pb-4 w-full overflow-x-hidden">
      <div className="w-full px-4 py-12 md:py-16 flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col max-w-7xl mx-auto">
        <div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center gap-14 order-first">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <div className="pt-4 font-medium text-gray-900 tracking-widest text-sm mb-0 md:mb-12 flex items-center md:items-start  justify-center ">
              <Image
                src="/images/Logo.svg"
                alt="Logo"
                width={200}
                height={160}
              />
            </div>
            <nav className="list-none mb-10 md:flex items-start justify-end md gap-4 flex-col hidden ">
              <li>
                <a className="text-[#FAFFF7]  ">
                  1234 Elm Street, Suite 567 <br className="md:hidden" />,
                  Springfield, 62704, United Kingdom
                </a>
              </li>
              <li>
                <a className="text-[#FAFFF7]  ">+1 (555) 123-4567</a>
              </li>
              <li>
                <a className="text-[#FAFFF7]  ">sample.email@example.com</a>
              </li>
            </nav>
          </div>
          <div className="flex mb-8 md:mb-0 items-center justify-normal md:justify-between">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-semibold text-[#FAFFF7] tracking-normal  md:tracking-widest text-xl md:text-2xl font-[Resgak] pb-5">
                Quick Links
              </h2>
              <nav className="list-none mb-10 flex items-start flex-col gap-4 text-[12px] md:text-[16px]">
                <li>
                  <a className="text-[#FAFFF7]  ">Home</a>
                </li>
                <li>
                  <a className="text-[#FAFFF7]  ">About</a>
                </li>
                <li>
                  <a className="text-[#FAFFF7]  ">Amenities</a>
                </li>
                <li>
                  <a className="text-[#FAFFF7]  ">Contact</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <div className="title-font font-semibold text-[#FAFFF7]  tracking-widest text-2xl font-[Resgak] mb-5">
                <div className="relative w-full lg:w-72 h-20 lg:h-36">
                  {" "}
                  <iframe
                    className="absolute top-0 left-0 w-full h-full border-0"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d60196.04739883149!2d72.86520061623536!3d19.44465744532118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1722941237574!5m2!1sen!2sin"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
              <h2 className="text-center">Around the web</h2>
              <nav className="list-none mb-10 flex items-start gap-4">
                <li>
                  <a className="text-[#FAFFF7]  ">
                    <FaFacebook size="2em" />
                  </a>
                </li>
                <li>
                  <a className="text-[#FAFFF7]  ">
                    <FaInstagram size="2em" />
                  </a>
                </li>
                <li>
                  <a className="text-[#FAFFF7]  ">
                    <FaPinterest size="2em" />
                  </a>
                </li>
                <li>
                  <a className="text-[#FAFFF7]  ">
                    <FaLinkedin size="2em" />
                  </a>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <nav className="list-none mb-10 flex items-start justify-end md gap-4 flex-col md:hidden ">
          <li>
            <a className="text-[#FAFFF7]  ">
              1234 Elm Street, Suite 567, Springfield, 62704, United Kingdom
            </a>
          </li>
          <li>
            <a className="text-[#FAFFF7]  ">+1 (555) 123-4567</a>
          </li>
          <li>
            <a className="text-[#FAFFF7]  ">sample.email@example.com</a>
          </li>
        </nav>
      </div>
      <div className="container mx-auto py-4 px-4 flex flex-wrap flex-col sm:flex-row items-center justify-center">
        <p className="text-[#FAFFF7] text-xs sm:text-sm text-center">
          Copyright © 2024 Comfy Keys ltd. | All rights reserved - Designed &
          developed by <span className="text-[#C5AC8D;]">DotSyndicate</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
