import React from 'react';
import { motion } from 'framer-motion';
import { UserCheck, Award, Briefcase, GraduationCap, CheckCircle2 } from 'lucide-react';
import { INSTRUCTORS } from '../data/mockData';

export const InstructorsSection: React.FC = () => {
  return (
    <section id="docentes" className="py-20 bg-slate-50 text-slate-900 relative overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#1559ED] text-xs font-black uppercase tracking-wider mb-3 shadow-2xs">
            <UserCheck className="w-4 h-4 text-[#1559ED]" />
            <span>PLANA DOCENTE DE PRIMER NIVEL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A2540] tracking-tight leading-none uppercase">
            Aprende de Ingenieros y Abogados Especialistas del Sector
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-3 font-medium leading-relaxed">
            Nuestra plana docente está integrada por ingenieros colegiados (CIP) y abogados especialistas en derecho de la construcción (CAL) con amplia trayectoria en la ejecución de megaproyectos y gestión pública.
          </p>
        </div>

        {/* Instructors Grid - Perfectly framed portraits without cropping */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INSTRUCTORS.map((instructor, index) => (
            <motion.div
              key={instructor.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-3xl border-2 border-slate-200 shadow-lg hover:shadow-2xl hover:border-[#1559ED]/50 transition-all overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Perfectly Framed Portrait Header (No text over face!) */}
                <div className="relative h-64 overflow-hidden bg-slate-100 flex items-center justify-center">
                  <img
                    src={instructor.avatar}
                    alt={instructor.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Official CIP / CAL Badge Chip */}
                  <div className="absolute top-3.5 right-3.5 bg-[#D92D20] text-white text-[10px] font-black px-3 py-1 rounded-full shadow-lg uppercase tracking-wider border border-white/40">
                    {instructor.cipNumber}
                  </div>
                </div>

                {/* Clear Clean Info Body Below Photo */}
                <div className="p-5 space-y-3">
                  <div>
                    <h3 className="text-base font-black text-[#0A2540] tracking-tight leading-snug group-hover:text-[#1559ED] transition-colors">
                      {instructor.name}
                    </h3>
                    <p className="text-xs text-[#1559ED] font-bold mt-0.5">
                      {instructor.degree}
                    </p>
                  </div>

                  <div className="flex items-start gap-2 text-xs font-bold text-slate-800 bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                    <Award className="w-4 h-4 text-[#1559ED] shrink-0 mt-0.5" />
                    <span className="leading-snug">{instructor.role}</span>
                  </div>

                  <div className="flex items-start gap-2 text-xs text-slate-600 font-medium">
                    <Briefcase className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                    <span>{instructor.specialty}</span>
                  </div>

                  <div className="flex items-start gap-2 text-[11px] text-slate-500 font-semibold bg-blue-50/50 p-2.5 rounded-xl border border-blue-100">
                    <GraduationCap className="w-3.5 h-3.5 text-[#1559ED] shrink-0 mt-0.5" />
                    <span>{instructor.experience}</span>
                  </div>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="p-3.5 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-[11px] font-bold text-slate-600">
                <span className="flex items-center gap-1.5 text-emerald-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Docente Certificado
                </span>
                <span className="text-[#1559ED] font-black uppercase text-[10px]">Grupo INSUR</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
