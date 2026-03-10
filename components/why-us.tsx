// components/WhyUs.tsx
import { Award, Clock, MapPin, ShieldCheck } from "lucide-react";

export default function WhyUs() {
  const features = [
    {
      title: "+20 años de experiencia",
      description: "Creando recuerdos inolvidables. Acompañando a familias, empresas y municipios en eventos masivos y privados con trayectoria comprobada.",
      icon: <Award className="text-sky-500" size={32} />,
      color: "bg-sky-50",
    },
    {
      title: "Puntualidad garantizada",
      description: "Cumplimos lo que prometemos. Sabemos que el tiempo es clave, por eso trabajamos con logística precisa para que todo esté listo antes del inicio.",
      icon: <Clock className="text-amber-500" size={32} />,
      color: "bg-amber-50",
    },
    {
      title: "Cobertura Provincial",
      description: "Llegamos a cualquier punto de Córdoba con logística propia, asegurando un servicio integral sin importar la distancia.",
      icon: <MapPin className="text-red-500" size={32} />,
      color: "bg-red-50",
    },
    {
      title: "Diversión 100% Segura", 
      description: "Equipamiento profesional, mantenimiento permanente y protocolos de seguridad estrictos para que tu única preocupación sea disfrutar.",
      icon: <ShieldCheck className="text-green-500" size={32} />,
      color: "bg-green-50",
    },
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* ENCABEZADO */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tighter leading-tight">
            ¿Por qué elegir <span className="text-sky-500">nuestro servicio</span>?
          </h2>
        </div>

        {/* GRILLA DE DIFERENCIALES */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 md:p-12 rounded-[2.5rem] bg-gray-50 border border-gray-100 transition-all duration-500 hover:bg-white hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:-translate-y-1 flex flex-col md:flex-row gap-8"
            >
              {/* ICONO CON CONTENEDOR CIRCULAR */}
              <div className={`flex-shrink-0 w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                {feature.icon}
              </div>

              {/* CONTENIDO */}
              <div>
                <h3 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-gray-500 leading-relaxed font-medium">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}