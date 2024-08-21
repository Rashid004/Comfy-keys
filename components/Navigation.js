/** @format */
"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { FaBars } from "react-icons/fa";
import {
  FaInstagram,
  FaPinterest,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const navItems = [
    { id: 1, link: "meals", label: "Home" },
    { id: 2, link: "about", label: "About" },
    { id: 3, link: "partner", label: "Amenities" },
    { id: 4, link: "contact", label: "Contact" },
  ];

  return (
    <header className="absolute top-0 left-0 right-0  px-8 py-4 max-w-7xl mx-auto z-[999]">
      {/* Desktop Navigation */}
      <div className="w-full h-full flex-shrink-0 mx-auto bg-dark-300 border border-dark-400 rounded-3xl md:flex justify-between items-center px-8 py-5 backdrop-blur-sm hidden">
        <div className="flex items-center ml-6">
          <Link href="#">
            <Image
              src="/images/Logo.svg"
              alt="Comfy Keys Logo"
              width={120}
              height={100}
              className="mr-2"
            />
          </Link>
        </div>

        <nav className="mr-6">
          <ul className="flex space-x-8">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  href={`#${item.link}`}
                  className={`relative text-primary-50 hover:text-primary-200 text-lg ${
                    activeLink === item.link ? "active" : ""
                  }`}
                  onClick={() => setActiveLink(item.link)}
                >
                  {item.label}
                  {activeLink === item.link && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary-50"></span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Mobile Hamburger Button */}
      <div className="md:hidden flex justify-between items-center ">
        <div className="flex items-center">
          <Image
            src="/images/Logo.svg"
            alt="Comfy Keys Logo"
            width={105}
            height={48}
          />
        </div>
        <button
          className="inline-flex items-center border-0 py-1 px-4 focus:outline-none text-primary-50 cursor-pointer "
          onClick={toggleMenu}
        >
          <FaBars className="w-6 h-6" size="1.5em" />
        </button>
      </div>

      {/* Full-screen Mobile Navigation Menu */}
      <div
        className={`fixed inset-0 bg-primary-700 text-primary-50 z-50 flex flex-col md:hidden transform transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center ml-4 p-4 border-b border-primary-50/20">
          <Image
            src="/images/Logo.svg"
            alt="Comfy Keys Logo"
            width={105} // Adjust the width as needed
            height={48} // Adjust the height as needed
          />
          <button
            onClick={toggleMenu}
            className="text-primary-50 hover:text-primary-300 focus:outline-none cursor-pointer px-4 py-1"
          >
            <XMarkIcon className="w-6 h-6" size="1.5em" />
          </button>
        </div>
        <nav className="flex-grow flex flex-col justify-start items-start gap-6 px-6">
          {navItems.map((item) => (
            <Link
              key={item.id} // Ensure the key is unique and based on the id
              href={`#${item.link}`}
              className={`py-4 text-xl md:text-2xl font-semibold hover:text-primary-300 transition-colors ${
                activeLink === item.link ? "active" : ""
              }`}
              onClick={() => {
                toggleMenu();
                setActiveLink(item.link);
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex justify-center space-x-6 p-6">
          <FaInstagram size="1.5em" />
          <FaPinterest size="1.5em" />
          <FaLinkedin size="1.5em" />
          <FaXTwitter size="1.5em" />
        </div>
      </div>
    </header>
  );
}

export default Navigation;
