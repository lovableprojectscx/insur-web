import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { DiscountModal } from './components/DiscountModal';
import { CategoryGrid } from './components/CategoryGrid';
import { WhyChooseUs } from './components/WhyChooseUs';
import { CourseCatalog } from './components/CourseCatalog';
import { Testimonials } from './components/Testimonials';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { WhatsAppFloating } from './components/WhatsAppFloating';
import { MobileBottomBar } from './components/MobileBottomBar';
import type { LeadFormData } from './types';

export function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [leadData, setLeadData] = useState<LeadFormData | null>(null);

  const handleLeadSubmitted = (data: LeadFormData) => {
    setLeadData(data);
    setIsModalOpen(true);
  };

  const handleOpenForm = () => {
    const heroForm = document.getElementById('hero');
    if (heroForm) {
      heroForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectCategory = (_catId: string) => {
    handleOpenForm();
  };

  const handleSelectCourse = (_courseTitle: string) => {
    handleOpenForm();
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-['Plus_Jakarta_Sans',sans-serif] selection:bg-cyan-500 selection:text-white pb-14 sm:pb-0">
      {/* Sticky Header Navigation */}
      <Navbar onOpenForm={handleOpenForm} />

      <main>
        {/* Hero Section with Interactive Lead Form Card */}
        <HeroSection onSubmitLead={handleLeadSubmitted} />

        {/* 3-Column Main Categories Grid */}
        <CategoryGrid onSelectCategory={handleSelectCategory} />

        {/* Why Choose Us Feature Grid */}
        <WhyChooseUs />

        {/* Filterable Course Catalog Showcase */}
        <CourseCatalog onSelectCourse={handleSelectCourse} />

        {/* Success Stories Testimonials */}
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

      {/* Optimized Sticky Mobile Bottom Bar */}
      <MobileBottomBar onOpenForm={handleOpenForm} />

      {/* Interactive Coupon Discount Modal */}
      <DiscountModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        leadData={leadData}
      />
    </div>
  );
}

export default App;
