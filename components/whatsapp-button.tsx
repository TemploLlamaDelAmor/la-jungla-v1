"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5493516813555?text=Hola!%20Quiero%20consultar%20disponibilidad%20para%20un%20evento."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[100] bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition duration-300"
      aria-label="Consultar por WhatsApp"
    >
      <FaWhatsapp size={28} />
    </a>
  );
}
