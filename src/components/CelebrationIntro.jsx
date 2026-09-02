import React from 'react';
import { motion } from 'framer-motion';
import { FESTIVAL_INFO } from '../data/festival';

export default function CelebrationIntro() {
  return (
    <div className="w-full border-b border-[#C5A059]/30 pb-10 mb-10 text-center flex flex-col items-center">
      
      {/* 1. CENTERED EYEBROW WITH GOLD LINES */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex items-center justify-center space-x-3 text-[#8B6B38] mb-3"
      >
        <div className="h-[1.5px] w-10 sm:w-20 md:w-28 bg-gradient-to-r from-transparent to-[#C5A059]" />
        <span className="text-xs text-[#C5A059]">✦</span>
        <span className="text-xs sm:text-sm md:text-base font-extrabold tracking-[0.25em] text-[#8B6B38] uppercase font-sans">
          {FESTIVAL_INFO.eyebrow}
        </span>
        <span className="text-xs text-[#C5A059]">✦</span>
        <div className="h-[1.5px] w-10 sm:w-20 md:w-28 bg-gradient-to-l from-transparent to-[#C5A059]" />
      </motion.div>

      {/* 2. LARGE DISPLAY HEADING: OUR 12TH YEAR */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-black text-[#4A1521] tracking-tight font-playfair uppercase leading-none mb-3 drop-shadow-2xs"
      >
        OUR 12<span className="text-[0.65em] align-top font-serif">TH</span> YEAR
      </motion.h2>

      {/* 3. CENTERED SUBHEADING: 12TH GANESH CHATURTHI CELEBRATION */}
      <motion.h3
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-serif font-extrabold text-gold-gradient tracking-[0.16em] uppercase font-playfair leading-tight mb-3"
      >
        12TH GANESH CHATURTHI CELEBRATION
      </motion.h3>

      {/* 4. DATES BANNER */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.25 }}
        className="text-xs sm:text-sm md:text-base font-bold tracking-[0.22em] text-[#8B6B38] uppercase font-sans pt-1"
      >
        {FESTIVAL_INFO.dates}
      </motion.p>

    </div>
  );
}
