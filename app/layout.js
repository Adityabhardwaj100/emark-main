import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


const syne = Syne({
 subsets: ["latin"],
 variable: "--font-syne",
});

const dmSans = DM_Sans({
 subsets: ["latin"],
 variable: "--font-dm",
});

export const metadata = {
 title: "Emark | AI-Powered Business Solutions",
 description: "We deploy industry-ready AI solutions that save time, reduce costs, and scale your operations—without the complexity.",
};

export default function RootLayout({ children }) {
 return (
 <html lang="en" className="scroll-smooth">
 <head>

 </head>
 <body className={`${syne.variable} ${dmSans.variable} font-dm bg-dark text-gray-400 antialiased relative selection:bg-lime selection:text-dark overflow-x-hidden w-full`}>
 <Navbar />
 {children}
 <Footer />
 </body>
 </html>
 );
}
