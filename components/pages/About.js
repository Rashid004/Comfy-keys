/** @format */

import Image from "next/image";

function About() {
  return (
    <section
      className="relative py-8 md:py-28 px-4 md:px-6 mb-8 md:mb-12"
      id="about"
    >
      <div className="relative container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl">
        {/* Background div */}
        <div className="absolute bg-[#18473D] w-[295px] h-[268px] sm:w-[320px] sm:h-[300px] md:w-[517px] md:h-[521px] -top-4 left-2 sm:-top-4 sm:left-2 md:-top-6 md:left-4 z-0"></div>

        {/* Image Section */}
        <div className="relative z-10 flex  items-center justify-start md:justify-center order-1 md:order-1">
          <Image
            src="/images/about.svg"
            alt="About Comfy Keys"
            width={546}
            height={521}
            className="object-cover object-center shadow-md w-[300px] h-[286px] sm:w-[320px] sm:h-[300px] md:w-[546px] md:h-[521px] ml-4"
          />
        </div>
        {/* Text Section */}
        <div className="relative z-10 flex flex-col items-center justify-start  md:items-start text-start md:text-left order-2 w-full md:order-2 mt-16 md:mt-32">
          <h1 className="text-2xl sm:text-3xl md:text-5xl  font-bold text-[#18473D] font-[nunito] uppercase tracking-[6px] md:tracking-[9.6px] md:-translate-x-6 relative -translate-y-12 right-20 md:-translate-y-14 ">
            About Us
          </h1>
          <p className="text-[#8D8A8A] leading-[25px] text-[14px] md:text-base w-full md:w-[70%] -mt-10">
            <span className="text-[#848282] leading-normal font-semibold hidden md:block">
              Welcome to Comfy Keys — Your Gateway to Comfortable Living
            </span>
            At Comfy Keys, we simplify the rental process, offering a
            user-friendly platform that makes finding your next home effortless
            and enjoyable. Our wide selection of properties ensures that you
            find the perfect fit for your style, location, and budget. <br />
            Dedicated to seamless experiences, we support you from search to
            move-in, making renting straightforward and stress-free. Choose
            Comfy Keys and unlock the door to your new home with ease and
            confidence.{" "}
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
