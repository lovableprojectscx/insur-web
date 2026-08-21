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
      subtitle: 'Residencia & Obras Civiles',
      programs: ['Residencia de Obras', 'Supervisión Técnica', 'Valorizaciones MTC'],
      instructorName: 'Ing. Roberto Carlos Vega',
      instructorCip: 'CIP N° 182490',
      instructorRole: 'Residencia de Obras & BIM',
      instructorPhoto: '/assets/instructor_roberto.jpg'
    },
    {
      id: 'ingenieria-hidraulica',
      name: 'Ingeniería Hidráulica',
      icon: <Droplets className="w-5 h-5 text-cyan-600" />,
      badgeColor: 'bg-cyan-600',
      image: '/assets/school_hidraulica.jpg',
      subtitle: 'Saneamiento & Presas',
      programs: ['Presas y Canales', 'Modelamiento HEC-RAS', 'Saneamiento'],
      instructorName: 'Dra. Ing. Vanessa Alarcón',
      instructorCip: 'CIP N° 194820',
      instructorRole: 'Estructuras Hidráulicas',
      instructorPhoto: '/assets/instructor_vanessa.jpg'
    },
    {
      id: 'estructuras-bim',
      name: 'Estructuras y BIM',
      icon: <Building2 className="w-5 h-5 text-[#0A2540]" />,
      badgeColor: 'bg-[#0A2540]',
      image: '/assets/course_estructuras.jpg',
      subtitle: 'SAP2000, ETABS & Revit',
      programs: ['Cálculo Sísmico ETABS', 'Modelado BIM Revit', 'Navisworks 5D'],
      instructorName: 'Ing. Especialista Estructural',
      instructorCip: 'CIP N° 182490',
      instructorRole: 'Modelado BIM & Sismorresistencia',
      instructorPhoto: '/assets/engineer_orange.jpg'
    },
    {
      id: 'gestion-gubernamental',
      name: 'Gestión Gubern.',
      icon: <Landmark className="w-5 h-5 text-indigo-600" />,
      badgeColor: 'bg-indigo-600',
      image: '/assets/school_gestion.jpg',
      subtitle: 'Licitaciones OSCE & Contratos',
      programs: ['Contrataciones OSCE', 'Invierte.pe', 'Arbitraje de Obras'],
      instructorName: 'Mg. Abog. Gabriel Flores',
      instructorCip: 'CAL N° 45892 / CIP',
      instructorRole: 'Licitaciones OSCE & Arbitraje',
      instructorPhoto: '/assets/instructor_gabriel.jpg'
    },
    {
      id: 'ingenieria-minas',
      name: 'Ingeniería de Minas',
      icon: <Mountain className="w-5 h-5 text-[#D92D20]" />,
      badgeColor: 'bg-[#D92D20]',
      image: '/assets/school_minas.jpg',
      subtitle: 'Seguridad SSOMA & Geotecnia',
      programs: ['Taludes y Geotecnia', 'Seguridad SSOMA', 'Topografía Minera'],
      instructorName: 'Ing. Marco Antonio Ramos',
      instructorCip: 'CIP N° 162901',
      instructorRole: 'Carreteras & Geotecnia',
      instructorPhoto: '/assets/instructor_marco.jpg'
    }
  ];

  const currentSchool = schools.find((s) => s.id === activeSchoolId) || schools[0];

  return (
    <section id="escuelas" className="py-16 sm:py-20 bg-[#FAFBFC] text-slate-900 relative overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Clean Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A2540] tracking-tight uppercase">
            NUESTRAS ESCUELAS
          </h2>
          <p className="text-xs sm:text-sm font-bold text-slate-400 mt-1 uppercase tracking-widest">
            ESPECIALÍZATE CON NOSOTROS
          </p>
        </div>

        {/* MOBILE VIEW (< lg) */}
        <div className="block lg:hidden space-y-4">
          
          {/* Scrollable Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none snap-x">
            {schools.map((school) => {
              const isSelected = activeSchoolId === school.id;
              return (
                <button
                  key={school.id}
                  onClick={() => setActiveSchoolId(school.id)}
                  className={`snap-start shrink-0 px-4 py-2 rounded-2xl font-black text-xs uppercase tracking-wide transition-all flex items-center gap-2 border cursor-pointer ${
                    isSelected
                      ? 'bg-[#1559ED] text-white border-[#1559ED] shadow-md'
                      : 'bg-white text-slate-700 border-slate-200'
                  }`}
                >
                  <span>{school.name}</span>
                </button>
              );
            })}
          </div>

          {/* Active Card */}
          <motion.div
            key={currentSchool.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-3xl overflow-hidden shadow-xl border-2 border-[#1559ED] bg-white text-slate-900"
          >
            <div className="relative h-44 overflow-hidden bg-slate-950">
              <img
                src={currentSchool.image}
                alt={currentSchool.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-4 right-4 text-white">
                <h3 className="text-xl font-black text-cyan-300">
                  {currentSchool.name}
                </h3>
              </div>
            </div>

            <div className="p-5 space-y-3">
              <div className="flex items-center gap-3 bg-slate-50 p-2.5 rounded-2xl border border-slate-200">
                <img
                  src={currentSchool.instructorPhoto}
                  alt={currentSchool.instructorName}
                  className="w-14 h-16 rounded-xl object-cover object-top border border-slate-300 shrink-0"
                />
                <div>
                  <span className="text-[10px] font-black text-[#D92D20] uppercase">{currentSchool.instructorCip}</span>
                  <h4 className="text-sm font-black text-[#0A2540]">{currentSchool.instructorName}</h4>
                  <p className="text-xs text-[#1559ED] font-bold">{currentSchool.instructorRole}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {currentSchool.programs.map((prog, pIdx) => (
                  <span key={pIdx} className="bg-blue-50 px-2.5 py-1 rounded-lg text-[10px] font-black text-[#1559ED] border border-blue-200 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    {prog}
                  </span>
                ))}
              </div>

              <button
                onClick={() => onSelectCategory(currentSchool.id)}
                className="w-full mt-2 py-3 px-4 rounded-xl bg-[#1559ED] text-white font-black text-xs uppercase tracking-wider shadow-md flex items-center justify-center gap-2"
              >
                <span>Ver Cursos de {currentSchool.name}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

        </div>

        {/* DESKTOP VIEW (>= lg) */}
        <div className="hidden lg:grid grid-cols-12 gap-6 items-stretch">
          
          {/* Left: Accordion Gallery */}
          <div className="col-span-8 flex flex-row gap-3 min-h-[460px] items-stretch">
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
                      ? 'flex-[3.5] border-[#1559ED] shadow-2xl bg-slate-950'
                      : 'flex-1 border-slate-200 bg-slate-900 opacity-85 hover:opacity-100 hover:border-blue-400'
                  }`}
                >
                  <img
                    src={school.image}
                    alt={school.name}
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
                      isSelected ? 'scale-105' : 'scale-100 brightness-75'
                    }`}
                  />
                  
                  <div className={`absolute inset-0 transition-opacity duration-500 ${
                    isSelected 
                      ? 'bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent' 
                      : 'bg-gradient-to-t from-slate-950/90 via-slate-900/60 to-slate-900/30'
                  }`} />

                  <div className="relative z-10 flex items-center justify-between">
                    <div className="p-2.5 rounded-2xl bg-white shadow-md text-slate-900">
                      {school.icon}
                    </div>

                    {isSelected && (
                      <span className={`text-[10px] font-black text-white px-3 py-1 rounded-full uppercase tracking-wider shadow-md ${school.badgeColor}`}>
                        ESCUELA ACTIVA
                      </span>
                    )}
                  </div>

                  <div className="relative z-10 space-y-2">
                    <h3 className={`font-black text-white leading-tight ${
                      isSelected ? 'text-2xl text-cyan-300 drop-shadow-md' : 'text-sm'
                    }`}>
                      {school.name}
                    </h3>

                    <AnimatePresence>
                      {isSelected && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="space-y-3 pt-1"
                        >
                          <div className="flex flex-wrap gap-1.5">
                            {school.programs.map((prog, pIdx) => (
                              <span key={pIdx} className="bg-slate-900/90 backdrop-blur-md px-2.5 py-1 rounded-lg text-[10px] font-extrabold text-cyan-200 border border-slate-700 flex items-center gap-1">
                                <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                                {prog}
                              </span>
                            ))}
                          </div>

                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              onSelectCategory(school.id);
                            }}
                            className="px-4 py-2 rounded-xl bg-[#1559ED] hover:bg-blue-600 text-white font-black text-xs uppercase tracking-wider shadow-lg inline-flex items-center gap-2 cursor-pointer active:scale-95"
                          >
                            <BookOpen className="w-3.5 h-3.5" />
                            <span>Ver Cursos</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right: Clean, Spacious Faculty Card (No text clutter!) */}
          <motion.div
            key={currentSchool.id}
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="col-span-4 bg-white rounded-3xl border-2 border-slate-200 shadow-xl overflow-hidden p-6 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="bg-amber-100 text-amber-900 border border-amber-300 text-[10px] font-black px-3 py-1 rounded-full uppercase">
                  DOCENTE ASIGNADO
                </span>
                <Award className="w-5 h-5 text-[#1559ED]" />
              </div>

              {/* Large, Beautiful Photo with ample breathing room */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 shadow-md mb-4 h-64 flex items-center justify-center">
                <img
                  src={currentSchool.instructorPhoto}
                  alt={currentSchool.instructorName}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute top-3 right-3 bg-[#D92D20] text-white text-[10px] font-black px-2.5 py-0.5 rounded-full shadow-md uppercase">
                  {currentSchool.instructorCip}
                </div>
              </div>

              {/* Minimal Clean Text */}
              <div className="text-center space-y-1">
                <h4 className="text-base font-black text-[#0A2540]">
                  {currentSchool.instructorName}
                </h4>
                <p className="text-xs font-black text-[#1559ED]">
                  {currentSchool.instructorRole}
                </p>
              </div>
            </div>

            {/* Direct CTA */}
            <button
              onClick={() => onSelectCategory(currentSchool.id)}
              className="mt-4 w-full py-3.5 px-4 rounded-2xl bg-[#1559ED] hover:bg-blue-800 text-white font-black text-xs uppercase tracking-wider shadow-md flex items-center justify-center gap-2 cursor-pointer active:scale-95"
            >
              <span>Explorar {currentSchool.name}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
