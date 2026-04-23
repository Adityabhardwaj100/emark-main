import { forwardRef, useEffect, useRef, useState } from "react";
import Image from "next/image";

const cardData = [
 {
 label: "STRATEGY",
 emoji: "🧠",
 items: [
 "AI Growth Strategy",
 "Brand Positioning",
 "Creative Direction",
 "Market Discovery",
 "Competitive Research",
 ],
 },
 {
 label: "CREATIVE",
 emoji: "✦",
 items: [
 "Art Direction",
 "UX / UI Design",
 "Motion & Animation",
 "Interactive Design",
 "Visual Identity",
 ],
 },
 {
 label: "TECH",
 emoji: "⚙️",
 items: [
 "Next.js & React Apps",
 "AI Automation & Agents",
 "WebGL / Three.js",
 "API Integrations",
 "Full-Stack Engineering",
 ],
 },
 {
 label: "GROWTH",
 emoji: "📈",
 items: [
 "SEO & Content Systems",
 "Paid Ads & Funnels",
 "Email Automation",
 "Analytics & Tracking",
 "Conversion Optimisation",
 ],
 },
];

const ServiceCard = forwardRef(({ index }, ref) => {
 const data = cardData[index];
 const videoRef = useRef(null);
 const [topPos, setTopPos] = useState("58%");

 useEffect(() => {
  // Different vertical center for mobile vs desktop
  const updateTop = () => {
   const isMobile = window.matchMedia('(max-width: 768px)').matches;
   setTopPos(isMobile ? "73%" : "65%");
  };
  updateTop();
  window.addEventListener('resize', updateTop);
  return () => window.removeEventListener('resize', updateTop);
 }, []);

 useEffect(() => {
  if (videoRef.current) {
   videoRef.current.play().catch(error => {
    console.error("Video play failed:", error);
   });
  }
 }, []);

 return (
 <div
 className="service-card"
 id={`service-card-${index + 1}`}
 ref={ref}
 style={{
  position: "absolute",
  top: topPos,
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "clamp(240px, 75vw, 290px)",
  height: "clamp(360px, 55vh, 430px)",
  perspective: "1200px",
  zIndex: index + 1,
  willChange: "transform",
 }}
 >
 {/* Floating wrapper — animation applied via global CSS below */}
 <div
 className="card-float-wrapper"
 style={{
 position: "absolute",
 top: "50%",
 left: "50%",
 transform: "translate(-50%, -50%)",
 width: "100%",
 height: "100%",
 }}
 >
 {/* 3D flip inner */}
 <div
 className="flip-card-inner"
 style={{
 position: "relative",
 width: "100%",
 height: "100%",
 transformStyle: "preserve-3d",
 }}
 >
 {/* ── FRONT: brutalist assimilation card image ── */}
 <div
 className="flip-card-front"
 style={{
 position: "absolute",
 width: "100%",
 height: "100%",
 backfaceVisibility: "hidden",
 WebkitBackfaceVisibility: "hidden",
 transform: "translateZ(0)",
 borderRadius: "1.4rem",
 overflow: "hidden",
 boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
 }}
 >
 <video
 ref={videoRef}
 src="/card-video.mp4"
 autoPlay
 muted
 loop
 playsInline
 style={{ 
 width: "100%", 
 height: "100%", 
 objectFit: "cover", 
 objectPosition: "center" 
 }}
 />
 </div>

 {/* ── BACK: white card with and with image as well service content ── */}
 <div
 className="flip-card-back"
 style={{
 position: "absolute",
 width: "100%",
 height: "100%",
 backfaceVisibility: "hidden",
 WebkitBackfaceVisibility: "hidden",
 borderRadius: "1.4rem",
 overflow: "hidden",
 transform: "rotateY(180deg) translateZ(0)",
 willChange: "transform",
 background: "#ffffff",
 border: "1px solid rgba(0,0,0,0.06)",
 boxShadow: "0 24px 70px rgba(0,0,0,0.5)",
 display: "flex",
 flexDirection: "column",
 }}
 >
 {/* subtle grid texture */}
 <div
 style={{
 position: "absolute",
 inset: 0,
 backgroundImage:
 "linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)",
 backgroundSize: "22px 22px",
 borderRadius: "1.4rem",
 pointerEvents: "none",
 }}
 />

 {/* Content — on the back face, CSS 3D handles orientation automatically */}
 <div
 style={{
 position: "absolute",
 inset: 0,
 padding: "28px 22px",
 display: "flex",
 flexDirection: "column",
 justifyContent: "space-between",
 }}
 >
 {/* Top row */}
 <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
 <span
 style={{
 fontFamily: "var(--font-syne), sans-serif",
 fontSize: "18px",
 fontWeight: "800",
 letterSpacing: "0.2em",
 color: "#111",
 textTransform: "uppercase",
 }}
 >
 {data.label}
 </span>
 <span style={{ fontSize: "22px" }}>{data.emoji}</span>
 </div>

 {/* Items list */}
 <ul style={{ listStyle: "none", flex: 1, paddingTop: "16px" }}>
 {data.items.map((item, i) => (
 <li
 key={i}
 style={{
 padding: "10px 0",
 fontSize: "13px",
 fontWeight: "500",
 color: "#333",
 borderBottom:
 i < data.items.length - 1
 ? "1px solid rgba(0,0,0,0.08)"
 : "none",
 }}
 >
 {item}
 </li>
 ))}
 </ul>

 {/* Bottom brand tag */}
 <div
 style={{
 fontSize: "8px",
 letterSpacing: "0.35em",
 color: "rgba(0,0,0,0.2)",
 textTransform: "uppercase",
 fontWeight: "700",
 }}
 >
 EMARK AGENCY
 </div>
 </div>
 </div>
 </div>
 </div>
 </div>
 );
});

ServiceCard.displayName = "ServiceCard";
export default ServiceCard;
