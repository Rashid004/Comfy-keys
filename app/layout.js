/** @format */

import { Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/components/pages/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"], // Use the default weight if you want to avoid specifying a weight.
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
        <Footer />
      </body>
    </html>
  );
}
