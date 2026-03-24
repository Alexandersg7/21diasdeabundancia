import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star, ArrowDown, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animación del título
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 40 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1, 
          delay: 0.2,
          ease: 'power2.out' 
        }
      );

      // Animación del subtítulo
      gsap.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 40 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1, 
          delay: 0.4,
          ease: 'power2.out' 
        }
      );

      // Animación de los botones
      gsap.fromTo(
        buttonsRef.current,
        { opacity: 0, y: 40 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1, 
          delay: 0.6,
          ease: 'power2.out' 
        }
      );

      // Animación de la imagen
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, scale: 0.95 },
        { 
          opacity: 1, 
          scale: 1, 
          duration: 1, 
          delay: 0.5,
          ease: 'power2.out' 
        }
      );

      // Animación de flotación del libro
      gsap.to(imageRef.current, {
        y: -10,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });
    }, sectionRef);

    // Partículas doradas
    const canvas = particlesRef.current;
    if (canvas) {
      const ctx2d = canvas.getContext('2d');
      if (ctx2d) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const particles: Array<{
          x: number;
          y: number;
          size: number;
          speedX: number;
          speedY: number;
          opacity: number;
        }> = [];

        for (let i = 0; i < 50; i++) {
          particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 3 + 1,
            speedX: (Math.random() - 0.5) * 0.3,
            speedY: (Math.random() - 0.5) * 0.3,
            opacity: Math.random() * 0.4 + 0.1,
          });
        }

        let animationId: number;
        const animate = () => {
          ctx2d.clearRect(0, 0, canvas.width, canvas.height);
          
          particles.forEach((particle) => {
            particle.x += particle.speedX;
            particle.y += particle.speedY;

            if (particle.x < 0) particle.x = canvas.width;
            if (particle.x > canvas.width) particle.x = 0;
            if (particle.y < 0) particle.y = canvas.height;
            if (particle.y > canvas.height) particle.y = 0;

            ctx2d.beginPath();
            ctx2d.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx2d.fillStyle = `rgba(212, 175, 55, ${particle.opacity})`;
            ctx2d.fill();
          });

          animationId = requestAnimationFrame(animate);
        };

        animate();

        const handleResize = () => {
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', handleResize);

        return () => {
          cancelAnimationFrame(animationId);
          window.removeEventListener('resize', handleResize);
        };
      }
    }

    return () => ctx.revert();
  }, []);

  const scrollToContent = () => {
    const nextSection = document.getElementById('problema');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Canvas de partículas */}
      <canvas
        ref={particlesRef}
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 1 }}
      />

      {/* Gradiente de fondo */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(212, 175, 55, 0.08) 0%, transparent 60%)',
          zIndex: 0,
        }}
      />

      {/* Contenido */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Columna de texto */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 mb-6">
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
              <span className="text-[#D4AF37] text-sm font-medium">Reto de 21 Días</span>
            </div>

            {/* Título */}
            <h1
              ref={titleRef}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6"
            >
              <span className="text-white">Reprograma tu Mente,</span>
              <br />
              <span className="text-gradient-gold">Transforma tu Realidad</span>
            </h1>

            {/* Subtítulo */}
            <p
              ref={subtitleRef}
              className="text-lg sm:text-xl text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              El método consciente de <span className="text-[#D4AF37] font-semibold">21 días</span> para dejar de bloquear la abundancia y comenzar a recibir con <span className="text-white font-medium">claridad, calma y confianza</span>
            </p>

            {/* Botones */}
            <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="https://pay.hotmart.com/P104308237I?checkoutMode=10"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center justify-center gap-2 text-lg"
              >
                <Star className="w-5 h-5" />
                Comprar Ahora
                <span className="text-xs font-normal opacity-80">- Acceso Inmediato</span>
              </a>
              <button
                onClick={scrollToContent}
                className="btn-secondary inline-flex items-center justify-center gap-2"
              >
                Conocer Más
                <ArrowDown className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Columna de imagen */}
          <div ref={imageRef} className="relative order-1 lg:order-2 flex justify-center">
            <div className="relative">
              {/* Glow effect */}
              <div 
                className="absolute inset-0 rounded-3xl animate-pulse-glow"
                style={{
                  background: 'radial-gradient(circle, rgba(212, 175, 55, 0.3) 0%, transparent 70%)',
                  transform: 'scale(1.2)',
                  filter: 'blur(40px)',
                }}
              />
              
              {/* Imagen del libro */}
              <img
                src="/images/libro-abundancia.png"
                alt="Libro 21 Días de Abundancia Consciente"
                className="relative z-10 w-full max-w-md lg:max-w-lg rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Gradiente inferior */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-32"
        style={{
          background: 'linear-gradient(to top, #0A0A0A, transparent)',
          zIndex: 5,
        }}
      />
    </section>
  );
};

export default Hero;
