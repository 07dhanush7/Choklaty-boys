import React from 'react';
import { motion } from 'framer-motion';

export default function ProgrammeDay({ dayData, isActive, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`Select Day ${dayData.day}, ${dayData.date}`}
      aria-pressed={isActive}
      className={`group relative flex flex-col items-center focus:outline-none transition-all duration-300 ${
        isActive ? 'scale-105' : 'hover:scale-102 opacity-80 hover:opacity-100'
      }`}
    >
      {/* DATE NUMBER CIRCLE */}
      <div
        className={`w-9 h-9 sm:w-11 sm:h-11 rounded-full flex items-center justify-center font-playfair font-black text-xs sm:text-sm border transition-all duration-300 relative z-10 ${
          isActive
            ? 'bg-[#4A1521] text-[#E6C687] border-[#C5A059] shadow-sm ring-2 ring-[#C5A059]/40'
            : 'bg-[#FAF6EE] text-[#4A1521] border-[#C5A059]/40 group-hover:border-[#4A1521]'
        }`}
      >
        <span>{dayData.dateNumber}</span>

        {/* ACTIVE INDICATOR DOT */}
        {isActive && (
          <motion.span
            layoutId="activeDayRing"
            className="absolute -bottom-1 w-2 h-2 bg-[#C5A059] rounded-full border border-white"
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          />
        )}
      </div>

      {/* DAY SUBTITLE */}
      <span
        className={`text-[9px] sm:text-[10px] font-semibold tracking-wider uppercase font-sans mt-1.5 transition-colors ${
          isActive ? 'text-[#4A1521]' : 'text-[#8B6B38] group-hover:text-[#4A1521]'
        }`}
      >
        DAY {dayData.dayNumber || dayData.day}
      </span>
    </button>
  );
}
