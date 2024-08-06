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
      <section className="relative h-screen w-full overflow-hidden">
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
          <div className="container mx-auto px-4 sm:px-6 lg:px-12">
            <div className="max-w-4xl mx-auto sm:mx-0">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#FFF] mb-4 font-serif leading-tight text-center sm:text-left">
                Welcome to <br className="sm:hidden" />
                Comfy Keys
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-white mb-8 text-center sm:text-left">
                Experience the Comfort of Home{" "}
                <br className="hidden sm:inline" />
                Away from Home at comfy keys
              </p>
              <div className="flex justify-center sm:justify-start">
                <Link href="/contact">
                  <button className="bg-white text-[#18473D] rounded-full px-6 py-3 text-base sm:text-lg font-semibold hover:bg-gray-100 transition-all duration-300 ease-in-out inline-flex items-center">
                    Contact Us <span className="ml-2">➔</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <About />
      <Amenties />
      <Partner />
      <FormCta />
      <Footer />
    </>
  );
}
