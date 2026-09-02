import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { FESTIVAL_INFO } from '../data/festival';

export default function HistoryTransition() {
  return (
    <div className="w-full pt-16 pb-20 text-center relative z-10">
      
      {/* DECORATIVE TOP DIVIDER */}
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

      {/* PRIMARY TRANSITION QUOTE */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-base sm:text-xl md:text-2xl font-serif font-bold text-[#4A1521] uppercase tracking-wider font-playfair"
      >
        "{FESTIVAL_INFO.transition.quote}"
      </motion.p>

      {/* SECONDARY YEARS SUBTITLE */}
      <motion.h4
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="text-xl sm:text-2xl md:text-3xl font-black text-[#8B6B38] font-cinzel tracking-[0.2em] uppercase pt-2"
      >
        {FESTIVAL_INFO.transition.years}
      </motion.h4>

      {/* SUBTLE DOWNWARD ARROW INDICATOR */}
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        whileInView={{ opacity: 1, y: [0, 6, 0] }}
        viewport={{ once: true }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="pt-8 flex justify-center text-[#C5A059]"
      >
        <div className="p-2 rounded-full border border-[#C5A059]/40 bg-[#FAF6EE]/80">
          <ChevronDown className="w-5 h-5 text-[#4A1521]" />
        </div>
      </motion.div>

    </div>
  );
}
