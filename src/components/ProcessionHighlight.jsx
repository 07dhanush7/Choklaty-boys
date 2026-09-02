import React from 'react';
import { motion } from 'framer-motion';
import bgMandala from '../assets/background.png';
import { FESTIVAL_INFO } from '../data/festival';

export default function ProcessionHighlight() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="w-full mt-12 mb-8"
    >
      <div className="relative rounded-2xl border border-[#C5A059]/40 bg-[#3D0F19] text-[#FAF6EE] overflow-hidden p-8 sm:p-10 md:p-12 text-center shadow-xl group">
        
        {/* CINEMATIC BACKDROP LAYER */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-overlay transition-transform duration-1000 group-hover:scale-105 pointer-events-none"
          style={{ backgroundImage: `url(${bgMandala})` }}
        />
        <div className="absolute inset-0 bg-radial from-[#8B1E32]/40 via-transparent to-black/80 pointer-events-none" />
        <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-amber-400/15 blur-3xl pointer-events-none" />

        {/* CONTENT */}
        <div className="relative z-10 space-y-3 max-w-2xl mx-auto">
          {/* DATE BADGE */}
          <span className="inline-block px-4 py-1 rounded-full border border-[#C5A059]/60 bg-[#1E050B]/80 text-[#E6C687] text-xs font-bold tracking-[0.2em] uppercase font-sans shadow-md">
            20 SEP • GRAND PROCESSION
          </span>

          {/* MAIN PROCESSION HEADING */}
          <h3 className="text-2xl sm:text-4xl md:text-5xl font-serif font-black text-[#FAF6EE] tracking-tight uppercase font-playfair leading-tight pt-1">
            THE GRAND PROCESSION
          </h3>

          {/* TAGS / PILLARS */}
          <p className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#E6C687] uppercase font-sans pt-1">
            BAND • DEVOTION • UNITY • JOY
          </p>

          {/* DECORATIVE ACCENT */}
          <div className="flex items-center justify-center space-x-3 text-[#C5A059] max-w-xs mx-auto pt-2">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#C5A059]" />
            <span className="text-xs text-[#E6C687]">✦</span>
            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#C5A059]" />
          </div>
        </div>

      </div>
    </motion.div>
  );
}
