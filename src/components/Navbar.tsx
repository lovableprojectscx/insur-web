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
      
      {/* Top Deep Navy Notification Ribbon */}
      <div className="bg-[#0A2540] text-white text-xs font-bold py-2 px-4 shadow-sm border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          
          {/* Left Promo Badges */}
          <div className="flex items-center gap-2 truncate">
            <span className="bg-[#00A3E0] text-slate-950 font-black text-[10px] px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-xs">
              ¡CONVOCATORIA 2026!
            </span>
            <span className="bg-slate-800 text-cyan-300 font-extrabold text-[10px] px-2.5 py-0.5 rounded-full uppercase tracking-wider truncate border border-slate-700">
              ACCEDE AL 10% DE DESCUENTO
            </span>
            <span className="hidden md:inline text-slate-300 font-medium text-[11px]">
              Válido por 48 horas • Término de oferta próximo
            </span>
          </div>

          {/* Right Action CTA Button */}
          <div className="flex items-center gap-3 shrink-0">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onOpenForm}
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-[11px] px-3.5 py-1 rounded-full uppercase tracking-wider transition-all shadow-xs flex items-center gap-1.5 cursor-pointer"
            >
              <Zap className="w-3 h-3 fill-current" />
              <span>MÁS INFORMACIÓN</span>
            </motion.button>
          </div>

        </div>
      </div>

      {/* Main Clean White Navbar */}
      <div className={`bg-white transition-all duration-300 ${
        isScrolled 
          ? 'border-b border-slate-200 shadow-md py-2.5' 
          : 'border-b border-slate-100 py-3.5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Logo */}
          <a href="#hero" className="flex items-center gap-3 group">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-slate-50 p-1.5 rounded-xl border border-slate-200 shadow-2xs transition-transform"
            >
              <img 
                src="/assets/logo_insur.png" 
                alt="Grupo INSUR - Centro de Altos Estudios y Desarrollo Profesional" 
                className="h-9 sm:h-10 w-auto object-contain"
              />
            </motion.div>
            
            <div className="text-left border-l-2 border-[#00A3E0] pl-3">
              <span className="block font-black text-[#0A2540] text-base tracking-tight leading-none">
                Grupo <span className="text-[#00A3E0]">INSUR</span>
              </span>
              <span className="block text-[10px] text-slate-500 font-extrabold tracking-wide mt-0.5 uppercase">
                Centro de Altos Estudios
              </span>
            </div>
          </a>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-xs font-black text-slate-700 uppercase tracking-wide">
            <a href="#hero" className="text-[#00A3E0] border-b-2 border-[#00A3E0] pb-1 font-black">INICIO</a>
            <a href="#escuelas" className="hover:text-[#00A3E0] transition-colors pb-1">NUESTRAS ESCUELAS</a>
            <a href="#alianzas" className="hover:text-[#00A3E0] transition-colors pb-1">ALIANZAS INSTITUCIONALES</a>
            <a href="#certificado" className="hover:text-[#00A3E0] transition-colors pb-1">CERTIFICADO OFICIAL</a>
            <a href="#catalogo" className="hover:text-[#00A3E0] transition-colors pb-1">CURSOS & DIPLOMADOS</a>
          </nav>

          {/* Right Action Controls */}
          <div className="hidden lg:flex items-center gap-3">
            
            {/* Currency selector badge */}
            <div className="flex items-center bg-slate-100 p-1 rounded-lg border border-slate-200 text-[11px] font-black text-slate-700">
              <span className="px-2 py-0.5 rounded bg-[#0A2540] text-white">S/.</span>
              <span className="px-2 py-0.5 text-slate-400">$</span>
            </div>

            {/* Cyan Aula Virtual Button */}
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/51966000111?text=Hola%20Grupo%20INSUR,%20deseo%20acceder%20al%20Aula%20Virtual." 
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-[#00A3E0] hover:bg-[#0082B3] text-white text-xs font-black transition-all shadow-md active:scale-95 flex items-center gap-1.5 uppercase tracking-wider"
            >
              <span>Aula Virtual</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </motion.a>
          </div>

          {/* Mobile Menu Controls */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenForm}
              className="px-3 py-1.5 rounded-xl bg-[#1559ED] text-white font-extrabold text-[10px] uppercase tracking-wider shadow-sm"
            >
              10% OFF
            </button>

            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-100 text-slate-800 border border-slate-300"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-slate-900" /> : <Menu className="w-5 h-5 text-slate-900" />}
            </button>
          </div>

        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-200 px-4 pt-3 pb-5 space-y-2.5 shadow-xl">
            <a 
              href="#hero" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[#1559ED] font-black text-xs py-2 border-b border-slate-100 uppercase"
            >
              INICIO
            </a>
            <a 
              href="#escuelas" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-800 font-extrabold text-xs py-2 border-b border-slate-100 uppercase"
            >
              NUESTRAS ESCUELAS
            </a>
            <a 
              href="#alianzas" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-800 font-extrabold text-xs py-2 border-b border-slate-100 uppercase"
            >
              ALIANZAS INSTITUCIONALES
            </a>
            <a 
              href="#certificado" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-800 font-extrabold text-xs py-2 border-b border-slate-100 uppercase"
            >
              MODELO DE CERTIFICADO
            </a>
            <a 
              href="#catalogo" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-800 font-extrabold text-xs py-2 border-b border-slate-100 uppercase"
            >
              CURSOS & DIPLOMADOS
            </a>
            
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenForm();
                }}
                className="w-full py-3 rounded-xl bg-[#1559ED] text-white font-extrabold text-xs uppercase shadow-md"
              >
                Inscribirme con 10% OFF
              </button>
            </div>
          </div>
        )}
      </div>

    </header>
  );
};
