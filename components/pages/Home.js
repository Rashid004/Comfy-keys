/** @format */

import Image from "next/image";
import Navigation from "../Navigation";

export default function Home() {
  return (
    <div className="relative h-screen bg-gray-100 ">
      <Navigation />
      <div className="absolute inset-0">
        <Image
          src="/images/home.svg" // Replace with your image path
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="z-0"
        />
      </div>
      <div className="relative z-10 flex flex-col justify-center items-center md:items-start h-full p-10 bg-black bg-opacity-50 max-w-7xl mx-auto">
        <h1 className="text-white text-4xl md:text-7xl font-bold mb-4 font-[Resgak]">
          Welcome to <br className="sm:hidden" />
          Comfy Keys
        </h1>
        <p className="text-white text-lg md:text-xl lg:text-[36px]  mb-6">
          Experience the Comfort of Home <br className="md:hidden inline" />
          Away from Home at comfy keys{" "}
        </p>
        <button className="bg-white text-[#18473D] rounded-full px-6 py-3 text-base sm:text-lg font-semibold hover:bg-gray-100 transition-all duration-300 ease-in-out inline-flex items-center">
          Contact Us{" "}
          <span className="ml-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                stroke="#18473D"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 16L16 12L12 8"
                stroke="#18473D"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8 12H16"
                stroke="#18473D"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
}
