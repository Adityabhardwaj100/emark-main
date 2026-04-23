"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const STEPS = [
  {
    num: "01",
    title: "Unified Audit",
    description: "We analyze your business, from your website to your sales team, to find exactly where AI and digital tools will have the biggest impact on your growth.",
    metric: "Efficiency Gain: +40%"
  },
  {
    num: "02",
    title: "System Design",
    description: "We design your custom AI agents and high-performance website to work together as a single, powerful system built specifically for your business goals.",
    metric: "Logic Sync: 100%"
  },
  {
    num: "03",
    title: "Full Integration",
    description: "We connect your AI bots, your website, and your marketing into one unified sales machine. Everything works together on autopilot with zero downtime.",
    metric: "Live Launch: 2 Weeks"
  },
  {
    num: "04",
    title: "Ongoing Scaling",
    description: "Once your engine is live, we keep optimizing the connections and improving the AI to ensure you stay ahead of the competition and keep growing.",
    metric: "Growth Cycle: Active"
  }
];

export default function HowItWorks() {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useGSAP(() => {
    // Skip scroll-pinning animation on mobile to preserve native scroll
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    if (isMobile) return;

    const numCards = cardsRef.current.length;
    const totalTransitions = numCards - 1;

    // 1. PIN THE ENTIRE SECTION NATURALLY
    // We add +1 to the transitions so the section stays pinned EVEN AFTER the last card overlaps!
    ScrollTrigger.create({
       trigger: containerRef.current,
       start: "center center", 
       end: `+=${(totalTransitions + 1) * 100}%`,
       pin: true,
       scrub: 1,
    });

    const tl = gsap.timeline({
       scrollTrigger: {
         trigger: containerRef.current,
         start: "center center",
         end: `+=${(totalTransitions + 1) * 100}%`,
         scrub: 1,
       }
    });

    // 2. SET UP OFFSCREEN CARDS
    cardsRef.current.forEach((card, i) => {
       if (i > 0) {
           // All cards except the first start pushed deep below the screen
           gsap.set(card, { y: "150%" }); 
       }
    });

    // 3. ANIMATE CARDS SLIDING OVER
    cardsRef.current.forEach((card, i) => {
       if (i === 0) return;

       // Slide the incoming card perfectly on top. We animate to exactly y: 0 so it completely covers the card beneath it without offsetting downwards.
       tl.to(card, {
           y: "0%",
           ease: "none",
           duration: 1
       }, i - 1);

       // Flawlessly scale the previous card backward into the screen!
       // Since the new card comes in at exactly y: 0, the smaller previous card will be entirely covered perfectly!
       tl.to(cardsRef.current[i - 1], {
           scale: 0.95 - (i * 0.01), // physically sink it lower so it visually stacks "under"
           ease: "none",
           duration: 1
       }, i - 1);
    });

    // 4. HOLD STATE
    // This dummy tween forces the final 4-card stacked state to hold perfectly still while scrolling!
    tl.to({}, { duration: 1 });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative w-full md:h-screen bg-black flex flex-col justify-center items-center z-10 selection:bg-white selection:text-black overflow-hidden py-16 md:py-0">
      <div className="max-w-[1200px] w-full mx-auto px-6 lg:px-12 relative flex flex-col items-center">
        
        {/* Stationary Section Header */}
        <div className="mb-8 md:mb-16 flex flex-col items-center text-center">
          <div className="section-eyebrow">THE ARCHITECTURAL CYCLE</div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-syne text-white tracking-tighter uppercase mt-2">
            EMARK <span className="italic lowercase">cycle</span>
          </h2>
        </div>

        {/* ── Desktop: Absolute Stacking Cards ── */}
        <div className="relative w-full h-[55vh] md:h-[60vh] max-h-[600px] hidden md:block">
           {STEPS.map((step, idx) => {
             return (
               <div 
                 key={step.num}
                 ref={el => cardsRef.current[idx] = el}
                 className="absolute top-0 left-0 w-full h-full will-change-transform flex items-center justify-center"
                 style={{ zIndex: idx + 10 }}
               >
                  <div className="w-full h-full bg-[#080808] border border-white/20 rounded-3xl p-8 md:p-14 shadow-[0_-20px_60px_rgba(0,0,0,0.9)] flex flex-col md:flex-row md:items-center justify-between">
                      
                      {/* Left: Content */}
                      <div className="w-full md:w-3/5 flex flex-col items-start pr-0 md:pr-10 relative z-10 h-full justify-center">
                          
                          {/* Index Number Header */}
                          <div className="flex items-center gap-4 mb-6 md:mb-8">
                             <div className="text-2xl font-syne font-black text-gray-500">
                               {step.num} <span className="text-gray-700">/ 04</span>
                             </div>
                             <div className="h-[1px] w-12 bg-gray-700" />
                          </div>

                          <h3 className="text-3xl md:text-5xl font-syne font-bold text-white mb-4 md:mb-6 uppercase tracking-tighter">
                             {step.title}
                          </h3>
                          
                          <p className="text-gray-400 text-base md:text-lg lg:text-xl font-dm mb-6 md:mb-10 leading-relaxed max-w-lg">
                             {step.description}
                          </p>
                          
                          <div className="mt-auto md:mt-0 px-4 py-2 border border-gray-600 rounded-full bg-white/[0.02] inline-flex">
                             <span className="text-[10px] font-mono text-gray-300 uppercase tracking-[0.2em]">{step.metric}</span>
                          </div>
                      </div>

                      {/* Right: Brutalist Typography Overlay */}
                      <div className="hidden md:flex w-full md:w-2/5 justify-end items-center h-full relative pointer-events-none select-none">
                           <div className="text-[180px] lg:text-[250px] font-syne font-black text-transparent absolute right-0 top-1/2 -translate-y-1/2" style={{ WebkitTextStroke: "2px rgba(255,255,255,0.03)" }}>
                              {step.num}
                           </div>
                           <div className="w-40 h-40 bg-white blur-[150px] opacity-10 absolute right-10" />
                      </div>

                  </div>
               </div>
             );
           })}
        </div>

        {/* ── Mobile: Vertical List of Cards ── */}
        <div className="flex flex-col gap-6 w-full md:hidden">
           {STEPS.map((step, idx) => (
             <div
               key={step.num}
               ref={el => { if (!cardsRef.current[idx]) cardsRef.current[idx] = el; }}
               className="w-full bg-[#080808] border border-white/20 rounded-3xl p-7 shadow-[0_-20px_60px_rgba(0,0,0,0.9)]"
             >
               <div className="flex items-center gap-4 mb-5">
                 <div className="text-xl font-syne font-black text-gray-500">
                   {step.num} <span className="text-gray-700">/ 04</span>
                 </div>
                 <div className="h-[1px] w-10 bg-gray-700" />
               </div>
               <h3 className="text-2xl font-syne font-bold text-white mb-3 uppercase tracking-tighter">
                 {step.title}
               </h3>
               <p className="text-gray-400 text-sm font-dm mb-5 leading-relaxed">
                 {step.description}
               </p>
               <div className="px-4 py-2 border border-gray-600 rounded-full bg-white/[0.02] inline-flex">
                 <span className="text-[10px] font-mono text-gray-300 uppercase tracking-[0.2em]">{step.metric}</span>
               </div>
             </div>
           ))}
        </div>

      </div>
    </section>
  );
}
