/** @format */

import Navigation from "@/components/Navigation";
import About from "@/components/pages/About";
import Amenties from "@/components/pages/Amenties";
import Footer from "@/components/pages/Footer";
import FormCta from "@/components/pages/FormCta";
import Partner from "@/components/pages/Partner";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="relative h-screen w-full overflow-hidden">
        <Navigation />
        <Image
          src="/images/home.svg"
          fill
          quality={100}
          className="object-cover object-center"
          alt="Luxurious bedroom with large windows"
          sizes="100vw"
          priority
        />

        <div className="absolute inset-0 flex items-center">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[1440px] w-full mx-auto">
            <div className="max-w-4xl w-full mx-auto sm:mx-0">
              <h1 className="text-4xl font-semibold sm:text-4xl md:text-5xl lg:text-6xl text-white mb-4 font-serif leading-tight text-center sm:text-left">
                Welcome to <br className="sm:hidden" />
                Comfy Keys
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-white mb-6 text-center sm:text-left">
                Experience the Comfort of Home{" "}
                <br className="md:hidden inline" />
                Away from Home at comfy keys
              </p>
              <div className="flex justify-center sm:justify-start">
                <Link href="/contact">
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
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <About />
      <Amenties />
      <Partner />
      <FormCta />
      <Footer />
    </>
  );
}
