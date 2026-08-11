import { useState, useEffect } from 'react';
import { Phone, Menu, X, ArrowRight, Award, Laptop, CheckCircle2 } from 'lucide-react';

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
      
      {/* Top Announcement Ribbon - Solid Corporate Colors */}
      <div className="bg-[#061828] text-white text-[11px] font-medium py-1.5 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 truncate">
            <span className="bg-[#D92D20] text-white font-black text-[9px] px-2.5 py-0.5 rounded uppercase tracking-wider shadow-sm">
              CONVOCATORIA 2026
            </span>
            <span className="truncate text-slate-200 font-medium">
              Clases 100% Virtuales En Vivo • Campus 24/7 • Certificación Oficial Universitaria
            </span>
          </div>

          <div className="hidden md:flex items-center gap-4 text-[11px]">
            <span className="text-[#00A3E0] font-bold">
              10% de Descuento Promocional
            </span>
            <span className="text-slate-600">|</span>
            <a 
              href="https://wa.me/51966000111" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:underline text-emerald-400 font-bold transition-colors flex items-center gap-1"
            >
              <Phone className="w-3 h-3" />
              <span>WhatsApp Directo: +51 966 000 111</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar - Executive High-Contrast Light White Header */}
      <div className={`transition-all duration-300 ${
        isScrolled 
          ? 'bg-white text-slate-900 border-b border-slate-200 shadow-md py-2' 
          : 'bg-white text-slate-900 border-b border-slate-200 shadow-sm py-2.5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Integrated Brand Logo & Institutional Title */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="bg-slate-50 p-1.5 rounded-xl border border-slate-200 shadow-sm group-hover:scale-105 transition-transform shrink-0">
              <img 
                src="/assets/logo_insur.png" 
                alt="Grupo INSUR - Centro de Altos Estudios y Desarrollo Profesional" 
                className="h-8 sm:h-10 w-auto object-contain"
              />
            </div>
            
            {/* Visible Brand Text on Mobile & Desktop */}
            <div className="text-left border-l border-slate-200 pl-3">
              <span className="block font-black text-[#0A2540] text-sm sm:text-base tracking-tight leading-none">
                Grupo INSUR
              </span>
              <span className="block text-[10px] sm:text-[11px] text-[#00529B] font-bold tracking-wide mt-0.5">
                Centro de Altos Estudios
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-extrabold text-slate-700 tracking-wide uppercase">
            <a href="#programas" className="hover:text-[#00529B] transition-colors py-1">Especialidades</a>
            <a href="#catalogo" className="hover:text-[#00529B] transition-colors py-1">Cursos</a>
            <a href="#nosotros" className="hover:text-[#00529B] transition-colors py-1">Certificación</a>
            <a href="#testimonios" className="hover:text-[#00529B] transition-colors py-1">Egresados</a>
            <a href="#faq" className="hover:text-[#00529B] transition-colors py-1">Preguntas</a>
          </nav>

          {/* Desktop Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a 
              href="https://wa.me/51966000111?text=Hola%20Grupo%20INSUR,%20deseo%20informaci%C3%B3n%20sobre%20sus%20programas%20virtuales." 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow-sm active:scale-95"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Admisión WhatsApp</span>
            </a>

            <button
              onClick={onOpenForm}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#00529B] hover:bg-[#0A2540] text-white text-xs font-bold transition-all shadow-sm active:scale-95 cursor-pointer"
            >
              <span>Descuento 10%</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Right Controls: Discount Badge + Hamburger Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenForm}
              className="px-3 py-1.5 rounded-lg bg-[#00529B] text-white font-extrabold text-[10px] uppercase tracking-wider shadow-sm flex items-center gap-1 active:scale-95 cursor-pointer"
            >
              <Award className="w-3 h-3" />
              <span>10% OFF</span>
            </button>

            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-100 text-slate-800 border border-slate-300 hover:bg-slate-200 active:scale-95 transition-all"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#0A2540]" /> : <Menu className="w-5 h-5 text-[#0A2540]" />}
            </button>
          </div>

        </div>

        {/* Mobile Horizontal Sub-Navigation Pill Bar (Inspired by ENCAP) */}
        <div className="lg:hidden border-t border-slate-100 bg-slate-50/90 py-1.5 px-3 overflow-x-auto whitespace-nowrap scrollbar-none flex items-center gap-2">
          <a 
            href="#programas" 
            className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-800 text-[11px] font-extrabold shadow-2xs hover:bg-[#00529B] hover:text-white transition-all"
          >
            <span>Diplomados 2026</span>
          </a>
          <a 
            href="#catalogo" 
            className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-800 text-[11px] font-extrabold shadow-2xs hover:bg-[#00529B] hover:text-white transition-all"
          >
            <Laptop className="w-3 h-3 text-[#00529B]" />
            <span>Cursos Virtuales</span>
          </a>
          <a 
            href="#nosotros" 
            className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-800 text-[11px] font-extrabold shadow-2xs hover:bg-[#00529B] hover:text-white transition-all"
          >
            <CheckCircle2 className="w-3 h-3 text-[#D92D20]" />
            <span>Código QR Oficial</span>
          </a>
          <a 
            href="https://wa.me/51966000111"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 text-[11px] font-extrabold shadow-2xs"
          >
            <Phone className="w-3 h-3 text-emerald-600" />
            <span>WhatsApp</span>
          </a>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-200 px-4 pt-3 pb-5 space-y-2.5 shadow-xl">
            <a 
              href="#programas" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[#0A2540] font-bold text-xs py-2 border-b border-slate-100 uppercase tracking-wider flex items-center justify-between"
            >
              <span>Especialidades Académicas</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </a>
            <a 
              href="#catalogo" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[#0A2540] font-bold text-xs py-2 border-b border-slate-100 uppercase tracking-wider flex items-center justify-between"
            >
              <span>Catálogo de Cursos Virtuales</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </a>
            <a 
              href="#nosotros" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[#0A2540] font-bold text-xs py-2 border-b border-slate-100 uppercase tracking-wider flex items-center justify-between"
            >
              <span>Validez Curricular & Código QR</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </a>
            <a 
              href="#testimonios" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[#0A2540] font-bold text-xs py-2 border-b border-slate-100 uppercase tracking-wider flex items-center justify-between"
            >
              <span>Egresados Certificados</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </a>
            <a 
              href="#faq" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[#0A2540] font-bold text-xs py-2 border-b border-slate-100 uppercase tracking-wider flex items-center justify-between"
            >
              <span>Preguntas Frecuentes</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </a>
            
            <div className="pt-3 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenForm();
                }}
                className="w-full py-3 rounded-lg bg-[#00529B] hover:bg-[#0A2540] text-white font-extrabold text-xs uppercase tracking-wider shadow-md"
              >
                Reclamar Descuento 10% OFF
              </button>
              <a
                href="https://wa.me/51966000111?text=Hola%20Grupo%20INSUR,%20deseo%20informaci%C3%B3n%20sobre%20sus%20programas%20virtuales."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-lg bg-emerald-600 text-white font-extrabold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Contactar por WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </div>

    </header>
  );
};
