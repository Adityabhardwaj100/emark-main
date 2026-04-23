"use client";
import { motion } from "framer-motion";

const INDUSTRIES_DATA = [
 { name: "Real Estate", metric: "+45%", result: "Lead Capture", icon: "🏠" },
 { name: "E-commerce", metric: "+60%", result: "Conversion", icon: "🛍️" },
 { name: "Healthcare", metric: "+30%", result: "Efficiency", icon: "🏥" },
 { name: "SaaS", metric: "3.5x", result: "Scalability", icon: "⚙️" },
 { name: "Logistics", metric: "-25%", result: "Idle Time", icon: "🚛" },
 { name: "Legal", metric: "90%", result: "Drafting Speed", icon: "⚖️" },
];

export default function Industries() {
 // Triple the data for seamless infinite loop
 const duplicatedIndustries = [...INDUSTRIES_DATA, ...INDUSTRIES_DATA, ...INDUSTRIES_DATA];

 return (
 <section id="industries" className="py-32 bg-transparent overflow-hidden relative selection:bg-lime selection:text-black">
 
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 text-center relative z-10">
 <motion.div 
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 className="inline-block border border-white/10 bg-black/50 backdrop-blur-md rounded-full px-5 py-2 text-[10px] font-bold tracking-[0.3em] uppercase text-white mb-8"
 >
 ✦ WHO WE SERVE
 </motion.div>
 <motion.h2 
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ delay: 0.1 }}
 className="text-5xl md:text-7xl font-bold font-syne text-white tracking-tighter"
 >
 Industries We <span className="text-white">Transform</span>
 </motion.h2>
 </div>

 {/* Premium Infinite Carousel */}
 <div className="relative flex flex-col gap-10">
 <div className="flex overflow-hidden relative">

 <motion.div 
 animate={{ x: ["0%", "-33.33%"] }}
 transition={{ 
 duration: 30, 
 repeat: Infinity, 
 ease: "linear" 
 }}
 className="flex gap-4 md:gap-8 whitespace-nowrap py-10 will-change-transform"
 >
 {duplicatedIndustries.map((item, i) => (
 <motion.div
 key={i}
 whileHover={{ y: -10, borderColor: "rgba(200,241,53,0.5)" }}
 className="w-[280px] md:w-[350px] flex-shrink-0 bg-black/95 border border-white/10 rounded-[2.5rem] p-8 md:p-10 transition-colors group cursor-pointer relative overflow-hidden"
 >
 {/* Internal Scan Line Effect */}
 <div className="absolute inset-0 bg-gradient-to-b from-transparent via-lime/5 to-transparent -translate-y-full group-hover:animate-scan pointer-events-none" />
 
 <div className="flex justify-between items-start mb-10">
 <div className="text-3xl md:text-4xl filter grayscale group-hover:grayscale-0 transition-all duration-500">{item.icon}</div>
 <div className="text-[10px] font-mono text-gray-500 border border-white/10 px-3 py-1 rounded-full uppercase tracking-tighter">
 Deployment_Ready
 </div>
 </div>

 <div className="mb-8">
 <div className="text-4xl md:text-6xl font-bold font-syne text-white mb-2 group-hover:scale-105 transition-transform duration-500">
 {item.metric}
 </div>
 <div className="text-[11px] font-mono text-gray-400 uppercase tracking-[0.2em]">
 Typical {item.result} Gain
 </div>
 </div>

 <div className="pt-6 ">
 <h3 className="text-xl md:text-2xl font-bold font-syne text-white mb-2">
 {item.name}
 </h3>
 <div className="flex items-center gap-2">
 <div className="w-1.5 h-1.5 bg-lime rounded-full animate-pulse" />
 <span className="text-[9px] font-mono text-gray-500 uppercase tracking-[0.3em]">System_Integrated</span>
 </div>
 </div>
 </motion.div>
 ))}
 </motion.div>
 </div>
 </div>

 <motion.div 
 initial={{ opacity: 0 }}
 whileInView={{ opacity: 1 }}
 viewport={{ once: true }}
 className="mt-20 text-center px-4"
 >
 <p className="text-gray-500 text-sm md:text-base font-dm tracking-widest uppercase">
 Orchestrating growth for businesses ready to <span className="text-white">Dominate</span> their niche.
 </p>
 </motion.div>
 </section>
 );
}
