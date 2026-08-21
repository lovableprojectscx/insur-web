import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Smartphone, CheckCircle2, ShieldCheck, GraduationCap, Award, ChevronLeft, ChevronRight, Scale, Building2, Scroll, Compass, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  onOpenForm: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenForm }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 'ingenieria-civil',
      tag: 'CONVOCATORIA Y LANZAMIENTO 2026',
      tagIcon: <GraduationCap className="w-4 h-4 text-[#00A3E0]" />,
      title1: 'LANZAMIENTO EXCLUSIVO',
      title2: 'AULA VIRTUAL 24/7',
      subtitle: 'Formación en ingeniería sin interrupciones',
      bullet1Title: 'Clases 100% Virtuales En Vivo',
      bullet1Sub: 'Docentes colegiados CIP activos',
      bullet2Title: 'Certificación Oficial con QR',
      bullet2Sub: 'Válida para Licitaciones OSCE',
      btnText: '¡HAZ CLIC AQUÍ!',
      btnColor: 'bg-[#00A3E0] hover:bg-[#0082B3] text-white border border-cyan-300 shadow-cyan-500/30',
      badgeTop: '10% OFF EXCLUSIVO',
      badgeBottom: 'Acreditación CIP Oficial',
      badgeBottomSub: 'Válido para Licitaciones',
      badgeBottomIcon: <ShieldCheck className="w-5 h-5 text-[#00A3E0]" />,
      image: '/assets/engineer_user_cutout.png',
      imageAlt: 'Ingeniero Civil Residente de Obra Grupo INSUR',
      accentColor: 'text-[#00A3E0]'
    },
    {
      id: 'alta-especializacion',
      tag: 'ESPECIALIZACIÓN & DIPLOMADOS',
      tagIcon: <Building2 className="w-4 h-4 text-[#00A3E0]" />,
      title1: 'DIPLOMADOS EJECUTIVOS',
      title2: 'ESTRUCTURAS & BIM 5D',
      subtitle: 'Cálculo Sismorresistente, Hidráulica y Gestión Vial',
      bullet1Title: 'Plana Docente Ph.D. & Magíster',
      bullet1Sub: 'Ingenieros con amplia trayectoria',
      bullet2Title: 'Doble Certificación Universitaria',
      bullet2Sub: 'Respaldo institucional CIP nacional',
      btnText: 'VER DIPLOMADOS',
      btnColor: 'bg-[#00A3E0] hover:bg-[#0082B3] text-white border border-cyan-300 shadow-cyan-500/30',
      badgeTop: 'VACANTES LIMITADAS',
      badgeBottom: 'Doble Certificación CIP',
      badgeBottomSub: 'Horas Lectivas Válidas',
      badgeBottomIcon: <Award className="w-5 h-5 text-[#00A3E0]" />,
      image: '/assets/instructor_vanessa.jpg',
      imageAlt: 'Dra. Vanessa Alarcón Docente Grupo INSUR',
      accentColor: 'text-[#00A3E0]'
    },
    {
      id: 'gestion-osce',
      tag: 'CONVENIO COLEGIO DE ABOGADOS',
      tagIcon: <Scale className="w-4 h-4 text-amber-500" />,
      title1: 'GESTIÓN PÚBLICA & OSCE',
      title2: 'LEY DE CONTRATACIONES',
      subtitle: 'Licitaciones del Estado, Arbitraje e Invierte.pe',
      bullet1Title: 'Abogados y Árbitros de Estado',
      bullet1Sub: 'Especialistas en Derecho de la Construcción',
      bullet2Title: 'Respaldo del Colegio de Abogados',
      bullet2Sub: 'Convenio institucional ICA oficial',
      btnText: 'SOLICITAR BECA 10% OFF',
      btnColor: 'bg-[#0A2540] hover:bg-slate-900 text-white border border-cyan-400/40 shadow-slate-900/40',
      badgeTop: 'BECA 10% ACTIVA',
      badgeBottom: 'Respaldo ICA & OSCE',
      badgeBottomSub: 'Arbitraje y Contrataciones',
      badgeBottomIcon: <Scale className="w-5 h-5 text-amber-500" />,
      image: '/assets/instructor_gabriel.jpg',
      imageAlt: 'Abogado Gabriel Flores Especialista OSCE Grupo INSUR',
      accentColor: 'text-[#00A3E0]'
    }
  ];

  // Auto-advance slides every 6.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [slides.length]);

  const slide = slides[currentSlide];

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section id="hero" className="relative pt-36 pb-16 lg:pt-40 lg:pb-20 bg-gradient-to-b from-white via-[#F8FAFC] to-white text-slate-900 overflow-hidden border-b border-slate-200">
      
      {/* Brand Identity Accent Glows matching Logo (Deep Navy & Cyan) */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <div className="absolute top-10 left-10 w-96 h-96 bg-[#00A3E0]/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#0A2540]/10 rounded-full blur-3xl"></div>
      </div>

      {/* ========================================================================= */}
      {/* FLOATING ACADEMIC & ENGINEERING PARTICLES (Birretes, Diplomas, Compasses) */}
      {/* ========================================================================= */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
        
        {/* Floating Birrete 1 (Top Left) */}
        <motion.div
          animate={{
            y: [0, -18, 0],
            rotate: [0, 8, -6, 0]
          }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-28 left-6 sm:left-16 p-3 rounded-2xl bg-white/70 backdrop-blur-md border border-cyan-200/60 shadow-lg text-[#00A3E0] opacity-75 hidden sm:block"
        >
          <GraduationCap className="w-8 h-8" />
        </motion.div>

        {/* Floating Birrete 2 (Bottom Right) */}
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -10, 6, 0]
          }}
          transition={{ duration: 8.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute bottom-12 right-10 sm:right-24 p-3.5 rounded-2xl bg-white/80 backdrop-blur-md border border-blue-200 shadow-xl text-[#0A2540] opacity-70 hidden sm:block"
        >
          <GraduationCap className="w-9 h-9" />
        </motion.div>

        {/* Floating Certified Diploma Scroll (Top Right) */}
        <motion.div
          animate={{
            y: [0, -14, 0],
            rotate: [0, -6, 8, 0]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          className="absolute top-36 right-8 sm:right-1/3 p-2.5 rounded-2xl bg-white/60 backdrop-blur-md border border-amber-200 shadow-md text-amber-500 opacity-65 hidden md:block"
        >
          <Scroll className="w-7 h-7" />
        </motion.div>

        {/* Floating Engineering Compass (Bottom Left) */}
        <motion.div
          animate={{
            y: [0, 16, 0],
            rotate: [0, 12, -8, 0]
          }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
          className="absolute bottom-20 left-12 sm:left-1/4 p-2.5 rounded-2xl bg-white/60 backdrop-blur-md border border-cyan-200 shadow-md text-[#00A3E0] opacity-60 hidden lg:block"
        >
          <Compass className="w-7 h-7" />
        </motion.div>

        {/* Floating Sparkle / Star (Center) */}
        <motion.div
          animate={{
            scale: [1, 1.25, 1],
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-cyan-400 opacity-40 pointer-events-none hidden lg:block"
        >
          <Sparkles className="w-10 h-10" />
        </motion.div>

      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Slide Controls & Indicator Tabs at Top */}
        <div className="flex items-center justify-between gap-2 mb-6 pb-2 border-b border-slate-200/80">
          <div className="flex items-center gap-2">
            {slides.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setCurrentSlide(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  currentSlide === idx 
                    ? 'w-10 bg-[#00A3E0] shadow-xs' 
                    : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Ir al slide ${idx + 1}`}
              />
            ))}
            <span className="text-[11px] font-bold text-slate-400 ml-2">
              0{currentSlide + 1} / 0{slides.length}
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={handlePrev}
              className="p-1.5 rounded-full bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-[#00A3E0] shadow-xs transition-colors cursor-pointer"
              aria-label="Slide anterior"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              className="p-1.5 rounded-full bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-[#00A3E0] shadow-xs transition-colors cursor-pointer"
              aria-label="Siguiente slide"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Dynamic Slide Content Container */}
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[460px]"
          >
            
            {/* Left Column: Bold Headline & Call-to-Action */}
            <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
              
              {/* Brand Top Tag */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50/80 border border-blue-200 text-[#0A2540] text-xs font-black uppercase tracking-wider shadow-2xs">
                {slide.tagIcon}
                <span>{slide.tag}</span>
              </div>

              {/* Giant Typography with Logo Colors (Navy & Cyan) */}
              <div className="space-y-1">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A2540] tracking-tight leading-none uppercase">
                  {slide.title1}
                </h1>
                <div className={`text-3xl sm:text-4xl lg:text-5xl font-black ${slide.accentColor} tracking-tight uppercase`}>
                  {slide.title2}
                </div>
                <p className="text-base sm:text-lg font-medium text-slate-500 italic font-serif pt-1">
                  {slide.subtitle}
                </p>
              </div>

              {/* Feature Bullets */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-left max-w-lg mx-auto lg:mx-0">
                <div className="flex items-center gap-2.5 bg-white p-3 rounded-2xl border border-slate-200 shadow-xs">
                  <CheckCircle2 className="w-5 h-5 text-[#00A3E0] shrink-0" />
                  <div>
                    <h4 className="text-xs font-black text-slate-800">{slide.bullet1Title}</h4>
                    <p className="text-[10px] text-slate-500 font-medium">{slide.bullet1Sub}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 bg-white p-3 rounded-2xl border border-slate-200 shadow-xs">
                  <ShieldCheck className="w-5 h-5 text-[#00A3E0] shrink-0" />
                  <div>
                    <h4 className="text-xs font-black text-slate-800">{slide.bullet2Title}</h4>
                    <p className="text-[10px] text-slate-500 font-medium">{slide.bullet2Sub}</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={onOpenForm}
                  className={`px-8 py-3.5 rounded-full font-black text-sm uppercase tracking-wider shadow-lg transition-all inline-flex items-center gap-2.5 cursor-pointer ${slide.btnColor}`}
                >
                  <span>{slide.btnText}</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>

                <div className="flex items-center gap-1.5 bg-white px-3 py-2 rounded-2xl border border-slate-200 shadow-2xs text-xs font-black text-slate-600">
                  <Smartphone className="w-4 h-4 text-[#00A3E0]" />
                  <span>App 24/7</span>
                </div>
              </div>

              {/* Trust Quote */}
              <div className="pt-1 flex items-center justify-center lg:justify-start gap-3 text-xs font-bold text-slate-500">
                <span className="flex items-center gap-1 text-emerald-600">
                  <Award className="w-4 h-4" /> 10% Descuento Directo
                </span>
                <span>•</span>
                <span>Convocatoria Nacional 2026</span>
              </div>

            </div>

            {/* Right Column: Clean, Perfectly Framed Portrait Without Text Cutoffs */}
            <div className="lg:col-span-5 flex items-center justify-center">
              <div 
                className="relative w-full max-w-sm sm:max-w-md flex flex-col items-center cursor-pointer group"
                onClick={onOpenForm}
              >
                
                {/* Photo Container */}
                <div className="relative w-full flex items-center justify-center min-h-[380px] sm:min-h-[420px]">
                  {slide.id === 'ingenieria-civil' ? (
                    // Transparent Cutout for Engineer
                    <img
                      src={slide.image}
                      alt={slide.imageAlt}
                      className="w-full h-auto max-h-[440px] sm:max-h-[480px] object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.22)] group-hover:scale-103 transition-transform duration-500"
                    />
                  ) : (
                    // Beautiful Clean Studio Portrait for Doctora / Lawyer
                    <div className="relative w-full h-84 sm:h-96 rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 flex items-center justify-center">
                      <img
                        src={slide.image}
                        alt={slide.imageAlt}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}

                  {/* Floating Red 10% OFF Badge */}
                  <div className="absolute top-4 right-2 sm:right-4 bg-[#D92D20] text-white text-[11px] font-black px-3.5 py-1.5 rounded-full uppercase tracking-wider shadow-xl animate-bounce border-2 border-white">
                    {slide.badgeTop}
                  </div>

                  {/* Floating Trust Seal Chip */}
                  <div className="absolute bottom-4 left-2 sm:left-4 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-slate-200 shadow-xl flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center shrink-0 border border-blue-200">
                      {slide.badgeBottomIcon}
                    </div>
                    <div className="text-left">
                      <p className="text-[11px] font-black text-[#0A2540] leading-none">{slide.badgeBottom}</p>
                      <p className="text-[9px] text-slate-500 font-bold mt-0.5">{slide.badgeBottomSub}</p>
                    </div>
                  </div>
                </div>

                {/* Bottom Interactive Trigger Pill */}
                <div className="mt-2 w-full p-3 rounded-2xl bg-[#0A2540] hover:bg-slate-900 text-white text-center flex items-center justify-between shadow-lg transition-all border border-slate-700">
                  <div className="text-left">
                    <p className="text-[9px] font-bold text-[#00A3E0] uppercase">Convocatoria 2026</p>
                    <p className="text-xs font-black">Inscríbete Hoy Mismo</p>
                  </div>
                  <span className="px-3 py-1 rounded-xl bg-[#00A3E0] text-white text-xs font-black uppercase shadow-xs flex items-center gap-1">
                    <span>Reclamar 10% OFF</span>
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>

              </div>
            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
