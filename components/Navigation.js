/** @format */

import Link from "next/link";

const Navigation = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-40 px-8 py-4">
      <div className="w-[95%] h-[83px] flex-shrink-0 mx-auto bg-[rgba(195,191,217,0.40)] border border-[rgba(195,191,217,0.13)] rounded-[20px] flex justify-between items-center px-8 py-5 backdrop-blur-[5.2px] ">
        <div className="flex items-center">
          <img
            src="/images/logo.svg"
            alt="Comfy Keys Logo"
            className="h-12 w-auto mr-2"
          />
        </div>

        <nav>
          <ul className="flex space-x-8">
            {["Home", "About", "Amenities", "Contact"].map((item) => (
              <li key={item}>
                <Link
                  href={`/${item.toLowerCase()}`}
                  className="text-white hover:text-gray-200 text-sm"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
