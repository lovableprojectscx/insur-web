import React from 'react';
import { motion } from 'framer-motion';
import { HardHat, Droplets, Building2, Landmark, Mountain, ArrowRight, Award } from 'lucide-react';

interface CategoryGridProps {
  onSelectCategory: (categoryId: string) => void;
}

export const CategoryGrid: React.FC<CategoryGridProps> = ({ onSelectCategory }) => {
  const schools = [
    {
      id: 'ingenieria-civil',
      name: 'Ingeniería Civil',
      icon: <HardHat className="w-5 h-5 text-[#1559ED]" />,
      badgeColor: 'bg-[#1559ED]',
      image: '/assets/category_ingenieria.jpg',
      programs: 'Residencia, Obras Civiles & Costos'
    },
    {
      id: 'ingenieria-hidraulica',
      name: 'Ingeniería Hidráulica',
      icon: <Droplets className="w-5 h-5 text-cyan-600" />,
      badgeColor: 'bg-cyan-600',
      image: '/assets/category_diplomados.jpg',
      programs: 'Saneamiento, Canales & Presas'
    },
    {
      id: 'estructuras-bim',
      name: 'Estructuras y BIM',
      icon: <Building2 className="w-5 h-5 text-[#0A2540]" />,
      badgeColor: 'bg-[#0A2540]',
      image: '/assets/category_tecnicos.jpg',
      programs: 'SAP2000, ETABS & Revit 5D'
    },
    {
      id: 'gestion-gubernamental',
      name: 'Gestión Gubern.',
      icon: <Landmark className="w-5 h-5 text-indigo-600" />,
      badgeColor: 'bg-indigo-600',
      image: '/assets/why_us_accreditation.jpg',
      programs: 'OSCE, Invierte.pe & Obras por Impuestos'
    },
    {
      id: 'ingenieria-minas',
      name: 'Ingeniería de Minas',
      icon: <Mountain className="w-5 h-5 text-[#D92D20]" />,
      badgeColor: 'bg-[#D92D20]',
      image: '/assets/why_us_campus.jpg',
      programs: 'Seguridad SST, Geotecnia & Vías'
    }
  ];

  return (
    <section id="escuelas" className="py-20 bg-[#FAFBFC] text-slate-900 relative overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* CERSA-Style Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A2540] tracking-tight leading-none uppercase">
            NUESTRAS ESCUELAS
          </h2>
          <p className="text-xs sm:text-sm font-black text-slate-400 mt-2 uppercase tracking-widest">
            ESPECIALÍZATE CON NOSOTROS
          </p>
        </div>

        {/* CERSA-Style Schools Layout: 5 Narrow Vertical Image Cards + Right Engineer Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left: 5 Narrow Vertical Cards Container */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3.5 items-stretch">
            {schools.map((school, index) => (
              <motion.div
                key={school.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                onClick={() => onSelectCategory(school.id)}
                className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 cursor-pointer group min-h-[340px] flex flex-col justify-end p-4 bg-slate-900 text-white"
              >
                {/* Background Image with Blue Monochrome Overlay like CERSA */}
                <img
                  src={school.image}
                  alt={school.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-70 mix-blend-overlay"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540] via-[#0A2540]/60 to-transparent"></div>

                {/* Top Icon Badge */}
                <div className="absolute top-4 left-4 p-2.5 rounded-xl bg-white shadow-md border border-slate-200 group-hover:scale-110 transition-transform">
                  {school.icon}
                </div>

                {/* Bottom School Name Label */}
                <div className="relative z-10 space-y-1">
                  <span className={`inline-block text-[9px] font-black text-white px-2 py-0.5 rounded uppercase tracking-wider mb-1 ${school.badgeColor}`}>
                    ESCUELA
                  </span>
                  <h3 className="text-sm font-black text-white leading-tight tracking-tight group-hover:text-cyan-300 transition-colors">
                    {school.name}
                  </h3>
                  <p className="text-[10px] text-slate-300 font-medium leading-tight line-clamp-2">
                    {school.programs}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right: Feature Banner with Orange Hardhat Engineer holding Tablet (Matching CERSA Screenshot 2!) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="lg:col-span-4 bg-white rounded-3xl border-2 border-slate-200 shadow-xl overflow-hidden p-6 flex flex-col justify-between relative group"
          >
            {/* Top Tag */}
            <div className="flex items-center justify-between mb-4">
              <span className="bg-amber-100 text-amber-900 border border-amber-300 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider">
                CERTIFICACIÓN CONVALIDABLE
              </span>
              <Award className="w-5 h-5 text-[#1559ED]" />
            </div>

            {/* Title & Subtitle */}
            <div className="mb-4">
              <h3 className="text-xl font-black text-[#0A2540] tracking-tight leading-snug">
                Formación Práctica de Nivel Ejecutivo
              </h3>
              <p className="text-xs text-slate-600 font-medium mt-1">
                Aprende con instructores colegiados y domina las herramientas tecnológicas que exige la industria actual.
              </p>
            </div>

            {/* Engineer Photo in Orange Vest Holding Tablet (Matching CERSA Screenshot 2!) */}
            <div className="relative my-2 rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 shadow-md">
              <img
                src="/assets/engineer_orange.jpg"
                alt="Ingeniero Residente Grupo INSUR en chaleco naranja y casco"
                className="w-full h-64 sm:h-72 object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/80 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-3 left-3 right-3 text-white text-xs font-black">
                <span className="bg-[#1559ED] px-2 py-0.5 rounded text-[10px] font-black uppercase mr-2">DOCENTES CIP</span>
                Ingenieros Activos en Obras
              </div>
            </div>

            {/* Action CTA Button */}
            <button
              onClick={() => onSelectCategory('ingenieria-civil')}
              className="mt-4 w-full py-3.5 px-4 rounded-2xl bg-[#1559ED] hover:bg-blue-800 text-white font-black text-xs uppercase tracking-wider shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
            >
              <span>Ver Todos los Programas de Escuela</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
