import React from 'react';
import { motion } from 'framer-motion';

export default function HistoryYear({ yearObj, isSelected, onSelect }) {
  const { year, chapter } = yearObj;

  return (
    <div className="flex flex-col items-center relative group min-w-[68px] sm:min-w-[80px]">
      {/* YEAR BUTTON */}
      <button
        type="button"
        onClick={() => onSelect(year)}
        aria-label={`View memories from year ${year}`}
        aria-current={isSelected ? 'true' : undefined}
        className={`relative z-10 transition-all duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059] rounded-full text-xs sm:text-sm md:text-base font-serif font-bold tracking-wide ${
          isSelected
            ? 'bg-[#4A1521] text-[#FAF3E0] px-3.5 py-1 sm:px-4 sm:py-1.5 shadow-md border border-[#C5A059] scale-105'
            : 'text-[#4A1521] hover:text-[#8B6B38] px-2 py-1 hover:bg-[#C5A059]/10 rounded-md'
        }`}
      >
        {year}
        
        {/* Subtle selection ring glow */}
        {isSelected && (
          <motion.div 
            layoutId="yearPillGlow"
            className="absolute inset-0 rounded-full border border-[#D4AF37]/50 shadow-[0_0_12px_rgba(197,160,89,0.3)] pointer-events-none"
            transition={{ type: 'spring', stiffness: 350, damping: 25 }}
          />
        )}
      </button>

      {/* TIMELINE NODE POINT */}
      <div className="relative flex items-center justify-center mt-2.5 mb-1 h-4 w-4">
        {isSelected ? (
          <motion.div
            layoutId="activeTimelineNode"
            className="w-3.5 h-3.5 rounded-full bg-[#4A1521] border-2 border-[#D4AF37] shadow-sm z-10 flex items-center justify-center"
            transition={{ type: 'spring', stiffness: 400, damping: 28 }}
          >
            <div className="w-1 h-1 rounded-full bg-[#D4AF37]" />
          </motion.div>
        ) : (
          <div className="w-2 h-2 rounded-full bg-[#C5A059]/50 group-hover:bg-[#C5A059] group-hover:scale-125 transition-all z-10" />
        )}
      </div>

      {/* SUBTLE CHAPTER LABEL BELOW NODE ON HOVER/DESKTOP */}
      <span className={`text-[10px] uppercase font-mono tracking-widest mt-0.5 transition-opacity ${
        isSelected ? 'text-[#8B6B38] font-bold opacity-100' : 'text-[#8B6B38]/50 opacity-0 group-hover:opacity-100'
      }`}>
        Ch.{chapter.replace('CHAPTER ', '')}
      </span>
    </div>
  );
}
