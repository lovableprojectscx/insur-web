import { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import { Copy, Check, MessageSquare, X, Ticket, Sparkles } from 'lucide-react';
import type { LeadFormData } from '../types';

interface DiscountModalProps {
  isOpen: boolean;
  onClose: () => void;
  leadData: LeadFormData | null;
}

export const DiscountModal = ({ isOpen, onClose, leadData }: DiscountModalProps) => {
  const [copied, setCopied] = useState(false);
  const couponCode = 'INSUR-10-2026';

  useEffect(() => {
    if (isOpen) {
      confetti({
        particleCount: 120,
        spread: 70,
        origin: { y: 0.5 },
        colors: ['#1559ED', '#00A3E0', '#F59E0B', '#10B981']
      });
    }
  }, [isOpen]);

  if (!isOpen || !leadData) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(couponCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const whatsappMessage = encodeURIComponent(
    `¡Hola Grupo INSUR! Mi nombre es ${leadData.fullName}. Acabo de registrarme con el código de descuento [${couponCode}] para ${leadData.areaOfInterest}. Deseo canjear mi 10% de descuento.`
  );

  const whatsappUrl = `https://wa.me/51966000111?text=${whatsappMessage}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-md animate-in fade-in">
      
      {/* CERSA Screenshot 5 Ticket Coupon Popup Replica */}
      <div className="relative w-full max-w-sm rounded-3xl bg-gradient-to-b from-[#1559ED] via-[#0A2540] to-[#061828] border-2 border-cyan-400/50 p-6 sm:p-7 text-white shadow-2xl overflow-hidden text-center">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full bg-slate-900/60 text-white hover:bg-slate-900 transition-colors z-20"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Floating Sparkles Header */}
        <div className="relative z-10 space-y-2">
          
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400 text-slate-950 text-[10px] font-black uppercase tracking-wider shadow-md">
            <Sparkles className="w-3.5 h-3.5" />
            <span>¡FELICIDADES!</span>
          </div>

          <h3 className="text-2xl font-black text-white tracking-tight uppercase leading-none">
            HAS ACCEDIDO A UN <br />
            <span className="text-cyan-300">10% DE DESCUENTO</span>
          </h3>

          <p className="text-xs text-blue-100 font-medium">
            Hola <strong className="text-white">{leadData.fullName.split(' ')[0]}</strong>, tu cupón institucional ya se encuentra activo para <strong className="text-white">{leadData.areaOfInterest}</strong>.
          </p>

        </div>

        {/* Ticket Voucher Box (Screenshot 5 Replica!) */}
        <div className="my-5 p-4 rounded-2xl bg-white text-slate-900 shadow-xl border-2 border-dashed border-[#1559ED] relative space-y-2">
          
          <div className="flex items-center justify-between text-[11px] font-black text-[#1559ED] uppercase tracking-wider border-b border-slate-200 pb-1.5">
            <span className="flex items-center gap-1">
              <Ticket className="w-4 h-4 text-[#1559ED]" /> CUPÓN OFICIAL
            </span>
            <span>2026</span>
          </div>

          <div className="py-1">
            <span className="text-2xl font-black text-[#0A2540] font-mono tracking-widest block">
              {couponCode}
            </span>
          </div>

          <button
            onClick={handleCopy}
            className="w-full py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-[11px] font-extrabold flex items-center justify-center gap-1.5 transition-colors cursor-pointer border border-slate-300"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-[#1559ED]" />}
            <span>{copied ? '¡CÓDIGO COPIADO!' : 'COPIAR CÓDIGO'}</span>
          </button>

        </div>

        {/* WhatsApp Green Action Button (Screenshot 5 Replica!) */}
        <div className="space-y-2.5 relative z-10">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 px-4 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-black text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 transition-all active:scale-95 border border-emerald-400"
          >
            <MessageSquare className="w-4 h-4 fill-current" />
            <span>CANJEA TU CUPÓN POR WHATSAPP</span>
          </a>
          
          <button
            onClick={onClose}
            className="w-full py-1 text-center text-[11px] text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            Cerrar ventana
          </button>
        </div>

      </div>
    </div>
  );
};
