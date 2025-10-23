"use client";

import React from "react";
import { motion } from "framer-motion";
import Scene from "./scene";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-black text-white px-8 md:px-16 overflow-hidden"
    >
      {/* ===================== LEFT SIDE: TEXT ===================== */}
      <motion.div
        // Animation: Slides in from left
        initial={{ opacity: 0, x: -80 }}  // x: -40 = starts 40px to the left
        animate={{ opacity: 1, x: 0 }}    // x: 0 = normal position
        transition={{ duration: 1 }}      // duration: 1 = takes 1 second
        className="flex-1 space-y-6 text-center md:text-left"
      >
        {/* Replace your name here */}
        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          hi, I&apos;m <span className="text-[#F58700]">kenzo fukuda</span>
        </h1>

        {/* Replace your role or title here */}
        <h2 className="text-2xl md:text-3xl text-gray-300">
          a <span className="text-[#F58700]">computer science student</span> @ university of florida
        </h2>

        {/* Replace this text with your short bio or tagline */}
        <p className="text-gray-400 max-w-lg mx-auto md:mx-0">
          i build visually stunning web experiences using Next.js, TypeScript, and Three.js.
        </p>

        {/* Customize your buttons and links here */}
        <div className="flex justify-center md:justify-start space-x-6 pt-6">
          <a
            href="#projects"
            className="px-6 py-3 bg-[#04D9FF] text-black font-semibold rounded-lg hover:bg-[#00BFFF] transition-all"
          >
            view my work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-[#04D9FF] text-[#04D9FF] font-semibold rounded-lg hover:bg-[#04D9FF] hover:text-black transition-all"
          >
            contact me
          </a>
        </div>
      </motion.div>

      {/* ===================== RIGHT SIDE: 3D MODEL ===================== */}
      <motion.div
        // Animation: Fades in and scales up
        initial={{ opacity: 0, scale: 0.9 }}   // scale: 0.9 = starts at 90% size
        animate={{ opacity: 1, scale: 1 }}     // scale: 1 = normal size (100%)
        transition={{ delay: 0.4, duration: 1 }} // delay: 0.4 = waits 0.4s before starting
        className="flex-1 flex justify-center items-center"
      >
        <Scene />
      </motion.div>
    </section>
  );
};

export default Hero;