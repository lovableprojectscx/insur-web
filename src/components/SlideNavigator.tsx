import React, { useState, useEffect } from 'react';

export const SlideNavigator: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    { id: 'hero', label: '01 • Inicio' },
    { id: 'escuelas', label: '02 • Escuelas' },
    { id: 'alianzas', label: '03 • Alianzas & Certificado' },
    { id: 'catalogo', label: '04 • Cursos & Diplomados' },
    { id: 'docentes', label: '05 • Plana Docente' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      slides.forEach((slide, index) => {
        const el = document.getElementById(slide.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSlide(index);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="hidden xl:flex fixed right-6 top-1/2 -translate-y-1/2 z-40 flex-col items-end gap-3 bg-[#0A2540]/80 backdrop-blur-md p-3 rounded-2xl border border-slate-700 shadow-2xl">
      <span className="text-[9px] font-black text-cyan-300 uppercase tracking-widest px-2 py-0.5 border-b border-slate-700 w-full text-center">
        PPT SLIDES
      </span>
      {slides.map((slide, index) => {
        const isActive = activeSlide === index;
        return (
          <button
            key={slide.id}
            onClick={() => scrollToSection(slide.id)}
            className="group flex items-center gap-2.5 cursor-pointer py-1"
          >
            <span className={`text-[10px] font-black uppercase tracking-wider transition-all opacity-0 group-hover:opacity-100 ${
              isActive ? 'text-cyan-300 opacity-100' : 'text-slate-400'
            }`}>
              {slide.label}
            </span>
            <div className={`h-2.5 rounded-full transition-all duration-300 ${
              isActive 
                ? 'w-7 bg-[#00A3E0] shadow-md shadow-cyan-500/50' 
                : 'w-2.5 bg-slate-600 group-hover:bg-slate-400'
            }`} />
          </button>
        );
      })}
    </div>
  );
};
