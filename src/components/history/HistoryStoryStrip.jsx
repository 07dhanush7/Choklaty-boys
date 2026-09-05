import React from 'react';
import { motion } from 'framer-motion';

export default function HistoryStoryStrip() {
  return (
    <div className="w-full mt-8 sm:mt-12 relative z-10 max-w-[1340px] mx-auto px-2 sm:px-6">
      
      {/* HORIZONTAL EDITORIAL STRIP CONTAINER */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-1 sm:mx-8 lg:mx-10 border border-[#C5A059]/40 rounded-2xl bg-[#FAF6EE]/90 p-4 sm:p-6 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden backdrop-blur-sm"
      >
        {/* CORNER LINE ACCENTS */}
        <div className="absolute top-1.5 left-1.5 w-2.5 h-2.5 border-t border-l border-[#C5A059] pointer-events-none" />
        <div className="absolute top-1.5 right-1.5 w-2.5 h-2.5 border-t border-r border-[#C5A059] pointer-events-none" />
        <div className="absolute bottom-1.5 left-1.5 w-2.5 h-2.5 border-b border-l border-[#C5A059] pointer-events-none" />
        <div className="absolute bottom-1.5 right-1.5 w-2.5 h-2.5 border-b border-r border-[#C5A059] pointer-events-none" />

        {/* LEFT SECTION */}
        <div className="flex items-center space-x-4 w-full md:w-auto">
          {/* Shrine Icon Circle Badge */}
          <div className="w-12 h-12 rounded-full bg-[#4A1521] text-[#D4AF37] border-2 border-[#C5A059] flex items-center justify-center shadow-md shrink-0">
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" aria-hidden="true">
              <path d="M12 2L15 6H9L12 2Z" />
              <path d="M4 9H20V11H4V9Z" />
              <path d="M6 11V19H8V11H6ZM11 11V19H13V11H11ZM16 11V19H18V11H16Z" opacity="0.8" />
              <path d="M3 19H21V21H3V19Z" />
            </svg>
          </div>

          <div className="flex flex-col text-left">
            <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8B6B38]">
              FROM 2025 WE TRAVEL BACK IN TIME...
            </span>
            <h4 className="text-base sm:text-lg font-bold font-playfair text-[#4A1521] leading-tight my-0.5">
              EACH YEAR, A CHAPTER.
            </h4>
            <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8B6B38]">
              EACH MEMORY, A TREASURE.
            </span>
          </div>
        </div>

        {/* CENTER LOTUS FLOURISH SEPARATOR */}
        <div className="hidden md:flex items-center space-x-3 text-[#C5A059]">
          <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#C5A059]" />
          <span className="text-lg">🪷</span>
          <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#C5A059]" />
        </div>

        {/* RIGHT SECTION */}
        <div className="flex items-center justify-between md:justify-end space-x-4 w-full md:w-auto border-t md:border-t-0 border-[#C5A059]/20 pt-3 md:pt-0">
          <div className="flex flex-col text-left md:text-right">
            <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8B6B38]">
              REACHING THE BEGINNING
            </span>
            <h4 className="text-xl sm:text-2xl font-black font-playfair text-[#4A1521] leading-tight my-0.5">
              2015
            </h4>
            <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8B6B38]">
              WHERE IT ALL BEGAN
            </span>
          </div>

          {/* Ganesha Idol Circle Badge */}
          <div className="w-12 h-12 rounded-full bg-[#4A1521] text-[#D4AF37] border-2 border-[#C5A059] flex items-center justify-center shadow-md shrink-0">
            <span className="text-xl font-serif font-bold">ॐ</span>
          </div>
        </div>

      </motion.div>

      {/* FINAL SECTION TRANSITION: THE JOURNEY CONTINUES... */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-12 text-center"
      >
        <div className="inline-flex items-center space-x-3 text-[#C5A059]">
          <span className="text-xs">≫</span>
          <div className="h-[1px] w-8 sm:w-16 bg-[#C5A059]/50" />
          <span className="text-xs sm:text-sm md:text-base font-bold font-serif uppercase tracking-[0.25em] text-[#8B6B38] font-cinzel">
            THE JOURNEY CONTINUES...
          </span>
          <div className="h-[1px] w-8 sm:w-16 bg-[#C5A059]/50" />
          <span className="text-xs">≪</span>
        </div>
      </motion.div>

    </div>
  );
}
