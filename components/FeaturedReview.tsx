import { reviews } from "@/lib/review";
import ReviewCard from "@/components/ReviewCard";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function FeaturedReviews() {
  const featured = reviews.filter((rev) => rev.featured);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* ENCABEZADO */}
        <div className="text-center md:text-left mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-6 tracking-tighter">
            Lo que dicen de <span className="text-sky-500">nosotros</span>
          </h2>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featured.map((rev) => (
            <ReviewCard key={rev.id} review={rev} />
          ))}
        </div>

        {/* INDICADOR DE CONFIANZA MINIMALISTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 p-2 pl-4 bg-white rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex -space-x-3">
              {["V", "J", "L", "R"].map((letra, i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-sky-100 flex items-center justify-center text-[10px] font-black text-sky-600 shadow-sm">
                  {letra}
                </div>
              ))}
              <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-50 flex items-center justify-center text-[10px] font-black text-gray-400 shadow-sm">
                +
              </div>
            </div>

            <Link 
              href="/testimonios" 
              className="group flex items-center gap-2 bg-sky-500 text-white px-8 py-3.5 rounded-[2rem] hover:bg-sky-600 transition-all duration-300 text-sm font-black uppercase tracking-tight"
            >
              Ver reseñas
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}