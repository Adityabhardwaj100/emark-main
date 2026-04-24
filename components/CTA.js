"use client";
import { motion } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";
import MagneticButton from "./MagneticButton";

export default function CTA() {
    return (
        <section
            id="contact"
            className="py-16 md:py-24 relative overflow-hidden bg-black selection:bg-lime selection:text-black"
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                {/* ── Header row ── */}
                <div className="flex flex-col items-center text-center justify-center gap-5 mb-12">
                    <div className="max-w-3xl flex flex-col items-center">
                        <div className="section-eyebrow">START YOUR PROJECT</div>
                        <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold font-syne text-white tracking-tight leading-[0.9] uppercase mt-2">
                            BUILD YOUR ENGINE
                        </h2>
                    </div>
                    <p className="text-lg text-gray-500 max-w-lg leading-relaxed mx-auto text-center">
                        Join fast-moving businesses using our unified AI + web system to automate revenue and eliminate manual work.
                    </p>
                </div>

                {/* ── CTA Buttons ── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <MagneticButton
                        href="/contact"
                        className="w-full sm:w-auto bg-lime text-black px-10 py-4 rounded-full text-sm font-black uppercase tracking-wider hover:bg-white transition-all shadow-[0_0_40px_rgba(200,241,53,0.2)] hover:shadow-[0_0_50px_rgba(255,255,255,0.3)]"
                    >
                        <span className="flex items-center justify-center gap-3 pointer-events-none">
                            Build My Project
                        </span>
                    </MagneticButton>

                    <MagneticButton
                        href="/about"
                        className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors uppercase text-sm font-bold tracking-wider group border border-white/10 hover:border-white/20 px-8 py-4 rounded-full"
                    >
                        <span className="flex items-center gap-2 pointer-events-none">
                            See Our Process
                            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </span>
                    </MagneticButton>
                </motion.div>
            </div>
        </section>
    );
}
