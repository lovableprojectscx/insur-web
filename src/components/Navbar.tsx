import { useState, useEffect } from 'react';
import { Phone, Menu, X, ArrowRight } from 'lucide-react';

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
      
      {/* Top Announcement Ribbon - Solid Corporate Color */}
      <div className="bg-[#0A2540] text-white text-[11px] font-medium py-1.5 px-4 border-b border-slate-700/60">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 truncate">
            <span className="bg-[#D92D20] text-white font-extrabold text-[9px] px-2.5 py-0.5 rounded uppercase tracking-wider">
              CONVOCATORIA 2026
            </span>
            <span className="truncate text-slate-200 font-medium">
              Clases 100% Virtuales En Vivo • Campus Virtual 24/7 • Certificación Oficial Universitaria
            </span>
          </div>

          <div className="hidden md:flex items-center gap-4 text-[11px]">
            <span className="text-slate-200 font-semibold">
              10% de Descuento Promocional
            </span>
            <span className="text-slate-500">|</span>
            <a 
              href="https://wa.me/51966000111" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:underline text-emerald-400 font-bold transition-colors"
            >
              WhatsApp Directo: +51 966 000 111
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className={`transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#07192B]/95 backdrop-blur-md border-b border-slate-800 shadow-lg py-2' 
          : 'bg-[#07192B]/90 backdrop-blur-sm border-b border-slate-800/80 py-3'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Official Logo Brand */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="bg-white p-1.5 rounded-xl shadow-sm border border-slate-200 group-hover:scale-105 transition-transform">
              <img 
                src="/assets/logo_insur.png" 
                alt="Grupo INSUR - Centro de Altos Estudios y Desarrollo Profesional" 
                className="h-9 sm:h-11 w-auto object-contain"
              />
            </div>
            <div className="hidden sm:block border-l border-slate-700 pl-3">
              <span className="block font-bold text-white text-base tracking-tight leading-tight">
                Grupo INSUR
              </span>
              <span className="block text-[10px] text-slate-400 font-medium tracking-wide">
                Centro de Altos Estudios • Modalidad Virtual
              </span>
            </div>
          </a>

          {/* Minimalist Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-bold text-slate-300 tracking-wide uppercase">
            <a href="#programas" className="hover:text-white transition-colors py-1">Especialidades</a>
            <a href="#catalogo" className="hover:text-white transition-colors py-1">Cursos</a>
            <a href="#nosotros" className="hover:text-white transition-colors py-1">Certificación</a>
            <a href="#testimonios" className="hover:text-white transition-colors py-1">Egresados</a>
            <a href="#faq" className="hover:text-white transition-colors py-1">Preguntas</a>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a 
              href="https://wa.me/51966000111?text=Hola%20Grupo%20INSUR,%20deseo%20informaci%C3%B3n%20sobre%20sus%20programas%20virtuales." 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-bold transition-all shadow-sm"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Admisión WhatsApp</span>
            </a>

            <button
              onClick={onOpenForm}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#00529B] hover:bg-[#0A2540] text-white text-xs font-bold transition-all shadow-sm active:scale-95 cursor-pointer border border-cyan-500/30"
            >
              <span>Descuento 10%</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-slate-800 text-slate-300 border border-slate-700"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#07192B] border-b border-slate-800 px-4 pt-3 pb-5 space-y-2 mt-2">
            <a 
              href="#programas" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-300 hover:text-white font-semibold text-xs py-2 border-b border-slate-800 uppercase tracking-wider"
            >
              Especialidades Académicas
            </a>
            <a 
              href="#catalogo" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-300 hover:text-white font-semibold text-xs py-2 border-b border-slate-800 uppercase tracking-wider"
            >
              Catálogo de Programas
            </a>
            <a 
              href="#nosotros" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-300 hover:text-white font-semibold text-xs py-2 border-b border-slate-800 uppercase tracking-wider"
            >
              Validez y Certificación
            </a>
            <a 
              href="#testimonios" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-300 hover:text-white font-semibold text-xs py-2 border-b border-slate-800 uppercase tracking-wider"
            >
              Egresados
            </a>
            <a 
              href="#faq" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-300 hover:text-white font-semibold text-xs py-2 border-b border-slate-800 uppercase tracking-wider"
            >
              Preguntas Frecuentes
            </a>
            
            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenForm();
                }}
                className="w-full py-2.5 rounded-lg bg-[#00529B] text-white font-bold text-xs"
              >
                Obtener Descuento Exclusivo (10%)
              </button>
            </div>
          </div>
        )}
      </div>

    </header>
  );
};
