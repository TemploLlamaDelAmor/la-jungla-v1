export default function Stats() {
  const stats = [
    {
      number: "+20",
      label: "Años de experiencia",
    },
    {
      number: "+2.000",
      label: "Eventos realizados",
    },
    {
      number: "+100km",
      label: "Cobertura provincial",
    },
    {
      number: "100%",
      label: "Clientes satisfechos",
    },
  ];

  return (
    <section className="py-20 bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <p className="text-4xl md:text-5xl font-extrabold mb-4">
                {stat.number}
              </p>
              <p className="text-lg opacity-90">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
