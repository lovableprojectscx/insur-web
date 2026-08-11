import { motion } from 'framer-motion';
import { Award, Users, Laptop, Briefcase, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const WhyChooseUs = () => {
  const features = [
    {
      icon: <Award className="w-5 h-5 text-[#00A3E0]" />,
      title: "Certificación Oficial Universitaria",
      description: "Resoluciones académicas oficializadas con valor curricular para licitaciones del Estado, ascenso profesional y acreditación nacional."
    },
    {
      icon: <Users className="w-5 h-5 text-[#00A3E0]" />,
      title: "Docentes Especialistas del Sector",
      description: "Plana docente integrada por ingenieros residentes de obra, supervisores y consultores activos en los principales proyectos del Perú."
    },
    {
      icon: <Laptop className="w-5 h-5 text-[#00A3E0]" />,
      title: "Modalidad 100% Virtual En Vivo",
      description: "Estudia desde cualquier punto del país con clases en vivo HD vía Zoom interactivo, grabaciones permanentes 24/7 y material descargable."
    },
    {
      icon: <Briefcase className="w-5 h-5 text-[#00A3E0]" />,
      title: "Bolsa de Empleabilidad e Integración",
      description: "Convenios institucionales directos con empresas ejecutoras y consultoras de ingeniería a nivel nacional."
    }
  ];

  return (
    <section id="nosotros" className="py-24 lg:py-32 bg-[#0A2540] text-white relative overflow-hidden diagonal-both -mt-10">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Scroll Reveal */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-3"
        >
          <span className="px-3.5 py-1 rounded bg-[#D92D20] text-white text-[11px] font-extrabold uppercase tracking-wider shadow-sm">
            RESPALDO Y GARANTÍA INSTITUCIONAL
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            ¿Por Qué Elegir Grupo INSUR?
          </h2>
          <p className="text-sm text-slate-300 font-medium leading-relaxed">
            Especialización online de alto rendimiento diseñada para profesionales que trabajan en proyectos de ingeniería y construcción en todo el Perú.
          </p>
        </motion.div>

        {/* Structural 2-Column Composition with Scroll Reveal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Composition with Slide-in */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 relative"
          >
            
            {/* Primary Photo Card */}
            <div className="relative rounded-2xl overflow-hidden border-2 border-slate-700 shadow-2xl group">
              <img
                src="/assets/why_us_accreditation.jpg"
                alt="Certificación Oficial Universitaria Grupo INSUR"
                className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07192B] via-transparent to-transparent opacity-80"></div>
              
              {/* Badge overlay on Photo */}
              <div className="absolute bottom-4 left-4 right-4 bg-[#0A2540]/95 backdrop-blur-md p-4 rounded-xl border border-slate-700 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-white">Acreditación Oficial Universitaria</p>
                  <p className="text-[10px] text-slate-300">Resoluciones de ley válidas para licitaciones públicas</p>
                </div>
                <ShieldCheck className="w-7 h-7 text-[#00A3E0] shrink-0" />
              </div>
            </div>

            {/* Overlay Secondary Photo Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="hidden sm:block absolute -bottom-8 -right-6 w-64 rounded-2xl overflow-hidden border-2 border-[#00529B] shadow-2xl bg-[#061828] group"
            >
              <img
                src="/assets/why_us_campus.jpg"
                alt="Plataforma Campus Virtual INSUR"
                className="w-full h-44 object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="p-2.5 bg-[#061828] text-center border-t border-slate-700">
                <p className="text-[11px] font-bold text-white">Campus Virtual INSUR 24/7</p>
              </div>
            </motion.div>

          </motion.div>

          {/* Right Column: Feature Cards with Staggered Slide-in */}
          <div className="lg:col-span-6 space-y-4">
            {features.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                whileHover={{ x: 6 }}
                className="p-5 rounded-xl bg-[#061828] border border-slate-700/80 hover:border-[#00529B] transition-all space-y-2 group cursor-default"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#0A2540] border border-slate-700 flex items-center justify-center shrink-0 group-hover:bg-[#00529B] group-hover:text-white transition-colors">
                    {item.icon}
                  </div>
                  <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed font-normal pl-12">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Bottom Banner with Scroll Reveal */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 p-6 sm:p-8 rounded-2xl bg-[#00529B] border border-cyan-500/30 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden"
        >
          <div className="flex items-center gap-4 text-left z-10">
            <div className="w-12 h-12 rounded-xl bg-[#0A2540] text-white flex items-center justify-center font-bold text-xl shrink-0 shadow-md">
              <CheckCircle2 className="w-7 h-7 text-white" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">Respaldo Institucional y Convenios Universitarios</h4>
              <p className="text-xs text-slate-100">Resoluciones académicas oficiales para la emisión y verificación digital de certificados.</p>
            </div>
          </div>
          
          <a
            href="#hero"
            className="px-6 py-3 rounded-lg bg-[#0A2540] hover:bg-[#061828] text-white font-bold text-xs uppercase tracking-wider transition-all whitespace-nowrap shadow-md cursor-pointer z-10 border border-slate-600 active:scale-95"
          >
            SOLICITAR ASESORÍA PERSONALIZADA
          </a>
        </motion.div>

      </div>
    </section>
  );
};
