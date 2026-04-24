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
    const cardRefs = useRef([]); // desktop
    const mobileCardRefs = useRef([]); // mobile

    const lenisRef = useRef(null);

    // Lenis — desktop only
    useEffect(() => {
        const isTouch = window.matchMedia("(hover: none) and (pointer: coarse)").matches;
        if (isTouch) return;
        if (lenisRef.current) return;
        const lenis = new Lenis();
        lenisRef.current = lenis;
        function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
        requestAnimationFrame(raf);
        return () => { lenis.destroy(); lenisRef.current = null; };
    }, []);

    useGSAP(
        () => {
            const isMobile = window.matchMedia("(max-width: 768px)").matches;

            // ─────────────────────────────────────────────────────────────────
            // MOBILE: Vertical column — cards show back, flip to front on scroll
            // ─────────────────────────────────────────────────────────────────
            if (isMobile) {
                const cards = mobileCardRefs.current;

                cards.forEach((card, i) => {
                    if (!card) return;
                    const front = card.querySelector(".flip-card-front");
                    const back = card.querySelector(".flip-card-back");

                    // Start: FRONT face visible (video side)
                    gsap.set(front, { rotateY: 0 });
                    gsap.set(back, { rotateY: 180 });

                    // Scrub = flip is tied directly to scroll position
                    // → scroll down: flips to back (text)
                    // → scroll up:   auto-reverses back to front (video)
                    const flipTl = gsap.timeline({
                        scrollTrigger: {
                            trigger: card,
                            start: "top 88%",      // flip starts as card enters viewport
                            end: "center 48%",   // flip completes when card center is near middle
                            scrub: 1.2,
                            invalidateOnRefresh: true,
                        },
                    });

                    flipTl
                        .to(front, { rotateY: -180, ease: "power2.inOut", duration: 1 })
                        .to(back, { rotateY: 0, ease: "power2.inOut", duration: 1 }, "<");
                });


                return;
            }

            // ─────────────────────────────────────────────────────────────────
            // DESKTOP: Horizontal fan out then flip
            // ─────────────────────────────────────────────────────────────────
            const cards = cardRefs.current;
            const cardsSection = containerRef.current.querySelector(".webdev-cards-section");
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

            {/* ══════════════════════════════════════════════════════
                MOBILE SECTION — vertical column, scroll-flip per card
                ══════════════════════════════════════════════════════ */}
            <section className="block md:hidden bg-black relative overflow-hidden">

                {/* top glow edge */}
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent z-10" />

                {/* Heading */}
                <motion.div
                    initial={{ y: 40, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="text-center pt-24 pb-10 px-5"
                >
                    <div className="section-eyebrow justify-center">WHAT WE DO</div>
                    <h2 className="text-2xl font-bold font-syne text-white uppercase tracking-tight leading-tight mt-1">
                        WE DON&apos;T JUST CONSULT. WE BUILD.
                    </h2>
                    <p className="text-xs text-gray-500 mt-3 uppercase tracking-widest">
                        Scroll to reveal each service
                    </p>
                </motion.div>

                {/* Cards — vertical column, each shows front initially, flips to service text on scroll */}
                <div className="flex flex-col gap-6 px-4 pb-32">
                    {[0, 1, 2, 3].map((i) => (
                        <ServiceCard
                            key={`mob-${i}`}
                            index={i}
                            ref={(el) => (mobileCardRefs.current[i] = el)}
                        />
                    ))}
                </div>
            </section>

            {/* ══════════════════════════════════════════════════════
                DESKTOP SECTION — pinned fan + flip
                ══════════════════════════════════════════════════════ */}
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
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent z-20" />
                <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "800px", height: "400px", background: "radial-gradient(ellipse, rgba(200,255,0,0.03) 0%, transparent 70%)", pointerEvents: "none" }} />

                {/* Heading */}
                <motion.div
                    initial={{ y: 60, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    viewport={{ once: false, amount: 0.1 }}
                    style={{ position: "absolute", top: "14vh", left: 0, right: 0, padding: "0 20px", width: "100%", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", zIndex: 5 }}
                >
                    <div className="flex flex-col items-center text-center">
                        <div className="section-eyebrow">WHAT WE DO</div>
                        <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold font-syne text-white mb-2 md:mb-4 leading-tight max-w-3xl uppercase tracking-tight">
                            WE DON&apos;T JUST CONSULT WE BUILD
                        </h2>
                    </div>
                </motion.div>

                {/* Desktop Cards */}
                {[0, 1, 2, 3].map((i) => (
                    <ServiceCard
                        key={`desk-${i}`}
                        index={i}
                        ref={(el) => (cardRefs.current[i] = el)}
                    />
                ))}

                {/* Scroll hint */}
                <div style={{ position: "absolute", bottom: "24px", left: "50%", transform: "translateX(-50%)", fontSize: "10px", letterSpacing: "0.4em", color: "rgba(255,255,255,0.15)", textTransform: "uppercase", fontWeight: "600", zIndex: 10, whiteSpace: "nowrap" }}>
                    ↓ Scroll to fan &amp; flip
                </div>

                {/* Float animation — desktop only */}
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
