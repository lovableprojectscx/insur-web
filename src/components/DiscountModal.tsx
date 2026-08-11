import { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import { Copy, Check, MessageSquare, X, Gift } from 'lucide-react';
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
        particleCount: 100,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#00A3E0', '#0A2540', '#00529B', '#F59E0B']
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
    `¡Hola Grupo INSUR Ayacucho! Mi nombre es ${leadData.fullName}. Acabo de registrarme con el código de descuento [${couponCode}] para el área de ${leadData.areaOfInterest}. Deseo activar mi 10% de descuento.`
  );

  const whatsappUrl = `https://wa.me/51966000111?text=${whatsappMessage}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/75 backdrop-blur-xs animate-in fade-in">
      
      <div className="relative w-full max-w-md rounded-2xl bg-[#0A2540] border border-slate-700 p-6 sm:p-7 text-white shadow-2xl">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Header */}
        <div className="text-center space-y-2">
          <div className="w-12 h-12 mx-auto rounded-xl bg-[#00A3E0] flex items-center justify-center text-white shadow-md">
            <Gift className="w-6 h-6" />
          </div>
          <span className="inline-block px-2.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[11px] font-bold">
            REGISTRO EXITOSO
          </span>
          <h3 className="text-xl font-bold text-white tracking-tight">
            ¡Bienvenido, {leadData.fullName.split(' ')[0]}!
          </h3>
          <p className="text-xs text-slate-300">
            Has reservado tu vacante con el <strong className="text-[#00A3E0]">10% de descuento exclusivo</strong> para <strong className="text-white">{leadData.areaOfInterest}</strong>.
          </p>
        </div>

        {/* Coupon Code Box */}
        <div className="my-5 p-3.5 rounded-xl bg-slate-900 border border-dashed border-slate-700 text-center space-y-1.5">
          <p className="text-[11px] uppercase tracking-wider text-slate-400 font-bold">Tu Código Promocional:</p>
          <div className="flex items-center justify-center gap-3">
            <span className="text-2xl font-black text-[#00A3E0] font-mono tracking-wider">
              {couponCode}
            </span>
            <button
              onClick={handleCopy}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-600 transition-colors flex items-center gap-1 text-[11px] font-semibold cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copiado' : 'Copiar'}</span>
            </button>
          </div>
        </div>

        {/* Actions */}
        <div className="space-y-2">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider shadow-md flex items-center justify-center gap-2 transition-colors"
          >
            <MessageSquare className="w-4 h-4 fill-current" />
            <span>VALIDAR VOUCHER POR WHATSAPP</span>
          </a>
          
          <button
            onClick={onClose}
            className="w-full py-2 text-center text-xs text-slate-400 hover:text-slate-200 transition-colors cursor-pointer"
          >
            Volver a la página
          </button>
        </div>

      </div>
    </div>
  );
};
