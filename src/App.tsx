import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MilestoneTimeline } from './components/MilestoneTimeline';
import { LeadershipSection } from './components/LeadershipSection';
import { ResourceCentreSection } from './components/ResourceCentreSection';
import { ZonesDirectory } from './components/ZonesDirectory';
import { JubileeEvents } from './components/JubileeEvents';
import { TributeGuestbook } from './components/TributeGuestbook';
import { Footer } from './components/Footer';
import { JoinUsModal } from './components/JoinUsModal';

export default function App() {
  const [isJoinUsModalOpen, setIsJoinUsModalOpen] = useState(false);

  const handleOpenJoinUs = () => {
    setIsJoinUsModalOpen(true);
  };

  const handleCloseJoinUs = () => {
    setIsJoinUsModalOpen(false);
  };

  const handleScrollToMilestones = () => {
    const el = document.getElementById('journey');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* Top Bar Navigation */}
      <Navbar onJoinUs={handleOpenJoinUs} />

      {/* Main Content Sections - Light Institutional Theme */}
      <main className="flex-1">
        {/* Hero Section with Official WAKISSHA Logo & 25-Year Silver Jubilee */}
        <Hero 
          onJoinUs={handleOpenJoinUs} 
          onExploreMilestones={handleScrollToMilestones} 
        />

        {/* 1. Institutional Record Block: 25-Year Historical Journey (2001 - 2026) */}
        <MilestoneTimeline />

        {/* 2. Association Governance Block (Directly below Institutional Record Block as requested) */}
        <LeadershipSection />

        {/* 3. WAKISSHA Resource Centre & Sports Grounds (Headquarters & Sports Pavilion) */}
        <ResourceCentreSection />

        {/* 4. 6 Zones & Member Secondary Schools Directory */}
        <ZonesDirectory />

        {/* 5. Official Silver Jubilee Grand Celebrations & Program */}
        <JubileeEvents onJoinEvent={handleOpenJoinUs} />

        {/* 6. Interactive Commemorative Tribute Guestbook */}
        <TributeGuestbook />
      </main>

      {/* Institutional Celebrations Footer */}
      <Footer onJoinUs={handleOpenJoinUs} />

      {/* Celebratory Join Us Modal */}
      <JoinUsModal
        isOpen={isJoinUsModalOpen}
        onClose={handleCloseJoinUs}
      />
    </div>
  );
}
