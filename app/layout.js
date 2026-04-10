import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import metadata from "./metadata";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export { metadata };
export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <meta
          name="naver-site-verification"
          content="92f0c821fcdf7ab4edcfd5518f772c79507b2849"
        />
        <meta
          name="google-site-verification"
          content="umTVlYwMMNvvlJy319br6ba_9ouRQb7V0m_jzWLvlNY"
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children} <Footer />
      </body>
    </html>
  );
}
