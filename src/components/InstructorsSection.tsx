import React from 'react';
import { motion } from 'framer-motion';
import { INSTRUCTORS } from '../data/mockData';

export const InstructorsSection: React.FC = () => {
  return (
    <section id="docentes" className="py-8 sm:py-14 bg-white text-slate-900 relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Clean Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-black text-[#0A2540] tracking-tight uppercase">
            PLANA DOCENTE ESPECIALISTA
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1 font-medium">
            Ingenieros y abogados colegiados activos en el sector público y privado.
          </p>
        </div>

        {/* Instructors Grid - Pure Clean Design, Zero Boxes Under Text */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {INSTRUCTORS.map((instructor, index) => (
            <motion.div
              key={instructor.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center space-y-3 group"
            >
              {/* Photo with Clean Natural Rounded Corners */}
              <div className="w-full aspect-[4/5] sm:h-64 rounded-2xl overflow-hidden bg-slate-100 shadow-sm border border-slate-200 group-hover:border-[#00A3E0] transition-colors">
                <img
                  src={instructor.avatar}
                  alt={instructor.name}
                  className="w-full h-full object-cover object-top group-hover:scale-103 transition-transform duration-500"
                />
              </div>

              {/* Direct Clean Typography - Zero Boxes */}
              <div className="space-y-0.5 px-1">
                <h3 className="text-sm sm:text-base font-bold text-[#0A2540] leading-snug">
                  {instructor.name}
                </h3>
                <p className="text-xs font-semibold text-[#00A3E0]">
                  {instructor.cipNumber}
                </p>
                <p className="text-[11px] sm:text-xs text-slate-500 font-medium leading-tight pt-0.5">
                  {instructor.degree}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
