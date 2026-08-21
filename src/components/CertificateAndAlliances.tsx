import React from 'react';
import { ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

interface CertificateAndAlliancesProps {
  onOpenForm: () => void;
}

export const CertificateAndAlliances: React.FC<CertificateAndAlliancesProps> = ({ onOpenForm }) => {
  return (
    <section id="certificado" className="py-10 sm:py-16 bg-slate-50 text-slate-900 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <span className="text-[11px] font-extrabold text-[#00A3E0] uppercase tracking-widest block mb-1">
            VALIDEZ Y GARANTÍA INSTITUCIONAL
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-[#0A2540] tracking-tight uppercase">
            CERTIFICACIÓN OFICIAL & ALIANZAS
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1 font-medium">
            Respaldado por el Colegio de Ingenieros del Perú y el Colegio de Abogados
          </p>
        </div>

        {/* 2-Column Clean Harmonious Layout on Light Background */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* Left: 3D Certificate Mockup */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-white max-w-md w-full">
              <img
                src="/assets/certificate_mockup.jpg"
                alt="Certificado Oficial Grupo INSUR"
                className="w-full h-auto object-cover block"
              />
              <div className="absolute top-3 right-3 bg-[#0A2540] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase shadow-md flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#00A3E0]" />
                <span>QR Oficial</span>
              </div>
            </div>
          </div>

          {/* Right: Official Seals, Bullets & Direct Action */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            
            {/* 2 Official Seals Side-by-Side */}
            <div className="flex items-center justify-center lg:justify-start gap-8 sm:gap-12">
              
              {/* CIP */}
              <div className="flex flex-col items-center lg:items-start">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden p-1 bg-white mb-2 shadow-sm border border-slate-200">
                  <img src="/assets/cip_seal.jpg" alt="Colegio de Ingenieros del Perú" className="w-full h-full object-contain" />
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-[#0A2540]">Colegio de Ingenieros</h4>
                <p className="text-[11px] text-slate-500 font-semibold">Convenio CIP</p>
              </div>

              {/* ICA */}
              <div className="flex flex-col items-center lg:items-start">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden p-1 bg-white mb-2 shadow-sm border border-slate-200">
                  <img src="/assets/ica_seal.jpg" alt="Colegio de Abogados" className="w-full h-full object-contain" />
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-[#0A2540]">Colegio de Abogados</h4>
                <p className="text-[11px] text-slate-500 font-semibold">Convenio CAL/ICA</p>
              </div>

            </div>

            {/* Direct Clean Benefits */}
            <div className="space-y-2 text-xs sm:text-sm font-medium text-slate-700">
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Válido para Licitaciones del Estado y Concursos Públicos OSCE</span>
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
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#0A2540] hover:bg-[#00A3E0] text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95 mx-auto lg:mx-0"
              >
                <span>Solicitar Certificado con 10% OFF</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
