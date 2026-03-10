import { Star } from "lucide-react";

const testimonials = [
  {
    text: "Quedó todo espectacular, mil gracias, salió hermoso el cumple.",
    name: "Santiago",
  },
  {
    text: "Gracias! Salió todo de 10, nos matamos de la risa con el ring.",
    name: "Sofía",
  },
  {
    text: "Nunca me había subido a un toro, fue el mejor cumpleaños de mi vida! El chico que lo maneja súper atento y amable.",
    name: "Ana",
  },
];

export default function Testimonios() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto text-center">

        {/* TÍTULO MEJORADO */}
        <h2 className="text-3xl md:text-4xl font-bold text-cyan-600 mb-16">
          Lo que dicen nuestros clientes
        </h2>

        {/* GRID */}
        <div className="grid gap-10 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-3xl p-8 shadow-sm hover:shadow-md transition duration-300"
            >
              {/* ESTRELLAS */}
              <div className="flex justify-center gap-1 mb-4 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>

              {/* TEXTO */}
              <p className="text-gray-700 italic leading-relaxed mb-6">
                “{testimonial.text}”
              </p>

              {/* NOMBRE */}
              <p className="text-sm font-semibold text-gray-900">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
