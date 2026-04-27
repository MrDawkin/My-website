export interface Project {
  title:          string;
  description:    string;
  descriptionEn?: string;
  tech:           string[];
  githubUrl?:     string;
  liveUrl?:       string;
  featured?:      boolean;
  wip?:           boolean;
  placeholder?:   boolean;
}

export const projects: Project[] = [
  {
    title:       'Portfolio Website',
    description:    'Osobiste portfolio zbudowane w Astro i Tailwind CSS. Projekt jednocześnie prezentuje moje doświadczenie i jest przykładem praktycznego użycia GitHub Actions: każdy push na main uruchamia build i deploy na GitHub Pages.',
    descriptionEn:  'Personal portfolio built with Astro and Tailwind CSS. The project both showcases my experience and demonstrates practical use of GitHub Actions: every push to main triggers a build and deploy to GitHub Pages.',
    tech:        ['Astro', 'Tailwind CSS', 'TypeScript', 'GitHub Actions'],
    githubUrl:   'https://github.com/MrDawkin/My-website',
    liveUrl:     'https://mrdawkin.github.io/My-website',
    featured:    true,
  },
  {
    title:       'Projekt w przygotowaniu',
    description: '',
    tech:        [],
    placeholder: true,
  },
  {
    title:       'Projekt w przygotowaniu',
    description: '',
    tech:        [],
    placeholder: true,
  },
];
