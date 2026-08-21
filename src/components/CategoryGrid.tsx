import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HardHat, Droplets, Building2, Landmark, Mountain, ArrowRight, Award, CheckCircle2, BookOpen, GraduationCap, UserCheck } from 'lucide-react';

interface CategoryGridProps {
  onSelectCategory: (categoryId: string) => void;
}

export const CategoryGrid: React.FC<CategoryGridProps> = ({ onSelectCategory }) => {
  const [activeSchoolId, setActiveSchoolId] = useState<string>('ingenieria-civil');

  const schools = [
    {
      id: 'ingenieria-civil',
      name: 'Ingeniería Civil',
      shortName: 'Civil',
      icon: <HardHat className="w-5 h-5 text-[#1559ED]" />,
      badgeColor: 'bg-[#1559ED]',
      image: '/assets/course_residencia.jpg',
      subtitle: 'Residencia, Supervisión & Obras Civiles',
      description: 'Especialízate en planificación y control de obras con Primavera P6, valorizaciones y liquidaciones con normativa OSCE.',
      programs: ['Residencia de Obras Civiles', 'Supervisión Técnica', 'Valorizaciones MTC'],
      instructorName: 'Ing. Roberto Carlos Vega',
      instructorCip: 'CIP N° 182490',
      instructorRole: 'Especialista Senior en Residencia & BIM',
      instructorDegree: 'Magíster en Gerencia de la Construcción',
      instructorPhoto: '/assets/instructor_roberto.jpg',
      instructorExperience: '+14 años en Infraestructura Vial y Edificaciones'
    },
    {
      id: 'ingenieria-hidraulica',
      name: 'Ingeniería Hidráulica',
      shortName: 'Hidráulica',
      icon: <Droplets className="w-5 h-5 text-cyan-600" />,
      badgeColor: 'bg-cyan-600',
      image: '/assets/school_hidraulica.jpg',
      subtitle: 'Saneamiento, Canales & Presas',
      description: 'Modelamiento hidráulico, diseño de obras de captación, presas de concreto y redes de agua potable y alcantarillado.',
      programs: ['Diseño de Presas y Canales', 'Modelamiento HEC-RAS', 'Saneamiento Rural'],
      instructorName: 'Dra. Ing. Vanessa Alarcón S.',
      instructorCip: 'CIP N° 194820',
      instructorRole: 'Doctora en Ingeniería Hidráulica & Estructuras',
      instructorDegree: 'Ph.D. en Ingeniería Estructural',
      instructorPhoto: '/assets/instructor_vanessa.jpg',
      instructorExperience: '+12 años en Consultoría y Proyectos Hidráulicos'
    },
    {
      id: 'estructuras-bim',
      name: 'Estructuras y BIM',
      shortName: 'Estructuras',
      icon: <Building2 className="w-5 h-5 text-[#0A2540]" />,
      badgeColor: 'bg-[#0A2540]',
      image: '/assets/course_estructuras.jpg',
      subtitle: 'SAP2000, ETABS & Revit 5D',
      description: 'Cálculo estructural sismorresistente bajo norma E.030 y modelado paramétrico BIM coordinado con Navisworks.',
      programs: ['Cálculo Sísmico en ETABS', 'Modelado BIM Revit', 'Interferencias Navisworks'],
      instructorName: 'Ing. Especialista Estructural',
      instructorCip: 'CIP N° 182490',
      instructorRole: 'Consultor Senior en Modelado BIM & Sismorresistencia',
      instructorDegree: 'Especialista en Modelado BIM Paramétrico',
      instructorPhoto: '/assets/engineer_orange.jpg',
      instructorExperience: '+10 años en Diseño Estructural Sismorresistente'
    },
    {
      id: 'gestion-gubernamental',
      name: 'Gestión Gubern.',
      shortName: 'Gestión',
      icon: <Landmark className="w-5 h-5 text-indigo-600" />,
      badgeColor: 'bg-indigo-600',
      image: '/assets/school_gestion.jpg',
      subtitle: 'OSCE, Invierte.pe & Licitaciones',
      description: 'Gestión pública, arbitraje de obras, contrataciones con el Estado y formulación de proyectos en Invierte.pe.',
      programs: ['Ley de Contrataciones OSCE', 'Invierte.pe y Fichas Técnicas', 'Arbitraje de Estado'],
      instructorName: 'Mg. Abog. Gabriel Flores T.',
      instructorCip: 'CAL N° 45892 / CIP',
      instructorRole: 'Especialista en Licitaciones OSCE & Derecho',
      instructorDegree: 'Magíster en Derecho de la Construcción y Arbitraje',
      instructorPhoto: '/assets/instructor_gabriel.jpg',
      instructorExperience: '+12 años en Gestión Pública y Asesoría Legal'
    },
    {
      id: 'ingenieria-minas',
      name: 'Ingeniería de Minas',
      shortName: 'Minas',
      icon: <Mountain className="w-5 h-5 text-[#D92D20]" />,
      badgeColor: 'bg-[#D92D20]',
      image: '/assets/school_minas.jpg',
      subtitle: 'Seguridad SST, Geotecnia & Vías',
      description: 'Estabilidad de taludes, geotecnia minera, seguridad industrial SSOMA y diseño de vías de acarreo.',
      programs: ['Geotecnia y Taludes', 'Seguridad Minera SSOMA', 'Topografía Satelital'],
      instructorName: 'Ing. Marco Antonio Ramos',
      instructorCip: 'CIP N° 162901',
      instructorRole: 'Consultor Senior en Carreteras & Geotecnia',
      instructorDegree: 'Especialista en Ingeniería de Transportes',
      instructorPhoto: '/assets/instructor_marco.jpg',
      instructorExperience: '+16 años en Megaproyectos Viales y Mineros'
    }
  ];

  const currentSchool = schools.find((s) => s.id === activeSchoolId) || schools[0];

  return (
    <section id="escuelas" className="py-16 sm:py-20 bg-[#FAFBFC] text-slate-900 relative overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A2540] tracking-tight leading-none uppercase">
            NUESTRAS ESCUELAS
          </h2>
          <p className="text-xs sm:text-sm font-black text-slate-400 mt-2 uppercase tracking-widest">
            ESPECIALÍZATE CON NOSOTROS
          </p>
        </div>

        {/* MOBILE VIEW (Visible on screens < lg): Interactive Tabs + Featured Large Active Card */}
        <div className="block lg:hidden space-y-5">
          
          {/* Horizontal Scrollable Category Selector Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none snap-x">
            {schools.map((school) => {
              const isSelected = activeSchoolId === school.id;
              return (
                <button
                  key={school.id}
                  onClick={() => setActiveSchoolId(school.id)}
                  className={`snap-start shrink-0 px-4 py-2.5 rounded-2xl font-black text-xs uppercase tracking-wide transition-all flex items-center gap-2 border cursor-pointer ${
                    isSelected
                      ? 'bg-[#1559ED] text-white border-[#1559ED] shadow-md scale-102'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <span className="p-1 rounded-lg bg-white/20 text-current">{school.icon}</span>
                  <span>{school.name}</span>
                </button>
              );
            })}
          </div>

          {/* Large Visual Active School Card on Mobile */}
          <motion.div
            key={currentSchool.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="rounded-3xl overflow-hidden shadow-xl border-2 border-[#1559ED] bg-white text-slate-900 flex flex-col justify-between"
          >
            {/* Top School Header with Cover Photo */}
            <div className="relative h-48 overflow-hidden bg-slate-950">
              <img
                src={currentSchool.image}
                alt={currentSchool.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              <div className="absolute top-4 left-4 p-2 rounded-xl bg-white shadow-md text-slate-900">
                {currentSchool.icon}
              </div>
              <div className="absolute bottom-3 left-4 right-4 text-white">
                <span className={`text-[9px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider ${currentSchool.badgeColor} inline-block mb-1`}>
                  {currentSchool.name}
                </span>
                <h3 className="text-xl font-black text-cyan-300 tracking-tight leading-tight">
                  {currentSchool.subtitle}
                </h3>
              </div>
            </div>

            {/* Middle Section: Assigned Instructor in Full Crisp Clarity */}
            <div className="p-5 space-y-4">
              <div className="flex items-center gap-3.5 bg-slate-50 p-3.5 rounded-2xl border border-slate-200">
                <div className="relative w-16 h-20 rounded-xl overflow-hidden shadow-sm shrink-0 border border-slate-300">
                  <img
                    src={currentSchool.instructorPhoto}
                    alt={currentSchool.instructorName}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="text-left">
                  <span className="text-[10px] font-black text-[#D92D20] uppercase tracking-wider block">
                    {currentSchool.instructorCip}
                  </span>
                  <h4 className="text-sm font-black text-[#0A2540] leading-snug">
                    {currentSchool.instructorName}
                  </h4>
                  <p className="text-xs font-bold text-[#1559ED]">
                    {currentSchool.instructorDegree}
                  </p>
                  <p className="text-[11px] text-slate-500 font-medium mt-0.5">
                    {currentSchool.instructorRole}
                  </p>
                </div>
              </div>

              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                {currentSchool.description}
              </p>

              {/* Programs List */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {currentSchool.programs.map((prog, pIdx) => (
                  <span key={pIdx} className="bg-blue-50 px-2.5 py-1 rounded-lg text-[10px] font-black text-[#1559ED] border border-blue-200 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    {prog}
                  </span>
                ))}
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <button
                  onClick={() => onSelectCategory(currentSchool.id)}
                  className="w-full py-3.5 px-4 rounded-xl bg-[#1559ED] hover:bg-blue-600 text-white font-black text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Ver Cursos de {currentSchool.name}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>

        </div>

        {/* DESKTOP VIEW (Visible on screens >= lg): Dynamic Accordion Photo Gallery + Clean Right Feature Banner */}
        <div className="hidden lg:grid grid-cols-12 gap-7 items-stretch">
          
          {/* Left: Dynamic Expandable Accordion */}
          <div className="col-span-8 flex flex-row gap-3 min-h-[480px] items-stretch">
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
                      : 'flex-1 border-slate-200 bg-slate-900 opacity-90 hover:opacity-100 hover:border-blue-400'
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
                  
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 transition-opacity duration-500 ${
                    isSelected 
                      ? 'bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent' 
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
                      isSelected ? 'text-2xl text-cyan-300 drop-shadow-md' : 'text-sm'
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
                          <p className="text-xs text-slate-100 font-semibold leading-relaxed drop-shadow-sm">
                            {school.description}
                          </p>

                          {/* Quick Program Pills */}
                          <div className="flex flex-wrap gap-1.5 pt-1">
                            {school.programs.map((prog, pIdx) => (
                              <span key={pIdx} className="bg-slate-900/90 backdrop-blur-md px-2.5 py-1 rounded-lg text-[10px] font-extrabold text-cyan-200 border border-slate-700 flex items-center gap-1">
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

          {/* Right: Clean, Crisp Faculty Card with Full Face Portrait (No text over face!) */}
          <motion.div
            key={currentSchool.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="col-span-4 bg-white rounded-3xl border-2 border-slate-200 shadow-xl overflow-hidden p-6 flex flex-col justify-between"
          >
            <div>
              {/* Top Badges */}
              <div className="flex items-center justify-between mb-3">
                <span className="bg-amber-100 text-amber-900 border border-amber-300 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider">
                  DOCENTE ESPECIALISTA ASIGNADO
                </span>
                <Award className="w-5 h-5 text-[#1559ED]" />
              </div>

              {/* School Header */}
              <div className="mb-3">
                <h3 className="text-xl font-black text-[#0A2540] tracking-tight leading-snug">
                  {currentSchool.name}
                </h3>
                <p className="text-xs text-[#1559ED] font-bold mt-0.5">
                  {currentSchool.subtitle}
                </p>
              </div>

              {/* Perfectly Centered & Framed Portrait (No Text Overlay Over Face!) */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-slate-200 bg-slate-50 shadow-md mb-4 h-64 flex items-center justify-center">
                <img
                  src={currentSchool.instructorPhoto}
                  alt={currentSchool.instructorName}
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                />
                
                {/* Floating CIP/CAL Badge */}
                <div className="absolute top-3.5 right-3.5 bg-[#D92D20] text-white text-[10px] font-black px-3 py-1 rounded-full shadow-lg uppercase tracking-wider border border-white/50">
                  {currentSchool.instructorCip}
                </div>
              </div>

              {/* Instructor Information Cleanly Located Below Photo */}
              <div className="space-y-2">
                <div>
                  <h4 className="text-base font-black text-[#0A2540] leading-snug">
                    {currentSchool.instructorName}
                  </h4>
                  <p className="text-xs font-black text-[#1559ED]">
                    {currentSchool.instructorDegree}
                  </p>
                </div>

                <div className="flex items-start gap-2 text-xs font-bold text-slate-800 bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                  <UserCheck className="w-4 h-4 text-[#1559ED] shrink-0 mt-0.5" />
                  <span className="leading-tight">{currentSchool.instructorRole}</span>
                </div>

                <div className="flex items-start gap-2 text-[11px] text-slate-500 font-semibold bg-blue-50/50 p-2.5 rounded-xl border border-blue-100">
                  <GraduationCap className="w-3.5 h-3.5 text-[#1559ED] shrink-0 mt-0.5" />
                  <span>{currentSchool.instructorExperience}</span>
                </div>
              </div>

            </div>

            {/* Action CTA Button */}
            <button
              onClick={() => onSelectCategory(currentSchool.id)}
              className="mt-4 w-full py-3.5 px-4 rounded-2xl bg-[#1559ED] hover:bg-blue-800 text-white font-black text-xs uppercase tracking-wider shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
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
