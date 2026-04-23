"use client";
import { SERVICE_DETAILS } from "@/lib/serviceDetails";
import { FAQS, IMPACT_STATS } from "@/lib/constants";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Zap, Rocket, Target, ShieldCheck } from "lucide-react";

export default function ServiceDetail({ params }) {
 const service = SERVICE_DETAILS[params.slug];

 if (!service) {
 notFound();
 }

 return (
 <div className="bg-dark min-h-screen text-white selection:bg-lime selection:text-black pt-32 pb-32 overflow-x-hidden relative">
 {/* Background Elements - Wrapped in containment */}
 <div className="absolute inset-0 overflow-hidden pointer-events-none">
 <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-lime/5 to-transparent" />
 <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-lime/10 blur-[150px] rounded-full opacity-30" />
 </div>

 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
 
 {/* Navigation */}
 <Link 
 href="/#services" 
 className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors uppercase tracking-widest text-xs font-bold mb-16 border border-white/10 bg-white/5 py-2 px-4 rounded-full backdrop-blur-sm hover:border-white/30"
 >
 <ArrowLeft size={14} /> Back to Services
 </Link>
 
 {/* Hero Section */}
 <motion.div 
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 className="max-w-6xl w-full"
 >
 <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-syne tracking-tighter leading-[0.9] mb-8 break-words max-w-full">
 {service.title}
 </h1>
 <p className="text-2xl md:text-3xl font-dm text-gray-300 leading-tight border-l-4 border-lime pl-6 mb-16 opacity-90">
 {service.subtitle}
 </p>
 </motion.div>

 <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mb-32">
 
 {/* Main Content Column */}
 <div className="lg:col-span-8 flex flex-col gap-24">
 
 {/* Ideal Client Section */}
 {service.idealClient && (
 <motion.section 
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 className="bg-black border border-white/5 rounded-3xl p-8 md:p-12"
 >
 <div className="flex items-center gap-4 mb-6">
 <Target className="text-white" size={28} />
 <h2 className="text-2xl md:text-3xl font-bold font-syne text-white">Who We Partner With</h2>
 </div>
 <p className="text-lg md:text-xl font-medium leading-relaxed font-dm text-gray-300">
 {service.idealClient}
 </p>
 </motion.section>
 )}

 {/* Performance KPIs Grid */}
 {service.performanceKPIs && (
 <motion.div 
 initial={{ opacity: 0, scale: 0.95 }}
 whileInView={{ opacity: 1, scale: 1 }}
 viewport={{ once: true }}
 className="grid grid-cols-3 gap-4"
 >
 {service.performanceKPIs.map((kpi, idx) => (
 <div key={idx} className="bg-white/5 border border-white/5 p-6 rounded-2xl text-center">
 <div className="text-3xl font-black text-white font-syne mb-1">{kpi.value}</div>
 <div className="text-[10px] text-gray-500 uppercase tracking-widest font-mono">{kpi.label}</div>
 </div>
 ))}
 </motion.div>
 )}

 {/* Why Prefer Us */}
 <motion.section 
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 >
 <div className="flex items-center gap-4 mb-8">
 <Target className="text-white" size={28} />
 <h2 className="text-3xl md:text-4xl font-bold font-syne">The Emark Advantage</h2>
 </div>
 <p className="text-lg md:text-xl text-gray-400 leading-relaxed whitespace-pre-wrap">
 {service.whyPrefer}
 </p>
 </motion.section>

 {/* Impact */}
 <motion.section 
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 className="bg-black border border-white/5 rounded-[2rem] p-8 md:p-12 relative overflow-hidden group"
 >
 <div className="absolute inset-0 bg-gradient-to-br from-lime/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
 <ShieldCheck className="text-white mb-6" size={32} />
 <h3 className="text-sm font-bold tracking-[0.2em] uppercase text-gray-500 mb-4">Business Impact</h3>
 <p className="text-xl md:text-2xl font-dm text-white leading-relaxed relative z-10">
 &quot;{service.impact}&quot;
 </p>
 </motion.section>

 {/* Procedure / How we do it */}
 <motion.section 
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 >
 <div className="flex items-center gap-4 mb-10">
 <Rocket className="text-white" size={28} />
 <h2 className="text-3xl md:text-4xl font-bold font-syne">Our Methodology</h2>
 </div>
 <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
 {service.procedure.map((step, idx) => (
 <div key={idx} className="relative pl-6 border-l border-white/10 hover:border-lime transition-colors">
 <div className="absolute top-0 left-0 w-2 h-2 rounded-full bg-lime -translate-x-[5px]" />
 <div className="text-xs font-mono text-gray-500 mb-2">PHASE {step.step}</div>
 <h4 className="text-xl font-bold text-white mb-2">{step.title}</h4>
 <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
 </div>
 ))}
 </div>
 </motion.section>

 {/* Key Deliverables Block */}
 {service.keyDeliverables && (
 <motion.section 
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 className="p-10 bg-black border border-lime/10 rounded-[2.5rem] relative overflow-hidden"
 >
 <div className="absolute top-0 right-0 p-8 transform translate-x-1/4 -translate-y-1/4 opacity-10">
 <CheckCircle2 size={200} className="text-white" />
 </div>
 <h3 className="text-2xl md:text-3xl font-bold font-syne mb-8 relative z-10">Project Deliverables</h3>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 relative z-10">
 {service.keyDeliverables.map((item, idx) => (
 <div key={idx} className="flex items-center gap-3">
 <div className="w-1.5 h-1.5 rounded-full bg-lime" />
 <span className="text-gray-400 font-medium">{item}</span>
 </div>
 ))}
 </div>
 </motion.section>
 )}

 {/* Service-Specific Custom Section */}
 {service.customSection && (
 <motion.section 
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 >
 <div className="flex items-center gap-4 mb-10">
 <Zap className="text-white" size={28} />
 <h2 className="text-3xl md:text-4xl font-bold font-syne">{service.customSection.title}</h2>
 </div>
 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
 {service.customSection.features.map((feat, idx) => (
 <div key={idx} className="bg-black border border-white/5 p-6 rounded-2xl hover:border-lime/30 transition-colors group">
 <div className="w-10 h-10 rounded-full bg-lime/10 flex items-center justify-center mb-4 group-hover:bg-lime transition-colors">
 <span className="text-white font-bold text-sm group-hover:text-black transition-colors">0{idx + 1}</span>
 </div>
 <h4 className="text-lg font-bold text-white mb-2">{feat.title}</h4>
 <p className="text-gray-400 text-sm leading-relaxed">{feat.desc}</p>
 </div>
 ))}
 </div>
 </motion.section>
 )}

 </div>

 {/* Sidebar / Offerings */}
 <div className="lg:col-span-4">
 <motion.div 
 initial={{ opacity: 0, x: 20 }}
 whileInView={{ opacity: 1, x: 0 }}
 viewport={{ once: true }}
 className="sticky top-32 bg-black border border-white/10 rounded-[2rem] p-8"
 >
 <div className="flex items-center gap-3 mb-8 pb-8 ">
 <Zap className="text-white" size={24} />
 <h3 className="text-xl font-bold font-syne">Core Capabilities</h3>
 </div>
 <ul className="flex flex-col gap-4">
 {service.offerings.map((item, idx) => (
 <li key={idx} className="flex items-start gap-3">
 <CheckCircle2 className="text-white shrink-0 mt-0.5" size={18} />
 <span className="text-gray-300 text-sm">{item}</span>
 </li>
 ))}
 </ul>

 <div className="mt-12 pt-8 ">
 <p className="text-xs text-gray-500 uppercase tracking-widest mb-4">Ready to upgrade?</p>
 <Link 
 href="/#contact" 
 className="w-full flex items-center justify-center gap-2 bg-lime text-black py-4 rounded-full font-black uppercase text-sm tracking-wider hover:bg-white transition-colors"
 >
 Start Project
 </Link>
 </div>
 </motion.div>
 </div>
 </div>

 {/* Technologies / Infrastructure */}
 {service.technologies && (
 <div className="mb-32">
 <div className="text-center mb-16">
 <h2 className="text-3xl md:text-5xl font-bold font-syne mb-6">Execution Infrastructure</h2>
 <p className="text-gray-400 max-w-2xl mx-auto text-lg">We only deploy enterprise-grade frameworks, robust payment gateways, and global shipping APIs to ensure uncompromising scale.</p>
 </div>
 <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
 {service.technologies.map((tech, idx) => (
 <div 
 key={idx} 
 className="group flex flex-col items-center justify-center p-6 bg-black border border-white/5 rounded-2xl hover:border-lime/30 hover:bg-black transition-all duration-300 relative overflow-hidden"
 >
 <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-lime/0 group-hover:via-lime/50 to-transparent transition-all duration-500" />
 <span className="font-mono text-sm tracking-wide text-gray-500 group-hover:text-white transition-colors text-center">{tech}</span>
 </div>
 ))}
 </div>
 </div>
 )}

 {/* Global Impact Section */}
 <div className="mt-32 pt-20 relative">
 <div className="text-center mb-16 relative z-10">
 <h2 className="text-4xl md:text-5xl font-bold font-syne mb-6">Engineered for Dominance</h2>
 <p className="text-gray-400 max-w-2xl mx-auto text-lg">We don&apos;t rely on guesswork. Our architectures and marketing systems are designed to deliver compounding, measurable growth.</p>
 </div>
 <div className="grid grid-cols-2 md:grid-cols-4 gap-6 relative z-10">
 {IMPACT_STATS.map((stat, i) => (
 <motion.div 
 key={i} 
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ delay: i * 0.1 }}
 className="flex flex-col items-center justify-center text-center p-8 bg-black/80 backdrop-blur-md border border-white/5 rounded-3xl hover:border-lime/30 transition-colors"
 >
 <div className="text-4xl md:text-5xl font-black text-white font-syne mb-4">{stat.value}<span className="text-2xl">{stat.suffix}</span></div>
 <div className="text-xs text-gray-400 font-mono uppercase tracking-widest">{stat.label}</div>
 </motion.div>
 ))}
 </div>
 </div>

 {/* Global FAQ Section */}
 <div className="mt-32 pt-20 ">
 <div className="flex flex-col lg:flex-row gap-16">
 <div className="w-full lg:w-1/3">
 <h2 className="text-4xl md:text-5xl font-bold font-syne mb-6">Common Questions</h2>
 <p className="text-gray-400 text-lg leading-relaxed">Everything you need to know about how we execute top-tier digital engagements and deploy our frameworks.</p>
 </div>
 <div className="w-full lg:w-2/3 flex flex-col gap-6">
 {FAQS.map((faq, i) => (
 <motion.div 
 key={i}
 initial={{ opacity: 0, x: 20 }}
 whileInView={{ opacity: 1, x: 0 }}
 viewport={{ once: true }}
 transition={{ delay: i * 0.1 }}
 className="p-8 md:p-10 bg-black border border-white/5 rounded-[2rem] hover:bg-[#151515] transition-colors"
 >
 <h4 className="text-xl font-bold text-white mb-4 pr-10">{faq.q}</h4>
 <p className="text-gray-400 leading-relaxed">{faq.a}</p>
 </motion.div>
 ))}
 </div>
 </div>
 </div>

 {/* Final Premium CTA Section */}
 <motion.div 
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 className="mt-32 relative rounded-[3rem] overflow-hidden group border border-white/10"
 >
 {/* Dark Gradient Background */}
 <div className="absolute inset-0 bg-black" />
 <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-lime/30 to-transparent" />
 
 <div className="relative z-10 p-12 md:p-24 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-12">
 <div className="max-w-2xl">
 <h2 className="text-4xl md:text-6xl lg:text-7xl font-black font-syne uppercase tracking-tighter mb-6 leading-none text-white">
 Stop Waiting.<br/><span className=" bg-clip-text bg-gradient-to-r from-lime to-white">Start Scaling.</span>
 </h2>
 <p className="text-lg md:text-xl text-gray-400 leading-relaxed font-dm">
 The longer you wait to optimize your digital infrastructure, the more market share you lose to competitors. Let&apos;s architect your unfair advantage today.
 </p>
 </div>

 <div className="shrink-0 flex flex-col items-center gap-4">
 <Link 
 href="/#contact"
 className="relative group/btn flex items-center justify-center gap-3 bg-lime text-black px-12 py-6 rounded-full font-black uppercase tracking-[0.2em] text-sm hover:bg-white transition-all shadow-[0_0_30px_rgba(204,255,0,0.1)] hover:shadow-[0_0_40px_rgba(204,255,0,0.3)] z-10"
 >
 Initiate Discovery <Zap size={18} className="group-hover/btn:rotate-12 transition-transform" fill="currentColor" />
 </Link>
 <span className="text-[10px] text-gray-500 font-mono tracking-widest uppercase mt-4">Average response: &lt; 2 mins</span>
 </div>
 </div>
 </motion.div>

 </div>
 </div>
 );
}
