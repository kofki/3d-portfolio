"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

// Lazy-load the model to improve performance
const Model = dynamic(() => import("./model"), { ssr: false });

const Scene: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2 }}
      className="w-full h-[600px] md:h-[700px] flex items-center justify-center"
    >
      <Canvas 
        camera={{ 
          position: [7, 2, 8], // [x, y, z] - Camera position in 3D space
          // x: 7 = 7 units to the right
          // y: 2 = 2 units up
          // z: 8 = 8 units away from center
          fov: 40 // Field of view (50 degrees) - lower = more zoomed in, higher = wider view
          // Try: 35-45 for tight zoom, 50-60 for normal, 70+ for wide angle
        }}
      >
        {/* LIGHTING - Makes your 3D model visible */}
        
        {/* Ambient light: Overall scene brightness, no shadows */}
        <ambientLight 
          intensity={1} // 0.5 = medium brightness (range: 0-1+)
          // Try: 0.3 for dim, 0.5 for normal, 0.8 for bright
        />
        
        {/* Directional light: Like sunlight, creates shadows and depth */}
        <directionalLight 
          position={[5, 5, 5]} // [x, y, z] - Where light comes from
          // [5, 5, 5] = from upper-right-front
          // Try: [10, 10, 10] for more dramatic shadows
          intensity={1} // 2 = bright (range: 0-10+)
          // Try: 1 for s ubtle, 2-3 for normal, 5+ for harsh
        />

        {/* Load your 3D model here */}
        <Suspense fallback={null}>
          <Model />
        </Suspense>

        {/* OrbitControls: Lets users drag to rotate the model */}
        <OrbitControls 
          enableZoom={true} // false = disable scroll zoom
          // Set to true if you want zoom enabled
          // Additional options you can add:
          // enablePan={false} - disable right-click drag
          // autoRotate={true} - auto-spin the model
          // autoRotateSpeed={2} - rotation speed (default: 2)
        />
      </Canvas>
    </motion.div>
  );
};

export default Scene;