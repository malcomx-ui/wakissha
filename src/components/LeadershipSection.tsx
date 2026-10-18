import React from 'react';
import { CURRENT_CHAIRPERSON, EXECUTIVE_SECRETARY, TREASURER, PAST_CHAIRPERSONS, TESTIMONIALS } from '../data/wakisshaData';
import { Quote, Award, Sparkles, Building2, ShieldCheck, History, Landmark, BadgeCheck, UserCheck, Wallet } from 'lucide-react';
import chairpersonPhoto from '../assets/chairperson_immaculate_lwanga.webp';
import ruthMandePhoto from '../assets/past_chairperson_ruth_mande_square.jpg';
import nakatePhoto from '../assets/past_chairperson_nakate.jpg';
import senyonjoPhoto from '../assets/past_chairperson_moses_senyonjo.jpg';
import reginaLabokePhoto from '../assets/past_chairperson_regina_laboke.jpg';

export const LeadershipSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-800 mb-2">
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span>Association Governance</span>
            <span aria-hidden="true" className="text-slate-400">·</span>
            <span className="text-slate-600">Executive Committee & Leadership</span>
          </div>
          <h2 className="font-jubilee text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight" style={{ textWrap: 'balance' }}>
            Association Governance & Executive Leadership
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3 font-normal leading-relaxed">
            Honoring our current Executive Chairperson, Secretariat and Treasury leadership, and the eminent past chairpersons who steered WAKISSHA through 25 remarkable years of academic excellence and secondary school leadership.
          </p>
        </div>

        {/* SECTION 1: Current Executive Chairperson (Headteacher, Trinity College Nabbingo) */}
        <div className="bg-gradient-to-br from-blue-50/70 via-white to-amber-50/40 border-2 border-amber-300 rounded-3xl p-6 sm:p-10 mb-12 shadow-sm relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Chairperson Official Verified Photo */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative group w-full max-w-[360px] rounded-2xl overflow-hidden border-2 border-amber-400 shadow-md bg-white">
                <img
                  src={chairpersonPhoto}
                  alt={`${CURRENT_CHAIRPERSON.name} - ${CURRENT_CHAIRPERSON.role} & ${CURRENT_CHAIRPERSON.schoolTitle}`}
                  className="w-full h-auto object-cover object-top group-hover:scale-102 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-center">
                  <span className="inline-block px-3.5 py-1.5 bg-amber-500 text-slate-950 font-bold text-xs rounded-full shadow-md uppercase tracking-wider">
                    Executive Chairperson, WAKISSHA
                  </span>
                </div>
              </div>
            </div>

            {/* Chairperson Bio & Jubilee Message */}
            <div className="lg:col-span-7 space-y-5">
              
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-blue-900 font-bold">
                  <Award className="w-4 h-4 text-amber-600" />
                  <span>Current Association Leadership</span>
                </div>
                
                <h3 className="font-jubilee text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900">
                  {CURRENT_CHAIRPERSON.name}
                </h3>
                
                <div className="flex flex-wrap items-center gap-2 text-sm text-blue-800 font-medium pt-1">
                  <span>{CURRENT_CHAIRPERSON.role}</span>
                  <span aria-hidden="true" className="text-slate-400">·</span>
                  <span className="flex items-center gap-1.5 text-slate-700">
                    <Building2 className="w-4 h-4 text-amber-600" />
                    <strong>{CURRENT_CHAIRPERSON.schoolTitle}</strong>
                  </span>
                </div>
              </div>

              {/* Official Silver Jubilee Presidential Statement */}
              <div className="bg-white border border-amber-200 rounded-2xl p-6 shadow-xs relative">
                <Quote className="w-8 h-8 text-amber-400/40 absolute top-4 right-4" />
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal italic">
                  "{CURRENT_CHAIRPERSON.message}"
                </p>
                <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-blue-900 font-semibold flex items-center justify-between flex-wrap gap-2">
                  <span>{CURRENT_CHAIRPERSON.name}</span>
                  <span className="text-slate-500">Headteacher, Trinity College Nabbingo</span>
                </div>
              </div>

              {/* Quick Credentials Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-1 text-xs">
                <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-xs">
                  <span className="text-slate-500 block text-[11px]">Chairperson Tenure</span>
                  <span className="text-sm font-bold text-slate-900">{CURRENT_CHAIRPERSON.yearsOfService}</span>
                </div>
                <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-xs">
                  <span className="text-slate-500 block text-[11px]">Headteacher At</span>
                  <span className="text-sm font-bold text-slate-900">Trinity College Nabbingo</span>
                </div>
                <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-xs col-span-2 sm:col-span-1">
                  <span className="text-slate-500 block text-[11px]">Zone</span>
                  <span className="text-sm font-bold text-blue-800">Kyadondo Zone</span>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* SECTION 2: Executive Officers Strip (Executive Secretary & Treasurer) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          
          {/* Executive Secretary: Hajji Ndugwa Badru Musoke */}
          <div className="bg-slate-50 border border-slate-200 hover:border-blue-300 rounded-2xl p-6 sm:p-7 shadow-xs transition-all">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-blue-100 border border-blue-200 flex items-center justify-center text-blue-800 shrink-0 shadow-xs">
                <Landmark className="w-7 h-7 text-blue-800" />
              </div>
              <div className="flex-1 space-y-1.5">
                <div className="flex items-center justify-between gap-2">
                  <span className="inline-block px-2.5 py-0.5 bg-blue-100 text-blue-900 font-bold text-[11px] rounded-full uppercase tracking-wider">
                    Executive Secretary
                  </span>
                  <span className="text-[11px] text-slate-500 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-blue-700" /> Secretariat
                  </span>
                </div>
                <h3 className="font-jubilee text-xl font-bold text-slate-900">
                  {EXECUTIVE_SECRETARY.name}
                </h3>
                <p className="text-xs text-blue-900 font-medium">
                  {EXECUTIVE_SECRETARY.role} · {EXECUTIVE_SECRETARY.institution}
                </p>
                <p className="text-xs text-slate-600 leading-relaxed font-normal pt-1">
                  {EXECUTIVE_SECRETARY.bio}
                </p>
              </div>
            </div>
          </div>

          {/* Association Treasurer: Mr. Lwembawo Hussein */}
          <div className="bg-slate-50 border border-slate-200 hover:border-amber-300 rounded-2xl p-6 sm:p-7 shadow-xs transition-all">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-amber-100 border border-amber-200 flex items-center justify-center text-amber-800 shrink-0 shadow-xs">
                <Wallet className="w-7 h-7 text-amber-800" />
              </div>
              <div className="flex-1 space-y-1.5">
                <div className="flex items-center justify-between gap-2">
                  <span className="inline-block px-2.5 py-0.5 bg-amber-100 text-amber-900 font-bold text-[11px] rounded-full uppercase tracking-wider">
                    Association Treasurer
                  </span>
                  <span className="text-[11px] text-slate-500 flex items-center gap-1">
                    <BadgeCheck className="w-3.5 h-3.5 text-emerald-700" /> Executive Committee
                  </span>
                </div>
                <h3 className="font-jubilee text-xl font-bold text-slate-900">
                  {TREASURER.name}
                </h3>
                <p className="text-xs text-amber-900 font-medium">
                  {TREASURER.role} · {TREASURER.institution}
                </p>
                <p className="text-xs text-slate-600 leading-relaxed font-normal pt-1">
                  {TREASURER.bio}
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* SECTION 3: Eminent Past Chairpersons with Authentic Photos */}
        <div className="mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-800 mb-2">
            <History className="w-4 h-4 text-amber-600" />
            <span>25-Year Legacy of Leadership</span>
          </div>
          
          <h3 className="font-jubilee text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
            Eminent Past Chairpersons & Leaders
          </h3>
          <p className="text-sm sm:text-base text-slate-600 font-normal mb-8 max-w-3xl">
            Celebrating the former chairpersons whose visionary leadership, sacrifice, and stewardship built WAKISSHA into the premier secondary school association in Uganda.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PAST_CHAIRPERSONS.map((leader) => {
              const photo = leader.id === 'mande' ? ruthMandePhoto : leader.id === 'kikomeko' ? nakatePhoto : leader.id === 'senyonjo' ? senyonjoPhoto : reginaLabokePhoto;

              return (
                <div
                  key={leader.id}
                  className="bg-white border border-slate-200 hover:border-blue-300 rounded-2xl overflow-hidden flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-300 group"
                >
                  <div>
                    {/* Authentic Portrait Banner */}
                    <div className="p-6 pb-4 bg-slate-50/80 border-b border-slate-100">
                      <div className="flex items-center justify-between gap-3 mb-4">
                        <div className="relative group/pic">
                          <img
                            src={photo}
                            alt={leader.name}
                            referrerPolicy="no-referrer"
                            className="w-18 h-18 rounded-xl object-cover object-top border-2 border-amber-400 shadow-sm group-hover/pic:scale-105 transition-transform"
                          />
                          <div className="absolute -bottom-1 -right-1 bg-amber-500 text-white p-0.5 rounded-full shadow-xs">
                            <BadgeCheck className="w-3.5 h-3.5" />
                          </div>
                        </div>

                        <div className="flex flex-col items-end">
                          <span className="inline-block px-2.5 py-1 bg-blue-50 border border-blue-200 text-blue-900 font-bold text-[11px] rounded">
                            {leader.tenure}
                          </span>
                          <span className="text-[10px] text-slate-500 mt-1 flex items-center gap-1 font-medium">
                            <UserCheck className="w-3 h-3 text-emerald-600" />
                            Official Portrait
                          </span>
                        </div>
                      </div>

                      <h4 className="font-jubilee text-xl font-bold text-slate-900 group-hover:text-blue-900 transition-colors">
                        {leader.name}
                      </h4>

                      <div className="text-xs font-semibold text-blue-800 mt-1">
                        {leader.role}
                      </div>

                      <div className="text-xs text-slate-600 flex items-center gap-1.5 mt-2">
                        <Building2 className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                        <span>{leader.formerSchool}</span>
                      </div>
                    </div>

                    {/* Leader Details & Message */}
                    <div className="p-6 space-y-3">
                      {leader.precededBy && (
                        <div className="text-[11px] text-slate-700 italic bg-slate-100 px-3 py-2 rounded-lg border border-slate-200">
                          <span className="text-slate-500">Succession:</span> Succeeded <strong>{leader.precededBy}</strong>
                        </div>
                      )}

                      {leader.message && (
                        <div className="bg-amber-50/60 p-4 rounded-xl border border-amber-200 text-xs text-slate-800 leading-relaxed font-normal italic">
                          <Quote className="w-4 h-4 text-amber-600 mb-1" />
                          "{leader.message}"
                        </div>
                      )}

                      {leader.bio && (
                        <p className="text-xs text-slate-600 leading-relaxed font-normal">
                          {leader.bio}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Footer Historic Quote */}
                  <div className="p-6 pt-0">
                    <div className="pt-3 border-t border-slate-100">
                      <p className="text-xs italic text-slate-500">
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
        <div className="pt-12 border-t border-slate-200">
          <div className="max-w-2xl mb-8">
            <h3 className="font-jubilee text-2xl font-bold text-slate-900">
              Endorsements & Testimonials of Impact
            </h3>
            <p className="text-sm text-slate-600 mt-1">
              Reflections on WAKISSHA's 25 years of educational transformation across Uganda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200 rounded-xl p-6 flex flex-col justify-between shadow-xs"
              >
                <div>
                  <Quote className="w-6 h-6 text-amber-500 mb-3" />
                  <p className="text-sm text-slate-700 leading-relaxed italic">
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-200">
                  <div className="text-sm font-bold text-slate-900 font-jubilee">
                    {t.author}
                  </div>
                  <div className="text-xs text-blue-800 font-semibold">
                    {t.role}
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5">
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
