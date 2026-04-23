"use client";
import Link from "next/link";
import { Linkedin, Twitter, Instagram, ArrowRight } from "lucide-react";
import MagneticButton from "./MagneticButton";
import { motion } from "framer-motion";

export default function Footer() {
 return (
 <footer className="bg-dark pt-12 md:pt-16 overflow-hidden relative border-t-0">
 <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-[1px] bg-gradient-to-r from-transparent via-lime/30 to-transparent"></div>
 
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
 <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-10">
 <div className="lg:col-span-5">
 <h3 className="text-3xl font-syne font-bold text-white mb-6">Stay Updated</h3>
 <p className="text-gray-400 mb-8 max-w-sm">
 Get the latest insights on AI automation and digital growth delivered straight to your inbox.
 </p>
 <form className="flex bg-black border border-white/10 rounded-full p-1 max-w-md focus-within:border-lime/50 transition-colors">
 <input 
 type="email" 
 placeholder="Enter your email" 
 className="bg-transparent text-white px-6 py-3 w-full outline-none text-sm placeholder:text-gray-500"
 />
 <button className="bg-lime text-dark px-6 py-3 rounded-full flex items-center justify-center hover:bg-[#b5db30] transition-colors">
 <ArrowRight size={18} />
 </button>
 </form>
 </div>
 
 <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
 <div className="flex flex-col space-y-4">
 <h4 className="text-white font-syne font-bold mb-2">Agency</h4>
 <Link href="/services" className="text-gray-400 hover:text-white transition-colors text-sm">Services</Link>
 <Link href="/industries" className="text-gray-400 hover:text-white transition-colors text-sm">Industries</Link>
 <Link href="/pricing" className="text-gray-400 hover:text-white transition-colors text-sm">Pricing</Link>
 </div>
 <div className="flex flex-col space-y-4">
 <h4 className="text-white font-syne font-bold mb-2">Resources</h4>
 <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Case Studies</Link>
 <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Blog</Link>
 <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Documentation</Link>
 </div>
 <div className="flex flex-col space-y-4">
 <h4 className="text-white font-syne font-bold mb-2">Social</h4>
 <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">LinkedIn</Link>
 <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Twitter</Link>
 <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Instagram</Link>
 </div>
 </div>
 </div>
 
 {/* Giant Typography */}
 <div className="w-full flex justify-center items-end mt-10 pt-8 pb-6 overflow-hidden">
 <motion.h1 
 initial={{ y: 50, opacity: 0 }}
 whileInView={{ y: 0, opacity: 1 }}
 viewport={{ once: true }}
 transition={{ duration: 0.8, ease: "easeOut" }}
 className="text-[18vw] sm:text-[16vw] font-syne font-bold text-white/[0.03] leading-none tracking-tighter select-none w-full text-center hover:text-white/[0.05] transition-colors max-w-full overflow-hidden"
 >
 EMARK
 </motion.h1>
 </div>

 <div className="flex flex-col md:flex-row justify-between items-center pb-8 pt-8 -mt-4">
 <p className="text-sm text-gray-600 mb-4 md:mb-0">
 © 2026 Emark AI Solutions. All rights reserved.
 </p>
 <div className="flex space-x-4">
 <MagneticButton className="text-gray-500 hover:text-white p-2"><Linkedin size={20} /></MagneticButton>
 <MagneticButton className="text-gray-500 hover:text-white p-2"><Twitter size={20} /></MagneticButton>
 <MagneticButton className="text-gray-500 hover:text-white p-2"><Instagram size={20} /></MagneticButton>
 </div>
 </div>
 </div>
 </footer>
 );
}
