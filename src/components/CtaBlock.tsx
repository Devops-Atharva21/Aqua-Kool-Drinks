import { motion } from 'motion/react';
import { ArrowRight, Clock } from 'lucide-react';

export default function CtaBlock() {
  return (
    <section className="py-24 bg-gradient-cool relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-aqua-400/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/20 text-red-100 rounded-full text-sm font-bold tracking-wider uppercase mb-8 border border-red-500/30">
            <Clock size={16} />
            <span>Limited Time Offer</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
            Stop Sweating. <br />
            Start <span className="text-aqua-300">Cooling.</span>
          </h2>
          
          <p className="text-xl text-ice-100 mb-10 max-w-2xl mx-auto">
            Get 20% off your first 12-pack of Aqua-Kool. Experience the instant chill that thousands are already talking about.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#products" 
              className="w-full sm:w-auto bg-white hover:bg-ice-50 text-ice-900 px-10 py-5 rounded-full font-bold text-xl transition-all shadow-2xl hover:shadow-white/20 hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              Claim 20% Off Now <ArrowRight size={24} />
            </a>
            <p className="text-sm text-ice-200 sm:hidden mt-2">Use code COOL20 at checkout</p>
          </div>
          <p className="hidden sm:block text-sm text-ice-200 mt-6">Use code <span className="font-mono font-bold text-white bg-white/10 px-2 py-1 rounded">COOL20</span> at checkout. Free shipping on orders over ₹500.</p>
        </motion.div>
      </div>
    </section>
  );
}
