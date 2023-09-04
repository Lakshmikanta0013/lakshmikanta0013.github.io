import demoImg from '/demo.webp';

export type ProjectType = {
  id: number;
  title: string;
  description: string;
  image: string;
  repo: string;
  url: string;
  development: {
    language?: string[];
    tools?: string[];
  };
  featured: boolean;
};

const Projects: ProjectType[] = [
  {
    id: 1,
    title: 'Crwn Clothing Online Store',
    description: 'This is a project 1',
    image: demoImg,
    repo: 'https://github.com',
    url: 'https://www.google.com',
    development: {
      language: ['react', 'typescript', 'HTML', 'CSS', 'redux'],
      tools: ['react', 'typescript'],
    },
    featured: true,
  },
  {
    id: 2,
    title: 'Open Table | Book a Table at Any Restaurant',
    description: 'This is a project 2',
    image: demoImg,
    repo: 'https://github.com',
    url: 'https://www.google.com',
    development: {
      language: [
        'nextjs',
        'react',
        'typescript',
        'redux',
        'MUI',
        'prisma',
        'postgreSQL',
        'HTML',
        'CSS',
      ],
      tools: ['react', 'typescript'],
    },
    featured: true,
  },
  {
    id: 3,
    title: 'Open Table | Book a Table at Any Restaurant',
    description: 'This is a project 2',
    image: demoImg,
    repo: 'https://github.com',
    url: 'https://www.google.com',
    development: {
      language: [
        'nextjs',
        'react',
        'typescript',
        'redux',
        'MUI',
        'prisma',
        'postgreSQL',
        'HTML',
        'CSS',
      ],
      tools: ['react', 'typescript'],
    },
    featured: true,
  },
  {
    id: 4,
    title: 'Project 4',
    description: 'This is a project 4',
    image: demoImg,
    repo: 'https://github.com',
    url: 'https://www.google.com',
    development: {
      language: ['react', 'typescript', 'HTML', 'CSS', 'redux'],
      tools: ['react', 'typescript'],
    },
    featured: true,
  },
  {
    id: 5,
    title: 'Project 5',
    description: 'This is a project 5',
    image: demoImg,
    repo: 'https://github.com',
    url: 'https://www.google.com',
    development: {
      language: ['react', 'typescript', 'HTML', 'CSS', 'redux'],
      tools: ['react', 'typescript'],
    },
    featured: true,
  },
  {
    id: 6,
    title: 'Project 6',
    description: 'This is a project 6',
    image: demoImg,
    repo: 'https://github.com',
    url: 'https://www.google.com',
    development: {
      language: ['react', 'typescript', 'HTML', 'CSS', 'redux'],
      tools: ['react', 'typescript'],
    },
    featured: false,
  },
];

export default Projects;
