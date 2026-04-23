"use client";

import { useEffect, useRef } from "react";
import Navbar from "../../components/Navbar";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
    const containerRef = useRef(null);
    const wordsRef = useRef([]);

    // Initialize smooth scrolling
    useEffect(() => {
        const lenis = new Lenis();
        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
        return () => lenis.destroy();
    }, []);

    useGSAP(() => {
        // ── 1. Hero Entrance & Parallax ──
        const tl = gsap.timeline();
        tl.fromTo(".hero-badge", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1.5, ease: "power4.out", delay: 0.2 })
            .fromTo(".hero-title", { yPercent: 100 }, { yPercent: 0, duration: 1.5, stagger: 0.15, ease: "power4.out" }, "-=1.2")
            .fromTo(".hero-desc", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1.5, ease: "power4.out" }, "-=1")
            .fromTo(".hero-scroll", { opacity: 0 }, { opacity: 1, duration: 2, ease: "power2.out" }, "-=0.5");

        gsap.to(".hero-content", {
            y: 300,
            opacity: 0,
            ease: "none",
            scrollTrigger: {
                trigger: ".hero-section",
                start: "top top",
                end: "bottom top",
                scrub: true,
            }
        });

        // ── 2. Ethos Pinned Scroll Reveal ──
        const words = wordsRef.current;

        ScrollTrigger.create({
            trigger: ".ethos-section",
            start: "top top",
            end: "+=200%",
            pin: true,
            scrub: 1.5,
            animation: gsap.to(words, {
                opacity: 1,
                color: "#c8ff00",
                stagger: 0.1,
                ease: "power1.inOut",
            })
        });

        // ── 3. Weapons Cards Slide Up ──
        gsap.utils.toArray(".weapon-card").forEach((card, i) => {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                },
                y: 80,
                opacity: 0,
                duration: 1.2,
                ease: "power3.out",
                delay: (i % 2) * 0.15 // Stagger columns
            });
        });

        // ── 4. Horizontal Scroll Architecture ──
        const sections = gsap.utils.toArray(".horizontal-panel");

        gsap.to(sections, {
            xPercent: -100 * (sections.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: ".horizontal-container",
                pin: true,
                scrub: 1.5,
                snap: 1 / (sections.length - 1),
                end: () => "+=" + (containerRef.current?.offsetWidth || window.innerWidth) * 2 // Scroll for 2 screen widths
            }
        });


        // ── 6. Marquee Animation ──
        gsap.to(".marquee-track", {
            xPercent: -50,
            ease: "none",
            duration: 15,
            repeat: -1
        });

        // ── 7. Philosophy Section Reveal ──
        gsap.from(".philosophy-row", {
            scrollTrigger: {
                trigger: ".philosophy-section",
                start: "top 75%",
            },
            opacity: 0,
            y: 50,
            stagger: 0.2,
            duration: 1,
            ease: "power3.out"
        });

        // ── 8. Architects Reveal (Entrance animation simplified to ensure visibility) ──

        // ── 9. Tech Badge Stagger ──
        gsap.from(".tech-badge", {
            scrollTrigger: {
                trigger: ".tech-badge",
                start: "top 85%",
            },
            scale: 0.8,
            y: 20,
            opacity: 0,
            stagger: 0.05,
            duration: 0.8,
            ease: "back.out(1.5)"
        });

    }, { scope: containerRef });

    const ethosText = "WE DON'T JUST PLAY THE GAME. WE WRITE THE ALGORITHM. NO FLUFF. NO VANITY METRICS. JUST RAW UNADULTERATED SCALE.".split(" ");

    const weapons = [
        { title: "STRATEGIC WARFARE", desc: "We deploy data-driven market positioning that annihilates legacy competition." },
        { title: "CREATIVE ENGINEERING", desc: "Aesthetic mastery strictly merged with psychological UX principles." },
        { title: "AUTONOMIC TECH", desc: "AI agents and headless architectures that run operations effortlessly." },
        { title: "HYPER-GROWTH", desc: "Scientific funnel physics mathematically designed to convert." }
    ];

    const architectureSteps = [
        { num: "01", title: "Discovery", desc: "Deep-dive analysis of your market, competitors, and growth vectors to locate the exact gaps." },
        { num: "02", title: "Architecture", desc: "Designing flawless technical and creative systems tailored strictly for uncompromising scale." },
        { num: "03", title: "Engineering", desc: "Precision execution using cutting-edge stacks, modern frameworks, and AI workflows." },
        { num: "04", title: "Hyper-Scale", desc: "Deploying automated funnels and aggressive performance marketing to dominate." }
    ];

    return (
        <div ref={containerRef} className="bg-black min-h-screen text-white overflow-x-hidden selection:bg-[#c8ff00] selection:text-black relative">
            {/* Global Page Line Connecting Flow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-gradient-to-b from-transparent via-white/[0.04] to-transparent pointer-events-none z-0 hidden md:block" />


            {/* ── HERO SECTION ── */}
            <section className="hero-section relative w-full h-screen flex flex-col items-center justify-center pt-24 overflow-hidden bg-transparent">
                {/* Cinematic Film Grain & Vignette */}
                <div className="absolute inset-0 bg-grain opacity-60 mix-blend-overlay z-10 pointer-events-none" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#000_100%)] z-10 pointer-events-none" />

                <div className="hero-content relative z-20 flex flex-col items-center justify-center text-center px-4 w-full h-full max-w-7xl mx-auto -mt-16 md:-mt-32">
                    {/* Subtle Accent Line */}
                    <div className="hero-badge overflow-hidden mb-6 md:mb-8 mt-12 md:mt-0">
                        <div className="text-[10px] uppercase font-bold tracking-[0.4em] text-gray-400 border border-white/10 px-6 py-2 rounded-full relative bg-black/50 backdrop-blur-sm">

                        </div>
                    </div>

                    <h1 className="font-syne flex flex-col items-center text-[3.5rem] sm:text-[5rem] md:text-[7.5rem] lg:text-[9rem] font-black uppercase leading-[0.85] tracking-tighter text-white">
                        <div className="overflow-hidden pb-4"><div className="hero-title inline-block">Absolute</div></div>
                        <div className="overflow-hidden pb-4"><div className="hero-title italic inline-block pr-4 lg:pr-6">Domination</div></div>
                    </h1>

                    <p className="hero-desc mt-6 md:mt-10 max-w-xl text-gray-400 text-lg md:text-xl font-medium leading-relaxed">
                        The era of vanilla marketing is dead. We construct lethal digital ecosystems engineered for unprecedented scale.
                    </p>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center z-20 overflow-hidden">
                    <div className="hero-scroll text-[10px] font-bold tracking-[0.3em] uppercase text-gray-500 mb-6 flex items-center gap-4">
                        <span className="w-8 h-[1px] bg-white/20" /> Scroll To Enter <span className="w-8 h-[1px] bg-white/20" />
                    </div>
                </div>
            </section>

            {/* ── ETHOS PINNED SCROLL REVEAL ── */}
            <section className="ethos-section relative w-full h-screen flex items-center justify-center bg-transparent">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <p className="font-syne text-3xl md:text-5xl lg:text-7xl font-bold uppercase leading-tight tracking-tighter">
                        {ethosText.map((word, i) => (
                            <span
                                key={i}
                                className="inline-block mx-[6px] md:mx-4 my-2 opacity-15 transition-all duration-300"
                                ref={(el) => (wordsRef.current[i] = el)}
                                style={{ willChange: "opacity, color" }}
                            >
                                {word}
                            </span>
                        ))}
                    </p>
                </div>
            </section>

            {/* ── OUR WEAPONS ── */}
            <section className="relative w-full py-32 md:py-48 bg-transparent">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="mb-20 flex flex-col md:flex-row justify-between items-end border-white/[0.06] pb-10">
                        <div>
                            <div className="section-eyebrow">ARMAMENT</div>
                            <h2 className="font-syne text-5xl md:text-7xl font-bold uppercase tracking-tighter text-white">
                                Our <span className="italic ">Weapons</span>
                            </h2>
                        </div>
                        <p className="text-gray-500 max-w-sm text-sm uppercase tracking-widest font-bold mt-6 md:mt-0 text-right">
                            Four Core Disciplines. Executed with lethal precision.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                        {weapons.map((weapon, i) => (
                            <div
                                key={i}
                                className="weapon-card group relative overflow-hidden bg-white/[0.02] backdrop-blur-md border border-white/[0.05] p-10 md:p-16 hover:border-[#c8ff00]/40 transition-colors duration-500 rounded-3xl"
                            >
                                {/* Hover Aura */}
                                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(200,255,0,0.15)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none translate-x-1/4 -translate-y-1/4" />

                                <div className="relative z-10 flex flex-col h-full justify-between gap-16">
                                    <div>
                                        <h3 className="font-syne text-2xl md:text-4xl font-bold uppercase tracking-tight text-white mb-6 group-hover:text-white transition-colors duration-300">
                                            {weapon.title}
                                        </h3>
                                        <p className="text-gray-400 text-base md:text-lg leading-relaxed font-medium max-w-md">
                                            {weapon.desc}
                                        </p>
                                    </div>

                                    {/* Plus Icon Accent */}
                                    <div className="self-end opacity-20 group-hover:opacity-100 group-hover:text-white transition-all duration-300 transform group-hover:rotate-90">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M12 5v14M5 12h14" />
                                        </svg>
                                    </div>
                                </div>

                                {/* Huge Index Number */}
                                <div className="absolute -bottom-6 -left-6 text-[180px] font-syne font-black text-white/[0.02] group-hover:text-white/[0.05] transition-colors pointer-events-none leading-none select-none">
                                    0{i + 1}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CORE PHILOSOPHY REVEAL ── */}
            <section className="philosophy-section relative w-full py-32 md:py-48 bg-transparent">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="section-eyebrow mb-12">THE DOCTRINE</div>

                    <div className="flex flex-col ">
                        {[
                            { title: "Defy Gravity", desc: "We operate without the weight of legacy thinking. Only what scales matters." },
                            { title: "Ruthless Execution", desc: "No endless meetings. No 'yes-men'. We ship rapidly, optimize aggressively, and scale exponentially." },
                            { title: "Algorithmic Precision", desc: "Every creative move is tested, every data point is leveraged. Gut feeling is dead; math reigns." }
                        ].map((item, i) => (
                            <div key={i} className="philosophy-row flex flex-col md:flex-row justify-between items-start md:items-center py-10 md:py-16 group cursor-default">
                                <div className="text-xl md:text-2xl text-gray-500 font-syne mb-4 md:mb-0 group-hover:text-white transition-colors">
                                    0{i + 1}
                                </div>
                                <h3 className="text-3xl md:text-5xl font-syne font-bold uppercase text-white mb-4 md:mb-0 group-hover:translate-x-4 transition-transform duration-500 w-full md:w-1/3">
                                    {item.title}
                                </h3>
                                <p className="text-gray-400 max-w-md font-medium text-lg leading-relaxed md:ml-auto group-hover:text-white transition-colors">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>





            {/* ── FOOTER OUTRO ── */}
            <section className="relative py-48 md:py-64 bg-transparent flex flex-col items-center justify-center overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse,rgba(200,255,0,0.08)_0%,transparent_70%)] pointer-events-none" />

                <h2 className="font-syne text-5xl md:text-8xl font-black text-white uppercase tracking-tighter mb-12 text-center z-10">
                    Ready To <br />
                    <span className="italic text-white">Execute?</span>
                </h2>

                <a
                    href="/contact"
                    className="relative z-10 bg-white text-black px-12 py-5 rounded-full text-sm font-bold uppercase tracking-widest hover:scale-105 hover:bg-[#c8ff00] transition-all duration-300 overflow-hidden group"
                >
                    <span className="relative z-10">Initiate Protocol</span>
                </a>
            </section>
        </div>
    );
}
