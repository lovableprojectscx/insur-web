import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HardHat, Droplets, Building2, Landmark, Mountain, ArrowRight, Award, CheckCircle2, BookOpen, GraduationCap } from 'lucide-react';

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
      instructorRole: 'Especialista en Licitaciones OSCE & Derecho de la Construcción',
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
      instructorRole: 'Consultor Senior en Carreteras & Geotecnia Minera',
      instructorDegree: 'Especialista en Ingeniería de Transportes y Minería',
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
            className="relative rounded-3xl overflow-hidden shadow-xl border-2 border-[#1559ED] bg-slate-950 text-white min-h-[380px] flex flex-col justify-between p-6"
          >
            {/* Background High-Res Image */}
            <img
              src={currentSchool.image}
              alt={currentSchool.name}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/20" />

            {/* Top Badges */}
            <div className="relative z-10 flex items-center justify-between">
              <div className="p-2.5 rounded-2xl bg-white text-slate-900 shadow-md">
                {currentSchool.icon}
              </div>
              <span className={`text-[10px] font-black text-white px-3 py-1 rounded-full uppercase tracking-wider shadow-md ${currentSchool.badgeColor}`}>
                ESCUELA ACTIVA
              </span>
            </div>

            {/* Bottom Content with High-Contrast Text */}
            <div className="relative z-10 space-y-3 pt-12">
              <div>
                <h3 className="text-2xl font-black text-cyan-300 tracking-tight leading-tight drop-shadow-md">
                  {currentSchool.name}
                </h3>
                <p className="text-xs font-bold text-white/90 mt-0.5 drop-shadow-sm">
                  {currentSchool.subtitle}
                </p>
              </div>

              <p className="text-xs text-slate-100 font-medium leading-relaxed drop-shadow-sm">
                {currentSchool.description}
              </p>

              {/* Active Instructor on Mobile */}
              <div className="flex items-center gap-3 bg-slate-900/90 backdrop-blur-md p-3 rounded-2xl border border-slate-700">
                <img
                  src={currentSchool.instructorPhoto}
                  alt={currentSchool.instructorName}
                  className="w-12 h-12 rounded-xl object-cover object-top border border-cyan-400/50 shrink-0"
                />
                <div className="text-left truncate">
                  <span className="text-[10px] font-black text-amber-300 block uppercase">{currentSchool.instructorCip}</span>
                  <p className="text-xs font-black text-white truncate">{currentSchool.instructorName}</p>
                  <p className="text-[10px] text-slate-300 truncate">{currentSchool.instructorRole}</p>
                </div>
              </div>

              {/* Programs List */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {currentSchool.programs.map((prog, pIdx) => (
                  <span key={pIdx} className="bg-slate-900/90 backdrop-blur-md px-2.5 py-1 rounded-lg text-[10px] font-black text-cyan-200 border border-slate-700 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                    {prog}
                  </span>
                ))}
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <button
                  onClick={() => onSelectCategory(currentSchool.id)}
                  className="w-full py-3.5 px-4 rounded-xl bg-[#1559ED] hover:bg-blue-600 text-white font-black text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 cursor-pointer active:scale-95 border border-cyan-400/40"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Ver Cursos de {currentSchool.name}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>

        </div>

        {/* DESKTOP VIEW (Visible on screens >= lg): Dynamic Accordion Photo Gallery + Right Feature Banner */}
        <div className="hidden lg:grid grid-cols-12 gap-7 items-stretch">
          
          {/* Left: Dynamic Expandable Accordion */}
          <div className="col-span-8 flex flex-row gap-3 min-h-[450px] items-stretch">
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

          {/* Right: Synced Feature Banner with Active School Info & EXACT INSTRUCTOR PHOTO */}
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
              <div>
                <h3 className="text-xl font-black text-[#0A2540] tracking-tight leading-snug">
                  {currentSchool.name}
                </h3>
                <p className="text-xs text-[#1559ED] font-bold mt-0.5">
                  {currentSchool.subtitle}
                </p>
              </div>

              {/* Instructor Portrait Photo Synced to the School! */}
              <div className="relative my-3 rounded-2xl overflow-hidden border-2 border-slate-200 bg-slate-100 shadow-md">
                <img
                  src={currentSchool.instructorPhoto}
                  alt={currentSchool.instructorName}
                  className="w-full h-52 object-cover object-top hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/90 via-transparent to-transparent" />
                
                {/* Floating CIP/CAL Badge */}
                <div className="absolute top-3 right-3 bg-[#D92D20] text-white text-[10px] font-black px-2.5 py-0.5 rounded-full shadow-md uppercase">
                  {currentSchool.instructorCip}
                </div>

                {/* Instructor Name on Photo */}
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <p className="text-xs font-black tracking-tight leading-tight text-white drop-shadow-md">
                    {currentSchool.instructorName}
                  </p>
                  <p className="text-[10px] text-cyan-300 font-bold truncate">
                    {currentSchool.instructorDegree}
                  </p>
                </div>
              </div>

              {/* Role & Experience Info */}
              <div className="space-y-1.5 text-xs">
                <div className="flex items-start gap-1.5 font-bold text-slate-800">
                  <Award className="w-3.5 h-3.5 text-[#1559ED] shrink-0 mt-0.5" />
                  <span className="leading-tight">{currentSchool.instructorRole}</span>
                </div>
                <div className="flex items-start gap-1.5 font-semibold text-slate-500 text-[11px]">
                  <GraduationCap className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
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
