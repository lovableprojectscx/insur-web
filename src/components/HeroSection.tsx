import React from 'react';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  onOpenForm: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenForm }) => {
  return (
    <section id="hero" className="pt-24 sm:pt-28 pb-6 sm:pb-10 bg-slate-100 flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 w-full">
        
        {/* Official Banner Container - Clickable to Open Registration Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          onClick={onOpenForm}
          className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl cursor-pointer group border-2 sm:border-4 border-white bg-white"
        >
          <img
            src="/assets/hero_banner_official.png"
            alt="Inscríbete ahora y obtén un segundo curso gratis - Grupo INSUR"
            className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.01]"
          />
        </motion.div>

      </div>
    </section>
  );
};
