/** @format */

import { Poppins } from "next/font/google";
import "./globals.css";

// Specify the weights you want to use
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Add the weights you need
});

export const metadata = {
  title: "Comfy keys",
  description: "Comfy keys best orga.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <main>{children}</main>
      </body>
    </html>
  );
}
