import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sun, Moon, Sunset, CalendarDays, Clock } from 'lucide-react';
import { PROGRAMME_DATA } from '../data/programme';

export default function ProgrammeModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
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

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-programme-title"
        >
          {/* BACKDROP */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#1E050B]/60 backdrop-blur-sm z-0"
          />

          {/* MODAL DIALOG CONTAINER */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 w-full max-w-4xl max-h-[85vh] bg-[#FAF6EE] rounded-2xl border border-[#C5A059]/40 p-6 sm:p-8 shadow-2xl overflow-y-auto"
          >
            {/* CLOSE BUTTON */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close complete programme modal"
              className="absolute top-5 right-5 p-2 rounded-full border border-[#C5A059]/40 text-[#4A1521] hover:bg-[#4A1521] hover:text-[#E6C687] transition-all"
            >
              <X className="w-5 h-5" />
            </button>

            {/* HEADER */}
            <div className="pb-6 mb-6 border-b border-[#C5A059]/25 text-left">
              <div className="flex items-center space-x-2 text-[#8B6B38] text-xs font-semibold tracking-[0.2em] uppercase font-sans mb-1">
                <CalendarDays className="w-4 h-4 text-[#C5A059]" />
                <span>FULL FESTIVAL SCHEDULE</span>
              </div>
              <h2 id="modal-programme-title" className="text-2xl sm:text-3xl font-serif font-black text-[#4A1521] font-playfair uppercase">
                12TH GANESH CHATURTHI PROGRAMME
              </h2>
              <p className="text-xs text-[#8B6B38] font-sans tracking-wide uppercase pt-1">
                14 — 20 SEPTEMBER 2026 • SPLV TEMPLE GROUND, K.G.F.
              </p>
            </div>

            {/* 7 DAYS LIST */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {PROGRAMME_DATA.map((dayItem) => (
                <div
                  key={dayItem.day}
                  className="p-5 rounded-xl border border-[#C5A059]/30 bg-white/70 hover:bg-white/90 transition-all space-y-3"
                >
                  {/* DAY TITLE */}
                  <div className="flex items-center justify-between pb-2 border-b border-[#C5A059]/20">
                    <div className="flex items-center space-x-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-[#4A1521] text-[#E6C687] text-[10px] font-bold tracking-widest font-sans uppercase">
                        {dayItem.dayFormatted}
                      </span>
                      <span className="text-sm font-serif font-black text-[#4A1521] font-playfair uppercase">
                        {dayItem.date}
                      </span>
                    </div>
                    <span className="text-xs font-semibold text-[#8B6B38] font-sans uppercase">
                      {dayItem.weekday}
                    </span>
                  </div>

                  {/* SESSIONS */}
                  <div className="space-y-2.5 pt-1">
                    {dayItem.sessions.map((sess, sIdx) => {
                      const IconComp = sess.session === 'MORNING' ? Sun : (sess.session === 'AFTERNOON' ? Sunset : Moon);
                      return (
                        <div key={sIdx} className="flex items-start space-x-3 text-left">
                          <IconComp className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                          <div className="space-y-0.5">
                            <div className="flex items-center space-x-2">
                              <span className="text-[10px] font-bold text-[#8B6B38] tracking-wider uppercase font-sans">
                                {sess.session}
                              </span>
                              <span className="text-xs font-bold text-[#4A1521] font-mono">
                                • {sess.time}
                              </span>
                            </div>
                            <p className="text-xs font-bold text-[#4A1521] font-playfair uppercase leading-snug">
                              {sess.title}
                            </p>
                            {sess.subtitle && (
                              <p className="text-[11px] text-[#4A3728]/80 font-sans italic">
                                {sess.subtitle}
                              </p>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* FOOTER */}
            <div className="mt-8 pt-4 border-t border-[#C5A059]/25 text-center text-xs text-[#8B6B38] font-sans">
              ✦ CHOKLATTY BOYZ K.G.F. • ALL DEVOTEES WELCOME ✦
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
