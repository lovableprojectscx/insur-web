import React from 'react';

interface HeroSectionProps {
  onOpenForm: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenForm }) => {
  return (
    <section id="hero" className="pt-12 sm:pt-16 pb-0 mb-0 bg-white w-full overflow-hidden flex items-center justify-center">
      {/* Clickable Hero Banner - 100% Attached with Zero Bottom Padding */}
      <div 
        onClick={onOpenForm}
        className="w-full cursor-pointer flex items-center justify-center select-none overflow-hidden"
      >
        <img
          src="/assets/hero_banner_official.png"
          alt="Inscríbete ahora haciendo clic aquí y obtén un segundo curso gratis - Grupo INSUR"
          className="w-full aspect-[16/9] sm:aspect-auto min-h-[200px] sm:min-h-0 object-cover sm:object-contain object-center block mx-auto transition-transform duration-300 active:scale-[0.99]"
          loading="eager"
          fetchPriority="high"
        />
      </div>
    </section>
  );
};
