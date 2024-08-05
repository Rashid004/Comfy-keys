/** @format */
import Navigation from "@/components/Navigation";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="relative h-screen w-full overflow-hidden">
        <Navigation />
        <Image
          src="/images/home.svg"
          fill
          quality={100}
          className="object-cover object-center"
          alt="Luxurious bedroom with large windows"
          sizes="100vw"
          priority
        />

        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto sm:mx-0">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-4 font-serif leading-tight text-center sm:text-left">
                Welcome to <br className="sm:hidden" />
                Comfy Keys
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-white mb-8 text-center sm:text-left">
                Experience the Comfort of Home{" "}
                <br className="hidden sm:inline" />
                Away from Home at comfy keys
              </p>
              <div className="flex justify-center sm:justify-start">
                <Link href="/contact">
                  <button className="bg-white text-[#18473D] rounded-full px-6 py-3 text-base sm:text-lg font-semibold hover:bg-gray-100 transition-all duration-300 ease-in-out inline-flex items-center">
                    Contact Us <span className="ml-2">➔</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative py-32  ">
        <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-4 max-w-7xl">
          <div className="relative z-10 lg:max-w-lg lg:w-full md:w-1/2 w-full mb-10 md:mb-0">
            <Image
              className="object-cover object-center  shadow-md"
              alt="About Comfy Keys"
              src="/images/about.svg"
              width={800}
              height={600}
            />
          </div>
          <div className="absolute bg-[#18473D] lg:max-w-lg lg:w-full md:w-1/2 w-5/6 h-5/6 md:h-2/3 top-[14%] left-[15%] z-0"></div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className=" z-40 sm:text-4xl text-3xl md:text-7xl mb-6 font-bold text-[#18473D] absolute top-48 font-[Resgak] left-[41%] uppercase tracking-[9px]">
              About Us
            </h1>

            <p className="text-[#8D8A8A] leading-[25px] flex-shrink text-[16px] text-start w-[70%] not-italic pt-28">
              <span className="text-[#848282] leading-normal font-semibold mb-4">
                Welcome to Comfy Keys — Your Gateway to Comfortable Living
              </span>
              <br />
              At Comfy Keys, we simplify the rental process, offering a
              user-friendly platform that makes finding your next home
              effortless and enjoyable. Our wide selection of properties ensures
              that you find the perfect fit for your style, location, and
              budget.
              <br /> Dedicated to seamless experiences, we support you from
              search to move-in, making renting straightforward and stress-free.
              Choose Comfy Keys and unlock the door to your new home with ease
              and confidence.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-24 max-w-7xl mx-auto">
        <div className="flex items-center justify-center flex-col gap-3 mb-12">
          <h1 className="text-[#18473D] font-[Resgak] uppercase text-6xl tracking-[9.6px] font-bold not-italic">
            Our Amenities
          </h1>

          <p className="text-[#8D8A8A] font-normal">
            Discover the Features That Make Your Stay Unforgettable
          </p>
        </div>

        <div className="container mx-auto flex items-center gap-10 justify-center">
          <div className="flex flex-col items-start bg-[#18473D] w-[278px] px-10 py-10 gap-2">
            <Image
              src="/icons/icon2.svg"
              alt="HouseKeeping"
              width={60}
              height={60}
              className=""
            />
            <h2 className="text-[#C5AC8D] text-xl font-medium leading-normal">
              Housekeeping
            </h2>
            <p className="text-[#8D8A8A] font-normal tracking-[0.77]">
              Every room is meticulously cleaned and sanitized to ensure a
              hygienic environment.
            </p>
          </div>
          <div className="flex flex-col items-start bg-[#18473D] w-[278px] px-10 py-10 gap-2">
            <Image
              src="/icons/icon3.svg"
              alt="HouseKeeping"
              width={60}
              height={60}
              className=""
            />
            <h2 className="text-[#C5AC8D] text-xl font-medium leading-normal">
              Smart TVs
            </h2>
            <p className="text-[#8D8A8A] font-normal tracking-[0.77]">
              Every room is meticulously cleaned and sanitized to ensure a
              hygienic environment.
            </p>
          </div>
          <div className="flex flex-col items-start bg-[#18473D] w-[278px] px-10 py-10 gap-2">
            <Image
              src="/icons/icon4.svg"
              alt="HouseKeeping"
              width={60}
              height={60}
              className=""
            />
            <h2 className="text-[#C5AC8D] text-xl font-medium leading-normal">
              Furnished kitchen
            </h2>
            <p className="text-[#8D8A8A] font-normal tracking-[0.77]">
              Every room is meticulously cleaned and sanitized to ensure a
              hygienic environment.
            </p>
          </div>
          <div className="flex flex-col items-start bg-[#18473D] w-[278px] px-10 py-10 gap-2">
            <Image
              src="/icons/icon1.svg"
              alt="HouseKeeping"
              width={60}
              height={60}
              className=""
            />
            <h2 className="text-[#C5AC8D] text-xl font-medium leading-normal">
              Free Parking
            </h2>
            <p className="text-[#8D8A8A] font-normal tracking-[0.77] ">
              Every room is meticulously cleaned and sanitized to ensure a
              hygienic environment.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-24 relative max-w-7xl mx-auto">
        <div className="container mx-auto grid grid-cols-2 gap-12">
          <div className="flex flex-col pr-6">
            <h2 className="text-[64px] font-[Resgak] text-[#18473D] mb-6 uppercase tracking-[9.6px] z-20 ">
              Partner With Us
            </h2>
            <p className="text-[#848282] leading-normal font-semibold mb-4">
              Welcome to Comfy Keys — Your Gateway to Comfortable Living
            </p>
            <p className="text-[#ABA7A7] mb-4">
              Welcome to Comfy Keys — Your Trusted Partner in Property Success.
              When you partner with Comfy Keys, you benefit from dependable
              rental income, professional property management, and outstanding
              tenant services.
              <br />
              Our experienced team handles everything from maintenance and
              marketing to legal compliance and tenant relations, providing you
              with peace of mind and maximizing your property's value. With
              transparent communication, tailored solutions, and a commitment to
              excellence, Comfy Keys is your trusted partner in property
              management. Join us and experience the benefits of working with a
              reliable and dedicated team.
            </p>
          </div>
          <div className=" relative">
            <div className="bg-[#18473D] w-full h-full absolute -top-5 -right-9 z-0"></div>
            <Image
              className="relative z-10 w-full h-full object-cover"
              alt="Partner with Comfy Keys"
              src="/images/amenties.png"
              width={600}
              height={400}
            />
          </div>
        </div>
      </section>
      {/* <section className="bg-gray-100 py-16">
        <div className="container mx-auto flex flex-wrap">
          <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
            <h3 className="text-2xl font-bold text-[#18473D] mb-4">
              Contact Info
            </h3>
            <p className="text-gray-600 mb-2">
              1234 Street Name, City Name, 12345
            </p>
            <p className="text-gray-600 mb-2">+1 (123) 456-7890</p>
            <p className="text-gray-600">info@comfykeys.com</p>
          </div>
          <div className="w-full md:w-2/3 px-4">
            <form>
              <div className="flex flex-wrap -mx-2 mb-4">
                <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full p-2 border rounded"
                  />
                </div>
                <div className="w-full md:w-1/2 px-2">
                  <input
                    type="email"
                    placeholder="Email address"
                    className="w-full p-2 border rounded"
                  />
                </div>
              </div>
              <div className="mb-4">
                <textarea
                  placeholder="Message"
                  rows="4"
                  className="w-full p-2 border rounded"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-[#18473D] text-white px-6 py-2 rounded hover:bg-opacity-90 transition-colors"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </section> */}
    </>
  );
}
