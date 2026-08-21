import React from 'react';
import { ArrowRight } from 'lucide-react';

interface MobileBottomBarProps {
  onOpenForm: () => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({ onOpenForm }) => {
  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 p-2 px-3 flex items-center gap-2 shadow-lg">
      
      {/* Official WhatsApp Button - Clean, Non-Bold */}
      <a
        href="https://wa.me/51966000111?text=Hola%20Grupo%20INSUR,%20deseo%20informaci%C3%B3n%20sobre%20sus%20programas."
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs flex items-center justify-center gap-1.5 active:scale-95 transition-transform shadow-xs"
      >
        <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.301-.15-1.78-.879-2.056-.98-.277-.101-.478-.15-.678.15-.2.301-.778.98-.953 1.181-.176.2-.351.226-.652.075-.301-.15-1.27-.468-2.42-1.493-.895-.798-1.5-1.784-1.676-2.085-.175-.3-.019-.462.132-.612.136-.135.301-.351.451-.527.151-.175.201-.3.301-.5.101-.2.051-.376-.025-.526-.075-.15-.677-1.633-.928-2.238-.244-.588-.492-.508-.677-.517-.175-.009-.376-.01-.577-.01-.2 0-.527.075-.803.376-.276.301-1.054 1.03-1.054 2.513 0 1.483 1.079 2.915 1.23 3.116.15.2 2.123 3.242 5.143 4.547.718.311 1.278.497 1.715.636.721.23 1.378.197 1.897.12.578-.087 1.78-.727 2.03-1.43.25-.703.25-1.305.176-1.43-.076-.125-.276-.2-.577-.35zM12.04 2C6.52 2 2.03 6.49 2.03 12.01c0 1.98.58 3.82 1.58 5.37L2 22l4.78-1.55a9.96 9.96 0 005.26 1.56c5.52 0 10.01-4.49 10.01-10.01C22.05 6.49 17.56 2 12.04 2zm0 18.23c-1.65 0-3.18-.49-4.47-1.34l-.32-.21-2.84.92.94-2.77-.23-.37a8.21 8.21 0 01-1.28-4.45c0-4.55 3.7-8.24 8.24-8.24 4.54 0 8.24 3.69 8.24 8.24 0 4.55-3.7 8.22-8.28 8.22z"/>
        </svg>
        <span>WhatsApp</span>
      </a>

      {/* CTA Action Button - Harmonious Navy, Non-Bold */}
      <button
        onClick={onOpenForm}
        className="flex-1 py-2.5 px-3 rounded-xl bg-[#0A2540] hover:bg-[#00A3E0] text-white font-medium text-xs flex items-center justify-center gap-1 active:scale-95 transition-all shadow-xs cursor-pointer"
      >
        <span>Reclamar 10% OFF</span>
        <ArrowRight className="w-3.5 h-3.5" />
      </button>

    </div>
  );
};
