import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './FloatingWhatsAppButton.css';

export default function FloatingWhatsAppButton() {
  return (
    <a
      href="https://wa.me/27813872713"
      className="floating-whatsapp-btn"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp />
    </a>
  );
}
