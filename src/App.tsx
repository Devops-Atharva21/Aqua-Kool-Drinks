import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import ProductHighlight from './components/ProductHighlight';
import SocialProof from './components/SocialProof';
import Benefits from './components/Benefits';
import HowItWorks from './components/HowItWorks';
import ProductShowcase from './components/ProductShowcase';
import Distributor from './components/Distributor';
import CtaBlock from './components/CtaBlock';
import Footer from './components/Footer';
import ExitIntentPopup from './components/ExitIntentPopup';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import TopBanner from './components/TopBanner';

export default function App() {
  const [showExitPopup, setShowExitPopup] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        setShowExitPopup(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, []);

  return (
    <div className="min-h-screen font-sans">
      <TopBanner />
      <Navbar />
      <main>
        <Hero />
        <ProblemSolution />
        <ProductHighlight />
        <SocialProof />
        <Benefits />
        <HowItWorks />
        <ProductShowcase />
        <Distributor />
        <CtaBlock />
      </main>
      <Footer />
      <FloatingWhatsApp />
      {showExitPopup && <ExitIntentPopup onClose={() => setShowExitPopup(false)} />}
    </div>
  );
}
