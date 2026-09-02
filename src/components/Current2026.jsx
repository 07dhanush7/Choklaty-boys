import React from 'react';
import CelebrationIntro from './CelebrationIntro';
import VenueInfo from './VenueInfo';
import ProgrammeTimeline from './ProgrammeTimeline';
import ProcessionHighlight from './ProcessionHighlight';
import HistoryTransition from './HistoryTransition';

export default function Current2026() {
  return (
    <section id="journey" className="relative w-full bg-transparent overflow-hidden pt-14 sm:pt-18 pb-12">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 1. REFINED EDITORIAL HEADER */}
        <CelebrationIntro />

        {/* 2. ASYMMETRICAL TWO-COLUMN LAYOUT (LEFT 40% / RIGHT 60%) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* LEFT COLUMN: GANESH IMAGE + SACRED VENUE (40% WIDTH / COLS 1-5 DESKTOP) */}
          <div className="lg:col-span-5 w-full">
            <VenueInfo />
          </div>

          {/* RIGHT COLUMN: 7 DAYS OF DEVOTION PROGRAMME TIMELINE (60% WIDTH / COLS 6-12 DESKTOP) */}
          <div className="lg:col-span-7 w-full">
            <ProgrammeTimeline />
          </div>

        </div>

        {/* 3. GRAND PROCESSION CINEMATIC STRIP */}
        <ProcessionHighlight />

        {/* 4. EDITORIAL TRANSITION TO HISTORY */}
        <HistoryTransition />

      </div>

    </section>
  );
}
