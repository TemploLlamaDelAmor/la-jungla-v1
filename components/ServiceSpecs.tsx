import { Ruler, Clock, CreditCard } from "lucide-react";

interface SpecsProps {
  dimensions: string;
  duration: string;
  price: string;
}

export default function ServiceSpecs({ dimensions, duration, price }: SpecsProps) {
  const specs = [
    { label: "Dimensiones", value: dimensions, icon: Ruler },
    { label: "Duración", value: duration, icon: Clock },
    { label: "Precio", value: price, icon: CreditCard },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
      {specs.map((spec, i) => (
        <div key={i} className="flex items-center gap-4 p-5 bg-gray-50 rounded-3xl border border-gray-100">
          <div className="bg-white p-3 rounded-2xl shadow-sm text-sky-500">
            <spec.icon size={24} />
          </div>
          <div>
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{spec.label}</p>
            <p className="text-gray-900 font-bold leading-tight">{spec.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
}