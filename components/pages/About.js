/** @format */

import Image from "next/image";

function About() {
  return (
    <section className="section-container sm:mb-14" id="about ">
      <div className="flex items-start sm:items-center flex-col md:flex-row justify-center mx-4 gap-14 lg:gap-24">
        {/* Image Section */}
        <div className="w-full sm:w-4/5 md:w-3/4 flex">
          <Image
            src="/images/about.png"
            alt="About Comfy Keys"
            width={545}
            height={520}
            className="object-cover object-center shadow-md w-full h-auto"
          />
        </div>

        {/* Text Section */}
        <div className=" flex flex-col items-start gap-4 md:gap-14 lg:gap-20 w-full md:3/4 lg:translate-y-2 md:translate-y-4">
          <h1 className="heading-style lg:-translate-x-36 md:-translate-x-24">
            About Us
          </h1>
          <p className="text-content w-full lg:w-4/5">
            <span className="text-dark-100 font-semibold mb-1 hidden md:block">
              Welcome to Comfy Keys — Your Gateway to Comfortable Living{" "}
            </span>
            At Comfy Keys, we simplify the rental process, offering a
            user-friendly platform that makes finding your next home effortless
            and enjoyable. Our wide selection of properties ensures that you
            find the perfect fit for your style, location, and budget. Dedicated
            to seamless experiences, we support you from search to move-in,
            making renting straightforward and stress-free. Choose Comfy Keys
            and unlock the door to your new home with ease and confidence.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
