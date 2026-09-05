import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Image as ImageIcon, Video as VideoIcon, Users, X, Sparkles, Film, Eye } from 'lucide-react';
import img2025 from '../assets/2025.webp';
import img2024 from '../assets/2024.webp';
import img2023 from '../assets/2023.webp';
import img2022 from '../assets/2022.webp';
import img2021 from '../assets/2021.webp';
import img2020 from '../assets/2020.webp';
import img2019 from '../assets/2019.webp';
import img2018 from '../assets/2018.webp';
import img2017 from '../assets/2017.webp';
import img2016 from '../assets/2016.webp';
import img2015 from '../assets/2015.png';

import group2025 from '../assets/group2025.jpeg';
import group2024 from '../assets/group2024.jpeg';
import group2023 from '../assets/group2023.jpeg';
import group2016 from '../assets/group2016.png';

import video2025 from '../video/2025.mp4';
import video2024 from '../video/2024.mp4';
import video2023 from '../video/2023.mp4';
import video2022 from '../video/2022.mp4';

// Combined Group Photos and Video Memories Data
const MEMORIES_MEDIA = [
  {
    id: 1,
    type: "PHOTO",
    category: "GROUP_PHOTO",
    year: "2025",
    title: "Choklatty Boyz 2025 Core Group Photo",
    subtitle: "Swarnakuppam Youth Brotherhood • Chapter 11",
    image: group2025,
    members: "40+ Group Members",
    tag: "GROUP PHOTO",
    description: "Official annual commemorative group photograph of Choklatty Boyz members, elders, and volunteers at Chapter 11 Sthapana Puja."
  },
  {
    id: 2,
    type: "VIDEO",
    category: "VIDEO_CLIP",
    year: "2025",
    title: "Celebration of 2025",
    subtitle: "Choklatty Boyz Swarnakuppam • Chapter 11",
    image: img2025,
    videoUrl: video2025,
    tag: "VIDEO MEMORY",
    members: "Chapter 11",
    description: "Official 2025 video memory capturing the devotion, grand celebration, evening Aarti, and togetherness of Choklatty Boyz Swarnakuppam."
  },
  {
    id: 3,
    type: "PHOTO",
    category: "GROUP_PHOTO",
    year: "2024",
    title: "Choklatty Boyz 2024 Group Assembly",
    subtitle: "Decade Celebration Brotherhood • Chapter 10",
    image: group2024,
    members: "50+ Devotees & Members",
    tag: "GROUP PHOTO",
    description: "Historical group photo capturing founding pillars and youth volunteers celebrating 10 continuous years of Ganesh festival."
  },
  {
    id: 4,
    type: "VIDEO",
    category: "VIDEO_CLIP",
    year: "2024",
    title: "Celebration of 2024",
    subtitle: "Choklatty Boyz Swarnakuppam • Chapter 10",
    image: img2024,
    videoUrl: video2024,
    tag: "VIDEO MEMORY",
    members: "Chapter 10",
    description: "Grand 10-year anniversary celebration video capturing traditional Dhol Tasha ensemble and illuminated procession."
  },
  {
    id: 5,
    type: "PHOTO",
    category: "GROUP_PHOTO",
    year: "2023",
    title: "Choklatty Boyz 2023 Group Photo",
    subtitle: "Pandal Setup & Seva Team • Chapter 09",
    image: group2023,
    members: "30+ Volunteers",
    tag: "GROUP PHOTO",
    description: "Choklatty Boyz stage & decoration team after completing the eco-friendly floral pandal theme."
  },
  {
    id: 6,
    type: "VIDEO",
    category: "VIDEO_CLIP",
    year: "2023",
    title: "Celebration of 2023",
    subtitle: "Choklatty Boyz Swarnakuppam • Chapter 09",
    image: img2023,
    videoUrl: video2023,
    tag: "VIDEO MEMORY",
    members: "Chapter 09",
    description: "Heartfelt video memory of Chapter 9 evening Maha Aarti and community gathering."
  },

  {
    id: 8,
    type: "VIDEO",
    category: "VIDEO_CLIP",
    year: "2022",
    title: "Celebration of 2022",
    subtitle: "Choklatty Boyz Swarnakuppam • Chapter 08",
    image: img2022,
    videoUrl: video2022,
    tag: "VIDEO MEMORY",
    members: "Chapter 08",
    description: "Chapter 8 video recordings capturing the community feast and joyful festive celebrations."
  },
  {
    id: 10,
    type: "PHOTO",
    category: "GROUP_PHOTO",
    year: "2016",
    title: "Choklatty Boyz 2016 Group Photo",
    subtitle: "2nd Year Festival Assembly • Chapter 02",
    image: group2016,
    members: "25+ Founding Youth",
    tag: "GROUP PHOTO",
    description: "Cherished early group photo of Choklatty Boyz during the 2016 Chapter 02 celebrations."
  }
];

export default function MemoriesSection() {
  const [filter, setFilter] = useState('ALL'); // 'ALL' | 'PHOTO' | 'VIDEO'
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredMedia = MEMORIES_MEDIA.filter((item) => {
    if (filter === 'PHOTO') return item.type === 'PHOTO';
    if (filter === 'VIDEO') return item.type === 'VIDEO';
    return true;
  });

  return (
    <section 
      id="memories" 
      className="relative w-full py-16 sm:py-24 bg-transparent overflow-hidden text-[#3B2820] selection:bg-[#4A1521]/10 selection:text-[#4A1521]"
    >
      {/* BACKGROUND AMBIENT GLOW */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 1. SECTION INTRO HEADER */}
        <div className="text-center space-y-3 max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center space-x-2 text-[#C5A059] text-xs font-bold tracking-[0.25em] font-cinzel uppercase">
            <span>✦</span>
            <span>BROTHERHOOD & CELEBRATION ARCHIVE</span>
            <span>✦</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-playfair text-[#4A1521] uppercase tracking-wide leading-tight">
            GROUP PHOTOS & VIDEOS
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-[#5C4535] leading-relaxed font-body font-light">
            Cherished group photographs, youth assemblies, Dhol Tasha procession videos, and festive memories of <strong className="font-bold text-[#4A1521]">Choklatty Boyz Swarnakuppam</strong> since 2015.
          </p>

          {/* MEDIA FILTER SWITCHER BUTTONS */}
          <div className="pt-4 flex items-center justify-center">
            <div className="bg-[#FAF3E0] p-1.5 rounded-2xl border-2 border-[#C5A059]/40 shadow-inner inline-flex items-center space-x-1.5 sm:space-x-2">
              
              <button
                type="button"
                onClick={() => setFilter('ALL')}
                className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs font-extrabold tracking-wider uppercase font-cinzel transition-all cursor-pointer ${
                  filter === 'ALL'
                    ? 'bg-[#4A1521] text-[#FAF3E0] shadow-md border border-[#C5A059]'
                    : 'text-[#4A1521] hover:bg-[#C5A059]/15'
                }`}
              >
                <span className="flex items-center space-x-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>ALL MEMORIES ({MEMORIES_MEDIA.length})</span>
                </span>
              </button>

              <button
                type="button"
                onClick={() => setFilter('PHOTO')}
                className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs font-extrabold tracking-wider uppercase font-cinzel transition-all cursor-pointer ${
                  filter === 'PHOTO'
                    ? 'bg-[#4A1521] text-[#FAF3E0] shadow-md border border-[#C5A059]'
                    : 'text-[#4A1521] hover:bg-[#C5A059]/15'
                }`}
              >
                <span className="flex items-center space-x-1.5">
                  <Users className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>GROUP PHOTOS</span>
                </span>
              </button>

              <button
                type="button"
                onClick={() => setFilter('VIDEO')}
                className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs font-extrabold tracking-wider uppercase font-cinzel transition-all cursor-pointer ${
                  filter === 'VIDEO'
                    ? 'bg-[#4A1521] text-[#FAF3E0] shadow-md border border-[#C5A059]'
                    : 'text-[#4A1521] hover:bg-[#C5A059]/15'
                }`}
              >
                <span className="flex items-center space-x-1.5">
                  <VideoIcon className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>VIDEO CLIPS</span>
                </span>
              </button>

            </div>
          </div>
        </div>

        {/* 2. MEDIA GRID */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredMedia.map((item) => {
              const isVideo = item.type === 'VIDEO';

              return (
                <div
                  key={item.id}
                  onClick={() => setSelectedItem(item)}
                  className="group rounded-2xl border-2 border-[#C5A059]/40 bg-[#2A0E15] overflow-hidden shadow-md hover:shadow-xl hover:border-[#D4AF37] transition-all cursor-pointer relative flex flex-col"
                >
                  <div className="w-full h-64 sm:h-72 overflow-hidden relative bg-black">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105 opacity-90"
                    />

                    {/* VIDEO PLAY BUTTON OVERLAY */}
                    {isVideo && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/35 group-hover:bg-black/20 transition-colors">
                        <div className="w-14 h-14 rounded-full bg-[#4A1521]/90 border-2 border-[#D4AF37] text-[#FAF3E0] flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                          <Play className="w-6 h-6 fill-current text-[#D4AF37] ml-1" />
                        </div>
                      </div>
                    )}

                    {/* TOP BADGE STRIP */}
                    <div className="absolute top-3 left-3 pointer-events-none">
                      <span className="bg-[#4A1521]/90 text-[#D4AF37] border border-[#D4AF37]/50 text-[10px] font-mono px-2.5 py-1 rounded-full uppercase tracking-wider shadow-md flex items-center space-x-1">
                        {isVideo ? <VideoIcon className="w-3 h-3 text-[#D4AF37]" /> : <Users className="w-3 h-3 text-[#D4AF37]" />}
                        <span>{item.tag}</span>
                      </span>
                    </div>

                    {/* BOTTOM GRADIENT CAPTION OVERLAY */}
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-5 text-white">
                      <span className="text-[11px] font-mono text-[#D4AF37] font-bold uppercase tracking-widest block mb-0.5">
                        CHAPTER {item.year}
                      </span>
                      <h4 className="text-base sm:text-lg font-bold font-playfair text-[#FAF3E0] leading-snug">
                        {item.title}
                      </h4>
                      <p className="text-xs text-[#E8DDD0]/80 truncate mt-0.5">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* 3. LIGHTBOX & VIDEO PLAYER MODAL */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
              onClick={() => setSelectedItem(null)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className="bg-[#FAF3E0] max-w-3xl w-full rounded-3xl border-2 border-[#C5A059] overflow-hidden shadow-2xl relative my-auto flex flex-col"
                onClick={(e) => e.stopPropagation()}
              >
                {/* MODAL HEADER */}
                <div className="bg-gradient-to-r from-[#4A1521] via-[#3D101A] to-[#4A1521] text-[#FAF3E0] p-4 sm:p-5 flex items-center justify-between border-b-2 border-[#C5A059]">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-[#3B1319] border border-[#D4AF37] flex items-center justify-center text-[#D4AF37]">
                      {selectedItem.type === 'VIDEO' ? <Film className="w-5 h-5" /> : <Users className="w-5 h-5" />}
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-widest block">
                        CHAPTER {selectedItem.year} • {selectedItem.tag}
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold font-playfair text-[#FAF3E0]">
                        {selectedItem.title}
                      </h3>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedItem(null)}
                    aria-label="Close media player"
                    className="w-9 h-9 rounded-full bg-[#3B1319] hover:bg-[#FAF3E0] text-[#D4AF37] hover:text-[#4A1521] border border-[#D4AF37]/60 flex items-center justify-center transition-all shrink-0"
                  >
                    <X className="w-5 h-5 stroke-[2.5]" />
                  </button>
                </div>

                {/* MEDIA PREVIEW / PLAYER FRAME */}
                <div className="p-4 sm:p-6 space-y-4">
                  <div className="w-full h-64 sm:h-96 rounded-2xl bg-black overflow-hidden relative shadow-inner flex items-center justify-center border border-[#C5A059]/40">
                    {selectedItem.type === 'VIDEO' ? (
                      selectedItem.videoUrl ? (
                        <video
                          src={selectedItem.videoUrl}
                          poster={selectedItem.image}
                          controls
                          autoPlay
                          playsInline
                          className="w-full h-full object-contain bg-black"
                        />
                      ) : (
                        <div className="w-full h-full relative bg-gradient-to-br from-[#2A0E15] to-[#120508] flex flex-col items-center justify-center p-6 text-center text-white">
                          <img
                            src={selectedItem.image}
                            alt="Video thumbnail"
                            className="absolute inset-0 w-full h-full object-cover opacity-40 blur-xs"
                          />
                          <div className="relative z-10 w-16 h-16 rounded-full bg-[#4A1521] border-2 border-[#D4AF37] flex items-center justify-center shadow-2xl mb-3 text-[#D4AF37]">
                            <Play className="w-8 h-8 fill-current ml-1" />
                          </div>
                          <span className="relative z-10 text-xs font-mono uppercase tracking-widest text-[#D4AF37] mb-1">
                            {selectedItem.title}
                          </span>
                        </div>
                      )
                    ) : (
                      /* FULL PHOTO VIEW */
                      <img
                        src={selectedItem.image}
                        alt={selectedItem.title}
                        className="w-full h-full object-cover object-center"
                      />
                    )}
                  </div>

                  {/* CAPTION & DESCRIPTION */}
                  <div className="bg-[#FAF6EE] p-4 rounded-2xl border border-[#C5A059]/30 space-y-2">
                    <div className="flex items-center justify-between text-xs font-bold text-[#8B6B38]">
                      <span className="font-cinzel text-[#4A1521]">{selectedItem.subtitle}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#4A3728] leading-relaxed font-body">
                      {selectedItem.description}
                    </p>
                  </div>
                </div>

                {/* MODAL FOOTER */}
                <div className="bg-[#FAF3E0] px-6 py-3.5 border-t border-[#C5A059]/30 flex items-center justify-between">
                  <span className="text-xs text-[#8B6B38] font-mono">
                    Choklatty Boyz Swarnakuppam Archive
                  </span>
                  <button
                    type="button"
                    onClick={() => setSelectedItem(null)}
                    className="bg-[#4A1521] hover:bg-[#3B1319] text-[#FAF3E0] border border-[#C5A059] px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider font-cinzel"
                  >
                    CLOSE MEMORY
                  </button>
                </div>

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
