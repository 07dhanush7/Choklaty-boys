import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Image as ImageIcon, Calendar, CheckCircle2 } from 'lucide-react';

export default function HistoryModal({ isOpen, data, onClose }) {
  const [selectedPhotoIdx, setSelectedPhotoIdx] = useState(0);
  const [imgError, setImgError] = useState(false);

  // Keyboard Escape key event listener
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

  // Reset photo index when modal data changes
  useEffect(() => {
    setSelectedPhotoIdx(0);
    setImgError(false);
  }, [data?.year]);

  if (!isOpen || !data) return null;

  // Gallery photos list (main photo + placeholders for extra historical memories)
  const galleryPhotos = [
    { id: 1, title: 'Main Festival Shrine & Pandal', src: data.image },
    { id: 2, title: 'Devotional Aarti Rituals', src: `/assets/history/${data.year}_aarti.jpg` },
    { id: 3, title: 'Community Mahaprasadam Seva', src: `/assets/history/${data.year}_prasadam.jpg` },
    { id: 4, title: 'Grand Visarjan Rally', src: `/assets/history/${data.year}_visarjan.jpg` }
  ];

  return (
    <AnimatePresence>
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 md:p-8 bg-black/80 backdrop-blur-md overflow-y-auto"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-[#FAF3E0] text-[#3B2820] rounded-2xl sm:rounded-3xl border-2 border-[#C5A059] shadow-2xl max-w-4xl w-full relative overflow-hidden my-auto max-h-[95vh] sm:max-h-[90vh] flex flex-col"
        >
          
          {/* MODAL HEADER STRIP */}
          <div className="bg-gradient-to-r from-[#4A1521] via-[#3D101A] to-[#4A1521] text-[#FAF3E0] p-3.5 sm:p-6 flex items-center justify-between border-b-2 border-[#C5A059] relative">
            
            <div className="flex items-center space-x-2.5 sm:space-x-3">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#3B1319] border border-[#D4AF37] flex items-center justify-center text-[#D4AF37] font-serif font-bold text-base sm:text-lg shrink-0">
                ॐ
              </div>
              <div>
                <div className="flex items-center space-x-2 text-[#D4AF37] text-[10px] sm:text-xs font-mono uppercase tracking-widest">
                  <span>{data.chapter}</span>
                  <span>•</span>
                  <span>{data.year} ARCHIVE</span>
                </div>
                <h3 id="modal-title" className="text-sm sm:text-xl md:text-2xl font-bold font-playfair text-[#FAF3E0] leading-tight">
                  {data.title}
                </h3>
              </div>
            </div>

            {/* CLOSE BUTTON */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close memory modal"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#3B1319] hover:bg-[#FAF3E0] text-[#D4AF37] hover:text-[#4A1521] border border-[#D4AF37]/60 flex items-center justify-center transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#C5A059] shrink-0 ml-2"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
            </button>
          </div>

          {/* MODAL BODY (SCROLLABLE CONTENT) */}
          <div className="p-4 sm:p-8 overflow-y-auto space-y-5 sm:space-y-6 flex-1">
            
            {/* MAIN ENLARGED PHOTO DISPLAY */}
            <div className="w-full h-52 sm:h-80 md:h-96 rounded-xl sm:rounded-2xl bg-[#2A0E15] border border-[#C5A059]/40 overflow-hidden relative shadow-inner flex items-center justify-center">
              {!imgError ? (
                <img
                  src={galleryPhotos[selectedPhotoIdx]?.src}
                  alt={`${data.year} ${galleryPhotos[selectedPhotoIdx]?.title}`}
                  onError={() => setImgError(true)}
                  className="w-full h-full object-cover object-center"
                />
              ) : (
                /* ORNATE PLACEHOLDER */
                <div className="w-full h-full bg-gradient-to-br from-[#3D101A] to-[#1F080D] p-6 flex flex-col items-center justify-center text-center text-[#FAF3E0]">
                  <ImageIcon className="w-12 h-12 text-[#D4AF37] mb-2 opacity-80" />
                  <p className="text-sm font-mono text-[#D4AF37] uppercase tracking-widest mb-1">
                    {galleryPhotos[selectedPhotoIdx]?.title}
                  </p>
                  <h4 className="text-xl font-bold font-playfair text-[#FAF3E0]">
                    {data.year} FESTIVAL PHOTO #0{selectedPhotoIdx + 1}
                  </h4>
                  <p className="text-xs text-[#E8DDD0]/70 max-w-sm mt-2">
                    High-resolution photographs for this year will be archived here.
                  </p>
                </div>
              )}

              {/* PHOTO CAPTION OVERLAY */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 flex items-center justify-between text-white text-xs sm:text-sm">
                <span className="font-serif font-medium text-[#FAF3E0]">
                  Photo {selectedPhotoIdx + 1} of {galleryPhotos.length}: {galleryPhotos[selectedPhotoIdx]?.title}
                </span>
                <span className="bg-[#4A1521]/90 text-[#D4AF37] border border-[#D4AF37]/40 px-2.5 py-0.5 rounded-full text-[11px] font-mono">
                  {data.year}
                </span>
              </div>
            </div>

            {/* GALLERY THUMBNAIL SELECTOR STRIP */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#8B6B38] mb-3 flex items-center space-x-1.5">
                <ImageIcon className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>SELECT ARCHIVE MEMORY PHOTO</span>
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {galleryPhotos.map((photo, idx) => (
                  <button
                    key={photo.id}
                    type="button"
                    onClick={() => {
                      setSelectedPhotoIdx(idx);
                      setImgError(false);
                    }}
                    className={`p-2 rounded-xl border-2 transition-all flex flex-col items-center text-left cursor-pointer ${
                      selectedPhotoIdx === idx
                        ? 'border-[#4A1521] bg-[#4A1521] text-[#FAF3E0] shadow-md scale-[1.02]'
                        : 'border-[#C5A059]/40 bg-[#FAF3E0] text-[#3B2820] hover:border-[#4A1521]/60'
                    }`}
                  >
                    <div className="w-full h-16 rounded-lg bg-[#2A0E15] overflow-hidden mb-1.5 flex items-center justify-center text-xs font-bold text-[#D4AF37]">
                      {photo.id === 1 ? (
                        <img 
                          src={data.image} 
                          alt="Thumbnail" 
                          className="w-full h-full object-cover"
                          onError={(e) => { e.target.style.display = 'none'; }}
                        />
                      ) : null}
                      <span className="font-serif">#{photo.id}</span>
                    </div>
                    <span className="text-[11px] font-semibold truncate w-full">
                      {photo.title}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* DESCRIPTION & HIGHLIGHTS */}
            <div className="border-t border-[#C5A059]/30 pt-4 grid grid-cols-1 md:grid-cols-12 gap-6">
              
              <div className="md:col-span-7">
                <h4 className="text-xs font-bold uppercase tracking-widest text-[#8B6B38] mb-2 flex items-center space-x-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>CHAPTER DESCRIPTION</span>
                </h4>
                <p className="text-xs sm:text-sm text-[#3B2820] leading-relaxed font-body">
                  {data.description}
                </p>
              </div>

              <div className="md:col-span-5 bg-[#FAF3E0] p-4 rounded-2xl border border-[#C5A059]/30">
                <h4 className="text-xs font-bold uppercase tracking-widest text-[#4A1521] mb-2 flex items-center space-x-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>CHAPTER HIGHLIGHTS</span>
                </h4>
                <ul className="space-y-1.5 text-xs text-[#3B2820]">
                  {data.highlights?.map((hl, i) => (
                    <li key={i} className="flex items-center space-x-2">
                      <span className="text-[#C5A059] font-bold">✦</span>
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

          </div>

          {/* FOOTER STRIP */}
          <div className="bg-[#FAF3E0] px-6 py-4 border-t border-[#C5A059]/30 flex items-center justify-between">
            <span className="text-xs text-[#8B6B38] font-mono">
              Choklaty Boyz KGF • {data.chapter} Archive
            </span>

            <button
              type="button"
              onClick={onClose}
              className="bg-[#4A1521] hover:bg-[#3B1319] text-[#FAF3E0] border border-[#C5A059] px-5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
            >
              CLOSE ARCHIVE
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
