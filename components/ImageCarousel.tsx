"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

interface Props {
  images: string[];
  large?: boolean;
}

export default function ImageCarousel({ images, large = false }: Props) {
  const [current, setCurrent] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const prev = () => setCurrent((p) => (p === 0 ? images.length - 1 : p - 1));
  const next = () => setCurrent((p) => (p === images.length - 1 ? 0 : p + 1));

  const handleTouchStart = (e: React.TouchEvent) => setTouchStart(e.touches[0].clientX);
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const diff = touchStart - e.changedTouches[0].clientX;
    if (diff > 50) next();
    if (diff < -50) prev();
    setTouchStart(null);
  };

  // Lógica para los puntos dinámicos (mostramos una ventana de 7 puntos)
  const maxDots = 7;
  const getVisibleDots = () => {
    if (images.length <= maxDots) return images.map((_, i) => i);
    
    let start = Math.max(0, current - Math.floor(maxDots / 2));
    let end = start + maxDots;

    if (end > images.length) {
      end = images.length;
      start = end - maxDots;
    }
    
    return Array.from({ length: maxDots }, (_, i) => start + i);
  };

  return (
    <div
      className={`relative w-full ${large ? "h-[350px] md:h-[550px]" : "h-64"} overflow-hidden bg-gray-50`}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="relative w-full h-full">
        <Image
          src={images[current]}
          alt={`Evento ${current + 1}`}
          fill
          priority={current === 0}
          quality={80}
          className="object-cover transition-opacity duration-300"
          sizes="(max-width: 768px) 100vw, 80vw"
        />
      </div>

      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/10 hover:bg-black/30 text-white p-2 rounded-full transition-all z-10 backdrop-blur-[2px]"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/10 hover:bg-black/30 text-white p-2 rounded-full transition-all z-10 backdrop-blur-[2px]"
          >
            <ChevronRight size={22} />
          </button>

          {/* INDICADORES DINÁMICOS */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10 px-3 py-1.5 rounded-full bg-black/10 backdrop-blur-[2px]">
            {getVisibleDots().map((dotIndex) => (
              <div 
                key={dotIndex}
                className={`transition-all duration-300 rounded-full ${
                  current === dotIndex 
                    ? "w-5 h-1.5 bg-white shadow-sm" 
                    : "w-1.5 h-1.5 bg-white/40 scale-90"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}