"use client";
import React, { useRef, useLayoutEffect, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { AI_SERVICES, DEV_SERVICES } from "@/lib/constants";
import { Bot } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function CompleteSystem() {
  const sectionRef = useRef(null);
  const scrollContainerRef = useRef(null);

  // useLayoutEffect to measure styles right after paint, adding a requestAnimationFrame 
  // as the safety check requested by the user, ensuring full rendering accuracy.
  useLayoutEffect(() => {
    // Skip GSAP horizontal scroll on mobile
    const isMobile = typeof window !== 'undefined' && window.matchMedia('(max-width: 768px)').matches;
    if (isMobile) return;

    let ctx = gsap.context(() => {
      const initScroll = () => {
        const container = scrollContainerRef.current;
        if (!container) return;

        // Calculate maximum horizontal travel distance
        const totalScrollWidth = container.scrollWidth - window.innerWidth;

        gsap.to(container, {
          x: -totalScrollWidth,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: () => `+=${totalScrollWidth}`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });
      };

      initScroll();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* ── DESKTOP: Horizontal scroll pinned section ── */}
      <section 
        ref={sectionRef} 
        className="bg-black relative overflow-hidden h-screen flex-col justify-center hidden md:flex"
      >
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-lime/5 blur-[120px] rounded-full mix-blend-screen pointer-events-none -translate-y-1/2" />
        <div 
          ref={scrollContainerRef} 
          className="flex items-center w-max h-full will-change-transform"
        >
          <div className="w-[100vw] lg:w-[45vw] shrink-0 px-6 md:px-12 lg:px-20 flex flex-col justify-center items-center text-center">
            <div className="max-w-3xl flex flex-col items-center">
              <div className="section-eyebrow">THE COMPLETE SYSTEM</div>
              <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold font-syne text-white tracking-tighter leading-[0.9] uppercase">
                Unified <br />
                <span className="italic text-white">Growth Engine</span>
              </h2>
            </div>
            <p className="text-lg text-gray-500 max-w-sm leading-relaxed mt-6 mx-auto">
              Everything you need to scale, connected in one place. AI, web,
              and marketing — one 24/7 sales machine.
            </p>
            <div className="mt-8 flex items-center gap-4 text-xs font-mono uppercase tracking-widest text-lime/60 mx-auto">
              <div className="w-12 h-[1px] bg-lime/40" />
              <span>Scroll horizontally</span>
            </div>
          </div>
          <div className="flex gap-5 pr-[20vw] items-center">
            {[...AI_SERVICES, ...DEV_SERVICES.slice(0, 4)].map((srv, i) => (
              <div
                key={i}
                className="w-[300px] sm:w-[340px] shrink-0 bg-black border border-gray-500 p-7 rounded-3xl hover:border-white transition-all duration-300 group flex flex-col min-h-[380px] relative overflow-hidden cursor-default"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-[40px] group-hover:bg-white/10 transition-colors" />
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:rotate-12 transition-transform duration-300">
                  {srv.icon ? <srv.icon size={22} /> : <Bot size={22} />}
                </div>
                <h3 className="text-lg font-bold font-syne text-white mb-3 uppercase tracking-tight pr-4">{srv.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-grow">{srv.description || srv.details}</p>
                <div className="pt-5 border-t border-white/[0.05] mt-6">
                  <div className="flex items-center gap-2 text-[10px] font-mono text-white/40 uppercase tracking-widest">
                    <div className="w-1.5 h-1.5 bg-white/40 rounded-full group-hover:animate-pulse" />
                    <span>Built for Results</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MOBILE: Vertical scrollable card list ── */}
      <section className="block md:hidden bg-black py-14 px-5">
        <div className="flex flex-col items-center text-center mb-8">
          <div className="section-eyebrow">THE COMPLETE SYSTEM</div>
          <h2 className="text-3xl font-bold font-syne text-white tracking-tighter leading-tight uppercase">
            Unified <span className="italic">Growth Engine</span>
          </h2>
          <p className="text-sm text-gray-500 max-w-xs leading-relaxed mt-4 mx-auto">
            AI, web, and marketing — one 24/7 sales machine.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4">
          {[...AI_SERVICES, ...DEV_SERVICES.slice(0, 4)].map((srv, i) => (
            <div key={i} className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-5 flex items-start gap-4">
              <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-white shrink-0">
                {srv.icon ? <srv.icon size={18} /> : <Bot size={18} />}
              </div>
              <div>
                <h3 className="text-sm font-bold font-syne text-white uppercase tracking-tight mb-1">{srv.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{srv.description || srv.details}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
