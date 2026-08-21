import { Phone, ArrowRight } from 'lucide-react';

interface MobileBottomBarProps {
  onOpenForm: () => void;
}

export const MobileBottomBar = ({ onOpenForm }: MobileBottomBarProps) => {
  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 p-2.5 px-3 flex items-center gap-2 shadow-2xl">
      <a
        href="https://wa.me/51966000111?text=Hola%20Grupo%20INSUR,%20deseo%20informaci%C3%B3n%20sobre%20sus%20programas."
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 py-2.5 px-3 rounded-xl bg-emerald-500 text-white font-black text-xs flex items-center justify-center gap-1.5 active:scale-95 transition-transform shadow-xs"
      >
        <Phone className="w-4 h-4" />
        <span>WhatsApp</span>
      </a>

      <button
        onClick={onOpenForm}
        className="flex-1 py-2.5 px-3 rounded-xl bg-[#1559ED] text-white font-black text-xs flex items-center justify-center gap-1.5 active:scale-95 transition-transform shadow-md cursor-pointer uppercase tracking-wider"
      >
        <span>Reclamar 10% OFF</span>
        <ArrowRight className="w-3.5 h-3.5" />
      </button>
    </div>
  );
};
