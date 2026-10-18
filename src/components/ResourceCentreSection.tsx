import React from 'react';
import { Landmark, Trophy, Users, BookOpen, MapPin, Sparkles, CheckCircle2, ShieldCheck, Award } from 'lucide-react';
import centreComplexImg from '../assets/wakissha_resource_centre_complex.jpg';
import trophiesCabinetImg from '../assets/wakissha_trophies_cabinet.jpg';
import assemblyCeremonyImg from '../assets/wakissha_assembly_ceremony.jpg';
import secretariatOfficeImg from '../assets/wakissha_secretariat_office.jpg';

export const ResourceCentreSection: React.FC = () => {
  return (
    <section id="resource-centre" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-800 mb-2">
            <Landmark className="w-4 h-4 text-amber-600" />
            <span>Association Infrastructure & Headquarters</span>
            <span aria-hidden="true" className="text-slate-400">·</span>
            <span className="text-slate-600">Wakiso District</span>
          </div>
          <h2 className="font-jubilee text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight" style={{ textWrap: 'balance' }}>
            WAKISSHA Resource Centre & Kabaka Kyabaggu Stadium
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3 font-normal leading-relaxed">
            The dedicated institutional headquarters, examination distribution center, and sports grounds of the Wakiso Secondary School Headteachers' Association—serving as the administrative epicenter for academic benchmarking, teacher capacity development, and district championship co-curricular sports.
          </p>
        </div>

        {/* 2-Column Primary Showcase with Authentic Photographs */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          
          {/* Card 1: WAKISSHA Resource Centre Administrative & Academic Facility */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-xs hover:shadow-md transition-shadow overflow-hidden flex flex-col justify-between">
            <div>
              <div className="relative aspect-video w-full overflow-hidden bg-slate-100 border-b border-slate-100 group">
                <img
                  src={centreComplexImg}
                  alt="WAKISSHA Resource Centre Academic and Administrative Complex in Wakiso"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/95 backdrop-blur-md text-blue-900 font-bold text-xs rounded-full shadow-xs border border-slate-200">
                    <Landmark className="w-3.5 h-3.5 text-blue-700" />
                    WAKISSHA Resource Centre Complex
                  </span>
                </div>
                <div className="absolute bottom-3 right-3">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-slate-900/80 backdrop-blur-md text-white font-medium text-[11px] rounded-md">
                    <MapPin className="w-3 h-3 text-amber-400" />
                    Wakiso District, Uganda
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <h3 className="font-jubilee text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                  Administrative Headquarters & Conference Facility
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal mb-6">
                  The central nerve center of secondary education in Wakiso District. Built to house the WAKISSHA Executive Secretariat, multi-purpose conference auditoriums for headteachers' general assemblies, zonal coordination meetings, and continuous professional teacher development seminars.
                </p>

                <div className="space-y-2.5 text-xs text-slate-700 font-medium">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Executive Secretariat offices directing 380+ affiliated member schools</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>NCDC Competency-Based Curriculum teacher training and continuous assessment workshops</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Secure centralized depot for WAKISSHA Joint Mock Examinations printing and distribution</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-6 sm:px-8 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span className="font-semibold text-blue-800">Secretariat Operational Hub</span>
              <span>Wakiso District Center</span>
            </div>
          </div>

          {/* Card 2: Kabaka Kyabaggu Stadium (WAKISSHA Sports Arena) */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-xs hover:shadow-md transition-shadow overflow-hidden flex flex-col justify-between">
            <div>
              <div className="relative aspect-video w-full overflow-hidden bg-slate-100 border-b border-slate-100 group">
                <img
                  src={trophiesCabinetImg}
                  alt="Official WAKISSHA Games Trophies including Bweyogerere Zone Netball Champion and District Honors"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/95 backdrop-blur-md text-emerald-900 font-bold text-xs rounded-full shadow-xs border border-slate-200">
                    <Trophy className="w-3.5 h-3.5 text-emerald-700" />
                    Kabaka Kyabaggu Stadium & Sports Honors
                  </span>
                </div>
                <div className="absolute bottom-3 right-3">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-slate-900/80 backdrop-blur-md text-white font-medium text-[11px] rounded-md">
                    <Trophy className="w-3 h-3 text-amber-400" />
                    WAKISSHA Games Arena
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <h3 className="font-jubilee text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                  Kabaka Kyabaggu Stadium (WAKISSHA Sports Arena)
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal mb-6">
                  Formerly celebrated as the WAKISSHA Resource Centre Grounds and now officially named <strong>Kabaka Kyabaggu Stadium</strong>. A premier sports arena in Wakiso equipped with a championship football pitch, athletics track, and covered grandstand pavilion with a 2,000-seat capacity.
                </p>

                <div className="space-y-2.5 text-xs text-slate-700 font-medium">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Permanent host ground for the annual WAKISSHA District Secondary School Games (Football, Netball, Athletics)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Home arena of Wakiso Giants FC and premier venue for Uganda Premier League matches</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Selected national training ground upgrade for African Nations Championship (CHAN)</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-6 sm:px-8 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span className="font-semibold text-emerald-800">Championship Arena</span>
              <span>Capacity: 2,000 Spectators</span>
            </div>
          </div>

        </div>

        {/* Gallery Strip: Authentic Photos of Resource Centre Operations & Celebrations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          
          {/* Card 3: District Headteachers Assembly & Ceremonies */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs flex flex-col sm:flex-row gap-5 items-center">
            <div className="w-full sm:w-48 h-36 rounded-xl overflow-hidden shrink-0 border border-slate-200">
              <img
                src={assemblyCeremonyImg}
                alt="WAKISSHA General Assembly and Official School Delegations Ceremony"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="flex-1 space-y-1.5">
              <div className="flex items-center gap-1.5 text-xs font-bold text-amber-800 uppercase tracking-wider">
                <Users className="w-3.5 h-3.5 text-amber-600" />
                <span>Assemblies & Ceremonials</span>
              </div>
              <h4 className="font-jubilee text-lg font-bold text-slate-900">
                WAKISSHA General Assemblies & Celebrations
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Member schools, headteachers, and cultural delegations gathering at the Resource Centre grounds for policy assemblies, Silver Jubilee celebrations, and academic award ceremonies.
              </p>
            </div>
          </div>

          {/* Card 4: Executive Administration & Records Office */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs flex flex-col sm:flex-row gap-5 items-center">
            <div className="w-full sm:w-48 h-36 rounded-xl overflow-hidden shrink-0 border border-slate-200">
              <img
                src={secretariatOfficeImg}
                alt="WAKISSHA Administrative Office and Academic Registry"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="flex-1 space-y-1.5">
              <div className="flex items-center gap-1.5 text-xs font-bold text-blue-800 uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-700" />
                <span>Executive Registry & Administration</span>
              </div>
              <h4 className="font-jubilee text-lg font-bold text-slate-900">
                Secretariat Records & Examination Registry
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Continuous operational registry maintaining the official records, accreditation, and mock examination benchmarking files for secondary institutions across all six zones.
              </p>
            </div>
          </div>

        </div>

        {/* 4 Pillars Summary Box */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
          <div className="text-xs uppercase tracking-wider font-bold text-blue-900 mb-4 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-600" />
            Core Facilities of the WAKISSHA Resource Centre Campus
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-700 shrink-0">
                <Landmark className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 font-jubilee">Executive Secretariat</h4>
                <p className="text-xs text-slate-600 mt-1">Full-time administrative coordination for 6 district zones.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 shrink-0">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 font-jubilee">NCDC Curriculum Hub</h4>
                <p className="text-xs text-slate-600 mt-1">Teacher seminars and continuous assessment benchmarking.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 shrink-0">
                <Trophy className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 font-jubilee">Kabaka Kyabaggu Stadium</h4>
                <p className="text-xs text-slate-600 mt-1">Championship sports arena with 2,000-seat pavilion.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-700 shrink-0">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 font-jubilee">Assembly Auditoriums</h4>
                <p className="text-xs text-slate-600 mt-1">Convening headteachers for plenary policy assemblies.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
