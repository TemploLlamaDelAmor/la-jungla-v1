import { Star } from "lucide-react";
import Cta from "@/components/cta";
import ReviewCard from "@/components/ReviewCard";
import WhatsAppTestimonials from "@/components/WhatsAppTestimonials"; // Nuevo import
import { reviews } from "@/lib/review";

export default function TestimoniosPage() {
  // Dividimos las reseñas para meter el bloque de WhatsApp en el medio
  const primerasReviews = reviews.slice(0, 6);
  const restoReviews = reviews.slice(6);

  return (
    <main className="bg-white min-h-screen">
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* ENCABEZADO */}
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-6xl font-black text-gray-900 mt-6 mb-10 tracking-tighter">
              Lo que dicen de <br/><span className="text-sky-500">nuestro servicio</span>
            </h1>
          </div>

          {/* PRIMER BLOQUE DE REVIEWS */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {primerasReviews.map((rev) => (
              <ReviewCard key={rev.id} review={rev} />
            ))}
          </div>

          {/* BLOQUE DE WHATSAPP (Rompe el patrón visual y capta atención) */}
          <WhatsAppTestimonials />

          {/* SEGUNDO BLOQUE DE REVIEWS */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            {restoReviews.map((rev) => (
              <ReviewCard key={rev.id} review={rev} />
            ))}
          </div>

        </div>
      </section>
      <Cta />
    </main>
  );
}