import { MapPin, Phone, Mail, ArrowUp, Globe } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#07192B] text-slate-300 relative pt-16 pb-12 border-t border-slate-800">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Info (4 Columns) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-white p-1.5 rounded-xl border border-slate-200">
                <img 
                  src="/assets/logo_insur.png" 
                  alt="Grupo INSUR - Centro de Altos Estudios y Desarrollo Profesional" 
                  className="h-9 w-auto object-contain"
                />
              </div>
              <div>
                <span className="font-bold text-lg text-white font-['Outfit']">
                  Grupo INSUR
                </span>
                <span className="block text-[10px] text-slate-400 font-medium">Ayacucho, Perú</span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed font-normal">
              <strong>Centro de Altos Estudios y Desarrollo Profesional.</strong> Institución líder en capacitación especializada en ingeniería, gestión de obras, supervisión y carreras técnicas de alta empleabilidad.
            </p>

            {/* Social Media Buttons */}
            <div className="pt-1 flex items-center gap-2.5">
              <a
                href="https://www.facebook.com/GrupoINSUR"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-[#00529B] text-slate-300 hover:text-white flex items-center justify-center transition-colors border border-slate-700"
                title="Facebook Grupo INSUR"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              <a
                href="https://www.youtube.com/@GrupoINSUR"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-red-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors border border-slate-700"
                title="YouTube Grupo INSUR"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>

              <a
                href="https://wa.me/51966000111"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-emerald-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors border border-slate-700"
                title="WhatsApp Admisión"
              >
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links (3 Columns) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-['Outfit']">
              Especializaciones 2026
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li><a href="#programas" className="hover:text-white transition-colors">Residencia y Gestión de Obras</a></li>
              <li><a href="#programas" className="hover:text-white transition-colors">Topografía Automatizada y Drones</a></li>
              <li><a href="#programas" className="hover:text-white transition-colors">BIM Management y Revit 3D</a></li>
              <li><a href="#programas" className="hover:text-white transition-colors">Seguridad SST en Minería e Ingeniería</a></li>
              <li><a href="#programas" className="hover:text-white transition-colors">Cálculo Estructural ETABS & SAP2000</a></li>
            </ul>
          </div>

          {/* Location & Contact Info (5 Columns) */}
          <div className="lg:col-span-5 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-['Outfit']">
              Sede Central Ayacucho & Contacto
            </h4>
            
            <div className="space-y-2.5 text-xs font-medium text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#00A3E0] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Cobertura y Modalidad:</strong> 100% Virtual a nivel nacional en todo el Perú (Sede Administrativa Central: Ayacucho).
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#00A3E0] shrink-0" />
                <div>
                  <strong className="text-white">WhatsApp Admisión:</strong> +51 966 000 111 / (066) 31-8900
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#00A3E0] shrink-0" />
                <div>
                  <strong className="text-white">Correo Oficial:</strong> informes@grupoinsur.edu.pe
                </div>
              </div>
            </div>

            <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
              <span>Libro de Reclamaciones Virtual</span>
              <a href="#hero" className="text-[#00A3E0] font-bold hover:underline">Acceder</a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Grupo INSUR - Centro de Altos Estudios y Desarrollo Profesional. Todos los derechos reservados.</p>

          <div className="flex items-center gap-5">
            <a href="#hero" className="hover:text-slate-300 transition-colors">Términos y Privacidad</a>
            
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors cursor-pointer"
              title="Volver arriba"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
