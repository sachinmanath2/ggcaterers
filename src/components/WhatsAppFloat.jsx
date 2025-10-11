
import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppFloat = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hello! I'm interested in your catering services");
    const whatsappUrl = `https://wa.me/917889631171?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="whatsapp-float"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle size={24} />
    </button>
  );
};

export default WhatsAppFloat;
