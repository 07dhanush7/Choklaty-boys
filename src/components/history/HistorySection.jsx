import React, { useState } from 'react';
import HISTORY_DATA from '../../data/history';
import HistoryIntro from './HistoryIntro';
import HistoryTimeline from './HistoryTimeline';
import HistoryMemory from './HistoryMemory';
import HistoryStoryStrip from './HistoryStoryStrip';
import HistoryModal from './HistoryModal';

export default function HistorySection() {
  // Default selected year = 2025 (Chapter 11)
  const [selectedYear, setSelectedYear] = useState(2025);
  const [isArchiveModalOpen, setIsArchiveModalOpen] = useState(false);

  // Current selected history data item
  const selectedData = HISTORY_DATA.find((h) => h.year === selectedYear) || HISTORY_DATA[0];

  // Carousel navigation handlers:
  // Right Arrow = Next year in timeline (2025 -> 2024 -> 2023 ... -> 2015)
  const handleNextYear = () => {
    const currentIndex = HISTORY_DATA.findIndex((h) => h.year === selectedYear);
    const nextIndex = (currentIndex + 1) % HISTORY_DATA.length;
    setSelectedYear(HISTORY_DATA[nextIndex].year);
  };

  // Left Arrow = Previous year in timeline (2015 -> 2016 ... -> 2024 -> 2025)
  const handlePrevYear = () => {
    const currentIndex = HISTORY_DATA.findIndex((h) => h.year === selectedYear);
    const prevIndex = (currentIndex - 1 + HISTORY_DATA.length) % HISTORY_DATA.length;
    setSelectedYear(HISTORY_DATA[prevIndex].year);
  };

  return (
    <section 
      id="journey" 
      className="relative w-full py-16 sm:py-24 bg-transparent overflow-hidden text-[#3B2820] selection:bg-[#4A1521]/10 selection:text-[#4A1521]"
    >
      {/* SUBTLE BACKGROUND ORNAMENTAL CORNER MANDALA LINE ART */}
      <div className="absolute top-0 left-0 w-64 h-64 opacity-15 pointer-events-none text-[#C5A059] -translate-x-12 -translate-y-12">
        <svg viewBox="0 0 200 200" className="w-full h-full fill-none stroke-current" strokeWidth="1">
          <circle cx="100" cy="100" r="80" />
          <circle cx="100" cy="100" r="60" strokeDasharray="4 4" />
          <path d="M100 0 L100 200 M0 100 L200 100" />
          <path d="M30 30 L170 170 M30 170 L170 30" />
        </svg>
      </div>

      <div className="absolute top-0 right-0 w-64 h-64 opacity-15 pointer-events-none text-[#C5A059] translate-x-12 -translate-y-12">
        <svg viewBox="0 0 200 200" className="w-full h-full fill-none stroke-current" strokeWidth="1">
          <circle cx="100" cy="100" r="80" />
          <circle cx="100" cy="100" r="60" strokeDasharray="4 4" />
          <path d="M100 0 L100 200 M0 100 L200 100" />
          <path d="M30 30 L170 170 M30 170 L170 30" />
        </svg>
      </div>

      {/* SECTION CONTENT CONTAINER */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 1. TOP INTRO HEADER */}
        <HistoryIntro />

        {/* 2. ELEGANT TIMELINE NAVIGATION (2025 -> 2015) */}
        <HistoryTimeline
          years={HISTORY_DATA}
          selectedYear={selectedYear}
          onSelectYear={setSelectedYear}
        />

        {/* 3. MAIN EDITORIAL DISPLAY */}
        <HistoryMemory
          data={selectedData}
          onPrevYear={handlePrevYear}
          onNextYear={handleNextYear}
          onOpenArchiveModal={() => setIsArchiveModalOpen(true)}
        />

        {/* 4. BOTTOM STORY STRIP & TRANSITION */}
        <HistoryStoryStrip />

      </div>

      {/* HISTORICAL MEMORIES ARCHIVE MODAL */}
      <HistoryModal
        isOpen={isArchiveModalOpen}
        data={selectedData}
        onClose={() => setIsArchiveModalOpen(false)}
      />

    </section>
  );
}
