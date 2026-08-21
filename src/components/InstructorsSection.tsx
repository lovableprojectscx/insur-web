import React from 'react';
import { motion } from 'framer-motion';
import { UserCheck, Award, Briefcase, GraduationCap, CheckCircle2 } from 'lucide-react';
import { INSTRUCTORS } from '../data/mockData';

export const InstructorsSection: React.FC = () => {
  return (
    <section id="docentes" className="py-16 bg-slate-50 text-slate-900 relative overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-200 text-[#00529B] text-xs font-black uppercase tracking-wider mb-3 shadow-2xs">
            <UserCheck className="w-4 h-4 text-[#00529B]" />
            <span>PLANA DOCENTE DE PRIMER NIVEL</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0A2540] tracking-tight leading-tight">
            Aprende de Ingenieros y Consultores Activos del Sector
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2.5 font-medium leading-relaxed">
            Nuestra plana docente está integrada por ingenieros colegiados y consultores senior con amplia experiencia en la ejecución de megaproyectos viales, residencia de obras y gestión pública.
          </p>
        </div>

        {/* Instructors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INSTRUCTORS.map((instructor, index) => (
            <motion.div
              key={instructor.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-2xl border-2 border-slate-200 shadow-lg hover:shadow-xl hover:border-[#00529B]/40 transition-all overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Avatar Banner Header */}
                <div className="relative h-44 overflow-hidden bg-slate-100">
                  <img
                    src={instructor.avatar}
                    alt={instructor.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/90 via-transparent to-transparent"></div>
                  
                  {/* CIP Badge Chip */}
                  <div className="absolute top-3 right-3 bg-[#D92D20] text-white text-[10px] font-black px-2.5 py-1 rounded-md shadow-md uppercase tracking-wider">
                    {instructor.cipNumber}
                  </div>

                  {/* Instructor Name on Banner */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <h3 className="text-sm font-black tracking-tight leading-snug drop-shadow-sm">
                      {instructor.name}
                    </h3>
                    <p className="text-[11px] text-cyan-300 font-semibold truncate">
                      {instructor.degree}
                    </p>
                  </div>
                </div>

                {/* Details Body */}
                <div className="p-4 space-y-3">
                  <div className="flex items-start gap-2 text-xs font-bold text-[#0A2540]">
                    <Award className="w-4 h-4 text-[#00529B] shrink-0 mt-0.5" />
                    <span>{instructor.role}</span>
                  </div>

                  <div className="flex items-start gap-2 text-xs text-slate-600 font-medium">
                    <Briefcase className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                    <span>{instructor.specialty}</span>
                  </div>

                  <div className="flex items-start gap-2 text-[11px] text-slate-500 font-semibold bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                    <GraduationCap className="w-3.5 h-3.5 text-[#00A3E0] shrink-0 mt-0.5" />
                    <span>{instructor.experience}</span>
                  </div>
                </div>
              </div>

              {/* Bottom Guarantee */}
              <div className="p-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-500 font-bold">
                <span className="flex items-center gap-1 text-emerald-700">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Docente Certificado
                </span>
                <span className="text-[#00529B] uppercase font-black">Grupo INSUR</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
