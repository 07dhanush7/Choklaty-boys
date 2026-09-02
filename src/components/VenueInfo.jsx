import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowUpRight, ArrowRight, Sparkles } from 'lucide-react';
import ganeshImg from '../assets/Ganesh.png';
import { FESTIVAL_INFO } from '../data/festival';

export default function VenueInfo() {
  const handleProcessionClick = (e) => {
    e.preventDefault();
    const el = document.querySelector('#procession');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="flex flex-col space-y-5"
    >
      {/* EDITORIAL GANESH FRAME */}
      <div className="relative group rounded-2xl overflow-hidden border border-[#C5A059]/35 bg-[#FAF6EE]/80 p-3 sm:p-4 backdrop-blur-xs transition-all duration-500 hover:border-[#C5A059]/70">
        
        {/* INNER PAPER FRAME */}
        <div className="relative rounded-xl overflow-hidden bg-gradient-to-b from-[#FAF3E0] to-[#F5EAD4] p-3 flex items-center justify-center border border-[#C5A059]/20">
          
          {/* SOFT AMBIENT LIGHT BACKLIGHT */}
          <div className="absolute inset-0 bg-amber-400/15 blur-2xl rounded-full scale-110 pointer-events-none" />

          {/* GANESH IDOL IMAGE */}
          <img
            src={ganeshImg}
            alt="Lord Ganesh 2026 Hero Idol"
            className="w-full h-auto max-h-[320px] sm:max-h-[380px] object-contain select-none transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            style={{
              maskImage: 'radial-gradient(ellipse 94% 94% at 50% 50%, rgba(0,0,0,1) 82%, rgba(0,0,0,0) 100%)',
              WebkitMaskImage: 'radial-gradient(ellipse 94% 94% at 50% 50%, rgba(0,0,0,1) 82%, rgba(0,0,0,0) 100%)'
            }}
          />
        </div>

        {/* SUBTLE CAPTION BADGE */}
        <div className="mt-2.5 flex items-center justify-between text-[11px] text-[#8B6B38] font-sans px-1">
          <span className="font-semibold uppercase tracking-wider font-playfair text-[#4A1521]">
            SWARNAKUPPAM IDOL
          </span>
          <span className="tracking-widest uppercase text-[10px]">
            2026 EDITION
          </span>
        </div>
      </div>

      {/* VENUE & PROCESSION CARDS ROW (BIGGER & CENTERED) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
        
        {/* CARD 1: SACRED VENUE LOCATION (BIGGER & CENTERED) */}
        <div className="p-5 sm:p-6 md:p-7 rounded-2xl border border-[#C5A059]/40 bg-[#FAF6EE]/90 backdrop-blur-xs space-y-4 flex flex-col items-center text-center justify-between shadow-xs hover:border-[#C5A059]/80 hover:shadow-md transition-all">
          <div className="space-y-3 flex flex-col items-center">
            <div className="flex items-center justify-center space-x-2 text-[#4A1521]">
              <MapPin className="w-4 h-4 text-[#C5A059] shrink-0" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#8B6B38] font-sans">
                SACRED VENUE LOCATION
              </span>
            </div>

            <div className="space-y-1 pt-0.5 text-center">
              <h3 className="text-base sm:text-lg md:text-xl font-serif font-black text-[#4A1521] uppercase tracking-wide font-playfair leading-tight">
                {FESTIVAL_INFO.venue.title}
              </h3>
              <p className="text-xs sm:text-sm font-sans font-semibold text-[#4A3728]">
                {FESTIVAL_INFO.venue.area}
              </p>
              <p className="text-xs font-sans text-[#8B6B38] uppercase tracking-widest">
                {FESTIVAL_INFO.venue.city}
              </p>
            </div>
          </div>

          <div className="pt-3 border-t border-[#C5A059]/25 w-full flex justify-center">
            <a
              href={FESTIVAL_INFO.venue.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center space-x-2 text-xs sm:text-sm font-bold tracking-[0.16em] uppercase text-[#4A1521] hover:text-[#C5A059] transition-colors font-sans"
            >
              <span>GET DIRECTIONS</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#C5A059]" />
            </a>
          </div>
        </div>

        {/* CARD 2: GRAND PROCESSION (BIGGER & CENTERED) */}
        <div className="p-5 sm:p-6 md:p-7 rounded-2xl border border-[#C5A059]/50 bg-[#4A1521] text-[#FAF6EE] space-y-4 flex flex-col items-center text-center justify-between shadow-md relative overflow-hidden group hover:border-[#C5A059] transition-all">
          {/* AMBIENT LIGHT BACKDROP */}
          <div className="absolute inset-0 bg-radial from-[#8B1E32]/45 via-transparent to-black/60 pointer-events-none" />

          <div className="space-y-3 flex flex-col items-center relative z-10 w-full">
            <div className="flex items-center justify-center space-x-2">
              <span className="px-3 py-1 rounded-full bg-[#E6C687] text-[#4A1521] text-xs font-extrabold tracking-widest font-sans uppercase shadow-2xs">
                20 SEP • 3:00 PM
              </span>
              <Sparkles className="w-4 h-4 text-[#E6C687]" />
            </div>

            <div className="space-y-1 pt-0.5 text-center">
              <h3 className="text-base sm:text-lg md:text-xl font-serif font-black text-[#FAF6EE] uppercase tracking-wide font-playfair leading-tight">
                GRAND PROCESSION
              </h3>
              <p className="text-xs sm:text-sm font-sans font-semibold tracking-widest text-[#E6C687] uppercase">
                BAND • DEVOTION • UNITY • JOY
              </p>
            </div>
          </div>

          <div className="pt-3 border-t border-[#C5A059]/35 relative z-10 w-full flex justify-center">
            <a
              href="#procession"
              onClick={handleProcessionClick}
              className="group inline-flex items-center space-x-2 text-xs sm:text-sm font-bold tracking-[0.16em] uppercase text-[#E6C687] hover:text-white transition-colors font-sans"
            >
              <span>VIEW PROCESSION</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 text-[#E6C687]" />
            </a>
          </div>
        </div>

      </div>

    </motion.div>
  );
}
