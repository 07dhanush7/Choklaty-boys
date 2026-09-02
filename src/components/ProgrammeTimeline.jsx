import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Sunset, ArrowRight, CalendarDays } from 'lucide-react';
import { PROGRAMME_DATA } from '../data/programme';
import ProgrammeDay from './ProgrammeDay';
import ProgrammeModal from './ProgrammeModal';

export default function ProgrammeTimeline() {
  // Default selected day: DAY 2 — 15 SEP 2026
  const [selectedDay, setSelectedDay] = useState(2);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const activeDayData = PROGRAMME_DATA.find((d) => d.day === selectedDay) || PROGRAMME_DATA[1];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.1 }}
      className="flex flex-col space-y-6"
    >
      {/* 1. SECTION TITLE */}
      <div className="border-b border-[#C5A059]/25 pb-3">
        <h3 className="text-xl sm:text-2xl font-serif font-black text-[#4A1521] uppercase tracking-wide font-playfair">
          7 DAYS OF DEVOTION
        </h3>
        <p className="text-xs text-[#8B6B38] uppercase font-sans tracking-widest pt-0.5">
          INTERACTIVE FESTIVAL SCHEDULE
        </p>
      </div>

      {/* 2. HORIZONTAL DATE SELECTOR (DESKTOP / TABLET / MOBILE HORIZONTALLY SCROLLABLE) */}
      <div className="relative py-2">
        {/* THIN CONNECTING LINE BEHIND NODES */}
        <div className="absolute left-4 right-4 top-1/2 -translate-y-3.5 h-[1px] bg-[#C5A059]/35 z-0" />

        <div className="relative z-10 flex items-center justify-between overflow-x-auto no-scrollbar space-x-2 px-1">
          {PROGRAMME_DATA.map((dayItem) => (
            <ProgrammeDay
              key={dayItem.day}
              dayData={dayItem}
              isActive={selectedDay === dayItem.day}
              onClick={() => setSelectedDay(dayItem.day)}
            />
          ))}
        </div>
      </div>

      {/* 3. SELECTED DAY EVENT PANEL */}
      <div className="rounded-2xl border border-[#C5A059]/35 bg-[#FAF6EE]/80 p-5 sm:p-6 backdrop-blur-xs shadow-2xs space-y-5">
        
        {/* PANEL HEADER */}
        <div className="flex items-center justify-between pb-3 border-b border-[#C5A059]/20">
          <div className="flex items-center space-x-2">
            <CalendarDays className="w-4 h-4 text-[#C5A059]" />
            <h4 className="text-base sm:text-lg font-serif font-black text-[#4A1521] uppercase tracking-wider font-playfair">
              {activeDayData.dayFormatted} • {activeDayData.dateNumber} {activeDayData.date.split(' ')[1]}
            </h4>
          </div>
          <span className="text-xs font-semibold text-[#8B6B38] uppercase font-sans tracking-wider">
            {activeDayData.weekday}
          </span>
        </div>

        {/* EVENT SESSIONS WITH CROSSFADE TRANSITION */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeDayData.day}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            {activeDayData.sessions.map((sess, sIdx) => {
              const IconComp = sess.session === 'MORNING' ? Sun : (sess.session === 'AFTERNOON' ? Sunset : Moon);

              return (
                <React.Fragment key={sIdx}>
                  {sIdx > 0 && (
                    <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#C5A059]/30 to-transparent my-3" />
                  )}
                  <div className="flex items-start space-x-4 p-2 rounded-lg hover:bg-white/40 transition-colors">
                    {/* SESSION ICON */}
                    <div className="p-2 rounded-lg bg-[#4A1521]/10 text-[#4A1521] border border-[#C5A059]/30 shrink-0 mt-0.5">
                      <IconComp className="w-5 h-5 text-[#4A1521]" />
                    </div>

                    {/* SESSION CONTENT */}
                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center space-x-2 text-xs font-semibold text-[#8B6B38] uppercase font-sans">
                        <span>{sess.session}</span>
                        <span>•</span>
                        <span className="font-mono text-[#4A1521] font-bold">{sess.time}</span>
                      </div>
                      <h5 className="text-base sm:text-lg font-serif font-extrabold text-[#4A1521] uppercase tracking-wide font-playfair leading-snug">
                        {sess.title}
                      </h5>
                      {sess.subtitle && (
                        <p className="text-xs text-[#4A3728]/85 font-sans italic">
                          {sess.subtitle}
                        </p>
                      )}
                    </div>
                  </div>
                </React.Fragment>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* 4. SUBTLE TEXT LINK: VIEW COMPLETE PROGRAMME → */}
        <div className="pt-2 border-t border-[#C5A059]/20 flex justify-end">
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="group inline-flex items-center space-x-1.5 text-xs font-bold tracking-[0.16em] uppercase text-[#4A1521] hover:text-[#C5A059] transition-colors font-sans"
          >
            <span>VIEW COMPLETE PROGRAMME</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1 text-[#C5A059]" />
          </button>
        </div>

      </div>

      {/* PROGRAMME MODAL */}
      <ProgrammeModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

    </motion.div>
  );
}
