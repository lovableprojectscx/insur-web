import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ArrowRight, ShieldCheck, CheckCircle2, Phone, ChevronDown } from 'lucide-react';
import { FEATURED_COURSES } from '../data/mockData';
import type { Course } from '../types';

interface CourseCatalogProps {
  onOpenForm: () => void;
}

export const CourseCatalog: React.FC<CourseCatalogProps> = ({ onOpenForm }) => {
  const [activeCategory, setActiveCategory] = useState<string>('todos');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCourseSyllabus, setSelectedCourseSyllabus] = useState<Course | null>(null);
  const [visibleCount, setVisibleCount] = useState<number>(3);

  const categories = [
    { id: 'todos', label: 'Todos los Programas' },
    { id: 'diplomado', label: 'Capacitación' },
    { id: 'tecnico', label: 'Carrera técnica' },
    { id: 'ingenieria', label: 'Ingeniería y construcción' },
  ];

  const filteredCourses = FEATURED_COURSES.filter((course) => {
    const matchesCategory = activeCategory === 'todos' || course.category === activeCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          course.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const displayedCourses = filteredCourses.slice(0, visibleCount);

  const handleCategoryChange = (catId: string) => {
    setActiveCategory(catId);
    setVisibleCount(3);
  };

  return (
    <section id="catalogo" className="py-8 sm:py-12 bg-white text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Clean Minimalist Header */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-black text-[#0A2540] tracking-tight uppercase">
            PROGRAMAS Y DIPLOMADOS
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1 font-medium">
            Clases virtuales en vivo, campus 24/7 y certificación oficial verificable.
          </p>
        </div>

        {/* Filter Controls: Search & Requested Category Tabs */}
        <div className="mb-8 space-y-3">
          <div className="max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar especialidad o diplomado..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setVisibleCount(3);
              }}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-xs font-medium focus:outline-none focus:border-[#00A3E0] focus:bg-white transition-all"
            />
          </div>

          <div className="flex items-center justify-center gap-1.5 flex-wrap">
            {categories.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleCategoryChange(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeCategory === tab.id
                    ? 'bg-[#0A2540] text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Clean 3 Course Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          <AnimatePresence mode="popLayout">
            {displayedCourses.map((course) => (
              <motion.div
                key={course.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden flex flex-col justify-between hover:border-[#00A3E0] hover:shadow-lg transition-all duration-300 group"
              >
                <div>
                  {/* Photo with Single Clean Badge */}
                  <div className="relative h-44 overflow-hidden bg-slate-950">
                    <img
                      src={course.image || '/assets/course_residencia.jpg'}
                      alt={course.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                    
                    {/* 1 Single Elegant Badge */}
                    <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-white text-[11px] font-bold">
                      <span className="bg-[#0A2540]/90 backdrop-blur-md px-2 py-0.5 rounded text-[10px] text-cyan-300 font-extrabold uppercase border border-slate-700">
                        {course.category === 'diplomado' ? 'Capacitación' : course.category === 'tecnico' ? 'Carrera Técnica' : 'Ingeniería'} • {course.hours || 120} HRS
                      </span>
                      {course.startDate && (
                        <span className="text-[10px] text-slate-200 font-medium">
                          {course.startDate}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Clean Info Body */}
                  <div className="p-4 space-y-2">
                    <h3 className="text-sm sm:text-base font-bold text-[#0A2540] group-hover:text-[#00A3E0] transition-colors leading-snug">
                      {course.title}
                    </h3>

                    {course.instructorName && (
                      <p className="text-xs text-slate-500 font-medium">
                        Docente: <span className="font-bold text-slate-700">{course.instructorName}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Minimal Clean Card Footer */}
                <div className="p-4 pt-2 border-t border-slate-100 flex items-center justify-between gap-2">
                  <div>
                    {course.originalPrice && (
                      <span className="text-[10px] text-slate-400 line-through font-medium block">
                        S/ {course.originalPrice}
                      </span>
                    )}
                    <span className="text-base font-black text-[#0A2540]">
                      S/ {course.price || 350}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setSelectedCourseSyllabus(course)}
                      className="text-xs font-bold text-slate-500 hover:text-[#00A3E0] underline cursor-pointer"
                    >
                      Temario
                    </button>

                    <button
                      onClick={onOpenForm}
                      className="px-3.5 py-2 rounded-xl bg-[#0A2540] hover:bg-[#00A3E0] text-white font-bold text-xs uppercase tracking-wide transition-all shadow-xs flex items-center gap-1 cursor-pointer active:scale-95"
                    >
                      <span>Inscribirme</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Cargar Más Button */}
        {visibleCount < filteredCourses.length && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setVisibleCount((prev) => prev + 3)}
              className="px-6 py-2.5 rounded-full border-2 border-[#0A2540] text-[#0A2540] hover:bg-[#0A2540] hover:text-white font-bold text-xs uppercase tracking-wider transition-all inline-flex items-center gap-2 cursor-pointer shadow-xs active:scale-95"
            >
              <span>Cargar Más Programas</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>

      {/* Syllabus Modal Popup */}
      <AnimatePresence>
        {selectedCourseSyllabus && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm animate-in fade-in"
            onClick={() => setSelectedCourseSyllabus(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg rounded-2xl bg-white text-slate-900 shadow-2xl border border-slate-200 overflow-hidden max-h-[85vh] flex flex-col"
            >
              {/* Header */}
              <div className="p-5 bg-[#0A2540] text-white flex items-start justify-between">
                <div>
                  <span className="text-[10px] font-bold text-cyan-300 uppercase tracking-widest block mb-1">
                    TEMARIO OFICIAL
                  </span>
                  <h3 className="text-base font-bold leading-snug">
                    {selectedCourseSyllabus.title}
                  </h3>
                  <p className="text-xs text-slate-300 mt-1">
                    {selectedCourseSyllabus.hours || 120} horas lectivas • {selectedCourseSyllabus.duration}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedCourseSyllabus(null)}
                  className="p-1 rounded-full bg-slate-800 text-slate-300 hover:text-white"
                >
                  ✕
                </button>
              </div>

              {/* Topics List */}
              <div className="p-5 overflow-y-auto space-y-3">
                <div className="bg-blue-50 p-2.5 rounded-xl border border-blue-100 flex items-center gap-2 text-xs font-bold text-[#0A2540]">
                  <ShieldCheck className="w-4 h-4 text-[#00A3E0] shrink-0" />
                  <span>Acreditado bajo norma CIP y Ley de Contrataciones</span>
                </div>

                <div className="space-y-2">
                  <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                    Plan Curricular:
                  </h4>
                  {selectedCourseSyllabus.syllabus && selectedCourseSyllabus.syllabus.length > 0 ? (
                    selectedCourseSyllabus.syllabus.map((topic, sIdx) => (
                      <div key={sIdx} className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 flex items-start gap-2 text-xs font-medium text-slate-800">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{topic}</span>
                      </div>
                    ))
                  ) : (
                    <div className="space-y-1.5 text-xs text-slate-700">
                      <div className="p-2 rounded bg-slate-50">• Módulo 1: Marco Normativo y Planificación Inicial</div>
                      <div className="p-2 rounded bg-slate-50">• Módulo 2: Modelado Práctico con Software de Ingeniería</div>
                      <div className="p-2 rounded bg-slate-50">• Módulo 3: Casos Reales de Obra y Liquidación Final</div>
                    </div>
                  )}
                </div>
              </div>

              {/* Footer */}
              <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-2">
                <a
                  href={`https://wa.me/51966000111?text=Hola%20Grupo%20INSUR,%20deseo%20el%20brochure%20del%20curso:%20${encodeURIComponent(selectedCourseSyllabus.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Brochure WhatsApp</span>
                </a>

                <button
                  onClick={() => {
                    setSelectedCourseSyllabus(null);
                    onOpenForm();
                  }}
                  className="px-4 py-2 rounded-xl bg-[#00A3E0] hover:bg-[#0082B3] text-white font-bold text-xs flex items-center gap-1 uppercase"
                >
                  <span>Inscribirme con 10% OFF</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
