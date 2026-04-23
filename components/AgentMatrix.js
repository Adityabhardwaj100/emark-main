"use client";
import { useEffect, useRef } from "react";

export default function AgentMatrix() {
 const canvasRef = useRef(null);
 const mousePos = useRef({ x: -1000, y: -1000 });
 const nodes = useRef([]);

 useEffect(() => {
 const canvas = canvasRef.current;
 if (!canvas) return;
 const ctx = canvas.getContext("2d", { alpha: true });
 
 let animationFrameId;
 const spacing = 160; 
 const spiderLegs = 6;
 const connectionRadius = 250; // Larger radius for the "legs" to grab nodes

 const initNodes = () => {
 canvas.width = window.innerWidth;
 canvas.height = window.innerHeight;
 
 const cols = Math.ceil(canvas.width / spacing) + 1;
 const rows = Math.ceil(canvas.height / spacing) + 1;
 const tempNodes = [];
 
 for (let r = 0; r < rows; r++) {
 for (let c = 0; c < cols; c++) {
 tempNodes.push({
 x: c * spacing,
 y: r * spacing,
 baseX: c * spacing,
 baseY: r * spacing,
 vx: (Math.random() - 0.5) * 0.2,
 vy: (Math.random() - 0.5) * 0.2
 });
 }
 }
 nodes.current = tempNodes;
 };

 const draw = () => {
 ctx.clearRect(0, 0, canvas.width, canvas.height);
 
 const nearbyNodes = [];

 nodes.current.forEach(node => {
 // Floating movement
 node.x += node.vx;
 node.y += node.vy;
 
 if (Math.abs(node.x - node.baseX) > 5) node.vx *= -1;
 if (Math.abs(node.y - node.baseY) > 5) node.vy *= -1;

 const dx = node.x - mousePos.current.x;
 const dy = node.y - mousePos.current.y;
 const distSq = dx * dx + dy * dy;

 // Draw idle node
 ctx.beginPath();
 ctx.arc(node.x, node.y, 1, 0, Math.PI * 2);
 ctx.fillStyle = "rgba(255, 255, 255, 0.08)";
 ctx.fill();

 // Collect nearby nodes for spider "legs"
 if (distSq < connectionRadius * connectionRadius) {
 nearbyNodes.push({ node, distSq });
 }
 });

 // Sort by distance and take the top 6 for the "Real Spider" effect
 nearbyNodes.sort((a, b) => a.distSq - b.distSq);
 const activeLegs = nearbyNodes.slice(0, spiderLegs);

 activeLegs.forEach(({ node, distSq }) => {
 const dist = Math.sqrt(distSq);
 const opacity = (1 - dist / connectionRadius) * 0.5;

 // Draw spider leg
 ctx.beginPath();
 ctx.moveTo(node.x, node.y);
 ctx.lineTo(mousePos.current.x, mousePos.current.y);
 ctx.strokeStyle = `rgba(200, 241, 53, ${opacity})`;
 ctx.lineWidth = 1;
 ctx.stroke();

 // High-intensity focal node
 ctx.beginPath();
 ctx.arc(node.x, node.y, 2, 0, Math.PI * 2);
 ctx.fillStyle = `rgba(200, 241, 53, ${opacity})`;
 ctx.fill();
 
 // Lens flare effect on active nodes
 ctx.beginPath();
 ctx.arc(node.x, node.y, 4, 0, Math.PI * 2);
 ctx.fillStyle = `rgba(200, 241, 53, ${opacity * 0.2})`;
 ctx.fill();
 });

 animationFrameId = requestAnimationFrame(draw);
 };

 initNodes();
 draw();

 const handleMouseMove = (e) => {
 mousePos.current = { x: e.clientX, y: e.clientY };
 };

 const handleResize = () => {
 initNodes();
 };

 window.addEventListener("mousemove", handleMouseMove, { passive: true });
 window.addEventListener("resize", handleResize);

 return () => {
 cancelAnimationFrame(animationFrameId);
 window.removeEventListener("mousemove", handleMouseMove);
 window.removeEventListener("resize", handleResize);
 };
 }, []);

 return (
 <canvas
 ref={canvasRef}
 className="fixed inset-0 pointer-events-none z-[50] opacity-40 bg-transparent will-change-transform"
 style={{ mixBlendMode: 'screen' }}
 />
 );
}
