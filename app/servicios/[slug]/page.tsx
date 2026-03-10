// app/servicios/[slug]/page.tsx
import { notFound } from "next/navigation";
import { services } from "@/lib/services";
import ImageCarousel from "@/components/ImageCarousel";
import ServiceSpecs from "@/components/ServiceSpecs"; // Importamos el componente nuevo
import { CheckCircle2, ShieldCheck, Zap } from "lucide-react";
import { Zap as ZapIcon } from "lucide-react"; 

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) return notFound();

  return (
    <main className="pt-28 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* LAYOUT DE DOS COLUMNAS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* COLUMNA IZQUIERDA: VISUAL */}
          <div className="space-y-6">
            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl shadow-sky-100 border border-gray-100">
              <ImageCarousel images={service.images} large />
            </div>
            
            {/* BADGES DE GARANTÍA RÁPIDOS (DINÁMICOS) */}
            <div className="flex gap-4">
              <div className="flex-1 flex flex-col items-center p-4 bg-sky-50 rounded-3xl border border-sky-100">
                <ShieldCheck className="text-sky-500 mb-2" size={20} />
                <span className="text-[10px] font-black uppercase text-sky-600 tracking-tight">Seguro</span>
              </div>
              <div className="flex-1 flex flex-col items-center p-4 bg-green-50 rounded-3xl border border-green-100">
                <Zap className="text-green-500 mb-2" size={20} />
                <span className="text-[10px] font-black uppercase text-green-600 tracking-tight">Limpio</span>
              </div>
              
              {/* Badge de Operador: Solo si el servicio lo requiere */}
              {service.includesOperator && (
                <div className="flex-1 flex flex-col items-center p-4 bg-purple-50 rounded-3xl border border-purple-100">
                  <CheckCircle2 className="text-purple-500 mb-2" size={20} />
                  <span className="text-[10px] font-black uppercase text-purple-600 tracking-tight">Operador</span>
                </div>
              )}
            </div>
          </div>

          {/* COLUMNA DERECHA: INFO Y COMPRA */}
          <div className="flex flex-col">
            <span className="text-sky-500 font-black uppercase tracking-[0.2em] text-xs mb-4">
              ¡Diversion asegurada!
            </span>
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tighter leading-tight">
              {service.name}
            </h1>

            <p className="text-gray-500 text-lg leading-relaxed mb-8 font-medium italic">
              {service.description || "Consultá por este increíble servicio para tu evento."}
            </p>

            {/* FICHA TÉCNICA (Dimensiones, Duración, Precio) */}
            <ServiceSpecs 
              dimensions={service.dimensions} 
              duration={service.duration} 
              price={service.price} 
            />

            {/* BOTÓN WHATSAPP */}
            <a
              href={`https://wa.me/5493516813555?text=${encodeURIComponent(`Hola! Me interesa alquilar el ${service.name}. ¿Está disponible para mi fecha?`)}`}
              target="_blank"
              className="group flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white font-black py-5 rounded-[2rem] transition-all duration-300 shadow-xl shadow-green-100 text-lg"
            >
              Consultar por WhatsApp
              <ZapIcon className="fill-white" size={20} />
            </a>
            
            <p className="text-center text-gray-400 text-xs mt-4 font-bold uppercase tracking-widest">
              Respuesta inmediata • Córdoba & Alrededores
            </p>
          </div>
        </div>

        {/* SECCIÓN INFERIOR: HIGHLIGHTS */}
        {service.highlights && service.highlights.length > 0 && (
          <div className="mt-24 pt-24 border-t border-gray-100">
            <h3 className="text-2xl font-black text-gray-900 mb-12 text-center">
              ¿Por qué elegir <span className="text-sky-500">La Jungla</span>?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {service.highlights.map((item, index) => (
                <div key={index} className="flex gap-4 items-start p-6 bg-white rounded-3xl border border-gray-50 shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-sky-50 p-2 rounded-xl text-sky-500">
                    <CheckCircle2 size={20} />
                  </div>
                  <span className="text-gray-600 font-medium leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </main>
  );
}