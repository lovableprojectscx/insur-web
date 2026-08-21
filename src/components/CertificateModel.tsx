import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Award } from 'lucide-react';

interface CertificateModelProps {
  onOpenForm: () => void;
}

export const CertificateModel: React.FC<CertificateModelProps> = ({ onOpenForm }) => {
  return (
    <section id="certificado" className="py-20 bg-slate-900 text-white relative overflow-hidden border-b border-slate-800">
      
      {/* Background Lighting */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#1559ED]/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* CERSA-Style Dark Container Banner (Screenshot 4 Matching!) */}
        <div className="rounded-3xl bg-gradient-to-r from-[#0A2540] via-[#07192B] to-[#0A2540] border-2 border-slate-700/80 shadow-2xl p-6 sm:p-10 lg:p-12 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: 3D Angled Realistic Certificate Mockup (Screenshot 4 Matching!) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="lg:col-span-6 relative group"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-700/80 group-hover:scale-102 transition-transform duration-500 bg-slate-950">
                <img
                  src="/assets/certificate_mockup.jpg"
                  alt="Modelo de Certificado Oficial Grupo INSUR con Código QR"
                  className="w-full h-auto object-cover"
                />
                
                {/* Referencial Badge */}
                <div className="absolute top-4 right-4 bg-red-600/90 backdrop-blur-md text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
                  VERIFICACIÓN QR EN VIVO
                </div>
              </div>
            </motion.div>

            {/* Right Column: Title & Key Bullet Points (Screenshot 4 Matching!) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:col-span-6 space-y-6"
            >
              <div>
                <span className="text-xs font-black text-[#00A3E0] uppercase tracking-widest block mb-1">
                  RESPALDO ACADÉMICO OFICIAL
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-none uppercase">
                  Modelo de <span className="text-[#00A3E0]">CERTIFICADO</span>
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 font-medium mt-3">
                  Tu certificado contará con los <strong className="text-white">3 puntos clave para ser válido</strong> en licitaciones del Estado y concursos públicos:
                </p>
              </div>

              {/* 3 Key Checkmark Bullet Points (Screenshot 4 Matching!) */}
              <div className="space-y-3 pt-1">
                <div className="flex items-start gap-3 bg-[#061828]/80 p-3.5 rounded-2xl border border-slate-700/80">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-black text-white">Certificado con código QR único de verificación.</h4>
                    <p className="text-[11px] text-slate-400 font-medium">Permite validación inmediata en línea por cualquier institución pública o privada.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-[#061828]/80 p-3.5 rounded-2xl border border-slate-700/80">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-black text-white">Certificado con el respaldo de:</h4>
                    <p className="text-[11px] text-cyan-300 font-bold mt-0.5">• Colegio de Ingenieros del Perú (CIP) & Ilustre Colegio de Abogados.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-[#061828]/80 p-3.5 rounded-2xl border border-slate-700/80">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-black text-white">Firmas de los representantes académicos y código de registro.</h4>
                    <p className="text-[11px] text-slate-400 font-medium">Acreditación formal de horas lectivas y creditaje universitario.</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={onOpenForm}
                  className="px-7 py-3.5 rounded-xl bg-[#00A3E0] hover:bg-[#0082B3] text-slate-950 font-black text-xs uppercase tracking-wider shadow-lg transition-all flex items-center gap-2 cursor-pointer active:scale-95"
                >
                  <Award className="w-4 h-4" />
                  <span>Solicitar Certificado con 10% OFF</span>
                </button>
              </div>

            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
};
