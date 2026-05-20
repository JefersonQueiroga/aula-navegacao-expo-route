export type Categoria = 'programacao' | 'banco-de-dados' | 'redes' | 'web';

export type Livro = {
  id: string;
  titulo: string;
  autor: string;
  ano: number;
  categoria: Categoria;
  capa: string;
  ementa: string;
  paginas: number;
  destaque: boolean;
};

export const livros: Livro[] = [
  {
    id: '1',
    titulo: 'Clean Code',
    autor: 'Robert C. Martin',
    ano: 2008,
    categoria: 'programacao',
    capa: '📘',
    ementa: 'Boas práticas para escrever código limpo, legível e sustentável.',
    paginas: 464,
    destaque: true,
  },
  {
    id: '2',
    titulo: 'O Programador Pragmático',
    autor: 'David Thomas, Andrew Hunt',
    ano: 2019,
    categoria: 'programacao',
    capa: '📗',
    ementa: 'Princípios práticos para se tornar um desenvolvedor melhor.',
    paginas: 352,
    destaque: true,
  },
  {
    id: '3',
    titulo: 'JavaScript: O Guia Definitivo',
    autor: 'David Flanagan',
    ano: 2021,
    categoria: 'web',
    capa: '📙',
    ementa: 'Referência completa da linguagem JavaScript moderna.',
    paginas: 706,
    destaque: false,
  },
  {
    id: '4',
    titulo: 'React Native em Ação',
    autor: 'Nader Dabit',
    ano: 2019,
    categoria: 'web',
    capa: '📕',
    ementa: 'Construindo apps móveis multiplataforma com React Native.',
    paginas: 304,
    destaque: true,
  },
  {
    id: '5',
    titulo: 'Use a Cabeça! SQL',
    autor: 'Lynn Beighley',
    ano: 2008,
    categoria: 'banco-de-dados',
    capa: '📘',
    ementa: 'Introdução visual e prática a SQL e banco de dados relacional.',
    paginas: 608,
    destaque: false,
  },
  {
    id: '6',
    titulo: 'Sistema de Banco de Dados',
    autor: 'Elmasri, Navathe',
    ano: 2018,
    categoria: 'banco-de-dados',
    capa: '📗',
    ementa: 'Fundamentos teóricos e práticos de sistemas de bancos de dados.',
    paginas: 1144,
    destaque: true,
  },
  {
    id: '7',
    titulo: 'Redes de Computadores',
    autor: 'Andrew Tanenbaum',
    ano: 2011,
    categoria: 'redes',
    capa: '📙',
    ementa: 'Clássico sobre arquitetura, protocolos e topologias de rede.',
    paginas: 600,
    destaque: false,
  },
  {
    id: '8',
    titulo: 'Redes de Computadores e a Internet',
    autor: 'Kurose, Ross',
    ano: 2017,
    categoria: 'redes',
    capa: '📕',
    ementa: 'Abordagem top-down dos protocolos da Internet.',
    paginas: 768,
    destaque: true,
  },
  {
    id: '9',
    titulo: 'HTML e CSS',
    autor: 'Jon Duckett',
    ano: 2014,
    categoria: 'web',
    capa: '📘',
    ementa: 'Introdução visual a desenvolvimento web front-end.',
    paginas: 512,
    destaque: false,
  },
  {
    id: '10',
    titulo: 'Eloquent JavaScript',
    autor: 'Marijn Haverbeke',
    ano: 2018,
    categoria: 'programacao',
    capa: '📗',
    ementa: 'Aprenda JavaScript do zero, com exercícios práticos.',
    paginas: 472,
    destaque: false,
  },
  {
    id: '11',
    titulo: 'Estruturas de Dados e Algoritmos em Java',
    autor: 'Robert Lafore',
    ano: 2004,
    categoria: 'programacao',
    capa: '📙',
    ementa: 'Listas, pilhas, filas, árvores e algoritmos de ordenação.',
    paginas: 800,
    destaque: false,
  },
  {
    id: '12',
    titulo: 'PostgreSQL para Desenvolvedores',
    autor: 'Fábio Telles',
    ano: 2020,
    categoria: 'banco-de-dados',
    capa: '📕',
    ementa: 'Recursos avançados do PostgreSQL no dia a dia do desenvolvedor.',
    paginas: 384,
    destaque: false,
  },
];

export const categorias: { slug: Categoria; nome: string; emoji: string }[] = [
  { slug: 'programacao',    nome: 'Programação',    emoji: '💻' },
  { slug: 'banco-de-dados', nome: 'Banco de Dados', emoji: '🗄️' },
  { slug: 'redes',          nome: 'Redes',          emoji: '🌐' },
  { slug: 'web',            nome: 'Web',            emoji: '🕸️' },
];

export function getLivroById(id: string): Livro | undefined {
  return livros.find((l) => l.id === id);
}

export function getLivrosByCategoria(slug: Categoria): Livro[] {
  return livros.filter((l) => l.categoria === slug);
}

export function getNomeCategoria(slug: Categoria): string {
  const c = categorias.find((c) => c.slug === slug);
  return c ? c.nome : slug;
}

export function buscarLivros(query: string): Livro[] {
  const q = query.trim().toLowerCase();
  if (q.length === 0) return [];
  return livros.filter(
    (l) =>
      l.titulo.toLowerCase().includes(q) ||
      l.autor.toLowerCase().includes(q),
  );
}
