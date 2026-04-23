"use client";
import { motion } from "framer-motion";
import { AI_SERVICES } from "@/lib/constants";
import MagneticButton from "./MagneticButton";

export default function Services() {
 const containerVars = {
 hidden: { opacity: 0 },
 visible: {
 opacity: 1,
 transition: { staggerChildren: 0.2 }
 }
 };

 const itemVars = {
 hidden: { opacity: 0, y: 30 },
 visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
 };

 return (
 <section id="services" className="py-14 md:py-20 bg-dark relative overflow-hidden text-left">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <motion.div 
 initial="hidden"
 whileInView="visible"
 viewport={{ once: true, margin: "-100px" }}
 variants={containerVars}
 className="flex flex-col md:flex-row justify-between items-end mb-10 md:mb-14 gap-5"
 >
 <motion.div variants={itemVars} className="max-w-2xl">
 <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-syne text-white mb-4">AI Solutions</h2>
 <p className="text-gray-400 text-base md:text-lg">Harness the power of machine intelligence to transform your bottlenecks into competitive advantages.</p>
 </motion.div>
 <motion.div variants={itemVars}>
 <MagneticButton href="/services" className="px-8 py-4 border border-white/10 text-white rounded-full hover:bg-white/5 transition-colors">
 View All Services
 </MagneticButton>
 </motion.div>
 </motion.div>

 <motion.div 
 initial="hidden"
 whileInView="visible"
 viewport={{ once: true, margin: "-50px" }}
 variants={containerVars}
 className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-7"
 >
 {AI_SERVICES.map((srv, i) => {
 const Icon = srv.icon;
 return (
 <motion.div 
 key={i} 
 variants={itemVars}
 className="group bg-black border border-white/5 p-7 md:p-10 rounded-3xl hover:border-lime/30 transition-all duration-500 hover:-translate-y-2"
 >
 <div className="mb-6 w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-lime/10 transition-colors">
 <Icon className="text-white group-hover:text-white transition-colors" size={24} />
 </div>
 <h3 className="text-xl font-bold font-syne text-white mb-3">{srv.title}</h3>
 <p className="text-gray-400 mb-6 leading-relaxed">{srv.description}</p>
 <div className="flex flex-wrap gap-2">
 {srv.features.slice(0, 2).map((feature, fidx) => (
 <span key={fidx} className="text-[10px] uppercase tracking-widest font-bold bg-white/5 px-2 py-1 rounded text-gray-500">
 {feature}
 </span>
 ))}
 </div>
 </motion.div>
 );
 })}
 </motion.div>
 </div>
 </section>
 );
}
