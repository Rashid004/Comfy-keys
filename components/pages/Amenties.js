/** @format */

import Image from "next/image";

function Amenties() {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-0 ">
      <div className="flex flex-col items-start md:items-center gap-3 mb-12">
        <h1 className="text-[#18473D] font-[Resgak] uppercase text-3xl sm:text-5xl lg:text-6xl tracking-[6px] md:tracking-[9.6px] font-bold text-left">
          Our Amenities
        </h1>

        <p className="text-[#8D8A8A] font-normal text-left hidden md:block">
          Discover the Features That Make Your Stay Unforgettable
        </p>
      </div>

      <div className="container mx-auto flex flex-wrap items-start gap-10">
        <div className="flex flex-col items-start text-left bg-[#18473D] w-full max-w-xs md:w-[278px] h-[268px] px-8 py-6 md:py-8 justify-center md:gap-4 gap-3">
          <Image
            src="/icons/icon2.svg"
            alt="Housekeeping"
            width={60}
            height={60}
          />
          <h2 className="text-[#C5AC8D] text-lg sm:text-xl font-medium leading-normal">
            Housekeeping
          </h2>
          <p className="text-[#8D8A8A] font-normal text-sm sm:text-base">
            Every room is meticulously cleaned and sanitized to ensure a
            hygienic .
          </p>
        </div>
        <div className="flex flex-col items-start text-left bg-[#18473D] w-full max-w-xs md:w-[278px] h-[268px] px-8 py-6 md:py-8 justify-center md:gap-4 gap-3">
          <Image
            src="/icons/icon3.svg"
            alt="Smart TVs"
            width={60}
            height={60}
          />
          <h2 className="text-[#C5AC8D] text-lg sm:text-xl font-medium leading-normal">
            Smart TVs
          </h2>
          <p className="text-[#8D8A8A] font-normal text-sm sm:text-base">
            Enjoy a wide range of channels and streaming services in every room.
          </p>
        </div>
        <div className="flex flex-col items-start text-left bg-[#18473D] w-full max-w-xs md:w-[278px] h-[268px] px-8 py-6 md:py-8 justify-center md:gap-4 gap-3">
          <Image
            src="/icons/icon4.svg"
            alt="Furnished kitchen"
            width={60}
            height={60}
          />
          <h2 className="text-[#C5AC8D] text-lg sm:text-xl font-medium leading-normal">
            Furnished Kitchen
          </h2>
          <p className="text-[#8D8A8A] font-normal text-sm sm:text-base">
            Prepare your meals in our fully equipped kitchen facilities.
          </p>
        </div>
        <div className="flex flex-col items-start text-left bg-[#18473D] w-full max-w-xs md:w-[278px] h-[268px] px-8 py-6 md:py-8 justify-center md:gap-4 gap-3">
          <Image
            src="/icons/icon1.svg"
            alt="Free Parking"
            width={60}
            height={60}
          />
          <h2 className="text-[#C5AC8D] text-lg sm:text-xl font-medium leading-normal">
            Free Parking
          </h2>
          <p className="text-[#8D8A8A] font-normal text-sm sm:text-base">
            Convenient and secure parking is available for all guests.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Amenties;
