import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FEATURED_COURSES } from '../data/mockData';
import type { Course } from '../types';
import { BookOpen, Clock, Laptop, ArrowRight, X, Award, CheckCircle2 } from 'lucide-react';

interface CourseCatalogProps {
  onSelectCourse: (courseTitle: string) => void;
}

export const CourseCatalog = ({ onSelectCourse }: CourseCatalogProps) => {
  const [activeTab, setActiveTab] = useState<'all' | 'diplomado' | 'tecnico' | 'ingenieria'>('all');
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const filteredCourses = activeTab === 'all' 
    ? FEATURED_COURSES 
    : FEATURED_COURSES.filter(c => c.category === activeTab);

  return (
    <section id="catalogo" className="py-24 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Scroll Reveal */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-5"
        >
          <div>
            <span className="px-3.5 py-1 rounded bg-[#D92D20] text-white text-[11px] font-extrabold uppercase tracking-wider shadow-sm">
              CONVOCATORIA Y ESPECIALIZACIONES 2026
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A2540] tracking-tight mt-1">
              Catálogo de Programas 2026
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 p-1.5 rounded-xl bg-slate-100 border border-slate-200">
            {[
              { id: 'all', label: 'Todos' },
              { id: 'diplomado', label: 'Diplomados' },
              { id: 'tecnico', label: 'Técnicos' },
              { id: 'ingenieria', label: 'Ingeniería' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 rounded-lg font-bold text-xs transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-[#0A2540] text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Course Cards Grid with Motion AnimatePresence */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredCourses.map((course) => (
              <motion.div
                layout
                key={course.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="clean-card rounded-2xl p-6 border border-slate-200 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  
                  {/* Category Pill & Rating Badge */}
                  <div className="flex flex-wrap items-center justify-between gap-1.5 text-xs">
                    <span className="px-2.5 py-0.5 rounded bg-slate-100 text-[#0A2540] font-bold uppercase text-[10px] tracking-wider border border-slate-200">
                      {course.category}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-bold border border-slate-200">
                      Puntaje: {course.rating}/5.0 ({course.students} alumnos)
                    </span>
                  </div>

                  {/* Course Title */}
                  <h3 className="text-lg font-bold text-[#0A2540] leading-snug">
                    {course.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {course.description}
                  </p>

                  {/* Modality Metrics */}
                  <div className="pt-3 border-t border-slate-100 grid grid-cols-2 gap-2 text-[11px] text-slate-600 font-semibold">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#00A3E0]" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Laptop className="w-3.5 h-3.5 text-[#00A3E0]" />
                      <span>{course.modality}</span>
                    </div>
                  </div>

                </div>

                {/* Card CTA Actions */}
                <div className="pt-5 flex gap-2">
                  <button
                    onClick={() => setSelectedCourse(course)}
                    className="flex-1 py-2.5 px-3 rounded-lg bg-slate-100 hover:bg-slate-200 text-[#0A2540] font-bold text-xs transition-colors flex items-center justify-center gap-1 border border-slate-200 cursor-pointer"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Syllabus</span>
                  </button>

                  <button
                    onClick={() => onSelectCourse(course.title)}
                    className="flex-1 py-2.5 px-3 rounded-lg bg-[#00529B] hover:bg-[#0A2540] text-white font-bold text-xs transition-colors flex items-center justify-center gap-1 cursor-pointer shadow-sm active:scale-95"
                  >
                    <span>Inscribirse</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Course Detail Modal */}
      <AnimatePresence>
        {selectedCourse && (
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
                onClick={() => setSelectedCourse(null)}
                className="absolute top-4 right-4 p-1.5 rounded-lg bg-slate-100 text-slate-500 hover:text-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#0A2540] text-white flex items-center justify-center font-bold">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-extrabold text-[#00A3E0] uppercase tracking-wider">Malla Académica Oficial</span>
                  <h3 className="text-xl font-extrabold text-[#0A2540]">{selectedCourse.title}</h3>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="text-xs font-extrabold text-[#0A2540] uppercase">Módulos del Programa:</h4>
                <div className="grid grid-cols-1 gap-2">
                  {selectedCourse.syllabus.map((module, i) => (
                    <div key={i} className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 flex items-center gap-2 text-xs font-semibold text-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-[#00A3E0] shrink-0" />
                      <span>{module}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => {
                    const title = selectedCourse.title;
                    setSelectedCourse(null);
                    onSelectCourse(title);
                  }}
                  className="flex-1 py-3 rounded-lg bg-[#00529B] hover:bg-[#0A2540] text-white font-extrabold text-xs tracking-wider transition-colors shadow-md"
                >
                  OBTENER DESCUENTO EN ESTE CURSO
                </button>
                <button
                  onClick={() => setSelectedCourse(null)}
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
