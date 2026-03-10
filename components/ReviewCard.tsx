// components/ReviewCard.tsx
import { Star } from "lucide-react"; // Importamos solo Star
import { Review } from "@/lib/review";

export default function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="p-8 rounded-[2.5rem] bg-gray-50 border border-gray-100 relative group hover:bg-white hover:shadow-2xl hover:shadow-sky-100 transition-all duration-500 flex flex-col h-full">
      
      {/* Estrellas de calificación */}
      <div className="flex items-center gap-1 mb-5">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            size={14} 
            className="fill-yellow-400 text-yellow-400" 
          />
        ))}
      </div>

      {/* Texto de la reseña - Ahora respira mejor */}
      <p className="text-gray-600 italic mb-8 leading-relaxed flex-grow text-sm md:text-base">
        "{review.text}"
      </p>

      {/* Info del Cliente */}
      <div className="flex items-center gap-4 border-t border-gray-100 pt-6">
        {/* Avatar con la inicial */}
        <div className="w-12 h-12 bg-sky-500 text-white rounded-2xl flex items-center justify-center font-black text-lg shadow-lg shadow-sky-100 group-hover:rotate-6 transition-transform">
          {review.name.charAt(0)}
        </div>
        
        <div className="flex flex-col">
          <h4 className="font-bold text-gray-900 text-sm">
            {review.name}
          </h4>
          <div className="flex flex-wrap items-center gap-1.5 mt-0.5">
            {/* Tag de Categoría (Cumple, Empresa, etc) */}
            <span className="text-[10px] font-black uppercase tracking-widest text-sky-600 bg-sky-50 px-2 py-0.5 rounded-md">
              {review.type}
            </span>
            <span className="text-gray-300 text-xs">•</span>
            {/* Fuente de la reseña */}
            <span className="text-[10px] text-gray-400 font-bold uppercase">
              {review.source}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}