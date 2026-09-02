import React from 'react';
import { motion } from 'framer-motion';
import ganeshImg from '../assets/Ganesh.png';

export default function GaneshFrame() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="relative group rounded-2xl overflow-hidden border border-[#C5A059]/35 bg-[#FAF6EE]/80 p-3 sm:p-4 backdrop-blur-xs transition-all duration-500 hover:border-[#C5A059]/70 w-full max-w-md lg:max-w-none"
    >
      {/* INNER PAPER FRAME */}
      <div className="relative rounded-xl overflow-hidden bg-gradient-to-b from-[#FAF3E0] to-[#F5EAD4] p-4 flex items-center justify-center border border-[#C5A059]/20">
        
        {/* SOFT AMBIENT LIGHT BACKLIGHT */}
        <div className="absolute inset-0 bg-amber-400/15 blur-2xl rounded-full scale-110 pointer-events-none" />

        {/* GANESH IDOL IMAGE */}
        <img
          src={ganeshImg}
          alt="Lord Ganesh 2026 Hero Idol"
          className="w-full h-auto max-h-[380px] sm:max-h-[440px] object-contain select-none transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          style={{
            maskImage: 'radial-gradient(ellipse 94% 94% at 50% 50%, rgba(0,0,0,1) 82%, rgba(0,0,0,0) 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 94% 94% at 50% 50%, rgba(0,0,0,1) 82%, rgba(0,0,0,0) 100%)'
          }}
        />
      </div>

      {/* SUBTLE CAPTION BADGE */}
      <div className="mt-3 flex items-center justify-between text-[11px] text-[#8B6B38] font-sans px-1">
        <span className="font-semibold uppercase tracking-wider font-playfair text-[#4A1521]">
          SWARNAKUPPAM IDOL
        </span>
        <span className="tracking-widest uppercase text-[10px]">
          2026 EDITION
        </span>
      </div>
    </motion.div>
  );
}
