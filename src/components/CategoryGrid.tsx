import React from 'react';
import { motion } from 'framer-motion';
import { HardHat, Droplets, Building2, Landmark, Mountain, ArrowRight } from 'lucide-react';

interface CategoryGridProps {
  onSelectCategory: (categoryId: string) => void;
}

export const CategoryGrid: React.FC<CategoryGridProps> = ({ onSelectCategory }) => {
  const schools = [
    {
      id: 'ingenieria-civil',
      name: 'Ingeniería Civil',
      icon: <HardHat className="w-5 h-5 text-white" />,
      image: '/assets/course_residencia.jpg',
      badge: 'Residencia & Obras'
    },
    {
      id: 'ingenieria-hidraulica',
      name: 'Ingeniería Hidráulica',
      icon: <Droplets className="w-5 h-5 text-white" />,
      image: '/assets/school_hidraulica.jpg',
      badge: 'Presas & Canales'
    },
    {
      id: 'estructuras-bim',
      name: 'Estructuras & BIM',
      icon: <Building2 className="w-5 h-5 text-white" />,
      image: '/assets/course_estructuras.jpg',
      badge: 'ETABS & Revit 5D'
    },
    {
      id: 'gestion-gubernamental',
      name: 'Gestión OSCE',
      icon: <Landmark className="w-5 h-5 text-white" />,
      image: '/assets/school_gestion.jpg',
      badge: 'Licitaciones & Ley'
    },
    {
      id: 'ingenieria-minas',
      name: 'Ingeniería de Minas',
      icon: <Mountain className="w-5 h-5 text-white" />,
      image: '/assets/school_minas.jpg',
      badge: 'Geotecnia & SSOMA'
    }
  ];

  return (
    <section id="escuelas" className="py-12 sm:py-14 bg-[#FAFBFC] text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Compact Title */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="text-2xl sm:text-3xl font-black text-[#0A2540] uppercase tracking-tight">
            NUESTRAS ESCUELAS
          </h2>
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mt-1">
            Selecciona tu especialidad
          </p>
        </div>

        {/* 5 Compact Visual Image Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4">
          {schools.map((school, index) => (
            <motion.div
              key={school.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ y: -6 }}
              onClick={() => onSelectCategory(school.id)}
              className="relative h-56 sm:h-64 rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-slate-200 cursor-pointer group flex flex-col justify-between p-3.5 text-white"
            >
              {/* Background Image with Zoom */}
              <img
                src={school.image}
                alt={school.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-transparent" />

              {/* Top Icon */}
              <div className="relative z-10 p-2 rounded-xl bg-slate-900/80 backdrop-blur-md w-fit border border-slate-700">
                {school.icon}
              </div>

              {/* Bottom Info */}
              <div className="relative z-10 space-y-1">
                <span className="text-[9px] font-black text-cyan-300 uppercase block tracking-wider">
                  {school.badge}
                </span>
                <h3 className="text-sm font-black text-white leading-tight">
                  {school.name}
                </h3>
                <div className="pt-1 flex items-center gap-1 text-[10px] font-bold text-[#00A3E0] group-hover:underline">
                  <span>Ver Cursos</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
