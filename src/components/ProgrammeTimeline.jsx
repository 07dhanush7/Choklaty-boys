import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PROGRAMME_DATA } from '../data/programme';
import ProgrammeDay from './ProgrammeDay';
import ProgrammeDetails from './ProgrammeDetails';
import { Clock, Calendar, Flame, Sun, Sparkles, Heart, Flower2, Music, PartyPopper } from 'lucide-react';

const ICON_MAP = {
  Flame,
  Sun,
  Sparkles,
  Heart,
  Flower2,
  Music,
  PartyPopper
};

export default function ProgrammeTimeline() {
  const [selectedDay, setSelectedDay] = useState(1);

  const activeData = PROGRAMME_DATA.find((d) => d.day === selectedDay) || PROGRAMME_DATA[0];

  return (
    <section className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      
      {/* SECTION HEADER */}
      <div className="text-center mb-8">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs sm:text-sm font-extrabold tracking-[0.2em] text-[#8B6B38] uppercase font-cinzel block mb-1"
        >
          THIS YEAR'S PROGRAMMES
        </motion.span>
        <motion.h3
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="text-xl sm:text-2xl md:text-3xl font-black text-[#4A1521] font-playfair uppercase"
        >
          7 DAYS OF DEVOTION • UNITY • TRADITION
        </motion.h3>
        <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-[#C5A059] to-transparent mx-auto mt-2" />
      </div>

      {/* DESKTOP INTERACTIVE TIMELINE (MD & UP) */}
      <div className="hidden md:block mb-8">
        <div className="relative flex items-center justify-between max-w-4xl mx-auto px-6 py-4">
          
          {/* CONNECTING TIMELINE LINE BEHIND NODES */}
          <div className="absolute left-10 right-10 top-1/2 -translate-y-4 h-[2px] bg-[#C5A059]/35 z-0" />
          
          {/* ACTIVE PROGRESS LINE */}
          <motion.div
            className="absolute left-10 top-1/2 -translate-y-4 h-[2px] bg-[#4A1521] z-0 transition-all duration-300"
            style={{
              width: `${((selectedDay - 1) / (PROGRAMME_DATA.length - 1)) * 90}%`
            }}
          />

          {/* TIMELINE DAY NODES */}
          {PROGRAMME_DATA.map((dayItem) => (
            <ProgrammeDay
              key={dayItem.day}
              dayData={dayItem}
              isActive={selectedDay === dayItem.day}
              onClick={() => setSelectedDay(dayItem.day)}
            />
          ))}
        </div>

        {/* CENTRAL DETAILS PANEL FOR DESKTOP */}
        <div className="mt-6">
          <ProgrammeDetails dayData={activeData} />
        </div>
      </div>

      {/* MOBILE VERTICAL TIMELINE (SM SCREENS) */}
      <div className="block md:hidden space-y-6">
        <div className="relative pl-6 border-l-2 border-[#C5A059]/40 space-y-8 ml-2">
          {PROGRAMME_DATA.map((dayItem) => {
            const IconComp = ICON_MAP[dayItem.iconName] || Sparkles;
            const isSelected = selectedDay === dayItem.day;

            return (
              <motion.div
                key={dayItem.day}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative group"
              >
                {/* TIMELINE NODE DOT */}
                <div
                  onClick={() => setSelectedDay(dayItem.day)}
                  className={`absolute -left-[33px] top-1.5 w-6 h-6 rounded-full border-2 flex items-center justify-center cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-[#4A1521] border-[#C5A059] ring-4 ring-[#C5A059]/25 scale-110'
                      : 'bg-[#FAF6EE] border-[#C5A059] hover:bg-[#4A1521]/10'
                  }`}
                >
                  <div className={`w-2 h-2 rounded-full ${isSelected ? 'bg-[#E6C687]' : 'bg-[#8B6B38]'}`} />
                </div>

                {/* MOBILE EVENT CARD */}
                <div
                  onClick={() => setSelectedDay(dayItem.day)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#FAF6EE] border-[#C5A059] shadow-md'
                      : 'bg-[#FAF6EE]/60 border-[#C5A059]/30 hover:border-[#C5A059]/60'
                  }`}
                >
                  {/* DATE & DAY BADGE */}
                  <div className="flex items-center justify-between pb-2 border-b border-[#C5A059]/20">
                    <div className="flex items-center space-x-2">
                      <IconComp className="w-4 h-4 text-[#4A1521]" />
                      <span className="text-xs font-black text-[#4A1521] font-playfair uppercase">
                        {dayItem.date}
                      </span>
                    </div>
                    <span className="text-[10px] font-bold text-[#8B6B38] font-cinzel tracking-wider">
                      DAY {dayItem.day} • {dayItem.weekday}
                    </span>
                  </div>

                  {/* EVENTS */}
                  <div className="mt-3 space-y-2">
                    {dayItem.events.map((evt, eIdx) => (
                      <div key={eIdx} className="flex items-start space-x-2">
                        <span className="px-2 py-0.5 rounded bg-[#4A1521] text-[#FAF6EE] text-[10px] font-bold tracking-wider font-cinzel shrink-0 border border-[#C5A059]/30 mt-0.5">
                          {evt.time}
                        </span>
                        <div>
                          <p className="text-xs font-bold text-[#4A1521] uppercase font-playfair">
                            {evt.title}
                          </p>
                          {evt.detail && (
                            <p className="text-[11px] text-[#4A3728]/80 font-body">
                              {evt.detail}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

    </section>
  );
}
