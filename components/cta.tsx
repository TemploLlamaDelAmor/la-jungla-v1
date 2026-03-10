import { Instagram, Facebook, MessageCircle, MapPin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 pt-10 md:pt-12 pb-6 md:pb-8">
        
        {/* SECCIÓN PRINCIPAL */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 items-start mb-8 md:mb-10">
          
          {/* 1. MARCA */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-black text-gray-900 tracking-tighter mb-1">
              LA JUNGLA <span className="text-sky-500">ENCANTADA</span>
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
              Más de 20 años profesionalizando la diversión en Córdoba.
            </p>
          </div>

          {/* 2. CTA */}
          <div className="flex flex-col items-center justify-center">
            <a
              href={`https://wa.me/5493516813555?text=${encodeURIComponent(`Hola! Quiero consultar disponibilidad para un evento`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white px-7 py-3 rounded-xl font-bold transition-all shadow-md shadow-sky-100 text-sm"
            >
              <MessageCircle size={18} />
              <span>Consultar Disponibilidad</span>
            </a>
            <p className="text-[10px] text-gray-400 mt-2 flex items-center gap-1.5 uppercase tracking-wider font-semibold">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
              Respuesta inmediata
            </p>
          </div>

          {/* 3. CONTACTO (Desktop) */}
          <div className="hidden md:flex flex-col items-end gap-1.5 text-sm text-gray-500">
            <span className="flex items-center gap-2">
              Córdoba, Argentina <MapPin size={14} className="text-sky-500" />
            </span>
            <span className="flex items-center gap-2">
              lajunglaencantadacba@gmail.com <Mail size={14} className="text-sky-500" />
            </span>
          </div>
        </div>

        {/* FILA INFERIOR REESTRUCTURADA */}
        <div className="border-t border-gray-50 pt-6 flex flex-col items-center justify-center gap-3 md:flex-row md:gap-8">
          
          {/* Redes Sociales */}
          <div className="flex items-center gap-5">
            <a href="https://www.instagram.com/lajunglaencantada.cba/" className="text-gray-400 hover:text-sky-500 transition-colors">
              <Instagram size={18} />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61578947634183&locale=es_LA" className="text-gray-400 hover:text-sky-500 transition-colors">
              <Facebook size={18} />
            </a>
          </div>

          {/* Registro de Marca / Copyright */}
          <p className="text-[10px] md:text-[11px] text-gray-400 uppercase tracking-[0.2em] md:border-l md:border-gray-200 md:pl-8">
            © {new Date().getFullYear()} La Jungla Encantada
          </p>
        </div>

      </div>
    </footer>
  );
}