import ImageCarousel from "@/components/ImageCarousel";
import Cta from "@/components/cta"; 
import { History, ShieldCheck, MapPin, Star } from "lucide-react";

export default function SobreNosotrosPage() {
  const eventImages = Array.from({ length: 46 }, (_, i) => `/eventos/${i + 1}.jpg`);

  return (
    <main className="bg-white">
      <section className="pt-32 pb-10 md:pb-20 px-6 min-h-screen">
        <div className="max-w-5xl mx-auto">

          {/* CABECERA OPTIMIZADA */}
          <div className="text-center mb-12 md:mb-16">
            <span className="text-sky-500 font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs">
              Nuestra esencia
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-gray-900 mt-3 mb-6 tracking-tighter leading-none">
              Creamos momentos <br/><span className="text-sky-500">inolvidables</span>
            </h1>
            {/* Texto con tamaño responsivo para no saturar en móvil */}
            <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-medium px-2 md:px-0">
              Más que alquilar juegos, nos dedicamos a que tu única preocupación sea disfrutar. 
              <span className="hidden md:inline"> Sabemos que detrás de cada inflable o toro mecánico, hay un momento familiar o un logro empresarial que merece ser celebrado a la perfección.</span>
              <span className="md:hidden"> Nos encargamos de cada detalle para que tu celebración sea perfecta.</span>
            </p>
          </div>

          {/* GALERÍA / MOMENTOS */}
          <div className="mb-16 md:mb-24 group">
            <div className="rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl shadow-sky-100">
              <ImageCarousel images={eventImages} large />
            </div>
            <p className="text-center text-[10px] text-gray-400 mt-4 tracking-widest uppercase">
              Imágenes reales de nuestros eventos
            </p>
          </div>

          {/* QUIÉNES SOMOS / HISTORIA */}
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center mb-16 md:mb-24">
            <div className="space-y-4 md:space-y-6 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-sky-50 rounded-full text-sky-600">
                <History size={16} />
                <span className="text-[11px] font-bold uppercase tracking-wider">Nuestra Trayectoria</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight">
                Más de 20 años profesionalizando la diversión
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Nacimos como un emprendimiento familiar con un propósito claro: brindar un servicio de entretenimiento donde la <b>seguridad</b> y la <b>puntualidad</b> no fueran opcionales.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Hoy, con más de 2.000 eventos realizados, seguimos recorriendo cada rincón de la provincia con entusiasmo porque entendemos que detrás de cada inflable o toro mecánico alquilado, hay un momento familiar o un logro empresarial que merece ser celebrado a la perfección.              </p>
            </div>
            
            
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {[
                { label: "Eventos", val: "+2.000" },
                { label: "Años", val: "+20" },
                { label: "Juegos", val: "+30" }, 
                { label: "Diversión", val: "100%" }, 
              ].map((stat, i) => (
                <div key={i} className="bg-gray-50 p-5 md:p-6 rounded-2xl md:rounded-3xl text-center border border-gray-100">
                  <p className="text-xl md:text-2xl font-black text-sky-500">{stat.val}</p>
                  <p className="text-[10px] font-bold text-gray-400 uppercase mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* COMPROMISO CON LA EXCELENCIA (Espaciado final reducido) */}
          <div className="py-12 md:py-16 bg-sky-50/50 rounded-[2.5rem] md:rounded-[3rem] px-6 md:px-8">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 text-center mb-10 md:mb-16">
              Compromiso con la excelencia
            </h2>
            
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-white rounded-2xl flex items-center justify-center text-sky-500 shadow-sm mb-4 md:mb-6">
                  <ShieldCheck size={28} />
                </div>
                <h4 className="font-bold text-gray-900 mb-2 text-base md:text-lg">Seguridad Certificada</h4>
                <p className="text-xs md:text-sm text-gray-500 leading-relaxed max-w-[220px]">
                  Equipos con mantenimiento permanente e instalación profesional.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-white rounded-2xl flex items-center justify-center text-sky-500 shadow-sm mb-4 md:mb-6">
                  <MapPin size={28} />
                </div>
                <h4 className="font-bold text-gray-900 mb-2 text-base md:text-lg">Logística Propia</h4>
                <p className="text-xs md:text-sm text-gray-500 leading-relaxed max-w-[220px]">
                  Vehículos propios para garantizar puntualidad en toda la provincia.
                </p>
              </div>

              <div className="flex flex-col items-center text-center sm:col-span-2 md:col-span-1">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-white rounded-2xl flex items-center justify-center text-sky-500 shadow-sm mb-4 md:mb-6">
                  <Star size={28} />
                </div>
                <h4 className="font-bold text-gray-900 mb-2 text-base md:text-lg">Atención Directa</h4>
                <p className="text-xs md:text-sm text-gray-500 leading-relaxed max-w-[220px]">
                  Trato humano y personalizado para resolver todas tus dudas.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* FOOTER - Ahora pegado con menos margen superior */}
      <Cta />
    </main>
  );
}