import { motion } from 'framer-motion';
import { TESTIMONIALS } from '../data/mockData';
import { Quote, CheckCircle } from 'lucide-react';

export const Testimonials = () => {
  return (
    <section id="testimonios" className="py-24 bg-slate-100 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Scroll Reveal */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-3"
        >
          <span className="px-3.5 py-1 rounded bg-[#D92D20] text-white text-[11px] font-extrabold uppercase tracking-wider shadow-sm">
            CASOS DE ÉXITO Y EGRESADOS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A2540] tracking-tight">
            Lo que Dicen Nuestros Egresados
          </h2>
          <p className="text-sm text-slate-600 font-medium leading-relaxed">
            Miles de ingenieros, arquitectos y profesionales en todo el Perú han impulsado sus carreras con las certificaciones virtuales de Grupo INSUR.
          </p>
        </motion.div>

        {/* Testimonials Grid with Staggered Scroll Animations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testi, index) => (
            <motion.div
              key={testi.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-7 border border-slate-200 shadow-md flex flex-col justify-between relative group"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-slate-200 fill-current group-hover:text-[#00529B]/20 transition-colors" />

              <div className="space-y-3.5">
                {/* Score Badge */}
                <div className="inline-block px-2.5 py-0.5 rounded bg-amber-50 text-amber-700 border border-amber-200 text-[11px] font-bold">
                  Evaluación: {testi.rating}.0 / 5.0
                </div>

                {/* Comment */}
                <p className="text-xs text-slate-700 leading-relaxed font-normal">
                  "{testi.comment}"
                </p>

                {/* Program Tag */}
                <div className="inline-block px-3 py-1 rounded bg-slate-100 text-[11px] font-bold text-[#00529B]">
                  {testi.program}
                </div>
              </div>

              {/* Author Profile */}
              <div className="pt-5 mt-5 border-t border-slate-100 flex items-center gap-3.5">
                <img
                  src={testi.avatar}
                  alt={testi.name}
                  className="w-10 h-10 rounded-full object-cover border border-slate-300"
                />
                <div>
                  <h4 className="text-xs font-bold text-[#0A2540] flex items-center gap-1">
                    <span>{testi.name}</span>
                    <CheckCircle className="w-3.5 h-3.5 text-[#00A3E0]" />
                  </h4>
                  <p className="text-[11px] text-slate-500 font-medium">{testi.role} - <span className="text-[#00529B] font-semibold">{testi.company}</span></p>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
