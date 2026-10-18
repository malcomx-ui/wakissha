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
    <section id="hero" className="relative pt-10 pb-16 overflow-hidden bg-gradient-to-b from-blue-50/70 via-white to-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 2-Column Hero Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center pt-4 pb-12">
          
          {/* Left Column: Value Proposition & Academic Authority */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Unboxed Metadata Kicker */}
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-bold tracking-wide text-blue-900">
              <span className="uppercase">Wakiso Secondary Schools Headteachers Association</span>
              <span aria-hidden="true" className="text-slate-400">·</span>
              <span className="text-slate-600 font-normal">Est. 2001</span>
              <span aria-hidden="true" className="text-slate-400">·</span>
              <span className="text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200 flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-amber-500" />
                25 Years Silver Jubilee
              </span>
            </div>

            {/* Stately Display Headline */}
            <h1 className="font-jubilee text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15] max-w-2xl" style={{ textWrap: 'balance' }}>
              Celebrating 25 Years of Academic Excellence & Secondary Leadership
            </h1>

            {/* Narrative Body Copy */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
              For a quarter-century, WAKISSHA has stood as the pillar of secondary education governance across Wakiso District—uniting over 380 institutions, honoring headteacher leadership, coordinating Joint Mock Examinations, and nurturing generations of exceptional Ugandan scholars.
            </p>

            {/* Action Buttons: "Join Us" and "Explore 25-Year Milestones" */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onJoinUs}
                className="px-7 py-3.5 text-sm font-bold text-white bg-blue-900 hover:bg-blue-800 active:scale-95 transition-all duration-150 rounded-lg shadow-sm whitespace-nowrap flex items-center gap-2.5 cursor-pointer focus-visible:ring-2 focus-visible:ring-blue-600"
              >
                <Users className="w-4 h-4 text-blue-200" />
                <span>Join Us / Secretariat Inquiries</span>
              </button>

              <button
                onClick={onExploreMilestones}
                className="px-6 py-3.5 text-sm font-semibold text-slate-700 hover:text-blue-900 bg-white hover:bg-slate-50 border border-slate-300 active:scale-95 transition-all duration-150 rounded-lg whitespace-nowrap flex items-center gap-2 cursor-pointer shadow-xs focus-visible:ring-2 focus-visible:ring-blue-600"
              >
                <MilestoneIcon className="w-4 h-4 text-blue-700" />
                <span>Explore 25-Year Milestones</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>
            </div>

            {/* Trust and Verification Notes */}
            <div className="pt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-500 border-t border-slate-200">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Recognized by Ministry of Education & Sports (MoES)</span>
              </div>
              <span aria-hidden="true" className="text-slate-300 hidden sm:inline">|</span>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-600" />
                <span>6 Zones · 380+ Affiliated Secondary Schools</span>
              </div>
            </div>
          </div>

          {/* Right Column: Official WAKISSHA Logo Presentation */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group w-full max-w-[460px]">
              
              <div className="relative bg-white border-2 border-blue-100 rounded-3xl p-6 sm:p-8 shadow-md overflow-hidden">
                
                {/* Official WAKISSHA Logo Card */}
                <div className="relative bg-slate-50/60 rounded-2xl overflow-hidden p-6 sm:p-8 flex items-center justify-center border border-slate-100">
                  <img
                    src={wakisshaSvgLogo}
                    alt="Official WAKISSHA Logo - Wakiso Secondary School Headteachers Association"
                    className="w-full h-auto max-h-[250px] object-contain group-hover:scale-102 transition-transform duration-300"
                  />
                </div>

                {/* Silver Jubilee Commemorative Ribbon */}
                <div className="mt-5 pt-3 border-t border-slate-100 text-center space-y-1">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-900 text-xs font-bold uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                    <span>Official Association Emblem · 2001 — 2026</span>
                  </div>
                  <h3 className="font-jubilee text-lg font-bold text-slate-900 tracking-wide pt-1">
                    WAKISSHA · UNITY FOR EXCELLENCE
                  </h3>
                  <p className="text-xs text-slate-500 font-medium">
                    Wakiso Secondary School Headteachers Association
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width Statistical Milestone KPI Strip */}
        <div className="mt-4 pt-8 border-t border-slate-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {JUBILEE_METRICS.map((metric, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-slate-200 hover:border-blue-300 transition-all rounded-2xl p-5 shadow-xs"
              >
                <div className="font-jubilee text-3xl sm:text-4xl lg:text-5xl font-extrabold text-blue-900 tabular-nums">
                  {metric.value}
                </div>
                <div className="text-sm font-bold text-slate-800 mt-2 font-jubilee">
                  {metric.label}
                </div>
                <div className="text-xs text-slate-500 mt-1">
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
