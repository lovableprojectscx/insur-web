import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Star, Users, BookOpen, ArrowRight, Award, Phone, Calendar, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { FEATURED_COURSES } from '../data/mockData';
import type { Course } from '../types';

interface CourseCatalogProps {
  onOpenForm: () => void;
}

export const CourseCatalog: React.FC<CourseCatalogProps> = ({ onOpenForm }) => {
  const [activeCategory, setActiveCategory] = useState<string>('todos');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCourseSyllabus, setSelectedCourseSyllabus] = useState<Course | null>(null);

  const filteredCourses = FEATURED_COURSES.filter((course) => {
    const matchesCategory = activeCategory === 'todos' || course.category === activeCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          course.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="catalogo" className="py-20 bg-slate-50 text-slate-900 relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title with PPT Slide-in reveal */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#00A3E0] text-xs font-black uppercase tracking-wider mb-2">
            <BookOpen className="w-4 h-4 text-[#00A3E0]" />
            <span>CATÁLOGO ACADÉMICO CONVOCATORIA 2026</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A2540] tracking-tight uppercase">
            PROGRAMAS Y DIPLOMADOS
          </h2>
          
          <p className="text-xs sm:text-sm text-slate-500 mt-2 font-medium">
            Formación especializada con clases virtuales en vivo, campus 24/7 y certificación oficial verificable con código QR.
          </p>
        </motion.div>

        {/* Filter Controls: Search & Category Tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-10 space-y-4"
        >
          
          {/* Search Input Bar */}
          <div className="max-w-xl mx-auto relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar curso (ej. Residencia, BIM, SAP2000, Topografía, Calidad)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white border border-slate-300 text-slate-900 placeholder-slate-400 text-xs font-semibold shadow-xs focus:outline-none focus:border-[#00A3E0] focus:ring-2 focus:ring-[#00A3E0]/20 transition-all"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-slate-600"
              >
                Limpiar
              </button>
            )}
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center justify-center gap-2 flex-wrap pt-2">
            {[
              { id: 'todos', label: 'Todos los Programas' },
              { id: 'diplomado', label: 'Diplomados Ejecutivos' },
              { id: 'tecnico', label: 'Carreras Técnicas' },
              { id: 'ingenieria', label: 'Ingeniería & Obras' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-4 py-2.5 rounded-xl text-xs font-black transition-all cursor-pointer ${
                  activeCategory === tab.id
                    ? 'bg-[#0A2540] text-white shadow-md scale-102 border border-slate-700'
                    : 'bg-white text-slate-700 border border-slate-300 hover:bg-slate-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Visual Course Cards Grid with High-Quality Cover Images & PPT Reveal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          <AnimatePresence mode="popLayout">
            {filteredCourses.map((course, index) => (
              <motion.div
                key={course.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: (index % 3) * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-3xl border border-slate-200 shadow-md hover:shadow-xl hover:border-[#00A3E0]/60 transition-all overflow-hidden flex flex-col justify-between group"
              >
                <div>
                  {/* Photo Header */}
                  <div className="relative h-48 overflow-hidden bg-slate-900">
                    <img
                      src={course.image || '/assets/course_residencia.jpg'}
                      alt={course.title}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540] via-[#0A2540]/30 to-transparent"></div>
                    
                    {/* Top Badges */}
                    <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between gap-2">
                      <span className="bg-[#D92D20] text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                        {course.badgeTag || 'CONVOCATORIA 2026'}
                      </span>
                      <span className="bg-[#00A3E0] text-slate-950 text-[10px] font-black px-2.5 py-1 rounded-md uppercase tracking-wider shadow-md">
                        {course.hours || 120} HRS
                      </span>
                    </div>

                    {/* Bottom Category Pill on Image */}
                    <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between text-white text-[11px] font-bold">
                      <span className="bg-[#0A2540]/90 backdrop-blur-md px-2.5 py-1 rounded-md border border-slate-700 text-cyan-300">
                        {course.category === 'diplomado' ? 'Diplomado' : course.category === 'tecnico' ? 'Carrera Técnica' : 'Especialización'}
                      </span>
                      {course.startDate && (
                        <span className="flex items-center gap-1 text-slate-200 bg-slate-900/80 px-2 py-0.5 rounded text-[10px]">
                          <Calendar className="w-3 h-3 text-[#00A3E0]" />
                          {course.startDate.replace('Inicio: ', '')}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Course Body Info */}
                  <div className="p-5 space-y-3">
                    
                    {/* Title */}
                    <h3 className="text-base font-black tracking-tight leading-snug text-[#0A2540] group-hover:text-[#00A3E0] transition-colors">
                      {course.title}
                    </h3>

                    {/* Instructor Badge */}
                    {course.instructorName && (
                      <div className="flex items-center gap-2 text-xs font-bold text-[#0A2540] bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                        <Award className="w-4 h-4 text-[#00A3E0] shrink-0" />
                        <span className="truncate">{course.instructorName}</span>
                      </div>
                    )}

                    <p className="text-xs text-slate-500 font-medium leading-relaxed line-clamp-2">
                      {course.description}
                    </p>

                    {/* Metrics Row: Rating, Students */}
                    <div className="grid grid-cols-2 gap-2 pt-1 text-[11px] font-bold text-slate-700">
                      <div className="flex items-center gap-1.5 bg-slate-50 p-2 rounded-lg border border-slate-200">
                        <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                        <span>{course.rating} (Excelente)</span>
                      </div>
                      <div className="flex items-center gap-1.5 bg-slate-50 p-2 rounded-lg border border-slate-200">
                        <Users className="w-3.5 h-3.5 text-[#00A3E0]" />
                        <span>{course.students} inscritos</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Footer: Price and CTAs */}
                <div className="p-5 bg-slate-50 border-t border-slate-200 space-y-3">
                  
                  {/* Price Tag Row */}
                  <div className="flex items-center justify-between">
                    <div>
                      {course.originalPrice && (
                        <span className="text-[10px] text-slate-400 line-through font-bold block">
                          S/ {course.originalPrice}
                        </span>
                      )}
                      <div className="flex items-baseline gap-1">
                        <span className="text-lg font-black text-[#0A2540]">
                          S/ {course.price || 350}
                        </span>
                        <span className="text-[10px] font-black text-[#00A3E0] uppercase">
                          • 10% OFF
                        </span>
                      </div>
                    </div>

                    {/* Temario Syllabus Button */}
                    <button
                      onClick={() => setSelectedCourseSyllabus(course)}
                      className="text-xs font-bold text-slate-600 hover:text-[#00A3E0] underline flex items-center gap-1 cursor-pointer"
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>Ver Temario</span>
                    </button>
                  </div>

                  {/* Direct Action Enrollment Button */}
                  <button
                    onClick={onOpenForm}
                    className="w-full py-3 rounded-xl bg-[#0A2540] hover:bg-[#00A3E0] text-white font-black text-xs uppercase tracking-wider shadow-md hover:shadow-cyan-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                  >
                    <span>Inscribirme con 10% OFF</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>

      {/* Syllabus Modal Popup */}
      <AnimatePresence>
        {selectedCourseSyllabus && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm animate-in fade-in"
            onClick={() => setSelectedCourseSyllabus(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg rounded-3xl bg-white text-slate-900 shadow-2xl border-2 border-slate-200 overflow-hidden max-h-[85vh] flex flex-col"
            >
              {/* Modal Top Header */}
              <div className="p-6 bg-[#0A2540] text-white flex items-start justify-between">
                <div>
                  <span className="text-[10px] font-black text-cyan-300 uppercase tracking-widest block mb-1">
                    TEMARIO Y PLAN ACADÉMICO OFICIAL
                  </span>
                  <h3 className="text-lg font-black leading-snug">
                    {selectedCourseSyllabus.title}
                  </h3>
                  <p className="text-xs text-slate-300 mt-1">
                    Duración: {selectedCourseSyllabus.hours || 120} horas lectivas • {selectedCourseSyllabus.duration}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedCourseSyllabus(null)}
                  className="p-1 rounded-full bg-slate-800 text-slate-300 hover:text-white"
                >
                  ✕
                </button>
              </div>

              {/* Modules List Scrollable */}
              <div className="p-6 overflow-y-auto space-y-4">
                <div className="bg-blue-50 p-3 rounded-xl border border-blue-200 flex items-center gap-2 text-xs font-bold text-[#0A2540]">
                  <ShieldCheck className="w-4 h-4 text-[#00A3E0] shrink-0" />
                  <span>Acreditado bajo norma CIP y Ley de Contrataciones del Estado</span>
                </div>

                <div className="space-y-2.5">
                  <h4 className="text-xs font-black text-slate-800 uppercase tracking-wide">
                    Estructura Curricular del Programa:
                  </h4>
                  {selectedCourseSyllabus.syllabus && selectedCourseSyllabus.syllabus.length > 0 ? (
                    selectedCourseSyllabus.syllabus.map((topic, sIdx) => (
                      <div key={sIdx} className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5 text-xs font-bold text-[#0A2540]">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{topic}</span>
                      </div>
                    ))
                  ) : (
                    <div className="space-y-2">
                      <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold text-slate-700">
                        • Módulo 1: Marco Normativo, Reglamento y Planificación Inicial
                      </div>
                      <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold text-slate-700">
                        • Módulo 2: Modelado Práctico con Software de Ingeniería
                      </div>
                      <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold text-slate-700">
                        • Módulo 3: Casos Reales de Obra, Valorizaciones y Liquidación Final
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Modal Footer CTA */}
              <div className="p-5 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-3">
                <a
                  href={`https://wa.me/51966000111?text=Hola%20Grupo%20INSUR,%20deseo%20el%20brochure%20completo%20del%20curso:%20${encodeURIComponent(selectedCourseSyllabus.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-black text-xs flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Brochure WhatsApp</span>
                </a>

                <button
                  onClick={() => {
                    setSelectedCourseSyllabus(null);
                    onOpenForm();
                  }}
                  className="px-5 py-2.5 rounded-xl bg-[#00A3E0] hover:bg-[#0082B3] text-white font-black text-xs flex items-center gap-1.5 uppercase shadow-md"
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
