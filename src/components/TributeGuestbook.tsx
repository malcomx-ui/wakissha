import React, { useState, useEffect } from 'react';
import { INITIAL_GUESTBOOK, GuestbookEntry, ZONES } from '../data/wakisshaData';
import { Send, CheckCircle, Sparkles, MapPin, Mail, ArrowUpRight, Heart } from 'lucide-react';

export const TributeGuestbook: React.FC = () => {
  const [entries, setEntries] = useState<GuestbookEntry[]>(() => {
    try {
      const saved = localStorage.getItem('wakissha_guestbook_entries');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // Fallback
    }
    return INITIAL_GUESTBOOK;
  });

  const [name, setName] = useState('');
  const [institution, setInstitution] = useState('');
  const [role, setRole] = useState('Headteacher');
  const [zone, setZone] = useState('Kyadondo Zone');
  const [message, setMessage] = useState('');
  const [formSuccess, setFormSuccess] = useState(false);
  const [lastSubmittedEntry, setLastSubmittedEntry] = useState<GuestbookEntry | null>(null);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    try {
      localStorage.setItem('wakissha_guestbook_entries', JSON.stringify(entries));
    } catch {
      // Ignore
    }
  }, [entries]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !institution.trim() || !message.trim()) {
      setErrorMsg('Please complete all required fields.');
      return;
    }

    const newEntry: GuestbookEntry = {
      id: `gb-${Date.now()}`,
      name: name.trim(),
      institution: institution.trim(),
      role,
      zone,
      message: message.trim(),
      timestamp: 'Just now'
    };

    setEntries([newEntry, ...entries]);
    setLastSubmittedEntry(newEntry);
    setName('');
    setInstitution('');
    setMessage('');
    setErrorMsg('');
    setFormSuccess(true);
    setTimeout(() => setFormSuccess(false), 7000);
  };

  const getMailtoLink = (entryName?: string, entryInstitution?: string, entryMsg?: string) => {
    const subject = encodeURIComponent(`WAKISSHA 25th Silver Jubilee Tribute${entryName ? ` - ${entryName}` : ''}`);
    const body = encodeURIComponent(
      `Dear WAKISSHA Secretariat,\n\nHere is my Silver Jubilee tribute celebrating 25 Years of Academic Excellence:\n\nName: ${entryName || ''}\nInstitution: ${entryInstitution || ''}\nRole: ${role}\nZone: ${zone}\n\nTribute Message:\n${entryMsg || ''}\n\nWarm regards,\n${entryName || ''}`
    );
    return `mailto:info@wakissha.ug?subject=${subject}&body=${body}`;
  };

  return (
    <section id="guestbook" className="py-20 bg-[#0b1325] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-8">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
            <Heart className="w-4 h-4 text-amber-400" />
            <span>Commemorative Wall</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="text-slate-300">Congratulatory Tributes & Silver Jubilee Registry</span>
          </div>
          <h2 className="font-jubilee text-3xl sm:text-4xl font-bold text-white tracking-tight" style={{ textWrap: 'balance' }}>
            Sign the Silver Jubilee 25-Year Guestbook
          </h2>
          <p className="text-slate-300 text-base sm:text-lg mt-3 font-light leading-relaxed">
            Leave your goodwill message, commemorate an inspiring headteacher, or celebrate the impact of WAKISSHA on your school or educational journey.
          </p>
        </div>

        {/* Dedicated Callout: Tributes should be sent to info@wakissha.ug */}
        <div className="bg-gradient-to-r from-amber-500/15 via-amber-600/10 to-amber-500/15 border-2 border-amber-400/40 rounded-2xl p-5 sm:p-6 mb-12 shadow-lg flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start sm:items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-amber-400/20 border border-amber-400/40 flex items-center justify-center text-amber-400 shrink-0 mt-0.5 sm:mt-0">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Official Secretariat Directive
              </div>
              <div className="text-white font-medium text-sm sm:text-base">
                Tributes should be sent to <a href="mailto:info@wakissha.ug" className="text-amber-300 underline font-semibold hover:text-amber-200">info@wakissha.ug</a>
              </div>
              <div className="text-xs text-slate-300 font-light mt-0.5">
                Congratulatory messages sent to <strong className="text-amber-300">info@wakissha.ug</strong> will be formally published in the official WAKISSHA 25th Silver Jubilee Commemorative Souvenir Compendium.
              </div>
            </div>
          </div>

          <div className="shrink-0">
            <a
              href="mailto:info@wakissha.ug?subject=WAKISSHA%2025th%20Silver%20Jubilee%20Tribute"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-amber-400 hover:bg-amber-300 active:scale-95 text-slate-950 font-bold text-xs rounded-lg transition-all shadow cursor-pointer whitespace-nowrap"
            >
              <Mail className="w-4 h-4" />
              <span>Email Tribute to info@wakissha.ug</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Form: Sign Guestbook */}
          <div className="lg:col-span-5 bg-[#0d162a] border border-slate-800 rounded-2xl p-6 sm:p-8">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-jubilee text-xl font-semibold text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-400" />
                <span>Leave Your Tribute</span>
              </h3>
              <span className="text-[11px] text-amber-400 font-medium">info@wakissha.ug</span>
            </div>
            <p className="text-xs text-slate-400 mb-6">
              Post to the digital registry below and optionally forward your message directly to <strong className="text-amber-300">info@wakissha.ug</strong>.
            </p>

            {formSuccess && (
              <div className="mb-6 p-4 bg-emerald-950/90 border border-emerald-500/50 rounded-xl text-emerald-200 text-xs space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span className="font-medium text-sm text-emerald-100">Tribute Recorded on Wall!</span>
                </div>
                <p className="text-emerald-200/90 text-xs leading-relaxed">
                  Your Silver Jubilee goodwill message has been added to the live commemorative wall. Would you also like to email a copy directly to the Secretariat?
                </p>
                {lastSubmittedEntry && (
                  <a
                    href={getMailtoLink(lastSubmittedEntry.name, lastSubmittedEntry.institution, lastSubmittedEntry.message)}
                    className="inline-flex items-center gap-1.5 px-3 py-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs rounded transition-colors shadow"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Send this to info@wakissha.ug</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                )}
              </div>
            )}

            {errorMsg && (
              <div className="mb-4 p-3 bg-rose-950/80 border border-rose-600/40 rounded-lg text-rose-200 text-xs">
                {errorMsg}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
              <div>
                <label className="block text-slate-300 font-medium mb-1">
                  Your Full Name <span className="text-amber-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Mwalimu David Mukasa"
                  className="w-full bg-[#080e1c] border border-slate-700 rounded-lg px-3.5 py-2.5 text-white placeholder:text-slate-600 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-medium mb-1">
                  School or Organization <span className="text-amber-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={institution}
                  onChange={(e) => setInstitution(e.target.value)}
                  placeholder="e.g. Trinity College Nabbingo / Alumnus"
                  className="w-full bg-[#080e1c] border border-slate-700 rounded-lg px-3.5 py-2.5 text-white placeholder:text-slate-600 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 font-medium mb-1">Role / Designation</label>
                  <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="w-full bg-[#080e1c] border border-slate-700 rounded-lg px-3 py-2.5 text-white focus:outline-none focus:border-amber-400"
                  >
                    <option value="Headteacher">Headteacher</option>
                    <option value="Deputy Headteacher">Deputy Headteacher</option>
                    <option value="Teacher / Examiner">Teacher / Examiner</option>
                    <option value="Alumnus / Scholar">Alumnus / Scholar</option>
                    <option value="MoES / Education Partner">MoES / Partner</option>
                    <option value="Parent / Well-wisher">Parent / Well-wisher</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-300 font-medium mb-1">Wakiso Zone</label>
                  <select
                    value={zone}
                    onChange={(e) => setZone(e.target.value)}
                    className="w-full bg-[#080e1c] border border-slate-700 rounded-lg px-3 py-2.5 text-white focus:outline-none focus:border-amber-400"
                  >
                    {ZONES.filter(z => z.id !== 'all').map(z => (
                      <option key={z.id} value={z.name}>{z.name}</option>
                    ))}
                    <option value="National / Diaspora">National / Diaspora</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-slate-300 font-medium mb-1">
                  Your Congratulatory Tribute Message <span className="text-amber-400">*</span>
                </label>
                <textarea
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Share your memories, congratulations, or wishes celebrating 25 years of secondary excellence..."
                  className="w-full bg-[#080e1c] border border-slate-700 rounded-lg p-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 text-xs sm:text-sm font-semibold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 active:scale-95 transition-all rounded shadow-md cursor-pointer flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4 text-slate-950" />
                <span>Submit Commemorative Message</span>
              </button>
            </form>
          </div>

          {/* Right Feed: Commemorative Wall */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between text-xs text-slate-400 px-1">
              <span>{entries.length} Silver Jubilee Tributes Recorded</span>
              <span className="text-amber-400 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                <span>Live Registry</span>
              </span>
            </div>

            <div className="space-y-4 max-h-[580px] overflow-y-auto pr-1">
              {entries.map((entry) => (
                <div
                  key={entry.id}
                  className="bg-[#0d162a] border border-slate-800 rounded-xl p-5 hover:border-slate-700 transition-colors"
                >
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div>
                      <div className="font-jubilee text-base font-semibold text-white">
                        {entry.name}
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-slate-400 mt-0.5">
                        <span className="text-amber-400">{entry.role}</span>
                        <span aria-hidden="true" className="text-slate-600">·</span>
                        <span>{entry.institution}</span>
                      </div>
                    </div>

                    <div className="text-right shrink-0">
                      <span className="text-[11px] text-slate-500 font-mono block">{entry.timestamp}</span>
                      <span className="text-[11px] text-slate-400 flex items-center justify-end gap-1 mt-0.5">
                        <MapPin className="w-3 h-3 text-amber-500/70" />
                        <span>{entry.zone}</span>
                      </span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-2 border-t border-slate-800/80">
                    "{entry.message}"
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
