/** @format */

import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
});

export const metadata = {
  title: "Comfy keys",
  description: "Comfy keys best orga.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${nunito.variable}`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
