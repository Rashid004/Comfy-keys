/** @format */

// /** @format */

// import Image from "next/image";

// function Amenities() {
//   return (
//     <section
//       className="max-w-7xl mx-auto px-6 md:px-0 mb-8 pb-20 md:pb-0 md:mb-0"
//       id="amenities"
//     >
//       <div className="flex flex-col items-start md:items-center gap-3 mb-4 md:mb-12">
//         <h1 className="text-[#18473D] font-[nunito]  md:ml-0 uppercase text-2xl sm:text-5xl lg:text-6xl tracking-[6px] md:tracking-[9.6px] font-bold text-left">
//           Our Amenities
//         </h1>

//         <p className="text-[#8D8A8A] font-normal text-left hidden md:block mb-6">
//           Discover the Features That Make Your Stay Unforgettable
//         </p>
//       </div>
//       <div className="flex flex-wrap justify-start gap-6 md:gap-8">
//         {[
//           {
//             icon: "/icons/icon2.svg",
//             title: "Housekeeping",
//             description:
//               "Every room is meticulously cleaned and sanitized to ensure a hygienic environment.",
//           },
//           {
//             icon: "/icons/icon3.svg",
//             title: "Smart TVs",
//             description:
//               "Enjoy a wide range of streaming options and channels with our Smart TVs",
//           },
//           {
//             icon: "/icons/icon4.svg",
//             title: "Furnished Kitchen",
//             description:
//               "Prepare your meals in our fully equipped kitchen facilities.",
//           },
//           {
//             icon: "/icons/icon1.svg",
//             title: "Free Parking",
//             description:
//               "Convenient and secure parking is available for all guests.",
//           },
//         ].map((amenity, index) => (
//           <div
//             key={index}
//             className="flex flex-col items-start text-left bg-[#18473D] w-[316px] md:w-[278px] h-[268px] px-8 py-10 md:px-[45px] md:py-10 justify-center gap-4"
//           >
//             <Image
//               src={amenity.icon}
//               alt={amenity.title}
//               width={60}
//               height={60}
//             />
//             <h2 className="text-[#C5AC8D] text-xl font-medium leading-normal">
//               {amenity.title}
//             </h2>
//             <p className="text-[#8D8A8A] font-normal text-base">
//               {amenity.description}
//             </p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default Amenities;

import Image from "next/image";

function Amenities() {
  return (
    <section
      className="max-w-7xl mx-auto px-2 sm:px-6 md:px-0 mb-8 pb-20 md:pb-0 md:mb-0 overflow-x-hidden"
      id="amenities"
    >
      <div className="flex flex-col items-start  md:items-center gap-3 mb-4 md:mb-8">
        <h1 className="text-[#18473D] font-[nunito] md:ml-0 uppercase text-xl sm:text-2xl md:text-5xl lg:text-6xl tracking-[4px] sm:tracking-[6px] md:tracking-[9.6px] font-bold text-start ml-4 md:ml-0">
          Our Amenities
        </h1>

        <p className="text-[#8D8A8A] font-normal text-left text-sm sm:text-base hidden md:block mb-6">
          Discover the Features That Make Your Stay Unforgettable
        </p>
      </div>
      <div className="flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-6 md:gap-8">
        {[
          {
            icon: "/icons/icon2.svg",
            title: "Housekeeping",
            description:
              "Every room is meticulously cleaned and sanitized to ensure a hygienic environment.",
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
            description:
              "Convenient and secure parking is available for all guests.",
          },
        ].map((amenity, index) => (
          <div
            key={index}
            className="flex flex-col items-start text-left bg-[#18473D] w-[90%] sm:w-[316px] md:w-[278px] h-auto sm:h-[268px] p-12 sm:px-8  sm:py-10 md:px-[45px] md:py-10 justify-center gap-4"
          >
            <Image
              src={amenity.icon}
              alt={amenity.title}
              width={50}
              height={50}
              className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px]"
            />
            <h2 className="text-[#C5AC8D] text-lg sm:text-xl font-medium leading-normal">
              {amenity.title}
            </h2>
            <p className="text-[#8D8A8A] font-normal text-sm sm:text-base">
              {amenity.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Amenities;
