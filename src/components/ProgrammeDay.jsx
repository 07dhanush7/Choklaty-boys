import React from 'react';
import { motion } from 'framer-motion';
import { Flame, Sun, Sparkles, Heart, Flower2, Music, PartyPopper } from 'lucide-react';

const ICON_MAP = {
  Flame,
  Sun,
  Sparkles,
  Heart,
  Flower2,
  Music,
  PartyPopper
};

export default function ProgrammeDay({ dayData, isActive, onClick }) {
  const IconComponent = ICON_MAP[dayData.iconName] || Sparkles;
  const dateNumber = dayData.date.split(' ')[0]; // e.g., "14"

  return (
    <button
      onClick={onClick}
      className={`group relative flex flex-col items-center focus:outline-none transition-all duration-300 ${
        isActive ? 'scale-105' : 'hover:scale-102 opacity-85 hover:opacity-100'
      }`}
    >
      {/* TOP DATE NODE CIRCLE */}
      <div
        className={`w-11 h-11 sm:w-13 sm:h-13 rounded-full flex items-center justify-center font-playfair font-black text-sm sm:text-base border-2 transition-all duration-300 relative z-10 ${
          isActive
            ? 'bg-[#4A1521] text-[#E6C687] border-[#C5A059] shadow-md ring-4 ring-[#C5A059]/25'
            : 'bg-[#FAF6EE] text-[#4A1521] border-[#C5A059]/50 group-hover:border-[#4A1521]'
        }`}
      >
        <span>{dateNumber}</span>

        {/* ACTIVE INDICATOR DOT */}
        {isActive && (
          <motion.span
            layoutId="activeTimelineDot"
            className="absolute -bottom-1 w-2.5 h-2.5 bg-[#C5A059] rounded-full border border-white"
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          />
        )}
      </div>

      {/* DAY LABEL BELOW */}
      <div className="mt-2 text-center">
        <span
          className={`text-[11px] font-bold tracking-widest font-cinzel block transition-colors ${
            isActive ? 'text-[#4A1521]' : 'text-[#8B6B38] group-hover:text-[#4A1521]'
          }`}
        >
          DAY {dayData.day}
        </span>
        <span className="text-[10px] text-[#4A3728]/70 font-body block uppercase">
          {dayData.weekday.slice(0, 3)}
        </span>
      </div>
    </button>
  );
}
