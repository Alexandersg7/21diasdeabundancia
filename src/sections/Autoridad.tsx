import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Instagram, Youtube, Users, Award, Heart } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Autoridad = () => {
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
      className="section-padding bg-[#141414]"
    >
      <div className="container-custom">
        <div ref={contentRef}>
          {/* Título */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-6">
            <span className="text-white">Creado con </span>
            <span className="text-gradient-gold">Propósito y Experiencia</span>
          </h2>

          <p className="text-center text-gray-400 text-lg mb-16 max-w-3xl mx-auto">
            Este método fue creado por el equipo de <span className="text-[#D4AF37] font-semibold">Inmersión del Ser</span>, 
            dedicados a la transformación personal y espiritual desde la conciencia.
          </p>

          {/* Stats */}
          <div className="grid sm:grid-cols-3 gap-6 mb-16">
            <div className="bg-[#1A1A1A] rounded-xl p-6 text-center border border-[#D4AF37]/10">
              <Users className="w-8 h-8 text-[#D4AF37] mx-auto mb-3" />
              <p className="text-3xl font-bold text-white mb-1">+1000</p>
              <p className="text-gray-400 text-sm">Personas transformadas</p>
            </div>
            <div className="bg-[#1A1A1A] rounded-xl p-6 text-center border border-[#D4AF37]/10">
              <Award className="w-8 h-8 text-[#D4AF37] mx-auto mb-3" />
              <p className="text-3xl font-bold text-white mb-1">21 Días</p>
              <p className="text-gray-400 text-sm">De contenido estructurado</p>
            </div>
            <div className="bg-[#1A1A1A] rounded-xl p-6 text-center border border-[#D4AF37]/10">
              <Heart className="w-8 h-8 text-[#D4AF37] mx-auto mb-3" />
              <p className="text-3xl font-bold text-white mb-1">100%</p>
              <p className="text-gray-400 text-sm">Compromiso con tu cambio</p>
            </div>
          </div>

          {/* Redes Sociales */}
          <div className="bg-gradient-to-br from-[#1A1A1A] to-[#141414] rounded-2xl p-8 border border-[#D4AF37]/20">
            <h3 className="text-2xl font-bold text-white text-center mb-8">
              Síguenos para más contenido de valor
            </h3>

            <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/gotas_drocio?igsh=aDU0cWdmazNwbHNl"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-6 bg-[#0A0A0A] rounded-xl border border-transparent hover:border-[#E4405F]/50 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#833AB4] via-[#E4405F] to-[#F77737] flex items-center justify-center">
                  <Instagram className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold group-hover:text-[#E4405F] transition-colors">Instagram</p>
                  <p className="text-gray-400 text-sm">@gotas_drocio</p>
                </div>
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com/@inmersiondelser?si=hjuT36ORqei1Wd4H"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-6 bg-[#0A0A0A] rounded-xl border border-transparent hover:border-[#FF0000]/50 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-xl bg-[#FF0000] flex items-center justify-center">
                  <Youtube className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold group-hover:text-[#FF0000] transition-colors">YouTube</p>
                  <p className="text-gray-400 text-sm">@inmersiondelser</p>
                </div>
              </a>
            </div>

            <p className="text-center text-gray-400 mt-6 text-sm">
              Únete a nuestra comunidad y recibe contenido exclusivo sobre transformación personal y abundancia consciente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Autoridad;
