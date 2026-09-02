import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowUpRight, ArrowRight, Sparkles } from 'lucide-react';
import { FESTIVAL_INFO } from '../data/festival';

export default function VenueCardsRow() {
  const handleProcessionClick = (e) => {
    e.preventDefault();
    const el = document.querySelector('#journey');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="w-full my-8"
    >
      {/* 50/50 FULL-WIDTH TWIN CARDS ROW (COVERS THE ENTIRE PAGE WIDTH) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full">
        
        {/* CARD 1: SACRED VENUE LOCATION (50% FULL WIDTH) */}
        <div className="p-6 sm:p-8 md:p-9 rounded-2xl border border-[#C5A059]/40 bg-[#FAF6EE]/90 backdrop-blur-xs space-y-5 flex flex-col items-center text-center justify-between shadow-xs hover:border-[#C5A059]/80 hover:shadow-md transition-all">
          <div className="space-y-4 flex flex-col items-center w-full">
            <div className="flex items-center justify-center space-x-2 text-[#4A1521]">
              <MapPin className="w-5 h-5 text-[#C5A059] shrink-0" />
              <span className="text-xs sm:text-sm font-bold tracking-[0.22em] uppercase text-[#8B6B38] font-sans">
                SACRED VENUE LOCATION
              </span>
            </div>

            <div className="space-y-1.5 text-center">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-black text-[#4A1521] uppercase tracking-wide font-playfair leading-tight">
                {FESTIVAL_INFO.venue.title}
              </h3>
              <p className="text-sm sm:text-base font-sans font-bold text-[#4A3728]">
                {FESTIVAL_INFO.venue.area}
              </p>
              <p className="text-xs sm:text-sm font-sans text-[#8B6B38] uppercase tracking-widest">
                {FESTIVAL_INFO.venue.city}
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-[#C5A059]/25 w-full flex justify-center">
            <a
              href={FESTIVAL_INFO.venue.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center space-x-2 text-xs sm:text-sm font-bold tracking-[0.18em] uppercase text-[#4A1521] hover:text-[#C5A059] transition-colors font-sans"
            >
              <span>GET DIRECTIONS</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#C5A059]" />
            </a>
          </div>
        </div>

        {/* CARD 2: GRAND PROCESSION (50% FULL WIDTH) */}
        <div className="p-6 sm:p-8 md:p-9 rounded-2xl border border-[#C5A059]/50 bg-[#4A1521] text-[#FAF6EE] space-y-5 flex flex-col items-center text-center justify-between shadow-md relative overflow-hidden group hover:border-[#C5A059] transition-all">
          {/* AMBIENT LIGHT BACKDROP */}
          <div className="absolute inset-0 bg-radial from-[#8B1E32]/45 via-transparent to-black/60 pointer-events-none" />

          <div className="space-y-4 flex flex-col items-center relative z-10 w-full">
            <div className="flex items-center justify-center space-x-2">
              <span className="px-3.5 py-1 rounded-full bg-[#E6C687] text-[#4A1521] text-xs font-extrabold tracking-widest font-sans uppercase shadow-2xs">
                20 SEP • 3:00 PM
              </span>
              <Sparkles className="w-4 h-4 text-[#E6C687]" />
            </div>

            <div className="space-y-1.5 text-center">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-black text-[#FAF6EE] uppercase tracking-wide font-playfair leading-tight">
                GRAND PROCESSION
              </h3>
              <p className="text-xs sm:text-sm font-sans font-semibold tracking-widest text-[#E6C687] uppercase">
                BAND • DEVOTION • UNITY • JOY
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-[#C5A059]/35 relative z-10 w-full flex justify-center">
            <a
              href="#journey"
              onClick={handleProcessionClick}
              className="group inline-flex items-center space-x-2 text-xs sm:text-sm font-bold tracking-[0.18em] uppercase text-[#E6C687] hover:text-white transition-colors font-sans"
            >
              <span>PROCESSION HIGHLIGHTS</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 text-[#E6C687]" />
            </a>
          </div>
        </div>

      </div>
    </motion.div>
  );
}
