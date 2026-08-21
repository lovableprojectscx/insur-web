import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Star, Users, BookOpen, ArrowRight, Award, CheckCircle2, Phone, Calendar, Download, ShieldCheck } from 'lucide-react';
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
    <section id="catalogo" className="py-20 bg-slate-50 text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#1559ED] text-xs font-black uppercase tracking-wider mb-3">
            <BookOpen className="w-4 h-4 text-[#1559ED]" />
            <span>CATÁLOGO ACADÉMICO CONVOCATORIA 2026</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A2540] tracking-tight leading-none uppercase">
            PROGRAMAS Y DIPLOMADOS
          </h2>
          
          <p className="text-xs sm:text-sm text-slate-600 mt-2.5 font-medium">
            Formación especializada con clases virtuales en vivo, campus 24/7 y certificación oficial universitaria verificable con código QR.
          </p>
        </div>

        {/* Filter Controls: Search & Category Tabs */}
        <div className="mb-10 space-y-4">
          
          {/* Instant Search Input Bar */}
          <div className="max-w-xl mx-auto relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar curso (ej. Residencia, BIM, SAP2000, Topografía, Calidad)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white border-2 border-slate-200 text-slate-900 placeholder-slate-400 text-xs font-semibold shadow-xs focus:outline-none focus:border-[#1559ED] focus:ring-2 focus:ring-[#1559ED]/20 transition-all"
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
                className={`px-4 py-2.5 rounded-xl text-xs font-black transition-all cursor-pointer shadow-2xs ${
                  activeCategory === tab.id
                    ? 'bg-[#1559ED] text-white shadow-md scale-105'
                    : 'bg-white text-slate-700 border border-slate-300 hover:bg-slate-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Visual Course Cards Grid with High-Quality Cover Images! */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredCourses.map((course, index) => (
              <motion.div
                key={course.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-3xl border-2 border-slate-200 shadow-lg hover:shadow-2xl hover:border-[#1559ED]/50 transition-all overflow-hidden flex flex-col justify-between group"
              >
                <div>
                  {/* High-Resolution Course Cover Image with Badges */}
                  <div className="relative h-52 overflow-hidden bg-slate-900">
                    <img
                      src={course.image || '/assets/category_ingenieria.jpg'}
                      alt={course.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540] via-[#0A2540]/30 to-transparent"></div>
                    
                    {/* Top Badges */}
                    <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between gap-2">
                      <span className="bg-[#D92D20] text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                        {course.badgeTag || 'CONVOCATORIA 2026'}
                      </span>
                      <span className="bg-[#00A3E0] text-slate-950 text-[10px] font-black px-2.5 py-1 rounded-md uppercase tracking-wider shadow-md">
                        {course.hours} HRS
                      </span>
                    </div>

                    {/* Bottom Category Pill on Image */}
                    <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between text-white text-[11px] font-bold">
                      <span className="bg-[#061828]/90 backdrop-blur-md px-2.5 py-1 rounded-md border border-slate-700 text-cyan-300">
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
                  <div className="p-5 space-y-3.5">
                    
                    {/* Title */}
                    <h3 className="text-base font-black tracking-tight leading-snug text-[#0A2540] group-hover:text-[#1559ED] transition-colors">
                      {course.title}
                    </h3>

                    {/* Instructor Badge */}
                    {course.instructorName && (
                      <div className="flex items-center gap-2 text-xs font-bold text-[#1559ED] bg-blue-50/60 p-2.5 rounded-xl border border-blue-100">
                        <Award className="w-4 h-4 text-[#1559ED] shrink-0" />
                        <span className="truncate">{course.instructorName}</span>
                      </div>
                    )}

                    <p className="text-xs text-slate-600 font-medium leading-relaxed line-clamp-2">
                      {course.description}
                    </p>

                    {/* Metrics Row: Rating, Students */}
                    <div className="grid grid-cols-2 gap-2 pt-1 text-[11px] font-bold text-slate-700">
                      <div className="flex items-center gap-1.5 bg-slate-50 p-2 rounded-lg border border-slate-200">
                        <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                        <span>{course.rating} / 5.0</span>
                      </div>
                      <div className="flex items-center gap-1.5 bg-slate-50 p-2 rounded-lg border border-slate-200">
                        <Users className="w-3.5 h-3.5 text-[#1559ED]" />
                        <span>+{course.students} Alumnos</span>
                      </div>
                    </div>

                    {/* Benefits Included Checklist */}
                    <div className="pt-1 space-y-1.5 text-[11px] font-semibold text-slate-600">
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>Clases 100% Virtuales En Vivo + Grabaciones HD</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#1559ED] shrink-0" />
                        <span>Certificado con Código QR y Respaldo CIP</span>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="p-5 pt-0 space-y-3">
                  {/* Price Tag Row */}
                  <div className="flex items-center justify-between pt-3 border-t border-slate-200">
                    <div>
                      <span className="text-[10px] text-slate-400 line-through font-bold block">
                        Precio Regular: S/ {course.originalPrice || 500}
                      </span>
                      <span className="text-base font-black text-[#0A2540]">
                        Inversión: S/ {course.price || 450}
                      </span>
                    </div>
                    <span className="bg-emerald-100 text-emerald-800 text-[10px] font-extrabold px-2.5 py-1 rounded-md border border-emerald-200">
                      10% OFF INCLUIDO
                    </span>
                  </div>

                  {/* Buttons Grid */}
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setSelectedCourseSyllabus(course)}
                      className="py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-extrabold text-xs transition-colors flex items-center justify-center gap-1.5 border border-slate-300 cursor-pointer"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Ver Temario</span>
                    </button>

                    <button
                      onClick={onOpenForm}
                      className="py-2.5 px-3 rounded-xl bg-[#1559ED] hover:bg-blue-800 text-white font-extrabold text-xs transition-all shadow-md flex items-center justify-center gap-1.5 cursor-pointer active:scale-95"
                    >
                      <span>Inscribirme</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Direct WhatsApp Consult Link */}
                  <a
                    href={`https://wa.me/51966000111?text=Hola%20Grupo%20INSUR,%20deseo%20informaci%C3%B3n%20del%20curso:%20${encodeURIComponent(course.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-bold text-[11px] transition-colors flex items-center justify-center gap-1.5 border border-emerald-200"
                  >
                    <Phone className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Consultar por WhatsApp</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Syllabus Modal Popup */}
        <AnimatePresence>
          {selectedCourseSyllabus && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4"
              onClick={() => setSelectedCourseSyllabus(null)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className="bg-white text-slate-900 rounded-3xl max-w-lg w-full p-6 sm:p-7 shadow-2xl border-2 border-slate-200 overflow-hidden relative"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-4">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-[#1559ED]" />
                    <h3 className="font-black text-sm text-[#0A2540] uppercase tracking-wide">
                      Temario Oficial & Módulos
                    </h3>
                  </div>
                  <button
                    onClick={() => setSelectedCourseSyllabus(null)}
                    className="w-8 h-8 rounded-full bg-slate-100 text-slate-500 font-bold text-xs flex items-center justify-center hover:bg-slate-200"
                  >
                    ✕
                  </button>
                </div>

                <h4 className="font-black text-base text-[#0A2540] mb-2 leading-snug">
                  {selectedCourseSyllabus.title}
                </h4>
                <p className="text-xs text-slate-600 mb-4 font-medium">
                  {selectedCourseSyllabus.duration} • Modalidad 100% Virtual En Vivo
                </p>

                <div className="space-y-2.5 max-h-60 overflow-y-auto pr-1 mb-6">
                  {selectedCourseSyllabus.syllabus.map((item, idx) => (
                    <div key={idx} className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs font-bold text-slate-800 flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#1559ED] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => {
                      setSelectedCourseSyllabus(null);
                      onOpenForm();
                    }}
                    className="flex-1 py-3 px-4 rounded-xl bg-[#1559ED] hover:bg-blue-800 text-white font-extrabold text-xs uppercase tracking-wider shadow-md"
                  >
                    Inscribirme con 10% OFF
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
