"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const lines = [
 "> Initializing AI neural net...",
 "> Loading business context... [OK]",
 "> Connecting to data streams... [OK]",
 "> Analyzing past 30 days metrics...",
 "> Identifying 14 optimization nodes...",
 "> Deploying workflow agent...",
 "> Status: ACTIVE",
];

export default function AITerminal() {
 const [displayedLines, setDisplayedLines] = useState([]);
 
 useEffect(() => {
 let timeout;
 const addLine = () => {
 setDisplayedLines(prev => {
 if (prev.length < lines.length) {
 const updated = [...prev, lines[prev.length]];
 if (updated.length < lines.length) {
 timeout = setTimeout(addLine, Math.random() * 800 + 400);
 }
 return updated;
 }
 return prev;
 });
 };
 timeout = setTimeout(addLine, 1000);
 return () => clearTimeout(timeout);
 }, []);

 return (
 <div className="bg-[#050505] border border-white/10 rounded-lg p-6 font-mono text-sm text-white/80 shadow-[0_0_30px_rgba(200,241,53,0.05)] w-full max-w-lg min-h-[300px] relative overflow-hidden backdrop-blur-md">
 <div className="flex items-center gap-2 mb-6 pb-4">
 <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
 <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
 <div className="w-3 h-3 rounded-full bg-lime/50"></div>
 <div className="text-xs text-gray-500 ml-2">sys/agent_ops.sh</div>
 </div>
 <div className="space-y-3">
 {displayedLines.map((line, idx) => (
 <motion.div 
 key={idx} 
 initial={{ opacity: 0, x: -10 }}
 animate={{ opacity: 1, x: 0 }}
 className={line?.includes("ACTIVE") ? "text-white font-bold" : ""}
 >
 {line}
 </motion.div>
 ))}
 {displayedLines.length < lines.length && (
 <motion.div 
 animate={{ opacity: [1, 0, 1] }} 
 transition={{ repeat: Infinity, duration: 0.8 }}
 className="w-2 h-4 bg-lime inline-block mt-1 align-middle"
 />
 )}
 </div>

 <div className="absolute top-0 right-0 w-48 h-48 bg-lime/5 blur-[60px] rounded-full pointer-events-none"></div>
 </div>
 );
}
