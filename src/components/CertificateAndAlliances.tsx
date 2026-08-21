import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, QrCode, ArrowRight } from 'lucide-react';

interface CertificateAndAlliancesProps {
  onOpenForm: () => void;
}

export const CertificateAndAlliances: React.FC<CertificateAndAlliancesProps> = ({ onOpenForm }) => {
  return (
    <section id="alianzas" className="py-20 lg:py-28 bg-[#0A2540] text-white relative overflow-hidden border-b border-slate-800 min-h-screen flex flex-col justify-center">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase">
            CERTIFICACIÓN Y ALIANZAS
          </h2>
          <p className="text-xs sm:text-sm font-bold text-slate-400 mt-1 uppercase tracking-widest">
            Respaldo del Colegio de Ingenieros y Colegio de Abogados
          </p>
        </div>

        {/* 2-Column Presentation Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left: 3D Diploma Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-700 bg-slate-950 group">
              <img
                src="/assets/certificate_mockup.jpg"
                alt="Certificado Oficial Grupo INSUR"
                className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute top-4 right-4 bg-[#00A3E0] text-slate-950 text-[10px] font-black px-3 py-1 rounded-full uppercase flex items-center gap-1.5 shadow-lg">
                <QrCode className="w-4 h-4" />
                <span>Verificación QR Oficial</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Official Seals & Key Badges */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-6 space-y-6"
          >
            {/* 2 Official Seals */}
            <div className="grid grid-cols-2 gap-4 text-center">
              
              {/* CIP Seal */}
              <div className="bg-slate-900/90 p-5 rounded-3xl border border-slate-700 flex flex-col items-center hover:border-red-400 transition-colors">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden p-1 bg-white mb-2 shadow-md">
                  <img src="/assets/cip_seal.jpg" alt="CIP" className="w-full h-full object-contain" />
                </div>
                <h4 className="text-xs sm:text-sm font-black text-white">Colegio de Ingenieros</h4>
                <p className="text-[11px] text-cyan-300 font-bold">Convenio Institucional CIP</p>
              </div>

              {/* ICA Seal */}
              <div className="bg-slate-900/90 p-5 rounded-3xl border border-slate-700 flex flex-col items-center hover:border-blue-400 transition-colors">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden p-1 bg-white mb-2 shadow-md">
                  <img src="/assets/ica_seal.jpg" alt="Colegio de Abogados" className="w-full h-full object-contain" />
                </div>
                <h4 className="text-xs sm:text-sm font-black text-white">Colegio de Abogados</h4>
                <p className="text-[11px] text-cyan-300 font-bold">Convenio Institucional ICA</p>
              </div>

            </div>

            {/* 2 Direct Bullets */}
            <div className="space-y-2 text-xs sm:text-sm font-bold text-slate-200">
              <div className="flex items-center gap-2.5 bg-slate-900/70 p-3 rounded-2xl border border-slate-800">
                <ShieldCheck className="w-5 h-5 text-[#00A3E0] shrink-0" />
                <span>Válido para Licitaciones del Estado y Concursos Públicos OSCE</span>
              </div>
              <div className="flex items-center gap-2.5 bg-slate-900/70 p-3 rounded-2xl border border-slate-800">
                <Award className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>Créditos Universitarios y Horas Lectivas Oficiales</span>
              </div>
            </div>

            {/* Direct CTA */}
            <button
              onClick={onOpenForm}
              className="w-full py-4 px-6 rounded-2xl bg-[#00A3E0] hover:bg-[#0082B3] text-slate-950 font-black text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 cursor-pointer active:scale-95 transition-all"
            >
              <span>Solicitar Certificado con 10% de Descuento</span>
              <ArrowRight className="w-4 h-4" />
            </button>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
