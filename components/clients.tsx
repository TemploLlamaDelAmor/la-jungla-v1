export default function Clients() {
  const logos = [
    "/logos/alta-gracia.png",
    "/logos/calchin.jpg",
    "/logos/colectividades-2025.png",
    "/logos/cordoba-joven-22.png",
    "/logos/cosquin-rock.jpg",
    "/logos/Embalse.jpg",
    "/logos/estacion-general-paz.jfif",
    "/logos/Fiat.png",
    "/logos/iveco-2.svg",
    "/logos/happy-birra-2.png",
    "/logos/folklore-sobre-el-agua-villa-del-rosario.png",
    "/logos/villa-del-rosario.png",
    "/logos/nuestras-raices.jpg",
    "/logos/james-craik.jfif",
    "/logos/miramar.png",
    "/logos/cosquin.png",
    "/logos/alienigena-capilla-2025-2.png",
    "/logos/sin-culpa.png",
    "/logos/rio-ceballos.jfif",
    "/logos/cosquin-cuarteto.jpg",
    "/logos/cosquin-folklore-2023.jpg",
    "logos/almafuerte.png",
    "logos/los-reartes.png",
  ];

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 md:mb-16 text-gray-800">
          Confiaron en nosotros
        </h2>

        <div className="relative w-full overflow-hidden">
          <div className="flex animate-scroll gap-10 w-max items-center">
            {[...logos, ...logos].map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt="Cliente"
                className="h-20 md:h-24 object-contain"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}