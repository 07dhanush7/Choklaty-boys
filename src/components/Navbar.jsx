import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import logoImg from '../assets/logo.png';

const NAV_ITEMS = [
  { label: 'HOME', href: '#home' },
  { label: 'JOURNEY', href: '#journey' },
  { label: 'OUR GANESH', href: '#our-ganesh' },
  { label: 'EVENTS', href: '#events' },
  { label: 'MEMORIES', href: '#memories' },
  { label: 'TEAM', href: '#team' },
  { label: 'VIDEOS', href: '#videos' },
  { label: 'CONTACT', href: '#contact' }
];

export default function Navbar() {
  const [activeTab, setActiveTab] = useState('HOME');
  const [hoveredTab, setHoveredTab] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, item) => {
    e.preventDefault();
    setActiveTab(item.label);
    setMobileMenuOpen(false);
    const element = document.querySelector(item.href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* DESKTOP & MOBILE NAVBAR HEADER (FLOATING WITH 4 ROUNDED CORNERS) */}
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-3 sm:top-4 left-3 right-3 sm:left-6 sm:right-6 lg:left-8 lg:right-8 max-w-7xl mx-auto z-50 rounded-2xl md:rounded-3xl border transition-all duration-500 ease-in-out ${
          scrolled
            ? 'bg-[#FAF3E0]/95 backdrop-blur-md shadow-xl border-[#C5A059]/40 py-1.5 md:py-2'
            : 'bg-[#FAF3E0]/88 backdrop-blur-sm shadow-md border-[#C5A059]/25 py-2 md:py-2.5'
        }`}
      >
        <div className="w-full px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
          
          {/* NAVBAR LEFT: LOGO & BRAND NAME */}
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, { label: 'HOME', href: '#home' })}
            className="flex items-center space-x-3 focus:outline-none group py-1"
          >
            <img
              src={logoImg}
              alt="Choklatty Boyz Logo"
              className="h-14 sm:h-16 md:h-18 lg:h-20 w-auto object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex flex-col text-left leading-none">
              <span className="text-sm sm:text-base md:text-lg font-black tracking-[0.16em] font-cinzel text-[#4A1521] uppercase group-hover:text-[#8B6B38] transition-colors">
                CHOKLATTY BOYZ
              </span>
              <span className="text-[10px] sm:text-[11px] md:text-[12px] font-bold tracking-[0.22em] font-marcellus text-[#8B6B38] uppercase mt-1">
                SINCE 2015
              </span>
            </div>
          </a>

          {/* DESKTOP NAVIGATION ITEMS */}
          <nav className="hidden lg:flex items-center space-x-5 xl:space-x-7">
            {NAV_ITEMS.map((item) => {
              const isActive = activeTab === item.label;
              const isHovered = hoveredTab === item.label;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item)}
                  onMouseEnter={() => setHoveredTab(item.label)}
                  onMouseLeave={() => setHoveredTab(null)}
                  className={`relative text-[12px] xl:text-[13px] font-bold tracking-[0.14em] uppercase font-cinzel transition-colors duration-300 py-1.5 ${
                    isActive ? 'text-[#4A1521]' : 'text-[#5C4535] hover:text-[#4A1521]'
                  }`}
                >
                  {item.label}

                  {/* ACTIVE / HOVER UNDERLINE WITH FRAMER MOTION */}
                  {(isActive || isHovered) && (
                    <motion.div
                      layoutId="activeUnderline"
                      className={`absolute bottom-0 left-0 right-0 h-[2px] ${
                        isActive ? 'bg-[#4A1521]' : 'bg-[#4A1521]/40'
                      }`}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* NAVBAR RIGHT: 12TH YEAR BADGE (DESKTOP) */}
          <div className="hidden md:flex items-center">
            <div className="bg-[#4A1521] text-[#FAF6EE] px-4 py-2 rounded-lg border border-[#C5A059]/40 shadow-sm flex items-center space-x-3 w-36 lg:w-40 justify-between select-none transition-all duration-300 hover:shadow-md hover:border-[#C5A059]">
              <div className="flex flex-col text-left leading-tight">
                <span className="text-[10px] font-semibold tracking-widest text-[#E6C687] uppercase font-marcellus">
                  12TH YEAR
                </span>
                <span className="text-[13px] font-bold tracking-wider font-cinzel text-white">
                  2026
                </span>
              </div>
              <div className="text-[#C5A059] opacity-90 px-1.5 py-0.5 bg-[#3B1118] rounded-md text-xs">
                ✦
              </div>
            </div>
          </div>

          {/* MOBILE MENU BUTTON */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open Navigation Menu"
              className="bg-[#4A1521] text-[#FAF6EE] p-2 rounded-lg border border-[#C5A059]/40 shadow-sm flex items-center justify-center focus:outline-none active:scale-95 transition-transform"
            >
              <Menu className="w-5 h-5 text-[#E6C687]" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* FULL-SCREEN MOBILE OVERLAY */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-[#FAF3E0] flex flex-col justify-between p-6 overflow-y-auto"
          >
            {/* MOBILE MENU TOP */}
            <div className="flex items-center justify-between border-b border-[#C5A059]/20 pb-3">
              <div className="flex items-center space-x-3">
                <img
                  src={logoImg}
                  alt="Choklatty Boyz Logo"
                  className="h-14 sm:h-18 w-auto object-contain mix-blend-multiply"
                />
                <div className="flex flex-col text-left leading-none">
                  <span className="text-base sm:text-lg font-black tracking-[0.16em] font-cinzel text-[#4A1521] uppercase">
                    CHOKLATTY BOYZ
                  </span>
                  <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.22em] font-marcellus text-[#8B6B38] uppercase mt-1">
                    SINCE 2015
                  </span>
                </div>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close Navigation Menu"
                className="bg-[#4A1521] text-[#FAF6EE] p-2 rounded-lg border border-[#C5A059]/40 focus:outline-none active:scale-95 transition-transform"
              >
                <X className="w-5 h-5 text-[#E6C687]" />
              </button>
            </div>

            {/* DECORATIVE BACKGROUND GLOW */}
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-10">
              <div className="w-64 h-64 rounded-full bg-amber-400/20 blur-3xl" />
            </div>

            {/* STAGGERED MOBILE NAV ITEMS */}
            <motion.nav 
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                open: { transition: { staggerChildren: 0.05, delayChildren: 0.08 } },
                closed: { transition: { staggerChildren: 0.04, staggerDirection: -1 } }
              }}
              className="my-auto py-6 flex flex-col items-center space-y-4"
            >
              {NAV_ITEMS.map((item) => {
                const isActive = activeTab === item.label;
                return (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item)}
                    variants={{
                      open: { opacity: 1, y: 0 },
                      closed: { opacity: 0, y: 15 }
                    }}
                    className={`text-base sm:text-lg font-medium tracking-[0.2em] uppercase font-cinzel transition-colors ${
                      isActive ? 'text-[#4A1521] font-bold border-b-2 border-[#4A1521] pb-1' : 'text-[#6B5242]'
                    }`}
                  >
                    {item.label}
                  </motion.a>
                );
              })}
            </motion.nav>

            {/* MOBILE MENU BOTTOM BADGE */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="pt-4 border-t border-[#C5A059]/20 flex items-center justify-center"
            >
              <div className="bg-[#4A1521] text-[#FAF6EE] px-5 py-2.5 rounded-lg border border-[#C5A059]/40 flex items-center space-x-3 w-full max-w-xs justify-between">
                <div className="flex flex-col text-left">
                  <span className="text-[11px] font-semibold tracking-widest text-[#E6C687] uppercase font-marcellus">
                    12TH YEAR
                  </span>
                  <span className="text-[13px] font-bold tracking-wider font-cinzel text-white">
                    2026
                  </span>
                </div>
                <div className="text-[#C5A059] text-xs">
                  ✦
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
