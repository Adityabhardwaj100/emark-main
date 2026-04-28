"use client";
import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export default function TubesBackground({ 
  children, 
  className = "",
  enableClickInteraction = true 
}) {
  const canvasRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const tubesRef = useRef(null);

  useEffect(() => {
    let mounted = true;

    // We must bind THREE to window for the threejs-components CDN script to access it
    window.THREE = THREE;

    const initTubes = async () => {
      if (!canvasRef.current) return;

      try {
        const tubesModule = await import(/* webpackIgnore: true */ 'https://cdn.jsdelivr.net/npm/threejs-components@0.0.19/build/cursors/tubes1.min.js');
        const TubesCursor = tubesModule.default;

        if (!mounted) return;

        const app = TubesCursor(canvasRef.current, {
          sleepTimeScale: 2.5, // Speeds up the infinity loop
          tubes: {
            length: 120, // Makes the tail left behind longer
            colors: ["#ff1493", "#8a2be2", "#1a001a"], // Deep red/magenta and purple
            lights: {
              intensity: 250,
              colors: ["#ff0055", "#9400d3", "#220022", "#000000"]
            }
          }
        });

        tubesRef.current = app;
        setIsLoaded(true);

      } catch (error) {
        console.error("Failed to load TubesCursor:", error);
      }
    };

    initTubes();

    return () => {
      mounted = false;
      // Library does not explicitly expose a destroy method but this sets it up for GC.
    };
  }, []);

  const handleClick = () => {
    if (!enableClickInteraction || !tubesRef.current) return;
    
    const randomColors = (count) => {
      return new Array(count)
        .fill(0)
        .map(() => "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0'));
    };
    
    tubesRef.current.tubes.setColors(randomColors(3));
    tubesRef.current.tubes.setLightsColors(randomColors(4));
  };

  return (
    <div 
      className={`relative w-full h-full min-h-[400px] overflow-hidden ${className}`}
      onClick={handleClick}
      style={{ touchAction: 'pan-y' }}
    >
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full block"
        style={{ touchAction: 'pan-y' }}
      />
      
      {/* Content Overlay */}
      <div className="relative z-10 w-full h-full pointer-events-none">
        {children}
      </div>
    </div>
  );
}
