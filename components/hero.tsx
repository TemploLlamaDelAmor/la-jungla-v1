export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center text-center px-6 pt-28 bg-gradient-to-br from-sky-500 to-cyan-400 text-white">
      
      <div className="max-w-4xl">
        
        {/* Título principal */}
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
          Diversión asegurada para todas las edades
        </h1>

        {/* Subtítulo */}
        <p className="text-lg md:text-xl mb-8 opacity-95">
          Organizamos cumpleaños, eventos familiares y celebraciones inolvidables 
          con inflables, toro mecánico, juegos acuáticos y mucho más.
        </p>

        {/* Botones */}
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/549XXXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-lg"
          >
            Reservar por WhatsApp
          </a>

          <a
            href="#servicios"
            className="bg-white/20 hover:bg-white/30 px-8 py-4 rounded-2xl font-semibold transition"
          >
            Ver catálogo
          </a>
        </div>

      </div>
    </section>
  );
}
