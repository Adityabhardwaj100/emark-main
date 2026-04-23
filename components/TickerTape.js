"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowRight, Zap, Globe, Bot, TrendingUp } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function TickerTape() {
 const containerRef = useRef(null);
 const textRef = useRef(null);

 useGSAP(() => {
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

 return (
  <section 
   ref={containerRef} 
   className="relative h-screen bg-black overflow-hidden flex items-center justify-start pointer-events-none"
  >
   {/* Background Ambient Glow */}
   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[300px] bg-[radial-gradient(ellipse,rgba(200,241,53,0.05)_0%,transparent_70%)] opacity-60 pointer-events-none" />

   {/* Scrolling Text Track */}
   <div 
    ref={textRef}
    className="relative z-10 flex items-center whitespace-nowrap pl-[10vw] pr-[15vw]"
   >

    {/* Segment 1 */}
    <span className="text-[11vw] md:text-[13vw] font-black font-syne uppercase tracking-tighter leading-none text-white mr-10 md:mr-20">
     WE BUILD AI
    </span>

    <ArrowRight className="w-14 h-14 md:w-28 md:h-28 text-lime shrink-0 mr-10 md:mr-20" />

    {/* Segment 2 */}
    <span className="text-[11vw] md:text-[13vw] font-black font-syne uppercase tracking-tighter leading-none italic text-white/70 mr-10 md:mr-20">
     THAT WORKS
    </span>

    <div className="w-16 h-16 md:w-32 md:h-32 rounded-full border-[4px] border-lime flex items-center justify-center shrink-0 mr-10 md:mr-20">
     <Zap className="w-8 h-8 md:w-16 md:h-16 text-lime" />
    </div>

    {/* Segment 3 */}
    <span className="text-[11vw] md:text-[13vw] font-black font-syne uppercase tracking-tighter leading-none text-white mr-10 md:mr-20">
     NOT JUST WEBSITES
    </span>

    <div className="h-[5px] w-[20vw] bg-lime shrink-0 mr-10 md:mr-20" />

    {/* Segment 4 */}
    <span className="text-[11vw] md:text-[13vw] font-black font-syne uppercase tracking-tighter leading-none text-white mr-10 md:mr-20">
     FULL STACK GROWTH
    </span>

    <Bot className="w-14 h-14 md:w-28 md:h-28 text-white shrink-0 mr-10 md:mr-20" />

    {/* Segment 5 */}
    <span className="text-[11vw] md:text-[13vw] font-black font-syne uppercase tracking-tighter leading-none italic text-white/70 mr-10 md:mr-20">
     24/7 AUTOPILOT
    </span>

    <div className="w-10 h-10 md:w-20 md:h-20 rounded-full bg-lime shrink-0 mr-10 md:mr-20" />

    {/* Segment 6 */}
    <span className="text-[11vw] md:text-[13vw] font-black font-syne uppercase tracking-tighter leading-none text-white mr-10 md:mr-20">
     SCALE WITHOUT LIMITS
    </span>

    <Globe className="w-14 h-14 md:w-28 md:h-28 text-white shrink-0 mr-10 md:mr-20" />

    {/* Segment 7 */}
    <span className="text-[11vw] md:text-[13vw] font-black font-syne uppercase tracking-tighter leading-none text-white mr-10 md:mr-20">
     THIS IS EMARK
    </span>

    <TrendingUp className="w-14 h-14 md:w-28 md:h-28 text-lime shrink-0 mr-10 md:mr-20" />

    {/* Segment 8 */}
    <span className="text-[11vw] md:text-[13vw] font-black font-syne uppercase tracking-tighter leading-none italic text-white/70 mr-10 md:mr-20">
     YOUR GROWTH ENGINE
    </span>

    {/* Final Segment */}
    <div className="w-6 h-6 md:w-10 md:h-10 rounded-full bg-lime shrink-0 mr-10 md:mr-20" />

    <span className="text-[11vw] md:text-[13vw] font-black font-syne uppercase tracking-tighter leading-none text-white mr-10 md:mr-20">
     EMARK
    </span>

    <div className="w-4 h-4 md:w-8 md:h-8 rounded-full bg-lime shrink-0" />

   </div>
  </section>
 );
}
