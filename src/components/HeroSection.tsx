import React from 'react';

interface HeroSectionProps {
  onOpenForm: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenForm }) => {
  return (
    <section id="hero" className="pt-12 sm:pt-16 pb-2 sm:pb-6 bg-white w-full overflow-hidden">
      {/* Clickable Hero Banner - 16:9 Prominent Ratio on Mobile & Natural on Desktop */}
      <div 
        onClick={onOpenForm}
        className="w-full cursor-pointer block select-none overflow-hidden"
      >
        <img
          src="/assets/hero_banner_official.png"
          alt="Inscríbete ahora haciendo clic aquí y obtén un segundo curso gratis - Grupo INSUR"
          className="w-full aspect-[16/9] sm:aspect-auto min-h-[220px] sm:min-h-0 object-cover object-[20%_center] sm:object-contain sm:object-center block mx-auto transition-transform duration-300 active:scale-[0.99]"
          loading="eager"
          fetchPriority="high"
        />
      </div>
    </section>
  );
};
