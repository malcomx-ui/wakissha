import React, { useState } from 'react';
import { ZONES, MEMBER_SCHOOLS } from '../data/wakisshaData';
import { Search, MapPin, Building2, User, Compass, CheckCircle2 } from 'lucide-react';

export const ZonesDirectory: React.FC = () => {
  const [selectedZone, setSelectedZone] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const ZONE_INFO = [
    { id: 'kyadondo', name: 'Kyadondo Zone', center: 'Nabbingo / Budo Hub', schools: 72, marquee: "King's College Budo, Trinity College Nabbingo, Buddo SS" },
    { id: 'busiro', name: 'Busiro Zone', center: 'Kitende / Kisubi Corridor', schools: 68, marquee: "St. Mary's College Kisubi, St. Mary's Kitende, Kisubi Mapeera" },
    { id: 'kira', name: 'Kira Zone', center: 'Namugongo / Kira Hub', schools: 64, marquee: 'Uganda Martyrs Namugongo, Naalya SS, Kira SS' },
    { id: 'kasangati', name: 'Kasangati Zone', center: 'Gayaza Educational Hub', schools: 58, marquee: 'Gayaza High School, Our Lady Gayaza' },
    { id: 'nansana', name: 'Nansana Zone', center: 'Nansana Municipal Hub', schools: 62, marquee: "St. Joseph's Nansana, Nansana Secondary School" },
    { id: 'entebbe', name: 'Entebbe Zone', center: 'Entebbe Peninsula Hub', schools: 56, marquee: 'Entebbe SS, Merryland High, Boston High, Air Force SS' },
  ];

  const filteredSchools = MEMBER_SCHOOLS.filter(school => {
    const matchesZone = selectedZone === 'all' || school.zone === selectedZone;
    const matchesSearch = 
      school.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (school.headteacher && school.headteacher.toLowerCase().includes(searchQuery.toLowerCase())) ||
      school.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      school.type.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesZone && matchesSearch;
  });

  return (
    <section id="zones" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-800 mb-2">
            <span>District Footprint</span>
            <span aria-hidden="true" className="text-slate-400">·</span>
            <span className="text-slate-600">6 Educational Zones & 380+ Secondary Schools</span>
          </div>
          <h2 className="font-jubilee text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight" style={{ textWrap: 'balance' }}>
            Member Institutions & Educational Zones
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3 font-normal leading-relaxed">
            Wakiso District is the educational cradle of Uganda. WAKISSHA unites both historic foundation colleges and dynamic modern academies under one umbrella of scholastic distinction and joint academic assessment.
          </p>
        </div>

        {/* Feature: Wakiso District 6-Zone Structural Matrix */}
        <div className="rounded-2xl border border-slate-200 mb-12 bg-white p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-5 mb-6">
            <div className="flex items-center gap-3">
              <Compass className="w-6 h-6 text-blue-800" />
              <div>
                <h3 className="font-jubilee text-lg font-bold text-slate-900">
                  Wakiso District Zonal Administration Matrix
                </h3>
                <span className="text-xs text-slate-500 font-medium">Decentralized Academic Inspection & Mock Marking Hubs</span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-blue-900 font-bold">
              <span>6 Educational Zones</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span>380+ Affiliated Schools</span>
            </div>
          </div>

          {/* 6 Zones Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {ZONE_INFO.map((z) => {
              const isSelected = selectedZone === z.id;
              return (
                <div
                  key={z.id}
                  onClick={() => setSelectedZone(isSelected ? 'all' : z.id)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-blue-50/80 border-blue-400 shadow-xs'
                      : 'bg-slate-50 border-slate-200 hover:border-slate-300 hover:bg-slate-100/70'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-jubilee text-sm font-bold text-slate-900">
                      {z.name}
                    </span>
                    <span className="text-xs font-semibold text-blue-900 bg-blue-100 px-2 py-0.5 rounded border border-blue-200">
                      {z.schools} Schools
                    </span>
                  </div>

                  <div className="text-xs text-slate-500 mb-1 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>{z.center}</span>
                  </div>

                  <div className="text-[11px] text-slate-600 pt-2 border-t border-slate-200">
                    <strong className="text-slate-700">Anchor Colleges:</strong> {z.marquee}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-5 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500">
            <div className="flex items-center gap-2 font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Click any zone above to filter the secondary institutions directory.</span>
            </div>
            <button
              onClick={() => setSelectedZone('all')}
              className="text-xs text-blue-800 hover:text-blue-900 underline font-semibold cursor-pointer"
            >
              Reset to All Zones
            </button>
          </div>
        </div>

        {/* Zone Filter Buttons & Search */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-8">
          
          {/* Zone Selector Buttons */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {ZONES.map((zone) => {
              const isActive = selectedZone === zone.id;
              return (
                <button
                  key={zone.id}
                  onClick={() => setSelectedZone(zone.id)}
                  className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-blue-900 text-white shadow-xs'
                      : 'bg-white text-slate-700 hover:text-slate-900 border border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {zone.name} ({zone.count})
                </button>
              );
            })}
          </div>

          {/* School Search */}
          <div className="relative min-w-[280px]">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search member school or category..."
              className="w-full bg-white border border-slate-300 rounded-lg pl-10 pr-4 py-2 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 shadow-2xs"
            />
          </div>

        </div>

        {/* Schools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSchools.map((school, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200 hover:border-blue-300 rounded-2xl p-5 flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-200"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                  <span className="capitalize font-bold text-blue-900">{school.zone} Zone</span>
                  <div className="flex items-center gap-1 text-slate-400 font-medium">
                    <Building2 className="w-3.5 h-3.5" />
                    <span>Est. {school.established}</span>
                  </div>
                </div>

                <h4 className="font-jubilee text-lg font-bold text-slate-900 leading-snug">
                  {school.name}
                </h4>

                <div className="text-xs text-slate-500 mt-1 mb-3 font-medium">
                  <span>{school.type}</span>
                  <span aria-hidden="true" className="mx-1.5 text-slate-300">·</span>
                  <span>{school.category}</span>
                </div>

                {/* Motto */}
                <p className="text-xs italic text-slate-600 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                  "{school.motto}"
                </p>
              </div>

              {/* Headteacher info or Zonal Member Institution */}
              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
                {school.headteacher ? (
                  <>
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-blue-800 shrink-0" />
                      <span className="font-bold text-slate-800 truncate max-w-[210px]">{school.headteacher}</span>
                    </div>
                    <span className="text-[11px] text-blue-700 font-medium">Leadership</span>
                  </>
                ) : (
                  <>
                    <div className="flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-slate-400 shrink-0" />
                      <span className="text-slate-600 font-medium">Wakiso Zonal Member</span>
                    </div>
                    <span className="text-[11px] text-blue-800 font-bold bg-blue-50 px-2 py-0.5 rounded">Affiliated</span>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        {filteredSchools.length === 0 && (
          <div className="text-center py-12 bg-white rounded-2xl border border-slate-200">
            <Building2 className="w-10 h-10 text-slate-400 mx-auto mb-2" />
            <p className="text-slate-700 font-semibold">No secondary schools matched your criteria.</p>
            <p className="text-xs text-slate-500 mt-1">Try selecting 'All Zones' or modifying your search keyword.</p>
          </div>
        )}

      </div>
    </section>
  );
};
