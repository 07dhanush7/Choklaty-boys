import React from 'react';
import { motion } from 'framer-motion';

export default function HistoryTransition() {
  return (
    <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
      
      {/* DECORATIVE LINE ACCENT */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex items-center justify-center space-x-3 text-[#8B6B38] max-w-xs mx-auto mb-8"
      >
        <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#C5A059]/60 to-[#C5A059]" />
        <span className="text-xs text-[#C5A059]">✦</span>
        <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#C5A059]/60 to-[#C5A059]" />
      </motion.div>

      {/* PRIMARY TRANSITION HEADING */}
      <motion.h4
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-[#4A1521] font-playfair tracking-wide uppercase leading-tight"
      >
        BUT THIS JOURNEY STARTED<br className="hidden sm:inline" />
        <span className="text-gold-gradient font-serif ml-1 sm:ml-2">LONG BEFORE 2026...</span>
      </motion.h4>

      {/* SECONDARY SUBHEADING */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="mt-4 text-base sm:text-lg md:text-xl font-extrabold text-[#8B6B38] font-cinzel tracking-[0.2em] uppercase"
      >
        11 YEARS BEHIND US.
      </motion.p>

      {/* DOWNWARD ACCENT DOTS */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-8 flex flex-col items-center space-y-2 text-[#C5A059]"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]/80" />
        <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]/50" />
        <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]/25" />
      </motion.div>

    </div>
  );
}
