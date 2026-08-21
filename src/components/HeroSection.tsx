import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Smartphone, CheckCircle2, ShieldCheck, GraduationCap, ChevronLeft, ChevronRight, Scale, Building2 } from 'lucide-react';

interface HeroSectionProps {
  onOpenForm: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenForm }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 'ingenieria-civil',
      slideNumber: '01',
      category: 'CONVOCATORIA 2026',
      tagIcon: <GraduationCap className="w-3.5 h-3.5 text-[#00A3E0]" />,
      title1: 'LANZAMIENTO EXCLUSIVO',
      title2: 'AULA VIRTUAL 24/7',
      subtitle: 'Formación en ingeniería sin interrupciones.',
      btnText: '¡HAZ CLIC AQUÍ!',
      btnColor: 'bg-[#00A3E0] hover:bg-[#0082B3] text-white',
      badgeText: '10% OFF',
      image: '/assets/engineer_user_cutout.png',
      isCutout: true,
      imageAlt: 'Ingeniero Civil Residente de Obra Grupo INSUR'
    },
    {
      id: 'alta-especializacion',
      slideNumber: '02',
      category: 'DIPLOMADOS EJECUTIVOS',
      tagIcon: <Building2 className="w-3.5 h-3.5 text-[#00A3E0]" />,
      title1: 'ALTA ESPECIALIZACIÓN',
      title2: 'ESTRUCTURAS & BIM 5D',
      subtitle: 'Cálculo Sismorresistente y Modelado BIM.',
      btnText: 'VER DIPLOMADOS',
      btnColor: 'bg-[#1559ED] hover:bg-blue-700 text-white',
      badgeText: 'DOBLE CIP',
      image: '/assets/instructor_vanessa.jpg',
      isCutout: false,
      imageAlt: 'Dra. Vanessa Alarcón Docente Grupo INSUR'
    },
    {
      id: 'gestion-osce',
      slideNumber: '03',
      category: 'CONVENIO ABOGADOS',
      tagIcon: <Scale className="w-3.5 h-3.5 text-amber-500" />,
      title1: 'GESTIÓN PÚBLICA',
      title2: 'LICITACIONES OSCE',
      subtitle: 'Ley de Contrataciones y Arbitraje de Obras.',
      btnText: 'SOLICITAR BECA 10%',
      btnColor: 'bg-[#0A2540] hover:bg-slate-900 text-white border border-slate-700',
      badgeText: 'BECA 10%',
      image: '/assets/instructor_gabriel.jpg',
      isCutout: false,
      imageAlt: 'Abogado Gabriel Flores Especialista OSCE Grupo INSUR'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const slide = slides[currentSlide];

  return (
    <section id="hero" className="relative pt-32 pb-10 sm:pt-36 sm:pb-14 bg-gradient-to-b from-white via-slate-50 to-white text-slate-900 overflow-hidden border-b border-slate-200">
      
      {/* Ambient Lighting */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-10 left-10 w-80 h-80 bg-[#00A3E0]/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#0A2540]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Compact PPT Navigator */}
        <div className="flex items-center justify-between gap-3 mb-6 pb-2 border-b border-slate-200">
          <div className="flex items-center gap-2">
            {slides.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setCurrentSlide(idx)}
                className={`px-3 py-1 rounded-lg font-black text-xs uppercase tracking-wider transition-all cursor-pointer ${
                  currentSlide === idx 
                    ? 'bg-[#0A2540] text-white shadow-xs' 
                    : 'bg-white text-slate-400 border border-slate-200'
                }`}
              >
                <span>{s.slideNumber}</span>
                <span className="hidden sm:inline ml-1.5">{s.title2}</span>
              </button>
            ))}
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
              className="p-1.5 rounded-lg bg-white border border-slate-200 text-slate-600 hover:text-[#00A3E0]"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
              className="p-1.5 rounded-lg bg-white border border-slate-200 text-slate-600 hover:text-[#00A3E0]"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Compact Slide Container */}
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -25 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center"
          >
            
            {/* Left Column: Direct and Punchy */}
            <div className="lg:col-span-7 space-y-4 text-center lg:text-left">
              
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#0A2540] text-[11px] font-black uppercase">
                {slide.tagIcon}
                <span>{slide.category}</span>
              </div>

              <div className="space-y-0.5">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A2540] tracking-tight uppercase leading-none">
                  {slide.title1}
                </h1>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#00A3E0] tracking-tight uppercase">
                  {slide.title2}
                </div>
                <p className="text-sm sm:text-base font-medium text-slate-500 pt-1">
                  {slide.subtitle}
                </p>
              </div>

              {/* 2 Quick Chips */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
                <span className="flex items-center gap-1.5 bg-white px-3 py-2 rounded-xl border border-slate-200 text-xs font-bold text-slate-800 shadow-2xs">
                  <CheckCircle2 className="w-4 h-4 text-[#00A3E0]" /> Clases en Vivo HD
                </span>
                <span className="flex items-center gap-1.5 bg-white px-3 py-2 rounded-xl border border-slate-200 text-xs font-bold text-slate-800 shadow-2xs">
                  <ShieldCheck className="w-4 h-4 text-[#00A3E0]" /> Certificado Oficial QR
                </span>
              </div>

              {/* Direct CTA */}
              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={onOpenForm}
                  className={`px-8 py-3.5 rounded-full font-black text-xs uppercase tracking-wider shadow-md transition-all inline-flex items-center gap-2 cursor-pointer ${slide.btnColor}`}
                >
                  <span>{slide.btnText}</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>

                <div className="flex items-center gap-1.5 bg-white px-3.5 py-2.5 rounded-2xl border border-slate-200 text-xs font-black text-slate-600">
                  <Smartphone className="w-3.5 h-3.5 text-[#00A3E0]" />
                  <span>Campus 24/7</span>
                </div>
              </div>

            </div>

            {/* Right Column: Visual Photo */}
            <div className="lg:col-span-5 flex items-center justify-center">
              <div 
                className="relative w-full max-w-xs sm:max-w-sm cursor-pointer group"
                onClick={onOpenForm}
              >
                {slide.isCutout ? (
                  <img
                    src={slide.image}
                    alt={slide.imageAlt}
                    className="w-full h-auto max-h-[380px] sm:max-h-[420px] object-contain drop-shadow-xl group-hover:scale-103 transition-transform"
                  />
                ) : (
                  <div className="relative w-full h-72 sm:h-80 rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-slate-100">
                    <img
                      src={slide.image}
                      alt={slide.imageAlt}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform"
                    />
                  </div>
                )}

                <div className="absolute top-2 right-2 bg-[#D92D20] text-white text-[10px] font-black px-3 py-1 rounded-full uppercase shadow-lg border border-white">
                  {slide.badgeText}
                </div>
              </div>
            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
