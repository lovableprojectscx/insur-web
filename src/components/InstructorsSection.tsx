import React from 'react';
import { motion } from 'framer-motion';
import { UserCheck, Award, CheckCircle2 } from 'lucide-react';
import { INSTRUCTORS } from '../data/mockData';

export const InstructorsSection: React.FC = () => {
  return (
    <section id="docentes" className="py-16 sm:py-20 bg-slate-50 text-slate-900 relative overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#1559ED] text-xs font-black uppercase tracking-wider mb-2">
            <UserCheck className="w-4 h-4 text-[#1559ED]" />
            <span>PLANA DOCENTE DESTACADA</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A2540] tracking-tight uppercase">
            Ingenieros y Abogados Especialistas
          </h2>
        </div>

        {/* Instructors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INSTRUCTORS.map((instructor, index) => (
            <motion.div
              key={instructor.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-3xl border border-slate-200 shadow-md hover:shadow-xl transition-all overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Photo */}
                <div className="relative h-64 overflow-hidden bg-slate-100 flex items-center justify-center">
                  <img
                    src={instructor.avatar}
                    alt={instructor.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* CIP / CAL Badge */}
                  <div className="absolute top-3.5 right-3.5 bg-[#D92D20] text-white text-[10px] font-black px-3 py-1 rounded-full shadow-md uppercase">
                    {instructor.cipNumber}
                  </div>
                </div>

                {/* Info Body */}
                <div className="p-5 space-y-2 text-center">
                  <h3 className="text-base font-black text-[#0A2540] tracking-tight leading-snug group-hover:text-[#1559ED] transition-colors">
                    {instructor.name}
                  </h3>
                  <p className="text-xs text-[#1559ED] font-bold">
                    {instructor.degree}
                  </p>

                  <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 bg-slate-50 px-3 py-1.5 rounded-xl border border-slate-200 mt-1">
                    <Award className="w-3.5 h-3.5 text-[#1559ED]" />
                    <span>{instructor.role}</span>
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-3 bg-slate-50 border-t border-slate-200 flex items-center justify-center text-[11px] font-bold text-emerald-700">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Docente Acreditado
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
