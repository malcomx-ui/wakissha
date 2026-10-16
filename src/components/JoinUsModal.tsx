import React, { useState } from 'react';
import { X, Sparkles, MapPin, Phone, Mail, CheckCircle, Calendar, Globe, Award, Clock } from 'lucide-react';
import { MAIN_CELEBRATION } from '../data/wakisshaData';
import wakisshaSvgLogo from '../assets/wakissha-logo.svg';

interface JoinUsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const JoinUsModal: React.FC<JoinUsModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [attendeeName, setAttendeeName] = useState('');
  const [institution, setInstitution] = useState('');
  const [savedBadge, setSavedBadge] = useState(false);

  if (!isOpen) return null;

  const handleConfirmAttendance = (e: React.FormEvent) => {
    e.preventDefault();
    setSavedBadge(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative w-full max-w-xl bg-[#0d162a] border border-amber-500/40 rounded-2xl shadow-2xl overflow-hidden my-8 animate-fade-in">
        
        {/* Modal Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#09101f]">
          <div className="flex items-center gap-3">
            <div className="bg-white p-1 rounded-lg border border-amber-400/50 shadow flex items-center justify-center">
              <img 
                src={wakisshaSvgLogo} 
                alt="WAKISSHA Logo" 
                className="w-12 h-8 object-contain" 
              />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-widest text-amber-400 font-semibold block">
                25 Years Silver Jubilee
              </span>
              <h3 className="font-jubilee text-base font-bold text-white">
                Main Celebrations Today · 16 Oct 2026
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-md transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {!savedBadge ? (
            <>
              {/* Event Spotlight */}
              <div className="bg-[#09101f] border-2 border-amber-500/40 rounded-xl p-5 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="uppercase tracking-wider text-amber-400 font-bold flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-amber-400" />
                    <span>Official Main Celebration</span>
                  </span>
                  <span className="text-red-400 font-mono font-bold bg-red-500/10 px-2 py-0.5 rounded border border-red-500/30">
                    Happening Today
                  </span>
                </div>

                <h4 className="font-jubilee text-xl font-bold text-white">
                  {MAIN_CELEBRATION.title}
                </h4>

                <div className="bg-[#101b33] p-3 rounded-lg border border-slate-800 text-xs text-slate-200 space-y-1.5">
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Chief Guest: <strong className="text-amber-300">{MAIN_CELEBRATION.guestOfHonor}</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>{MAIN_CELEBRATION.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>{MAIN_CELEBRATION.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>{MAIN_CELEBRATION.venue}</span>
                  </div>
                </div>
              </div>

              {/* Secretariat Official Protocol Info */}
              <div className="space-y-3 text-xs">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Secretariat & Protocol Office
                </div>

                <div className="bg-[#101b33] rounded-xl p-4 border border-slate-800 space-y-2.5 text-slate-300">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>
                      WAKISSHA Resource Centre, Wakiso District Headquarters, P.O. Box 7218, Wakiso, Uganda
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Phone className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <div>+256 753 857 166</div>
                      <div>+256 773 916 648 / +256 783 175 297</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Official Email: <a href="mailto:info@wakissha.ug" className="text-amber-300 font-medium hover:underline">info@wakissha.ug</a></span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Globe className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Portal: <a href="https://wakissha.ug" target="_blank" rel="noreferrer" className="text-slate-200 hover:text-amber-300">www.wakissha.ug</a></span>
                  </div>
                </div>
              </div>

              {/* Quick Attendance Souvenir */}
              <form onSubmit={handleConfirmAttendance} className="space-y-3 pt-2 border-t border-slate-800 text-xs">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                  Join Today's Celebrations · Generate Attendee Badge
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-400 mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      value={attendeeName}
                      onChange={(e) => setAttendeeName(e.target.value)}
                      placeholder="e.g. Mwalimu Grace Namuli"
                      className="w-full bg-[#080e1c] border border-slate-700 rounded-lg px-3 py-2 text-white placeholder:text-slate-600 focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-400 mb-1">School or Organization</label>
                    <input
                      type="text"
                      required
                      value={institution}
                      onChange={(e) => setInstitution(e.target.value)}
                      placeholder="e.g. King's College Budo / Alumna"
                      className="w-full bg-[#080e1c] border border-slate-700 rounded-lg px-3 py-2 text-white placeholder:text-slate-600 focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 text-xs sm:text-sm font-semibold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 rounded shadow cursor-pointer flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-slate-950" />
                  <span>I Am Attending Today's Main Celebrations!</span>
                </button>
              </form>
            </>
          ) : (
            /* Digital Celebration Card */
            <div className="space-y-5 text-center">
              <div className="inline-flex p-3 rounded-full bg-amber-400/10 border border-amber-400/40 text-amber-400">
                <CheckCircle className="w-8 h-8" />
              </div>

              <div>
                <h4 className="font-jubilee text-2xl font-bold text-white">
                  Welcome to Today's Celebrations!
                </h4>
                <p className="text-xs text-slate-300 mt-1">
                  Thank you for celebrating 25 years of scholastic excellence with WAKISSHA.
                </p>
              </div>

              {/* Commemorative Card */}
              <div className="bg-gradient-to-br from-[#101b33] to-[#070c18] border-2 border-amber-400/40 rounded-xl p-6 text-left relative overflow-hidden shadow-xl">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="bg-white p-1 rounded">
                      <img src={wakisshaSvgLogo} alt="Logo" className="w-10 h-7 object-contain" />
                    </div>
                    <div>
                      <span className="font-jubilee text-sm font-bold text-white block">WAKISSHA · 25th Silver Jubilee</span>
                      <span className="text-[10px] text-amber-400">Chief Guest: Rt. Hon. Prime Minister</span>
                    </div>
                  </div>
                  <span className="text-[10px] text-amber-300 font-mono bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/30">
                    16 Oct 2026
                  </span>
                </div>

                <div className="py-4 space-y-1">
                  <div className="text-base font-bold text-white font-jubilee">
                    {attendeeName}
                  </div>
                  <div className="text-xs text-amber-400 font-medium">
                    {institution}
                  </div>
                  <p className="text-xs text-slate-300 pt-2 italic">
                    "Honoring 25 years of unity, academic distinction, and dedicated school leadership across Wakiso District."
                  </p>
                </div>

                <div className="border-t border-slate-800 pt-3 text-[11px] text-slate-400 flex items-center justify-between">
                  <span>Wakiso Secondary School Headteachers Association</span>
                  <span className="text-amber-400">Uganda</span>
                </div>
              </div>

              <div className="flex items-center justify-center gap-3 pt-2">
                <button
                  onClick={() => window.print()}
                  className="px-4 py-2 text-xs font-semibold text-slate-200 bg-slate-800 border border-slate-700 rounded-lg cursor-pointer"
                >
                  Print Souvenir Card
                </button>
                <button
                  onClick={onClose}
                  className="px-5 py-2 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
