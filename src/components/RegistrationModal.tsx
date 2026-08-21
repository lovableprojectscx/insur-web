import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Award, Tag, Lock, ArrowRight } from 'lucide-react';
import type { LeadFormData } from '../types';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmitLead: (data: LeadFormData) => void;
}

export const RegistrationModal: React.FC<RegistrationModalProps> = ({
  isOpen,
  onClose,
  onSubmitLead
}) => {
  const [formData, setFormData] = useState<LeadFormData>({
    fullName: '',
    email: '',
    phone: '',
    areaOfInterest: 'Capacitación y Diplomados'
  });

  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phone) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onSubmitLead(formData);
      onClose();
    }, 400);
  };

  return (
    <AnimatePresence>
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm animate-in fade-in"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-md rounded-3xl bg-white text-slate-900 shadow-2xl border-2 border-[#1559ED]/30 overflow-hidden"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-3.5 right-3.5 p-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors z-20"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Top Header Banner */}
          <div className="bg-[#1559ED] text-white text-center py-3.5 px-4 flex items-center justify-center gap-2 shadow-sm">
            <Tag className="w-4 h-4 fill-current text-white" />
            <span className="font-black text-xs tracking-wider uppercase">
              OFERTA EXCLUSIVA DE REGISTRO
            </span>
          </div>

          {/* Modal Form Content */}
          <div className="p-6 sm:p-7">
            
            {/* Modal Title */}
            <div className="text-center mb-5 pb-3 border-b border-slate-200">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#1559ED] text-xs font-black uppercase tracking-wider mb-2">
                <Award className="w-3.5 h-3.5 text-[#1559ED]" />
                <span>DESCUENTO EXCLUSIVO 10% OFF</span>
              </div>
              <h3 className="text-lg font-black text-[#0A2540] tracking-tight leading-snug">
                Inscríbete y Obtén <span className="text-[#1559ED]">10% de Descuento</span> en el Curso de Tu Preferencia
              </h3>
              <p className="text-xs text-slate-500 mt-1 font-medium">
                Completa tus datos para reservar tu vacante y activar tu cupón institucional.
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

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
