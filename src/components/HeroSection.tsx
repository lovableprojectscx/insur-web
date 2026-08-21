import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Smartphone, CheckCircle2, ShieldCheck, GraduationCap, Award, ChevronLeft, ChevronRight, Scale, Building2 } from 'lucide-react';

interface HeroSectionProps {
  onOpenForm: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenForm }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 'ingenieria-civil',
      slideNumber: '01',
      tag: 'CONVOCATORIA Y LANZAMIENTO EXCLUSIVO 2026',
      tagIcon: <GraduationCap className="w-4 h-4 text-[#00A3E0]" />,
      title1: 'LANZAMIENTO EXCLUSIVO',
      title2: 'AULA VIRTUAL 24/7',
      subtitle: 'Formación en ingeniería de alto impacto sin interrupciones.',
      bullet1: 'Clases 100% Virtuales en Vivo con Docentes CIP',
      bullet2: 'Certificación Oficial con QR para Licitaciones OSCE',
      btnText: '¡HAZ CLIC AQUÍ!',
      btnColor: 'bg-[#00A3E0] hover:bg-[#0082B3] text-white shadow-cyan-500/30 border border-cyan-300',
      badgeTop: '10% OFF EXCLUSIVO',
      trustChipTitle: 'Acreditación CIP Oficial',
      trustChipSub: 'Válido para Licitaciones OSCE',
      image: '/assets/engineer_user_cutout.png',
      isCutout: true,
      imageAlt: 'Ingeniero Civil Residente de Obra Grupo INSUR'
    },
    {
      id: 'alta-especializacion',
      slideNumber: '02',
      tag: 'DIPLOMADOS DE ALTA ESPECIALIZACIÓN',
      tagIcon: <Building2 className="w-4 h-4 text-[#00A3E0]" />,
      title1: 'DIPLOMADOS EJECUTIVOS',
      title2: 'ESTRUCTURAS & BIM 5D',
      subtitle: 'Cálculo Sismorresistente, Modelado BIM y Gestión de Megaproyectos.',
      bullet1: 'Plana Docente con Grado de Ph.D. y Magíster',
      bullet2: 'Doble Certificación con Respaldo Universitario',
      btnText: 'VER DIPLOMADOS',
      btnColor: 'bg-[#1559ED] hover:bg-blue-700 text-white shadow-blue-500/30 border border-blue-400',
      badgeTop: 'CONVOCATORIA ABIERTA',
      trustChipTitle: 'Doble Certificación CIP',
      trustChipSub: 'Horas Lectivas Válidas',
      image: '/assets/instructor_vanessa.jpg',
      isCutout: false,
      imageAlt: 'Dra. Vanessa Alarcón Docente Grupo INSUR'
    },
    {
      id: 'gestion-osce',
      slideNumber: '03',
      tag: 'CONVENIO COLEGIO DE ABOGADOS',
      tagIcon: <Scale className="w-4 h-4 text-amber-500" />,
      title1: 'GESTIÓN PÚBLICA & OSCE',
      title2: 'LEY DE CONTRATACIONES',
      subtitle: 'Licitaciones del Estado, Arbitraje de Obras y Sistema Invierte.pe.',
      bullet1: 'Abogados y Árbitros Especialistas en Construcción',
      bullet2: 'Convenio Institucional con el Colegio de Abogados',
      btnText: 'SOLICITAR BECA 10%',
      btnColor: 'bg-[#0A2540] hover:bg-slate-900 text-white shadow-slate-900/30 border border-slate-700',
      badgeTop: 'BECA 10% ACTIVA',
      trustChipTitle: 'Respaldo ICA & OSCE',
      trustChipSub: 'Arbitraje y Contrataciones',
      image: '/assets/instructor_gabriel.jpg',
      isCutout: false,
      imageAlt: 'Abogado Gabriel Flores Especialista OSCE Grupo INSUR'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const slide = slides[currentSlide];

  return (
    <section id="hero" className="relative pt-36 pb-16 lg:pt-40 lg:pb-24 bg-gradient-to-b from-white via-slate-50 to-white text-slate-900 overflow-hidden border-b border-slate-200 min-h-screen flex flex-col justify-center">
      
      {/* Slide Badge */}
      <div className="absolute top-24 left-8 hidden lg:flex items-center gap-2 bg-[#0A2540] text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border border-slate-700">
        <span className="w-2 h-2 rounded-full bg-[#00A3E0] animate-pulse"></span>
        <span>SLIDE 01 / 05 • INICIO & AULA VIRTUAL</span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* PPT Top Navigator */}
        <div className="flex items-center justify-between gap-4 mb-8 pb-3 border-b border-slate-200">
          <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto scrollbar-none py-1">
            {slides.map((s, idx) => {
              const isActive = currentSlide === idx;
              return (
                <button
                  key={s.id}
                  onClick={() => setCurrentSlide(idx)}
                  className={`px-4 py-2 rounded-xl font-black text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
                    isActive
                      ? 'bg-[#0A2540] text-white shadow-md'
                      : 'bg-white text-slate-500 border border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <span className={`text-[10px] ${isActive ? 'text-[#00A3E0]' : 'text-slate-400'}`}>
                    {s.slideNumber}
                  </span>
                  <span>{s.title2}</span>
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-1.5 shrink-0">
            <button
              onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
              className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-[#00A3E0] shadow-xs cursor-pointer active:scale-95"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
              className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-[#00A3E0] shadow-xs cursor-pointer active:scale-95"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Dynamic Slide Content */}
        <div className="relative min-h-[480px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center"
            >
              
              {/* Left Column */}
              <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
                
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#0A2540] text-xs font-black uppercase tracking-wider shadow-2xs">
                  {slide.tagIcon}
                  <span>{slide.tag}</span>
                </div>

                <div className="space-y-1">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0A2540] tracking-tight leading-none uppercase">
                    {slide.title1}
                  </h1>
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#00A3E0] tracking-tight uppercase">
                    {slide.title2}
                  </div>
                  <p className="text-base sm:text-lg font-medium text-slate-600 pt-2 leading-relaxed max-w-xl mx-auto lg:mx-0">
                    {slide.subtitle}
                  </p>
                </div>

                {/* Key Benefit Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-left max-w-xl mx-auto lg:mx-0">
                  <div className="flex items-center gap-3 bg-white p-3.5 rounded-2xl border border-slate-200 shadow-xs">
                    <CheckCircle2 className="w-5 h-5 text-[#00A3E0] shrink-0" />
                    <span className="text-xs font-bold text-slate-800 leading-tight">
                      {slide.bullet1}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 bg-white p-3.5 rounded-2xl border border-slate-200 shadow-xs">
                    <ShieldCheck className="w-5 h-5 text-[#00A3E0] shrink-0" />
                    <span className="text-xs font-bold text-slate-800 leading-tight">
                      {slide.bullet2}
                    </span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={onOpenForm}
                    className={`px-9 py-4 rounded-full font-black text-sm uppercase tracking-wider shadow-lg transition-all inline-flex items-center gap-3 cursor-pointer ${slide.btnColor}`}
                  >
                    <span>{slide.btnText}</span>
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>

                  <div className="flex items-center gap-2 bg-white px-4 py-3 rounded-2xl border border-slate-200 shadow-2xs text-xs font-black text-slate-700">
                    <Smartphone className="w-4 h-4 text-[#00A3E0]" />
                    <span>Campus Virtual 24/7</span>
                  </div>
                </div>

                <div className="pt-1 flex items-center justify-center lg:justify-start gap-4 text-xs font-bold text-slate-500">
                  <span className="flex items-center gap-1.5 text-emerald-600">
                    <Award className="w-4 h-4" /> Descuento Directo del 10%
                  </span>
                  <span>•</span>
                  <span>Convocatoria Nacional 2026</span>
                </div>

              </div>

              {/* Right Column: Large Photo Display */}
              <div className="lg:col-span-5 flex items-center justify-center">
                <div 
                  className="relative w-full max-w-md flex flex-col items-center cursor-pointer group"
                  onClick={onOpenForm}
                >
                  
                  <div className="relative w-full flex items-center justify-center min-h-[420px] sm:min-h-[460px]">
                    {slide.isCutout ? (
                      <img
                        src={slide.image}
                        alt={slide.imageAlt}
                        className="w-full h-auto max-h-[480px] sm:max-h-[520px] object-contain drop-shadow-[0_25px_40px_rgba(0,0,0,0.22)] group-hover:scale-103 transition-transform duration-500"
                      />
                    ) : (
                      <div className="relative w-full h-[400px] sm:h-[450px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 flex items-center justify-center">
                        <img
                          src={slide.image}
                          alt={slide.imageAlt}
                          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    )}

                    <div className="absolute top-4 right-2 sm:right-4 bg-[#D92D20] text-white text-[11px] font-black px-3.5 py-1.5 rounded-full uppercase tracking-wider shadow-xl animate-bounce border-2 border-white">
                      {slide.badgeTop}
                    </div>

                    <div className="absolute bottom-4 left-2 sm:left-4 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-slate-200 shadow-xl flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center shrink-0 border border-blue-200 text-[#00A3E0]">
                        <ShieldCheck className="w-5 h-5" />
                      </div>
                      <div className="text-left">
                        <p className="text-[11px] font-black text-[#0A2540] leading-none">{slide.trustChipTitle}</p>
                        <p className="text-[9px] text-slate-500 font-bold mt-0.5">{slide.trustChipSub}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 w-full p-3.5 rounded-2xl bg-[#0A2540] hover:bg-slate-900 text-white text-center flex items-center justify-between shadow-lg transition-all border border-slate-700">
                    <div className="text-left">
                      <p className="text-[9px] font-bold text-[#00A3E0] uppercase">Convocatoria 2026</p>
                      <p className="text-xs font-black">Inscríbete con 10% de Descuento</p>
                    </div>
                    <span className="px-3.5 py-1.5 rounded-xl bg-[#00A3E0] text-white text-xs font-black uppercase shadow-xs flex items-center gap-1.5">
                      <span>Inscribirme</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>

                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
