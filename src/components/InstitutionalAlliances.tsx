import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Award } from 'lucide-react';

export const InstitutionalAlliances: React.FC = () => {
  return (
    <section id="alianzas" className="py-16 sm:py-20 bg-white text-slate-900 relative overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A2540] tracking-tight leading-none uppercase">
            NUESTRAS ALIANZAS INSTITUCIONALES
          </h2>
        </div>

        {/* 2-Column Clean Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Direct and Punchy */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-6 space-y-4"
          >
            <h3 className="text-xl sm:text-2xl font-black text-[#0A2540] leading-tight">
              Certificación respaldada por los principales colegios profesionales del Perú
            </h3>
            
            <div className="space-y-2.5 text-xs sm:text-sm text-slate-600 font-medium">
              <div className="flex items-start gap-2.5">
                <ShieldCheck className="w-5 h-5 text-[#1559ED] shrink-0 mt-0.5" />
                <span>Programas avalados por el <strong>Colegio de Ingenieros del Perú (CIP)</strong> y el <strong>Colegio de Abogados</strong>.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Award className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span>Créditos y horas lectivas 100% válidas para licitaciones y convocatorias públicas OSCE.</span>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-2 text-xs font-bold text-slate-500">
              <span className="px-3 py-1 rounded-full bg-blue-50 text-[#1559ED] border border-blue-200 uppercase tracking-wider text-[11px] font-black">
                VALIDEZ NACIONAL
              </span>
              <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 uppercase tracking-wider text-[11px] font-black">
                CÓDIGO QR OFICIAL
              </span>
            </div>
          </motion.div>

          {/* Right Column: High-Resolution Circular CIP Seal & ICA Seal */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-6 grid grid-cols-2 gap-4 sm:gap-6 items-center text-center"
          >
            
            {/* CIP Seal Item */}
            <div className="bg-slate-50 p-5 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col items-center">
              <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden p-1 bg-white shadow-xs border border-slate-200">
                <img
                  src="/assets/cip_seal.jpg"
                  alt="Colegio de Ingenieros del Perú CIP"
                  className="w-full h-full object-contain"
                />
              </div>
              <h4 className="text-xs sm:text-sm font-black text-[#0A2540] mt-3 leading-tight">
                Colegio de Ingenieros del Perú
              </h4>
              <p className="text-[11px] text-slate-400 font-semibold mt-0.5">
                Alianza desde el año 2020
              </p>
            </div>

            {/* ICA Seal Item */}
            <div className="bg-slate-50 p-5 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col items-center">
              <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden p-1 bg-white shadow-xs border border-slate-200">
                <img
                  src="/assets/ica_seal.jpg"
                  alt="Ilustre Colegio de Abogados"
                  className="w-full h-full object-contain"
                />
              </div>
              <h4 className="text-xs sm:text-sm font-black text-[#0A2540] mt-3 leading-tight">
                Ilustre Colegio de Abogados
              </h4>
              <p className="text-[11px] text-slate-400 font-semibold mt-0.5">
                Alianza desde el año 2023
              </p>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
