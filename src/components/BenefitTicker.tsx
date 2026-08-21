import React from 'react';
import { motion } from 'framer-motion';
import { 
  Laptop, 
  Award, 
  ShieldCheck, 
  Gift, 
  Star, 
  Zap, 
  Users, 
  Clock, 
  QrCode 
} from 'lucide-react';

export const BenefitTicker: React.FC = () => {
  const benefits = [
    {
      icon: <Laptop className="w-4 h-4 text-[#00A3E0] shrink-0" />,
      text: "CLASES 100% VIRTUALES EN VIVO (ZOOM HD)"
    },
    {
      icon: <Users className="w-4 h-4 text-emerald-400 shrink-0" />,
      text: "DOCENTES ESPECIALISTAS COLEGIADOS CIP & CAL"
    },
    {
      icon: <QrCode className="w-4 h-4 text-[#00A3E0] shrink-0" />,
      text: "CERTIFICACIÓN OFICIAL CON CÓDIGO QR VERIFICABLE"
    },
    {
      icon: <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />,
      text: "VÁLIDO PARA LICITACIONES DEL ESTADO Y OSCE"
    },
    {
      icon: <Gift className="w-4 h-4 text-rose-400 shrink-0" />,
      text: "¡OBTÉN UN 2do CURSO 100% GRATIS!"
    },
    {
      icon: <Clock className="w-4 h-4 text-cyan-300 shrink-0" />,
      text: "CAMPUS VIRTUAL CON ACCESO ILIMITADO 24/7"
    },
    {
      icon: <Star className="w-4 h-4 text-amber-300 fill-amber-300 shrink-0" />,
      text: "MÁS DE 5,000 PROFESIONALES CAPACITADOS EN PERÚ"
    },
    {
      icon: <Award className="w-4 h-4 text-[#00A3E0] shrink-0" />,
      text: "HORAS LECTIVAS Y CRÉDITOS OFICIALES"
    },
    {
      icon: <Zap className="w-4 h-4 text-emerald-400 fill-emerald-400 shrink-0" />,
      text: "MATRÍCULA INMEDIATA CON 10% DE DESCUENTO"
    }
  ];

  // Duplicate for seamless infinite loop
  const infiniteBenefits = [...benefits, ...benefits];

  return (
    <div className="w-full bg-[#0A2540] text-white py-3 overflow-hidden border-b border-slate-800 relative select-none shadow-md">
      
      {/* Subtle Gradient Fog Masks on edges */}
      <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-20 bg-gradient-to-r from-[#0A2540] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-20 bg-gradient-to-l from-[#0A2540] to-transparent z-10 pointer-events-none" />

      {/* Infinite Scrolling Track */}
      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: 'linear'
        }}
        className="flex items-center gap-6 sm:gap-10 whitespace-nowrap will-change-transform"
      >
        {infiniteBenefits.map((item, index) => (
          <div
            key={index}
            className="inline-flex items-center gap-2 shrink-0 group cursor-default"
          >
            {item.icon}
            <span className="text-[11px] sm:text-xs font-black tracking-wide uppercase text-slate-100">
              {item.text}
            </span>
            <span className="text-slate-500 font-bold text-xs ml-3 sm:ml-6">•</span>
          </div>
        ))}
      </motion.div>

    </div>
  );
};
