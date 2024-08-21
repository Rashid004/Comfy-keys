/** @format */

import Image from "next/image";

function Partner() {
  return (
    <section className="section-container mb-8 py-6 sm:py-20 " id="partner">
      <div className="flex flex-col items-start mx-4 md:flex-row gap-2 md:gap-6 sm:items-center">
        <div className="relative inset-0 z-20 flex items-start gap-4 md:gap-10 lg:gap-16 flex-col w-full md:w-1/2 translate-y-4 lg:translate-y-10 order-2 md:order-1">
          <h1 className="heading-style text-nowrap">Partner With Us</h1>
          <p className="text-content w-full lg:w-4/5">
            <span className="text-dark-100 leading-normal font-semibold">
              Welcome to Comfy Keys — Your Trusted Partner in Property Success.{" "}
            </span>
            When you partner with Comfy Keys, you benefit from dependable rental
            income, professional property management, and outstanding tenant
            services. Our experienced team handles everything from maintenance
            and marketing to legal compliance and tenant relations, providing
            you with peace of mind and maximizing your property&lsquo;s value.
            With transparent communication, tailored solutions, and a commitment
            to excellence, Comfy Keys is your trusted partner in property
            management. Join us and experience the benefits of working with a
            reliable and dedicated team.
          </p>
        </div>
        <div className="order-1 md:order-2 w-full md:w-3/4 sm:w-3/4 ">
          <Image
            src="/images/image2.svg"
            alt="About Comfy Keys"
            width={545}
            height={520}
            className="object-cover object-center shadow-md w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}

export default Partner;
