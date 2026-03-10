export type Review = {
  id: number;
  name: string;
  text: string;
  type: 
    | 'Cumpleaños Infantil' 
    | 'Cumpleaños Adultos' 
    | 'Fiesta de 15' 
    | 'Casamiento' 
    | 'Despedida de soltero' 
    | 'Pool Party'
    | 'Evento Municipal' 
    | 'Evento Empresarial' 
    | 'Institución Educativa';
  source: 'Google' | 'WhatsApp' | 'Referencia';
  featured: boolean; 
};

export const reviews: Review[] = [
  {
    id: 1,
    name: "Santiago Medina",
    text: "Excelente servicio! Los inflables de muy buena calidad, el encargado super atento y muy puntual. Por lejos el mejor cumpleaños!",
    type: 'Cumpleaños Adultos',
    source: 'Google',
    featured: true,
  },
  {
    id: 2,
    name: "Gianfranco Monteagudo",
    text: "El servicio del toro mecánico fue excelente,vinieron un ratito antes y los chicos pedían por favor subir ya que no era el horario y se coparon (No me cobraron ese rarito extra)",
    type: 'Cumpleaños Infantil',
    source: 'Google',
    featured: true,
  },
  {
    id: 3,
    name: "Sofia Ontivero",
    text: "El Ring de boxeo inflable fue el protagonista de mi cumpleaños. Pense que mis invidatos no se iban a animar a subirse, pero lo primero que hacian al llegar era ponerse los guantes y matarse de la risa en el ring. Volveria a contratar este servicio sin dudar.",
    type: 'Cumpleaños Adultos',
    source: 'Google',
    featured: true,
  },
  {
    id: 4,
    name: "Marcos Romero",
    text: "Alquilamos de todo para la fiesta, pero todos se quedaron pegado a la maquina de boxeo. Todos nos pidieron que la pongamos un viernes en la oficina para ver quien se paga el asado. Super llamativa y divertida.",
    type: 'Evento Empresarial',
    source: 'Google',
    featured: false,
  },
  {
    id: 5,
    name: "Carolina Gonzalez",
    text: "Súper responsables, llegaron una hora antes para armar todos los juegos. Los juegos impecables y el que los maneja un capo.",
    type: 'Fiesta de 15',
    source: 'Referencia',
    featured: false,
  },
  {
    id: 6,
    name: "Roberto Méndez",
    text: "Realizamos una jornada de integración empresarial y el jumping de 5 camas fue el centro de atención. Excelente predisposición de los operadores.",
    type: 'Evento Empresarial',
    source: 'Referencia',
    featured: false,
  },
  {
    id: 7,
    name: "Sofía Martínez",
    text: "Los chicos siempre quisieron una pileta con tobogan. Tenian una alegría cuando vinieron los chicos a armar el inflable. No pararon de tirarse ni un minuto. Nos toco un día increible, sin duda un cumpleaños que no se van a olvidar nunca.",
    type: 'Cumpleaños Infantil',
    source: 'WhatsApp',
    featured: false,
  },
  {
    id: 8,
    name: "Municipalidad de Miramar de Ansenuza",
    text: "Increible la variedad de juegos que manejan los chicos de la Jungla. Le dieron vida al dia del niño.",
    type: 'Evento Municipal',
    source: 'Referencia',
    featured: false,
  },
  {
    id: 9,
    name: "Gastón Paz",
    text: "Metegol humano y cancha de fútbol inflable, el combo perfecto. Los pibes no pararon ni para cortar la torta.",
    type: 'Cumpleaños Infantil',
    source: 'Google',
    featured: false,
  },
  {
    id: 10,
    name: "Mónica Juárez",
    text: "Puntuales, limpios y muy organizados. Es la tercera vez que los contratamos y nunca fallan. Recomendables 100%.",
    type: 'Cumpleaños Infantil',
    source: 'Google',
    featured: false,
  },
  {
    id: 11,
    name: "Marcela Martinez",
    text: "Cuando mi hijo me dijo que queria una palestra para su cumple automaticamente le dije que no, tenia un miedo a que se golpeen. Que suerte que los encontre a ustedes, los chicos disfrutaron un monton y nosotros pudimos pasar un día tranquilo sin curitas.",
    type: 'Cumpleaños Infantil',
    source: 'WhatsApp',
    featured: false,
  },
  {
    id: 12,
    name: "Laura Benítez",
    text: "El cañón de espuma es una locura! En un ratito lleno toda la pile, la gente se volvio loca con la espuma.",
    type: 'Pool Party',
    source: 'WhatsApp',
    featured: false,
  },
  {
    id: 13,
    name: "Mariano Godoy",
    text: "Muy buena onda de los chicos que manejan el toro. Mucha paciencia con las mas chicos y muy gracioso con los mas grandes.",
    type: 'Cumpleaños Infantil',
    source: 'Google',
    featured: false,
  },
  {
    id: 14,
    name: "Patricia Luna",
    text: "Dos años seguidos alquilando la cancha de futbol. Siempre la disfrutan como si fuese la final del mundial.",
    type: 'Cumpleaños Infantil',
    source: 'Referencia',
    featured: false,
  },
  {
    id: 15,
    name: "Esteban Quiroga",
    text: "Impresionante el tamaño del cocodrilo. Es gigante y se veía desde cuadras de distancia. Todos los chicos iban corriendo para subirse.",
    type: 'Evento Empresarial',
    source: 'Google',
    featured: false,
  },
  {
    id: 16,
    name: "Florencia Díaz",
    text: "No sabes lo que se rieron los chicos con la carrera de obstaculos! Todo el día ahi metidos",
    type: 'Cumpleaños Infantil',
    source: 'WhatsApp',
    featured: false,
  },
  {
    id: 17,
    name: "Jorge Domínguez",
    text: "El jumping de 7 camas es una bestia. Ideal para festivales grandes, absorbió la gente rapidísimo.",
    type: 'Evento Municipal',
    source: 'Google',
    featured: false,
  },
  {
    id: 18,
    name: "Natalia Sosa",
    text: "Me sorprendió la limpieza. He alquilado en otros lugares donde los inflables estaban sucios, pero acá estaban perfectos.",
    type: 'Cumpleaños Infantil',
    source: 'Google',
    featured: false,
  },
  {
    id: 19,
    name: "Claudio Roldán",
    text: "Increible la cantidad de espuma que saca el cañon, hermosa fiesta.",
    type: 'Despedida de soltero',
    source: 'WhatsApp',
    featured: false,
  },
  {
    id: 20,
    name: "Silvina Torres",
    text: "Gracias por la puntualidad, los juegos estan buenisimos. Los chicos la pasaron bomba.",
    type: 'Cumpleaños Infantil',
    source: 'WhatsApp',
    featured: false,
  },
];