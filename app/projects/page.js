"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight, X, ExternalLink, ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const PROJECTS = [
  {
    id: 1,
    title: "JustBecho",
    url: "https://justbecho.com",
    display: "justbecho.com",
    tech: "Next.js",
    index: "01",
    image: "/projects/justbecho.jpg",
    tagline: "Custom E-Commerce Platform",
    description:
      "A fully custom-built e-commerce platform developed in Next.js from the ground up. Designed for blazing-fast performance, seamless UX, and scalable architecture that grows with the business.",
    work: [
      "Custom Next.js storefront with SSR & ISR",
      "Product catalogue with dynamic filtering",
      "Cart & checkout flow with payment gateway",
      "Mobile-first responsive design",
      "SEO optimisation & Core Web Vitals",
    ],
    metrics: [{ label: "Load Time", val: "<1.2s" }, { label: "Mobile Score", val: "98" }, { label: "Stack", val: "Next.js" }],
  },
  {
    id: 2,
    title: "Grytt",
    url: "https://grytt.in",
    display: "grytt.in",
    tech: "Shopify",
    index: "02",
    tagline: "Premium Shopify Storefront",
    description:
      "A premium Shopify storefront crafted for high-conversion sales. Built with a mobile-first design philosophy and optimised for maximum product discovery and checkout conversion.",
    work: [
      "Custom Shopify theme development",
      "Conversion-optimised product pages",
      "Upsell & cross-sell integrations",
      "Mobile-first design & animation",
      "Speed & performance optimisation",
    ],
    metrics: [{ label: "Platform", val: "Shopify" }, { label: "Focus", val: "Conversion" }, { label: "Device", val: "Mobile 1st" }],
  },
  {
    id: 3,
    title: "Bria Jewels",
    url: "https://briajewels.com",
    display: "briajewels.com",
    tech: "Shopify",
    index: "03",
    tagline: "Luxury Jewellery E-Commerce",
    description:
      "An elegant jewellery brand store combining a luxurious visual identity with optimised product pages. Every detail — from typography to product zoom — crafted to reflect the brand's premium positioning.",
    work: [
      "Custom luxury Shopify theme",
      "High-resolution product imagery setup",
      "Jewellery-specific product variant logic",
      "Editorial look & feel design",
      "WhatsApp & Instagram integrations",
    ],
    metrics: [{ label: "Platform", val: "Shopify" }, { label: "Niche", val: "Luxury" }, { label: "Brand", val: "Premium" }],
  },
  {
    id: 4,
    title: "ClearEcho",
    url: "https://clearecho.vercel.app",
    display: "clearecho.vercel.app",
    tech: "Next.js",
    index: "04",
    tagline: "SaaS Brand Website",
    description:
      "A high-end SaaS brand website with a brutalist-inspired design language and cinematic scroll animations. Built to position ClearEcho as an authoritative player in the AI-communications space.",
    work: [
      "Brutalist dark-mode design system",
      "GSAP + Framer Motion scroll animations",
      "Custom cursor & micro-interactions",
      "Animated feature sections",
      "Vercel deployment & performance tuning",
    ],
    metrics: [{ label: "Stack", val: "Next.js" }, { label: "Animations", val: "GSAP" }, { label: "Deploy", val: "Vercel" }],
  },
  {
    id: 5,
    title: "Nautilus Verse",
    url: "https://nautilusverse.com",
    display: "nautilusverse.com",
    tech: "Next.js",
    index: "05",
    tagline: "Immersive Web Experience",
    description:
      "An immersive Next.js experience with WebGL-driven visuals and premium interactive storytelling. Built to blur the boundary between website and digital art installation.",
    work: [
      "WebGL / Three.js interactive background",
      "Cinematic scroll-driven narrative",
      "Custom shader effects",
      "Performance-optimised 3D rendering",
      "Cross-browser compatibility",
    ],
    metrics: [{ label: "Stack", val: "Next.js" }, { label: "3D", val: "Three.js" }, { label: "Type", val: "Immersive" }],
  },
  {
    id: 6,
    title: "Clever Cabling",
    url: "https://clever-cabling.ca",
    display: "clever-cabling.ca",
    tech: "Shopify",
    index: "06",
    tagline: "B2B Electrical Solutions",
    description:
      "A professional B2B Shopify store for a Canadian electrical solutions provider. Designed for trust, clarity and bulk-order efficiency — balancing industrial aesthetics with intuitive navigation.",
    work: [
      "B2B-focused Shopify store setup",
      "Custom bulk pricing & wholesaler flow",
      "Professional brand identity integration",
      "Product categorisation & search",
      "Canadian market localisation",
    ],
    metrics: [{ label: "Market", val: "Canada" }, { label: "Model", val: "B2B" }, { label: "Platform", val: "Shopify" }],
  },
  {
    id: 7,
    title: "Hebbevu",
    url: "https://www.hebbevu.com",
    display: "hebbevu.com",
    tech: "Shopify",
    index: "07",
    tagline: "Lifestyle Brand Storefront",
    description:
      "A clean, conversion-focused Shopify storefront for a lifestyle brand. Designed with minimal aesthetics and smart layout decisions to push product discovery and reduce drop-off.",
    work: [
      "Minimal Shopify theme design",
      "Lifestyle brand visual identity",
      "Optimised collection pages",
      "Abandoned cart & email flows",
      "Speed & CRO optimisation",
    ],
    metrics: [{ label: "Platform", val: "Shopify" }, { label: "Type", val: "Lifestyle" }, { label: "Focus", val: "CRO" }],
  },
  {
    id: 8,
    title: "Six Star Travel",
    url: "https://sixstartravel.ca",
    display: "sixstartravel.ca",
    tech: "Shopify",
    index: "08",
    tagline: "Luxury Travel Agency",
    description:
      "A luxury travel agency storefront engineered for high-value bookings and premium customer experience. Every touchpoint designed to reflect an aspirational, world-class travel brand.",
    work: [
      "Luxury Shopify travel storefront",
      "Custom booking & package pages",
      "High-end photography integration",
      "Trust-building design elements",
      "Canadian market & currency setup",
    ],
    metrics: [{ label: "Market", val: "Canada" }, { label: "Niche", val: "Luxury Travel" }, { label: "Platform", val: "Shopify" }],
  },
  {
    id: 9,
    title: "Mona B India",
    url: "https://www.monabindia.com",
    display: "monabindia.com",
    tech: "Shopify",
    index: "09",
    tagline: "Fashion Brand E-Commerce",
    description:
      "A fashion-forward Shopify store with editorial photography and smooth product discovery. Built to amplify brand storytelling while driving direct-to-consumer sales.",
    work: [
      "Editorial fashion Shopify theme",
      "Lookbook & campaign page design",
      "Size guide & variant UX",
      "Instagram shop integration",
      "India market localisation",
    ],
    metrics: [{ label: "Market", val: "India" }, { label: "Niche", val: "Fashion" }, { label: "Platform", val: "Shopify" }],
  },
  {
    id: 10,
    title: "Rekha Sharma",
    url: "https://rekhasharma.in",
    display: "rekhasharma.in",
    tech: "Next.js",
    index: "10",
    tagline: "Personal Brand Website",
    description:
      "A fast, elegant personal brand website built in Next.js. SEO-optimised from the ground up and designed to establish authority and drive inbound enquiries.",
    work: [
      "Next.js personal brand site",
      "Content-driven layout design",
      "SEO metadata & schema markup",
      "Blog / article section",
      "Contact & lead capture forms",
    ],
    metrics: [{ label: "Stack", val: "Next.js" }, { label: "Focus", val: "SEO" }, { label: "Type", val: "Personal Brand" }],
  },
  {
    id: 11,
    title: "Skincare Studio",
    url: "https://skincare-eta-pink.vercel.app",
    display: "skincare-eta-pink.vercel.app",
    tech: "Next.js",
    index: "11",
    tagline: "Skincare Brand Landing Page",
    description:
      "A beautiful skincare brand landing page with soft, premium aesthetics and animated product sections. Designed to build brand trust and drive product exploration.",
    work: [
      "Next.js brand landing page",
      "Soft pastel design system",
      "Animated product showcase sections",
      "Ingredient storytelling layout",
      "Mobile-optimised performance",
    ],
    metrics: [{ label: "Stack", val: "Next.js" }, { label: "Deploy", val: "Vercel" }, { label: "Niche", val: "Skincare" }],
  },
];

const TECH_CONFIG = {
  "Next.js": { color: "#ffffff", bg: "rgba(255,255,255,0.07)" },
  "Shopify":  { color: "#95bf47", bg: "rgba(149,191,71,0.1)"  },
};

function getThumb(project) {
  if (project.image) return project.image;
  return `https://image.thum.io/get/width/1200/crop/630/noanimate/${project.url}`;
}

// ── Project Detail Modal ──────────────────────────────────────────
function ProjectModal({ project, onClose }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  if (!project) return null;
  const tc = TECH_CONFIG[project.tech];

  return (
    <AnimatePresence>
      <motion.div
        key="overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm"
      />
      <motion.div
        key="drawer"
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", stiffness: 260, damping: 30 }}
        className="fixed top-0 right-0 h-full z-[101] overflow-y-auto"
        style={{ width: "min(600px, 100vw)", background: "#080808", borderLeft: "1px solid rgba(255,255,255,0.07)" }}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-11 h-11 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full flex items-center justify-center transition-colors z-10"
        >
          <X size={16} className="text-white" />
        </button>

        {/* Content — starts from top, right below close button */}
        <div className="px-6 md:px-8 pt-16 pb-16 relative">

          {/* Index + tech */}
          <div className="flex items-center gap-4 mb-6">
            <span className="text-[11px] font-mono text-white/20 uppercase tracking-widest">{project.index} / 11</span>
            <span className="text-[10px] font-mono uppercase tracking-widest px-3 py-1 rounded-full font-bold"
              style={{ background: tc.bg, color: tc.color }}>
              <span className="inline-block w-1.5 h-1.5 rounded-full mr-1.5 align-middle" style={{ background: tc.color }} />
              {project.tech}
            </span>
          </div>

          <h2 className="font-syne text-3xl md:text-4xl font-black uppercase tracking-tighter text-white mb-1">
            {project.title}
          </h2>
          <p className="text-gray-500 text-sm uppercase tracking-widest mb-6 font-medium">{project.tagline}</p>

          {/* Inline screenshot thumbnail */}
          <div className="w-full rounded-2xl overflow-hidden border border-white/[0.07] mb-8" style={{ aspectRatio: "16/9" }}>
            <img
              src={getThumb(project)}
              alt={project.title}
              className="w-full h-full object-cover object-top"
              onError={(e) => { e.target.parentElement.style.background = "#111"; e.target.style.display = "none"; }}
            />
          </div>

          <p className="text-gray-400 text-sm leading-relaxed mb-8">{project.description}</p>

          {/* Metrics */}
          <div className="grid grid-cols-3 gap-3 mb-8">
            {project.metrics.map((m) => (
              <div key={m.label} className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-4">
                <div className="font-syne font-bold text-white text-base">{m.val}</div>
                <div className="text-[10px] uppercase tracking-widest text-gray-600 mt-1 font-medium">{m.label}</div>
              </div>
            ))}
          </div>

          {/* Work done */}
          <div className="mb-8">
            <div className="section-eyebrow" style={{ marginBottom: "1rem" }}>WHAT WE DID</div>
            <ul className="flex flex-col">
              {project.work.map((item, i) => (
                <li key={i} className="flex items-start gap-4 py-3.5 border-b border-white/[0.05]">
                  <span className="text-[10px] font-mono text-white/20 mt-0.5 shrink-0">0{i + 1}</span>
                  <span className="text-gray-300 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-3 bg-white text-black px-8 py-4 rounded-full font-black uppercase tracking-wider text-[13px] hover:bg-lime transition-all duration-300 group"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Visit Live Site <ExternalLink size={15} className="group-hover:scale-110 transition-transform" />
          </a>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

// ── Main Page ─────────────────────────────────────────────────────
export default function ProjectsPage() {
  const [active, setActive] = useState("All");
  const [selected, setSelected] = useState(null);
  const containerRef = useRef(null);

  const filtered = active === "All" ? PROJECTS : PROJECTS.filter((p) => p.tech === active);

  useGSAP(() => {
    gsap.fromTo(".proj-hero-eyebrow", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1.4, ease: "power4.out", delay: 0.1 });
    gsap.fromTo(".proj-hero-title", { yPercent: 110 }, { yPercent: 0, duration: 1.5, stagger: 0.12, ease: "power4.out", delay: 0.2 });
    gsap.fromTo(".proj-hero-sub", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1.2, ease: "power3.out", delay: 0.7 });

    gsap.from(".proj-stat", {
      scrollTrigger: { trigger: ".proj-stats", start: "top 85%" },
      opacity: 0, y: 30, stagger: 0.1, duration: 0.9, ease: "power3.out",
    });
  }, { scope: containerRef });

  return (
    <>
      <Navbar />
      <div ref={containerRef} className="bg-black min-h-screen text-white overflow-x-hidden selection:bg-lime selection:text-black">

        {/* Subtle vertical guide line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-gradient-to-b from-transparent via-white/[0.03] to-transparent pointer-events-none z-0 hidden md:block" />

        {/* ── HERO ────────────────────────────────── */}
        <section className="relative w-full min-h-[70vh] flex flex-col justify-end pb-20 pt-40 overflow-hidden bg-transparent">

          {/* Ambient glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] pointer-events-none"
            style={{ background: "radial-gradient(ellipse, rgba(200,241,53,0.05) 0%, transparent 65%)" }} />

          <div className="max-w-7xl mx-auto w-full px-6 lg:px-12 relative z-10 flex flex-col items-center text-center">
            <div className="proj-hero-eyebrow">
              <div className="section-eyebrow justify-center mb-6">OUR WORK</div>
            </div>

            <h1 className="font-syne font-black uppercase tracking-tighter leading-[0.85] text-white text-[clamp(3.5rem,10vw,9rem)] mb-10">
              <div className="overflow-hidden pb-3">
                <div className="proj-hero-title inline-block">Work That</div>
              </div>
              <div className="overflow-hidden pb-3">
                <div className="proj-hero-title inline-block italic">Converts.</div>
              </div>
            </h1>

            <div className="proj-stats flex flex-wrap justify-center gap-10 md:gap-16 pt-10 border-t border-white/[0.06] w-full">
              {[
                { num: `${PROJECTS.length}+`, label: "Projects Delivered" },
                { num: "2",    label: "Tech Stacks" },
                { num: "4",    label: "Countries" },
                { num: "100%", label: "Client Retention" },
              ].map((s) => (
                <div key={s.label} className="proj-stat text-center">
                  <div className="font-syne font-black text-white text-4xl md:text-5xl tracking-tighter">{s.num}</div>
                  <div className="text-[10px] uppercase tracking-widest text-gray-600 mt-2 font-bold">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FILTER BAR ──────────────────────────── */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
          <div className="flex gap-3 flex-wrap items-center">
            <span className="text-[10px] uppercase tracking-widest text-gray-600 font-bold mr-2">Filter ↓</span>
            {["All", "Next.js", "Shopify"].map((f) => {
              const isActive = active === f;
              const count = f === "All" ? PROJECTS.length : PROJECTS.filter(p => p.tech === f).length;
              return (
                <button
                  key={f}
                  onClick={() => setActive(f)}
                  className="px-5 py-2 rounded-full text-[11px] uppercase tracking-widest font-black transition-all duration-300"
                  style={{
                    background: isActive ? "#c8f135" : "transparent",
                    color:      isActive ? "#000"    : "rgba(255,255,255,0.3)",
                    border:     isActive ? "1px solid transparent" : "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  {f} <span className="opacity-50 ml-1">{count}</span>
                </button>
              );
            })}
          </div>
        </section>

        {/* ── PROJECTS LIST ────────────────────────── */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-32">

          {/* Table header */}
          <div className="hidden md:grid grid-cols-12 gap-4 pb-4 border-b border-white/[0.06] mb-4">
            {["#", "Project", "Tech", "Type", ""].map((h, i) => (
              <div key={i}
                className={`text-[10px] uppercase tracking-widest text-gray-600 font-bold ${i === 0 ? "col-span-1" : i === 1 ? "col-span-4" : i === 2 ? "col-span-2" : i === 3 ? "col-span-3" : "col-span-2 text-right"}`}>
                {h}
              </div>
            ))}
          </div>

          {/* Project rows */}
          <div className="flex flex-col">
            {filtered.map((project, i) => {
              const tc = TECH_CONFIG[project.tech];
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  onClick={() => setSelected(project)}
                  className="group relative cursor-pointer transition-all duration-300"
                >
                  {/* ── MOBILE layout ── */}
                  <div className="md:hidden flex items-center gap-4 py-5 border-b border-white/[0.06] hover:border-white/20 transition-colors">
                    <div className="w-14 h-9 rounded-lg overflow-hidden shrink-0 border border-white/[0.07]">
                      <img
                        src={getThumb(project)}
                        alt={project.title}
                        className="w-full h-full object-cover object-top"
                        onError={(e) => { e.target.parentElement.style.background = "#111"; e.target.style.display = "none"; }}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-syne font-bold text-white text-base tracking-tight truncate">{project.title}</div>
                      <span className="text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded-full font-bold mt-1 inline-block"
                        style={{ background: tc.bg, color: tc.color }}>
                        {project.tech}
                      </span>
                    </div>
                    <ArrowUpRight size={16} className="text-white/30 group-hover:text-white shrink-0 transition-colors" />
                  </div>

                  {/* ── DESKTOP layout ── */}
                  <div className="hidden md:grid grid-cols-12 gap-4 py-8 border-b border-white/[0.05] group-hover:border-white/20 items-center">
                    {/* Hover bg */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                      style={{ background: "rgba(255,255,255,0.02)" }} />
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[300px] h-[150px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{ background: "radial-gradient(ellipse, rgba(200,241,53,0.06) 0%, transparent 70%)" }} />

                    {/* Index */}
                    <div className="col-span-1 text-[13px] font-mono text-white/20 group-hover:text-white/40 transition-colors">
                      {project.index}
                    </div>
                    {/* Title + thumbnail */}
                    <div className="col-span-4 flex items-center gap-5 relative z-10">
                      <div className="w-20 h-12 rounded-lg overflow-hidden shrink-0 border border-white/[0.07] group-hover:border-white/20 transition-colors">
                        <img
                          src={getThumb(project)}
                          alt={project.title}
                          className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                          onError={(e) => { e.target.parentElement.style.background = "#111"; e.target.style.display = "none"; }}
                        />
                      </div>
                      <div>
                        <div className="font-syne font-bold text-white text-xl tracking-tight group-hover:translate-x-1 transition-transform duration-300">
                          {project.title}
                        </div>
                        <div className="text-[11px] text-gray-600 font-mono mt-0.5">{project.display}</div>
                      </div>
                    </div>
                    {/* Tech */}
                    <div className="col-span-2 relative z-10">
                      <span className="text-[10px] font-mono uppercase tracking-widest px-3 py-1.5 rounded-full font-bold"
                        style={{ background: tc.bg, color: tc.color }}>
                        <span className="inline-block w-1.5 h-1.5 rounded-full mr-1.5 align-middle" style={{ background: tc.color }} />
                        {project.tech}
                      </span>
                    </div>
                    {/* Tagline */}
                    <div className="col-span-3 text-gray-500 text-[13px] leading-relaxed group-hover:text-gray-400 transition-colors relative z-10">
                      {project.tagline}
                    </div>
                    {/* Arrow */}
                    <div className="col-span-2 flex justify-end relative z-10">
                      <div className="w-10 h-10 rounded-full border border-white/10 group-hover:border-white/40 group-hover:bg-white/5 flex items-center justify-center transition-all duration-300">
                        <ArrowUpRight size={15} className="text-white/30 group-hover:text-white transition-colors" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* ── FOOTER CTA ───────────────────────────── */}
        <section className="relative py-40 md:py-56 bg-transparent flex flex-col items-center justify-center overflow-hidden border-t border-white/[0.05]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] pointer-events-none"
            style={{ background: "radial-gradient(ellipse, rgba(200,241,53,0.07) 0%, transparent 70%)" }} />

          <h2 className="font-syne text-5xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tighter mb-12 text-center z-10 px-4">
            Ready To<br />
            <span className="italic">Build Yours?</span>
          </h2>

          <a
            href="/contact"
            className="relative z-10 bg-white text-black px-12 py-5 rounded-full text-[13px] font-black uppercase tracking-widest hover:scale-105 hover:bg-lime transition-all duration-300 inline-flex items-center gap-3 group"
          >
            Start A Project <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </section>

      </div>

      {/* ── Project Detail Modal ─── */}
      <AnimatePresence>
        {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </>
  );
}
