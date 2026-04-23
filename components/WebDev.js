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

 // Lenis smooth scroll — desktop only (mobile uses native touch scroll)
 useEffect(() => {
 // Skip Lenis on touch/mobile devices to preserve native scroll
 const isTouchDevice = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
 if (isTouchDevice) return;

 if (lenisRef.current) return; // already initialised
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
 // Skip complex animation + pinning on mobile — use CSS fallback
 const isMobile = window.matchMedia('(max-width: 768px)').matches;
 if (isMobile) return;

 const cards = cardRefs.current;
 const totalScrollHeight = window.innerHeight * 3;

 // Final spread positions (left %) and tilt angles
 const positions = [14, 38, 62, 86];
 const rotations = [-18, -7, 7, 18];

 const cardsSection = containerRef.current.querySelector(".webdev-cards-section");

 // ── Pin the cards section while the animation plays ──────────────
 ScrollTrigger.create({
 trigger: cardsSection,
 start: "top top",
 end: `+=${totalScrollHeight}`,
 pin: true,
 pinSpacing: true,
 });

 // ── Create a unified Timeline for perfectly smooth sequence ──
 cards.forEach((card, i) => {
 const frontEl = card.querySelector(".flip-card-front");
 const backEl = card.querySelector(".flip-card-back");

 // Initial setup just to be safe
 gsap.set(backEl, { rotateY: 180 });
 gsap.set(frontEl, { rotateY: 0 });

 const tl = gsap.timeline({
 scrollTrigger: {
 trigger: cardsSection,
 start: "top top",
 end: `+=${totalScrollHeight}`,
 scrub: 2.0, // High inertia for butter smooth interpolation
 },
 });

 // ── PHASE 1: Fan cards out from centre (Duration spanning 0 to 1 abstract units)
 // CRITICAL PERFORMANCE FIX: Animating 'x' instead of 'left' shifts calculation to the GPU
 tl.to(card, {
 x: `${positions[i] - 50}vw`,
 rotation: rotations[i],
 ease: "power2.out",
 duration: 1,
 }, 0); // start at time 0

 // ── PHASE 2: Flip and Straighten smoothly
 // Start time for this card's flip staggered:
 const flipStart = 1 + i * 0.25; 

 // Both front, back, and the straightening rotation happen simultaneously over a span of 1 unit
 tl.to(frontEl, { rotateY: -180, ease: "power3.inOut", duration: 1.2 }, flipStart);
 tl.to(backEl, { rotateY: 0, ease: "power3.inOut", duration: 1.2 }, flipStart);
 tl.to(card, { rotation: 0, ease: "power3.inOut", duration: 1.2 }, flipStart);
 });
 },
 { scope: containerRef }
 );

 return (
 <div ref={containerRef}>

 {/* ── DESKTOP: One unified pinned section: heading + cards together ── */}
 <section
 className="webdev-cards-section hidden md:block"
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
 {/* Top-edge spotlight glow for depth */}
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

 {/* ── Heading block — top-centered, inside the pinned section ── */}
 <motion.div
 initial={{ y: 60, opacity: 0 }}
 whileInView={{ y: 0, opacity: 1 }}
 transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
 viewport={{ once: false, amount: 0.1 }}
 style={{
 position: "absolute",
 top: "14vh",
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
 <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-syne text-white mb-4 leading-tight max-w-3xl">
 We Don&apos;t Just Consult.{" "}
 <span className="text-white italic">We Build.</span>
 </h2>
 <p className="text-base text-gray-500 max-w-lg">
 Scroll to reveal how we operate — four disciplines, one unified system.
 </p>
 </div>
 </motion.div>

 {/* ── Cards — centred vertically across the remaining space ── */}
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
 bottom: "28px",
 left: "50%",
 transform: "translateX(-50%)",
 fontSize: "10px",
 letterSpacing: "0.4em",
 color: "rgba(255,255,255,0.15)",
 textTransform: "uppercase",
 fontWeight: "600",
 zIndex: 10,
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

 {/* ── MOBILE: Simple scrollable card grid ── */}
 <section
 className="block md:hidden bg-black py-16 px-5"
 style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
 >
 <div className="flex flex-col items-center text-center mb-10">
 <div className="section-eyebrow">WHAT WE DO</div>
 <h2 className="text-3xl font-bold font-syne text-white mb-3 leading-tight">
 We Don&apos;t Just Consult.{" "}
 <span className="italic">We Build.</span>
 </h2>
 <p className="text-sm text-gray-500 max-w-xs">
 Four disciplines, one unified system.
 </p>
 </div>

 <div className="grid grid-cols-1 gap-5">
 {[
 { label: "STRATEGY", emoji: "🧠", items: ["AI Growth Strategy", "Brand Positioning", "Creative Direction", "Market Discovery", "Competitive Research"] },
 { label: "CREATIVE", emoji: "✦", items: ["Art Direction", "UX / UI Design", "Motion & Animation", "Interactive Design", "Visual Identity"] },
 { label: "TECH", emoji: "⚙️", items: ["Next.js & React Apps", "AI Automation & Agents", "WebGL / Three.js", "API Integrations", "Full-Stack Engineering"] },
 { label: "GROWTH", emoji: "📈", items: ["SEO & Content Systems", "Paid Ads & Funnels", "Email Automation", "Analytics & Tracking", "Conversion Optimisation"] },
 ].map((card, i) => (
 <div
 key={i}
 className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-6"
 >
 <div className="flex items-center justify-between mb-4">
 <span className="text-[11px] font-syne font-black tracking-[0.3em] text-white uppercase">{card.label}</span>
 <span className="text-2xl">{card.emoji}</span>
 </div>
 <ul className="space-y-0">
 {card.items.map((item, j) => (
 <li
 key={j}
 className="py-2 text-sm font-medium text-gray-300"
 style={{ borderBottom: j < card.items.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none" }}
 >
 {item}
 </li>
 ))}
 </ul>
 </div>
 ))}
 </div>
 </section>

 </div>
 );
}
