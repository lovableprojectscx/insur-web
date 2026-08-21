import { useState } from 'react';
import { Preloader } from './components/Preloader';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { CategoryGrid } from './components/CategoryGrid';
import { InstitutionalAlliances } from './components/InstitutionalAlliances';
import { CertificateModel } from './components/CertificateModel';
import { CourseCatalog } from './components/CourseCatalog';
import { InstructorsSection } from './components/InstructorsSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Testimonials } from './components/Testimonials';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { WhatsAppFloating } from './components/WhatsAppFloating';
import { MobileBottomBar } from './components/MobileBottomBar';
import { DiscountModal } from './components/DiscountModal';
import type { LeadFormData } from './types';

export function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [leadData, setLeadData] = useState<LeadFormData | null>(null);

  const handleLeadSubmitted = (data: LeadFormData) => {
    setLeadData(data);
    setIsModalOpen(true);
  };

  const handleOpenForm = () => {
    const heroForm = document.getElementById('registro') || document.getElementById('hero');
    if (heroForm) {
      heroForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectCategory = (_catId: string) => {
    const catalogSection = document.getElementById('catalogo');
    if (catalogSection) {
      catalogSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-['Plus_Jakarta_Sans',sans-serif] selection:bg-blue-600 selection:text-white pb-14 sm:pb-0">
      
      {/* Sleek Logo Preloader Intro Screen */}
      <Preloader />

      {/* CERSA-Style Top Ribbon & Navbar */}
      <Navbar onOpenForm={handleOpenForm} />

      <main>
        {/* CERSA-Style White Hero Section */}
        <HeroSection onSubmitLead={handleLeadSubmitted} />

        {/* CERSA-Style "NUESTRAS ESCUELAS" (5 Vertical Cards + Orange Vest Engineer Banner) */}
        <CategoryGrid onSelectCategory={handleSelectCategory} />

        {/* CERSA-Style "NUESTRAS ALIANZAS INSTITUCIONALES" (CIP & ICA Round Seals) */}
        <InstitutionalAlliances />

        {/* CERSA-Style "MODELO DE CERTIFICADO" (3D Realistic Diploma Mockup & QR Verification) */}
        <CertificateModel onOpenForm={handleOpenForm} />

        {/* Rich Visual Course Catalog Marketplace */}
        <CourseCatalog onOpenForm={handleOpenForm} />

        {/* Expert Faculty / Plana Docente CIP */}
        <InstructorsSection />

        {/* Why Choose Us Features */}
        <WhyChooseUs />

        {/* Verified Student Testimonials */}
        <Testimonials />

        {/* FAQ Accordion */}
        <FAQSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Quick Action for Desktop */}
      <div className="hidden sm:block">
        <WhatsAppFloating />
      </div>

      {/* Mobile Sticky Bottom Bar */}
      <MobileBottomBar onOpenForm={handleOpenForm} />

      {/* CERSA-Style Coupon Ticket Modal Popup */}
      <DiscountModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        leadData={leadData}
      />
    </div>
  );
}

export default App;
