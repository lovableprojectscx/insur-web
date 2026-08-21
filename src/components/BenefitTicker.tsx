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
      icon: <Laptop className="w-4 h-4 text-[#00A3E0]" />,
      text: "CLASES 100% VIRTUALES EN VIVO (ZOOM HD)",
      highlight: "EN VIVO"
    },
    {
      icon: <Users className="w-4 h-4 text-emerald-400" />,
      text: "DOCENTES ESPECIALISTAS COLEGIADOS CIP & CAL",
      highlight: "COLEGIADOS CIP"
    },
    {
      icon: <QrCode className="w-4 h-4 text-[#00A3E0]" />,
      text: "CERTIFICACIÓN OFICIAL CON CÓDIGO QR VERIFICABLE",
      highlight: "CÓDIGO QR"
    },
    {
      icon: <ShieldCheck className="w-4 h-4 text-amber-400" />,
      text: "VÁLIDO PARA LICITACIONES DEL ESTADO Y OSCE",
      highlight: "CONCURSOS OSCE"
    },
    {
      icon: <Gift className="w-4 h-4 text-rose-400" />,
      text: "¡OBTÉN UN 2do CURSO 100% GRATIS!",
      highlight: "2do CURSO GRATIS"
    },
    {
      icon: <Clock className="w-4 h-4 text-cyan-300" />,
      text: "CAMPUS VIRTUAL CON ACCESO ILIMITADO 24/7",
      highlight: "ACCESO 24/7"
    },
    {
      icon: <Star className="w-4 h-4 text-amber-300 fill-amber-300" />,
      text: "MÁS DE 5,000 PROFESIONALES CAPACITADOS EN PERÚ",
      highlight: "+5,000 EGRESADOS"
    },
    {
      icon: <Award className="w-4 h-4 text-[#00A3E0]" />,
      text: "HORAS LECTIVAS Y CRÉDITOS OFICIALES",
      highlight: "HORAS LECTIVAS"
    },
    {
      icon: <Zap className="w-4 h-4 text-emerald-400 fill-emerald-400" />,
      text: "MATRÍCULA INMEDIATA CON 10% DE DESCUENTO",
      highlight: "10% DESCUENTO"
    }
  ];

  // Duplicate for seamless infinite loop
  const infiniteBenefits = [...benefits, ...benefits];

  return (
    <div className="w-full bg-[#0A2540] text-white py-3.5 overflow-hidden border-y border-slate-800 relative select-none shadow-md">
      
      {/* Subtle Gradient Fog Masks on edges */}
      <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-[#0A2540] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-[#0A2540] to-transparent z-10 pointer-events-none" />

      {/* Infinite Scrolling Track */}
      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          duration: 32,
          repeat: Infinity,
          ease: 'linear'
        }}
        className="flex items-center gap-8 sm:gap-12 whitespace-nowrap will-change-transform"
      >
        {infiniteBenefits.map((item, index) => (
          <div
            key={index}
            className="inline-flex items-center gap-2.5 shrink-0 px-2 group cursor-default"
          >
            <div className="p-1 rounded-md bg-slate-900/90 border border-slate-700">
              {item.icon}
            </div>
            <span className="text-[11px] sm:text-xs font-black tracking-wide uppercase text-slate-100">
              {item.text}
            </span>
            <span className="text-slate-600 font-black text-sm ml-2 sm:ml-4">•</span>
          </div>
        ))}
      </motion.div>

    </div>
  );
};
