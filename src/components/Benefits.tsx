import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export default function Benefits() {
  const benefits = [
    "Instantly lowers perceived body temperature",
    "Replaces essential electrolytes lost in sweat",
    "Provides sustained energy without jitters",
    "Zero artificial colors or heavy syrups",
    "Convenient on-the-go packaging",
    "Perfect for pre, during, or post-workout"
  ];

  return (
    <section id="benefits" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-aqua-200 rounded-[3rem] transform -rotate-6 scale-105 z-0"></div>
            <img 
              src="https://images.unsplash.com/photo-1523362628745-0c100150b504?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Active person drinking Aqua-Kool" 
              className="relative z-10 rounded-[3rem] shadow-2xl object-cover h-[600px] w-full"
              referrerPolicy="no-referrer"
            />
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-3xl shadow-xl z-20 border border-slate-100">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-bold text-xl">
                  100%
                </div>
                <div>
                  <p className="font-bold text-slate-900">Refreshing</p>
                  <p className="text-sm text-slate-500">Guaranteed</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
              More Than Just a Drink. <br />
              <span className="text-gradient">It's a Cooling System.</span>
            </h2>
            
            <p className="text-lg text-slate-600 mb-10">
              When you're pushing your limits in the heat, water isn't always enough. Aqua-Kool is engineered to cool you down faster, hydrate you deeper, and keep you moving longer.
            </p>

            <div className="space-y-4 mb-10">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="text-aqua-500 flex-shrink-0 mt-1" size={24} />
                  <span className="text-lg text-slate-700 font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            <a 
              href="#products" 
              className="inline-block bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-full font-bold text-lg transition-transform hover:-translate-y-1 shadow-xl"
            >
              Grab Yours Today
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
