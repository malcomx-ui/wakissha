import React, { useState } from 'react';
import { MILESTONES } from '../data/wakisshaData';
import { Calendar, CheckCircle2, ChevronRight, ShieldCheck, Scroll, Milestone as MilestoneIcon } from 'lucide-react';
import wakisshaSvgLogo from '../assets/wakissha-logo.svg';

export const MilestoneTimeline: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const activeMilestone = MILESTONES[selectedIdx];

  return (
    <section id="journey" className="py-20 bg-[#080e1c] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
            <MilestoneIcon className="w-4 h-4" />
            <span>25-Year Retrospective</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="text-slate-300">2001 — 2026 Silver Jubilee Milestones</span>
          </div>
          <h2 className="font-jubilee text-3xl sm:text-4xl font-bold text-white tracking-tight" style={{ textWrap: 'balance' }}>
            A Quarter Century of Transforming Secondary School Leadership
          </h2>
          <p className="text-slate-300 text-base sm:text-lg mt-3 font-light leading-relaxed">
            Trace the definitive 25-year evolution of WAKISSHA—from the pioneer assembly of 34 secondary school headteachers to Uganda’s premier association of academic distinction.
          </p>
        </div>

        {/* Interactive Year Selector Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none border-b border-slate-800">
          {MILESTONES.map((m, idx) => {
            const isActive = idx === selectedIdx;
            return (
              <button
                key={m.year}
                onClick={() => setSelectedIdx(idx)}
                className={`group flex items-center gap-3 px-5 py-3 rounded-lg text-sm font-semibold whitespace-nowrap shrink-0 transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 ${
                  isActive
                    ? 'bg-amber-400/15 text-amber-300 border border-amber-400/50 shadow-md shadow-amber-950/20'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 border border-transparent'
                }`}
              >
                <span className={`text-base font-jubilee ${isActive ? 'text-amber-400 font-bold' : 'text-slate-400'}`}>
                  {m.year}
                </span>
                <span className="text-xs hidden md:inline font-normal text-slate-300">
                  {m.era}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Milestone Card & Official Institutional Ledger */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Milestone Details Card */}
          <div className="lg:col-span-7 bg-[#0d162a] border border-slate-800 rounded-2xl p-6 sm:p-10 flex flex-col justify-between">
            <div className="space-y-6">
              
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center gap-2 text-xs text-amber-400 font-medium">
                  <Calendar className="w-4 h-4" />
                  <span>Era: {activeMilestone.era}</span>
                </div>
                <span className="font-jubilee text-2xl font-bold text-amber-400">
                  {activeMilestone.year}
                </span>
              </div>

              <div>
                <h3 className="font-jubilee text-2xl sm:text-3xl font-semibold text-white leading-tight">
                  {activeMilestone.title}
                </h3>
                <p className="text-slate-300 text-base leading-relaxed mt-4">
                  {activeMilestone.description}
                </p>
              </div>

              {/* Landmark Impact Box */}
              <div className="bg-[#101b33] border border-amber-500/20 rounded-xl p-5 mt-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs uppercase tracking-wider text-amber-300 font-semibold block mb-1">
                      Key Milestone Achieved
                    </span>
                    <p className="text-sm font-medium text-slate-200">
                      {activeMilestone.achievement}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Next / Previous Stepper Footer */}
            <div className="pt-8 mt-8 border-t border-slate-800 flex items-center justify-between">
              <button
                disabled={selectedIdx === 0}
                onClick={() => setSelectedIdx(prev => Math.max(0, prev - 1))}
                className={`text-xs font-semibold px-4 py-2 rounded border transition-colors cursor-pointer ${
                  selectedIdx === 0
                    ? 'text-slate-600 border-slate-800 cursor-not-allowed'
                    : 'text-slate-300 border-slate-700 hover:bg-slate-800 hover:text-white'
                }`}
              >
                Previous Milestone
              </button>

              <div className="text-xs text-slate-400">
                Milestone <span className="text-amber-400 font-semibold">{selectedIdx + 1}</span> of {MILESTONES.length}
              </div>

              <button
                disabled={selectedIdx === MILESTONES.length - 1}
                onClick={() => setSelectedIdx(prev => Math.min(MILESTONES.length - 1, prev + 1))}
                className={`text-xs font-semibold px-4 py-2 rounded border transition-colors flex items-center gap-1 cursor-pointer ${
                  selectedIdx === MILESTONES.length - 1
                    ? 'text-slate-600 border-slate-800 cursor-not-allowed'
                    : 'text-amber-300 border-amber-500/40 hover:bg-amber-400/10 hover:text-amber-200'
                }`}
              >
                <span>Next Milestone</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Official WAKISSHA Commemorative Charter & Institutional Ledger */}
          <div className="lg:col-span-5 bg-[#0d162a] border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
            
            <div className="space-y-6">
              
              {/* Official Seal Header with exact WAKISSHA logo */}
              <div className="flex items-center gap-4 border-b border-slate-800 pb-5">
                <div className="bg-white p-1.5 rounded-lg border border-amber-400/50 shadow flex items-center justify-center shrink-0">
                  <img
                    src={wakisshaSvgLogo}
                    alt="Official WAKISSHA Logo"
                    className="w-16 h-11 object-contain"
                  />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-amber-400 font-semibold block">
                    Institutional Record
                  </span>
                  <h4 className="font-jubilee text-lg font-bold text-white">
                    WAKISSHA General Assembly
                  </h4>
                  <span className="text-xs text-slate-400">Wakiso District Secretariat</span>
                </div>
              </div>

              {/* Commemorative Resolution Box */}
              <div className="bg-[#09101f] border border-slate-800 rounded-xl p-5 space-y-3">
                <div className="flex items-center gap-2 text-xs text-amber-300 font-semibold uppercase tracking-wider">
                  <Scroll className="w-4 h-4 text-amber-400" />
                  <span>Silver Jubilee Resolution</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-serif italic">
                  "Resolved by the Headteachers of Wakiso District: That through solidarity, administrative integrity, and continuous pedagogical mentorship, no secondary school shall be left behind in academic distinction."
                </p>
                <div className="text-[11px] text-slate-500 font-mono pt-1">
                  Enacted 2001 · Reaffirmed for Silver Jubilee 2026
                </div>
              </div>

              {/* Quantitative Institutional Growth */}
              <div className="space-y-2.5">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Quarter-Century Growth Indicators
                </div>
                
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="bg-[#101b33] p-3 rounded-lg border border-slate-800">
                    <span className="text-slate-400 block text-[11px]">Member Schools</span>
                    <span className="text-base font-bold text-amber-400 font-jubilee">34 → 380+</span>
                  </div>

                  <div className="bg-[#101b33] p-3 rounded-lg border border-slate-800">
                    <span className="text-slate-400 block text-[11px]">Scholars Nurtured</span>
                    <span className="text-base font-bold text-amber-400 font-jubilee">500,000+</span>
                  </div>

                  <div className="bg-[#101b33] p-3 rounded-lg border border-slate-800">
                    <span className="text-slate-400 block text-[11px]">District Zones</span>
                    <span className="text-base font-bold text-amber-400 font-jubilee">1 → 6 Zones</span>
                  </div>

                  <div className="bg-[#101b33] p-3 rounded-lg border border-slate-800">
                    <span className="text-slate-400 block text-[11px]">NCDC Curriculum</span>
                    <span className="text-base font-bold text-amber-400 font-jubilee">Standardized</span>
                  </div>
                </div>
              </div>

            </div>

            <div className="pt-5 mt-6 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <span>Certified Secretariat Archive</span>
              </div>
              <span className="text-amber-400 font-medium">2001 — 2026</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
