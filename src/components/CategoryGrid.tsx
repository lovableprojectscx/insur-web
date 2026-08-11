import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROGRAM_CATEGORIES } from '../data/mockData';
import type { ProgramCategory } from '../types';
import { BookOpen, ArrowRight, CheckCircle2, Award, X, ChevronRight } from 'lucide-react';

interface CategoryGridProps {
  onSelectCategory: (categoryId: string) => void;
}

export const CategoryGrid = ({ onSelectCategory }: CategoryGridProps) => {
  const [selectedCat, setSelectedCat] = useState<ProgramCategory | null>(null);

  return (
    <section id="programas" className="py-24 lg:py-28 bg-slate-50 relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Scroll Reveal */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-3"
        >
          <span className="px-3.5 py-1 rounded bg-[#D92D20] text-white text-[11px] font-extrabold tracking-wider uppercase shadow-sm">
            CONVOCATORIA Y PROGRAMAS 2026
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A2540] tracking-tight">
            Especialidades Principales de Formación
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed font-medium">
            Programas técnicos y ejecutivos 100% virtuales adaptados a la Ley de Contrataciones del Estado y normativas del sector en el Perú.
          </p>
        </motion.div>

        {/* 3-Column Cards with Staggered Scroll Animations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROGRAM_CATEGORIES.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -6 }}
              className="clean-card rounded-2xl overflow-hidden flex flex-col justify-between group"
            >
              
              {/* Card Photo Header with Diagonal Cut */}
              <div>
                <div className="relative h-56 overflow-hidden bg-slate-900 diagonal-img-overlay">
                  <img
                    src={category.image}
                    alt={`${category.title} - Grupo INSUR`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540] via-transparent to-transparent opacity-75"></div>
                  
                  {/* Badge */}
                  <span className="absolute top-3 left-3 bg-[#0A2540] text-white text-[11px] font-extrabold px-3 py-1 rounded shadow-md">
                    {category.badge}
                  </span>

                  {/* Program Count Badge */}
                  <span className="absolute bottom-6 right-3 bg-white text-[#0A2540] text-[11px] font-extrabold px-3 py-1 rounded shadow-md flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-[#00A3E0]" />
                    <span>{category.coursesCount} Programas</span>
                  </span>
                </div>

                {/* Card Content */}
                <div className="p-6 space-y-3.5 -mt-2">
                  <div>
                    <span className="text-[11px] font-extrabold text-[#00A3E0] uppercase tracking-wider">
                      {category.subtitle}
                    </span>
                    <h3 className="text-xl font-extrabold text-[#0A2540] mt-0.5 group-hover:text-[#00529B] transition-colors">
                      {category.title}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {category.description}
                  </p>

                  {/* Featured Program Checklist */}
                  <div className="pt-3 space-y-2 border-t border-slate-100">
                    <p className="text-[11px] font-extrabold text-slate-400 uppercase tracking-wider">Módulos Académicos:</p>
                    {category.featuredPrograms.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 font-semibold">
                        <CheckCircle2 className="w-4 h-4 text-[#00A3E0] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Action */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => setSelectedCat(category)}
                  className="w-full py-3 px-4 rounded-lg bg-slate-100 hover:bg-[#0A2540] text-[#0A2540] hover:text-white font-extrabold text-xs tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer border border-slate-200 active:scale-95"
                >
                  <span>VER PROGRAMA COMPLETO</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </motion.div>
          ))}
        </div>

      </div>

      {/* Category Modal Preview with Animated Backdrop */}
      <AnimatePresence>
        {selectedCat && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-xs"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-slate-200 p-6 space-y-5"
            >
              
              <button
                onClick={() => setSelectedCat(null)}
                className="absolute top-4 right-4 p-1.5 rounded-lg bg-slate-100 text-slate-500 hover:text-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#0A2540] text-white flex items-center justify-center font-bold">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-extrabold text-[#00A3E0] uppercase tracking-wider">{selectedCat.subtitle}</span>
                  <h3 className="text-xl font-extrabold text-[#0A2540]">{selectedCat.title}</h3>
                </div>
              </div>

              <p className="text-xs text-slate-600 font-medium">{selectedCat.description}</p>

              <div className="space-y-2">
                <h4 className="text-xs font-extrabold text-[#0A2540] uppercase">Malla Curricular Vigente 2026:</h4>
                <div className="grid grid-cols-1 gap-2">
                  {selectedCat.featuredPrograms.map((prog, i) => (
                    <div key={i} className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between text-xs font-semibold text-slate-800">
                      <div className="flex items-center gap-2">
                        <ChevronRight className="w-4 h-4 text-[#00A3E0]" />
                        <span>{prog}</span>
                      </div>
                      <span className="text-[10px] bg-slate-200 text-slate-700 font-bold px-2 py-0.5 rounded">Oficial</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href="#hero"
                  onClick={() => {
                    setSelectedCat(null);
                    onSelectCategory(selectedCat.id);
                  }}
                  className="flex-1 py-3 text-center rounded-lg bg-[#00529B] hover:bg-[#0A2540] text-white font-extrabold text-xs tracking-wider transition-colors shadow-md"
                >
                  SOLICITAR DESCUENTO EN ESTA ESPECIALIDAD
                </a>
                <button
                  onClick={() => setSelectedCat(null)}
                  className="py-3 px-4 rounded-lg bg-slate-100 text-slate-700 font-bold text-xs hover:bg-slate-200 transition-colors"
                >
                  Cerrar
                </button>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};
