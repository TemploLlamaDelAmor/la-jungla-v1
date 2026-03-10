// components/FeaturedServices.tsx
import Link from "next/link";
import { services } from "@/lib/services";
import ImageCarousel from "@/components/ImageCarousel";
import { ArrowRight, Ruler, Zap } from "lucide-react";

export default function FeaturedServices() {
  const featured = services.filter((s) => s.featured);

  return (
    <section className="py-24 px-6 bg-gradient-to-tr from-slate-50 via-white to-white">
      <div className="max-w-7xl mx-auto">
        
        {/* ENCABEZADO */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="text-left">
            <span className="text-sky-500 font-black uppercase tracking-[0.3em] text-[10px] mb-3 block">
              Exclusivos de Córdoba
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tighter leading-tight">
              Los más <span className="text-sky-500">pedidos</span>
            </h2>
          </div>
          <Link 
            href="/servicios" 
            className="group hidden md:flex items-center gap-2 text-gray-900 font-black uppercase text-xs border-b-2 border-sky-500 pb-1 hover:text-sky-500 transition-all"
          >
            Ver catálogo completo
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* GRID DE TARJETAS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {featured.map((service) => (
            <div
              key={service.slug}
              className="group bg-white rounded-[2.5rem] p-4 border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_rgba(14,165,233,0.15)] transition-all duration-500 hover:-translate-y-2 flex flex-col h-full"
            >
              {/* 1. LA FOTO (Independiente: No abre el link) */}
              <div className="relative rounded-[2rem] overflow-hidden mb-6 z-20">
                <ImageCarousel images={service.images} />
              </div>

              {/* 2. TODO EL RESTO DE LA TARJETA (Link al slug) */}
              <Link 
                href={`/servicios/${service.slug}`}
                className="flex-grow flex flex-col px-3 cursor-pointer"
              >
                <h3 className="text-2xl font-black text-gray-900 mb-4 tracking-tighter group-hover:text-sky-500 transition-colors">
                  {service.name}
                </h3>
                
                <p className="text-gray-500 text-sm leading-relaxed mb-8 font-medium italic line-clamp-2">
                  {service.description}
                </p>

                {/* MINI SPECS */}
                <div className="mt-auto flex items-center justify-between py-5 border-t border-gray-50">
                  <div className="flex items-center gap-2 text-gray-400">
                    <Ruler size={14} strokeWidth={2.5} />
                    <span className="text-[10px] font-bold uppercase tracking-widest">
                      {service.dimensions || "Consultar"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sky-500/80">
                    <Zap size={14} className="fill-current" />
                    <span className="text-[10px] font-black uppercase tracking-widest">Premium</span>
                  </div>
                </div>

                {/* ÁREA DEL BOTÓN (Visual - Sin la flecha lateral) */}
                <div className="pt-5 flex items-center justify-center border-t border-gray-100">
                  <span className="text-gray-900 font-black text-[11px] uppercase tracking-[0.2em] group-hover:text-sky-500 transition-colors">
                    Ver ficha técnica
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* BOTÓN FINAL CATÁLOGO */}
        <div className="mt-20 flex justify-center">
          <Link
            href="/servicios"
            className="group flex items-center gap-3 bg-sky-500 text-white px-12 py-5 rounded-[2rem] font-black uppercase text-xs tracking-widest hover:bg-sky-600 transition-all duration-300 shadow-[0_15px_30px_rgba(14,165,233,0.3)] hover:shadow-[0_20px_40px_rgba(14,165,233,0.4)]"
          >
            Explorar Catálogo
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}