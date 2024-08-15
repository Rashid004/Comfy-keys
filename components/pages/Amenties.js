/** @format */

import Image from "next/image";

function Amenities() {
  const amentiesItems = [
    {
      icon: "/icons/icon2.svg",
      title: "Housekeeping",
      description:
        "Every room is meticulously cleaned and sanitized to ensure hygienic environment.",
    },
    {
      icon: "/icons/icon3.svg",
      title: "Smart TVs",
      description:
        "Enjoy a wide range of streaming options and channels with our Smart TVs",
    },
    {
      icon: "/icons/icon4.svg",
      title: "Furnished Kitchen",
      description:
        "Prepare your meals in our fully equipped kitchen facilities.",
    },
    {
      icon: "/icons/icon1.svg",
      title: "Free Parking",
      description: "Convenient and secure parking is available for all guests.",
    },
  ];
  return (
    <section
      className="max-w-7xl mx-auto px-2 sm:px-6 md:px-0 mb-8 pb-20 md:pb-0 md:mb-0 overflow-x-hidden"
      id="amenities"
    >
      <div className="flex flex-col items-start md:items-center gap-3 mb-4 md:mb-8">
        <h1 className="text-dark-500 font-serif ml-[26px] uppercase text-xl sm:text-2xl md:text-6xl tracking-[3.6px] sm:tracking-[6px] md:tracking-[9.6px] font-bold  ">
          Our Amenities
        </h1>

        <p className="text-dark-200 font-normal text-left text-sm sm:text-base hidden md:block mb-6">
          Discover the Features That Make Your Stay Unforgettable
        </p>
      </div>
      <div className="flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-6 md:gap-8">
        {amentiesItems.map((amenity, index) => (
          <div
            key={index}
            className="flex flex-col items-start text-left bg-dark-500 w-[86%] sm:w-2/3 md:w-[278px] h-64 sm:h-[268px] p-12 sm:px-10  sm:py-12 md:px-11 md:py-10 justify-center gap-4"
          >
            <Image
              src={amenity.icon}
              alt={amenity.title}
              width={50}
              height={50}
              className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px]"
            />
            <h2 className="text-dark-600 text-lg sm:text-xl font-medium leading-normal">
              {amenity.title}
            </h2>
            <p className="text-dark-200 font-normal text-sm sm:text-base w-3/4 md:w-full">
              {amenity.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Amenities;
