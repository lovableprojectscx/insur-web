import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Smartphone, Award, Lock, Tag, CheckCircle2, ShieldCheck, GraduationCap } from 'lucide-react';
import type { LeadFormData } from '../types';

interface HeroSectionProps {
  onSubmitLead: (data: LeadFormData) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onSubmitLead }) => {
  const [formData, setFormData] = useState<LeadFormData>({
    fullName: '',
    email: '',
    phone: '',
    areaOfInterest: 'Capacitación y Diplomados'
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phone) return;
    
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onSubmitLead(formData);
    }, 500);
  };

  return (
    <section id="hero" className="relative pt-36 pb-20 lg:pt-40 lg:pb-24 bg-gradient-to-b from-white via-[#F8FAFC] to-white text-slate-900 overflow-hidden border-b border-slate-200">
      
      {/* Clean Ambient Corporate Lighting (No awkward dot/star patterns!) */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <div className="absolute top-10 left-10 w-96 h-96 bg-blue-100/60 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-100/50 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
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
                className="flex items-center gap-2.5 bg-white p-3 rounded-xl border border-slate-200 shadow-xs"
              >
                <CheckCircle2 className="w-5 h-5 text-[#1559ED] shrink-0" />
                <span className="text-xs font-black text-slate-800">Clases 100% Virtuales En Vivo</span>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-2.5 bg-white p-3 rounded-xl border border-slate-200 shadow-xs"
              >
                <ShieldCheck className="w-5 h-5 text-[#1559ED] shrink-0" />
                <span className="text-xs font-black text-slate-800">Certificación Oficial con QR</span>
              </motion.div>
            </div>

            {/* CERSA-Style Giant Cyan Pill Action Button */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#registro"
                className="px-9 py-4 rounded-full bg-[#00A3E0] hover:bg-[#0082B3] text-white font-black text-sm uppercase tracking-wider shadow-xl hover:shadow-cyan-500/30 transition-all inline-flex items-center gap-3 cursor-pointer border border-cyan-300"
              >
                <span>¡HAZ CLIC AQUÍ!</span>
                <ArrowRight className="w-5 h-5" />
              </motion.a>

              {/* App Badges */}
              <div className="flex items-center gap-3 text-xs font-extrabold text-slate-600">
                <div className="flex items-center gap-1.5 bg-white px-3 py-2 rounded-xl border border-slate-200 shadow-2xs">
                  <Smartphone className="w-4 h-4 text-[#1559ED]" />
                  <span>iOS & Android App</span>
                </div>
              </div>
            </div>

          </motion.div>

          {/* Right Column: CERSA-Style Registration Form Card */}
          <motion.div 
            id="registro"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="rounded-3xl bg-white text-slate-900 border-2 border-[#1559ED]/40 shadow-2xl overflow-hidden relative">
              
              {/* Header Banner Inside Card */}
              <div className="bg-[#1559ED] text-white text-center py-3.5 px-4 flex items-center justify-center gap-2 shadow-sm">
                <Tag className="w-4 h-4 fill-current text-white" />
                <span className="font-black text-xs tracking-wider uppercase">
                  OFERTA EXCLUSIVA DE REGISTRO
                </span>
              </div>

              {/* Form Content */}
              <div className="p-6 sm:p-7">
                
                {/* Form Direct Offer Header */}
                <div className="text-center mb-5 pb-3 border-b border-slate-200">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#1559ED] text-xs font-black uppercase tracking-wider mb-2">
                    <Award className="w-3.5 h-3.5 text-[#1559ED]" />
                    <span>DESCUENTO EXCLUSIVO 10% OFF</span>
                  </div>
                  <h2 className="text-base sm:text-lg font-black text-[#0A2540] tracking-tight leading-snug">
                    Inscríbete y Obtén <span className="text-[#1559ED]">10% de Descuento</span> en el Curso de Tu Preferencia
                  </h2>
                  <p className="text-xs text-slate-500 mt-1 font-medium">
                    Completa el formulario para reservar tu vacante y activar tu código promocional.
                  </p>
                </div>

                {/* Lead Form */}
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-black text-[#0A2540] mb-1 uppercase tracking-wide">
                      Nombre Completo <span className="text-[#1559ED]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ej. Ing. Juan Pérez"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-xs focus:outline-none focus:border-[#1559ED] focus:bg-white focus:ring-2 focus:ring-[#1559ED]/20 transition-all font-semibold"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-black text-[#0A2540] mb-1 uppercase tracking-wide">
                      Correo Electrónico <span className="text-[#1559ED]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="ejemplo@correo.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-xs focus:outline-none focus:border-[#1559ED] focus:bg-white focus:ring-2 focus:ring-[#1559ED]/20 transition-all font-semibold"
                    />
                  </div>

                  {/* WhatsApp */}
                  <div>
                    <label className="block text-xs font-black text-[#0A2540] mb-1 uppercase tracking-wide">
                      Teléfono / WhatsApp <span className="text-[#1559ED]">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="Ej. 966000111"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-xs focus:outline-none focus:border-[#1559ED] focus:bg-white focus:ring-2 focus:ring-[#1559ED]/20 transition-all font-semibold"
                    />
                  </div>

                  {/* Interest Area */}
                  <div>
                    <label className="block text-xs font-black text-[#0A2540] mb-1 uppercase tracking-wide">
                      Programa de Interés <span className="text-[#1559ED]">*</span>
                    </label>
                    <select
                      value={formData.areaOfInterest}
                      onChange={(e) => setFormData({ ...formData, areaOfInterest: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:outline-none focus:border-[#1559ED] focus:bg-white focus:ring-2 focus:ring-[#1559ED]/20 transition-all font-semibold"
                    >
                      <option value="Capacitación y Diplomados">Diplomados Ejecutivos Virtuales</option>
                      <option value="Carrera Técnica">Carreras Técnicas Virtuales</option>
                      <option value="Ingeniería y Construcción">Ingeniería y Obras Virtuales</option>
                    </select>
                  </div>

                  {/* Action Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={loading}
                    className="w-full mt-3 py-4 px-4 rounded-xl bg-[#1559ED] hover:bg-blue-800 text-white font-black text-xs uppercase tracking-wider shadow-lg hover:shadow-blue-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {loading ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                      <>
                        <span>OBTENER DESCUENTO EXCLUSIVO</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </motion.button>

                  {/* Security Guarantee Note */}
                  <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-500 pt-1 font-medium">
                    <Lock className="w-3.5 h-3.5 text-slate-400" />
                    <span>Protección de datos conforme a Ley N° 29733</span>
                  </div>

                </form>

              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
