/** @format */

import Image from "next/image";
import Navigation from "../Navigation";

export default function Home() {
  return (
    <div className="relative h-screen mb-8 md:mb-0 overflow-x-hidden" id="home">
      <Navigation />
      <div className="absolute inset-0">
        <Image
          src="/images/home.svg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="z-0"
        />
      </div>
      <div className="relative z-10 flex flex-col justify-center items-center md:items-start h-full p-4 sm:p-6 md:p-10 bg-dark-900 bg-opacity-50">
        <div className="w-full max-w-7xl mx-auto">
          <h1 className="font-[Resgak] text-primary-50 text-4xl sm:text-5xl md:text-[64px] font-bold mb-4 text-center md:text-left">
            Welcome to <br className="sm:hidden" />
            Comfy Keys
          </h1>
          <p className="text-primary-50 text-base sm:text-lg md:text-[32px] py-2 sm:py-4 mb-4 sm:mb-6 text-center md:text-left leading-tight md:w-3/4 w-full md:leading-relaxed">
            Experience the Comfort of Home <br className="md:hidden" />
            Away from Home <br className="hidden md:block" /> at comfy keys
          </p>

          <div className="flex justify-center md:justify-start">
            <button className="bg-primary-50 text-dark-500 rounded-full px-4 sm:px-6 py-3 sm:py-3 text-sm sm:text-base md:text-lg font-semibold hover:bg-primary-700 hover:text-primary-50 transition-colors delay-300 ease-in-out inline-flex items-center">
              Contact Us{" "}
              <span className="ml-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-5 h-5 sm:w-6 sm:h-6"
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
      </div>
    </div>
  );
}
