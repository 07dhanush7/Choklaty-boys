import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#3B2820] relative selection:bg-[#4A1521]/10 selection:text-[#4A1521]">
      {/* NAVBAR */}
      <Navbar />

      {/* HERO SECTION */}
      <main>
        <Hero />

        {/* PLACEHOLDER ANCHOR FOR SCROLL INDICATOR (#journey) */}
        <section 
          id="journey" 
          className="min-h-[30vh] bg-[#FAF6EE] border-t border-[#8B6B38]/15 flex items-center justify-center p-8 text-center"
        >
          <div className="max-w-md space-y-2 opacity-60">
            <span className="text-xs font-semibold tracking-widest text-[#8B6B38] uppercase font-cinzel">
              THE JOURNEY CONTINUES
            </span>
            <h2 className="text-xl font-serif text-[#4A1521] font-playfair">
              #journey section anchor
            </h2>
          </div>
        </section>
      </main>
    </div>
  );
}
