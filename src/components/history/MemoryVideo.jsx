import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Film, Sparkles } from 'lucide-react';

export default function MemoryVideo({ data, onOpenModal }) {
  const videoRef = useRef(null);

  // Pause and reset video when data changes (e.g. user selects another year)
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [data?.year]);

  if (!data || !data.video) return null;

  const videoTitle = data.videoTitle || `${data.year} IN MOTION`;
  const videoDescription = data.videoDescription || "A glimpse of our devotion, celebration and togetherness.";

  return (
    <div className="w-full select-none flex flex-col justify-between space-y-3">
      
      {/* PREMIUM EDITORIAL VIDEO PREVIEW FRAME */}
      <motion.div
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        onClick={onOpenModal}
        className="group relative w-full aspect-video rounded-2xl bg-[#2A0E15] border-2 border-[#C5A059]/50 overflow-hidden shadow-xl cursor-pointer flex items-center justify-center transition-all duration-300 hover:border-[#D4AF37]"
      >
        {/* VIDEO PREVIEW ELEMENT (MUTED, PRELOAD METADATA, PLAYSINLINE) */}
        <video
          ref={videoRef}
          src={data.video}
          poster={data.image}
          muted
          playsInline
          preload="metadata"
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
        >
          <source src={data.video} type="video/mp4" />
        </video>

        {/* OVERLAY GRADIENT DARK VIGNETTE */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20 group-hover:bg-black/20 transition-colors" />

        {/* CIRCULAR PLAY BUTTON OVERLAY */}
        <div className="relative z-10 flex flex-col items-center space-y-2">
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#4A1521]/90 text-[#D4AF37] border-2 border-[#D4AF37] flex items-center justify-center shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:bg-[#3D101A] group-hover:text-white group-hover:border-white">
            <Play className="w-6 h-6 sm:w-7 sm:h-7 fill-current ml-1" />
          </div>
          <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-[#D4AF37] group-hover:text-white font-semibold transition-colors bg-black/60 px-3 py-1 rounded-full border border-[#D4AF37]/30">
            CLICK TO PLAY VIDEO
          </span>
        </div>

        {/* TOP RIGHT CORNER BADGE */}
        <div className="absolute top-3 right-3 z-10 bg-[#4A1521]/90 text-[#D4AF37] border border-[#D4AF37]/50 text-[10px] font-mono px-2.5 py-1 rounded-full uppercase tracking-widest shadow-md">
          {data.year} ARCHIVE VIDEO
        </div>
      </motion.div>

    </div>
  );
}
