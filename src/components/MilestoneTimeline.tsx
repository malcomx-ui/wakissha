import React, { useState } from 'react';
import { MILESTONES } from '../data/wakisshaData';
import { Calendar, CheckCircle2, ChevronRight, ShieldCheck, Scroll, Milestone as MilestoneIcon } from 'lucide-react';
import wakisshaSvgLogo from '../assets/wakissha-logo.svg';

export const MilestoneTimeline: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const activeMilestone = MILESTONES[selectedIdx];

  return (
    <section id="journey" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-800 mb-2">
            <MilestoneIcon className="w-4 h-4 text-amber-600" />
            <span>25-Year Institutional Record</span>
            <span aria-hidden="true" className="text-slate-400">·</span>
            <span className="text-slate-600">2001 — 2026 Silver Jubilee Milestones</span>
          </div>
          <h2 className="font-jubilee text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight" style={{ textWrap: 'balance' }}>
            A Quarter Century of Transforming Secondary School Leadership
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3 font-normal leading-relaxed">
            Trace the definitive 25-year evolution of WAKISSHA—from the pioneer assembly of 34 secondary school headteachers to Uganda’s premier association of academic distinction.
          </p>
        </div>

        {/* Interactive Year Selector Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none border-b border-slate-200">
          {MILESTONES.map((m, idx) => {
            const isActive = idx === selectedIdx;
            return (
              <button
                key={m.year}
                onClick={() => setSelectedIdx(idx)}
                className={`group flex items-center gap-3 px-5 py-3 rounded-xl text-sm font-semibold whitespace-nowrap shrink-0 transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 ${
                  isActive
                    ? 'bg-blue-900 text-white shadow-sm border border-blue-900'
                    : 'bg-white text-slate-700 hover:text-blue-900 hover:bg-slate-100 border border-slate-200 shadow-2xs'
                }`}
              >
                <span className={`text-base font-jubilee ${isActive ? 'text-amber-300 font-bold' : 'text-slate-900 font-bold'}`}>
                  {m.year}
                </span>
                <span className={`text-xs hidden md:inline font-normal ${isActive ? 'text-blue-100' : 'text-slate-500'}`}>
                  {m.era}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Milestone Card & Official Institutional Ledger */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Milestone Details Card */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 flex flex-col justify-between shadow-xs">
            <div className="space-y-6">
              
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center gap-2 text-xs text-blue-900 font-bold">
                  <Calendar className="w-4 h-4 text-amber-600" />
                  <span>Era: {activeMilestone.era}</span>
                </div>
                <span className="font-jubilee text-2xl font-extrabold text-blue-900">
                  {activeMilestone.year}
                </span>
              </div>

              <div>
                <h3 className="font-jubilee text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">
                  {activeMilestone.title}
                </h3>
                <p className="text-slate-600 text-base leading-relaxed mt-4 font-normal">
                  {activeMilestone.description}
                </p>
              </div>

              {/* Landmark Impact Box */}
              <div className="bg-blue-50/60 border border-blue-200 rounded-xl p-5 mt-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-800 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs uppercase tracking-wider text-blue-900 font-bold block mb-1">
                      Key Milestone Achieved
                    </span>
                    <p className="text-sm font-semibold text-slate-800">
                      {activeMilestone.achievement}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Next / Previous Stepper Footer */}
            <div className="pt-8 mt-8 border-t border-slate-100 flex items-center justify-between">
              <button
                disabled={selectedIdx === 0}
                onClick={() => setSelectedIdx(prev => Math.max(0, prev - 1))}
                className={`text-xs font-semibold px-4 py-2 rounded-lg border transition-colors cursor-pointer ${
                  selectedIdx === 0
                    ? 'text-slate-300 border-slate-200 cursor-not-allowed bg-slate-50'
                    : 'text-slate-700 border-slate-300 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                Previous Milestone
              </button>

              <div className="text-xs text-slate-500">
                Milestone <span className="text-blue-900 font-bold">{selectedIdx + 1}</span> of {MILESTONES.length}
              </div>

              <button
                disabled={selectedIdx === MILESTONES.length - 1}
                onClick={() => setSelectedIdx(prev => Math.min(MILESTONES.length - 1, prev + 1))}
                className={`text-xs font-semibold px-4 py-2 rounded-lg border transition-colors flex items-center gap-1 cursor-pointer ${
                  selectedIdx === MILESTONES.length - 1
                    ? 'text-slate-300 border-slate-200 cursor-not-allowed bg-slate-50'
                    : 'text-blue-900 border-blue-200 bg-blue-50 hover:bg-blue-100'
                }`}
              >
                <span>Next Milestone</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Official WAKISSHA Commemorative Charter & Institutional Ledger */}
          <div className="lg:col-span-5 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xs">
            
            <div className="space-y-6">
              
              {/* Official Seal Header with exact WAKISSHA logo */}
              <div className="flex items-center gap-4 border-b border-slate-100 pb-5">
                <div className="bg-white p-1.5 rounded-lg border border-slate-200 shadow-xs flex items-center justify-center shrink-0">
                  <img
                    src={wakisshaSvgLogo}
                    alt="Official WAKISSHA Logo"
                    className="w-16 h-11 object-contain"
                  />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-blue-900 font-bold block">
                    Institutional Record
                  </span>
                  <h4 className="font-jubilee text-lg font-bold text-slate-900">
                    WAKISSHA General Assembly
                  </h4>
                  <span className="text-xs text-slate-500 font-medium">Wakiso District Secretariat</span>
                </div>
              </div>

              {/* Commemorative Resolution Box */}
              <div className="bg-amber-50/60 border border-amber-200 rounded-xl p-5 space-y-3">
                <div className="flex items-center gap-2 text-xs text-amber-900 font-bold uppercase tracking-wider">
                  <Scroll className="w-4 h-4 text-amber-700" />
                  <span>Silver Jubilee Resolution</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-serif italic">
                  "Resolved by the Headteachers of Wakiso District: That through solidarity, administrative integrity, and continuous pedagogical mentorship, no secondary school shall be left behind in academic distinction."
                </p>
                <div className="text-[11px] text-slate-500 font-mono pt-1">
                  Enacted 2001 · Reaffirmed for Silver Jubilee 2026
                </div>
              </div>

              {/* Quantitative Institutional Growth */}
              <div className="space-y-2.5">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-600">
                  Quarter-Century Growth Indicators
                </div>
                
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                    <span className="text-slate-500 block text-[11px]">Member Schools</span>
                    <span className="text-base font-extrabold text-blue-900 font-jubilee">34 → 380+</span>
                  </div>

                  <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                    <span className="text-slate-500 block text-[11px]">Scholars Nurtured</span>
                    <span className="text-base font-extrabold text-blue-900 font-jubilee">500,000+</span>
                  </div>

                  <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                    <span className="text-slate-500 block text-[11px]">District Zones</span>
                    <span className="text-base font-extrabold text-blue-900 font-jubilee">1 → 6 Zones</span>
                  </div>

                  <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                    <span className="text-slate-500 block text-[11px]">NCDC Curriculum</span>
                    <span className="text-base font-extrabold text-emerald-700 font-jubilee">Standardized</span>
                  </div>
                </div>
              </div>

            </div>

            <div className="pt-5 mt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <div className="flex items-center gap-1.5 font-medium">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Certified Secretariat Archive</span>
              </div>
              <span className="text-blue-900 font-bold">2001 — 2026</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
