"use client";
import { motion } from "framer-motion";

export default function RoboticCore({ className = "" }) {
 return (
 <div className={`relative w-[300px] h-[300px] md:w-[600px] md:h-[600px] flex items-center justify-center ${className}`}>
 {/* Background Glow */}
 <motion.div
 animate={{
 scale: [1, 1.2, 1],
 opacity: [0.3, 0.6, 0.3],
 }}
 transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
 className="absolute inset-0 bg-lime/10 blur-[100px] rounded-full"
 />

 {/* Outer Technical Rings */}
 {[
 { r: 48, d: 30, color: "stroke-white/10" },
 { r: 42, d: 20, color: "stroke-lime/30", dash: "8 4" },
 { r: 35, d: 25, color: "stroke-white/5" },
 ].map((ring, i) => (
 <svg key={i} className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
 <motion.circle
 cx="50"
 cy="50"
 r={ring.r}
 fill="none"
 className={ring.color}
 strokeWidth="0.5"
 strokeDasharray={ring.dash || ""}
 animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
 transition={{ duration: ring.d, repeat: Infinity, ease: "linear" }}
 />
 </svg>
 ))}

 {/* The Core Eye / Iris */}
 <div className="relative w-40 h-40 md:w-64 md:h-64 rounded-full border border-white/10 flex items-center justify-center bg-black overflow-hidden group shadow-[0_0_50px_rgba(200,241,53,0.1)]">
 
 {/* Shutter Layers (SVG) */}
 <div className="absolute inset-0 flex items-center justify-center">
 {[...Array(8)].map((_, i) => (
 <motion.div
 key={i}
 initial={{ rotate: i * 45 }}
 animate={{ rotate: [i * 45, i * 45 + 90, i * 45] }}
 transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
 className="absolute w-full h-1 border-white/20 origin-center"
 style={{ transform: `rotate(${i * 45}deg)` }}
 />
 ))}
 </div>

 {/* Pulsing Iris Glow */}
 <motion.div
 animate={{
 scale: [1, 1.1, 1],
 boxShadow: [
 "0 0 20px rgba(200,241,53,0.4)",
 "0 0 40px rgba(200,241,53,0.8)",
 "0 0 20px rgba(200,241,53,0.4)",
 ],
 }}
 transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
 className="relative z-10 w-20 h-20 md:w-32 md:h-32 bg-lime rounded-full overflow-hidden flex items-center justify-center"
 >
 {/* Inner pupil details */}
 <div className="w-1/2 h-1/2 bg-black rounded-full flex items-center justify-center">
 <motion.div 
 animate={{ opacity: [0.5, 1, 0.5] }}
 transition={{ duration: 0.5, repeat: Infinity }}
 className="w-2 h-2 bg-lime rounded-full"
 />
 </div>
 
 {/* Scanning Line overlay inside eye */}
 <motion.div
 animate={{ top: ["-100%", "100%"] }}
 transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
 className="absolute left-0 right-0 h-4 bg-white/20 blur-md pointer-events-none"
 />
 </motion.div>

 {/* Floating tech bits inside container */}
 <div className="absolute inset-0 opacity-30">
 {[...Array(12)].map((_, i) => (
 <motion.div
 key={i}
 animate={{
 y: [Math.random() * 200, Math.random() * 200],
 opacity: [0, 1, 0]
 }}
 transition={{ duration: 2 + Math.random() * 3, repeat: Infinity }}
 className="w-1 h-4 bg-lime absolute"
 style={{ left: `${Math.random() * 100}%`, top: `0` }}
 />
 ))}
 </div>
 </div>

 {/* Outer Floating UI nodes */}
 {[...Array(4)].map((_, i) => (
 <motion.div
 key={i}
 animate={{
 x: [0, (i % 2 === 0 ? 30 : -30), 0],
 y: [0, (i < 2 ? 30 : -30), 0],
 }}
 transition={{ duration: 5 + i, repeat: Infinity, ease: "easeInOut" }}
 className="absolute text-[8px] font-mono text-white/50 flex flex-col gap-1 pointer-events-none whitespace-nowrap"
 style={{
 top: i < 2 ? "15%" : "85%",
 left: i % 2 === 0 ? "15%" : "85%",
 }}
 >
 <span>NODE_{i + 104}: ACTIVE</span>
 <div className="w-12 h-1 bg-white/10">
 <motion.div
 animate={{ width: ["0%", "100%", "0%"] }}
 transition={{ duration: 3 + i, repeat: Infinity }}
 className="h-full bg-lime"
 />
 </div>
 </motion.div>
 ))}
 </div>
 );
}
