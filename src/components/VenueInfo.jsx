import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowUpRight, ArrowRight } from 'lucide-react';
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
      className="flex flex-col space-y-6"
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
            className="w-full h-auto max-h-[340px] sm:max-h-[400px] object-contain select-none transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            style={{
              maskImage: 'radial-gradient(ellipse 94% 94% at 50% 50%, rgba(0,0,0,1) 82%, rgba(0,0,0,0) 100%)',
              WebkitMaskImage: 'radial-gradient(ellipse 94% 94% at 50% 50%, rgba(0,0,0,1) 82%, rgba(0,0,0,0) 100%)'
            }}
          />
        </div>

        {/* SUBTLE CAPTION BADGE */}
        <div className="mt-3 flex items-center justify-between text-[11px] text-[#8B6B38] font-sans px-1">
          <span className="font-semibold uppercase tracking-wider font-playfair text-[#4A1521]">
            SWARNAKUPPAM IDOL
          </span>
          <span className="tracking-widest uppercase text-[10px]">
            2026 EDITION
          </span>
        </div>
      </div>

      {/* VENUE INFORMATION BLOCK */}
      <div className="p-4 sm:p-5 rounded-xl border border-[#C5A059]/30 bg-[#FAF6EE]/70 space-y-3">
        <div className="flex items-center space-x-2 text-[#4A1521]">
          <MapPin className="w-4 h-4 text-[#C5A059] shrink-0" />
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#8B6B38] font-sans">
            SACRED VENUE LOCATION
          </span>
        </div>

        <div className="space-y-0.5 pt-0.5">
          <h3 className="text-base sm:text-lg font-serif font-black text-[#4A1521] uppercase tracking-wide font-playfair leading-tight">
            {FESTIVAL_INFO.venue.title}
          </h3>
          <p className="text-xs sm:text-sm font-sans font-medium text-[#4A3728]">
            {FESTIVAL_INFO.venue.area}
          </p>
          <p className="text-xs font-sans text-[#8B6B38] uppercase tracking-wider">
            {FESTIVAL_INFO.venue.city}
          </p>
        </div>

        {/* EDITORIAL TEXT LINKS ROW */}
        <div className="pt-3 border-t border-[#C5A059]/20 flex flex-wrap items-center justify-between gap-2.5">
          <a
            href={FESTIVAL_INFO.venue.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center space-x-1.5 text-xs font-bold tracking-[0.16em] uppercase text-[#4A1521] hover:text-[#C5A059] transition-colors font-sans"
          >
            <span>GET DIRECTIONS</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#C5A059]" />
          </a>

          <a
            href="#procession"
            onClick={handleProcessionClick}
            className="group inline-flex items-center space-x-1.5 text-xs font-bold tracking-[0.14em] uppercase text-[#4A1521] hover:text-[#C5A059] transition-colors font-sans"
          >
            <span>GRAND PROCESSION • 20 SEP</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1 text-[#C5A059]" />
          </a>
        </div>
      </div>

    </motion.div>
  );
}
