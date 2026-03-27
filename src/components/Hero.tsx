import { ArrowRight, Droplet, Zap } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-icy">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-ice-300/20 blur-3xl"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-aqua-300/20 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ice-100 border border-ice-300 text-ice-700 text-sm font-semibold mb-6">
              <Droplet size={14} className="text-aqua-500" />
              <span>The Ultimate Summer Rescue</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-slate-900 leading-[1.1] mb-6">
              Beat the Heat with <br className="hidden sm:block" />
              <span className="text-gradient">Instant Cooling.</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              Aqua-Kool is the refreshing, icy blast your body craves. Formulated for hot climates and active lifestyles to rehydrate and energize you instantly.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a 
                href="#products" 
                className="w-full sm:w-auto bg-ice-600 hover:bg-ice-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-xl shadow-ice-500/30 hover:shadow-ice-500/50 hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                Buy Now <ArrowRight size={20} />
              </a>
              <a 
                href="#distributor" 
                className="w-full sm:w-auto bg-white hover:bg-slate-50 text-slate-800 border-2 border-slate-200 px-8 py-4 rounded-full font-bold text-lg transition-all hover:border-ice-300 flex items-center justify-center"
              >
                Become a Distributor
              </a>
            </div>

            <div className="mt-10 flex items-center justify-center lg:justify-start gap-6 text-sm font-medium text-slate-500">
              <div className="flex items-center gap-2">
                <Zap size={16} className="text-amber-500" />
                <span>Instant Energy</span>
              </div>
              <div className="flex items-center gap-2">
                <Droplet size={16} className="text-aqua-500" />
                <span>Deep Hydration</span>
              </div>
            </div>
          </motion.div>

          {/* Image/Visual Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full max-w-lg mx-auto aspect-square">
              {/* Abstract bottle/splash representation since we don't have real assets */}
              <div className="absolute inset-0 bg-gradient-to-tr from-ice-500 to-aqua-300 rounded-full blur-2xl opacity-40 animate-pulse"></div>
              
              <div className="relative h-full w-full flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1556881286-fc6915169721?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Refreshing Aqua-Kool Drink with Ice" 
                  className="rounded-3xl shadow-2xl object-cover h-[80%] w-[80%] border-4 border-white/50 z-10"
                  referrerPolicy="no-referrer"
                />
                
                {/* Floating elements */}
                <motion.div 
                  animate={{ y: [0, -15, 0] }} 
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                  className="absolute top-10 right-10 bg-white p-3 rounded-2xl shadow-xl z-20"
                >
                  <span className="text-2xl">🧊</span>
                </motion.div>
                <motion.div 
                  animate={{ y: [0, 20, 0] }} 
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
                  className="absolute bottom-20 left-4 bg-white p-3 rounded-2xl shadow-xl z-20"
                >
                  <span className="text-2xl">💧</span>
                </motion.div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
