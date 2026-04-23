"use client";
import { useState } from "react";
import { PRICING_TIERS, FAQS } from "@/lib/constants";
import TextReveal from "@/components/TextReveal";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Zap, Shield, Rocket } from "lucide-react";

export default function PricingPage() {
 const [openFaq, setOpenFaq] = useState(null);

 return (
 <main className="pt-32 md:pt-48 pb-24 min-h-screen bg-dark">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center w-full">
 <div className="mb-16 md:mb-24 max-w-4xl mx-auto w-full">
 <TextReveal text="Investment Plans" className="text-4xl sm:text-7xl md:text-9xl font-bold font-syne text-white mb-8 justify-center tracking-tighter uppercase" />
 <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
 Scale your cognitive capacity with predictable, transparent investment tiers. 
 No hidden fees. Every plan includes institutional-grade security and zero-lag performance.
 </p>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32 w-full">
 {PRICING_TIERS.map((tier, idx) => (
 <motion.div
 key={idx}
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: tier.delay }}
 className={`bg-black rounded-[3.5rem] p-12 flex flex-col text-left group min-h-[600px] ${
 tier.popular 
 ? "border border-lime relative transition-all shadow-[0_0_60px_rgba(200,241,53,0.05)]" 
 : "border border-white/5"
 }`}
 >
 {tier.popular && (
 <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-lime text-black px-6 py-1 text-[10px] font-black uppercase tracking-[0.3em] rounded-full">
 Recommended
 </div>
 )}
 <h3 className="text-3xl font-bold font-syne text-white mb-4 uppercase tracking-tighter">{tier.title}</h3>
 <div className="text-4xl font-bold text-white mb-2 font-syne">{tier.price}</div>
 <p className="text-gray-500 text-sm pb-8 mb-10 leading-relaxed">
 {tier.subtitle}
 </p>
 <ul className="space-y-5 mb-12 flex-grow">
 {tier.features.map((feature, fIdx) => (
 <li key={fIdx} className="flex items-start gap-4">
 <div className="mt-1 w-1.5 h-1.5 bg-lime rounded-full" />
 <span className="text-gray-400 text-sm leading-tight">{feature}</span>
 </li>
 ))}
 </ul>
 <button className={`w-full py-5 rounded-2xl font-black font-syne text-xs uppercase tracking-widest transition-all ${
 tier.popular ? 'bg-lime text-black hover:bg-white' : 'bg-white/5 text-white hover:bg-white/10'
 }`}>
 {tier.ctaText}
 </button>
 </motion.div>
 ))}
 </div>

 {/* Neural Add-ons: NEW CONTENT */}
 <div className="mb-32 md:mb-48 w-full">
 <div className="text-left mb-12 md:mb-16 px-4">
 <h2 className="text-3xl md:text-4xl font-bold font-syne text-white mb-6 uppercase tracking-tighter">Neural Add-ons</h2>
 <p className="text-gray-500 text-lg">Enhance your core architecture with specialized cognitive expansion modules.</p>
 </div>
 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
 {[
 { title: "Quantum Priority", icon: Zap, desc: "Dedicated high-priority compute lanes for real-time inference during peak loads." },
 { title: "Iron-Gate Security", icon: Shield, desc: "Extended localized security audits and air-gapped data synchronization protocols." },
 { title: "Global Scale-Sync", icon: Rocket, desc: "Instant deployment of AI nodes across multi-region server clusters for global reach." },
 ].map((item, i) => (
 <div key={i} className="bg-white/[0.01] border border-white/5 p-8 rounded-3xl text-left hover:bg-white/[0.03] transition-colors">
 <item.icon className="text-white mb-6 w-8 h-8" />
 <h4 className="text-white font-bold font-syne text-xl mb-4 uppercase">{item.title}</h4>
 <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
 </div>
 ))}
 </div>
 </div>

 <div className="max-w-4xl mx-auto w-full px-4 text-left md:text-center">
 <div className="text-left md:text-center mb-16">
 <h2 className="text-3xl md:text-4xl font-bold font-syne text-white mb-6 uppercase tracking-tighter">Frequently Asked Questions</h2>
 <div className="w-24 h-[1px] bg-lime/30 mx-auto hidden md:block" />
 </div>
 <div className="space-y-6">
 {FAQS.map((faq, i) => (
 <div key={i} className="border border-white/5 bg-transparent rounded-[2.5rem] overflow-hidden group hover:border-white/10 transition-colors">
 <button 
 className="w-full text-left px-10 py-8 flex justify-between items-center bg-transparent"
 onClick={() => setOpenFaq(openFaq === i ? null : i)}
 >
 <span className="text-xl font-bold text-white font-syne pr-8 uppercase tracking-tight leading-tight">{faq.q}</span>
 <motion.div animate={{ rotate: openFaq === i ? 180 : 0 }}>
 <ChevronDown className="text-white" />
 </motion.div>
 </button>
 <AnimatePresence>
 {openFaq === i && (
 <motion.div
 initial={{ height: 0, opacity: 0 }}
 animate={{ height: "auto", opacity: 1 }}
 exit={{ height: 0, opacity: 0 }}
 className="overflow-hidden"
 >
 <p className="px-10 pb-10 text-gray-500 text-lg leading-relaxed pt-8">
 {faq.a}
 </p>
 </motion.div>
 )}
 </AnimatePresence>
 </div>
 ))}
 </div>
 </div>
 </div>
 </main>
 );
}
