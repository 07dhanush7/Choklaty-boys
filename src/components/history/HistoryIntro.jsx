import React from 'react';
import { motion } from 'framer-motion';

export default function HistoryIntro() {
  return (
    <div className="w-full text-center mb-8 sm:mb-12 relative z-10">
      {/* SMALL UPPERCASE SUBTITLE */}
      <motion.p
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-[#8B6B38] mb-2"
      >
        BUT THIS STORY DIDN’T BEGIN IN 2026...
      </motion.p>

      {/* OVERSIZED ELEGANT SERIF TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold font-playfair text-[#4A1521] tracking-tight uppercase mb-4 drop-shadow-sm"
      >
        11 YEARS BEHIND US
      </motion.h2>

      {/* CENTRAL LOTUS & GOLD DIVIDER */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex items-center justify-center space-x-3 my-3 text-[#C5A059]"
      >
        <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent via-[#C5A059]/60 to-[#C5A059]" />
        
        {/* Ornate Lotus Icon SVG */}
        <svg 
          viewBox="0 0 24 24" 
          className="w-6 h-6 text-[#C5A059] fill-current transform hover:scale-110 transition-transform" 
          aria-hidden="true"
        >
          <path d="M12 2C12 2 14.5 6.5 14.5 9C14.5 10.38 13.38 11.5 12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 6.5 12 2 12 2Z" />
          <path d="M12 11.5C14.5 11.5 19 13.5 19 16.5C19 17.88 17.88 19 16.5 19C15 19 13.5 18 12 16.5C10.5 18 9 19 7.5 19C6.12 19 5 17.88 5 16.5C5 13.5 9.5 11.5 12 11.5Z" opacity="0.85" />
          <path d="M12 16.5C13.5 18 16 20.5 16 21.5C16 21.78 15.78 22 15.5 22H8.5C8.22 22 8 21.78 8 21.5C8 20.5 10.5 18 12 16.5Z" opacity="0.7" />
        </svg>

        <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent via-[#C5A059]/60 to-[#C5A059]" />
      </motion.div>

      {/* SECONDARY SUBHEADING */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-xs sm:text-sm md:text-base font-semibold uppercase tracking-[0.2em] text-[#8B6B38]"
      >
        A JOURNEY THROUGH THE YEARS THAT BROUGHT US HERE.
      </motion.p>
    </div>
  );
}
