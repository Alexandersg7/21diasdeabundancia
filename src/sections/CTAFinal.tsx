import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star, Shield, CheckCircle, Lock } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const CTAFinal = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section-padding relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #0A0A0A 0%, #1A1500 50%, #0A0A0A 100%)',
      }}
    >
      {/* Efecto de brillo */}
      <div 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(212, 175, 55, 0.3) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="container-custom relative z-10">
        <div ref={contentRef} className="max-w-3xl mx-auto text-center">
          {/* Título */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">Tu Transformación </span>
            <span className="text-gradient-gold">Comienza Hoy</span>
          </h2>

          <p className="text-gray-300 text-lg mb-8">
            No esperes más para liberar los bloqueos que te han impedido recibir la abundancia que mereces.
          </p>

          {/* Precio */}
          <div className="mb-8">
            <p className="text-gray-400 mb-2">Inversión en ti mismo:</p>
            <div className="flex items-center justify-center gap-4">
              <span className="text-gray-500 line-through text-2xl">$25 USD</span>
              <span className="text-5xl sm:text-6xl font-bold text-gradient-gold">$15 USD</span>
            </div>
            <p className="text-[#D4AF37] text-sm mt-2">Oferta especial por tiempo limitado</p>
          </div>

          {/* Botón CTA */}
          <a
            href="https://pay.hotmart.com/P104308237I?checkoutMode=10"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center justify-center gap-3 text-xl px-10 py-5 mb-10 animate-pulse-glow"
          >
            <Star className="w-6 h-6" />
            Comprar Ahora
            <span className="text-sm font-normal opacity-80">- Acceso Inmediato</span>
          </a>

          {/* Garantía */}
          <div className="bg-[#1A1A1A]/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-[#D4AF37]/30">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Shield className="w-8 h-8 text-[#D4AF37]" />
              <h3 className="text-xl font-bold text-white">Garantía de Satisfacción</h3>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Lock className="w-5 h-5 text-[#D4AF37] mt-0.5 flex-shrink-0" />
                <p className="text-gray-300 text-left">
                  <span className="text-white font-medium">Pago seguro</span> a través de la plataforma Hotmart
                </p>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#D4AF37] mt-0.5 flex-shrink-0" />
                <p className="text-gray-300 text-left">
                  <span className="text-white font-medium">Garantía de satisfacción de 7 días:</span> Si el producto no cumple con tus expectativas, puedes solicitar la devolución de tu dinero de forma rápida y sencilla.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-[#D4AF37]/20">
              <p className="text-[#D4AF37] text-sm">
                Sin preguntas. Sin complicaciones. Tu satisfacción es nuestra prioridad.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTAFinal;
