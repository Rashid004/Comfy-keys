/** @format */

import Image from "next/image";

function Partner() {
  return (
    <section
      className="relative py-8 md:py-32 px-2 sm:px-6 md:px-0 max-w-7xl mx-auto overflow-x-hidden"
      id="partner"
    >
      <div className="container mx-auto grid grid-cols-1 items-start md:grid-cols-2 gap-4">
        <div className="flex flex-col order-2 md:order-1 pr-2 sm:pr-6">
          <div className="relative md:absolute -top-4 sm:-top-24 md:top-44 md:right-0 z-20 mt-8 sm:mt-32 md:mt-0 flex items-start justify-start flex-col">
            <h1 className="text-2xl sm:text-4xl md:text-[64px] mb-2 font-semibold md:font-bold text-dark-500 font-[Resgak] uppercase tracking-[3.6px] sm:tracking-[5px] md:tracking-[9.6px] md:text-left md:mb-6">
              Partner With Us
            </h1>
            <p className="text-dark-50 md:mb-4 text-wrap md:text-left w-full md:w-[45%] text-sm sm:text-xl md:text-base leading-6">
              <span className="text-dark-100 leading-normal font-semibold mb-2 md:mb-4 block">
                Welcome to Comfy Keys — Your Trusted Partner in Property
                Success.{" "}
              </span>
              When you partner with Comfy Keys, you benefit from dependable
              rental income, professional property management, and outstanding
              tenant services. Our experienced team handles everything from
              maintenance and marketing to legal compliance and tenant
              relations, providing you with peace of mind and maximizing your
              property&lsquo;s value. With transparent communication, tailored
              solutions, and a commitment to excellence, Comfy Keys is your
              trusted partner in property management. Join us and experience the
              benefits of working with a reliable and dedicated team.
            </p>
          </div>
        </div>
        <div className="absolute bg-dark-500 w-[274px] h-[257px]  md:w-[40%] md:h-[60%] -translate-y-4 sm:-translate-y-4 md:-translate-y-5 right-16 sm:right-[45%] md:-translate-x-[82px] md:-right-9 z-0"></div>

        <div className="relative z-10 order-1 md:order-2">
          <Image
            src="/images/amenties.png"
            alt="About Comfy Keys"
            width={561}
            height={486}
            className="object-cover object-center shadow-md w-[284px] h-[254px]  md:w-[561px] md:h-[486px]"
          />
        </div>
      </div>
    </section>
  );
}

export default Partner;
