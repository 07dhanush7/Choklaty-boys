import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Film, Sparkles, Maximize, Play } from 'lucide-react';

export default function MemoryVideoModal({ isOpen, videoUrl, posterUrl, title, subtitle, description, year, chapter, onClose }) {
  const videoRef = useRef(null);

  // Keyboard Escape listener & Body scroll locking
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Pause video on close/unmount
  useEffect(() => {
    if (!isOpen && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [isOpen]);

  if (!isOpen || !videoUrl) return null;

  return (
    <AnimatePresence>
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 bg-black/90 backdrop-blur-md overflow-y-auto"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-label={`${year} Video Memory Modal`}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          onClick={(e) => e.stopPropagation()}
          className="bg-gradient-to-b from-[#3D101A] via-[#2A0E15] to-[#1A080D] text-[#FAF3E0] rounded-2xl sm:rounded-3xl border-2 border-[#C5A059] shadow-2xl max-w-4xl w-full relative overflow-hidden my-auto flex flex-col max-h-[92vh]"
        >
          
          {/* MODAL HEADER */}
          <div className="bg-[#4A1521]/90 px-4 sm:px-6 py-3.5 sm:py-4 flex items-center justify-between border-b border-[#C5A059]/40 relative">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#2B0A11] border border-[#D4AF37] flex items-center justify-center text-[#D4AF37] shrink-0">
                <Film className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center space-x-2 text-[#D4AF37] text-[10px] sm:text-xs font-mono uppercase tracking-widest">
                  <span>{chapter || 'CHAPTER 11'}</span>
                  <span>•</span>
                  <span>{year || '2025'} IN MOTION</span>
                </div>
                <h3 className="text-base sm:text-xl font-bold font-playfair text-[#FAF3E0] leading-tight">
                  {title || `${year} Celebration Video`}
                </h3>
              </div>
            </div>

            {/* CLOSE BUTTON */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close video player"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#2B0A11] hover:bg-[#FAF3E0] text-[#D4AF37] hover:text-[#4A1521] border border-[#D4AF37]/60 flex items-center justify-center transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#C5A059] shrink-0 ml-2"
            >
              <X className="w-5 h-5 stroke-[2.5]" />
            </button>
          </div>

          {/* VIDEO PLAYER BODY */}
          <div className="p-3 sm:p-6 overflow-y-auto space-y-4 flex-1 flex flex-col items-center justify-center">
            
            {/* FULL RESPONSIVE CINEMATIC VIDEO FRAME */}
            <div className="w-full relative rounded-xl sm:rounded-2xl bg-black border border-[#C5A059]/40 overflow-hidden shadow-2xl aspect-video flex items-center justify-center">
              <video
                ref={videoRef}
                src={videoUrl}
                poster={posterUrl}
                controls
                autoPlay
                playsInline
                preload="metadata"
                className="w-full h-full object-contain bg-black"
              >
                Your browser does not support HTML5 video.
              </video>
            </div>

            {/* CAPTION & DESCRIPTION */}
            <div className="w-full bg-[#2B0A11]/80 p-4 rounded-2xl border border-[#C5A059]/30 space-y-1 text-left">
              <div className="flex items-center justify-between text-xs text-[#D4AF37] font-cinzel font-bold">
                <span>{subtitle || 'A Sacred Prelude to 12 Years'}</span>
                <span className="font-mono text-[11px] text-[#C5A059]/80 uppercase">{year} ARCHIVE</span>
              </div>
              <p className="text-xs sm:text-sm text-[#E8DDD0] leading-relaxed font-body">
                {description || 'A glimpse of our devotion, celebration and togetherness.'}
              </p>
            </div>

          </div>

          {/* FOOTER */}
          <div className="bg-[#2B0A11] px-6 py-3 border-t border-[#C5A059]/30 flex items-center justify-between">
            <span className="text-xs text-[#C5A059] font-mono">
              Choklatty Boyz Swarnakuppam • {chapter || 'Chapter 11'} Video Archive
            </span>

            <button
              type="button"
              onClick={onClose}
              className="bg-[#4A1521] hover:bg-[#3D101A] text-[#FAF3E0] border border-[#C5A059] px-4 py-1.5 rounded-xl text-xs font-bold uppercase tracking-wider font-cinzel transition-all"
            >
              CLOSE VIDEO
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
