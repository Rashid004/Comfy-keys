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
    <section className="section-container -mt-6" id="amenities">
      <div className="flex flex-col items-start md:items-center justify-items-start gap-3 mb-4 md:mb-8 mx-4">
        <div>
          <h1 className="heading-style">Our Amenities</h1>
          <p className="text-dark-200 font-normal text-left text-sm sm:text-base hidden md:block mb-6">
            Discover the Features That Make Your Stay Unforgettable
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 justify-items-center">
          {amentiesItems.map((amenity, index) => (
            <div
              key={index}
              className="flex flex-col items-start text-left bg-dark-500 w-full sm:w-2/3 md:w-[278px] h-64 sm:h-[268px] p-12 sm:px-10  sm:py-12 md:px-11 md:py-10 justify-center gap-4"
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
      </div>
    </section>
  );
}

export default Amenities;
