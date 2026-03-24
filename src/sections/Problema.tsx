import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AlertCircle, RefreshCw, HeartCrack } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Problema = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animación del título
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Animación del texto
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: textRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Animación de las tarjetas
      const cards = cardsRef.current?.querySelectorAll('.problem-card');
      if (cards) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 40, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const problemas = [
    {
      icon: RefreshCw,
      titulo: 'El Ciclo de la Lucha',
      descripcion: 'Sientes que luchas constantemente pero los resultados no llegan. El esfuerzo no se traduce en abundancia.',
    },
    {
      icon: AlertCircle,
      titulo: 'Autosabotaje',
      descripcion: 'Te autosaboteas cuando las cosas empiezan a mejorar. Justo cuando todo fluye, encuentras formas de detenerlo.',
    },
    {
      icon: HeartCrack,
      titulo: 'Culpa al Desear Más',
      descripcion: 'Sientes culpa al desear más abundancia. Como si querer prosperar fuera algo negativo o egoísta.',
    },
  ];

  return (
    <section
      id="problema"
      ref={sectionRef}
      className="section-padding bg-[#141414]"
    >
      <div className="container-custom">
        {/* Título */}
        <h2
          ref={titleRef}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-8"
        >
          <span className="text-white">¿Te Sientes Atrapado en el </span>
          <span className="text-gradient-gold">Ciclo de la Escasez</span>
          <span className="text-white">?</span>
        </h2>

        {/* Texto principal */}
        <div ref={textRef} className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-lg sm:text-xl text-gray-300 mb-6 leading-relaxed">
            Has leído libros, escuchado podcasts, intentado pensar positivo...
          </p>
          <p className="text-xl sm:text-2xl text-white font-semibold mb-6">
            Pero algo no termina de encajar.
          </p>
          <p className="text-lg text-gray-400 leading-relaxed">
            La abundancia parece llegarle a otros, pero a ti se te escapa. 
            Cada vez que intentas avanzar, aparecen bloqueos invisibles que te detienen.
          </p>
        </div>

        {/* Tarjetas de problemas */}
        <div ref={cardsRef} className="grid md:grid-cols-3 gap-6">
          {problemas.map((problema, index) => (
            <div
              key={index}
              className="problem-card card-glass p-8 text-center hover:border-[#D4AF37]/30 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#D4AF37]/10 flex items-center justify-center">
                <problema.icon className="w-8 h-8 text-[#D4AF37]" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                {problema.titulo}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {problema.descripcion}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-300 text-lg mb-6">
            <span className="text-[#D4AF37]">No estás solo.</span> Estos patrones son más comunes de lo que crees.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Problema;
