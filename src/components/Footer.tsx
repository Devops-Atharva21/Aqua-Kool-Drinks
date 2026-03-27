import { Facebook, Twitter, Instagram, Youtube, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-20 pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Col */}
          <div className="col-span-1 lg:col-span-1">
            <a href="#" className="text-3xl font-display font-black tracking-tighter text-white mb-6 inline-block">
              AQUA<span className="text-aqua-500">-KOOL</span>
            </a>
            <p className="text-slate-400 mb-6 leading-relaxed">
              The ultimate cooling beverage designed for hot climates and active lifestyles. Instant refreshment, zero crash.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-aqua-500 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-aqua-500 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-aqua-500 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-aqua-500 hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="hover:text-aqua-400 transition-colors">Home</a></li>
              <li><a href="#products" className="hover:text-aqua-400 transition-colors">Shop Products</a></li>
              <li><a href="#benefits" className="hover:text-aqua-400 transition-colors">Why Aqua-Kool?</a></li>
              <li><a href="#testimonials" className="hover:text-aqua-400 transition-colors">Customer Reviews</a></li>
              <li><a href="#distributor" className="hover:text-aqua-400 transition-colors">Become a Distributor</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 uppercase tracking-wider">Legal</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-aqua-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-aqua-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-aqua-400 transition-colors">Refund Policy</a></li>
              <li><a href="#" className="hover:text-aqua-400 transition-colors">Shipping Info</a></li>
              <li><a href="#" className="hover:text-aqua-400 transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 uppercase tracking-wider">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-aqua-500 flex-shrink-0 mt-1" size={20} />
                <span>123 Cooling Avenue, Indiranagar, Bangalore 560038</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-aqua-500 flex-shrink-0" size={20} />
                <span>+91 1800-AQUA-COOL</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-aqua-500 flex-shrink-0" size={20} />
                <span>hello@aquakool.in</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Aqua-Kool Beverages Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="text-sm text-slate-500">Secure payments by</span>
            {/* Payment icons placeholder */}
            <div className="flex gap-2">
              <div className="w-8 h-5 bg-slate-800 rounded"></div>
              <div className="w-8 h-5 bg-slate-800 rounded"></div>
              <div className="w-8 h-5 bg-slate-800 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
