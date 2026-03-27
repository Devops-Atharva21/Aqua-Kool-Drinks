import { useState } from 'react';
import { X, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function TopBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: 'auto', opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        className="bg-gradient-to-r from-aqua-600 to-ice-600 text-white relative z-[60]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-center relative">
          <div className="flex items-center gap-2 text-sm font-medium text-center pr-8 sm:pr-0">
            <Zap size={16} className="text-amber-300 animate-pulse hidden sm:block" />
            <span className="hidden sm:inline">Summer Special:</span>
            <span>Get 20% off your first order with code <strong className="bg-white/20 px-2 py-0.5 rounded ml-1">COOL20</strong></span>
          </div>
          
          <button 
            onClick={() => setIsVisible(false)}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-white/20 rounded-full transition-colors"
            aria-label="Close banner"
          >
            <X size={16} />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
