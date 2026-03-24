import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Clock, Zap, AlertTriangle, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Urgencia = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 40 },
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
      className="section-padding bg-[#0A0A0A]"
    >
      <div className="container-custom">
        <div ref={contentRef}>
          {/* Banner de urgencia */}
          <div className="bg-gradient-to-r from-[#D4AF37]/20 via-[#D4AF37]/10 to-[#D4AF37]/20 rounded-2xl p-8 sm:p-10 border border-[#D4AF37]/30 text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Clock className="w-8 h-8 text-[#D4AF37] animate-pulse" />
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Acceso Inmediato al Comprar
              </h2>
            </div>

            <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="flex flex-col items-center gap-3">
                <div className="w-14 h-14 rounded-full bg-[#D4AF37]/20 flex items-center justify-center">
                  <Zap className="w-7 h-7 text-[#D4AF37]" />
                </div>
                <p className="text-white font-semibold">Acceso Inmediato</p>
                <p className="text-gray-400 text-sm">Recibe el libro en tu correo al instante</p>
              </div>

              <div className="flex flex-col items-center gap-3">
                <div className="w-14 h-14 rounded-full bg-[#D4AF37]/20 flex items-center justify-center">
                  <Sparkles className="w-7 h-7 text-[#D4AF37]" />
                </div>
                <p className="text-white font-semibold">Oferta por Tiempo Limitado</p>
                <p className="text-gray-400 text-sm">Precio especial disponible ahora</p>
              </div>

              <div className="flex flex-col items-center gap-3">
                <div className="w-14 h-14 rounded-full bg-[#D4AF37]/20 flex items-center justify-center">
                  <AlertTriangle className="w-7 h-7 text-[#D4AF37]" />
                </div>
                <p className="text-white font-semibold">No Dejes Pasar Esta Oportunidad</p>
                <p className="text-gray-400 text-sm">Cada día de espera es un día más de escasez</p>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-[#D4AF37]/20">
              <p className="text-gray-300 text-lg mb-6">
                <span className="text-[#D4AF37] font-semibold">Recuerda:</span> Cada día que esperas es un día más en el ciclo de la escasez.
              </p>
              <p className="text-white text-xl font-semibold">
                La abundancia no llega cuando "estás listo"... llega cuando decides actuar.
              </p>
            </div>
          </div>

          {/* CTA final */}
          <div className="text-center mt-12">
            <a
              href="https://pay.hotmart.com/P104308237I?checkoutMode=10"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-3 text-xl px-10 py-5"
            >
              <Zap className="w-6 h-6" />
              Sí, Quiero Empezar Mi Transformación
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Urgencia;
