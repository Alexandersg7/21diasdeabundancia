import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Eye, Dumbbell, Infinity, CheckCircle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Solucion = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const pilaresRef = useRef<HTMLDivElement>(null);

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

      // Animación de los pilares
      const pilares = pilaresRef.current?.querySelectorAll('.pilar-card');
      if (pilares) {
        gsap.fromTo(
          pilares,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.15,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: pilaresRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const pilares = [
    {
      icon: Eye,
      titulo: 'Conciencia',
      subtitulo: 'Ver lo que antes era automático',
      descripcion: 'Antes de cambiar cualquier comportamiento, es necesario comprender desde dónde estás operando. Identifica creencias heredadas, emociones no resueltas y patrones internos que influyen en tu relación con la abundancia.',
      color: '#D4AF37',
    },
    {
      icon: Dumbbell,
      titulo: 'Entrenamiento',
      subtitulo: 'Practicar una nueva forma de vivir',
      descripcion: 'Comienzas a entrenar una nueva manera de pensar, sentir y actuar de forma coherente con la abundancia que deseas sostener. Pequeñas acciones conscientes que transforman tu realidad.',
      color: '#F4D03F',
    },
    {
      icon: Infinity,
      titulo: 'Integración',
      subtitulo: 'Sostener sin esfuerzo ni autosabotaje',
      descripcion: 'Muchas personas logran abrirse a la abundancia, pero pocas logran sostenerla. Esta etapa integra lo aprendido para que no dependa de estados de ánimo ni motivación momentánea.',
      color: '#B8860B',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="section-padding bg-[#0A0A0A]"
    >
      <div className="container-custom">
        {/* Título */}
        <h2
          ref={titleRef}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-8"
        >
          <span className="text-white">Un Proceso que </span>
          <span className="text-gradient-gold">No Te Promete Abundancia</span>
          <span className="text-white">...</span>
          <br />
          <span className="text-white">Te Enseña a </span>
          <span className="text-gradient-gold">Dejar de Bloquearla</span>
        </h2>

        {/* Texto */}
        <div ref={textRef} className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-lg sm:text-xl text-gray-300 mb-6 leading-relaxed">
            Este <span className="text-white font-semibold">no es otro libro de motivación rápida</span>.
          </p>
          <p className="text-gray-400 leading-relaxed mb-6">
            Es un método de 21 días que trabaja en <span className="text-[#D4AF37]">3 niveles fundamentales</span>, 
            diseñado para personas que están cansadas de luchar, de exigirse, de sentirse culpables por desear más.
          </p>
          <div className="flex items-center justify-center gap-2 text-[#D4AF37]">
            <CheckCircle className="w-5 h-5" />
            <span className="font-medium">Sin fórmulas mágicas. Sin frases vacías. Solo un proceso honesto y transformador.</span>
          </div>
        </div>

        {/* Pilares */}
        <div ref={pilaresRef} className="grid md:grid-cols-3 gap-8">
          {pilares.map((pilar, index) => (
            <div
              key={index}
              className="pilar-card relative bg-gradient-to-b from-[#1A1A1A] to-[#141414] rounded-2xl p-8 border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Número */}
              <div 
                className="absolute -top-4 -right-4 w-10 h-10 rounded-full flex items-center justify-center text-black font-bold text-lg"
                style={{ backgroundColor: pilar.color }}
              >
                {index + 1}
              </div>

              {/* Icono */}
              <div 
                className="w-16 h-16 rounded-xl flex items-center justify-center mb-6"
                style={{ backgroundColor: `${pilar.color}20` }}
              >
                <pilar.icon className="w-8 h-8" style={{ color: pilar.color }} />
              </div>

              {/* Contenido */}
              <h3 className="text-2xl font-bold text-white mb-2">
                {pilar.titulo}
              </h3>
              <p className="text-[#D4AF37] font-medium mb-4">
                {pilar.subtitulo}
              </p>
              <p className="text-gray-400 leading-relaxed">
                {pilar.descripcion}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solucion;
