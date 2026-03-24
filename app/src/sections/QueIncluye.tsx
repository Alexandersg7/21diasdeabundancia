import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar, BookOpen, Target, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const QueIncluye = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const weeksRef = useRef<HTMLDivElement>(null);

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

      // Animación de las semanas
      const weeks = weeksRef.current?.querySelectorAll('.week-card');
      if (weeks) {
        gsap.fromTo(
          weeks,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: weeksRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const semanas = [
    {
      numero: 1,
      titulo: 'Conciencia',
      subtitulo: 'Días 1-7: Despertar de la relación con la abundancia',
      icon: Target,
      color: '#D4AF37',
      dias: [
        'Día 1: Declaración de Intención Consciente',
        'Día 2: Identificación de Creencias Limitantes',
        'Día 3: Reprogramación Consciente',
        'Día 4: Sanar la Relación Emocional con el Dinero',
        'Día 5: Gratitud Consciente y Expansiva',
        'Día 6: Activar el Merecimiento',
        'Día 7: Liberar Culpas y Juicios',
      ],
    },
    {
      numero: 2,
      titulo: 'Entrenamiento',
      subtitulo: 'Días 8-14: Entrenar una nueva forma de vivir',
      icon: BookOpen,
      color: '#F4D03F',
      dias: [
        'Día 8: Visualización Creativa Consciente',
        'Día 9: Lenguaje Abundante y Consciente',
        'Día 10: Orden Externo y Coherencia Material',
        'Día 11: Dar Conscientemente',
        'Día 12: Recepción Consciente',
        'Día 13: Acción Inspirada',
        'Día 14: Autoimagen Próspera',
      ],
    },
    {
      numero: 3,
      titulo: 'Integración',
      subtitulo: 'Días 15-21: Estabilidad y sostén a largo plazo',
      icon: Sparkles,
      color: '#B8860B',
      dias: [
        'Día 15: Sanar el Pasado Financiero',
        'Día 16: Confianza y Entrega Consciente',
        'Día 17: Recibir sin Culpa',
        'Día 18: Gratitud Expansiva',
        'Día 19: Integración Cuerpo, Mente y Emoción',
        'Día 20: Visión Consciente a Largo Plazo',
        'Día 21: Cierre, Anclaje y Continuidad',
      ],
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
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-6"
        >
          <span className="text-white">¿Qué Incluye el </span>
          <span className="text-gradient-gold">Libro</span>
          <span className="text-white">?</span>
        </h2>
        <p className="text-center text-gray-400 text-lg mb-16 max-w-2xl mx-auto">
          Un viaje estructurado de 21 días con ejercicios prácticos, reflexiones profundas 
          y herramientas para transformar tu relación con la abundancia.
        </p>

        {/* Timeline de semanas */}
        <div ref={weeksRef} className="relative">
          {/* Línea central (solo en desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#D4AF37] via-[#D4AF37]/50 to-transparent transform -translate-x-1/2" />

          <div className="space-y-12 lg:space-y-0">
            {semanas.map((semana, index) => (
              <div
                key={index}
                className={`week-card relative lg:grid lg:grid-cols-2 lg:gap-12 ${
                  index % 2 === 0 ? '' : 'lg:direction-rtl'
                }`}
              >
                {/* Contenido */}
                <div className={`${index % 2 === 0 ? 'lg:pr-16 lg:text-right' : 'lg:pl-16 lg:col-start-2'}`}>
                  <div className={`bg-gradient-to-br from-[#1A1A1A] to-[#141414] rounded-2xl p-6 sm:p-8 border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 transition-all duration-300`}>
                    {/* Header */}
                    <div className={`flex items-center gap-4 mb-6 ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                      <div 
                        className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: `${semana.color}20` }}
                      >
                        <semana.icon className="w-7 h-7" style={{ color: semana.color }} />
                      </div>
                      <div className={index % 2 === 0 ? 'lg:text-right' : ''}>
                        <div className="flex items-center gap-2 mb-1">
                          <Calendar className="w-4 h-4 text-[#D4AF37]" />
                          <span className="text-[#D4AF37] text-sm font-medium">Semana {semana.numero}</span>
                        </div>
                        <h3 className="text-2xl font-bold text-white">{semana.titulo}</h3>
                      </div>
                    </div>

                    <p className="text-gray-400 mb-6">{semana.subtitulo}</p>

                    {/* Lista de días */}
                    <ul className={`space-y-3 ${index % 2 === 0 ? 'lg:text-right' : ''}`}>
                      {semana.dias.map((dia, diaIndex) => (
                        <li 
                          key={diaIndex} 
                          className={`flex items-start gap-3 text-gray-300 ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}
                        >
                          <span 
                            className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                            style={{ backgroundColor: semana.color }}
                          />
                          <span className="text-sm">{dia}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Punto en la línea (solo en desktop) */}
                <div className="hidden lg:flex absolute left-1/2 top-8 transform -translate-x-1/2">
                  <div 
                    className="w-6 h-6 rounded-full border-4 border-[#0A0A0A] flex items-center justify-center"
                    style={{ backgroundColor: semana.color }}
                  />
                </div>

                {/* Espacio vacío para la otra columna */}
                <div className={`hidden lg:block ${index % 2 === 0 ? 'lg:col-start-2' : 'lg:col-start-1 lg:row-start-1'}`} />
              </div>
            ))}
          </div>
        </div>

        {/* Resumen */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-4 bg-[#1A1A1A] rounded-xl border border-[#D4AF37]/20">
            <BookOpen className="w-6 h-6 text-[#D4AF37]" />
            <span className="text-white">
              <span className="text-[#D4AF37] font-bold">21 días</span> de ejercicios prácticos + 
              <span className="text-[#D4AF37] font-bold"> Cuaderno de trabajo</span> personal
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QueIncluye;
