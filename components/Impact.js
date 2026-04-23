"use client";
import { motion } from "framer-motion";
import { IMPACT_STATS } from "@/lib/constants";
import CountUp from "./CountUp";

export default function Impact() {
  return (
  <section id="impact" className="py-14 md:py-20 bg-black">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <div className="text-center mb-10 md:mb-16">
  <div className="inline-block border border-white/10 bg-black rounded-full px-4 py-1.5 text-xs font-bold tracking-widest uppercase text-gray-300 mb-4">
  ✦ PROVEN IMPACT
  </div>
  <h2 className="text-3xl md:text-5xl font-bold font-syne text-white">
  Real Results. No Cap
  </h2>
  </div>

  <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
  {IMPACT_STATS.map((stat, idx) => (
  <motion.div
  key={idx}
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-50px" }}
  transition={{ delay: idx * 0.1 }}
  className="text-center"
  >
  <div className="text-4xl md:text-6xl lg:text-7xl font-bold font-syne text-white mb-2 md:mb-4">
  <CountUp end={parseInt(stat.value)} suffix={stat.suffix} duration={2500} />
  </div>
  <p className="text-gray-400 text-sm md:text-lg leading-snug max-w-[180px] mx-auto">
  {stat.label}
  </p>
  </motion.div>
  ))}
  </div>
  </div>
  </section>
  );
}
