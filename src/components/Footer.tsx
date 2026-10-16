import React from 'react';
import { Mail, Phone, MapPin, ShieldCheck, Users, Globe } from 'lucide-react';
import wakisshaSvgLogo from '../assets/wakissha-logo.svg';

interface FooterProps {
  onJoinUs: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onJoinUs }) => {
  return (
    <footer className="bg-[#070c18] border-t border-slate-800 text-slate-400 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Col 1 & 2: Brand & Jubilee Legacy */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src={wakisshaSvgLogo} 
                alt="WAKISSHA Official SVG Logo" 
                className="w-12 h-12 object-contain rounded-full border border-amber-400/40 p-0.5 bg-slate-950" 
              />
              <div className="flex flex-col">
                <span className="font-jubilee text-2xl font-bold tracking-wider text-white">
                  WAKISSHA
                </span>
                <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold">
                  Silver Jubilee 2001 — 2026
                </span>
              </div>
            </div>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-md font-light">
              Wakiso Secondary Schools Headteachers Association (WAKISSHA) is the umbrella association uniting secondary school heads across Wakiso District, Uganda. Celebrating 25 years of academic leadership, unity, and excellence.
            </p>

            <div className="flex items-center gap-2 text-xs text-amber-400/90 pt-1">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>Registered Under Ministry of Education and Sports (MoES)</span>
            </div>
          </div>

          {/* Col 3: Navigation Links */}
          <div className="space-y-3">
            <h4 className="font-jubilee text-sm font-semibold uppercase tracking-wider text-slate-200">
              Celebration Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#about" className="hover:text-amber-400 transition-colors">About WAKISSHA</a>
              </li>
              <li>
                <a href="#journey" className="hover:text-amber-400 transition-colors">25-Year Milestones</a>
              </li>
              <li>
                <a href="#zones" className="hover:text-amber-400 transition-colors">Member Zones & Schools</a>
              </li>
              <li>
                <a href="#events" className="hover:text-amber-400 transition-colors">Silver Jubilee Program</a>
              </li>
              <li>
                <a href="#guestbook" className="hover:text-amber-400 transition-colors">Commemorative Tribute Wall</a>
              </li>
            </ul>
          </div>

          {/* Col 4: Educational Zones */}
          <div className="space-y-3">
            <h4 className="font-jubilee text-sm font-semibold uppercase tracking-wider text-slate-200">
              District Zones
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>Kyadondo Zone Secretariat</li>
              <li>Busiro Zone Secretariat</li>
              <li>Kira Zone Secretariat</li>
              <li>Kasangati Zone Secretariat</li>
              <li>Nansana Zone Secretariat</li>
              <li>Entebbe Municipality Zone</li>
            </ul>
          </div>

          {/* Col 5: Verified Official Secretariat & Contacts */}
          <div className="space-y-3">
            <h4 className="font-jubilee text-sm font-semibold uppercase tracking-wider text-slate-200">
              Official Secretariat
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  WAKISSHA Resource Centre, Wakiso District Headquarters, P.O. Box 7218, Wakiso, Uganda
                </span>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <div>+256 753 857 166</div>
                  <div>+256 773 916 648 / +256 783 175 297</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="mailto:info@wakissha.ug" className="text-amber-300 hover:underline">
                  info@wakissha.ug
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="https://wakissha.ug" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-amber-300">
                  www.wakissha.ug
                </a>
              </div>

              <div className="pt-2">
                <button
                  onClick={onJoinUs}
                  className="w-full px-3 py-2 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded text-center transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <Users className="w-3.5 h-3.5" />
                  <span>Join the Celebrations</span>
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2001 — 2026 Wakiso Secondary Schools Headteachers Association (WAKISSHA). All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <a href="mailto:info@wakissha.ug" className="hover:text-amber-300 transition-colors">info@wakissha.ug</a>
            <span aria-hidden="true">·</span>
            <span>25th Silver Jubilee Commemoration</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
