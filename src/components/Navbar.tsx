import React, { useState } from 'react';
import { Menu, X, Users } from 'lucide-react';
import wakisshaSvgLogo from '../assets/wakissha-logo.svg';

interface NavbarProps {
  onJoinUs: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onJoinUs }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-[#0b1325]/95 backdrop-blur-md border-b border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          
          {/* Zone 1: Brand with Official WAKISSHA Logo */}
          <a 
            href="#hero" 
            className="group flex items-center gap-3.5 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-sm"
          >
            <div className="bg-white p-1 rounded-lg border border-amber-400/50 shadow-md shadow-amber-950/30 group-hover:scale-105 transition-transform flex items-center justify-center">
              <img 
                src={wakisshaSvgLogo} 
                alt="Official WAKISSHA Logo - Wakiso Secondary School Headteachers Association" 
                className="w-14 h-9 object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-jubilee text-2xl sm:text-3xl font-extrabold tracking-wider text-slate-100 group-hover:text-amber-400 transition-colors leading-none">
                WAKISSHA
              </span>
              <span className="text-[10px] uppercase tracking-widest text-amber-400 font-semibold mt-1">
                25 Years Silver Jubilee
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a 
              href="#about" 
              className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 py-1"
            >
              About
            </a>
            <a 
              href="#journey" 
              className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 py-1"
            >
              25-Year Milestones
            </a>
            <a 
              href="#zones" 
              className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 py-1"
            >
              Member Zones
            </a>
            <a 
              href="#events" 
              className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 py-1"
            >
              Today's Celebration
            </a>
            <a 
              href="#guestbook" 
              className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 py-1"
            >
              Tribute Wall
            </a>
          </nav>

          {/* Zone 3: 1 Primary Action "Join Us" */}
          <div className="flex items-center gap-4 shrink-0">
            <button
              onClick={onJoinUs}
              className="px-6 py-2.5 text-xs sm:text-sm font-semibold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 active:scale-95 transition-all duration-150 rounded shadow-md shadow-amber-950/20 whitespace-nowrap shrink-0 flex items-center gap-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            >
              <Users className="w-4 h-4 text-slate-950" />
              <span>Join Us</span>
            </button>

            {/* Mobile Hamburger toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-400 hover:text-white rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0d172c] border-b border-slate-800 px-6 py-5 space-y-3">
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-slate-200 hover:text-amber-400"
          >
            About WAKISSHA
          </a>
          <a
            href="#journey"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-slate-200 hover:text-amber-400"
          >
            25-Year Milestones (2001–2026)
          </a>
          <a
            href="#zones"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-slate-200 hover:text-amber-400"
          >
            Member Zones & Schools
          </a>
          <a
            href="#events"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-slate-200 hover:text-amber-400"
          >
            Today's Celebration (16 Oct 2026)
          </a>
          <a
            href="#guestbook"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-slate-200 hover:text-amber-400"
          >
            Commemorative Guestbook
          </a>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onJoinUs();
              }}
              className="w-full py-2.5 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded text-center cursor-pointer"
            >
              Join Us
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
