import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, GraduationCap, CheckCircle } from 'lucide-react';
import { INSTITUTIONAL_ALLIANCES } from '../data/mockData';

export const InstitutionalAlliances: React.FC = () => {
  return (
    <section id="alianzas" className="py-14 bg-slate-900 text-white relative overflow-hidden border-t border-b border-slate-800">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#00A3E0]/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#00529B]/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00529B]/30 border border-[#00A3E0]/40 text-[#00A3E0] text-xs font-extrabold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-4 h-4" />
            <span>RESPALDO INSTITUCIONAL & ACREDITACIÓN</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight">
            Nuestras Alianzas e Instituciones Respaldantes
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-2 font-medium">
            Grupo INSUR se enorgullece de contar con convenios académicos y el respaldo oficial de prestigiosas instituciones públicas y privadas del Perú.
          </p>
        </div>

        {/* Alliances Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {INSTITUTIONAL_ALLIANCES.map((alliance, index) => (
            <motion.div
              key={alliance.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-[#0A2540]/90 backdrop-blur-md p-5 rounded-2xl border border-slate-700/80 shadow-xl flex flex-col justify-between group hover:border-[#00A3E0]/60 transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-[#00529B] text-white text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {alliance.type}
                  </span>
                  <Award className="w-5 h-5 text-[#00A3E0] group-hover:scale-110 transition-transform" />
                </div>

                <h3 className="text-sm font-black text-white leading-snug group-hover:text-[#00A3E0] transition-colors">
                  {alliance.name}
                </h3>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-800 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-[11px] font-extrabold text-slate-300 tracking-wide">
                  {alliance.badge}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Banner Bar */}
        <div className="mt-10 p-4 rounded-xl bg-gradient-to-r from-[#061828] via-[#0A2540] to-[#061828] border border-slate-800 text-center flex flex-wrap items-center justify-around gap-4 text-xs font-bold text-slate-200">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-4 h-4 text-[#00A3E0]" />
            <span>+120 Horas Lectivas Acreditadas</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Firma Digital & Código QR Verificable</span>
          </div>
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-[#00A3E0]" />
            <span>Válido para Contrataciones del Estado (OSCE)</span>
          </div>
        </div>

      </div>
    </section>
  );
};
