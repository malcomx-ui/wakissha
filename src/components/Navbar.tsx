import React, { useState } from 'react';
import { Menu, X, Users, Sparkles } from 'lucide-react';
import wakisshaSvgLogo from '../assets/wakissha-logo.svg';

interface NavbarProps {
  onJoinUs: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onJoinUs }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          
          {/* Zone 1: Brand with Official WAKISSHA Logo */}
          <a 
            href="#hero" 
            className="group flex items-center gap-3.5 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-sm"
          >
            <div className="bg-white p-1 rounded-lg border border-slate-200 shadow-xs group-hover:scale-105 transition-transform flex items-center justify-center">
              <img 
                src={wakisshaSvgLogo} 
                alt="Official WAKISSHA Logo - Wakiso Secondary School Headteachers Association" 
                className="w-14 h-9 object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-jubilee text-2xl sm:text-3xl font-extrabold tracking-wider text-blue-950 group-hover:text-blue-800 transition-colors leading-none">
                WAKISSHA
              </span>
              <span className="text-[10px] uppercase tracking-widest text-amber-700 font-bold mt-1 flex items-center gap-1">
                <Sparkles className="w-2.5 h-2.5 text-amber-500" />
                25 Years Silver Jubilee
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-700">
            <a 
              href="#journey" 
              className="hover:text-blue-900 transition-colors whitespace-nowrap shrink-0 py-1"
            >
              25-Year Milestones
            </a>
            <a 
              href="#about" 
              className="hover:text-blue-900 transition-colors whitespace-nowrap shrink-0 py-1"
            >
              Governance & Leaders
            </a>
            <a 
              href="#resource-centre" 
              className="hover:text-blue-900 transition-colors whitespace-nowrap shrink-0 py-1"
            >
              Resource Centre
            </a>
            <a 
              href="#zones" 
              className="hover:text-blue-900 transition-colors whitespace-nowrap shrink-0 py-1"
            >
              Member Zones
            </a>
            <a 
              href="#events" 
              className="hover:text-blue-900 transition-colors whitespace-nowrap shrink-0 py-1"
            >
              Grand Celebration
            </a>
            <a 
              href="#guestbook" 
              className="hover:text-blue-900 transition-colors whitespace-nowrap shrink-0 py-1"
            >
              Tribute Wall
            </a>
          </nav>

          {/* Zone 3: 1 Primary Action "Join Us" */}
          <div className="flex items-center gap-4 shrink-0">
            <button
              onClick={onJoinUs}
              className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-blue-900 hover:bg-blue-800 active:scale-95 transition-all duration-150 rounded-lg shadow-sm whitespace-nowrap shrink-0 flex items-center gap-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
            >
              <Users className="w-4 h-4 text-blue-200" />
              <span>Join Us</span>
            </button>

            {/* Mobile Hamburger toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-600 hover:text-slate-900 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-5 space-y-3 shadow-md">
          <a
            href="#journey"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-slate-700 hover:text-blue-900"
          >
            25-Year Milestones (2001–2026)
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-slate-700 hover:text-blue-900"
          >
            Governance & Executive Leadership
          </a>
          <a
            href="#resource-centre"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-slate-700 hover:text-blue-900"
          >
            WAKISSHA Resource Centre & Grounds
          </a>
          <a
            href="#zones"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-slate-700 hover:text-blue-900"
          >
            6 Educational Zones & Member Schools
          </a>
          <a
            href="#events"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-slate-700 hover:text-blue-900"
          >
            Grand Silver Jubilee Celebration
          </a>
          <a
            href="#guestbook"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-slate-700 hover:text-blue-900"
          >
            Commemorative Tribute Wall
          </a>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onJoinUs();
              }}
              className="w-full py-2.5 text-xs font-semibold text-white bg-blue-900 hover:bg-blue-800 rounded-lg text-center cursor-pointer shadow-xs"
            >
              Join Us / Secretariat Inquiries
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
