import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


const spaceGrotesk = Space_Grotesk({
 subsets: ["latin"],
 variable: "--font-syne",
 weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
 subsets: ["latin"],
 variable: "--font-dm",
 weight: ["300", "400", "500", "600", "700", "800"],
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
 <body className={`${spaceGrotesk.variable} ${inter.variable} font-dm bg-dark text-gray-400 antialiased relative selection:bg-lime selection:text-dark overflow-x-hidden w-full`}>
 <Navbar />
 {children}
 <Footer />
 </body>
 </html>
 );
}
