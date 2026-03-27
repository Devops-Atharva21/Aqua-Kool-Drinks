import { Snowflake, Zap, RefreshCcw, Droplet } from 'lucide-react';
import { motion } from 'motion/react';

export default function ProductHighlight() {
  const features = [
    {
      icon: <Snowflake size={32} />,
      title: "Instant Cooling Effect",
      description: "Formulated with our proprietary IcyBlast™ technology that drops your perceived body temperature in seconds.",
      color: "text-ice-500",
      bg: "bg-ice-100"
    },
    {
      icon: <RefreshCcw size={32} />,
      title: "Refreshing Taste",
      description: "A crisp, clean flavor profile that isn't overly sweet or syrupy, leaving your palate refreshed.",
      color: "text-aqua-500",
      bg: "bg-aqua-100"
    },
    {
      icon: <Zap size={32} />,
      title: "Clean Energy Boost",
      description: "Packed with B-vitamins and natural caffeine from green tea to keep you going without the crash.",
      color: "text-amber-500",
      bg: "bg-amber-100"
    },
    {
      icon: <Droplet size={32} />,
      title: "Optimal Hydration",
      description: "Contains the perfect balance of sodium, potassium, and magnesium to replace what you sweat out.",
      color: "text-blue-500",
      bg: "bg-blue-100"
    }
  ];

  return (
    <section id="features" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">
            Engineered for <span className="text-gradient">Maximum Refreshment</span>
          </h2>
          <p className="text-lg text-slate-600">
            Aqua-Kool isn't just another sports drink. It's a scientifically balanced beverage designed specifically for hot climates and high-intensity activities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-[2rem] p-8 shadow-sm hover:shadow-xl transition-shadow border border-slate-100 group"
            >
              <div className={`w-16 h-16 rounded-2xl ${feature.bg} ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
