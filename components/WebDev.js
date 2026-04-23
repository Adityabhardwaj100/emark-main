"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";
import Lenis from "lenis";
import ServiceCard from "./ServiceCard";

gsap.registerPlugin(ScrollTrigger);

export default function WebDev() {
 const containerRef = useRef(null);
 const cardRefs = useRef([]);
 const lenisRef = useRef(null);

 // Lenis smooth scroll — desktop only
 useEffect(() => {
 const isTouchDevice = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
 if (isTouchDevice) return;

 if (lenisRef.current) return;
 const lenis = new Lenis();
 lenisRef.current = lenis;

 function raf(time) {
 lenis.raf(time);
 requestAnimationFrame(raf);
 }
 requestAnimationFrame(raf);

 return () => {
 lenis.destroy();
 lenisRef.current = null;
 };
 }, []);

 useGSAP(
 () => {
 const cards = cardRefs.current;
 const totalScrollHeight = window.innerHeight * 3;
 const isMobile = window.matchMedia('(max-width: 768px)').matches;

 const cardsSection = containerRef.current.querySelector(".webdev-cards-section");

 // ── Pin the cards section ──────────────────────────────────
 ScrollTrigger.create({
 trigger: cardsSection,
 start: "top top",
 end: `+=${totalScrollHeight}`,
 pin: true,
 pinSpacing: true,
 });

 // ── Desktop: horizontal fan  |  Mobile: vertical fan ──────
 // Desktop: spread cards left-to-right across viewport
 // Mobile:  spread cards top-to-bottom within viewport
 const xPositions = isMobile
  ? [0, 0, 0, 0] // all centred horizontally
  : [14, 38, 62, 86]; // spread across width %

 const yPositions = isMobile
  ? ["-38vh", "-13vh", "13vh", "38vh"] // spread vertically
  : [0, 0, 0, 0]; // no vertical shift on desktop

 const rotations = isMobile
  ? [-6, -2, 2, 6] // subtle z-tilt for mobile fan
  : [-18, -7, 7, 18]; // bigger tilt on desktop

 cards.forEach((card, i) => {
 const frontEl = card.querySelector(".flip-card-front");
 const backEl = card.querySelector(".flip-card-back");

 gsap.set(backEl, { rotateY: 180 });
 gsap.set(frontEl, { rotateY: 0 });

 const tl = gsap.timeline({
 scrollTrigger: {
 trigger: cardsSection,
 start: "top top",
 end: `+=${totalScrollHeight}`,
 scrub: 2.0,
 },
 });

 // ── PHASE 1: Fan out (horizontal on desktop, vertical on mobile)
 tl.to(card, {
 x: isMobile ? 0 : `${xPositions[i] - 50}vw`,
 y: isMobile ? yPositions[i] : 0,
 rotation: rotations[i],
 ease: "power2.out",
 duration: 1,
 }, 0);

 // ── PHASE 2: Flip and straighten
 const flipStart = 1 + i * 0.25;
 tl.to(frontEl, { rotateY: -180, ease: "power3.inOut", duration: 1.2 }, flipStart);
 tl.to(backEl, { rotateY: 0, ease: "power3.inOut", duration: 1.2 }, flipStart);
 tl.to(card, { rotation: 0, ease: "power3.inOut", duration: 1.2 }, flipStart);
 });
 },
 { scope: containerRef }
 );

 return (
 <div ref={containerRef}>

 {/* ── One unified section — works on all screen sizes ── */}
 <section
 className="webdev-cards-section"
 style={{
 position: "relative",
 width: "100vw",
 height: "100vh",
 background: "#000",
 overflow: "hidden",
 boxShadow: "0 -40px 100px rgba(0,0,0,0.8)",
 borderTop: "1px solid rgba(255,255,255,0.02)",
 }}
 >
 {/* Top-edge spotlight glow */}
 <div 
 className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent z-20" 
 />
 
 {/* Subtle ambient glow */}
 <div
 style={{
 position: "absolute",
 top: "50%",
 left: "50%",
 transform: "translate(-50%, -50%)",
 width: "800px",
 height: "400px",
 background: "radial-gradient(ellipse, rgba(200,255,0,0.03) 0%, transparent 70%)",
 pointerEvents: "none",
 }}
 />

 {/* ── Heading block ── */}
 <motion.div
 initial={{ y: 60, opacity: 0 }}
 whileInView={{ y: 0, opacity: 1 }}
 transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
 viewport={{ once: false, amount: 0.1 }}
 style={{
 position: "absolute",
 top: "10vh",
 left: "0",
 right: "0",
 padding: "0 20px",
 width: "100%",
 display: "flex",
 flexDirection: "column",
 alignItems: "center",
 textAlign: "center",
 zIndex: 5,
 }}
 >
 <div className="flex flex-col items-center text-center">
 <div className="section-eyebrow">WHAT WE DO</div>
 <h2 className="text-2xl md:text-5xl lg:text-6xl font-bold font-syne text-white mb-2 md:mb-4 leading-tight max-w-3xl">
 We Don&apos;t Just Consult.{" "}
 <span className="text-white italic">We Build.</span>
 </h2>
 <p className="text-sm md:text-base text-gray-500 max-w-lg hidden sm:block">
 Scroll to reveal how we operate — four disciplines, one unified system.
 </p>
 </div>
 </motion.div>

 {/* ── Cards ── */}
 {[0, 1, 2, 3].map((i) => (
 <ServiceCard
 key={i}
 index={i}
 ref={(el) => (cardRefs.current[i] = el)}
 />
 ))}

 {/* Scroll hint */}
 <div
 style={{
 position: "absolute",
 bottom: "24px",
 left: "50%",
 transform: "translateX(-50%)",
 fontSize: "10px",
 letterSpacing: "0.4em",
 color: "rgba(255,255,255,0.15)",
 textTransform: "uppercase",
 fontWeight: "600",
 zIndex: 10,
 whiteSpace: "nowrap",
 }}
 >
 ↓ Scroll to fan &amp; flip
 </div>

 {/* Floating animation styles */}
 <style>{`
 @keyframes floatCard {
 0% { transform: translate(-50%, -50%); }
 50% { transform: translate(-50%, -57%); }
 100% { transform: translate(-50%, -50%); }
 }

 #service-card-1 .card-float-wrapper { animation: floatCard 3s ease-in-out infinite; animation-delay: 0s; }
 #service-card-2 .card-float-wrapper { animation: floatCard 3s ease-in-out infinite; animation-delay: 0.2s; }
 #service-card-3 .card-float-wrapper { animation: floatCard 3s ease-in-out infinite; animation-delay: 0.4s; }
 #service-card-4 .card-float-wrapper { animation: floatCard 3s ease-in-out infinite; animation-delay: 0.6s; }
 `}</style>
 </section>

 </div>
 );
}
