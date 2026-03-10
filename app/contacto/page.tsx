import { MessageCircle, Instagram, Mail, Facebook, MapPin, Clock, ArrowRight } from "lucide-react";

export default function ContactoPage() {
  const channels = [
    {
      name: "WhatsApp",
      desc: "Respuesta inmediata",
      icon: <MessageCircle size={32} />,
      link: "https://wa.me/5493516813555",
      iconBg: "bg-green-500",
      hover: "hover:bg-white/40"
    },
    {
      name: "Instagram",
      desc: "@lajunglaencantada",
      icon: <Instagram size={32} />,
      link: "https://www.instagram.com/lajunglaencantada.cba/",
      iconBg: "bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600",
      hover: "hover:bg-white/40"
    },
    {
      name: "Facebook",
      desc: "La Jungla Encantada Cba",
      icon: <Facebook size={32} />,
      link: "https://www.facebook.com/profile.php?id=61578947634183&locale=es_LA",
      iconBg: "bg-blue-600",
      hover: "hover:bg-white/40"
    },
    {
      name: "Email",
      desc: "Presupuestos formales",
      icon: <Mail size={32} />,
      link: "lajunglaencantadacba@gmail.com",
      iconBg: "bg-sky-600",
      hover: "hover:bg-white/40"
    },
  ];

  return (
    <main className="min-h-screen relative overflow-hidden bg-gradient-to-br from-sky-500 to-cyan-400">
      
      {/* CÍRCULOS DE LUZ DE FONDO (Para dar dinamismo como en el Hero) */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-sky-300/20 rounded-full blur-3xl"></div>

      <section className="pt-32 pb-12 px-6">
        <div className="max-w-xl mx-auto">
          
          {/* ENCABEZADO - Texto en Blanco para contrastar con el celeste */}
          <div className="text-center mb-12">
            <span className="bg-white/20 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] border border-white/30">
              Canales Oficiales
            </span>
            <h1 className="text-4xl md:text-5xl font-black text-white mt-8 mb-4 tracking-tighter">
              ¡Hablemos!
            </h1>
            <p className="text-sky-50 font-medium opacity-90">
              Elegí el medio que prefieras y empezá a organizar tu evento.
            </p>
          </div>

          {/* LISTA DE CANALES (Glassmorphism Style) */}
          <div className="space-y-4">
            {channels.map((channel, i) => (
              <a
                key={i}
                href={channel.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center justify-between p-2 pr-6 rounded-[2.2rem] bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl transition-all duration-300 hover:scale-[1.03] hover:bg-white/20`}
              >
                <div className="flex items-center gap-4">
                  <div className={`${channel.iconBg} text-white p-4 rounded-[1.8rem] shadow-lg transition-transform group-hover:rotate-6 group-hover:scale-110`}>
                    {channel.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-white leading-tight text-lg">{channel.name}</h3>
                    <p className="text-sky-100/70 text-[10px] font-bold uppercase tracking-widest">{channel.desc}</p>
                  </div>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white border border-white/20 group-hover:bg-white group-hover:text-sky-500 transition-all">
                  <ArrowRight size={20} />
                </div>
              </a>
            ))}
          </div>

          {/* INFO SECUNDARIA EN BLANCO */}
          <div className="mt-16 pt-10 border-t border-white/10 grid grid-cols-2 gap-8">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 text-white/60 mb-2">
                <MapPin size={16} />
                <span className="text-[10px] font-black uppercase tracking-widest">Ubicación</span>
              </div>
              <p className="text-sm text-white font-bold">Córdoba y alrededores</p>
            </div>

            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 text-white/60 mb-2">
                <Clock size={16} />
                <span className="text-[10px] font-black uppercase tracking-widest">Atención</span>
              </div>
              <p className="text-sm text-white font-bold">Lun a Sáb: 9 a 20hs</p>
            </div>
          </div>

          {/* FIRMA MINIMALISTA */}
          <div className="mt-16 text-center">
            <p className="text-[10px] text-white/40 font-black uppercase tracking-[0.4em]">
              La Jungla Encantada
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}