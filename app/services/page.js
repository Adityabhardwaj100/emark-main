"use client";
import { AI_SERVICES, DEV_SERVICES } from "@/lib/constants";
import AITerminal from "@/components/AITerminal";
import TextReveal from "@/components/TextReveal";

export default function ServicesPage() {
 return (
 <main className="pt-32 md:pt-48 pb-24 min-h-screen bg-dark w-full">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center w-full">
 <TextReveal text="Our AI Capabilities" className="text-4xl sm:text-6xl md:text-8xl font-bold font-syne text-white mb-10 tracking-tighter justify-center uppercase w-full" />
 
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-center">
 <div className="text-left">
 <p className="text-2xl text-gray-300 mb-8 max-w-2xl leading-relaxed font-syne uppercase tracking-tighter">
 We architect custom intelligence layers that integrate seamlessly into your existing tech stack. Our mission is to transform static businesses into dynamic, autonomous entities.
 </p>
 <p className="text-lg text-gray-500 max-w-xl">
 By leveraging proprietary RAG pipelines and custom-trained LLMs, we ensure your data stays private while your operations become infinitely scalable.
 </p>
 </div>
 <div className="flex justify-center lg:justify-end">
 <AITerminal />
 </div>
 </div>

 {/* Deep Dive Technical Modules */}
 <div className="mb-24 md:mb-48 grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
 <div className="bg-black border border-white/5 p-8 sm:p-12 md:p-16 rounded-[2.5rem] sm:rounded-[4rem] relative overflow-hidden group text-left">
 <div className="absolute top-0 right-0 w-80 h-80 bg-lime/5 blur-[120px] group-hover:bg-lime/10 transition-colors" />
 <div className="text-white font-mono text-[10px] tracking-[0.5em] mb-10 uppercase">0x_Orchestrator</div>
 <h3 className="text-3xl sm:text-4xl md:text-6xl font-bold font-syne text-white mb-10 tracking-tighter uppercase leading-[0.9]">Agentic <br />Reasoning Hives</h3>
 <p className="text-gray-400 leading-relaxed mb-12 text-lg">
 Unlike simple linear bots, our Agent Hives utilize multi-step reasoning chains (CoT) to solve complex business problems. Each agent is a specialized node that communicates via a central &apos;Orchestrator&apos; to ensure high-fidelity execution and self-healing error correction.
 </p>
 <div className="flex items-center gap-8 text-[11px] font-mono text-white/40 uppercase tracking-widest pt-10">
 <div className="flex items-center gap-3">
 <div className="w-2 h-2 bg-lime/40 rounded-full animate-pulse" />
 <span>Status: Optimized</span>
 </div>
 <div className="flex items-center gap-3">
 <div className="w-2 h-2 bg-lime/40 rounded-full" />
 <span>Latency: &lt;120ms</span>
 </div>
 </div>
 </div>
 <div className="bg-black border border-white/5 p-8 sm:p-12 md:p-16 rounded-[2.5rem] sm:rounded-[4rem] relative overflow-hidden group text-left">
 <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 blur-[120px] group-hover:bg-white/10 transition-colors" />
 <div className="text-white/40 font-mono text-[10px] tracking-[0.5em] mb-10 uppercase">0x_Memory_Mesh</div>
 <h3 className="text-3xl sm:text-4xl md:text-6xl font-bold font-syne text-white mb-10 tracking-tighter uppercase leading-[0.9]">Infinite <br />Context Memory</h3>
 <p className="text-gray-400 leading-relaxed mb-12 text-lg">
 Our RAG (Retrieval Augmented Generation) architectures provide your AI with a persistent, secure memory of your institutional knowledge. Every document, record, and SOP is indexed in high-dimensional vector space for sub-second retrieval and contextual grounding.
 </p>
 <div className="flex items-center gap-8 text-[11px] font-mono text-white/20 uppercase tracking-widest pt-10">
 <div className="flex items-center gap-3">
 <div className="w-2 h-2 bg-white/20 rounded-full animate-pulse" />
 <span>Sync: Active</span>
 </div>
 <div className="flex items-center gap-3">
 <div className="w-2 h-2 bg-white/20 rounded-full" />
 <span>Vector: Pinecone-DB</span>
 </div>
 </div>
 </div>
 </div>

 {/* AI & Digital Suite */}
 <div className="mb-48 flex flex-col items-center sm:items-start text-center sm:text-left w-full">
 <div className="inline-block border border-lime/20 bg-lime/5 rounded-full px-6 py-2 text-xs font-bold tracking-[0.4em] uppercase text-white mb-12">
 ✦ AI Strategic Suite
 </div>
 <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full text-left">
 {AI_SERVICES.map((srv, i) => {
 const Icon = srv.icon;
 return (
 <div key={i} className="bg-black border border-white/5 rounded-[3rem] p-12 hover:border-white/10 transition-all group overflow-hidden relative min-h-[500px] flex flex-col">
 <div className="absolute top-0 right-0 w-48 h-48 bg-lime/5 blur-[50px] -z-10 group-hover:bg-lime/10 transition-colors"></div>
 <Icon className="text-white mb-8 w-14 h-14 group-hover:scale-110 transition-transform" />
 <h3 className="text-3xl font-bold font-syne text-white mb-6 uppercase tracking-tighter">{srv.title}</h3>
 <p className="text-gray-500 text-sm mb-8 leading-relaxed flex-grow">{srv.details}</p>
 <ul className="space-y-3 pt-8 ">
 {srv.features.slice(0, 8).map((f, fi) => (
 <li key={fi} className="flex gap-4 items-start">
 <div className="mt-1.5 w-1 h-1 bg-lime rounded-full" />
 <span className="text-gray-400 text-[13px]">{f}</span>
 </li>
 ))}
 </ul>
 </div>
 );
 })}
 </div>
 </div>

 {/* Development & Branding Suite */}
 <div className="flex flex-col items-center sm:items-start text-center sm:text-left w-full">
 <div className="inline-block border border-white/20 bg-white/5 rounded-full px-6 py-2 text-xs font-bold tracking-[0.4em] uppercase text-white mb-12">
 ✦ Full-Stack Development & Branding
 </div>
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full text-left">
 {DEV_SERVICES.map((srv, i) => {
 const Icon = srv.icon;
 return (
 <div key={i} className="bg-black border border-white/5 rounded-[2.5rem] p-10 hover:border-white/10 transition-all group relative overflow-hidden flex flex-col min-h-[450px]">
 <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-[40px] -z-10 group-hover:bg-white/10 transition-colors"></div>
 <Icon className="text-white mb-8 w-10 h-10 group-hover:scale-110 transition-transform" />
 <h3 className="text-xl font-bold font-syne text-white mb-6 uppercase tracking-tight">{srv.title}</h3>
 <p className="text-gray-500 text-sm mb-8 leading-relaxed flex-grow">{srv.description}</p>
 <div className="text-[10px] font-mono text-white/20 uppercase tracking-[0.3em] mt-auto pt-6 group-hover:text-white transition-colors italic">Module_Ready v4.0</div>
 </div>
 );
 })}
 </div>
 </div>

 {/* Branding & Strategy Deep Dive */}
 <div className="mt-48 w-full text-left py-24 ">
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
 <div>
 <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold font-syne text-white mb-10 tracking-tighter uppercase leading-[0.9]">
 Brand Intelligence <br /> & Identity.
 </h2>
 <p className="text-gray-500 text-xl leading-relaxed mb-10">
 Your brand is more than a logo; it&apos;s a cognitive signal. We use advanced design systems to ensure your visual identity commands authority across every digital touchpoint.
 </p>
 <div className="grid grid-cols-2 gap-8">
 {['UX Design', 'Visual DNA', 'Typography', 'Motion Graphics'].map((item, i) => (
 <div key={i} className="flex items-center gap-4 text-white font-mono text-[10px] uppercase tracking-widest pb-4">
 <span className="text-white">✦</span> {item}
 </div>
 ))}
 </div>
 </div>
 <div className="bg-lime/5 border border-lime/10 p-8 sm:p-12 rounded-[2.5rem] sm:rounded-[4rem] relative overflow-hidden group">
 <div className="text-7xl sm:text-9xl font-black font-syne text-white/10 absolute -bottom-10 -right-10 group-hover:scale-110 transition-transform select-none">EMARK</div>
 <h4 className="text-white font-bold font-syne text-3xl mb-8 relative z-10 uppercase">Identity Protocol</h4>
 <p className="text-gray-400 relative z-10 leading-relaxed mb-8">
 We deliver comprehensive brand guidelines that integrate motion, interaction, and static design into a unified, high-performance ecosystem.
 </p>
 <ul className="space-y-4 relative z-10">
 {[
 "Custom font ecosystems",
 "Motion design frameworks",
 "Interactive UI/UX prototypes",
 "High-fidelity brand manuals"
 ].map((li, i) => (
 <li key={i} className="text-[11px] font-mono text-white/60 uppercase tracking-widest flex items-center gap-3">
 <div className="w-1 h-1 bg-lime rounded-full" /> {li}
 </li>
 ))}
 </ul>
 </div>
 </div>
 </div>
 </div>
 </main>
 );
}
