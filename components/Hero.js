"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Script from "next/script";
import TextReveal from "./TextReveal";
import TubesBackground from "./TubesBackground";
import { useRef } from "react";

export default function Hero() {
 const containerRef = useRef(null);

 const { scrollYProgress } = useScroll({
 target: containerRef,
 offset: ["start start", "end start"],
 });

 const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
 const scale = useTransform(scrollYProgress, [0, 0.4], [1, 0.95]);

 return (
 <section
 ref={containerRef}
 className="relative min-h-screen flex flex-col overflow-hidden bg-transparent font-syne select-none"
 >
 {/* Interactive 3D Tubes Background — receives all mouse events */}
 <div className="absolute inset-0 z-0">
 <TubesBackground className="w-full h-full" />
 </div>

 {/* Bottom gradient only — for text readability */}
 <div className="absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-dark via-dark/80 to-transparent pointer-events-none z-[1]" />

 {/* Text — pointer-events-none so cursor passes through to Spline */}
 <motion.div
 style={{ opacity, scale }}
 className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-20 my-auto py-20 md:py-24 pointer-events-none flex flex-col items-center text-center"
 >
 <TextReveal
 text="ONE UNIFIED"
 className="text-5xl sm:text-7xl md:text-[7rem] lg:text-[9rem] font-bold font-syne leading-[0.85] tracking-tighter text-white justify-center w-full text-center"
 />
 <TextReveal
 text="GROWTH ENGINE"
 className="text-5xl sm:text-7xl md:text-[7rem] lg:text-[9rem] font-bold font-syne leading-[0.85] tracking-tighter text-white justify-center w-full text-center"
 />
 </motion.div>

 {/* ElevenLabs ConvAI Widget */}
 <div
 dangerouslySetInnerHTML={{
 __html: '<elevenlabs-convai agent-id="agent_7601kmrchpnaekjr1enst5xr0rmt"></elevenlabs-convai>',
 }}
 />
 <Script src="https://unpkg.com/@elevenlabs/convai-widget-embed" strategy="afterInteractive" />
 </section>
 );
}
