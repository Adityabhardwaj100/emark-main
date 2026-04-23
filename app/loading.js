"use client";
export default function Loading() {
 return (
 <div className="fixed inset-0 bg-dark z-[100] flex items-center justify-center pointer-events-none">
 <div className="flex flex-col items-center gap-8">
 <div className="w-32 h-[1px] bg-white/10 relative overflow-hidden">
 <div className="absolute inset-0 bg-lime w-1/2 animate-[loading_1.5s_infinite_ease-in-out]" />
 </div>
 <div className="text-[10px] font-mono text-white/40 uppercase tracking-[0.5em] animate-pulse">Syncing_Nodes...</div>
 </div>
 <style jsx>{`
 @keyframes loading {
 0% { transform: translateX(-100%); }
 100% { transform: translateX(200%); }
 }
 `}</style>
 </div>
 );
}
