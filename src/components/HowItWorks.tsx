import { motion } from 'motion/react';

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Grab a Cold One",
      description: "Keep Aqua-Kool chilled for maximum effect. The colder, the better.",
      icon: "🧊"
    },
    {
      number: "02",
      title: "Feel the Chill",
      description: "Take a large sip. Our IcyBlast™ formula instantly cools your mouth and throat.",
      icon: "❄️"
    },
    {
      number: "03",
      title: "Recharge & Go",
      description: "Electrolytes rehydrate, B-vitamins energize. You're ready to conquer the heat.",
      icon: "⚡"
    }
  ];

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">
            How to Experience <span className="text-gradient">True Cool</span>
          </h2>
          <p className="text-lg text-slate-600">
            It's simple. Three steps to beat the heat and get back to your best.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connecting Line (Desktop only) */}
          <div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-1 bg-gradient-to-r from-ice-200 via-aqua-300 to-ice-200 -translate-y-1/2 z-0"></div>

          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative z-10 flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 rounded-full bg-white border-4 border-ice-100 shadow-xl flex items-center justify-center text-4xl mb-6 relative group">
                <div className="absolute inset-0 rounded-full bg-aqua-400 opacity-0 group-hover:opacity-20 transition-opacity scale-150 blur-xl"></div>
                {step.icon}
                <div className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-ice-600 text-white flex items-center justify-center font-bold text-sm border-2 border-white shadow-md">
                  {step.number}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">{step.title}</h3>
              <p className="text-slate-600 max-w-xs mx-auto">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
