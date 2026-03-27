import { motion } from 'motion/react';
import { ShoppingCart } from 'lucide-react';

export default function ProductShowcase() {
  const products = [
    {
      name: "Aqua-Kool Original",
      flavor: "Icy Citrus",
      description: "The classic cooling sensation with a zesty citrus kick.",
      price: "₹45",
      color: "from-yellow-300 to-orange-400",
      image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Aqua-Kool Berry Blast",
      flavor: "Mixed Berry",
      description: "Sweet, tart, and intensely refreshing mixed berry flavor.",
      price: "₹45",
      color: "from-purple-400 to-pink-500",
      image: "https://images.unsplash.com/photo-1556881286-fc6915169721?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Aqua-Kool Zero",
      flavor: "Cool Mint",
      description: "Zero sugar, zero calories, maximum cooling minty freshness.",
      price: "₹50",
      color: "from-teal-300 to-emerald-400",
      image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <section id="products" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">
            Choose Your <span className="text-gradient">Chill</span>
          </h2>
          <p className="text-lg text-slate-600">
            Available in three refreshing flavors. Find your favorite way to beat the heat.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-50 rounded-[2.5rem] p-8 border border-slate-100 hover:shadow-2xl hover:border-ice-200 transition-all group flex flex-col h-full"
            >
              {/* Product Image Placeholder */}
              <div className="relative w-full aspect-[3/4] mb-8 rounded-3xl overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-20 group-hover:opacity-40 transition-opacity z-0`}></div>
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="relative z-10 w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                
                {/* Flavor Tag */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-bold text-slate-800 z-20 shadow-sm">
                  {product.flavor}
                </div>
              </div>

              <div className="flex-grow flex flex-col">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{product.name}</h3>
                <p className="text-slate-600 mb-6 flex-grow">{product.description}</p>
                
                <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-200">
                  <span className="text-2xl font-black text-slate-900">{product.price}</span>
                  <button className="bg-aqua-500 hover:bg-aqua-600 text-white p-3 rounded-full transition-colors shadow-lg shadow-aqua-500/30 hover:-translate-y-1">
                    <ShoppingCart size={20} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
