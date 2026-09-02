import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import bgMandala from '../assets/background.png';
import ganeshImg from '../assets/ganesh.png';
import FloralDecorations from './FloralDecorations';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Mouse move handler for subtle desktop parallax
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 12;
      const y = (clientY / window.innerHeight - 0.5) * 12;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleScrollClick = (e) => {
    e.preventDefault();
    const journeyEl = document.getElementById('journey');
    if (journeyEl) {
      journeyEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Stagger container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.75, ease: [0.215, 0.61, 0.355, 1] }
    }
  };

  const dominantFocusVariants = {
    hidden: { opacity: 0, y: 25, scale: 0.97 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section 
      id="home"
      className="relative min-h-[100svh] w-full bg-[#FAF3E0] flex flex-col justify-between pt-24 md:pt-28 lg:pt-30 pb-4 overflow-hidden select-none"
    >
      {/* HERO MANDALA BACKGROUND */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-multiply pointer-events-none"
        style={{ backgroundImage: `url(${bgMandala})` }}
      />

      {/* ELEGANT GOLD CORNER MANDALAS & ACCENTS */}
      <FloralDecorations />

      {/* MAIN HERO CONTENT CONTAINER */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto flex flex-col items-center">
        
        {/* 1. TOP BANNER: CENTERED ACROSS THE ENTIRE WEBSITE */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full flex justify-center text-center pb-2.5 sm:pb-4 md:pb-5"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center justify-center">
            <div className="flex items-center space-x-2.5 sm:space-x-3.5 text-[#8B6B38]">
              <div className="h-[1.5px] w-10 sm:w-20 md:w-28 lg:w-36 bg-gradient-to-r from-transparent via-[#C5A059]/70 to-[#C5A059]" />
              <span className="text-xs sm:text-sm text-[#C5A059]">✦</span>
              <span className="text-sm sm:text-base md:text-lg lg:text-xl font-extrabold tracking-[0.24em] font-cinzel text-[#8B6B38] uppercase whitespace-nowrap">
                CHOKLATTY BOYZ • SINCE 2015
              </span>
              <span className="text-xs sm:text-sm text-[#C5A059]">✦</span>
              <div className="h-[1.5px] w-10 sm:w-20 md:w-28 lg:w-36 bg-gradient-to-l from-transparent via-[#C5A059]/70 to-[#C5A059]" />
            </div>
          </motion.div>
        </motion.div>

        {/* 2. HERO CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center w-full">
          
          {/* LEFT SIDE: TYPOGRAPHY & CTAS (Cols 1-7 Desktop) */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-2.5 sm:space-y-3"
            style={{
              transform: `translate3d(${mousePosition.x * 0.35}px, ${mousePosition.y * 0.35}px, 0)`
            }}
          >

            {/* 2. HEADING GROUP: OUR (Burgundy) + 12TH YEAR (Gold) */}
            <div className="flex flex-col space-y-0">
              <motion.span 
                variants={itemVariants}
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif text-[#4A1521] tracking-[0.16em] font-bold uppercase font-playfair"
              >
                OUR
              </motion.span>
              
              {/* DOMINANT VISUAL FOCUS: 12TH YEAR IN RICH ANTIQUE GOLD */}
              <motion.h1 
                variants={dominantFocusVariants}
                className="text-[2.2rem] sm:text-[3.2rem] md:text-[4rem] lg:text-[4.6rem] xl:text-[5.2rem] leading-[0.9] font-black text-gold-gradient font-serif tracking-tight font-playfair drop-shadow-xs"
              >
                12<span className="text-[0.65em] align-top font-serif">TH</span> YEAR
              </motion.h1>
            </div>

            {/* 3. SUB-HEADING: ──❧ OUR GANESH ❧── */}
            <motion.div variants={itemVariants} className="flex items-center justify-center lg:justify-start space-x-2 w-full pt-0.5">
              <span className="text-[#C5A059] text-xs sm:text-base">──❧</span>
              <span className="text-base sm:text-lg md:text-xl font-extrabold tracking-[0.18em] text-[#4A1521] font-cinzel uppercase">
                OUR GANESH
              </span>
              <span className="text-[#C5A059] text-xs sm:text-base">☙──</span>
            </motion.div>

            {/* 4. DESCRIPTION PARAGRAPHS */}
            <motion.div variants={itemVariants} className="max-w-lg text-[#4A3728] space-y-0.5">
              <p className="text-xs sm:text-sm md:text-base font-light leading-relaxed font-body">
                Eleven years of devotion, togetherness and unforgettable memories.
              </p>
              <p className="text-sm sm:text-base md:text-lg font-bold text-[#4A1521] leading-relaxed font-marcellus">
                Now we celebrate our 12th chapter.
              </p>
            </motion.div>

            {/* 5. YEAR DIVIDER: 2015 ── ✦ ── 2026 */}
            <motion.div variants={itemVariants} className="py-0.5 w-full max-w-xs sm:max-w-sm">
              <div className="flex items-center justify-center lg:justify-start space-x-3 text-[#8B6B38]">
                <span className="text-xs sm:text-sm font-bold tracking-widest font-cinzel text-[#4A1521]">2015</span>
                <div className="flex-1 h-[1px] bg-gradient-to-r from-[#C5A059]/20 via-[#C5A059] to-[#C5A059]/20 relative flex items-center justify-center">
                  <span className="bg-[#FAF3E0] px-2 text-[#C5A059] text-[10px]">✦</span>
                </div>
                <span className="text-xs sm:text-sm font-bold tracking-widest font-cinzel text-[#4A1521]">2026</span>
              </div>
            </motion.div>

            {/* 6. PRIMARY & SECONDARY CTAS */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-2.5 sm:space-y-0 sm:space-x-3.5 pt-1.5 w-full sm:w-auto"
            >
              {/* PRIMARY CTA */}
              <a
                href="#journey"
                onClick={handleScrollClick}
                className="group relative inline-flex items-center justify-center bg-[#4A1521] text-[#FAF6EE] px-5 py-3 rounded-lg border border-[#C5A059]/50 shadow-md hover:shadow-lg hover:bg-[#3D0F19] transition-all duration-300 transform hover:-translate-y-0.5 w-full sm:w-auto font-bold text-xs tracking-wider uppercase font-cinzel"
              >
                <span>ENTER THE 12TH CHAPTER</span>
                <ArrowRight className="w-3.5 h-3.5 ml-2 transition-transform duration-300 group-hover:translate-x-1 text-[#E6C687]" />
              </a>

              {/* SECONDARY CTA WITH CIRCULAR ICON */}
              <a
                href="#journey"
                onClick={handleScrollClick}
                className="group inline-flex items-center justify-center bg-transparent text-[#3B2820] px-5 py-3 rounded-lg border border-[#C5A059] hover:border-[#4A1521] hover:bg-[#FAF6EE] transition-all duration-300 w-full sm:w-auto font-bold text-xs tracking-wider uppercase font-cinzel"
              >
                <span>EXPLORE JOURNEY</span>
                <span className="ml-2 p-1 rounded-full border border-[#C5A059] text-[#C5A059] group-hover:border-[#4A1521] group-hover:text-[#4A1521] transition-colors">
                  <ArrowRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5" />
                </span>
              </a>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE: GANESH IMAGE VISUAL (Cols 8-12 Desktop) */}
          <div className="lg:col-span-5 flex items-center justify-center relative mt-4 lg:mt-0">
            
            {/* MASKED GANESH PRESENTATION */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, filter: 'blur(8px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
              style={{
                transform: `translate3d(${mousePosition.x * -0.25}px, ${mousePosition.y * -0.25}px, 0)`
              }}
              className="relative w-full max-w-sm sm:max-w-md lg:max-w-none flex items-center justify-center"
            >
              {/* BACKDROP WARM GOLDEN AMBIENT LIGHT */}
              <div className="absolute inset-0 rounded-full bg-amber-400/25 blur-3xl scale-125 pointer-events-none" />

              {/* THE GANESH IMAGE WITH MIX-BLEND-MODE SCREEN & RADIAL EDGE FADE */}
              <img
                src={ganeshImg}
                alt="Lord Ganesh 2026 Hero Idol"
                className="w-full h-auto max-h-[46vh] sm:max-h-[54vh] md:max-h-[62vh] lg:max-h-[68vh] object-contain select-none transition-transform duration-500 hover:scale-[1.02]"
                style={{
                  mixBlendMode: 'screen',
                  filter: 'contrast(1.08) brightness(1.04)',
                  maskImage: 'radial-gradient(ellipse 85% 85% at 50% 50%, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 95%)',
                  WebkitMaskImage: 'radial-gradient(ellipse 85% 85% at 50% 50%, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 95%)'
                }}
              />
            </motion.div>
          </div>

        </div>
      </div>

      {/* SCROLL INDICATOR WITH MOUSE ICON */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="relative z-10 flex flex-col items-center justify-center text-center mt-2"
      >
        <a
          href="#journey"
          onClick={handleScrollClick}
          className="group flex flex-col items-center space-y-1.5 focus:outline-none"
        >
          <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.25em] text-[#8B6B38] group-hover:text-[#4A1521] uppercase font-cinzel transition-colors">
            SCROLL TO DISCOVER
          </span>

          {/* MOUSE ICON WITH ANIMATED WHEEL DOT */}
          <div className="w-5 h-8 rounded-full border-2 border-[#8B6B38]/60 group-hover:border-[#4A1521] flex justify-center pt-1.5 transition-colors">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1 h-2 bg-[#8B6B38] group-hover:bg-[#4A1521] rounded-full transition-colors"
            />
          </div>
        </a>
      </motion.div>
    </section>
  );
}
