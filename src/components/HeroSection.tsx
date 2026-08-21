import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Smartphone, CheckCircle2, ShieldCheck, GraduationCap, Award } from 'lucide-react';

interface HeroSectionProps {
  onOpenForm: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenForm }) => {
  return (
    <section id="hero" className="relative pt-36 pb-16 lg:pt-40 lg:pb-20 bg-gradient-to-b from-white via-[#F8FAFC] to-white text-slate-900 overflow-hidden border-b border-slate-200">
      
      {/* Clean Ambient Corporate Lighting */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <div className="absolute top-10 left-10 w-96 h-96 bg-blue-100/60 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-100/50 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: CERSA-Style Bold Headline & Call-to-Action */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            
            {/* Clean Corporate Top Badge Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#1559ED] text-xs font-black uppercase tracking-wider shadow-2xs">
              <GraduationCap className="w-4 h-4 text-[#1559ED]" />
              <span>CONVOCATORIA Y LANZAMIENTO EXCLUSIVO 2026</span>
            </div>

            {/* CERSA-Style Giant Typography */}
            <div className="space-y-1">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#1559ED] tracking-tight leading-none uppercase">
                LANZAMIENTO EXCLUSIVO
              </h1>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-light text-slate-400 tracking-tight uppercase">
                AULA VIRTUAL 24/7
              </div>
              <p className="text-lg sm:text-xl font-medium text-slate-500 italic font-serif pt-1">
                Formación en ingeniería sin interrupciones
              </p>
            </div>

            {/* Feature Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-left max-w-lg mx-auto lg:mx-0">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-2.5 bg-white p-3.5 rounded-2xl border border-slate-200 shadow-xs"
              >
                <CheckCircle2 className="w-5 h-5 text-[#1559ED] shrink-0" />
                <div>
                  <h4 className="text-xs font-black text-slate-800">Clases 100% Virtuales En Vivo</h4>
                  <p className="text-[10px] text-slate-500 font-medium">Docentes colegiados CIP activos</p>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-2.5 bg-white p-3.5 rounded-2xl border border-slate-200 shadow-xs"
              >
                <ShieldCheck className="w-5 h-5 text-[#1559ED] shrink-0" />
                <div>
                  <h4 className="text-xs font-black text-slate-800">Certificación Oficial con QR</h4>
                  <p className="text-[10px] text-slate-500 font-medium">Válida para Licitaciones OSCE</p>
                </div>
              </motion.div>
            </div>

            {/* Giant Cyan Pill Action Button -> Opens Registration Popup Modal! */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onOpenForm}
                className="px-9 py-4 rounded-full bg-[#00A3E0] hover:bg-[#0082B3] text-white font-black text-sm uppercase tracking-wider shadow-xl hover:shadow-cyan-500/30 transition-all inline-flex items-center gap-3 cursor-pointer border border-cyan-300"
              >
                <span>¡HAZ CLIC AQUÍ!</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>

              {/* App Badges */}
              <div className="flex items-center gap-3 text-xs font-extrabold text-slate-600">
                <div className="flex items-center gap-1.5 bg-white px-3.5 py-2.5 rounded-2xl border border-slate-200 shadow-2xs">
                  <Smartphone className="w-4 h-4 text-[#1559ED]" />
                  <span>iOS & Android App</span>
                </div>
              </div>
            </div>

            {/* Trust Quote */}
            <div className="pt-2 flex items-center justify-center lg:justify-start gap-4 text-xs font-bold text-slate-500">
              <span className="flex items-center gap-1 text-emerald-600">
                <Award className="w-4 h-4" /> 10% Descuento Directo
              </span>
              <span>•</span>
              <span>Vacantes Limitadas Convocatoria 2026</span>
            </div>

          </motion.div>

          {/* Right Column: CERSA-Style 3D Smartphone & Tablet App Mockup Graphic */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex items-center justify-center"
          >
            <div className="relative w-full max-w-md cursor-pointer group" onClick={onOpenForm}>
              
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white group-hover:scale-102 transition-transform duration-500">
                <img
                  src="/assets/hero_app_mockup.jpg"
                  alt="Aula Virtual App Grupo INSUR en Smartphone y Tablet"
                  className="w-full h-auto object-cover"
                />
                
                {/* Floating 10% OFF Badge on App Mockup */}
                <div className="absolute top-4 right-4 bg-[#D92D20] text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider shadow-lg animate-bounce">
                  10% OFF EXCLUSIVO
                </div>

                {/* Bottom Interactive Trigger Banner */}
                <div className="p-4 bg-gradient-to-r from-[#1559ED] to-[#00A3E0] text-white text-center flex items-center justify-between">
                  <div className="text-left">
                    <p className="text-[10px] font-bold text-cyan-200 uppercase">Campus Virtual Activo</p>
                    <p className="text-xs font-black">Inscríbete Hoy Mismo</p>
                  </div>
                  <span className="px-3 py-1 rounded-xl bg-white text-[#1559ED] text-xs font-black uppercase shadow-xs">
                    Abrir Formulario →
                  </span>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
