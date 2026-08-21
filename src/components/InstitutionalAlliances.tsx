import React from 'react';
import { motion } from 'framer-motion';

export const InstitutionalAlliances: React.FC = () => {
  return (
    <section id="alianzas" className="py-20 bg-white text-slate-900 relative overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* CERSA-Style Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A2540] tracking-tight leading-none uppercase">
            NUESTRAS ALIANZAS INSTITUCIONALES
          </h2>
        </div>

        {/* CERSA-Style 2-Column Alliances Layout (Screenshot 3 Matching!) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: CERSA-Style Explanatory Paragraph */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-6 space-y-4 text-slate-700 font-medium text-xs sm:text-sm leading-relaxed"
          >
            <p>
              <strong className="text-[#0A2540] font-black">Grupo INSUR</strong> se enorgullece de contar con el respaldo del <strong className="text-[#1559ED] font-black">Colegio de Ingenieros del Perú</strong> y del <strong className="text-[#0A2540] font-black">Ilustre Colegio de Abogados</strong>, instituciones prestigiosas que avalan la calidad y relevancia de nuestros programas educativos.
            </p>
            <p>
              Esta alianza nos brinda un respaldo institucional sólido y confianza en la calidad y pertinencia de nuestros programas educativos. Lo que nos permite mantenernos actualizados sobre las últimas tendencias y regulaciones en los campos de la ingeniería y el derecho, garantizando que nuestros talleres, cursos, diplomados y programas estén alineados con los estándares de la industria y la profesión.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-blue-50 text-[#1559ED] border border-blue-200 text-xs font-black uppercase tracking-wider">
                VALIDEZ NACIONAL
              </span>
              <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-black uppercase tracking-wider">
                CONVENIOS OFICIALES
              </span>
            </div>
          </motion.div>

          {/* Right Column: High-Resolution Circular CIP Seal & ICA Seal (Screenshot 3 Matching!) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-6 grid grid-cols-2 gap-6 items-center text-center"
          >
            
            {/* CIP Seal Item */}
            <div className="bg-slate-50 p-6 rounded-3xl border-2 border-slate-200 shadow-md hover:shadow-xl hover:border-red-300 transition-all group flex flex-col items-center">
              <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden p-2 bg-white shadow-inner border border-slate-200 group-hover:scale-105 transition-transform">
                <img
                  src="/assets/cip_seal.jpg"
                  alt="Colegio de Ingenieros del Perú CIP"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xs sm:text-sm font-black text-[#0A2540] mt-4 leading-tight">
                Colegio de Ingenieros del Perú
              </h3>
              <p className="text-[11px] text-slate-500 font-semibold mt-1">
                Alianza institucional desde el año 2020
              </p>
            </div>

            {/* ICA Seal Item */}
            <div className="bg-slate-50 p-6 rounded-3xl border-2 border-slate-200 shadow-md hover:shadow-xl hover:border-blue-300 transition-all group flex flex-col items-center">
              <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden p-2 bg-white shadow-inner border border-slate-200 group-hover:scale-105 transition-transform">
                <img
                  src="/assets/ica_seal.jpg"
                  alt="Ilustre Colegio de Abogados"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xs sm:text-sm font-black text-[#0A2540] mt-4 leading-tight">
                Ilustre Colegio de Abogados
              </h3>
              <p className="text-[11px] text-slate-500 font-semibold mt-1">
                Alianza institucional desde el año 2023
              </p>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
