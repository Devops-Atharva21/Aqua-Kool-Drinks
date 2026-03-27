import { motion } from 'motion/react';
import { TrendingUp, Truck, Users, ArrowRight } from 'lucide-react';

export default function Distributor() {
  return (
    <section id="distributor" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-aqua-900/40 to-transparent z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-1.5 bg-aqua-500/20 text-aqua-400 rounded-full text-sm font-bold tracking-wider uppercase mb-6 border border-aqua-500/30">
              Partner With Us
            </div>
            <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
              Bring the Chill to Your City. <br />
              <span className="text-aqua-400">Become a Distributor.</span>
            </h2>
            <p className="text-lg text-slate-300 mb-10">
              Aqua-Kool is expanding rapidly across hot climates. Join our network of successful distributors and profit from the fastest-growing cooling beverage brand.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-aqua-400 flex-shrink-0">
                  <TrendingUp size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">High Margins</h4>
                  <p className="text-slate-400">Excellent wholesale pricing ensuring strong retail margins.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-aqua-400 flex-shrink-0">
                  <Truck size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">Reliable Supply Chain</h4>
                  <p className="text-slate-400">Consistent stock availability and fast regional shipping.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-aqua-400 flex-shrink-0">
                  <Users size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">Marketing Support</h4>
                  <p className="text-slate-400">Point-of-sale materials, digital assets, and local ad support.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-3xl p-8 shadow-2xl text-slate-800"
          >
            <h3 className="text-2xl font-bold mb-6 text-center">Inquire About Distribution</h3>
            
            <form className="space-y-4" onSubmit={async (e) => {
              e.preventDefault();
              const form = e.target as HTMLFormElement;
              const formData = new FormData(form);
              const data = Object.fromEntries(formData.entries());
              
              try {
                const response = await fetch('/api/distributors', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify(data)
                });
                
                if (response.ok) {
                  alert('Inquiry submitted successfully! We will contact you soon.');
                  form.reset();
                } else {
                  alert('Failed to submit inquiry. Please try again.');
                }
              } catch (error) {
                console.error('Error submitting form:', error);
                alert('An error occurred. Please try again later.');
              }
            }}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">First Name</label>
                  <input type="text" name="firstName" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-aqua-500 focus:border-aqua-500 outline-none transition-all" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Last Name</label>
                  <input type="text" name="lastName" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-aqua-500 focus:border-aqua-500 outline-none transition-all" placeholder="Doe" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                <input type="email" name="email" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-aqua-500 focus:border-aqua-500 outline-none transition-all" placeholder="john@company.com" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                <input type="tel" name="phone" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-aqua-500 focus:border-aqua-500 outline-none transition-all" placeholder="+91 98765 43210" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">City / Region</label>
                <input type="text" name="city" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-aqua-500 focus:border-aqua-500 outline-none transition-all" placeholder="Mumbai, Maharashtra" />
              </div>

              <button type="submit" className="w-full bg-aqua-500 hover:bg-aqua-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg shadow-aqua-500/30 hover:-translate-y-1 flex items-center justify-center gap-2 mt-6">
                Submit Inquiry <ArrowRight size={20} />
              </button>
              
              <p className="text-xs text-center text-slate-500 mt-4">
                Our team will contact you within 24 hours.
              </p>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
