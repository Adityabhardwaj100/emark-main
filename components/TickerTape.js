"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Sparkles, Zap, Flame, MoveRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function TickerTape() {
 const containerRef = useRef(null);
 const textRef = useRef(null);

 useGSAP(() => {
  // Skip GSAP pin on mobile
  const isMobile = window.matchMedia('(max-width: 768px)').matches;
  if (isMobile) return;

  const container = containerRef.current;
  const textTrack = textRef.current;
  
  const getScrollAmount = () => -(textTrack.scrollWidth - window.innerWidth);

  const tween = gsap.to(textTrack, {
  x: getScrollAmount,
  ease: "none",
  });

  ScrollTrigger.create({
  trigger: container,
  start: "top top",
  end: () => `+=${textTrack.scrollWidth}`, 
  pin: true,
  animation: tween,
  scrub: 1,
  invalidateOnRefresh: true, 
  });
 }, { scope: containerRef });

 const words = ["In every bottle,", "discover", "the undeniable", "Real Magic", "of sharing pure", "Refreshment", "that brings us", "Together"];

 return (
  <>
  {/* ── DESKTOP: GSAP Horizontal Scroll Pin ── */}
  <section 
  ref={containerRef} 
  className="relative h-screen bg-black overflow-hidden items-center justify-start pointer-events-none hidden md:flex"
  >
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[300px] bg-[radial-gradient(ellipse,rgba(200,241,53,0.05)_0%,transparent_70%)] opacity-50 block pointer-events-none" />
  <div 
  ref={textRef}
  className="relative z-10 flex items-center whitespace-nowrap pl-[10vw] pr-[50vw]"
  >
  <span className="text-[12vw] md:text-[14vw] font-black font-syne uppercase tracking-tighter leading-none text-white mr-12 md:mr-24">In every bottle,</span>
  <Sparkles className="w-16 h-16 md:w-32 md:h-32 text-white shrink-0 mr-12 md:mr-24" />
  <span className="text-[12vw] md:text-[14vw] font-black font-syne uppercase tracking-tighter leading-none italic mr-12 md:mr-24">discover</span>
  <div className="w-20 h-20 md:w-40 md:h-40 rounded-full border-[6px] border-lime flex items-center justify-center shrink-0 mr-12 md:mr-24">
  <Zap className="w-10 h-10 md:w-20 md:h-20 text-white" />
  </div>
  <span className="text-[12vw] md:text-[14vw] font-black font-syne uppercase tracking-tighter leading-none text-white mr-12 md:mr-24">the undeniable</span>
  <MoveRight className="w-24 h-24 md:w-48 md:h-48 text-white shrink-0 mr-12 md:mr-24" />
  <span className="text-[12vw] md:text-[14vw] font-black font-syne uppercase tracking-tighter leading-none text-white italic mr-12 md:mr-24">Real Magic</span>
  <Flame className="w-16 h-16 md:w-32 md:h-32 text-[#ff4d4d] shrink-0 mr-12 md:mr-24" />
  <span className="text-[12vw] md:text-[14vw] font-black font-syne uppercase tracking-tighter leading-none text-white mr-12 md:mr-24">of sharing pure</span>
  <div className="h-[6px] w-[30vw] bg-white shrink-0 mr-12 md:mr-24" />
  <span className="text-[12vw] md:text-[14vw] font-black font-syne uppercase tracking-tighter leading-none mr-12 md:mr-24">Refreshment</span>
  <Sparkles className="w-16 h-16 md:w-32 md:h-32 text-white shrink-0 mr-12 md:mr-24" />
  <span className="text-[12vw] md:text-[14vw] font-black font-syne uppercase tracking-tighter leading-none text-white mr-12 md:mr-24">that brings us</span>
  <div className="w-12 h-12 md:w-24 md:h-24 rounded-full bg-lime shrink-0 mr-12 md:mr-24" />
  <span className="text-[12vw] md:text-[14vw] font-black font-syne uppercase tracking-tighter leading-none italic text-white mr-12 md:mr-24">Together</span>
  <div className="w-4 h-4 md:w-8 md:h-8 rounded-full bg-lime shrink-0" />
  </div>
  </section>

  {/* ── MOBILE: CSS auto-marquee (no scroll hijack) ── */}
  <section className="block md:hidden bg-black py-10 overflow-hidden">
  <div className="animate-marquee-fast flex items-center whitespace-nowrap gap-8">
  {[...words, ...words].map((w, i) => (
  <span key={i} className="text-[9vw] font-black font-syne uppercase tracking-tighter leading-none text-white shrink-0">
  {w} <span className="text-lime mx-2">✦</span>
  </span>
  ))}
  </div>
  </section>
  </>
 );
}
