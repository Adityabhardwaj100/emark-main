"use client";
import Hero from "@/components/Hero";
import WebDev from "@/components/WebDev";
import HowItWorks from "@/components/HowItWorks";
import CTA from "@/components/CTA";
import TickerTape from "@/components/TickerTape";
import CompleteSystem from "@/components/CompleteSystem";
import { Bot } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
 return (
 <main className="flex min-h-screen flex-col">
 {/* ── Hero ── sticky so next section slides over it */}
 <div className="sticky top-0 h-screen w-full overflow-hidden">
 <Hero />
 </div>

 {/* ── All scrollable content sits below the hero ── */}
 <div className="relative z-10">
 <TickerTape />
 <WebDev />
 <CompleteSystem />
 <HowItWorks />

 <CTA />
 </div>
 </main>
 );
}
