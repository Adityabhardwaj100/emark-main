"use client";
import { motion } from "framer-motion";

export default function AICore() {
 return (
 <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] flex items-center justify-center">
 {/* Central Pulsing Orb */}
 <motion.div
 animate={{
 scale: [1, 1.1, 1],
 opacity: [0.5, 0.8, 0.5],
 }}
 transition={{
 duration: 4,
 repeat: Infinity,
 ease: "easeInOut",
 }}
 className="absolute w-32 h-32 md:w-48 md:h-48 bg-lime rounded-full blur-[60px] opacity-50"
 />
 
 <motion.div
 animate={{
 scale: [1, 1.05, 1],
 }}
 transition={{
 duration: 2,
 repeat: Infinity,
 ease: "easeInOut",
 }}
 className="relative z-10 w-16 h-16 md:w-24 md:h-24 bg-white rounded-full shadow-[0_0_40px_rgba(200,241,53,0.8)] flex items-center justify-center"
 >
 <div className="w-1/2 h-1/2 bg-black rounded-full animate-pulse" />
 </motion.div>

 {/* Rotating Technical Rings */}
 {[
 { size: "w-full h-full", duration: 20, border: "border-white/10", dash: "" },
 { size: "w-[85%] h-[85%]", duration: 15, border: "border-lime/20", dash: "border-dashed" },
 { size: "w-[70%] h-[70%]", duration: 25, border: "border-white/5", dash: "" },
 ].map((ring, i) => (
 <motion.div
 key={i}
 animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
 transition={{ duration: ring.duration, repeat: Infinity, ease: "linear" }}
 className={`absolute ${ring.size} border ${ring.border} ${ring.dash} rounded-full`}
 />
 ))}

 {/* Floating Data Nodes */}
 {[...Array(6)].map((_, i) => (
 <motion.div
 key={i}
 animate={{
 x: [Math.sin(i) * 50, Math.sin(i + 1) * 80, Math.sin(i) * 50],
 y: [Math.cos(i) * 50, Math.cos(i + 1) * 80, Math.cos(i) * 50],
 opacity: [0.3, 0.7, 0.3],
 }}
 transition={{
 duration: 5 + i,
 repeat: Infinity,
 ease: "easeInOut",
 }}
 className="absolute w-2 h-2 bg-lime rounded-full shadow-[0_0_10px_#c8f135]"
 style={{
 left: `${50 + Math.cos(i * 60 * (Math.PI / 180)) * 40}%`,
 top: `${50 + Math.sin(i * 60 * (Math.PI / 180)) * 40}%`,
 }}
 />
 ))}

 {/* SVG Circuit Lines */}
 <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" viewBox="0 0 100 100">
 <motion.circle
 cx="50"
 cy="50"
 r="45"
 fill="none"
 stroke="#c8f135"
 strokeWidth="0.1"
 strokeDasharray="1 3"
 animate={{ strokeDashoffset: [0, 10] }}
 transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
 />
 </svg>
 </div>
 );
}
