import React from 'react';

interface HeroSectionProps {
  onOpenForm: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenForm }) => {
  return (
    <section id="hero" className="pt-12 sm:pt-16 pb-2 sm:pb-6 bg-white w-full overflow-hidden">
      {/* 100% Full-Width Edge-to-Edge Container in Maximum High Resolution */}
      <div 
        onClick={onOpenForm}
        className="w-full cursor-pointer block select-none"
      >
        <img
          src="/assets/hero_banner_official.png"
          alt="Inscríbete ahora haciendo clic aquí y obtén un segundo curso gratis - Grupo INSUR"
          className="w-full h-auto max-h-[85vh] object-cover sm:object-contain object-center block mx-auto"
          loading="eager"
          fetchPriority="high"
        />
      </div>
    </section>
  );
};
