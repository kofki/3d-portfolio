"use client";

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from 'three';

const Model: React.FC = () => {
  // This loads your model from the public/models folder.
  const { scene } = useGLTF("/models/baby_duck.glb");
  
  const modelRef = useRef<THREE.Object3D | null>(null);
  // Animate the model each frame
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.04 ; // continuous rotation
    }
  });

  // Adjust scale, position, and rotation if your model looks too big or too small or not at the right angle.
  // For position: 
  // Adjust x for left/right: negative = left, positive = right
  // Adjust y for up/down: negative = down, positive = up
  return <primitive ref={modelRef} object={scene} scale={2.2} position={[-1, -0.5, -2]} rotation={[0, Math.PI / 2, 0]} />;
};

export default Model;
