import React, { useRef, useEffect } from 'react';
import HistoryYear from './HistoryYear';

export default function HistoryTimeline({ years, selectedYear, onSelectYear }) {
  const containerRef = useRef(null);

  // Auto-scroll selected year into view on mobile when year changes
  useEffect(() => {
    if (!containerRef.current) return;
    const selectedBtn = containerRef.current.querySelector('[aria-current="true"]');
    if (selectedBtn) {
      selectedBtn.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      });
    }
  }, [selectedYear]);

  // Keyboard left/right arrow navigation across timeline
  const handleKeyDown = (e) => {
    const currentIndex = years.findIndex((y) => y.year === selectedYear);
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      // Moving right in timeline array (e.g. 2025 -> 2024)
      const nextIndex = (currentIndex + 1) % years.length;
      onSelectYear(years[nextIndex].year);
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      // Moving left in timeline array (e.g. 2024 -> 2025)
      const prevIndex = (currentIndex - 1 + years.length) % years.length;
      onSelectYear(years[prevIndex].year);
    }
  };

  return (
    <div className="w-full mb-8 sm:mb-12 relative z-10">
      {/* TIMELINE CONTAINER WITH HORIZONTAL SCROLL ON MOBILE */}
      <div 
        ref={containerRef}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="region"
        aria-label="Festival years timeline navigation"
        className="w-full overflow-x-auto overflow-y-hidden py-4 px-2 sm:px-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059] rounded-2xl scrollbar-none"
      >
        <div className="min-w-max max-w-6xl mx-auto flex items-center justify-between relative px-4">
          
          {/* HORIZONTAL ANTIQUE GOLD LINE PASSING THROUGH ALL NODES */}
          <div className="absolute top-[3.25rem] left-8 right-8 h-[2px] bg-gradient-to-r from-[#C5A059]/20 via-[#C5A059]/70 to-[#C5A059]/20 pointer-events-none z-0" />
          
          {/* LEFT DECORATIVE END FLOURISH */}
          <div className="absolute top-[3.1rem] left-3 w-3 h-3 rotate-45 border border-[#C5A059] bg-[#FAF3E0] pointer-events-none z-0 hidden sm:block" />

          {/* RIGHT DECORATIVE END FLOURISH */}
          <div className="absolute top-[3.1rem] right-3 w-3 h-3 rotate-45 border border-[#C5A059] bg-[#FAF3E0] pointer-events-none z-0 hidden sm:block" />

          {/* YEARS ITEMS */}
          {years.map((y, idx) => (
            <React.Fragment key={y.year}>
              <HistoryYear
                yearObj={y}
                isSelected={y.year === selectedYear}
                onSelect={onSelectYear}
              />
              
              {/* INTER-ITEM DASH / SEPARATOR (Visual polish matching reference image) */}
              {idx < years.length - 1 && (
                <div className="flex-1 flex justify-center items-center px-1 text-[#C5A059]/60 text-xs select-none pointer-events-none -mt-4">
                  <span className="w-3 sm:w-5 h-[1px] bg-[#C5A059]/40 inline-block" />
                </div>
              )}
            </React.Fragment>
          ))}

        </div>
      </div>
    </div>
  );
}
