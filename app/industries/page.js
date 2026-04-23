import { INDUSTRY_CASE_STUDIES, INDUSTRIES } from "@/lib/constants";

export const metadata = {
 title: "Industries | Emark AI",
 description: "See how we transform industries with localized AI.",
};

export default function IndustriesPage() {
 return (
 <main className="pt-32 md:pt-48 pb-24 min-h-screen bg-dark">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center w-full">
 <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold font-syne text-white mb-12 tracking-tighter justify-center uppercase w-full">Industries Transformed</h1>
 
 <p className="text-gray-500 text-lg md:text-xl max-w-2xl mb-16 md:mb-24 leading-relaxed px-4">
 We don’t just deploy software; we inject intelligence into the core of your industrial engine. Our systems are custom-trained on your sector&apos;s specific logic, constraints, and data-flows.
 </p>

 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32 w-full">
 {INDUSTRY_CASE_STUDIES.map((study, i) => (
 <div key={i} className="bg-black border border-white/5 rounded-[3rem] p-8 md:p-10 relative overflow-hidden group hover:border-lime/50 transition-all text-left min-h-[400px] md:min-h-[450px] flex flex-col">
 <div className="absolute top-0 right-0 w-32 h-32 bg-lime/5 blur-[40px] rounded-full group-hover:bg-lime/10 transition-colors"></div>
 <h3 className="text-xl font-bold font-syne text-white mb-10 relative z-10 uppercase tracking-tight">{study.name}</h3>
 <div className="text-4xl sm:text-5xl font-syne font-bold text-white mb-6 relative z-10 tracking-tighter">{study.metric}</div>
 <div className="text-lg text-white font-bold mb-6 relative z-10 italic">{study.result}</div>
 <p className="text-gray-500 text-sm leading-relaxed relative z-10 flex-grow">{study.description}</p>
 
 <div className="mt-8 pt-8 flex items-center gap-3">
 <div className="w-1.5 h-1.5 bg-lime rounded-full animate-pulse" />
 <span className="text-[10px] font-mono text-gray-500 tracking-[0.2em] uppercase">Protocol_Active</span>
 </div>
 </div>
 ))}
 </div>

 {/* Industrial Integration Modules */}
 <div className="mb-24 md:mb-32 w-full text-left">
 <div className="mb-12 md:mb-16 text-left px-4">
 <h2 className="text-3xl md:text-4xl font-bold font-syne text-white mb-6 uppercase">Integration Architecture</h2>
 <p className="text-gray-500 text-lg max-w-2xl">How we adapt our AI swarms to your specific operational constraints.</p>
 </div>
 <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
 {[
 { title: "Legacy Data Extraction", desc: "Our OCR and NLP engines ingest decades of unstructured records, transforming dark data into actionable intelligence nodes." },
 { title: "Edge Node Deployment", desc: "For manufacturing and utilities, we deploy cognitive models directly on-site to ensure zero-latency local decision making." },
 { title: "Compliance Mapping", desc: "Every industrial deployment is hard-coded with global regulatory standards (ISO, HIPAA, GDPR) for native compliance." },
 ].map((item, i) => (
 <div key={i} className="p-8 border-l border-white/10 bg-white/[0.01]">
 <h4 className="text-white font-bold font-syne text-xl mb-4">{item.title}</h4>
 <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
 </div>
 ))}
 </div>
 </div>

 <div className=" pt-24 text-center w-full">
 <h2 className="text-3xl font-bold font-syne text-white mb-12 uppercase tracking-tighter">Global Sector Reach</h2>
 <div className="flex flex-wrap justify-center gap-4">
 {INDUSTRIES.map((ind, i) => (
 <div key={i} className="px-8 py-4 rounded-full border border-white/10 bg-black text-gray-400 font-mono text-xs uppercase tracking-widest hover:border-lime/30 transition-colors">
 {ind}
 </div>
 ))}
 </div>
 </div>
 </div>
 </main>
 );
}
