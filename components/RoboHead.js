"use client";
import { useRef, useState, useCallback, useEffect } from "react";

export default function RoboHead() {
 const containerRef = useRef(null);
 const rafRef = useRef(null);
 const [mouse, setMouse] = useState({ x: 0, y: 0 });

 const handleMouseMove = useCallback((e) => {
 if (rafRef.current) cancelAnimationFrame(rafRef.current);
 rafRef.current = requestAnimationFrame(() => {
 const rect = containerRef.current?.getBoundingClientRect();
 if (!rect) return;
 const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
 const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
 setMouse({ x: Math.max(-1, Math.min(1, x)), y: Math.max(-1, Math.min(1, y)) });
 });
 }, []);

 const handleMouseLeave = useCallback(() => {
 setMouse({ x: 0, y: 0 });
 }, []);

 useEffect(() => {
 return () => {
 if (rafRef.current) cancelAnimationFrame(rafRef.current);
 };
 }, []);

 const headRotateY = mouse.x * 12;
 const headRotateX = mouse.y * -8;
 const headShiftX = mouse.x * 6;
 const headShiftY = mouse.y * 4;
 const pupilX = mouse.x * 8;
 const pupilY = mouse.y * 6;

 return (
 <div
 ref={containerRef}
 onMouseMove={handleMouseMove}
 onMouseLeave={handleMouseLeave}
 className="absolute inset-0 z-[1] flex items-center justify-center pointer-events-auto"
 style={{ perspective: "900px" }}
 >
 {/* Entire robot wrapper — tilts with cursor */}
 <div
 className="relative will-change-transform"
 style={{
 width: "clamp(300px, 32vw, 500px)",
 transform: `translate(${headShiftX}px, ${headShiftY}px) rotateY(${headRotateY}deg) rotateX(${headRotateX}deg)`,
 transition: "transform 0.18s cubic-bezier(0.22, 0.68, 0.36, 1)",
 transformStyle: "preserve-3d",
 }}
 >
 {/* ═══════════ HEAD ═══════════ */}
 <div className="relative mx-auto" style={{ width: "100%", aspectRatio: "1 / 0.92" }}>

 {/* Outer head silhouette — very dark with barely-visible edge */}
 <div
 className="absolute"
 style={{
 inset: "4%",
 borderRadius: "30% 30% 26% 26%",
 background: "#050507",
 border: "1.2px solid rgba(255,255,255,0.045)",
 boxShadow: `
 0 0 100px 30px rgba(0,0,0,0.9),
 inset 0 0 60px 10px rgba(0,0,0,0.6)
 `,
 }}
 >
 {/* ── Chromatic top highlight (THE key feature) ── */}
 <div
 style={{
 position: "absolute",
 top: "-1px",
 left: "18%",
 right: "18%",
 height: "2.5px",
 background: "linear-gradient(90deg, transparent 0%, rgba(255,80,40,0.6) 10%, rgba(255,200,50,0.7) 25%, rgba(80,255,120,0.5) 40%, rgba(60,180,255,0.7) 60%, rgba(160,80,255,0.6) 80%, transparent 100%)",
 filter: "blur(0.8px)",
 borderRadius: "2px",
 }}
 />
 {/* Wider diffused chromatic glow behind top edge */}
 <div
 style={{
 position: "absolute",
 top: "-4px",
 left: "15%",
 right: "15%",
 height: "12px",
 background: "linear-gradient(90deg, transparent 0%, rgba(255,120,50,0.15) 15%, rgba(255,220,80,0.12) 30%, rgba(80,255,120,0.1) 45%, rgba(60,160,255,0.15) 65%, rgba(180,80,255,0.12) 85%, transparent 100%)",
 filter: "blur(6px)",
 borderRadius: "4px",
 }}
 />

 {/* Left edge subtle chromatic */}
 <div
 style={{
 position: "absolute",
 top: "8%",
 left: "-1px",
 bottom: "65%",
 width: "1.8px",
 background: "linear-gradient(180deg, rgba(180,60,255,0.35), rgba(60,140,255,0.2), transparent)",
 filter: "blur(0.6px)",
 borderRadius: "1px",
 }}
 />
 {/* Right edge subtle chromatic */}
 <div
 style={{
 position: "absolute",
 top: "8%",
 right: "-1px",
 bottom: "65%",
 width: "1.8px",
 background: "linear-gradient(180deg, rgba(60,160,255,0.3), rgba(80,255,200,0.15), transparent)",
 filter: "blur(0.6px)",
 borderRadius: "1px",
 }}
 />
 {/* Bottom edge very subtle highlight */}
 <div
 style={{
 position: "absolute",
 bottom: "-1px",
 left: "20%",
 right: "20%",
 height: "1.2px",
 background: "linear-gradient(90deg, transparent, rgba(200,220,255,0.08), rgba(200,220,255,0.12), rgba(200,220,255,0.08), transparent)",
 borderRadius: "1px",
 }}
 />

 {/* ── Inner face panel ── */}
 <div
 style={{
 position: "absolute",
 inset: "10%",
 borderRadius: "22% 22% 20% 20%",
 background: "linear-gradient(170deg, #070709 0%, #030305 100%)",
 border: "1px solid rgba(255,255,255,0.03)",
 overflow: "hidden",
 }}
 >
 {/* Grid lines — very subtle */}
 <div
 style={{
 position: "absolute",
 inset: 0,
 opacity: 0.04,
 backgroundImage: `
 linear-gradient(rgba(200,220,255,0.8) 1px, transparent 1px),
 linear-gradient(90deg, rgba(200,220,255,0.8) 1px, transparent 1px)
 `,
 backgroundSize: "clamp(14px, 1.6vw, 22px) clamp(14px, 1.6vw, 22px)",
 }}
 />

 {/* ── EYES ── */}
 <div
 style={{
 position: "absolute",
 top: "46%",
 left: "50%",
 transform: "translate(-50%, -50%)",
 display: "flex",
 gap: "clamp(20px, 2.5vw, 40px)",
 }}
 >
 {[0, 1].map((i) => (
 <div key={i} className="relative" style={{ width: "clamp(16px, 1.8vw, 28px)", height: "clamp(16px, 1.8vw, 28px)" }}>
 {/* Wide ambient glow */}
 <div
 style={{
 position: "absolute",
 inset: 0,
 borderRadius: "50%",
 transform: "scale(4)",
 background: "radial-gradient(circle, rgba(255,255,255,0.06) 0%, rgba(200,220,255,0.03) 30%, transparent 70%)",
 }}
 />
 {/* Medium glow ring */}
 <div
 style={{
 position: "absolute",
 inset: 0,
 borderRadius: "50%",
 transform: "scale(2.2)",
 background: "radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(200,220,255,0.04) 40%, transparent 70%)",
 }}
 />
 {/* Pupil — tracks cursor */}
 <div
 className="will-change-transform"
 style={{
 position: "absolute",
 width: "70%",
 height: "70%",
 top: "50%",
 left: "50%",
 borderRadius: "50%",
 transform: `translate(calc(-50% + ${pupilX}px), calc(-50% + ${pupilY}px))`,
 transition: "transform 0.1s ease-out",
 background: "radial-gradient(circle at 45% 42%, #ffffff 0%, #f0f4ff 35%, #c8d8ff 65%, rgba(140,170,255,0.3) 100%)",
 boxShadow: `
 0 0 6px 2px rgba(255,255,255,0.9),
 0 0 16px 5px rgba(220,235,255,0.5),
 0 0 35px 10px rgba(180,210,255,0.2),
 0 0 60px 18px rgba(160,190,255,0.08)
 `,
 }}
 />
 </div>
 ))}
 </div>
 </div>
 </div>

 {/* ── LEFT EAR ── */}
 <div
 style={{
 position: "absolute",
 top: "38%",
 left: "1%",
 width: "7%",
 height: "15%",
 background: "linear-gradient(90deg, #0e0e14 0%, #080810 100%)",
 borderRadius: "3px 1px 1px 3px",
 border: "1px solid rgba(100,140,255,0.06)",
 boxShadow: "0 0 8px 2px rgba(60,100,200,0.04)",
 }}
 >
 {/* Ear detail notch */}
 <div style={{
 position: "absolute", top: "25%", right: 0, width: "40%", height: "50%",
 background: "#060608", borderRadius: "2px 0 0 2px",
 }} />
 </div>

 {/* ── RIGHT EAR ── */}
 <div
 style={{
 position: "absolute",
 top: "38%",
 right: "1%",
 width: "7%",
 height: "15%",
 background: "linear-gradient(270deg, #0e0e14 0%, #080810 100%)",
 borderRadius: "1px 3px 3px 1px",
 border: "1px solid rgba(100,140,255,0.06)",
 boxShadow: "0 0 8px 2px rgba(60,100,200,0.04)",
 }}
 >
 <div style={{
 position: "absolute", top: "25%", left: 0, width: "40%", height: "50%",
 background: "#060608", borderRadius: "0 2px 2px 0",
 }} />
 </div>
 </div>

 {/* ═══════════ NECK ═══════════ */}
 <div
 className="relative mx-auto"
 style={{
 width: "18%",
 height: "clamp(14px, 1.8vw, 28px)",
 marginTop: "-3%",
 background: "linear-gradient(180deg, #08080c 0%, #050508 100%)",
 }}
 >
 {/* Neck chromatic accents */}
 <div style={{
 position: "absolute", top: 0, left: "-1px", width: "1.5px", height: "100%",
 background: "linear-gradient(180deg, rgba(60,120,255,0.2), transparent)",
 filter: "blur(0.4px)",
 }} />
 <div style={{
 position: "absolute", top: 0, right: "-1px", width: "1.5px", height: "100%",
 background: "linear-gradient(180deg, rgba(60,120,255,0.2), transparent)",
 filter: "blur(0.4px)",
 }} />
 </div>

 {/* ═══════════ SHOULDERS ═══════════ */}
 <div
 className="relative mx-auto"
 style={{
 width: "80%",
 height: "clamp(35px, 4.5vw, 70px)",
 marginTop: "-1px",
 background: "linear-gradient(180deg, #060609 0%, #030305 30%, transparent 100%)",
 clipPath: "polygon(18% 0%, 82% 0%, 100% 100%, 0% 100%)",
 }}
 >
 {/* Left shoulder joint — chromatic prismatic highlight */}
 <div style={{
 position: "absolute", top: "5%", left: "16%", width: "2px", height: "85%",
 background: "linear-gradient(180deg, rgba(255,120,40,0.25), rgba(60,160,255,0.35), rgba(60,200,255,0.2), transparent)",
 filter: "blur(0.5px)",
 transform: "rotate(-14deg)", transformOrigin: "top center",
 }} />
 {/* Left shoulder diffused glow */}
 <div style={{
 position: "absolute", top: "0%", left: "13%", width: "8px", height: "70%",
 background: "linear-gradient(180deg, rgba(60,140,255,0.08), transparent)",
 filter: "blur(4px)",
 transform: "rotate(-14deg)", transformOrigin: "top center",
 }} />

 {/* Right shoulder joint — chromatic prismatic highlight */}
 <div style={{
 position: "absolute", top: "5%", right: "16%", width: "2px", height: "85%",
 background: "linear-gradient(180deg, rgba(100,255,180,0.2), rgba(60,160,255,0.35), rgba(60,120,255,0.2), transparent)",
 filter: "blur(0.5px)",
 transform: "rotate(14deg)", transformOrigin: "top center",
 }} />
 {/* Right shoulder diffused glow */}
 <div style={{
 position: "absolute", top: "0%", right: "13%", width: "8px", height: "70%",
 background: "linear-gradient(180deg, rgba(60,140,255,0.08), transparent)",
 filter: "blur(4px)",
 transform: "rotate(14deg)", transformOrigin: "top center",
 }} />
 </div>

 {/* ═══════════ UPPER BODY (barely visible silhouette) ═══════════ */}
 <div
 className="relative mx-auto"
 style={{
 width: "80%",
 height: "clamp(45px, 5.5vw, 90px)",
 marginTop: "-2px",
 background: "linear-gradient(180deg, #030305 0%, #020203 30%, transparent 100%)",
 opacity: 0.5,
 }}
 />
 </div>
 </div>
 );
}
