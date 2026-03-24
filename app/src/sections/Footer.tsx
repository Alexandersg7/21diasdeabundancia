import { Sparkles, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0A0A0A] border-t border-[#1A1A1A]">
      <div className="container-custom py-12">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <div className="flex items-center gap-2 mb-6">
            <Sparkles className="w-6 h-6 text-[#D4AF37]" />
            <span className="text-xl font-bold text-white">Abundancia Consciente</span>
          </div>

          {/* Redes */}
          <div className="flex items-center gap-4 mb-8">
            <a
              href="https://www.instagram.com/gotas_drocio?igsh=aDU0cWdmazNwbHNl"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#1A1A1A] flex items-center justify-center text-gray-400 hover:text-[#E4405F] hover:bg-[#E4405F]/10 transition-all duration-300"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://youtube.com/@inmersiondelser?si=hjuT36ORqei1Wd4H"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#1A1A1A] flex items-center justify-center text-gray-400 hover:text-[#FF0000] hover:bg-[#FF0000]/10 transition-all duration-300"
            >
              <Youtube className="w-5 h-5" />
            </a>
          </div>

          {/* Links legales */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-8 text-sm text-gray-400">
            <a href="#" className="hover:text-[#D4AF37] transition-colors">Términos y Condiciones</a>
            <span className="text-gray-600">|</span>
            <a href="#" className="hover:text-[#D4AF37] transition-colors">Política de Privacidad</a>
            <span className="text-gray-600">|</span>
            <a href="#" className="hover:text-[#D4AF37] transition-colors">Política de Reembolso</a>
          </div>

          {/* Copyright */}
          <div className="text-gray-500 text-sm">
            <p>© 2026 Inmersión del Ser. Todos los derechos reservados.</p>
            <p className="mt-2">
              Diseñado para la transformación personal.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
