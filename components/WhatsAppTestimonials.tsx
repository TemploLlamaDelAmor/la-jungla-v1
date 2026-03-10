import { Star } from "lucide-react";

export default function WhatsAppTestimonials() {
  return (
    <div className="bg-sky-500 rounded-[3.5rem] p-10 md:p-20 text-center text-white relative overflow-hidden shadow-2xl shadow-sky-200 my-16">
      {/* Decoración de fondo */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-sky-400/30 rounded-full blur-3xl -ml-32 -mb-32"></div>
      
      <div className="relative z-10">
        <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">Nuestra mayor satisfacción</h2>
        <p className="mb-14 text-sky-50 text-lg opacity-90 max-w-2xl mx-auto font-medium">
          Nada nos hace más felices que recibir estos mensajes al terminar cada evento.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((n) => (
            <div 
              key={n} 
              className="aspect-[9/16] bg-white/10 backdrop-blur-md border border-white/20 rounded-[2rem] flex flex-col items-center justify-center p-4 hover:bg-white/20 transition-all cursor-default group"
            >
              <div className="w-12 h-12 bg-white/20 rounded-full mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Star className="text-white fill-white" size={20} />
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest opacity-60">
                Captura WhatsApp {n}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}