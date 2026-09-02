import React from 'react';
import CelebrationIntro from './CelebrationIntro';
import ProgrammeTimeline from './ProgrammeTimeline';
import GrandProcession from './GrandProcession';
import HistoryTransition from './HistoryTransition';

export default function CurrentCelebration() {
  return (
    <section id="journey" className="relative w-full bg-[#FAF3E0] overflow-hidden pt-4">
      
      {/* 1. INTRO & VENUE INFO */}
      <CelebrationIntro />

      {/* 2. 7-DAY INTERACTIVE PROGRAMME TIMELINE */}
      <ProgrammeTimeline />

      {/* 3. GRAND PROCESSION HIGHLIGHT */}
      <GrandProcession />

      {/* 4. HISTORY TRANSITION SECTION */}
      <HistoryTransition />

    </section>
  );
}
