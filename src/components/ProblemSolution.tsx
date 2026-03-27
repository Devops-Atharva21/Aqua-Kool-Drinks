import { ThermometerSun, BatteryWarning, Droplets, ArrowRight } from 'lucide-react';

export default function ProblemSolution() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
            Summer Heat Draining Your Energy?
          </h2>
          <p className="text-lg text-slate-600">
            When the temperature rises, your body loses essential fluids and energy. Don't let the heat slow you down.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Pain Point 1 */}
          <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 text-center relative overflow-hidden group hover:border-red-200 transition-colors">
            <div className="w-16 h-16 bg-red-100 text-red-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <ThermometerSun size={32} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Extreme Heat</h3>
            <p className="text-slate-600">
              Scorching temperatures make you feel sluggish, uncomfortable, and unable to focus on your day.
            </p>
          </div>

          {/* Pain Point 2 */}
          <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 text-center relative overflow-hidden group hover:border-amber-200 transition-colors">
            <div className="w-16 h-16 bg-amber-100 text-amber-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <Droplets size={32} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Rapid Dehydration</h3>
            <p className="text-slate-600">
              Sweating depletes your body of vital water and electrolytes faster than you can replace them.
            </p>
          </div>

          {/* Pain Point 3 */}
          <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 text-center relative overflow-hidden group hover:border-orange-200 transition-colors">
            <div className="w-16 h-16 bg-orange-100 text-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <BatteryWarning size={32} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Energy Crash</h3>
            <p className="text-slate-600">
              The combination of heat and fluid loss leads to sudden fatigue, ruining your productivity and workouts.
            </p>
          </div>
        </div>

        {/* The Solution */}
        <div className="bg-gradient-cool rounded-[2.5rem] p-8 md:p-12 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-aqua-400/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-sm font-bold tracking-wider uppercase mb-4">
                The Aqua-Kool Solution
              </div>
              <h3 className="text-3xl md:text-4xl font-black mb-4 leading-tight">
                Flip the Switch on Summer Heat.
              </h3>
              <p className="text-ice-100 text-lg mb-6">
                Aqua-Kool isn't just water. It's a scientifically formulated cooling beverage that drops your core temperature sensation, replenishes lost electrolytes, and provides a clean energy boost—all in one delicious, icy sip.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-aqua-400 flex items-center justify-center text-ice-900 font-bold text-sm">✓</div>
                  <span className="font-medium">Instant cooling sensation on the first sip</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-aqua-400 flex items-center justify-center text-ice-900 font-bold text-sm">✓</div>
                  <span className="font-medium">Rapid electrolyte replenishment</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-aqua-400 flex items-center justify-center text-ice-900 font-bold text-sm">✓</div>
                  <span className="font-medium">Zero crash, sustained energy</span>
                </li>
              </ul>
            </div>
            
            <div className="flex-shrink-0">
              <a href="#products" className="inline-flex items-center justify-center gap-2 bg-white text-ice-900 hover:bg-ice-50 px-8 py-4 rounded-full font-bold text-lg transition-transform hover:scale-105 shadow-xl">
                Experience the Chill <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
