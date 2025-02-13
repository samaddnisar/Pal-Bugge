import { Fjalla_One } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/header/Navbar";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";

/* ✅ Load Fjalla One from Google Fonts */
const fjallaOne = Fjalla_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-fjalla",
});

/* ✅ Load Satoshi Locally */
const satoshi = localFont({
  src: [
    {
      path: "./fonts/Satoshi-Light.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-satoshi",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${fjallaOne.variable} ${satoshi.variable}`}>
        <div className="max-w-[1440px] px-[3vw] mx-auto">
          <Navbar />
          <main>{children}</main>
          <Contact />
          <Footer />
        </div>
      </body>
    </html>
  );
}
