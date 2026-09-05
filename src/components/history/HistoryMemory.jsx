import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Sparkles, ArrowRight } from 'lucide-react';
import MemoryVideo from './MemoryVideo';
import MemoryVideoModal from './MemoryVideoModal';

export default function HistoryMemory({ data, onPrevYear, onNextYear, onOpenArchiveModal }) {
  const [imgError, setImgError] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  // Reset image error state & video modal state whenever selected year changes
  useEffect(() => {
    setImgError(false);
    setIsVideoModalOpen(false);
  }, [data.year]);

  return (
    <div className="w-full relative z-10 my-3 sm:my-6">
      
      {/* MAIN EDITORIAL SPREAD CONTAINER */}
      <div className="relative max-w-[1340px] mx-auto px-1 sm:px-6">
        
        {/* DESKTOP/TABLET CAROUSEL PREV BUTTON (LEFT FLOATING ARROW) */}
        <button
          type="button"
          onClick={onPrevYear}
          aria-label="View previous chapter year"
          className="hidden sm:flex absolute -left-3 sm:-left-4 lg:-left-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#3B1319] hover:bg-[#4A1521] text-[#D4AF37] border-2 border-[#C5A059]/60 items-center justify-center shadow-xl transition-all hover:scale-110 active:scale-95 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5]" />
        </button>

        {/* DESKTOP/TABLET CAROUSEL NEXT BUTTON (RIGHT FLOATING ARROW) */}
        <button
          type="button"
          onClick={onNextYear}
          aria-label="View next chapter year"
          className="hidden sm:flex absolute -right-3 sm:-right-4 lg:-right-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#3B1319] hover:bg-[#4A1521] text-[#D4AF37] border-2 border-[#C5A059]/60 items-center justify-center shadow-xl transition-all hover:scale-110 active:scale-95 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5]" />
        </button>

        {/* EDITORIAL BOARD FRAME WITH SCALLOPED CORNERS AND GOLD TRIM */}
        <div className="mx-1 sm:mx-8 lg:mx-10 rounded-2xl sm:rounded-3xl border-2 border-[#C5A059]/50 shadow-2xl overflow-hidden bg-[#FAF3E0] relative">
          
          {/* VINTAGE CORNER ORNAMENT ACCENTS */}
          <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#D4AF37] pointer-events-none z-20" />
          <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[#D4AF37] pointer-events-none z-20" />
          <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[#D4AF37] pointer-events-none z-20" />
          <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[#D4AF37] pointer-events-none z-20" />

          {/* MOBILE PREV/NEXT QUICK CONTROLS TOP STRIP */}
          <div className="flex sm:hidden items-center justify-between bg-[#3B1319] text-[#D4AF37] px-4 py-2.5 border-b border-[#C5A059]/40 text-xs font-bold font-cinzel">
            <button
              type="button"
              onClick={onPrevYear}
              className="flex items-center space-x-1 hover:text-white active:scale-95 transition-transform"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>PREV YEAR</span>
            </button>
            <span className="text-[#E6C687] text-[11px] tracking-widest">{data.year} • {data.chapter}</span>
            <button
              type="button"
              onClick={onNextYear}
              className="flex items-center space-x-1 hover:text-white active:scale-95 transition-transform"
            >
              <span>NEXT YEAR</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* ANIMATED CONTENT SPREAD */}
          <AnimatePresence mode="wait">
            <motion.div
              key={data.year}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="grid grid-cols-1 lg:grid-cols-12 min-h-[400px] sm:min-h-[480px] lg:min-h-[520px]"
            >
              
              {/* LEFT DEEP MAROON INFORMATION PANEL (COLS 1-5 ON DESKTOP) */}
              <div className="lg:col-span-5 bg-gradient-to-br from-[#4A1521] via-[#3D101A] to-[#2B0A11] text-[#FAF3E0] p-5 sm:p-8 lg:p-10 flex flex-col justify-between relative overflow-hidden border-b lg:border-b-0 lg:border-r border-[#C5A059]/40">
                
                {/* BACKGROUND WATERMARK LOTUS ART */}
                <div className="absolute -bottom-10 -left-10 w-48 h-48 opacity-10 pointer-events-none">
                  <svg viewBox="0 0 200 200" className="w-full h-full fill-[#D4AF37]">
                    <circle cx="100" cy="100" r="90" fill="none" stroke="currentColor" strokeWidth="2" />
                    <path d="M100 20 C110 50 150 50 150 100 C150 150 110 150 100 180 C90 150 50 150 50 100 C50 50 90 50 100 20 Z" />
                  </svg>
                </div>

                {/* TOP CHAPTER & YEAR BADGE */}
                <div>
                  <div className="flex items-center space-x-2 text-[#D4AF37] text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] mb-1.5 sm:mb-2 font-cinzel">
                    <span>≫</span>
                    <span>{data.chapter}</span>
                    <span>≪</span>
                  </div>

                  {/* OVERSIZED YEAR DISPLAY */}
                  <h3 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-playfair text-transparent bg-clip-text bg-gradient-to-br from-[#F5E1A4] via-[#D4AF37] to-[#B8860B] tracking-tight leading-none my-1 drop-shadow">
                    {data.year}
                  </h3>

                  {/* ELEGANT TITLE */}
                  <h4 className="text-base sm:text-xl md:text-2xl font-bold font-playfair text-[#FAF3E0] uppercase tracking-wide leading-snug mt-2 mb-2 sm:mt-3 sm:mb-3 border-b border-[#C5A059]/30 pb-2 sm:pb-3">
                    {data.title}
                  </h4>

                  {/* DESCRIPTION */}
                  <p className="text-xs sm:text-sm md:text-base text-[#E8DDD0] leading-relaxed font-body font-light">
                    {data.description}
                  </p>
                </div>

                {/* BOTTOM ACCENT DETAIL */}
                <div className="pt-4 mt-6 border-t border-[#C5A059]/20 flex items-center justify-between text-[11px] text-[#C5A059] font-cinzel">
                  <span className="flex items-center space-x-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span className="tracking-wider">{data.subtitle}</span>
                  </span>
                  <span className="text-[#E6C687]/80 font-mono">11 YEARS</span>
                </div>
              </div>

              {/* RIGHT LARGE PANEL: 2025 VIDEO PREVIEW OR HISTORICAL PHOTOGRAPH (COLS 6-12 ON DESKTOP) */}
              <div className="lg:col-span-7 relative min-h-[300px] sm:min-h-[380px] lg:min-h-full bg-[#2A0E15] overflow-hidden flex flex-col justify-between p-4 sm:p-6 lg:p-8 border-t lg:border-t-0 border-[#C5A059]/40">
                
                {data.video ? (
                  /* 2025 VIDEO PREVIEW IN RIGHT PANEL */
                  <div className="relative w-full h-full flex flex-col justify-between">
                    <MemoryVideo 
                      data={data}
                      onOpenModal={() => setIsVideoModalOpen(true)} 
                    />

                  </div>
                ) : (
                  /* HISTORICAL PHOTO DISPLAY FOR OTHER YEARS */
                  <div className="relative w-full h-full flex flex-col justify-between">
                    <div className="relative w-full h-full min-h-[240px] sm:min-h-[320px] rounded-2xl overflow-hidden bg-black/40 border border-[#C5A059]/30 shadow-inner flex items-center justify-center">
                      {!imgError ? (
                        <img
                          src={data.image}
                          alt={`Choklaty Boyz KGF Ganesh Festival ${data.year} celebration`}
                          onError={() => setImgError(true)}
                          className="w-full h-full object-cover object-center absolute inset-0 transition-transform duration-700 hover:scale-105"
                        />
                      ) : (
                        /* ELEGANT EDITORIAL PHOTO PLACEHOLDER */
                        <div className="w-full h-full inset-0 absolute bg-gradient-to-br from-[#3D101A] via-[#2A0E15] to-[#1F080D] p-8 flex flex-col items-center justify-center text-center relative overflow-hidden border-l border-[#C5A059]/30">
                          
                          {/* PARCHMENT GRAIN PATTERN & MANDALA RING */}
                          <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full border border-[#C5A059]/20 absolute flex items-center justify-center pointer-events-none animate-pulse">
                            <div className="w-48 h-48 sm:w-60 sm:h-60 rounded-full border border-[#C5A059]/15" />
                          </div>

                          {/* SACRED EMBLEM */}
                          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#4A1521] border-2 border-[#D4AF37] flex items-center justify-center mb-4 text-[#D4AF37] shadow-xl relative z-10">
                            <span className="text-3xl sm:text-4xl font-serif">ॐ</span>
                          </div>

                          {/* PLACEHOLDER TITLES */}
                          <p className="text-xs font-mono uppercase tracking-[0.3em] text-[#D4AF37] mb-1 relative z-10">
                            HISTORICAL ARCHIVE
                          </p>
                          <h5 className="text-2xl sm:text-3xl font-bold font-playfair text-[#FAF3E0] mb-2 relative z-10">
                            {data.year} CELEBRATION
                          </h5>
                          <p className="text-xs text-[#C5A059]/80 max-w-sm relative z-10">
                            Historical photograph for Chapter {data.chapterNumber} ({data.year}).
                          </p>
                        </div>
                      )}

                      {/* OVERLAY GRADIENT VIGNETTE ON IMAGE */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

                      {/* PHOTO BADGE */}
                      <div className="absolute bottom-3 left-3 bg-[#4A1521]/90 text-[#D4AF37] border border-[#D4AF37]/50 text-[10px] font-mono px-3 py-1 rounded-full uppercase tracking-widest shadow-md backdrop-blur-xs">
                        {data.year} HISTORICAL PHOTO
                      </div>
                    </div>

                  </div>
                )}

              </div>

            </motion.div>
          </AnimatePresence>

        </div>

      </div>

      {/* FULL-SCREEN 2025 VIDEO PLAYBACK MODAL */}
      {data.video && (
        <MemoryVideoModal
          isOpen={isVideoModalOpen}
          videoUrl={data.video}
          posterUrl={data.image}
          title={data.videoTitle || "2025 IN MOTION"}
          subtitle={data.subtitle || "A Sacred Prelude to 12 Years"}
          description={data.videoDescription || "A glimpse of our devotion, celebration and togetherness."}
          year={data.year}
          chapter={data.chapter}
          onClose={() => setIsVideoModalOpen(false)}
        />
      )}

    </div>
  );
}
