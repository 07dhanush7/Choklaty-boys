import React from 'react';
import { motion } from 'framer-motion';

export default function FloralDecorations() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {/* Top-Left Subtle Mandala Glow Accent */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 0.35, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-amber-200/20 blur-3xl"
      />

      {/* Top-Right Subtle Mandala SVG Ornament */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 180, repeat: Infinity, ease: "linear" }}
        className="absolute -top-32 -right-32 w-80 h-80 opacity-15 text-[#C5A059] hidden md:block"
      >
        <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="0.75">
          <circle cx="100" cy="100" r="90" strokeDasharray="3 3" />
          <circle cx="100" cy="100" r="70" />
          <circle cx="100" cy="100" r="50" strokeDasharray="6 4" />
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, i) => (
            <path
              key={i}
              d={`M 100 100 L ${100 + 85 * Math.cos((angle * Math.PI) / 180)} ${100 + 85 * Math.sin((angle * Math.PI) / 180)}`}
              opacity="0.6"
            />
          ))}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
            <circle
              key={i}
              cx={100 + 60 * Math.cos((angle * Math.PI) / 180)}
              cy={100 + 60 * Math.sin((angle * Math.PI) / 180)}
              r="8"
              opacity="0.5"
            />
          ))}
        </svg>
      </motion.div>

      {/* Bottom-Left Floral Motif */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.25, y: [0, -6, 0] }}
        transition={{ 
          opacity: { duration: 1.5, delay: 0.5 },
          y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute bottom-6 left-6 md:left-12 w-32 md:w-48 text-[#8B6B38] opacity-25"
      >
        <svg viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M60 110 C 60 80, 20 60, 20 40 C 20 20, 50 10, 60 30 C 70 10, 100 20, 100 40 C 100 60, 60 80, 60 110 Z" />
          <path d="M60 110 Q 60 70 30 50" />
          <path d="M60 110 Q 60 70 90 50" />
          <circle cx="60" cy="35" r="5" fill="currentColor" opacity="0.3" />
        </svg>
      </motion.div>

      {/* Bottom-Right Subtle Golden Glow behind Ganesh */}
      <motion.div
        animate={{ opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-20 -right-20 w-[500px] h-[500px] rounded-full bg-amber-400/10 blur-3xl pointer-events-none"
      />

      {/* Subtle Background Watermark Text Accent */}
      <div className="absolute bottom-4 right-8 opacity-15 text-[#8B6B38] hidden lg:block select-none">
        <span className="text-[11px] font-bold tracking-[0.3em] font-cinzel uppercase">
          CHOKLATY BOYZ • SINCE 2015
        </span>
      </div>
    </div>
  );
}
