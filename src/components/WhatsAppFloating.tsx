import { MessageCircle } from 'lucide-react';

export const WhatsAppFloating = () => {
  return (
    <a
      href="https://wa.me/51966000111?text=Hola%20Grupo%20INSUR%20Ayacucho,%20deseo%20mayor%20informaci%C3%B3n%20sobre%20becas%20y%20descuentos."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 p-3 sm:px-4 sm:py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-xl transition-all active:scale-95 cursor-pointer"
      title="Contactar Asesor por WhatsApp"
    >
      <MessageCircle className="w-5 h-5 fill-current" />
      <span className="hidden sm:inline font-bold tracking-wide">
        WhatsApp En Vivo
      </span>
    </a>
  );
};
