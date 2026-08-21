import React from 'react';

interface HeroSectionProps {
  onOpenForm: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenForm }) => {
  return (
    <section id="hero" className="pt-16 sm:pt-20 pb-4 sm:pb-8 bg-white flex items-center justify-center">
      <div className="w-full max-w-7xl mx-auto px-0 sm:px-4">
        
        {/* Clean Official Banner - Without Borders, Frames or Box Overlays */}
        <div
          onClick={onOpenForm}
          className="w-full cursor-pointer overflow-hidden transition-opacity hover:opacity-95"
        >
          <img
            src="/assets/hero_banner_official.png"
            alt="Inscríbete ahora y obtén un segundo curso gratis - Grupo INSUR"
            className="w-full h-auto object-contain block"
          />
        </div>

      </div>
    </section>
  );
};
