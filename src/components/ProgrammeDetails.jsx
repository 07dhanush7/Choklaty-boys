import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Flame, Sun, Sparkles, Heart, Flower2, Music, PartyPopper, Clock, CalendarDays } from 'lucide-react';

const ICON_MAP = {
  Flame,
  Sun,
  Sparkles,
  Heart,
  Flower2,
  Music,
  PartyPopper
};

export default function ProgrammeDetails({ dayData }) {
  if (!dayData) return null;

  const IconComponent = ICON_MAP[dayData.iconName] || Sparkles;

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={dayData.day}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-2xl border border-[#C5A059]/40 bg-[#FAF6EE]/90 backdrop-blur-sm p-6 sm:p-8 shadow-md overflow-hidden"
        >
          {/* BACKGROUND AMBIENT GLOW */}
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-amber-400/10 blur-3xl pointer-events-none" />

          {/* HEADER: DAY BADGE & WEEKDAY */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-[#C5A059]/25">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-xl bg-[#4A1521] text-[#E6C687] flex items-center justify-center border border-[#C5A059]/50 shadow-xs">
                <IconComponent className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold tracking-[0.2em] text-[#8B6B38] uppercase font-cinzel block">
                  DAY {dayData.day} • {dayData.weekday}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-[#4A1521] font-playfair uppercase">
                  {dayData.date}
                </h3>
              </div>
            </div>

            <div className="px-3.5 py-1.5 rounded-full bg-[#4A1521]/10 border border-[#C5A059]/40">
              <span className="text-xs font-bold text-[#4A1521] font-cinzel tracking-wider uppercase">
                {dayData.highlight}
              </span>
            </div>
          </div>

          {/* EVENTS LIST */}
          <div className="mt-6 space-y-4">
            {dayData.events.map((evt, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.08 }}
                className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl border border-[#C5A059]/25 bg-white/60 hover:bg-white/90 hover:border-[#C5A059]/50 transition-all space-y-2 sm:space-y-0"
              >
                <div className="flex items-center space-x-3">
                  <div className="px-3 py-1.5 rounded-lg bg-[#4A1521] text-[#FAF6EE] text-xs font-extrabold tracking-wider font-cinzel shrink-0 border border-[#C5A059]/40 flex items-center space-x-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#E6C687]" />
                    <span>{evt.time}</span>
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-extrabold text-[#4A1521] font-playfair uppercase">
                      {evt.title}
                    </h4>
                    {evt.detail && (
                      <p className="text-xs text-[#4A3728]/85 font-body">
                        {evt.detail}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* FOOTER ACCENT NOTE */}
          <div className="mt-6 pt-4 border-t border-[#C5A059]/20 flex items-center justify-between text-[11px] text-[#8B6B38]">
            <span className="font-cinzel tracking-wider uppercase">
              ✦ ALL DEVOTEES WELCOME
            </span>
            <span className="font-body italic text-[#4A3728]/70">
              Swarnakuppam, K.G.F.
            </span>
          </div>

        </motion.div>
      </AnimatePresence>
    </div>
  );
}
