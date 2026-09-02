import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Compass } from 'lucide-react';

export default function CelebrationIntro() {
  return (
    <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-8 text-center">
      
      {/* 1. TOP BADGE SUBTITLE */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="inline-flex items-center space-x-2.5 px-4 py-1 rounded-full border border-[#C5A059]/40 bg-[#FAF6EE]/80 backdrop-blur-xs mb-3 shadow-2xs"
      >
        <span className="text-[#C5A059] text-xs">✦</span>
        <span className="text-xs sm:text-sm font-extrabold tracking-[0.22em] text-[#8B6B38] uppercase font-cinzel">
          THIS YEAR • 2026
        </span>
        <span className="text-[#C5A059] text-xs">✦</span>
      </motion.div>

      {/* 2. MAIN HEADING */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#4A1521] uppercase font-playfair leading-tight mb-3"
      >
        12<span className="text-[0.65em] align-top font-serif">TH</span> GANESH CHATURTHI<br className="hidden sm:inline" />
        <span className="text-gold-gradient font-serif ml-1 sm:ml-2">CELEBRATION</span>
      </motion.h2>

      {/* 3. ELEGANT GOLD DIVIDER */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex items-center justify-center space-x-3 text-[#8B6B38] max-w-xs mx-auto my-3"
      >
        <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#C5A059]" />
        <span className="text-xs text-[#C5A059]">✦</span>
        <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#C5A059]" />
      </motion.div>

      {/* 4. DATE & VENUE CARDS IN COMPACT EDITORIAL LAYOUT */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.25 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto mt-5 text-left"
      >
        {/* DATE CARD */}
        <div className="p-4 sm:p-5 rounded-xl border border-[#C5A059]/35 bg-[#FAF6EE]/70 backdrop-blur-xs flex items-start space-x-3.5 shadow-2xs hover:border-[#C5A059] transition-colors">
          <div className="p-2.5 rounded-lg bg-[#4A1521]/8 text-[#E6C687] shrink-0 border border-[#C5A059]/30">
            <Calendar className="w-5 h-5 text-[#4A1521]" />
          </div>
          <div>
            <span className="text-[10px] font-bold tracking-[0.2em] text-[#8B6B38] uppercase font-cinzel block mb-0.5">
              FESTIVAL DATES
            </span>
            <span className="text-base sm:text-lg font-extrabold text-[#4A1521] font-playfair tracking-wide block">
              14 — 20 SEPTEMBER 2026
            </span>
            <span className="text-xs text-[#4A3728]/80 font-body">
              7 Days of Devotion & Joy
            </span>
          </div>
        </div>

        {/* VENUE CARD */}
        <div className="p-4 sm:p-5 rounded-xl border border-[#C5A059]/35 bg-[#FAF6EE]/70 backdrop-blur-xs flex items-start space-x-3.5 shadow-2xs hover:border-[#C5A059] transition-colors">
          <div className="p-2.5 rounded-lg bg-[#4A1521]/8 text-[#E6C687] shrink-0 border border-[#C5A059]/30">
            <MapPin className="w-5 h-5 text-[#4A1521]" />
          </div>
          <div>
            <span className="text-[10px] font-bold tracking-[0.2em] text-[#8B6B38] uppercase font-cinzel block mb-0.5">
              SACRED VENUE
            </span>
            <span className="text-sm sm:text-base font-extrabold text-[#4A1521] font-cinzel tracking-wide block leading-snug">
              SPLV TEMPLE GROUND
            </span>
            <span className="text-xs text-[#4A3728]/90 font-body block">
              SWARNAKUPPAM, ROBERTSONPET, K.G.F.
            </span>
          </div>
        </div>
      </motion.div>

    </div>
  );
}
