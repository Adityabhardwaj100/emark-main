"use client";
import { motion } from "framer-motion";
import { PRICING_TIERS } from "@/lib/constants";

export default function Pricing() {
 return (
 <section id="pricing" className="py-24 bg-black ">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="text-center mb-16">
 <div className="inline-block border border-white/10 bg-black rounded-full px-4 py-1.5 text-xs font-bold tracking-widest uppercase text-gray-300 mb-6">
 ✦ INVESTMENT
 </div>
 <h2 className="text-4xl md:text-5xl font-bold font-syne text-white mb-4">
 Flexible Pricing
 </h2>
 <p className="text-xl text-gray-400">
 No hidden fees. Just vibes and value. 💸
 </p>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
 {PRICING_TIERS.map((tier, idx) => (
 <motion.div
 key={idx}
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-100px" }}
 transition={{ delay: idx * 0.1 }}
 className={`bg-black rounded-3xl p-8 flex flex-col ${
 tier.popular 
 ? "border border-lime relative transform md:-translate-y-4 shadow-[0_0_40px_rgba(200,241,53,0.1)]" 
 : "border border-white/5"
 }`}
 >
 {tier.popular && (
 <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-lime text-dark px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
 Most Popular
 </div>
 )}
 
 <h3 className="text-2xl font-bold font-syne text-white mb-2">{tier.title}</h3>
 <div className="text-3xl font-bold text-white mb-2">{tier.price}</div>
 <p className="text-gray-400 text-sm pb-8 mb-8">
 {tier.subtitle}
 </p>
 
 <ul className="space-y-4 mb-8 flex-grow">
 {tier.features.map((feature, fIdx) => (
 <li key={fIdx} className="flex items-start gap-3">
 <span className="text-white text-sm">✓</span>
 <span className="text-gray-300 text-sm">{feature}</span>
 </li>
 ))}
 </ul>
 
 <a
 href="#contact"
 className={`block w-full py-4 rounded-full text-center font-medium transition-colors ${
 tier.popular
 ? "bg-lime text-dark hover:bg-[#b5db30]"
 : "border border-white text-white hover:bg-white/5"
 }`}
 >
 {tier.ctaText}
 </a>
 </motion.div>
 ))}
 </div>
 </div>
 </section>
 );
}
