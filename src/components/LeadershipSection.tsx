import React from 'react';
import { CURRENT_CHAIRPERSON, EXECUTIVE_SECRETARY, PAST_CHAIRPERSONS, TESTIMONIALS } from '../data/wakisshaData';
import { Quote, Award, Sparkles, Building2, ShieldCheck, History, Landmark, BadgeCheck, UserCheck } from 'lucide-react';
import chairpersonPhoto from '../assets/chairperson_immaculate_lwanga.webp';
import ruthMandePhoto from '../assets/past_chairperson_ruth_mande_square.jpg';
import nakatePhoto from '../assets/past_chairperson_nakate.jpg';

export const LeadershipSection: React.FC = () => {
  // Leader monogram initials helper
  const getInitials = (name: string) => {
    if (name.includes('Ruth Mande')) return 'CRM';
    if (name.includes('Nakate')) return 'ONK';
    if (name.includes('Ssenyonjo') || name.includes('Senyonjo')) return 'MSS';
    return name.split(' ').slice(0, 2).map(n => n[0]).join('');
  };

  return (
    <section id="about" className="py-20 bg-[#080e1c] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
            <Sparkles className="w-4 h-4" />
            <span>Association Governance</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="text-slate-300">25-Year Stewardship</span>
          </div>
          <h2 className="font-jubilee text-3xl sm:text-4xl font-bold text-white tracking-tight" style={{ textWrap: 'balance' }}>
            Executive Leadership & Past Chairpersons
          </h2>
          <p className="text-slate-300 text-base sm:text-lg mt-3 font-light leading-relaxed">
            Honoring our current Executive Chairperson, Secretariat leadership, and the eminent past chairpersons who steered WAKISSHA through 25 remarkable years of academic excellence and secondary school leadership.
          </p>
        </div>

        {/* SECTION 1: Current Executive Chairperson (Headteacher, Trinity College Nabbingo) */}
        {/* Features official original verified photo */}
        <div className="bg-[#0d162a] border-2 border-amber-400/40 rounded-3xl p-6 sm:p-10 mb-12 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Chairperson Official Verified Photo */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative group w-full max-w-[360px] rounded-2xl overflow-hidden border-2 border-amber-500/50 shadow-2xl bg-slate-900">
                <img
                  src={chairpersonPhoto}
                  alt={`${CURRENT_CHAIRPERSON.name} - ${CURRENT_CHAIRPERSON.role} & ${CURRENT_CHAIRPERSON.schoolTitle}`}
                  className="w-full h-auto object-cover object-top group-hover:scale-102 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-center">
                  <span className="inline-block px-3.5 py-1.5 bg-amber-400 text-slate-950 font-bold text-xs rounded-full shadow-lg uppercase tracking-wider">
                    Executive Chairperson, WAKISSHA
                  </span>
                </div>
              </div>
            </div>

            {/* Chairperson Bio & Jubilee Message */}
            <div className="lg:col-span-7 space-y-5">
              
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-amber-400 font-bold">
                  <Award className="w-4 h-4 text-amber-400" />
                  <span>Current Association Leadership</span>
                </div>
                
                <h3 className="font-jubilee text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">
                  {CURRENT_CHAIRPERSON.name}
                </h3>
                
                <div className="flex flex-wrap items-center gap-2 text-sm text-amber-300 font-medium pt-1">
                  <span>{CURRENT_CHAIRPERSON.role}</span>
                  <span aria-hidden="true" className="text-slate-600">·</span>
                  <span className="flex items-center gap-1.5 text-slate-200">
                    <Building2 className="w-4 h-4 text-amber-400" />
                    <strong>{CURRENT_CHAIRPERSON.schoolTitle}</strong>
                  </span>
                </div>
              </div>

              {/* Official Silver Jubilee Presidential Statement */}
              <div className="bg-[#101b33] border border-amber-500/30 rounded-2xl p-6 relative">
                <Quote className="w-8 h-8 text-amber-400/30 absolute top-4 right-4" />
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-light italic">
                  "{CURRENT_CHAIRPERSON.message}"
                </p>
                <div className="mt-4 pt-3 border-t border-slate-800 text-xs text-amber-400 font-medium flex items-center justify-between flex-wrap gap-2">
                  <span>{CURRENT_CHAIRPERSON.name}</span>
                  <span className="text-slate-400">Headteacher, Trinity College Nabbingo</span>
                </div>
              </div>

              {/* Quick Credentials Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-1 text-xs">
                <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                  <span className="text-slate-400 block text-[11px]">Chairperson Tenure</span>
                  <span className="text-sm font-bold text-white">{CURRENT_CHAIRPERSON.yearsOfService}</span>
                </div>
                <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                  <span className="text-slate-400 block text-[11px]">Headteacher At</span>
                  <span className="text-sm font-bold text-white">Trinity College Nabbingo</span>
                </div>
                <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800 col-span-2 sm:col-span-1">
                  <span className="text-slate-400 block text-[11px]">Zone</span>
                  <span className="text-sm font-bold text-amber-400">Kyadondo Zone</span>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* SECTION 2: Executive Secretary (Hajji Ndugwa Badru Musoke) */}
        {/* Strictly honoring user instruction: do not use someone else's photo; using official executive insignia */}
        <div className="bg-[#0b1325] border border-slate-800 hover:border-amber-500/30 rounded-2xl p-6 sm:p-8 mb-16 transition-colors">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            {/* Executive Monogram & Insignia Seal */}
            <div className="md:col-span-3 flex flex-col items-center justify-center p-6 bg-slate-900/90 rounded-2xl border border-slate-800 text-center">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-400/20 to-amber-600/10 border-2 border-amber-400/50 flex items-center justify-center text-amber-400 mb-3 shadow-inner">
                <Landmark className="w-10 h-10 text-amber-400" />
              </div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-amber-400">
                Secretariat Seal
              </div>
              <div className="text-[10px] text-slate-400 mt-0.5">
                WAKISSHA Executive Office
              </div>
            </div>

            {/* Executive Secretary Details */}
            <div className="md:col-span-9 space-y-3">
              <div className="flex items-center gap-2">
                <BadgeCheck className="w-4 h-4 text-amber-400" />
                <span className="text-xs uppercase tracking-wider text-amber-400 font-bold">
                  Secretariat Operations & Coordination
                </span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <h3 className="font-jubilee text-2xl sm:text-3xl font-bold text-white">
                  {EXECUTIVE_SECRETARY.name}
                </h3>
                <span className="inline-block px-3 py-1 bg-amber-400/10 border border-amber-400/30 text-amber-300 font-semibold text-xs rounded-full self-start sm:self-auto">
                  {EXECUTIVE_SECRETARY.role}
                </span>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed font-light">
                {EXECUTIVE_SECRETARY.bio}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-400 border-t border-slate-800/80">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                  <span>Administrative Hub: {EXECUTIVE_SECRETARY.institution}</span>
                </div>
                <span aria-hidden="true" className="text-slate-700 hidden sm:inline">·</span>
                <span className="text-slate-300">Coordinating all 6 Educational Zones & 380+ Secondary Schools</span>
              </div>
            </div>

          </div>
        </div>

        {/* SECTION 3: Eminent Past Chairpersons & Leaders */}
        {/* Strictly honoring user instruction: NO AI photos or misleading images; dignified official leadership crests */}
        <div className="mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
            <History className="w-4 h-4" />
            <span>25-Year Legacy of Leadership</span>
          </div>
          
          <h3 className="font-jubilee text-2xl sm:text-3xl font-bold text-white mb-2">
            Eminent Past Chairpersons & Pioneer Leaders
          </h3>
          <p className="text-sm sm:text-base text-slate-300 font-light mb-8 max-w-3xl">
            Celebrating the former chairpersons who laid the foundation, nurtured institutional solidarity, and steered WAKISSHA through its quarter-century journey.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {PAST_CHAIRPERSONS.map((leader) => {
              const initials = getInitials(leader.name);

              return (
                <div
                  key={leader.id}
                  className="bg-[#0d162a] border border-slate-800 hover:border-amber-500/40 rounded-2xl overflow-hidden flex flex-col justify-between shadow-xl transition-all duration-300 group"
                >
                  <div>
                    {/* Authentic Portrait or Dignified Institutional Monogram */}
                    <div className="p-6 pb-4 bg-gradient-to-b from-[#111c35] to-[#0d162a] border-b border-slate-800/80">
                      <div className="flex items-center justify-between gap-3 mb-4">
                        {leader.id === 'mande' ? (
                          <div className="relative group/pic">
                            <img
                              src={ruthMandePhoto}
                              alt={leader.name}
                              referrerPolicy="no-referrer"
                              className="w-16 h-16 rounded-xl object-cover object-top border-2 border-amber-400 shadow-md group-hover/pic:scale-105 transition-transform"
                            />
                            <div className="absolute -bottom-1 -right-1 bg-amber-400 text-slate-950 p-0.5 rounded-full shadow">
                              <BadgeCheck className="w-3.5 h-3.5" />
                            </div>
                          </div>
                        ) : leader.id === 'kikomeko' ? (
                          <div className="relative group/pic">
                            <img
                              src={nakatePhoto}
                              alt={leader.name}
                              referrerPolicy="no-referrer"
                              className="w-16 h-16 rounded-xl object-cover object-top border-2 border-amber-400 shadow-md group-hover/pic:scale-105 transition-transform"
                            />
                            <div className="absolute -bottom-1 -right-1 bg-amber-400 text-slate-950 p-0.5 rounded-full shadow">
                              <BadgeCheck className="w-3.5 h-3.5" />
                            </div>
                          </div>
                        ) : (
                          /* Gold-Rimmed Monogram Medallion for Former Chairperson Senyonjo */
                          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-amber-400/20 via-amber-500/10 to-transparent border-2 border-amber-400/60 flex items-center justify-center text-amber-300 font-jubilee font-extrabold text-xl shadow-md group-hover:border-amber-400 transition-colors">
                            {initials}
                          </div>
                        )}

                        <div className="flex flex-col items-end">
                          <span className="inline-block px-2.5 py-1 bg-amber-400/10 border border-amber-400/30 text-amber-300 font-semibold text-[11px] rounded">
                            {leader.tenure}
                          </span>
                          <span className="text-[10px] text-slate-400 mt-1 flex items-center gap-1">
                            <UserCheck className="w-3 h-3 text-amber-400" />
                            {leader.id === 'mande' || leader.id === 'kikomeko' ? 'Official Portrait' : 'Historic Leader'}
                          </span>
                        </div>
                      </div>

                      <h4 className="font-jubilee text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                        {leader.name}
                      </h4>

                      <div className="text-xs font-semibold text-amber-400 mt-1">
                        {leader.role}
                      </div>

                      <div className="text-xs text-slate-300 flex items-center gap-1.5 mt-2">
                        <Building2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span>{leader.formerSchool}</span>
                      </div>
                    </div>

                    {/* Leader Details & Message */}
                    <div className="p-6 space-y-3">
                      {leader.precededBy && (
                        <div className="text-[11px] text-slate-300 italic bg-slate-900/80 px-3 py-2 rounded-lg border border-slate-800">
                          <span className="text-slate-400">Succession:</span> Succeeded <strong>{leader.precededBy}</strong>
                        </div>
                      )}

                      {leader.message && (
                        <div className="bg-[#101b33] p-4 rounded-xl border border-amber-500/20 text-xs text-slate-200 leading-relaxed font-light italic">
                          <Quote className="w-4 h-4 text-amber-400/60 mb-1" />
                          "{leader.message}"
                        </div>
                      )}

                      {leader.bio && (
                        <p className="text-xs text-slate-300 leading-relaxed font-light">
                          {leader.bio}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Footer Historic Quote */}
                  <div className="p-6 pt-0">
                    <div className="pt-3 border-t border-slate-800/80">
                      <p className="text-xs italic text-slate-400">
                        "{leader.quote}"
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* SECTION 4: Endorsements & Testimonials of Impact */}
        <div className="pt-12 border-t border-slate-800">
          <div className="max-w-2xl mb-8">
            <h3 className="font-jubilee text-2xl font-semibold text-white">
              Endorsements & Testimonials of Impact
            </h3>
            <p className="text-sm text-slate-400 mt-1">
              Reflections on WAKISSHA's 25 years of educational transformation across Uganda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                className="bg-[#0b1325] border border-slate-800 rounded-xl p-6 flex flex-col justify-between"
              >
                <div>
                  <Quote className="w-6 h-6 text-amber-400/60 mb-3" />
                  <p className="text-sm text-slate-300 leading-relaxed italic">
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-800">
                  <div className="text-sm font-semibold text-white font-jubilee">
                    {t.author}
                  </div>
                  <div className="text-xs text-amber-400 font-medium">
                    {t.role}
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">
                    {t.organization}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
