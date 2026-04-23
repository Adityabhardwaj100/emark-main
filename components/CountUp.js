"use client";
import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

export default function CountUp({ end, suffix = "", prefix = "", duration = 2000 }) {
 const [count, setCount] = useState(0);
 const ref = useRef(null);
 const isInView = useInView(ref, { margin: "-50px 0px", once: true });

 useEffect(() => {
 if (!isInView) return;
 let startTimestamp = null;
 const step = (timestamp) => {
 if (!startTimestamp) startTimestamp = timestamp;
 const progress = Math.min((timestamp - startTimestamp) / duration, 1);
 const easeProgress = 1 - Math.pow(1 - progress, 4);
 setCount(Math.floor(easeProgress * end));
 if (progress < 1) {
 window.requestAnimationFrame(step);
 }
 };
 window.requestAnimationFrame(step);
 }, [end, duration, isInView]);

 return <span ref={ref}>{prefix}{count}{suffix}</span>;
}
