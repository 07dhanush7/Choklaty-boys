import React from 'react';
import CelebrationIntro from './CelebrationIntro';
import GaneshFrame from './GaneshFrame';
import ProgrammeTimeline from './ProgrammeTimeline';
import VenueCardsRow from './VenueCardsRow';
import HistoryTransition from './HistoryTransition';

export default function Current2026() {
  return (
    <section id="journey" className="relative w-full bg-transparent overflow-hidden pt-14 sm:pt-18 pb-12">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 1. CENTERED EDITORIAL HEADER */}
        <CelebrationIntro />

        {/* 2. GANESH IDOL IMAGE (40%) + PROGRAMME TIMELINE (60%) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-10">
          
          {/* LEFT (COLS 1-5): GANESH IMAGE FRAME */}
          <div className="lg:col-span-5 w-full flex justify-center">
            <GaneshFrame />
          </div>

          {/* RIGHT (COLS 6-12): 7 DAYS OF DEVOTION TIMELINE */}
          <div className="lg:col-span-7 w-full">
            <ProgrammeTimeline />
          </div>

        </div>

        {/* 3. FULL-WIDTH TWIN CARDS ROW (50% SACRED VENUE / 50% GRAND PROCESSION) - COVERS 100% WIDTH */}
        <VenueCardsRow />

        {/* 4. EDITORIAL TRANSITION TO HISTORY */}
        <HistoryTransition />

      </div>

    </section>
  );
}
