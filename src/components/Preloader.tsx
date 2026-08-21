import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Preloader: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] bg-[#0A2540] flex flex-col items-center justify-center p-4"
        >
          {/* Logo Animation */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex flex-col items-center space-y-4"
          >
            <div className="bg-white p-4 rounded-2xl shadow-2xl border-2 border-cyan-400/40 relative">
              <img
                src="/assets/logo_insur.png"
                alt="Grupo INSUR"
                className="h-16 w-auto object-contain"
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 3, ease: 'linear' }}
                className="absolute -inset-1 rounded-2xl border-2 border-cyan-400 border-t-transparent pointer-events-none opacity-60"
              />
            </div>

            <div className="text-center space-y-1">
              <h2 className="text-xl font-black text-white tracking-tight">
                Grupo INSUR
              </h2>
              <p className="text-xs font-bold text-cyan-300 uppercase tracking-widest">
                Centro de Altos Estudios
              </p>
            </div>

            {/* Smooth Progress Bar */}
            <div className="w-48 h-1.5 bg-slate-800 rounded-full overflow-hidden mt-4 border border-slate-700">
              <motion.div
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.0, ease: 'easeInOut' }}
                className="h-full bg-gradient-to-r from-[#1559ED] via-[#00A3E0] to-emerald-400 rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
