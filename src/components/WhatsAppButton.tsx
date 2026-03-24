import { useState } from 'react';
import { MessageCircle, X, Phone } from 'lucide-react';

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const phoneNumbers = [
    { number: '+56939458973', label: 'Contacto 1' },
    { number: '+56932622560', label: 'Contacto 2' },
  ];

  const handleClick = (phone: string) => {
    const message = encodeURIComponent('Hola, estoy interesado en el libro "21 Días de Abundancia Consciente". ¿Me pueden dar más información?');
    window.open(`https://wa.me/${phone.replace('+', '')}?text=${message}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Menu desplegable */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 mb-2 bg-white rounded-xl shadow-2xl overflow-hidden w-64 animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="bg-[#25D366] p-4">
            <p className="text-white font-semibold text-sm">¿Tienes dudas? Escríbenos</p>
            <p className="text-white/80 text-xs">Te responderemos lo antes posible</p>
          </div>
          <div className="p-2">
            {phoneNumbers.map((phone, index) => (
              <button
                key={index}
                onClick={() => handleClick(phone.number)}
                className="w-full flex items-center gap-3 p-3 hover:bg-gray-100 rounded-lg transition-colors text-left"
              >
                <div className="w-10 h-10 bg-[#25D366] rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-medium text-gray-800 text-sm">{phone.label}</p>
                  <p className="text-gray-500 text-xs">{phone.number}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Botón principal */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
          isOpen ? 'bg-gray-600 rotate-90' : 'bg-[#25D366] hover:scale-110 animate-pulse-slow'
        }`}
        style={{
          boxShadow: isOpen 
            ? '0 4px 20px rgba(0,0,0,0.3)' 
            : '0 4px 20px rgba(37, 211, 102, 0.4)',
        }}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageCircle className="w-7 h-7 text-white" />
        )}
      </button>
    </div>
  );
};

export default WhatsAppButton;
