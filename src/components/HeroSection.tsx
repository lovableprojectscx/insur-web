import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Award, Lock, Tag, CheckCircle2, ShieldCheck, Clock } from 'lucide-react';
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

  // Live Countdown Timer for Convocatoria 2026 urgency
  const [timeLeft, setTimeLeft] = useState({ hours: 14, minutes: 32, seconds: 45 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { hours: 24, minutes: 0, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phone) return;
    
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onSubmitLead(formData);
    }, 500);
  };

  const scrollToForm = () => {
    const formElement = document.getElementById('registration-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative pt-44 sm:pt-48 lg:pt-40 pb-20 lg:pb-24 bg-[#07192B] text-white overflow-hidden diagonal-bottom">
      
      {/* Background Subtle Gradient & Grid Accent */}
      <div className="absolute inset-0 z-0 bg-[#07192B]">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#00A3E0_1px,transparent_1px)] [background-size:32px_32px] opacity-10"></div>
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#00529B]/20 rounded-full blur-3xl pointer-events-none"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 3-Column Layout: Left (Engineer Cutout), Center (Headline, Bullets & Urgency), Right (Form Card) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Column 1 (FAR LEFT): Engineer Cutout PNG Image */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4 flex items-center justify-center lg:justify-start order-2 lg:order-1 lg:-ml-8"
          >
            <div className="relative w-full max-w-xs lg:max-w-none flex items-center justify-center lg:justify-start">
              <img
                src="/assets/engineer_user_cutout.png"
                alt="Ingeniero Civil Residente de Obra Grupo INSUR"
                className="w-full h-auto max-h-[480px] lg:max-h-[540px] lg:scale-105 lg:-translate-x-4 object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.65)] hover:scale-110 transition-transform duration-500"
              />
              
              {/* CIP Verification Floating Chip */}
              <div className="absolute bottom-4 left-2 bg-[#061828]/95 backdrop-blur-md px-3.5 py-2 rounded-xl border border-slate-700 shadow-xl flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <div className="text-left">
                  <p className="text-[11px] font-black text-white leading-none">Respaldo CIP & Universidad</p>
                  <p className="text-[9px] text-slate-300 font-medium">Acreditación Nacional 100%</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Column 2 (CENTER): Headline, Copy, Countdown Urgency & CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-4 space-y-5 text-center lg:text-left order-3 lg:order-2"
          >
            
            {/* Urgency & Convocatoria Live Chip */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#061828] border border-slate-700/80 text-slate-200 text-xs font-semibold tracking-wide shadow-sm">
              <span className="bg-[#D92D20] text-white text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                CONVOCATORIA 2026
              </span>
              <span className="text-slate-300 font-bold">Clases 100% Virtuales En Vivo</span>
            </div>

            {/* H1 Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-black text-white tracking-tight leading-[1.18]">
              Capacítate y prepárate para las <span className="text-[#00A3E0]">Convocatorias de Trabajo</span> este 2026
            </h1>

            {/* Bullet Points with Red Checkmarks */}
            <div className="space-y-2.5 pt-1 text-left max-w-lg mx-auto lg:mx-0">
              <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-200 font-medium">
                <CheckCircle2 className="w-5 h-5 text-[#D92D20] shrink-0 mt-0.5" />
                <span>Diplomados 100% virtuales en vivo con acceso al campus 24/7.</span>
              </div>
              <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-200 font-medium">
                <CheckCircle2 className="w-5 h-5 text-[#D92D20] shrink-0 mt-0.5" />
                <span>Certificados oficiales con código QR válidos para licitaciones del Estado.</span>
              </div>
              <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-200 font-medium">
                <CheckCircle2 className="w-5 h-5 text-[#D92D20] shrink-0 mt-0.5" />
                <span>Aprende residencia de obras, supervisión técnica y herramientas BIM.</span>
              </div>
            </div>

            {/* Live Countdown Timer Widget */}
            <div className="p-3.5 rounded-xl bg-[#061828]/90 border border-slate-700/80 max-w-sm mx-auto lg:mx-0 flex items-center justify-between text-left shadow-lg">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#00A3E0] animate-pulse" />
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Cierre de Vacantes:</p>
                  <p className="text-xs font-black text-white">Descuento del 10% Válido por:</p>
                </div>
              </div>

              <div className="flex items-center gap-1.5 font-mono text-xs font-black text-cyan-300">
                <span className="bg-[#0A2540] px-2 py-1 rounded border border-slate-700">{String(timeLeft.hours).padStart(2, '0')}h</span>
                <span>:</span>
                <span className="bg-[#0A2540] px-2 py-1 rounded border border-slate-700">{String(timeLeft.minutes).padStart(2, '0')}m</span>
                <span>:</span>
                <span className="bg-[#0A2540] px-2 py-1 rounded border border-slate-700">{String(timeLeft.seconds).padStart(2, '0')}s</span>
              </div>
            </div>

            {/* Action CTA Button */}
            <div className="pt-1 flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <button
                onClick={scrollToForm}
                className="px-7 py-3.5 rounded-full bg-[#00A3E0] hover:bg-[#0082B3] text-slate-950 font-black text-xs uppercase tracking-wider shadow-lg hover:shadow-cyan-500/25 transition-all inline-flex items-center gap-2.5 cursor-pointer active:scale-95 border border-cyan-300/40"
              >
                <span>¡INSCRÍBETE CON 10% OFF!</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Official Brand Logo */}
            <div className="pt-2 flex items-center justify-center lg:justify-start gap-3">
              <div className="bg-white p-2 rounded-xl border border-slate-300 shadow-md">
                <img 
                  src="/assets/logo_insur.png" 
                  alt="Grupo INSUR - Centro de Altos Estudios" 
                  className="h-8 w-auto object-contain"
                />
              </div>
              <div className="text-left border-l border-slate-700/80 pl-3">
                <span className="block font-bold text-white text-xs tracking-tight">
                  Grupo INSUR
                </span>
                <span className="block text-[10px] text-slate-400 font-medium">
                  Centro de Altos Estudios
                </span>
              </div>
            </div>

          </motion.div>

          {/* Column 3 (FAR RIGHT): High-Converting White Registration Form Card */}
          <motion.div 
            id="registration-form"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-4 z-10 order-1 lg:order-3"
          >
            <div className="rounded-2xl bg-white text-slate-900 border-2 border-[#00529B]/30 shadow-2xl overflow-hidden">
              
              {/* Header Banner Inside Card */}
              <div className="bg-[#00529B] text-white text-center py-3 px-4 flex items-center justify-center gap-2 shadow-sm">
                <Tag className="w-4 h-4 fill-current text-white" />
                <span className="font-extrabold text-xs tracking-wider uppercase">
                  OFERTA EXCLUSIVA DE REGISTRO
                </span>
              </div>

              {/* Form Content */}
              <div className="p-5 sm:p-6">
                
                {/* Form Header */}
                <div className="text-center mb-4 pb-3 border-b border-slate-200">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-slate-100 text-[#00529B] text-xs font-bold uppercase tracking-wider mb-2">
                    <Award className="w-3.5 h-3.5 text-[#00529B]" />
                    <span>DESCUENTO EXCLUSIVO 10% OFF</span>
                  </div>
                  <h2 className="text-sm sm:text-base font-extrabold text-[#0A2540] tracking-tight leading-snug">
                    Inscríbete y Obtén <span className="text-[#00529B]">10% de Descuento</span> en el Curso de Tu Preferencia
                  </h2>
                  <p className="text-[11px] text-slate-600 mt-1 font-medium leading-tight">
                    Completa el formulario para reservar tu vacante y activar tu código promocional.
                  </p>
                </div>

                {/* Lead Form */}
                <form onSubmit={handleSubmit} className="space-y-3">
                  
                  {/* Full Name */}
                  <div>
                    <label className="block text-[11px] font-bold text-[#0A2540] mb-1 uppercase tracking-wide">
                      Nombre Completo <span className="text-[#00529B]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ej. Ing. Juan Pérez"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-xs focus:outline-none focus:border-[#00529B] focus:bg-white focus:ring-2 focus:ring-[#00529B]/20 transition-all font-semibold"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-[11px] font-bold text-[#0A2540] mb-1 uppercase tracking-wide">
                      Correo Electrónico <span className="text-[#00529B]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="ejemplo@correo.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-xs focus:outline-none focus:border-[#00529B] focus:bg-white focus:ring-2 focus:ring-[#00529B]/20 transition-all font-semibold"
                    />
                  </div>

                  {/* WhatsApp */}
                  <div>
                    <label className="block text-[11px] font-bold text-[#0A2540] mb-1 uppercase tracking-wide">
                      Teléfono / WhatsApp <span className="text-[#00529B]">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="Ej. 966000111"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-xs focus:outline-none focus:border-[#00529B] focus:bg-white focus:ring-2 focus:ring-[#00529B]/20 transition-all font-semibold"
                    />
                  </div>

                  {/* Interest Area */}
                  <div>
                    <label className="block text-[11px] font-bold text-[#0A2540] mb-1 uppercase tracking-wide">
                      Programa de Interés <span className="text-[#00529B]">*</span>
                    </label>
                    <select
                      value={formData.areaOfInterest}
                      onChange={(e) => setFormData({ ...formData, areaOfInterest: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:outline-none focus:border-[#00529B] focus:bg-white focus:ring-2 focus:ring-[#00529B]/20 transition-all font-semibold"
                    >
                      <option value="Capacitación y Diplomados">Diplomados Ejecutivos Virtuales</option>
                      <option value="Carrera Técnica">Carreras Técnicas Virtuales</option>
                      <option value="Ingeniería y Construcción">Ingeniería y Obras Virtuales</option>
                    </select>
                  </div>

                  {/* Solid Corporate Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full mt-3 py-3.5 px-4 rounded-lg bg-[#00529B] hover:bg-[#0A2540] text-white font-black text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98]"
                  >
                    {loading ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                      <>
                        <span>OBTENER DESCUENTO EXCLUSIVO</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  {/* Security Guarantee Note */}
                  <div className="flex items-center justify-center gap-1.5 text-[10px] text-slate-500 pt-1 font-medium">
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
