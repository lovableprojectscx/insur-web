import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Wrench, HardHat, ArrowRight, CheckCircle2, BookOpen, Layers, Laptop } from 'lucide-react';
import { PROGRAM_CATEGORIES } from '../data/mockData';
import type { ProgramCategory } from '../types';

interface CategoryGridProps {
  onSelectCategory: (categoryId: string) => void;
}

export const CategoryGrid: React.FC<CategoryGridProps> = ({ onSelectCategory }) => {
  const getCategoryIcon = (iconName?: string) => {
    switch (iconName) {
      case 'Building2':
        return <Building2 className="w-6 h-6 text-white" />;
      case 'Wrench':
        return <Wrench className="w-6 h-6 text-white" />;
      case 'HardHat':
      default:
        return <HardHat className="w-6 h-6 text-white" />;
    }
  };

  return (
    <section id="programas" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-10 left-10 w-80 h-80 bg-[#00A3E0]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#00529B]/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00A3E0]/20 border border-[#00A3E0]/40 text-[#00A3E0] text-xs font-black uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>NUESTRAS ESCUELAS DE ESPECIALIZACIÓN</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
            Especialízate en las Áreas de Mayor Demanda en la Construcción e Ingeniería
          </h2>
          
          <p className="text-xs sm:text-sm text-slate-300 mt-3 font-medium leading-relaxed">
            Programas desarrollados por ingenieros activos, alineados a la normativa vigente (MTC, OSINERGMIN, OSCE) y con certificación oficial válida para convocatorias laborales.
          </p>
        </div>

        {/* 3-Column School Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROGRAM_CATEGORIES.map((category: ProgramCategory, index: number) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="bg-[#0A2540]/90 backdrop-blur-md rounded-2xl border-2 border-slate-700/80 shadow-2xl overflow-hidden flex flex-col justify-between group hover:border-[#00A3E0]/70 transition-all duration-300"
            >
              <div>
                {/* Image Header with Gradient Overlay & Badge */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540] via-[#0A2540]/40 to-transparent"></div>
                  
                  {/* Top Badge Tag */}
                  <div className="absolute top-4 left-4 bg-[#D92D20] text-white text-[10px] font-black px-3 py-1 rounded-full shadow-lg uppercase tracking-wider">
                    {category.badge}
                  </div>

                  {/* Icon Chip */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-[#00529B] border border-cyan-400/40 shadow-lg group-hover:bg-[#00A3E0] transition-colors">
                      {getCategoryIcon(category.iconName)}
                    </div>
                    <div className="bg-[#061828]/90 backdrop-blur-md px-3 py-1 rounded-lg border border-slate-700 text-xs font-black text-cyan-300">
                      {category.coursesCount} Programas Activos
                    </div>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-black text-white tracking-tight leading-snug group-hover:text-[#00A3E0] transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-xs font-bold text-cyan-400 mt-1">
                      {category.subtitle}
                    </p>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed font-medium">
                    {category.description}
                  </p>

                  {/* Featured Programs Bullet List */}
                  <div className="pt-2 border-t border-slate-800 space-y-2">
                    <p className="text-[11px] font-extrabold text-slate-400 uppercase tracking-wider">
                      Cursos Destacados de la Escuela:
                    </p>
                    <ul className="space-y-1.5">
                      {category.featuredPrograms.map((program, pIndex) => (
                        <li key={pIndex} className="text-xs text-slate-200 flex items-start gap-2 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#00A3E0] shrink-0 mt-0.5" />
                          <span className="truncate">{program}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Bottom Action Footer */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => onSelectCategory(category.id)}
                  className="w-full py-3.5 px-4 rounded-xl bg-[#00529B] hover:bg-[#00A3E0] hover:text-slate-950 text-white font-extrabold text-xs uppercase tracking-wider shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95 border border-cyan-400/30"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Explorar Catálogo de Escuela</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Live Modal Alert */}
        <div className="mt-12 text-center bg-[#061828] border border-slate-800 p-4 rounded-2xl max-w-2xl mx-auto flex items-center justify-center gap-3 text-xs font-extrabold text-slate-200 shadow-xl">
          <Laptop className="w-5 h-5 text-[#00A3E0] shrink-0" />
          <span>Modalidad 100% Virtual En Vivo con Acceso 24/7 a Grabaciones HD</span>
        </div>

      </div>
    </section>
  );
};
