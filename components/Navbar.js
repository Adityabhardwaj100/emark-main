"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, Cpu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import MagneticButton from "./MagneticButton";

export default function Navbar() {
 const [isOpen, setIsOpen] = useState(false);

 const navLinks = [
 { name: "About Us", href: "/about" },
 { name: "Projects", href: "/projects" },
 { name: "Contact Us", href: "/contact" },
 ];

 return (
 <div className="fixed top-6 left-0 w-full z-50 px-4 flex justify-center">
 <nav className="max-w-4xl w-full bg-white/[0.03] backdrop-blur-2xl border border-white/5 rounded-full px-6 md:px-10 py-4 flex justify-between items-center shadow-[0_8px_32px_rgba(0,0,0,0.8)]">
 <Link href="/" className="font-syne text-xl font-bold text-white tracking-tighter hover:text-white transition-colors">
 EMARK
 </Link>
 
 <div className="hidden md:flex items-center gap-12">
 <div className="flex items-center gap-10">
 {navLinks.map((link) => (
 <Link key={link.name} href={link.href} className="text-[13px] uppercase tracking-widest font-bold text-gray-400 hover:text-white transition-colors relative group">
 {link.name}
 <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-lime transition-all group-hover:w-full"></span>
 </Link>
 ))}
 </div>
 
 <MagneticButton href="/contact" className="bg-white text-black px-8 py-3 rounded-full text-[13px] font-bold uppercase tracking-wider hover:bg-lime transition-all hover:scale-105">
 Get Started
 </MagneticButton>
 </div>

 <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
 {isOpen ? <X size={20} /> : <Menu size={20} />}
 </button>
 </nav>

 <AnimatePresence>
 {isOpen && (
 <motion.div
 initial={{ opacity: 0, scale: 0.95, y: -20 }}
 animate={{ opacity: 1, scale: 1, y: 0 }}
 exit={{ opacity: 0, scale: 0.95, y: -20 }}
 className="fixed top-24 left-4 right-4 bg-black/98 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-10 md:hidden shadow-2xl z-[60]"
 >
 <div className="flex flex-col gap-6">
 {navLinks.map((link) => (
 <Link
 key={link.name}
 href={link.href}
 onClick={() => setIsOpen(false)}
 className="text-2xl font-syne font-bold text-gray-300 hover:text-white"
 >
 {link.name}
 </Link>
 ))}
 <div className="pt-6 flex flex-col gap-6">
 <div className="flex items-center gap-2">
 <span className="h-2 w-2 rounded-full bg-lime animate-pulse"></span>
 <span className="text-xs uppercase tracking-widest text-white">AI Active</span>
 </div>
 <Link
 href="/contact"
 onClick={() => setIsOpen(false)}
 className="bg-lime text-black py-4 rounded-full text-center font-bold text-lg"
 >
 Start Project
 </Link>
 </div>
 </div>
 </motion.div>
 )}
 </AnimatePresence>
 </div>
 );
}
