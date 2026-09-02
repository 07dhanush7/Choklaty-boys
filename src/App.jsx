import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CurrentCelebration from './components/CurrentCelebration';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#3B2820] relative selection:bg-[#4A1521]/10 selection:text-[#4A1521]">
      {/* NAVBAR */}
      <Navbar />

      {/* HERO SECTION & 2026 CELEBRATION SECTION */}
      <main>
        <Hero />

        {/* STEP 03 — CURRENT 2026 CELEBRATION SECTION */}
        <CurrentCelebration />
      </main>
    </div>
  );
}
