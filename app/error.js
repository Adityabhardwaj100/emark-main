"use client";
import { useEffect } from "react";

export default function Error({ error, reset }) {
 useEffect(() => {
 console.error(error);
 }, [error]);

 return (
 <div className="min-h-screen bg-dark flex flex-col items-center justify-center p-4 text-center">
 <div className="w-20 h-20 bg-lime/10 rounded-full flex items-center justify-center mb-10 border border-lime/20">
 <div className="w-2 h-2 bg-lime rounded-full animate-ping" />
 </div>
 <h2 className="text-4xl font-bold font-syne text-white mb-6 uppercase tracking-tighter">Protocol Interruption</h2>
 <p className="text-gray-500 max-w-sm mb-12">The neural link encountered an unexpected exception during block sync.</p>
 <button
 onClick={() => reset()}
 className="px-10 py-4 bg-white text-black font-bold font-syne text-xs uppercase tracking-widest rounded-full hover:bg-lime transition-colors"
 >
 Attempt Re-Sync
 </button>
 </div>
 );
}
