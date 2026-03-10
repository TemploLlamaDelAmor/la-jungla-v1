// app/servicios/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { services } from "@/lib/services";
import ImageCarousel from "@/components/ImageCarousel";
import { Ruler, Zap, Sparkles } from "lucide-react";

export default function ServiciosPage() {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const categorias = [
    "Todos",
    "Juegos de parque",
    "Juegos de cumple",
    "Juegos al aire libre",
    "Juegos de interior",
    "Casamiento",
    "15s",
    "Despedidas",
    "Juegos de adultos",
    "Juegos infantiles",
    "Inflable tematicos",
    "Arcade",
    "Kermes",
    "Acuatico",
    "Juegos de estar",
  ];

  const filteredServices = activeCategory === "Todos"
    ? services
    : services.filter(s => s.category.includes(activeCategory));

  return (
    <main className="pt-32 pb-24 bg-gradient-to-tr from-slate-50 via-white to-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">

        {/* ENCABEZADO */}
        <div className="text-center mb-10 md:mb-16">
          <span className="text-sky-500 font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">
            Catálogo Completo
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tighter mb-4">
            Elegí tu propia <span className="text-sky-500">Aventura</span>
          </h1>
        </div>

        {/* FILTROS: Optimización de espacio en móviles */}
        <div className="sticky top-20 z-30 -mx-6 px-6 py-4 bg-white/80 backdrop-blur-md border-b border-gray-100 md:relative md:top-0 md:bg-transparent md:border-none md:mb-16">
          <div className="flex flex-nowrap md:flex-wrap md:justify-center gap-2 overflow-x-auto no-scrollbar pb-2">
            {categorias.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 md:px-6 md:py-3 rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-widest transition-all duration-300 whitespace-nowrap border ${
                  activeCategory === cat
                    ? "bg-sky-500 text-white border-sky-500 shadow-lg shadow-sky-200"
                    : "bg-white text-gray-400 border-gray-100 hover:border-sky-200 hover:text-sky-500 shadow-sm"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* GRILLA DE SERVICIOS */}
        {filteredServices.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredServices.map((service) => (
              <div
                key={service.slug}
                className="group bg-white rounded-[2.5rem] p-4 border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_rgba(14,165,233,0.15)] transition-all duration-500 hover:-translate-y-2 flex flex-col h-full"
              >
                {/* 1. CAROUSEL */}
                <div className="relative rounded-[2rem] overflow-hidden mb-6 z-20 shadow-inner">
                  <ImageCarousel images={service.images} />
                </div>

                {/* 2. CONTENIDO CLICKABLE */}
                <Link 
                  href={`/servicios/${service.slug}`}
                  className="flex-grow flex flex-col px-3 cursor-pointer"
                >
                  <h3 className="text-2xl font-black text-gray-900 mb-3 tracking-tighter group-hover:text-sky-500 transition-colors leading-tight">
                    {service.name}
                  </h3>
                  
                  <p className="text-gray-500 text-sm leading-relaxed mb-6 font-medium italic line-clamp-2">
                    {service.description}
                  </p>

                  {/* MINI SPECS */}
                  <div className="mt-auto flex items-center justify-between py-4 border-t border-gray-50">
                    <div className="flex items-center gap-2 text-gray-400">
                      <Ruler size={14} />
                      <span className="text-[10px] font-bold uppercase tracking-widest">
                        {service.dimensions || "Consultar"}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sky-500/80">
                      <Zap size={14} className="fill-current" />
                      <span className="text-[10px] font-black uppercase tracking-widest">Premium</span>
                    </div>
                  </div>

                  {/* BOTÓN VISUAL */}
                  <div className="pt-4 flex items-center justify-center border-t border-gray-100">
                    <span className="text-gray-900 font-black text-[10px] uppercase tracking-[0.2em] group-hover:text-sky-500 transition-colors">
                      Ver ficha técnica
                    </span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        ) : (
          /* ESTADO VACÍO */
          <div className="text-center py-32 bg-gray-50/50 rounded-[3rem] border-2 border-dashed border-gray-100">
            <Sparkles className="mx-auto text-gray-200 mb-6" size={64} />
            <p className="text-gray-400 font-black uppercase tracking-[0.3em] text-sm">
              Próximamente más juegos en esta categoría
            </p>
          </div>
        )}
      </div>

      {/* CSS PARA OCULTAR SCROLLBAR */}
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </main>
  );
}