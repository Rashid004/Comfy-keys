/** @format */

import Image from "next/image";

function Partner() {
  return (
    <section className="relative py-24 md:py-32 px-6 md:px-0 max-w-7xl mx-auto">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col order-2 md:order-1 pr-6">
          <div className="relative md:absolute -top-24 md:top-36 md:right-0 z-20 mt-32 md:mt-0">
            <h1 className="text-2xl sm:text-4xl md:text-[66px] mb-6 font-bold text-[#18473D] font-[Resgak] uppercase tracking-[6px] md:tracking-[9.6px] text-start md:text-left">
              Partner With Us
            </h1>

            <p className="text-[#ABA7A7] mb-4 text-start md:text-left w-full md:w-[45%]">
              <span className="text-[#848282] leading-normal font-semibold mb-0 md:mb-4  block">
                Welcome to Comfy Keys — Your Gateway to Comfortable Living
              </span>
              Welcome to Comfy Keys — Your Trusted Partner in Property Success.
              When you partner with Comfy Keys, you benefit from dependable
              rental income, professional property management, and outstanding
              tenant services. Our experienced team handles everything from
              maintenance and marketing to legal compliance and tenant
              relations, providing you with peace of mind and maximizing your
              property's value. With transparent communication, tailored
              solutions, and a commitment to excellence, Comfy Keys is your
              trusted partner in property management. Join us and experience the
              benefits of working with a reliable and dedicated team.
            </p>
          </div>
        </div>

        <div className="absolute bg-[#18473D] w-[70%] h-[25%] md:w-[45%] md:h-2/3 top-[6%] md:top-[110px] right-8 md:left-auto md:-right-9 z-0"></div>

        <div className="relative z-10 md:order-1 left-2">
          <Image
            src="/images/amenties.png"
            alt="About Comfy Keys"
            width={400}
            height={300}
            className="object-cover object-center shadow-md w-full h-auto max-w-[340px] md:max-w-full"
            sizing
          />
        </div>
      </div>
    </section>
  );
}

export default Partner;
