import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, QrCode, ArrowRight } from 'lucide-react';

interface CertificateAndAlliancesProps {
  onOpenForm: () => void;
}

export const CertificateAndAlliances: React.FC<CertificateAndAlliancesProps> = ({ onOpenForm }) => {
  return (
    <section id="certificado" className="py-14 sm:py-16 bg-[#0A2540] text-white relative overflow-hidden border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-[11px] font-black text-[#00A3E0] uppercase tracking-widest block mb-1">
            RESPALDO INSTITUCIONAL OFICIAL
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight uppercase">
            CERTIFICACIÓN Y ALIANZAS
          </h2>
        </div>

        {/* Compact 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: 3D Diploma Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-slate-700 bg-slate-950 group">
              <img
                src="/assets/certificate_mockup.jpg"
                alt="Certificado Oficial Grupo INSUR"
                className="w-full h-auto object-cover"
              />
              <div className="absolute top-3 right-3 bg-[#00A3E0] text-slate-950 text-[10px] font-black px-2.5 py-1 rounded-full uppercase flex items-center gap-1 shadow-md">
                <QrCode className="w-3.5 h-3.5" />
                <span>Verificación QR</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Official Seals & Key Badges */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-6 space-y-6"
          >
            {/* 2 Official Seals */}
            <div className="grid grid-cols-2 gap-4 text-center">
              
              {/* CIP Seal */}
              <div className="bg-slate-900/90 p-4 rounded-2xl border border-slate-700 flex flex-col items-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden p-1 bg-white mb-2 shadow-sm">
                  <img src="/assets/cip_seal.jpg" alt="CIP" className="w-full h-full object-contain" />
                </div>
                <h4 className="text-xs font-black text-white">Colegio de Ingenieros</h4>
                <p className="text-[10px] text-cyan-300 font-bold">Convenio Oficial CIP</p>
              </div>

              {/* ICA Seal */}
              <div className="bg-slate-900/90 p-4 rounded-2xl border border-slate-700 flex flex-col items-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden p-1 bg-white mb-2 shadow-sm">
                  <img src="/assets/ica_seal.jpg" alt="Colegio de Abogados" className="w-full h-full object-contain" />
                </div>
                <h4 className="text-xs font-black text-white">Colegio de Abogados</h4>
                <p className="text-[10px] text-cyan-300 font-bold">Convenio Oficial ICA</p>
              </div>

            </div>

            {/* 2 Direct Bullets */}
            <div className="space-y-2 text-xs font-bold text-slate-200">
              <div className="flex items-center gap-2 bg-slate-900/60 p-2.5 rounded-xl border border-slate-800">
                <ShieldCheck className="w-4 h-4 text-[#00A3E0] shrink-0" />
                <span>Válido para Licitaciones del Estado y Concursos OSCE</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-900/60 p-2.5 rounded-xl border border-slate-800">
                <Award className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Horas Lectivas y Créditos Universitarios Oficiales</span>
              </div>
            </div>

            {/* Direct CTA */}
            <button
              onClick={onOpenForm}
              className="w-full py-3.5 px-4 rounded-xl bg-[#00A3E0] hover:bg-[#0082B3] text-slate-950 font-black text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 cursor-pointer active:scale-95 transition-all"
            >
              <span>Solicitar Certificado con 10% OFF</span>
              <ArrowRight className="w-4 h-4" />
            </button>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
