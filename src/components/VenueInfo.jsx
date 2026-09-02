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

      {/* VENUE & PROCESSION CARDS ROW (SIDE BY SIDE NEXT TO LOCATION) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        
        {/* CARD 1: SACRED VENUE LOCATION */}
        <div className="p-4 rounded-xl border border-[#C5A059]/35 bg-[#FAF6EE]/80 space-y-3 flex flex-col justify-between hover:border-[#C5A059]/70 transition-all">
          <div className="space-y-2">
            <div className="flex items-center space-x-2 text-[#4A1521]">
              <MapPin className="w-4 h-4 text-[#C5A059] shrink-0" />
              <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.18em] uppercase text-[#8B6B38] font-sans">
                SACRED VENUE
              </span>
            </div>

            <div className="space-y-0.5 pt-0.5">
              <h3 className="text-sm sm:text-base font-serif font-black text-[#4A1521] uppercase tracking-wide font-playfair leading-tight">
                {FESTIVAL_INFO.venue.title}
              </h3>
              <p className="text-xs font-sans font-medium text-[#4A3728]">
                {FESTIVAL_INFO.venue.area}
              </p>
              <p className="text-[11px] font-sans text-[#8B6B38] uppercase tracking-wider">
                {FESTIVAL_INFO.venue.city}
              </p>
            </div>
          </div>

          <div className="pt-2 border-t border-[#C5A059]/20">
            <a
              href={FESTIVAL_INFO.venue.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center space-x-1.5 text-[11px] font-bold tracking-[0.16em] uppercase text-[#4A1521] hover:text-[#C5A059] transition-colors font-sans"
            >
              <span>GET DIRECTIONS</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#C5A059]" />
            </a>
          </div>
        </div>

        {/* CARD 2: GRAND PROCESSION (NEXT TO LOCATION CARD) */}
        <div className="p-4 rounded-xl border border-[#C5A059]/40 bg-[#4A1521] text-[#FAF6EE] space-y-3 flex flex-col justify-between shadow-sm relative overflow-hidden group hover:border-[#C5A059] transition-all">
          {/* AMBIENT LIGHT BACKDROP */}
          <div className="absolute inset-0 bg-radial from-[#8B1E32]/35 via-transparent to-black/50 pointer-events-none" />

          <div className="space-y-2 relative z-10">
            <div className="flex items-center justify-between">
              <span className="px-2 py-0.5 rounded-full bg-[#E6C687] text-[#4A1521] text-[9px] font-extrabold tracking-widest font-sans uppercase shadow-2xs">
                20 SEP • 3:00 PM
              </span>
              <Sparkles className="w-3.5 h-3.5 text-[#E6C687]" />
            </div>

            <div className="space-y-0.5 pt-0.5">
              <h3 className="text-sm sm:text-base font-serif font-black text-[#FAF6EE] uppercase tracking-wide font-playfair leading-tight">
                GRAND PROCESSION
              </h3>
              <p className="text-[10px] font-sans font-semibold tracking-wider text-[#E6C687] uppercase">
                BAND • DEVOTION • UNITY • JOY
              </p>
            </div>
          </div>

          <div className="pt-2 border-t border-[#C5A059]/30 relative z-10">
            <a
              href="#procession"
              onClick={handleProcessionClick}
              className="group inline-flex items-center space-x-1.5 text-[11px] font-bold tracking-[0.14em] uppercase text-[#E6C687] hover:text-white transition-colors font-sans"
            >
              <span>VIEW PROCESSION</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1 text-[#E6C687]" />
            </a>
          </div>
        </div>

      </div>

    </motion.div>
  );
}
