import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MilestoneTimeline } from './components/MilestoneTimeline';
import { ZonesDirectory } from './components/ZonesDirectory';
import { JubileeEvents } from './components/JubileeEvents';
import { LeadershipSection } from './components/LeadershipSection';
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
    <div className="min-h-screen bg-[#0b1325] text-slate-100 flex flex-col font-sans selection:bg-amber-500/30 selection:text-amber-200">
      {/* Top Bar Navigation */}
      <Navbar onJoinUs={handleOpenJoinUs} />

      {/* Main Content Sections - Celebrations Focus */}
      <main className="flex-1">
        {/* Hero Section with Official WAKISSHA Logo & 25-Year Celebrations */}
        <Hero 
          onJoinUs={handleOpenJoinUs} 
          onExploreMilestones={handleScrollToMilestones} 
        />

        {/* 25-Year Historical Journey & Silver Jubilee Milestones (2001 - 2026) */}
        <MilestoneTimeline />

        {/* 6 Zones & Member Secondary Schools Directory Celebrating Unity */}
        <ZonesDirectory />

        {/* Official Main Silver Jubilee Celebration (Today · 16 Oct 2026) */}
        <JubileeEvents onJoinEvent={handleOpenJoinUs} />

        {/* Leadership Executive Committee & 25-Year Testimonials */}
        <LeadershipSection />

        {/* Interactive Commemorative Tribute Guestbook */}
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
