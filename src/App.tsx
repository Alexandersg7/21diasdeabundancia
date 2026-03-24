import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from './sections/Hero';
import Problema from './sections/Problema';
import Solucion from './sections/Solucion';
import Beneficios from './sections/Beneficios';
import QueIncluye from './sections/QueIncluye';
import Autoridad from './sections/Autoridad';
import CTAFinal from './sections/CTAFinal';
import Urgencia from './sections/Urgencia';
import Footer from './sections/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import MetaPixel from './components/MetaPixel';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Initialize ScrollTrigger
    ScrollTrigger.refresh();
    
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <MetaPixel />
      <main>
        <Hero />
        <Problema />
        <Solucion />
        <Beneficios />
        <QueIncluye />
        <Autoridad />
        <CTAFinal />
        <Urgencia />
        <Footer />
      </main>
      <WhatsAppButton />
    </div>
  );
}

export default App;
