import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Music, Heart, Shield, Flame } from 'lucide-react';
import ganeshImg from '../assets/Ganesh.png';

export default function GrandProcession() {
  const handleCtaClick = (e) => {
    e.preventDefault();
    const el = document.querySelector('#home');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      
      {/* CARD CONTAINER WITH GOLD BORDER & DARK BURGUNDY ACCENTS */}
      <div className="relative rounded-3xl border border-[#C5A059]/40 bg-[#3D0F19] text-[#FAF6EE] overflow-hidden shadow-xl">
        
        {/* BACKGROUND AMBIENT PARTICLES & GLOW */}
        <div className="absolute inset-0 bg-radial from-[#8B1E32]/30 via-transparent to-black/60 pointer-events-none" />
        <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-amber-500/15 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-80 h-80 rounded-full bg-amber-400/20 blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          
          {/* LEFT (DESKTOP) / TOP (MOBILE): IMMERSIVE PROCESSION VISUAL */}
          <div className="lg:col-span-6 relative min-h-[280px] sm:min-h-[360px] lg:min-h-[440px] flex items-center justify-center p-6 bg-[#2B0A12]/80 border-b lg:border-b-0 lg:border-r border-[#C5A059]/30">
            
            {/* AMBIENT LIGHT BACKLIGHT */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#1E050B] via-transparent to-[#8B1E32]/20 pointer-events-none" />

            {/* PROCESSiON HERO IMAGE PRESENTATION */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="relative w-full max-w-sm sm:max-w-md flex flex-col items-center text-center z-10"
            >
              <div className="relative w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full border-2 border-[#C5A059]/50 p-2 shadow-2xl flex items-center justify-center bg-gradient-to-b from-[#4A1521] to-[#1E050B]">
                <img
                  src={ganeshImg}
                  alt="2026 Grand Procession Idol"
                  className="w-full h-full object-contain filter drop-shadow-xl select-none"
                  style={{
                    maskImage: 'radial-gradient(circle at 50% 50%, rgba(0,0,0,1) 75%, rgba(0,0,0,0) 100%)',
                    WebkitMaskImage: 'radial-gradient(circle at 50% 50%, rgba(0,0,0,1) 75%, rgba(0,0,0,0) 100%)'
                  }}
                />
              </div>

              {/* FLOATING BADGE */}
              <div className="mt-4 px-4 py-1.5 rounded-full border border-[#C5A059]/60 bg-[#1E050B]/90 backdrop-blur-xs text-[#E6C687] text-xs font-bold font-cinzel tracking-widest uppercase shadow-md flex items-center space-x-2">
                <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>20 SEP 2026 • 3:00 PM</span>
              </div>
            </motion.div>
          </div>

          {/* RIGHT (DESKTOP) / BELOW (MOBILE): PROCESSION CONTENT */}
          <div className="lg:col-span-6 p-6 sm:p-8 md:p-10 flex flex-col items-center lg:items-start text-center lg:text-left space-y-4">
            
            {/* SUBTITLE */}
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs sm:text-sm font-extrabold tracking-[0.22em] text-[#E6C687] uppercase font-cinzel block"
            >
              THE HIGHLIGHT OF OUR CELEBRATION
            </motion.span>

            {/* DATE */}
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="text-sm sm:text-base font-serif font-bold text-[#C5A059] tracking-wider uppercase block"
            >
              20 SEPTEMBER 2026
            </motion.span>

            {/* MAIN HEADING */}
            <motion.h3
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#FAF6EE] font-playfair uppercase leading-tight"
            >
              THE GRAND PROCESSION
            </motion.h3>

            {/* PILLARS / BADGES */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1"
            >
              {['BAND', 'DEVOTION', 'UNITY', 'CELEBRATION'].map((pill, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-md bg-[#FAF6EE]/10 border border-[#C5A059]/40 text-[#E6C687] text-[11px] font-bold tracking-widest font-cinzel uppercase"
                >
                  {pill}
                </span>
              ))}
            </motion.div>

            {/* BODY TEXT */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-sm sm:text-base md:text-lg font-bold text-[#E6C687] font-marcellus leading-relaxed max-w-md pt-1"
            >
              LET'S CELEBRATE OUR 12TH YEAR TOGETHER WITH FAITH, JOY & DEVOTION.
            </motion.p>

            {/* CTA BUTTON */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
              className="pt-2"
            >
              <a
                href="#home"
                onClick={handleCtaClick}
                className="group inline-flex items-center justify-center bg-gradient-to-r from-[#C5A059] to-[#99732B] text-[#2B0A12] px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm tracking-wider uppercase font-cinzel shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
              >
                <span>JOIN US IN THIS DIVINE CELEBRATION</span>
                <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </motion.div>

          </div>

        </div>

      </div>

    </section>
  );
}
