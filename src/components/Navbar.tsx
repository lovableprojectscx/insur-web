import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

interface NavbarProps {
  onOpenForm: () => void;
}

export const Navbar = ({ onOpenForm }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      
      {/* Top Notification Ribbon - HIDDEN ON MOBILE to save screen space */}
      <div className="hidden sm:block bg-[#0A2540] text-white text-xs font-bold py-1.5 px-4 shadow-sm border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 truncate">
            <span className="bg-[#00A3E0] text-slate-950 font-black text-[10px] px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              ¡CONVOCATORIA 2026!
            </span>
            <span className="text-cyan-300 font-extrabold text-[11px]">
              2do CURSO GRATIS POR MATRÍCULA
            </span>
          </div>

          <button
            onClick={onOpenForm}
            className="bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-[10px] px-3 py-0.5 rounded-full uppercase tracking-wider transition-all flex items-center gap-1 cursor-pointer"
          >
            <Zap className="w-3 h-3 fill-current" />
            <span>MÁS INFORMACIÓN</span>
          </button>
        </div>
      </div>

      {/* Main Clean White Navbar */}
      <div className={`bg-white/95 backdrop-blur-md transition-all duration-300 border-b border-slate-200 shadow-sm ${
        isScrolled ? 'py-1.5 sm:py-2' : 'py-2 sm:py-2.5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Logo */}
          <a href="#hero" className="flex items-center gap-2.5">
            <img 
              src="/assets/logo_insur.png" 
              alt="Grupo INSUR" 
              className="h-8 sm:h-9 w-auto object-contain"
            />
            <div className="text-left border-l-2 border-[#00A3E0] pl-2.5">
              <span className="block font-black text-[#0A2540] text-sm sm:text-base leading-none">
                Grupo <span className="text-[#00A3E0]">INSUR</span>
              </span>
              <span className="block text-[9px] text-slate-500 font-bold uppercase">
                Altos Estudios
              </span>
            </div>
          </a>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-xs font-black text-slate-700 uppercase tracking-wide">
            <a href="#hero" className="text-[#00A3E0] hover:text-[#00A3E0] transition-colors">INICIO</a>
            <a href="#catalogo" className="hover:text-[#00A3E0] transition-colors">CURSOS Y DIPLOMADOS</a>
            <a href="#certificado" className="hover:text-[#00A3E0] transition-colors">CERTIFICADO Y ALIANZAS</a>
            <a href="#docentes" className="hover:text-[#00A3E0] transition-colors">DOCENTES</a>
          </nav>

          {/* Right Action Controls */}
          <div className="flex items-center gap-2">
            <motion.a 
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="https://wa.me/51966000111?text=Hola%20Grupo%20INSUR,%20deseo%20acceder%20al%20Aula%20Virtual." 
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-[#00A3E0] hover:bg-[#0082B3] text-white text-xs font-black transition-all shadow-xs flex items-center gap-1.5 uppercase"
            >
              <span>Aula Virtual</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </motion.a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 text-slate-700 rounded-lg hover:bg-slate-100"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 py-3 space-y-2 text-xs font-black uppercase shadow-lg">
          <a 
            href="#hero" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-[#00A3E0] border-b border-slate-100"
          >
            Inicio
          </a>
          <a 
            href="#catalogo" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-700 border-b border-slate-100"
          >
            Cursos y Diplomados
          </a>
          <a 
            href="#certificado" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-700 border-b border-slate-100"
          >
            Certificado y Alianzas
          </a>
          <a 
            href="#docentes" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-700"
          >
            Docentes
          </a>
        </div>
      )}

    </header>
  );
};
