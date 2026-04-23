"use client";
import { motion } from "framer-motion";

export default function TextReveal({ text, className = "", delay = 0 }) {
 const words = text.split(" ");

 const container = {
 hidden: { opacity: 0 },
 visible: (i = 1) => ({
 opacity: 1,
 transition: { staggerChildren: 0.1, delayChildren: delay + 0.04 * i },
 }),
 };

 const child = {
 visible: {
 opacity: 1,
 y: 0,
 transition: {
 type: "spring",
 damping: 12,
 stiffness: 100,
 },
 },
 hidden: {
 opacity: 0,
 y: 100,
 transition: {
 type: "spring",
 damping: 12,
 stiffness: 100,
 },
 },
 };

 return (
 <motion.div
 className={`flex flex-wrap overflow-hidden ${className}`}
 variants={container}
 initial="hidden"
 whileInView="visible"
 viewport={{ once: true, margin: "-50px" }}
 >
 {words.map((word, index) => (
 <motion.span
 variants={child}
 className="inline-block"
 style={{ marginRight: index === words.length - 1 ? "0" : "0.25em" }}
 key={index}
 >
 {word}
 </motion.span>
 ))}
 </motion.div>
 );
}
