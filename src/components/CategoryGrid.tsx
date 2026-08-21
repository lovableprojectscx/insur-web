import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HardHat, Droplets, Building2, Landmark, Mountain, ArrowRight, Award, CheckCircle2, BookOpen } from 'lucide-react';

interface CategoryGridProps {
  onSelectCategory: (categoryId: string) => void;
}

export const CategoryGrid: React.FC<CategoryGridProps> = ({ onSelectCategory }) => {
  const [activeSchoolId, setActiveSchoolId] = useState<string>('ingenieria-civil');

  const schools = [
    {
      id: 'ingenieria-civil',
      name: 'Ingeniería Civil',
      icon: <HardHat className="w-5 h-5 text-[#1559ED]" />,
      badgeColor: 'bg-[#1559ED]',
      image: '/assets/course_residencia.jpg',
      subtitle: 'Residencia, Supervisión & Obras Civiles',
      description: 'Especialízate en planificación y control de obras con Primavera P6, valorizaciones y liquidaciones con normativa OSCE.',
      programs: ['Residencia de Obras Civiles', 'Supervisión Técnica', 'Valorizaciones MTC']
    },
    {
      id: 'ingenieria-hidraulica',
      name: 'Ingeniería Hidráulica',
      icon: <Droplets className="w-5 h-5 text-cyan-600" />,
      badgeColor: 'bg-cyan-600',
      image: '/assets/school_hidraulica.jpg',
      subtitle: 'Saneamiento, Canales & Presas',
      description: 'Modelamiento hidráulico, diseño de obras de captación, presas de concreto y redes de agua potable y alcantarillado.',
      programs: ['Diseño de Presas y Canales', 'Modelamiento HEC-RAS', 'Saneamiento Rural']
    },
    {
      id: 'estructuras-bim',
      name: 'Estructuras y BIM',
      icon: <Building2 className="w-5 h-5 text-[#0A2540]" />,
      badgeColor: 'bg-[#0A2540]',
      image: '/assets/course_estructuras.jpg',
      subtitle: 'SAP2000, ETABS & Revit 5D',
      description: 'Cálculo estructural sismorresistente bajo norma E.030 y modelado paramétrico BIM coordinado con Navisworks.',
      programs: ['Cálculo Sísmico en ETABS', 'Modelado BIM Revit', 'Interferencias Navisworks']
    },
    {
      id: 'gestion-gubernamental',
      name: 'Gestión Gubern.',
      icon: <Landmark className="w-5 h-5 text-indigo-600" />,
      badgeColor: 'bg-indigo-600',
      image: '/assets/school_gestion.jpg',
      subtitle: 'OSCE, Invierte.pe & Licitaciones',
      description: 'Gestión pública, arbitraje de obras, contrataciones con el Estado y formulación de proyectos en Invierte.pe.',
      programs: ['Ley de Contrataciones OSCE', 'Invierte.pe y Fichas Técnicas', 'Arbitraje de Estado']
    },
    {
      id: 'ingenieria-minas',
      name: 'Ingeniería de Minas',
      icon: <Mountain className="w-5 h-5 text-[#D92D20]" />,
      badgeColor: 'bg-[#D92D20]',
      image: '/assets/school_minas.jpg',
      subtitle: 'Seguridad SST, Geotecnia & Vías',
      description: 'Estabilidad de taludes, geotecnia minera, seguridad industrial SSOMA y diseño de vías de acarreo.',
      programs: ['Geotecnia y Taludes', 'Seguridad Minera SSOMA', 'Topografía Satelital']
    }
  ];

  const currentSchool = schools.find((s) => s.id === activeSchoolId) || schools[0];

  return (
    <section id="escuelas" className="py-20 bg-[#FAFBFC] text-slate-900 relative overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A2540] tracking-tight leading-none uppercase">
            NUESTRAS ESCUELAS
          </h2>
          <p className="text-xs sm:text-sm font-black text-slate-400 mt-2 uppercase tracking-widest">
            ESPECIALÍZATE CON NOSOTROS
          </p>
        </div>

        {/* 2-Column Container: Expandable Photo Cards Gallery (Left) + Feature Banner (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 items-stretch">
          
          {/* Left: Expandable Dynamic Photo Gallery */}
          <div className="lg:col-span-8 flex flex-col sm:flex-row gap-3 min-h-[440px] items-stretch">
            {schools.map((school) => {
              const isSelected = activeSchoolId === school.id;
              
              return (
                <motion.div
                  key={school.id}
                  layout
                  onClick={() => setActiveSchoolId(school.id)}
                  onMouseEnter={() => setActiveSchoolId(school.id)}
                  className={`relative rounded-3xl overflow-hidden shadow-lg border-2 cursor-pointer transition-all duration-500 flex flex-col justify-between p-5 text-white ${
                    isSelected
                      ? 'sm:flex-[3.5] border-[#1559ED] shadow-2xl bg-slate-950'
                      : 'sm:flex-1 border-slate-200 bg-slate-900 opacity-90 hover:opacity-100 hover:border-blue-400'
                  }`}
                >
                  {/* Full High-Resolution Background Photo */}
                  <img
                    src={school.image}
                    alt={school.name}
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
                      isSelected ? 'scale-105 filter-none' : 'scale-100 brightness-75'
                    }`}
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className={`absolute inset-0 transition-opacity duration-500 ${
                    isSelected 
                      ? 'bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent' 
                      : 'bg-gradient-to-t from-slate-950/90 via-slate-900/60 to-slate-900/30'
                  }`} />

                  {/* Top Header Badge & Icon */}
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="p-2.5 rounded-2xl bg-white shadow-md border border-slate-200 text-slate-900">
                      {school.icon}
                    </div>

                    {isSelected && (
                      <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className={`text-[10px] font-black text-white px-3 py-1 rounded-full uppercase tracking-wider shadow-md ${school.badgeColor}`}
                      >
                        ESCUELA ACTIVA
                      </motion.span>
                    )}
                  </div>

                  {/* Bottom Content Area */}
                  <div className="relative z-10 space-y-2">
                    <h3 className={`font-black text-white leading-tight tracking-tight ${
                      isSelected ? 'text-xl sm:text-2xl text-cyan-300 drop-shadow-md' : 'text-sm'
                    }`}>
                      {school.name}
                    </h3>

                    {/* Extended Details when Expanded */}
                    <AnimatePresence>
                      {isSelected && (
                        <motion.div
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 15 }}
                          transition={{ duration: 0.3 }}
                          className="space-y-3 pt-1"
                        >
                          <p className="text-xs text-slate-200 font-semibold leading-relaxed drop-shadow-sm">
                            {school.description}
                          </p>

                          {/* Quick Program Pills */}
                          <div className="flex flex-wrap gap-1.5 pt-1">
                            {school.programs.map((prog, pIdx) => (
                              <span key={pIdx} className="bg-slate-900/80 backdrop-blur-md px-2.5 py-1 rounded-lg text-[10px] font-extrabold text-cyan-200 border border-slate-700 flex items-center gap-1">
                                <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                                {prog}
                              </span>
                            ))}
                          </div>

                          {/* Action Button */}
                          <div className="pt-2">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                onSelectCategory(school.id);
                              }}
                              className="px-4 py-2 rounded-xl bg-[#1559ED] hover:bg-blue-600 text-white font-black text-xs uppercase tracking-wider shadow-lg inline-flex items-center gap-2 cursor-pointer active:scale-95 border border-cyan-400/40"
                            >
                              <BookOpen className="w-3.5 h-3.5" />
                              <span>Ver Cursos de {school.name}</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right: Synced Feature Banner with Active School Info & Engineer */}
          <motion.div
            key={currentSchool.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-4 bg-white rounded-3xl border-2 border-slate-200 shadow-xl overflow-hidden p-6 flex flex-col justify-between"
          >
            <div>
              {/* Top Badges */}
              <div className="flex items-center justify-between mb-4">
                <span className="bg-amber-100 text-amber-900 border border-amber-300 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider">
                  CERTIFICACIÓN OFICIAL CIP
                </span>
                <Award className="w-5 h-5 text-[#1559ED]" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-black text-[#0A2540] tracking-tight leading-snug">
                {currentSchool.name}
              </h3>
              <p className="text-xs text-[#1559ED] font-bold mt-0.5">
                {currentSchool.subtitle}
              </p>

              {/* Engineer Photo */}
              <div className="relative my-4 rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 shadow-md">
                <img
                  src="/assets/engineer_orange.jpg"
                  alt="Ingeniero Residente Grupo INSUR"
                  className="w-full h-56 object-cover object-top hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white text-xs font-black">
                  <span className="bg-[#1559ED] px-2 py-0.5 rounded text-[10px] font-black uppercase mr-2">DOCENTES ACTIVOS</span>
                  Colegiados CIP en Obra
                </div>
              </div>

              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                Aprende con ingenieros y consultores de vasta experiencia en proyectos nacionales y accede a nuestro campus virtual 24/7.
              </p>
            </div>

            {/* Action CTA Button */}
            <button
              onClick={() => onSelectCategory(currentSchool.id)}
              className="mt-4 w-full py-3.5 px-4 rounded-2xl bg-[#1559ED] hover:bg-blue-800 text-white font-black text-xs uppercase tracking-wider shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
            >
              <span>Explorar Escuela Completa</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
