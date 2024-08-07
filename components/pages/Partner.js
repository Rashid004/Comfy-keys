/** @format */

import Image from "next/image";

function Partner() {
  return (
    <section className="relative pt-8 md:py-32 px-6 md:px-0 max-w-7xl mx-auto mb-1 md:mb-0">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col order-2 md:order-1 pr-6">
          <div className="relative md:absolute -top-24 md:top-44 md:right-0 z-20 mt-32 md:mt-0">
            <h1 className="text-[20px]  sm:text-4xl md:text-[66px] mb-6 font-semibold md:font-bold text-[#18473D] font-[Resgak] uppercase tracking-[5px] md:tracking-[9.6px] text-start md:text-left">
              Partner With Us
            </h1>
            <p className="text-[#ABA7A7]  md:mb-4 text-start md:text-left w-full md:w-[45%]">
              <span className="text-[#848282] leading-normal font-semibold mb-0 md:mb-4 block">
                Welcome to Comfy Keys — Your Gateway to Comfortable Living
              </span>
              Welcome to Comfy Keys — Your Trusted Partner in Property Success.
              When you partner with Comfy Keys, you benefit from dependable
              rental income, professional property management, and outstanding
              tenant services. Our experienced team handles everything from
              maintenance and marketing to legal compliance and tenant
              relations, providing you with peace of mind and maximizing your
              property&apos;s value. With transparent communication, tailored
              solutions, and a commitment to excellence, Comfy Keys is your
              trusted partner in property management. Join us and experience the
              benefits of working with a reliable and dedicated team.
            </p>
          </div>
        </div>
        <div className="absolute bg-[#18473D] w-[70%] h-[22%] md:w-[40%] md:h-[60%] -translate-y-4 md:-translate-y-5 right-7 md:-translate-x-20 md:-right-9 z-0"></div>
        <div className="relative z-10 md:order-1 left-2">
          <Image
            src="/images/amenties.png"
            alt="About Comfy Keys"
            width={561}
            height={486}
            className="object-cover object-center shadow-md w-[294px] h-[254px] md:w-[561px] md:h-[486px]"
          />
        </div>
      </div>
    </section>
  );
}

export default Partner;
