// Brand colors for the app
export const COLORS = {
  PINK: '#FF2D8A',
  GREEN: '#7FFF00',
  PURPLE: '#4A1D96',
};

// Stories mock data - heritage sites with their information
export const STORIES = [
  {
    id: 1,
    name: 'Taj Mahal',
    location: 'Agra, India',
    rating: 4.9,
    bg: `linear-gradient(160deg,#1a0533,${COLORS.PURPLE})`,
    emoji: '🕌',
  },
  {
    id: 2,
    name: 'Qutub Minar',
    location: 'Delhi, India',
    rating: 4.7,
    bg: 'linear-gradient(160deg,#0a1a2e,#1a3a6c)',
    emoji: '🗼',
  },
  {
    id: 3,
    name: 'Hampi Ruins',
    location: 'Karnataka, India',
    rating: 4.8,
    bg: 'linear-gradient(160deg,#2a0a00,#6a2800)',
    emoji: '🏯',
  },
  {
    id: 4,
    name: 'Konark Temple',
    location: 'Odisha, India',
    rating: 4.6,
    bg: `linear-gradient(160deg,#0a1a00,#284a00)`,
    emoji: '⛩️',
  },
];

// Video reels - featured stories in reel format
export const REELS = [
  {
    id: 1,
    title: 'Angkor Wat',
    sub: 'Cambodia · 900 AD',
    bg: `linear-gradient(180deg,#0a0020,${COLORS.PURPLE})`,
    emoji: '🛕',
  },
  {
    id: 2,
    title: 'Roman Colosseum',
    sub: 'Rome · 70 AD',
    bg: 'linear-gradient(180deg,#1a0800,#5a2000)',
    emoji: '🏟️',
  },
  {
    id: 3,
    title: 'Machu Picchu',
    sub: 'Peru · 1450 AD',
    bg: 'linear-gradient(180deg,#001a08,#005a20)',
    emoji: '🏔️',
  },
];

// Suggestions - nearby heritage sites recommended to the user
export const SUGGESTIONS = [
  {
    id: 1,
    name: 'Ellora Caves',
    location: 'Maharashtra',
    rating: 4.8,
    emoji: '🗿',
    tag: 'UNESCO',
  },
  {
    id: 2,
    name: 'Khajuraho',
    location: 'MP, India',
    rating: 4.7,
    emoji: '🏛️',
    tag: 'Heritage',
  },
  {
    id: 3,
    name: 'Red Fort',
    location: 'Delhi',
    rating: 4.6,
    emoji: '🏰',
    tag: 'Mughal',
  },
  {
    id: 4,
    name: 'Sun Temple',
    location: 'Modhera',
    rating: 4.5,
    emoji: '☀️',
    tag: 'Ancient',
  },
];

// User's favorite heritage sites
export const FAVOURITES = [
  {
    id: 1,
    name: 'Taj Mahal',
    location: 'Agra, India',
    rating: 4.9,
    bg: `linear-gradient(160deg,#1a0533,${COLORS.PURPLE})`,
    emoji: '🕌',
  },
  {
    id: 2,
    name: 'Hampi Ruins',
    location: 'Karnataka, India',
    rating: 4.8,
    bg: 'linear-gradient(160deg,#2a0a00,#6a2800)',
    emoji: '🏯',
  },
];
