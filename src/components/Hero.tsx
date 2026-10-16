import React from 'react';
import { Users, ChevronRight, ShieldCheck, Sparkles, Milestone as MilestoneIcon } from 'lucide-react';
import { JUBILEE_METRICS } from '../data/wakisshaData';
import wakisshaSvgLogo from '../assets/wakissha-logo.svg';

interface HeroProps {
  onJoinUs: () => void;
  onExploreMilestones: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onJoinUs, onExploreMilestones }) => {
  return (
    <section id="hero" className="relative pt-12 pb-20 overflow-hidden bg-gradient-to-b from-[#0b1325] via-[#0d172e] to-[#0a1122]">
      {/* Celebratory ambient backdrop */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-amber-500/10 via-amber-600/5 to-transparent blur-3xl -z-10"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 2-Column Hero Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center pt-4 pb-12">
          
          {/* Left Column: Value Proposition & Academic Authority */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Unboxed Metadata Kicker */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wide text-amber-400">
              <span className="uppercase">Wakiso Secondary Schools Headteachers Association</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-300 font-normal">Est. 2001</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-amber-300">25 Years Silver Jubilee</span>
            </div>

            {/* Stately Display Headline with text-wrap: balance */}
            <h1 className="font-jubilee text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] max-w-2xl" style={{ textWrap: 'balance' }}>
              Celebrating 25 Years of Academic Excellence & Secondary Leadership
            </h1>

            {/* Narrative Body Copy */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-light">
              For a quarter-century, WAKISSHA has stood as the pillar of secondary education governance across Wakiso District—uniting over 380 institutions, honoring headteacher leadership, and nurturing generations of exceptional Ugandan scholars.
            </p>

            {/* Action Buttons: "Join Us" and "Explore 25-Year Milestones" */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onJoinUs}
                className="px-8 py-3.5 text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 active:scale-95 transition-all duration-150 rounded shadow-lg shadow-amber-950/30 whitespace-nowrap flex items-center gap-2.5 cursor-pointer focus-visible:ring-2 focus-visible:ring-amber-400"
              >
                <Users className="w-4 h-4 text-slate-950" />
                <span>Join Us</span>
              </button>

              <button
                onClick={onExploreMilestones}
                className="px-6 py-3.5 text-sm font-semibold text-slate-200 hover:text-white bg-slate-900/80 hover:bg-slate-800/90 border border-slate-700 hover:border-slate-600 active:scale-95 transition-all duration-150 rounded whitespace-nowrap flex items-center gap-2 cursor-pointer focus-visible:ring-2 focus-visible:ring-slate-400"
              >
                <MilestoneIcon className="w-4 h-4 text-amber-400" />
                <span>Explore 25-Year Milestones</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>
            </div>

            {/* Trust and Verification Notes */}
            <div className="pt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-400 border-t border-slate-800/80">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <span>Endorsed by Ministry of Education & Sports (MoES)</span>
              </div>
              <span aria-hidden="true" className="text-slate-700 hidden sm:inline">|</span>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>6 Zones · 380+ Secondary Schools</span>
              </div>
            </div>
          </div>

          {/* Right Column: Official WAKISSHA Logo Presentation */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group w-full max-w-[460px]">
              
              {/* Outer celebratory glow */}
              <div className="absolute -inset-2 bg-gradient-to-br from-amber-500/30 via-red-600/15 to-yellow-400/30 rounded-3xl blur-md group-hover:blur-lg transition duration-300" />
              
              <div className="relative bg-[#0d162a] border-2 border-amber-500/40 rounded-2xl p-6 sm:p-7 shadow-2xl overflow-hidden">
                
                {/* Official WAKISSHA Logo Card */}
                <div className="relative bg-white rounded-xl overflow-hidden p-6 sm:p-8 flex items-center justify-center border border-slate-200 shadow-inner">
                  <img
                    src={wakisshaSvgLogo}
                    alt="Official WAKISSHA Logo - Wakiso Secondary School Headteachers Association"
                    className="w-full h-auto max-h-[260px] object-contain group-hover:scale-102 transition-transform duration-300"
                  />
                </div>

                {/* Silver Jubilee Commemorative Ribbon */}
                <div className="mt-4 pt-3 border-t border-slate-800 text-center space-y-1">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-semibold uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    <span>Official Association Emblem · 2001 — 2026</span>
                  </div>
                  <h3 className="font-jubilee text-base font-bold text-white tracking-wide pt-1">
                    WAKISSHA · UNITY FOR EXCELLENCE
                  </h3>
                  <p className="text-[11px] text-slate-400">
                    Wakiso Secondary School Headteachers Association
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width Statistical Milestone KPI Strip */}
        <div className="mt-8 pt-8 border-t border-slate-800/80">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {JUBILEE_METRICS.map((metric, idx) => (
              <div 
                key={idx} 
                className="bg-[#0f1930]/60 border border-slate-800/80 hover:border-amber-500/30 transition-colors rounded-xl p-5"
              >
                <div className="font-jubilee text-3xl sm:text-4xl lg:text-5xl font-extrabold text-amber-400 tabular-nums">
                  {metric.value}
                </div>
                <div className="text-sm font-semibold text-slate-200 mt-2">
                  {metric.label}
                </div>
                <div className="text-xs text-slate-400 mt-1">
                  {metric.sub}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
