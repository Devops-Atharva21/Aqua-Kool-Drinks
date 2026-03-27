import { Star, Quote } from 'lucide-react';
import { motion } from 'motion/react';

export default function SocialProof() {
  const testimonials = [
    {
      name: "Rahul M.",
      role: "Fitness Coach",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      quote: "Working out in the Delhi summer is brutal. Aqua-Kool is the only drink that actually makes me feel cool from the inside out. It's a game-changer for my clients.",
      rating: 5
    },
    {
      name: "Aisha K.",
      role: "University Student",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      quote: "I used to rely on sugary sodas to beat the heat, but they just made me thirstier. Aqua-Kool is so refreshing and gives me the energy I need for long study sessions.",
      rating: 5
    },
    {
      name: "Tariq A.",
      role: "Delivery Partner",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      quote: "Riding in 40°C heat all day drains you. I keep two bottles of Aqua-Kool in my bag. The cooling sensation is instant and it keeps me going without feeling heavy.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-ice-900 text-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex justify-center items-center gap-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={24} className="text-amber-400 fill-amber-400" />
            ))}
          </div>
          <h2 className="text-3xl md:text-5xl font-black mb-6">
            Loved by <span className="text-aqua-400">100,000+</span> Active People
          </h2>
          <p className="text-lg text-ice-100">
            Don't just take our word for it. See how Aqua-Kool is helping people conquer the heat every single day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 relative"
            >
              <Quote size={40} className="text-aqua-500/30 absolute top-6 right-6" />
              
              <div className="flex items-center gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-amber-400 fill-amber-400" />
                ))}
              </div>
              
              <p className="text-ice-50 text-lg mb-8 italic leading-relaxed">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center gap-4 mt-auto">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-aqua-400"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-aqua-300">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-20 pt-10 border-t border-white/10">
          <p className="text-center text-ice-300 text-sm font-semibold uppercase tracking-widest mb-8">Available at your favorite stores</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Placeholder for retail logos */}
            <div className="text-xl font-black tracking-tighter">RELIANCE FRESH</div>
            <div className="text-xl font-black tracking-tighter">SPAR</div>
            <div className="text-xl font-black tracking-tighter">BIGBASKET</div>
            <div className="text-xl font-black tracking-tighter">BLINKIT</div>
            <div className="text-xl font-black tracking-tighter">ZEPTO</div>
          </div>
        </div>
      </div>
    </section>
  );
}
