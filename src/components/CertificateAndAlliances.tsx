import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, CheckCircle2, ArrowRight, Award, Zap } from 'lucide-react';

interface CertificateAndAlliancesProps {
  onOpenForm: () => void;
}

export const CertificateAndAlliances: React.FC<CertificateAndAlliancesProps> = ({ onOpenForm }) => {
  return (
    <section id="certificado" className="relative text-white overflow-hidden">
      
      {/* Dynamic Animated Attention Ribbon (Cintillo de Acreditación Oficial) */}
      <div className="w-full bg-gradient-to-r from-[#0A2540] via-[#00A3E0] to-[#0A2540] py-2.5 px-4 text-slate-950 font-black text-[11px] sm:text-xs uppercase tracking-wider overflow-hidden border-y border-cyan-400/40 shadow-md">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
          className="flex items-center gap-8 whitespace-nowrap will-change-transform"
        >
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 text-white font-extrabold">
              <span className="flex items-center gap-1.5 text-cyan-200">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                ACREDITACIÓN OFICIAL CONVENIO CIP & CAL
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5 text-white">
                <Award className="w-4 h-4 text-amber-300" />
                VALIDEZ NACIONAL PARA LICITACIONES OSCE Y ASCENSO
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5 text-cyan-200">
                <Zap className="w-4 h-4 text-emerald-400 fill-emerald-400" />
                DIPLOMA VERIFICABLE CON CÓDIGO QR EN TIEMPO REAL
              </span>
              <span>•</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Main Dark Navy Architectural Section */}
      <div className="bg-[#0A2540] py-12 sm:py-16 relative">
        
        {/* Subtle Radial Atmosphere Light */}
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-[#00A3E0]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight uppercase">
              CERTIFICACIÓN Y ALIANZAS
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 font-medium">
              Respaldo oficial del Colegio de Ingenieros del Perú y Colegio de Abogados
            </p>
          </div>

          {/* 2-Column Clean Layout - ZERO BOXES */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            
            {/* Left: Certificate Mockup (Clean floating 3D diploma) */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="lg:col-span-6 flex justify-center"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl max-w-lg w-full group">
                <img
                  src="/assets/certificate_mockup.jpg"
                  alt="Certificado Oficial Grupo INSUR"
                  className="w-full h-auto object-cover block group-hover:scale-102 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-[#00A3E0] text-slate-950 text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase shadow-md flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>QR Oficial</span>
                </div>
              </div>
            </motion.div>

            {/* Right: Logos & Direct Text - Clean & Professional without boxes */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="lg:col-span-6 space-y-6 text-center lg:text-left"
            >
              
              {/* 2 Clean Floating Seals (No Box Containers) */}
              <div className="grid grid-cols-2 gap-6 pt-2">
                
                {/* CIP Logo */}
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                  <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-full overflow-hidden p-1.5 bg-white mb-2.5 shadow-lg mx-auto lg:mx-0">
                    <img src="/assets/cip_seal.jpg" alt="Colegio de Ingenieros del Perú" className="w-full h-full object-contain" />
                  </div>
                  <h4 className="text-xs sm:text-sm font-black text-white">Colegio de Ingenieros</h4>
                  <p className="text-[11px] text-cyan-300 font-bold">Convenio CIP</p>
                </div>

                {/* ICA Logo */}
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                  <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-full overflow-hidden p-1.5 bg-white mb-2.5 shadow-lg mx-auto lg:mx-0">
                    <img src="/assets/ica_seal.jpg" alt="Colegio de Abogados" className="w-full h-full object-contain" />
                  </div>
                  <h4 className="text-xs sm:text-sm font-black text-white">Colegio de Abogados</h4>
                  <p className="text-[11px] text-cyan-300 font-bold">Convenio ICA</p>
                </div>

              </div>

              {/* Pure Clean Text Bullets */}
              <div className="space-y-2.5 pt-2 text-xs sm:text-sm font-medium text-slate-200">
                <div className="flex items-center justify-center lg:justify-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Válido para Licitaciones del Estado y Concursos OSCE</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00A3E0] shrink-0" />
                  <span>Créditos Universitarios y Horas Lectivas Oficiales</span>
                </div>
              </div>

              {/* Direct CTA */}
              <div className="pt-2">
                <button
                  onClick={onOpenForm}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#00A3E0] hover:bg-[#0082B3] text-slate-950 font-black text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 cursor-pointer active:scale-95 transition-all mx-auto lg:mx-0"
                >
                  <span>Solicitar Certificado con 10% OFF</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};
