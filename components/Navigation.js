/** @format */
"use client";
import React, { useState } from "react";
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

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { href: "meals", label: "Home" },
    { href: "about", label: "About" },
    { href: "partner", label: "Amenities" },
    { href: "contact", label: "Contact" },
  ];

  return (
    <header className="absolute top-0 left-0 right-0 z-40 px-8 py-4">
      <div className="w-[95%] h-[83px] flex-shrink-0 mx-auto bg-dark-300 border border-dark-400 rounded-[20px] md:flex justify-between items-center px-8 py-5 backdrop-blur-[5.2px] hidden">
        <div className="flex items-center ml-6">
          <a href="#footer">
            <Image
              src="/images/Logo.svg"
              alt="Comfy Keys Logo"
              width={120}
              height={100}
              className="mr-2"
            />
          </a>
        </div>

        <nav className="mr-6">
          <ul className="flex space-x-8">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.href}`}
                  className={`relative text-primary-50 hover:text-primary-200 text-xl ${
                    activeLink === item.href ? "active" : ""
                  }`}
                  onClick={() => setActiveLink(item.href)}
                >
                  {item.label}
                  {activeLink === item.href && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary-50"></span>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="md:hidden flex justify-between items-center">
        <div className="flex items-center">
          <Image
            src="/images/Logo.svg"
            alt="Comfy Keys Logo"
            width={105}
            height={48}
          />
        </div>
        <button
          className="inline-flex items-center border-0 py-1 px-3 focus:outline-none text-primary-50"
          onClick={toggleMenu}
        >
          <FaBars size="1.5em" />
        </button>
      </div>

      {/* Full-screen Mobile Navigation Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-primary-700 text-primary-50 z-50 flex flex-col md:hidden">
          <div className="flex justify-between items-center p-4 border-b border-primary-50/20">
            <Image
              src="/images/Logo.svg"
              alt="Comfy Keys Logo"
              width={105} // Adjust the width as needed
              height={48} // Adjust the height as needed
            />
            <button
              onClick={toggleMenu}
              className="text-primary-50 hover:text-primary-300 focus:outline-none"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>
          </div>
          <nav className="flex-grow flex flex-col justify-start items-start gap-6 px-6">
            {navItems.map((item) => (
              <Link
                key={item}
                href={`#${item.href}`}
                className={`py-4 text-2xl font-semibold hover:text-primary-300 transition-colors ${
                  activeLink === item.href ? "active" : ""
                }`}
                onClick={() => {
                  toggleMenu();
                  setActiveLink(item.href);
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
      )}
    </header>
  );
}

export default Navigation;
