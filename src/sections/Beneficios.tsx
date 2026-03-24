import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Brain, 
  Heart, 
  UserCheck, 
  HandHeart, 
  Zap, 
  Scale 
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Beneficios = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
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

      // Animación de las tarjetas
      const cards = cardsRef.current?.querySelectorAll('.benefit-card');
      if (cards) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 40, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.08,
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

  const beneficios = [
    {
      icon: Brain,
      titulo: 'Libera Creencias Limitantes',
      descripcion: 'Identificarás y liberarás las creencias heredadas que han bloqueado tu abundancia durante años.',
    },
    {
      icon: Heart,
      titulo: 'Sanación Emocional',
      descripcion: 'Sanarás tu relación emocional con el dinero, eliminando culpa, miedo y tensión.',
    },
    {
      icon: UserCheck,
      titulo: 'Autoimagen Próspera',
      descripcion: 'Desarrollarás una autoimagen próspera y alineada con la abundancia que mereces.',
    },
    {
      icon: HandHeart,
      titulo: 'Recibir sin Culpa',
      descripcion: 'Aprenderás a recibir sin culpa ni resistencia, abriéndote al flujo natural de la abundancia.',
    },
    {
      icon: Zap,
      titulo: 'Coherencia Interna',
      descripcion: 'Crearás coherencia entre mente, emoción y acción para manifestar con claridad.',
    },
    {
      icon: Scale,
      titulo: 'Estabilidad y Calma',
      descripcion: 'Sostendrás la abundancia con estabilidad y calma, sin autosabotaje ni ansiedad.',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="section-padding bg-[#141414]"
    >
      <div className="container-custom">
        {/* Título */}
        <h2
          ref={titleRef}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-16"
        >
          <span className="text-white">Lo Que Vas a </span>
          <span className="text-gradient-gold">Transformar</span>
          <span className="text-white"> en 21 Días</span>
        </h2>

        {/* Grid de beneficios */}
        <div ref={cardsRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {beneficios.map((beneficio, index) => (
            <div
              key={index}
              className="benefit-card group bg-[#1A1A1A] rounded-xl p-6 border border-transparent hover:border-[#D4AF37]/30 transition-all duration-300 hover:-translate-y-2"
            >
              {/* Icono */}
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/5 flex items-center justify-center mb-5 group-hover:from-[#D4AF37]/30 group-hover:to-[#D4AF37]/10 transition-all duration-300">
                <beneficio.icon className="w-7 h-7 text-[#D4AF37]" />
              </div>

              {/* Contenido */}
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#D4AF37] transition-colors duration-300">
                {beneficio.titulo}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {beneficio.descripcion}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="https://pay.hotmart.com/P104308237I?checkoutMode=10"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
          >
            Quiero Transformar Mi Vida
          </a>
        </div>
      </div>
    </section>
  );
};

export default Beneficios;
