import React from 'react';
import { MapPin, Calendar, Heart, Phone, Mail, Navigation } from 'lucide-react';
import { YoutubeIcon, InstagramIcon } from './SocialIcons';
import { FESTIVAL_INFO } from '../data/festival';
import logoImg from '../assets/logo.png';

export default function ContactFooter() {
  return (
    <footer id="contact" className="relative w-full bg-[#2B0A11] text-[#FAF3E0] pt-16 pb-8 border-t-2 border-[#C5A059]/40 overflow-hidden">
      
      {/* BACKGROUND MANDALA WATERMARK */}
      <div className="absolute top-0 right-0 w-96 h-96 opacity-5 pointer-events-none text-[#D4AF37] translate-x-20 -translate-y-20">
        <svg viewBox="0 0 200 200" fill="currentColor">
          <circle cx="100" cy="100" r="90" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#C5A059]/25">
          
          {/* BRAND COLUMN (COLS 1-5) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <img src={logoImg} alt="Choklaty Boyz Logo" className="h-16 w-auto object-contain mix-blend-screen" />
              <div className="flex flex-col text-left leading-none">
                <span className="text-xl font-black tracking-[0.16em] font-cinzel text-[#FAF3E0] uppercase">
                  CHOKLATY BOYZ
                </span>
                <span className="text-xs font-bold tracking-[0.22em] font-marcellus text-[#D4AF37] uppercase mt-1">
                  SINCE 2015 • K.G.F.
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#E8DDD0]/80 leading-relaxed font-body max-w-md">
              Celebrating 12 years of sacred tradition, community unity, and devotion at Swarnakuppam, K.G.F. Join us for our 2026 Ganesh Chaturthi celebrations!
            </p>

            {/* SOCIAL MEDIA CHANNELS */}
            <div className="pt-2 space-y-2">
              <h5 className="text-[11px] font-extrabold uppercase tracking-widest text-[#D4AF37] font-cinzel">
                CONNECT & FOLLOW OUR CELEBRATIONS
              </h5>
              <div className="flex flex-wrap items-center gap-2.5">
                <a
                  href="https://youtube.com/@cbkgf?si=CfwMXUSZR0YyTjA6"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Choklaty Boyz KGF YouTube Channel"
                  className="inline-flex items-center space-x-2 bg-[#FF0000]/20 hover:bg-[#FF0000] text-[#FAF3E0] border border-[#FF0000]/40 px-3.5 py-1.5 rounded-xl text-xs font-bold font-cinzel tracking-wider uppercase transition-all shadow-md active:scale-95 group"
                >
                  <YoutubeIcon className="w-4 h-4 text-[#FF4D4D] group-hover:text-white transition-colors" />
                  <span>YOUTUBE (CB KGF)</span>
                </a>

                <a
                  href="https://www.instagram.com/choklatyboyzkgf?igsh=MTVqOGllc3FjaGdlag=="
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Choklaty Boyz KGF Instagram Page"
                  className="inline-flex items-center space-x-2 bg-[#E1306C]/20 hover:bg-[#E1306C] text-[#FAF3E0] border border-[#E1306C]/40 px-3.5 py-1.5 rounded-xl text-xs font-bold font-cinzel tracking-wider uppercase transition-all shadow-md active:scale-95 group"
                >
                  <InstagramIcon className="w-4 h-4 text-[#FF69B4] group-hover:text-white transition-colors" />
                  <span>INSTAGRAM (@CHOKLATYBOYZKGF)</span>
                </a>
              </div>
            </div>
          </div>

          {/* SACRED VENUE LOCATION COLUMN (COLS 6-8) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#D4AF37] font-cinzel flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-[#D4AF37]" />
              <span>SACRED FESTIVAL VENUE</span>
            </h4>

            <div className="space-y-1 text-xs text-[#FAF3E0]">
              <p className="font-bold text-sm text-[#FAF3E0]">{FESTIVAL_INFO.venue.title}</p>
              <p className="text-[#E8DDD0]">{FESTIVAL_INFO.venue.area}</p>
              <p className="text-[#C5A059] uppercase font-mono">{FESTIVAL_INFO.venue.city}</p>
            </div>

            <div className="pt-2">
              <a
                href={FESTIVAL_INFO.venue.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-[#4A1521] hover:bg-[#3D101A] text-[#D4AF37] border border-[#C5A059]/60 px-4 py-2 rounded-xl text-xs font-bold font-cinzel tracking-wider uppercase transition-all shadow-md"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>OPEN MAP DIRECTIONS</span>
              </a>
            </div>
          </div>

          {/* QUICK LINKS / CONTACT COLUMN (COLS 9-12) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#D4AF37] font-cinzel flex items-center space-x-2">
              <Calendar className="w-4 h-4 text-[#D4AF37]" />
              <span>FESTIVAL DATES</span>
            </h4>

            <div className="space-y-1.5 text-xs text-[#E8DDD0]">
              <p><strong className="text-[#FAF3E0]">Sthapana & Homam:</strong> 14 SEP @ 6:30 PM</p>
              <p><strong className="text-[#FAF3E0]">Daily Pooja & Aarti:</strong> 9:00/9:30 AM & 7:30 PM</p>
              <p><strong className="text-[#FAF3E0]">Gomatha Pooja:</strong> 17 SEP @ 7:00 PM</p>
              <p><strong className="text-[#FAF3E0]">Bharatanatyam:</strong> 19 SEP @ 6:00 PM</p>
              <p><strong className="text-[#FAF3E0]">Grand Visarjan:</strong> 20 SEP @ 3:00 PM</p>
            </div>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT STRIP */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#C5A059]/80 gap-4">
          <p className="font-mono text-[11px]">
            © 2015 – 2026 Choklaty Boyz Swarnakuppam, K.G.F. All Rights Reserved.
          </p>

          <div className="flex items-center space-x-2 text-[11px] font-sans">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-[#FF3B5C] fill-current" />
            <span>for Lord Ganesha</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
