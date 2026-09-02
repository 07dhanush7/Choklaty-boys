import React from 'react';
import { motion } from 'framer-motion';
import { FESTIVAL_INFO } from '../data/festival';

export default function CelebrationIntro() {
  return (
    <div className="w-full border-b border-[#C5A059]/25 pb-8 mb-8">
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
        
        {/* LEFT SIDE: EYEBROW + DISPLAY HEADING + DATES */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-1.5"
        >
          {/* SMALL UPPERCASE EYEBROW */}
          <span className="text-[11px] sm:text-xs font-semibold tracking-[0.22em] text-[#8B6B38] uppercase font-sans block">
            {FESTIVAL_INFO.eyebrow}
          </span>

          {/* LARGE DISPLAY HEADING */}
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif text-[#4A1521] tracking-tight font-playfair leading-[1.05]">
            {FESTIVAL_INFO.heading}
          </h2>

          {/* DATES BELOW */}
          <p className="text-xs sm:text-sm font-medium tracking-[0.16em] text-[#8B6B38] uppercase font-sans pt-1">
            {FESTIVAL_INFO.dates}
          </p>
        </motion.div>

        {/* RIGHT SIDE: SMALL EDITORIAL LABEL */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-left md:text-right border-l-2 md:border-l-0 md:border-r-2 border-[#C5A059]/40 pl-3 md:pl-0 md:pr-3 py-0.5"
        >
          <span className="text-xs sm:text-sm font-serif font-bold text-[#4A1521] uppercase tracking-[0.15em] leading-snug block font-playfair">
            {FESTIVAL_INFO.headerRight.line1}
          </span>
          <span className="text-xs sm:text-sm font-serif font-bold text-[#4A1521] uppercase tracking-[0.15em] leading-snug block font-playfair">
            {FESTIVAL_INFO.headerRight.line2}
          </span>
          <span className="text-[10px] sm:text-xs font-sans font-semibold text-[#8B6B38] uppercase tracking-[0.2em] block">
            {FESTIVAL_INFO.headerRight.line3}
          </span>
        </motion.div>

      </div>
    </div>
  );
}
