/**
 * Garden Data — All content for the living text garden
 */

export interface ConceptNode {
  id: string;
  label: string;
  color: string;
  children?: string[];
  description?: string;
  biome: 'seeds' | 'growth' | 'forest' | 'signals';
}

export interface Connection {
  from: string;
  to: string;
}

export const CONCEPTS: ConceptNode[] = [
  // Seeds — ideas, interests, curiosity
  { id: 'curiosity', label: 'Curiosity', color: '#a855f7', biome: 'seeds', children: ['learning', 'experiments', 'ideas'], description: 'The spark that started everything.' },
  { id: 'ideas', label: 'Ideas', color: '#c084fc', biome: 'seeds', children: ['experiments', 'projects'], description: 'Seeds waiting to grow.' },
  { id: 'experiments', label: 'Experiments', color: '#e879f9', biome: 'seeds', children: ['mistakes', 'growth'], description: 'Trying things that might not work.' },

  // Growth — learning journey
  { id: 'learning', label: 'Learning', color: '#06b6d4', biome: 'growth', children: ['python', 'web', 'books'], description: 'One project at a time.' },
  { id: 'python', label: 'Python', color: '#22d3ee', biome: 'growth', children: ['wordle', 'scripts', 'automation'], description: 'First language, endless depth.' },
  { id: 'web', label: 'Web Dev', color: '#67e8f9', biome: 'growth', children: ['html-css', 'javascript', 'react'], description: 'Building for the browser.' },
  { id: 'books', label: 'Books', color: '#a5f3fc', biome: 'growth', children: ['reading', 'library'], description: 'Worlds inside words.' },
  { id: 'mistakes', label: 'Mistakes', color: '#0ea5e9', biome: 'growth', children: ['growth'], description: 'The best teachers.' },
  { id: 'growth', label: 'Growth', color: '#38bdf8', biome: 'growth', children: ['community', 'projects'], description: 'Becoming, not arriving.' },

  // Forest — projects and creations
  { id: 'projects', label: 'Projects', color: '#84cc16', biome: 'forest', children: ['wordle', 'portfolio', 'scripts'], description: 'Things I\'ve built.' },
  { id: 'wordle', label: 'Wordle Clone', color: '#a3e635', biome: 'forest', description: 'Python word game. My first real project.' },
  { id: 'scripts', label: 'Scripts', color: '#bef264', biome: 'forest', description: 'Small tools that solve real problems.' },
  { id: 'automation', label: 'Automation', color: '#d9f99d', biome: 'forest', description: 'Making computers do the boring stuff.' },
  { id: 'portfolio', label: 'This Site', color: '#65a30d', biome: 'forest', description: 'A living text garden you\'re exploring right now.' },

  // Sub-nodes
  { id: 'html-css', label: 'HTML & CSS', color: '#4ade80', biome: 'growth', description: 'Structure and style.' },
  { id: 'javascript', label: 'JavaScript', color: '#facc15', biome: 'growth', description: 'Making things interactive.' },
  { id: 'react', label: 'React', color: '#2dd4bf', biome: 'growth', description: 'Components and state.' },
  { id: 'reading', label: 'Reading', color: '#c4b5fd', biome: 'seeds', description: 'Consuming ideas voraciously.' },
  { id: 'library', label: 'Digital Library', color: '#ddd6fe', biome: 'seeds', description: 'A personal archive of knowledge.' },

  // Signals — contact
  { id: 'community', label: 'Community', color: '#f97316', biome: 'signals', children: ['discord', 'sharing'], description: 'Learning is better together.' },
  { id: 'discord', label: 'Discord', color: '#fb923c', biome: 'signals', description: 'Where conversations happen.' },
  { id: 'sharing', label: 'Sharing', color: '#fdba74', biome: 'signals', description: 'Teaching is learning twice.' },
  { id: 'design', label: 'Design', color: '#ec4899', biome: 'seeds', children: ['portfolio'], description: 'Making things beautiful.' },
];

export const CONNECTIONS: Connection[] = [
  { from: 'curiosity', to: 'learning' },
  { from: 'curiosity', to: 'experiments' },
  { from: 'curiosity', to: 'ideas' },
  { from: 'learning', to: 'python' },
  { from: 'learning', to: 'web' },
  { from: 'learning', to: 'books' },
  { from: 'python', to: 'wordle' },
  { from: 'python', to: 'scripts' },
  { from: 'python', to: 'automation' },
  { from: 'web', to: 'html-css' },
  { from: 'web', to: 'javascript' },
  { from: 'web', to: 'react' },
  { from: 'experiments', to: 'mistakes' },
  { from: 'mistakes', to: 'growth' },
  { from: 'growth', to: 'projects' },
  { from: 'growth', to: 'community' },
  { from: 'projects', to: 'wordle' },
  { from: 'projects', to: 'portfolio' },
  { from: 'projects', to: 'scripts' },
  { from: 'ideas', to: 'experiments' },
  { from: 'ideas', to: 'design' },
  { from: 'books', to: 'reading' },
  { from: 'books', to: 'library' },
  { from: 'community', to: 'discord' },
  { from: 'community', to: 'sharing' },
  { from: 'design', to: 'portfolio' },
];

export const LIVING_THOUGHTS = [
  'Learning one project at a time.',
  'Books create communities.',
  'Curiosity started everything.',
  'Still building.',
  'Mistakes are the best teachers.',
  'Code is a form of expression.',
  'Every error is a lesson in disguise.',
  'The best projects solve real problems.',
  'I don\'t need to know everything today.',
  'Building in public, learning in private.',
  'Typography is the voice of the web.',
  'The web is an infinite canvas.',
  'Python taught me to think.',
  'Design is how it works.',
  'Growth is non-linear.',
  'Exploring spaces between logic and expression.',
];

export const EASTER_EGG_STORIES = [
  'When I wrote my first Python script, it printed "Hello World" — and I felt like I had spoken to the machine for the first time.',
  'I spent 3 hours debugging a missing colon. Best 3 hours of my life.',
  'My first website was ugly. I loved it.',
  'I learned more from broken code than working tutorials.',
  'Books taught me that every expert was once a beginner.',
  'Discord communities showed me I wasn\'t learning alone.',
];

export const BIOME_CONTENT = {
  seeds: {
    emoji: '🌱',
    title: 'Seeds',
    subtitle: 'Ideas, interests, curiosity.',
    description: 'Every project begins as a question. These are the questions I\'m still asking.',
    concepts: ['curiosity', 'ideas', 'experiments', 'reading', 'library', 'design'],
  },
  growth: {
    emoji: '🌿',
    title: 'Growth',
    subtitle: 'Learning journey and progress.',
    description: 'I\'m 18, learning Python and web development. Not arriving — becoming.',
    concepts: ['learning', 'python', 'web', 'books', 'mistakes', 'growth', 'html-css', 'javascript', 'react'],
  },
  forest: {
    emoji: '🌳',
    title: 'Forest',
    subtitle: 'Projects and creations.',
    description: 'Things I\'ve built. Small now, growing always.',
    concepts: ['projects', 'wordle', 'scripts', 'automation', 'portfolio'],
  },
  signals: {
    emoji: '✨',
    title: 'Signals',
    subtitle: 'Contact and connections.',
    description: 'Learning is better together. Find me in these spaces.',
    concepts: ['community', 'discord', 'sharing'],
  },
} as const;