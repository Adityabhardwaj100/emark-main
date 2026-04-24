"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowRight, Zap, Globe, Bot, TrendingUp } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

// Ticker items — shown on both mobile (marquee) and desktop (scroll)
const ITEMS = [
  { type: "text", content: "WE BUILD AI" },
  { type: "icon", icon: ArrowRight },
  { type: "text", content: "THAT WORKS", italic: true },
  { type: "dot", lime: true },
  { type: "text", content: "NOT JUST WEBSITES" },
  { type: "line" },
  { type: "text", content: "FULL STACK GROWTH" },
  { type: "icon", icon: Bot },

  { type: "dot", lime: true },
  { type: "text", content: "SCALE WITHOUT LIMITS" },
  { type: "icon", icon: Globe },
  { type: "text", content: "THIS IS EMARK" },
  { type: "icon", icon: TrendingUp, lime: true },
  { type: "text", content: "YOUR GROWTH ENGINE", italic: true },
  { type: "dot", lime: true },
  { type: "text", content: "EMARK" },
  { type: "dot", lime: true, small: true },
];

function renderItem(item, i, sizeClass = "text-[13vw]") {
  if (item.type === "text")
    return (
      <span key={i} className={`${sizeClass} font-black font-syne uppercase tracking-tighter leading-none ${item.italic ? "italic text-white/70" : "text-white"} mr-10 md:mr-20`}>
        {item.content}
      </span>
    );
  if (item.type === "icon") {
    const Icon = item.icon;
    return <Icon key={i} className={`w-14 h-14 md:w-28 md:h-28 ${item.lime ? "text-lime" : "text-white"} shrink-0 mr-10 md:mr-20`} />;
  }
  if (item.type === "line")
    return <div key={i} className="h-[5px] w-[20vw] bg-lime shrink-0 mr-10 md:mr-20" />;
  if (item.type === "dot")
    return <div key={i} className={`${item.small ? "w-4 h-4 md:w-8 md:h-8" : "w-6 h-6 md:w-10 md:h-10"} rounded-full bg-lime shrink-0 mr-10 md:mr-20`} />;
  return null;
}

export default function TickerTape() {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useGSAP(() => {
    // ── Mobile: skip GSAP pin — CSS marquee handles it ──
    if (window.matchMedia("(max-width: 768px)").matches) return;

    const container = containerRef.current;
    const textTrack = textRef.current;
    const getScrollAmount = () => -(textTrack.scrollWidth - window.innerWidth);

    const tween = gsap.to(textTrack, { x: getScrollAmount, ease: "none" });

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

  return (
    <div ref={containerRef}>

      {/* ── MOBILE: CSS marquee — zero GSAP, zero stutter ── */}
      <section className="block md:hidden bg-black py-10 overflow-hidden relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[200px] bg-[radial-gradient(ellipse,rgba(200,241,53,0.04)_0%,transparent_70%)] pointer-events-none" />
        <div className="flex overflow-hidden">
          {/* Two copies for seamless loop */}
          <div className="flex items-center whitespace-nowrap animate-marquee-slow shrink-0">
            {ITEMS.map((item, i) => renderItem(item, i, "text-[9vw]"))}
          </div>
          <div className="flex items-center whitespace-nowrap animate-marquee-slow shrink-0" aria-hidden>
            {ITEMS.map((item, i) => renderItem(item, `dup-${i}`, "text-[9vw]"))}
          </div>
        </div>
      </section>

      {/* ── DESKTOP: GSAP horizontal scroll pin ── */}
      <section
        className="hidden md:flex relative h-screen bg-black overflow-hidden items-center justify-start pointer-events-none"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[300px] bg-[radial-gradient(ellipse,rgba(200,241,53,0.05)_0%,transparent_70%)] opacity-60 pointer-events-none" />

        <div
          ref={textRef}
          className="relative z-10 flex items-center whitespace-nowrap pl-[10vw] pr-[15vw]"
        >
          {ITEMS.map((item, i) => renderItem(item, i))}
        </div>
      </section>

    </div>
  );
}
