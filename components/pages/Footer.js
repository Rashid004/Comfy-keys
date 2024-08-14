/** @format */

import Image from "next/image";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaLinkedin,
} from "react-icons/fa";

function Footer() {
  return (
    <footer
      className="text-primary-600 px-4 md:px-2 body-font bg-dark-700 mt-8 md:mt-14 w-full overflow-x-hidden"
      id="footer"
    >
      <div className="w-full px-4 py-6 md:pt-8 pb-12 flex md:items-center flex-col md:flex-row max-w-6xl mx-auto">
        <div className="flex-grow flex flex-wrap md:flex-nowrap items-start justify-between gap-8 md:gap-16 w-full">
          <div className="w-full md:w-1/3">
            <div className="pt-4 font-medium tracking-widest text-sm mb-8 flex items-center justify-center md:justify-start">
              <a href="#home">
                <Image
                  src="/images/Logo.svg"
                  alt="Logo"
                  width={200}
                  height={160}
                  className="w-28 h-12 md:w-64 md:h-28"
                />
              </a>
            </div>
            <nav className="list-none mb-10 md:flex flex-col gap-4 text-sm hidden">
              <li>
                <a className="text-primary-600">
                  1234 Elm Street, Suite 567,
                  <br /> Springfield, 62704, United <br />
                  Kingdom
                </a>
              </li>
              <li>
                <a className="text-primary-600">+1 (555) 123-4567</a>
              </li>
              <li>
                <a className="text-primary-600">sample.email@example.com</a>
              </li>
            </nav>
          </div>
          <div className="flex flex-row  gap-4 md:gap-0 w-full md:w-2/3">
            {" "}
            <div className="w-1/2  md:mb-8  ">
              <h2 className="font-semibold text-primary-600 tracking-normal text-xl md:text-2xl font-[nunito] pb-5">
                Quick Links
              </h2>
              <nav className="list-none mb-10 flex flex-col gap-4 text-sm md:text-base">
                <li>
                  <a className="text-primary-600">Home</a>
                </li>
                <li>
                  <a className="text-primary-600">About</a>
                </li>
                <li>
                  <a className="text-primary-600">Amenities</a>
                </li>
                <li>
                  <a className="text-primary-600">Contact</a>
                </li>
              </nav>
            </div>
            <div className="w-1/2  ">
              <div className="mb-8">
                <iframe
                  className="w-full h-[100px] md:h-[190px] border-0"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d60196.04739883149!2d72.86520061623536!3d19.44465744532118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1722941237574!5m2!1sen!2sin"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <h2 className="text-start tracking-wide text-sm sm:text-xl md:text-2xl mb-4">
                Around the web
              </h2>
              <nav className="list-none mb-10 flex items-center justify-start gap-6">
                <li>
                  <a className="text-primary-600">
                    <FaFacebook className="w-6 h-6 md:w-8 md:h-8" />
                  </a>
                </li>
                <li>
                  <a className="text-primary-600">
                    <FaInstagram className="w-6 h-6 md:w-8 md:h-8" />
                  </a>
                </li>
                <li>
                  <a className="text-primary-600">
                    <FaPinterest className="w-6 h-6 md:w-8 md:h-8" />
                  </a>
                </li>
                <li>
                  <a className="text-primary-600">
                    <FaLinkedin className="w-6 h-6 md:w-8 md:h-8" />
                  </a>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <nav className="list-none mb-10 flex flex-col gap-4 text-sm md:hidden">
          <li>
            <a className="text-primary-600">
              1234 Elm Street, Suite 567,
              <br /> Springfield, 62704, United
              <br /> Kingdom
            </a>
          </li>
          <li>
            <a className="text-primary-600">+1 (555) 123-4567</a>
          </li>
          <li>
            <a className="text-primary-600">sample.email@example.com</a>
          </li>
        </nav>
      </div>
      <div className="container mx-auto py-4 px-4 flex flex-wrap flex-col sm:flex-row items-center justify-center">
        <hr className="border-none h-0.5 bg-primary-50 w-full mb-4 md:hidden" />
        <p className="text-primary-600 text-xs sm:text-sm text-center flex items-center gap-4 flex-col md:flex-row">
          Copyright © 2024 Comfy Keys ltd. | All rights{" "}
          <br className="md:hidden" />
          reserved - Designed & developed by
          <span className="text-dark-600">DotSyndicate</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
