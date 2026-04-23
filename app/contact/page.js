"use client";
import TextReveal from "@/components/TextReveal";

export default function ContactPage() {
 return (
 <main className="pt-32 md:pt-48 pb-24 min-h-screen bg-dark relative overflow-hidden w-full">
 {/* Background aesthetics */}
 <div className="absolute top-[10%] md:top-[20%] right-[-10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-lime/10 blur-[100px] md:blur-[120px] rounded-full pointer-events-none"></div>

 <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
 <TextReveal text="Start Transmission" className="text-4xl sm:text-6xl md:text-8xl font-bold font-syne text-white mb-8 tracking-tighter w-full" />
 <p className="text-xl text-gray-400 mb-12 max-w-2xl">
 Enter your parameters below. Our intake system will route your query to the appropriate agent.
 </p>

 <form className="bg-black border border-white/5 rounded-3xl p-8 md:p-12" onSubmit={(e) => e.preventDefault()}>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
 <div className="flex flex-col gap-2">
 <label className="text-xs uppercase tracking-widest text-white font-mono">Full Name</label>
 <input type="text" className="bg-transparent py-3 text-white outline-none focus:border-lime transition-colors" placeholder="Jane Doe" required />
 </div>
 <div className="flex flex-col gap-2">
 <label className="text-xs uppercase tracking-widest text-white font-mono">Email Interface</label>
 <input type="email" className="bg-transparent py-3 text-white outline-none focus:border-lime transition-colors" placeholder="jane@company.com" required />
 </div>
 </div>
 <div className="flex flex-col gap-2 mb-12">
 <label className="text-xs uppercase tracking-widest text-white font-mono">Project Parameters</label>
 <textarea className="bg-transparent py-3 text-white outline-none focus:border-lime transition-colors resize-none min-h-[100px]" placeholder="Describe your automation goal or development needs..." required></textarea>
 </div>
 <button type="submit" className="w-full bg-lime text-dark font-bold font-syne py-5 rounded-full hover:bg-[#b5db30] transition-colors text-lg">
 Transmit Data
 </button>
 </form>
 </div>
 </main>
 );
}
