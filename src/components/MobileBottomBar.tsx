import { Phone, ArrowRight } from 'lucide-react';

interface MobileBottomBarProps {
  onOpenForm: () => void;
}

export const MobileBottomBar = ({ onOpenForm }: MobileBottomBarProps) => {
  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#07192B]/95 backdrop-blur-md border-t border-slate-700/80 p-2.5 px-3 flex items-center gap-2 shadow-2xl">
      <a
        href="https://wa.me/51966000111?text=Hola%20Grupo%20INSUR%20Ayacucho,%20deseo%20informaci%C3%B3n%20sobre%20sus%20programas."
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 py-2.5 px-3 rounded-lg bg-emerald-700 text-white font-bold text-[11px] flex items-center justify-center gap-1.5 active:scale-95 transition-transform"
      >
        <Phone className="w-3.5 h-3.5" />
        <span>WhatsApp</span>
      </a>

      <button
        onClick={onOpenForm}
        className="flex-1 py-2.5 px-3 rounded-lg bg-[#00529B] text-white font-bold text-[11px] flex items-center justify-center gap-1.5 active:scale-95 transition-transform border border-cyan-500/30 cursor-pointer"
      >
        <span>Reclamar 10% OFF</span>
        <ArrowRight className="w-3.5 h-3.5" />
      </button>
    </div>
  );
};
