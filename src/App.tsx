import { useState } from 'react';
import { Preloader } from './components/Preloader';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { CategoryGrid } from './components/CategoryGrid';
import { CertificateAndAlliances } from './components/CertificateAndAlliances';
import { CourseCatalog } from './components/CourseCatalog';
import { InstructorsSection } from './components/InstructorsSection';
import { Footer } from './components/Footer';
import { WhatsAppFloating } from './components/WhatsAppFloating';
import { MobileBottomBar } from './components/MobileBottomBar';
import { RegistrationModal } from './components/RegistrationModal';
import { DiscountModal } from './components/DiscountModal';
import type { LeadFormData } from './types';

export function App() {
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const [isDiscountOpen, setIsDiscountOpen] = useState(false);
  const [leadData, setLeadData] = useState<LeadFormData | null>(null);

  const handleOpenRegistration = () => {
    setIsRegistrationOpen(true);
  };

  const handleLeadSubmitted = (data: LeadFormData) => {
    setLeadData(data);
    setIsDiscountOpen(true);
  };

  const handleSelectCategory = (_catId: string) => {
    const catalogSection = document.getElementById('catalogo');
    if (catalogSection) {
      catalogSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-['Plus_Jakarta_Sans',sans-serif] selection:bg-blue-600 selection:text-white pb-14 sm:pb-0">
      
      {/* Intro Preloader */}
      <Preloader />

      {/* Top Ribbon & Navbar */}
      <Navbar onOpenForm={handleOpenRegistration} />

      <main>
        {/* 1. Compact Hero Presentation (Slide Deck) */}
        <HeroSection onOpenForm={handleOpenRegistration} />

        {/* 2. 5 Compact Visual School Cards */}
        <CategoryGrid onSelectCategory={handleSelectCategory} />

        {/* 3. Combined Certificate Model & Official Alliances (CIP & ICA) */}
        <CertificateAndAlliances onOpenForm={handleOpenRegistration} />

        {/* 4. Visual Course Marketplace */}
        <CourseCatalog onOpenForm={handleOpenRegistration} />

        {/* 5. Plana Docente CIP & Abogados */}
        <InstructorsSection />
      </main>

      {/* Compact Footer */}
      <Footer />

      {/* Floating WhatsApp Action for Desktop */}
      <div className="hidden sm:block">
        <WhatsAppFloating />
      </div>

      {/* Mobile Sticky Bottom Bar */}
      <MobileBottomBar onOpenForm={handleOpenRegistration} />

      {/* Registration Popup Modal */}
      <RegistrationModal
        isOpen={isRegistrationOpen}
        onClose={() => setIsRegistrationOpen(false)}
        onSubmitLead={handleLeadSubmitted}
      />

      {/* Discount Ticket Modal */}
      <DiscountModal
        isOpen={isDiscountOpen}
        onClose={() => setIsDiscountOpen(false)}
        leadData={leadData}
      />
    </div>
  );
}

export default App;
