export interface Coach {
  id: string;
  name: string;
  role: 'Yoga' | 'Pilates';
  image: string;
  imagePosition?: string;
  imageScale?: number;
  imageTranslateY?: string;
  bio: string;
  teachingStyle: string;
  specialties: string[];
  philosophy: string;
  focusAreas: string[];
}

export const COACHES: Coach[] = [
  {
    id: 'yanelli',
    name: 'Yanelli',
    role: 'Yoga',
    image: '/yoga 3.avif',
    imageScale: 1.73,
    imageTranslateY: '8%',
    bio: 'Con oltre un decennio di pratica in tutto il mondo, Yanelli porta a MODO Firenze una profonda comprensione del Vinyasa e dell\'Hatha yoga.',
    teachingStyle: 'Fluido, incentrato sul respiro e meditativo.',
    specialties: ['Vinyasa Flow', 'Pranayama', 'Meditazione'],
    philosophy: 'Lo yoga non consiste nel toccarsi le dita dei piedi, ma in ciò che si impara durante la discesa.',
    focusAreas: ['Mobilità spinale', 'Transizioni consapevoli', 'Pace interiore']
  },
  {
    id: 'francesca',
    name: 'Francesca',
    role: 'Yoga',
    image: '/yoga 2.avif',
    bio: 'Francesca è specializzata in pratiche ristorative e Yin yoga, concentrandosi sul sistema nervoso e sul rilascio dei tessuti profondi.',
    teachingStyle: 'Dolce, di supporto e radicante.',
    specialties: ['Yin Yoga', 'Restorative', 'Yoga Nidra'],
    philosophy: 'Nella quiete troviamo la forza di muoverci nel mondo con grazia.',
    focusAreas: ['Riduzione dello stress', 'Salute delle articolazioni', 'Rilassamento profondo']
  },
  {
    id: 'margherita',
    name: 'Margherita',
    role: 'Pilates',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=800',
    imagePosition: '90% center',
    bio: 'Margherita è un\'esperta certificata di Reformer e Mat Pilates con un background nella danza contemporanea.',
    teachingStyle: 'Preciso, atletico ed emancipante.',
    specialties: ['Reformer Pilates', 'Forza del Core', 'Correzione Posturale'],
    philosophy: 'Il controllo porta alla libertà. Il movimento è la medicina per una vita stagnante.',
    focusAreas: ['Stabilità del core', 'Allineamento dinamico', 'Tonificazione muscolare']
  },
  {
    id: 'ginevra',
    name: 'Ginevra',
    role: 'Pilates',
    image: '/pilates 1.jpg',
    imageScale: 1.15,
    imageTranslateY: '-2%',
    bio: 'Ginevra combina i principi classici del Pilates con il movimento funzionale moderno per creare corpi equilibrati e forti.',
    teachingStyle: 'Tecnico, ritmico e stimolante.',
    specialties: ['Mat Pilates', 'Barre', 'Allenamento Funzionale'],
    philosophy: 'La mente, quando possiede veramente il corpo, è padrona del proprio destino.',
    focusAreas: ['Flessibilità', 'Resistenza', 'Connessione mente-corpo']
  }
];

export const CLASSES = [
  { name: 'Vinyasa Flow', type: 'Yoga', level: 'Tutti i livelli', duration: '60 min' },
  { name: 'Reformer Core', type: 'Pilates', level: 'Intermedio', duration: '50 min' },
  { name: 'Yin & Sound', type: 'Yoga', level: 'Principiante', duration: '75 min' },
  { name: 'Mat Pilates Plus', type: 'Pilates', level: 'Tutti i livelli', duration: '55 min' },
  { name: 'Hatha Foundation', type: 'Yoga', level: 'Principiante', duration: '60 min' },
  { name: 'Dynamic Reformer', type: 'Pilates', level: 'Avanzato', duration: '50 min' },
];
