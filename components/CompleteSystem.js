"use client";
import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { AI_SERVICES, DEV_SERVICES } from "@/lib/constants";
import { Bot } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function CompleteSystem() {
  const sectionRef = useRef(null);
  const scrollContainerRef = useRef(null);

  useLayoutEffect(() => {
    // ── Mobile: skip GSAP pin entirely ──
    if (window.matchMedia("(max-width: 768px)").matches) return;

    let ctx = gsap.context(() => {
      const initScroll = () => {
        const container = scrollContainerRef.current;
        if (!container) return;

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

  const cards = [...AI_SERVICES, ...DEV_SERVICES.slice(0, 4)];

  return (
    <>
      {/* ── MOBILE: vertical grid, no pinning ── */}
      <section className="block md:hidden bg-black py-16 px-4">
        <div className="flex flex-col items-center text-center mb-10">
          <div className="section-eyebrow justify-center">THE COMPLETE SYSTEM</div>
          <h2 className="text-3xl font-bold font-syne text-white tracking-tight leading-tight uppercase mt-2">
            UNIFIED GROWTH ENGINE
          </h2>
          <p className="text-sm text-gray-500 max-w-xs leading-relaxed mt-4 mx-auto">
            AI, web, and marketing — one 24/7 sales machine.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4">
          {cards.map((srv, i) => (
            <div
              key={i}
              className="w-full bg-black border border-gray-800 p-5 rounded-2xl flex flex-col min-h-[200px] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/3 blur-[30px]" />
              <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-white mb-4">
                {srv.icon ? <srv.icon size={18} /> : <Bot size={18} />}
              </div>
              <h3 className="text-sm font-bold font-syne text-white mb-2 uppercase tracking-tight">{srv.title}</h3>
              <p className="text-gray-500 text-xs leading-relaxed flex-grow">{srv.description || srv.details}</p>
              <div className="pt-4 border-t border-white/5 mt-4">
                <div className="flex items-center gap-2 text-[9px] font-mono text-white/30 uppercase tracking-widest">
                  <div className="w-1.5 h-1.5 bg-white/30 rounded-full" />
                  <span>Built for Results</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── DESKTOP: Pinned horizontal scroll ── */}
      <section
        ref={sectionRef}
        className="hidden md:flex bg-black relative overflow-hidden h-screen flex-col justify-center"
      >
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-lime/5 blur-[120px] rounded-full mix-blend-screen pointer-events-none -translate-y-1/2" />

        <div
          ref={scrollContainerRef}
          className="flex items-center w-max h-full will-change-transform"
        >
          {/* Intro panel */}
          <div className="w-[45vw] shrink-0 px-12 lg:px-20 flex flex-col justify-center items-center text-center">
            <div className="max-w-3xl flex flex-col items-center">
              <div className="section-eyebrow">THE COMPLETE SYSTEM</div>
              <h2 className="text-6xl md:text-7xl font-bold font-syne text-white tracking-tight leading-[0.9] uppercase">
                UNIFIED GROWTH ENGINE
              </h2>
            </div>
            <p className="text-lg text-gray-500 max-w-sm leading-relaxed mt-6 mx-auto">
              Everything you need to scale, connected in one place. AI, web,
              and marketing — one 24/7 sales machine.
            </p>
          </div>

          {/* Cards gallery track */}
          <div className="flex gap-5 pr-[20vw] items-center">
            {cards.map((srv, i) => (
              <div
                key={i}
                className="w-[340px] shrink-0 bg-black border border-gray-500 p-7 rounded-3xl hover:border-white transition-all duration-300 group flex flex-col min-h-[380px] relative overflow-hidden cursor-default"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-[40px] group-hover:bg-white/10 transition-colors" />
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:rotate-12 transition-transform duration-300">
                  {srv.icon ? <srv.icon size={20} /> : <Bot size={20} />}
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
    </>
  );
}
