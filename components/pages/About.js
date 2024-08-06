/** @format */

import Image from "next/image";

function About() {
  return (
    <section className="relative py-16 md:py-28 px-4 md:px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl">
        <div className="relative z-10 order-2 md:order-1 left-4">
          <Image
            src="/images/about.svg"
            alt="About Comfy Keys"
            width={400}
            height={300}
            className="object-cover object-center shadow-md w-full h-auto max-w-[340px] md:max-w-full"
            sizing
          />
        </div>

        <div className="absolute  bg-[#18473D] w-[70%] h-[320px] md:w-1/3 md:h-2/3 top-[5%] left-4 md:top-[11%] md:left-[16%] z-0  md:block"></div>
        <div className="flex flex-col items-center md:items-start text-start md:text-left order-2 md:pl-8 mt-16 md:mt-32">
          <h1 className="z-40 text-2xl sm:text-3xl md:text-5xl mb-4 font-bold text-[#18473D] absolute top-[50%] md:top-48 font-[Resgak] md:left-[47%] uppercase tracking-[6px] md:tracking-[9.6px] transform -translate-x-1/2 md:-translate-x-0 w-full md:w-auto left-[57%] ">
            About Us
          </h1>

          <p className="text-[#8D8A8A] leading-[25px] text-[16px] text-start w-full md:w-[70%] not-italic">
            <span className="text-[#848282] leading-normal font-semibold md:pt-14 p-0 hidden md:block">
              Welcome to Comfy Keys — Your Gateway to Comfortable Living
            </span>
            At Comfy Keys, we simplify the rental process, offering a
            user-friendly platform that makes finding your next home effortless
            and enjoyable. Our wide selection of properties ensures that you
            find the perfect fit for your style, location, and budget.
            <br /> Dedicated to seamless experiences, we support you from search
            to move-in, making renting straightforward and stress-free. Choose
            Comfy Keys and unlock the door to your new home with ease and
            confidence.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
