import React, { useState } from 'react';
import { MAIN_CELEBRATION } from '../data/wakisshaData';
import { Calendar, Clock, MapPin, Users, Award, Sparkles, Check, CalendarPlus, ChevronRight, CheckCircle2 } from 'lucide-react';
import wakisshaSvgLogo from '../assets/wakissha-logo.svg';

interface JubileeEventsProps {
  onJoinEvent: () => void;
}

export const JubileeEvents: React.FC<JubileeEventsProps> = ({ onJoinEvent }) => {
  const [calendarAdded, setCalendarAdded] = useState(false);

  const handleAddToCalendar = () => {
    const icsContent = `BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:-//WAKISSHA//Silver Jubilee 2026//EN\nBEGIN:VEVENT\nSUMMARY:${MAIN_CELEBRATION.title}\nDESCRIPTION:${MAIN_CELEBRATION.description} Chief Guest: ${MAIN_CELEBRATION.guestOfHonor}\nLOCATION:${MAIN_CELEBRATION.venue}\nEND:VEVENT\nEND:VCALENDAR`;
    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', `wakissha-silver-jubilee-celebrations.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setCalendarAdded(true);
    setTimeout(() => setCalendarAdded(false), 3000);
  };

  return (
    <section id="events" className="py-20 bg-[#0b1325] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Happening Today Live Header Banner */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 bg-gradient-to-r from-amber-500/15 via-red-500/10 to-amber-500/15 border border-amber-500/40 rounded-2xl p-6 sm:p-8 mb-12 shadow-lg">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/20 border border-red-500/40 text-red-300 text-xs font-bold uppercase tracking-wider animate-pulse">
              <span className="w-2 h-2 rounded-full bg-red-500" />
              <span>Happening Today · Friday 16 October 2026</span>
            </div>
            
            <h2 className="font-jubilee text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              {MAIN_CELEBRATION.title}
            </h2>

            <p className="text-slate-300 text-sm sm:text-base font-light max-w-3xl">
              {MAIN_CELEBRATION.description}
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <button
              onClick={handleAddToCalendar}
              className="px-4 py-3 text-xs font-medium text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-lg flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              {calendarAdded ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-300">Added to Calendar</span>
                </>
              ) : (
                <>
                  <CalendarPlus className="w-4 h-4 text-amber-400" />
                  <span>Save to Calendar</span>
                </>
              )}
            </button>

            <button
              onClick={onJoinEvent}
              className="px-6 py-3 text-xs sm:text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 active:scale-95 transition-all rounded shadow-md cursor-pointer flex items-center justify-center gap-2"
            >
              <Users className="w-4 h-4 text-slate-950" />
              <span>Join Us Today</span>
            </button>
          </div>
        </div>

        {/* Main Event Card & Order of Program */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Official Event Brief & Protocol */}
          <div className="lg:col-span-5 bg-[#0d162a] border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
            
            <div className="flex items-center gap-3 border-b border-slate-800 pb-5">
              <div className="bg-white p-1 rounded-lg border border-amber-400/50 shadow shrink-0">
                <img
                  src={wakisshaSvgLogo}
                  alt="WAKISSHA Logo"
                  className="w-14 h-9 object-contain"
                />
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-widest text-amber-400 font-semibold block">
                  Official Milestone Convocation
                </span>
                <h3 className="font-jubilee text-lg font-bold text-white">
                  Silver Jubilee Assembly
                </h3>
              </div>
            </div>

            {/* Chief Guest Spotlight */}
            <div className="bg-[#101b33] border-2 border-amber-400/40 rounded-xl p-5 space-y-2 relative overflow-hidden">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-amber-400 font-bold">
                <Award className="w-4 h-4 text-amber-400" />
                <span>Distinguished Chief Guest</span>
              </div>
              <div className="font-jubilee text-xl font-bold text-white">
                {MAIN_CELEBRATION.guestOfHonor}
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Presiding over the landmark 25th Silver Jubilee milestone celebrating 25 years of secondary headteachers leadership and scholastic excellence across Uganda.
              </p>
            </div>

            {/* Event Logistics */}
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-3">
                <Calendar className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-400 block text-[11px]">Date</span>
                  <span className="font-semibold text-white">{MAIN_CELEBRATION.date}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-400 block text-[11px]">Time</span>
                  <span className="font-semibold text-white">{MAIN_CELEBRATION.time}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-400 block text-[11px]">Official Venue</span>
                  <span className="font-semibold text-white">{MAIN_CELEBRATION.venue}</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800">
              <div className="flex items-center gap-2 text-xs text-amber-300 font-medium">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Free Admission for all Secondary School Delegations</span>
              </div>
            </div>

          </div>

          {/* Right Column: Official Order of Proceedings */}
          <div className="lg:col-span-7 bg-[#0d162a] border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
            
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <h3 className="font-jubilee text-xl font-bold text-white">
                  Official Order of Proceedings
                </h3>
                <span className="text-xs text-slate-400">Friday, 16th October 2026</span>
              </div>
              <span className="text-xs font-mono text-amber-400 bg-amber-400/10 px-3 py-1 rounded border border-amber-400/30">
                Program for Today
              </span>
            </div>

            {/* Program Timeline Items */}
            <div className="space-y-4">
              {MAIN_CELEBRATION.program.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#080e1c] border border-slate-800/90 hover:border-amber-500/30 rounded-xl p-4 transition-colors"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs mb-1.5">
                    <span className="font-mono font-bold text-amber-400">{item.time}</span>
                    <span className="text-[11px] text-slate-500 font-mono">Session {idx + 1}</span>
                  </div>

                  <h4 className="font-jubilee text-base font-semibold text-white">
                    {item.activity}
                  </h4>

                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    {item.details}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-2 text-center">
              <button
                onClick={onJoinEvent}
                className="w-full sm:w-auto px-8 py-3 text-xs sm:text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 rounded shadow cursor-pointer inline-flex items-center justify-center gap-2"
              >
                <Users className="w-4 h-4 text-slate-950" />
                <span>Join Us at the Celebrations Today</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
