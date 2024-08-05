/** @format */

import Image from "next/image";

function Logo() {
  return (
    <div className="flex items-center justify-center p-4">
      <Image
        src="/images/logo.svg"
        alt="logo"
        width={100}
        height={60}
        className="h-auto w-auto"
      />
    </div>
  );
}

export default Logo;
