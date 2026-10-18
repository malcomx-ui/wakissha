import React, { useState } from 'react';
import { MAIN_CELEBRATION } from '../data/wakisshaData';
import { Calendar, Clock, MapPin, Users, Award, Sparkles, Check, CalendarPlus, CheckCircle2 } from 'lucide-react';
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
    <section id="events" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Happening Today Live Header Banner */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 bg-gradient-to-r from-blue-50/80 via-white to-amber-50/60 border border-blue-200 rounded-3xl p-6 sm:p-8 mb-12 shadow-xs">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 border border-blue-200 text-blue-900 text-xs font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
              <span>Official Silver Jubilee Celebrations · 2001 — 2026</span>
            </div>
            
            <h2 className="font-jubilee text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              {MAIN_CELEBRATION.title}
            </h2>

            <p className="text-slate-600 text-sm sm:text-base font-normal max-w-3xl">
              {MAIN_CELEBRATION.description}
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <button
              onClick={handleAddToCalendar}
              className="px-4 py-3 text-xs font-semibold text-slate-700 hover:text-blue-900 bg-white hover:bg-slate-50 border border-slate-300 rounded-lg flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-2xs"
            >
              {calendarAdded ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span className="text-emerald-700">Added to Calendar</span>
                </>
              ) : (
                <>
                  <CalendarPlus className="w-4 h-4 text-blue-700" />
                  <span>Save to Calendar (.ics)</span>
                </>
              )}
            </button>

            <button
              onClick={onJoinEvent}
              className="px-6 py-3 text-xs sm:text-sm font-bold text-white bg-blue-900 hover:bg-blue-800 active:scale-95 transition-all rounded-lg shadow-sm cursor-pointer flex items-center justify-center gap-2"
            >
              <Users className="w-4 h-4 text-blue-200" />
              <span>Join Us at the Celebrations</span>
            </button>
          </div>
        </div>

        {/* Main Event Card & Order of Program */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Official Event Brief & Protocol */}
          <div className="lg:col-span-5 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xs">
            
            <div className="flex items-center gap-3 border-b border-slate-100 pb-5">
              <div className="bg-white p-1 rounded-lg border border-slate-200 shadow-xs shrink-0">
                <img
                  src={wakisshaSvgLogo}
                  alt="WAKISSHA Logo"
                  className="w-14 h-9 object-contain"
                />
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-widest text-blue-900 font-bold block">
                  Official Milestone Convocation
                </span>
                <h3 className="font-jubilee text-lg font-bold text-slate-900">
                  Silver Jubilee Assembly
                </h3>
              </div>
            </div>

            {/* Chief Guest Spotlight */}
            <div className="bg-blue-50/70 border border-blue-200 rounded-xl p-5 space-y-2 relative overflow-hidden">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-blue-900 font-bold">
                <Award className="w-4 h-4 text-amber-600" />
                <span>Distinguished Chief Guest</span>
              </div>
              <div className="font-jubilee text-xl font-extrabold text-slate-900">
                {MAIN_CELEBRATION.guestOfHonor}
              </div>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Presiding over the landmark 25th Silver Jubilee milestone celebrating 25 years of secondary headteachers leadership, joint mock examinations, and scholastic excellence across Uganda.
              </p>
            </div>

            {/* Event Logistics */}
            <div className="space-y-3.5 text-xs text-slate-600">
              <div className="flex items-start gap-3">
                <Calendar className="w-4 h-4 text-blue-800 shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-400 block text-[11px] font-medium">Date</span>
                  <span className="font-bold text-slate-900">{MAIN_CELEBRATION.date}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-blue-800 shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-400 block text-[11px] font-medium">Time</span>
                  <span className="font-bold text-slate-900">{MAIN_CELEBRATION.time}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-blue-800 shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-400 block text-[11px] font-medium">Official Venue</span>
                  <span className="font-bold text-slate-900">{MAIN_CELEBRATION.venue}</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <div className="flex items-center gap-2 text-xs text-emerald-800 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Accreditation Open for all Secondary School Delegations</span>
              </div>
            </div>

          </div>

          {/* Right Column: Official Order of Proceedings */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xs">
            
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div>
                <h3 className="font-jubilee text-xl font-bold text-slate-900">
                  Official Order of Proceedings
                </h3>
                <span className="text-xs text-slate-500 font-medium">Friday, 16th October 2026</span>
              </div>
              <span className="text-xs font-semibold text-blue-900 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                Official Program
              </span>
            </div>

            {/* Program Timeline Items */}
            <div className="space-y-4">
              {MAIN_CELEBRATION.program.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50 border border-slate-200 hover:border-blue-300 rounded-xl p-4 transition-colors"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs mb-1.5">
                    <span className="font-mono font-bold text-blue-900">{item.time}</span>
                    <span className="text-[11px] text-slate-500 font-medium">Session {idx + 1}</span>
                  </div>

                  <h4 className="font-jubilee text-base font-bold text-slate-900">
                    {item.activity}
                  </h4>

                  <p className="text-xs text-slate-600 mt-1 leading-relaxed font-normal">
                    {item.details}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-2 text-center">
              <button
                onClick={onJoinEvent}
                className="w-full sm:w-auto px-8 py-3 text-xs sm:text-sm font-bold text-white bg-blue-900 hover:bg-blue-800 rounded-lg shadow-sm cursor-pointer inline-flex items-center justify-center gap-2"
              >
                <Users className="w-4 h-4 text-blue-200" />
                <span>Join Us at the Celebrations</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
