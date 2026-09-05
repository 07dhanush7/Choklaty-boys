import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Current2026 from './components/Current2026';
import HistorySection from './components/history/HistorySection';
import MemoriesSection from './components/MemoriesSection';
import ContactFooter from './components/ContactFooter';
import bgMandala from './assets/background.png';

export default function App() {
  // Ensure Hero section (top of page) is always shown when page reloads
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF3E0] text-[#3B2820] relative selection:bg-[#4A1521]/10 selection:text-[#4A1521]">
      {/* GLOBAL FIXED WEBSITE BACKGROUND IMAGE */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-multiply pointer-events-none z-0"
        style={{ backgroundImage: `url(${bgMandala})` }}
      />

      {/* NAVBAR */}
      <Navbar />

      {/* MAIN SECTIONS */}
      <main className="relative z-10">
        <Hero />

        {/* 2026 — OUR 12TH YEAR SECTION */}
        <Current2026 />

        {/* 11 YEARS BEHIND US — HISTORICAL ARCHIVE SECTION */}
        <HistorySection />

        {/* FESTIVAL MEMORIES SECTION */}
        <MemoriesSection />
      </main>

      {/* FOOTER & CONTACT */}
      <ContactFooter />
    </div>
  );
}
