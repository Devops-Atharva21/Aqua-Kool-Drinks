import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ExitIntentPopupProps {
  onClose: () => void;
}

export default function ExitIntentPopup({ onClose }: ExitIntentPopupProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Small delay to ensure smooth animation after mount
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300); // Wait for exit animation
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            onClick={handleClose}
          ></motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden flex flex-col md:flex-row z-10"
          >
            <button 
              onClick={handleClose}
              className="absolute top-4 right-4 z-20 w-8 h-8 bg-white/50 backdrop-blur-md rounded-full flex items-center justify-center text-slate-800 hover:bg-slate-100 transition-colors"
            >
              <X size={20} />
            </button>

            {/* Image Side */}
            <div className="w-full md:w-2/5 bg-gradient-cool relative hidden md:block">
              <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
              <div className="h-full flex items-center justify-center p-6">
                <div className="text-center text-white">
                  <span className="text-6xl">🧊</span>
                  <h3 className="font-black text-2xl mt-4 leading-tight">Wait! Don't Melt Away.</h3>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="w-full md:w-3/5 p-8 flex flex-col justify-center bg-white">
              <div className="md:hidden text-center mb-4">
                <span className="text-4xl">🧊</span>
                <h3 className="font-black text-2xl mt-2 text-slate-900">Wait! Don't Melt Away.</h3>
              </div>
              
              <h4 className="text-xl font-bold text-slate-900 mb-2">
                Grab <span className="text-aqua-500">15% OFF</span> your first order!
              </h4>
              <p className="text-slate-600 text-sm mb-6">
                Sign up for our newsletter and get an instant discount code for your first purchase of Aqua-Kool.
              </p>
              
              <form onSubmit={async (e) => {
                e.preventDefault();
                const form = e.target as HTMLFormElement;
                const emailInput = form.elements.namedItem('email') as HTMLInputElement;
                
                try {
                  const response = await fetch('/api/subscribers', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email: emailInput.value })
                  });
                  
                  if (response.ok) {
                    alert('Success! Check your email for the discount code.');
                    handleClose();
                  } else {
                    const data = await response.json();
                    alert(data.error || 'Failed to subscribe. Please try again.');
                  }
                } catch (error) {
                  console.error('Error subscribing:', error);
                  alert('An error occurred. Please try again later.');
                }
              }} className="space-y-3">
                <input 
                  type="email" 
                  name="email"
                  placeholder="Enter your email" 
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-aqua-500 focus:border-aqua-500 outline-none transition-all text-sm"
                  required
                />
                <button 
                  type="submit" 
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white px-4 py-3 rounded-xl font-bold text-sm transition-all shadow-lg hover:-translate-y-0.5"
                >
                  Get My 15% Off
                </button>
              </form>
              
              <button 
                onClick={handleClose}
                className="mt-4 text-xs text-slate-400 hover:text-slate-600 underline text-center w-full"
              >
                No thanks, I prefer being hot and thirsty.
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
