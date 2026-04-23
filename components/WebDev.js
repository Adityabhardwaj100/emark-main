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
        function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
        requestAnimationFrame(raf);
        return () => { lenis.destroy(); lenisRef.current = null; };
    }, []);

    useGSAP(
        () => {
            const cards = cardRefs.current;
            const isMobile = window.matchMedia('(max-width: 768px)').matches;
            const cardsSection = containerRef.current.querySelector(".webdev-cards-section");

            // ─────────────────────────────────────────────────────────────────
            // MOBILE: Lusion-style deck reveal
            // Cards stacked → flip reveals content → sweep up → next card appears
            // ─────────────────────────────────────────────────────────────────
            if (isMobile) {
                const totalScrollHeight = window.innerHeight * 4;

                // ── Initial deck state ──
                // Card 0 = top of deck, cards 1-3 hidden underneath
                cards.forEach((card, i) => {
                    const front = card.querySelector(".flip-card-front");
                    const back  = card.querySelector(".flip-card-back");
                    gsap.set(front, { rotateY: 0 });
                    gsap.set(back,  { rotateY: 180 });
                    // Reverse z-index: card 0 on top
                    gsap.set(card, {
                        zIndex: cards.length - i,
                        opacity: i === 0 ? 1 : 0,
                        y: 0,
                    });
                });

                // ── Pin section ──
                ScrollTrigger.create({
                    trigger: cardsSection,
                    start: "top top",
                    end: `+=${totalScrollHeight}`,
                    pin: true,
                    pinSpacing: true,
                });

                // ── One shared scrubbed timeline ──
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: cardsSection,
                        start: "top top",
                        end: `+=${totalScrollHeight}`,
                        scrub: 1,
                    },
                });

                // Each card gets 1 unit of timeline:
                //  0.00–0.45 → flip card (front → back reveals content)
                //  0.55–1.00 → card sweeps off-screen upward    +    next card fades in
                cards.forEach((card, i) => {
                    const front = card.querySelector(".flip-card-front");
                    const back  = card.querySelector(".flip-card-back");
                    const t = i;

                    // STEP 1 — flip
                    tl.to(front, { rotateY: -180, ease: "power2.inOut", duration: 0.45 }, t);
                    tl.to(back,  { rotateY:    0, ease: "power2.inOut", duration: 0.45 }, t);

                    // STEP 2 — sweep up and out (Lusion-style exit)
                    tl.to(card, {
                        y: -window.innerHeight * 1.15,
                        ease: "power3.in",
                        duration: 0.45,
                    }, t + 0.55);

                    // STEP 3 — reveal next card simultaneously
                    if (i < cards.length - 1) {
                        tl.to(cards[i + 1], {
                            opacity: 1,
                            ease: "power2.out",
                            duration: 0.35,
                        }, t + 0.55);
                    }
                });

                return; // ← skip desktop logic
            }


            // ─────────────────────────────────────────────────────────────────
            // DESKTOP: Horizontal fan out then flip
            // ─────────────────────────────────────────────────────────────────
            const totalScrollHeight = window.innerHeight * 3;
            const positions = [14, 38, 62, 86];
            const rotations = [-18, -7, 7, 18];

            ScrollTrigger.create({
                trigger: cardsSection,
                start: "top top",
                end: `+=${totalScrollHeight}`,
                pin: true,
                pinSpacing: true,
            });

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

                // Phase 1: fan out
                tl.to(card, {
                    x: `${positions[i] - 50}vw`,
                    rotation: rotations[i],
                    ease: "power2.out",
                    duration: 1,
                }, 0);

                // Phase 2: flip + straighten
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
                {/* Top-edge glow */}
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent z-20" />

                {/* Ambient glow */}
                <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "800px", height: "400px", background: "radial-gradient(ellipse, rgba(200,255,0,0.03) 0%, transparent 70%)", pointerEvents: "none" }} />

                {/* Heading */}
                <motion.div
                    initial={{ y: 60, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    viewport={{ once: false, amount: 0.1 }}
                    style={{ position: "absolute", top: "18vh", left: 0, right: 0, padding: "0 20px", width: "100%", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", zIndex: 5 }}
                >
                    <div className="flex flex-col items-center text-center">
                        <div className="section-eyebrow">WHAT WE DO</div>
                        <h2 className="text-2xl md:text-5xl lg:text-6xl font-bold font-syne text-white mb-2 md:mb-4 leading-tight max-w-3xl uppercase tracking-tight">
                            WE DON&apos;T JUST CONSULT WE BUILD
                        </h2>
                    </div>
                </motion.div>

                {/* Cards */}
                {[0, 1, 2, 3].map((i) => (
                    <ServiceCard
                        key={i}
                        index={i}
                        ref={(el) => (cardRefs.current[i] = el)}
                    />
                ))}


                {/* Float animation */}
                <style>{`
     @keyframes floatCard {
      0%   { transform: translate(-50%, -50%); }
      50%  { transform: translate(-50%, -57%); }
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
