"use client";

import React from "react";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="bg-black text-gray-400 text-center py-8 border-t border-gray-800"
    >
      <p>
        © {new Date().getFullYear()}{" "}
        {/* Replace with your name or portfolio title */}
        <span className="text-[#04D9FF] font-medium">Kenzo Fukuda</span>. All
        rights reserved.
      </p>
    </motion.footer>
  );
};

export default Footer;