import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Current2026 from './components/Current2026';
import bgMandala from './assets/background.png';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAF3E0] text-[#3B2820] relative selection:bg-[#4A1521]/10 selection:text-[#4A1521]">
      {/* GLOBAL FIXED WEBSITE BACKGROUND IMAGE */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-multiply pointer-events-none z-0"
        style={{ backgroundImage: `url(${bgMandala})` }}
      />

      {/* NAVBAR */}
      <Navbar />

      {/* HERO SECTION & 2026 CELEBRATION SECTION */}
      <main className="relative z-10">
        <Hero />

        {/* 2026 — OUR 12TH YEAR SECTION */}
        <Current2026 />
      </main>
    </div>
  );
}
