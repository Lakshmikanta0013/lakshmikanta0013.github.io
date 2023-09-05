import demoImg from '/demo.webp';

import crwnClothing from './screenshot/crwn-clothing.webp';
import elctricSkateboards from './screenshot/electric-skateboards-USA.webp';
import forkifyRecipe from './screenshot/forkify-recipe-js.webp';
import openTable from './screenshot/open-table.webp';
import adminDashboard from './screenshot/react-admin-dashboard.webp';

export type ProjectType = {
  id: number;
  title: string;
  description?: string;
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
    image: crwnClothing,
    repo: 'https://github.com/frontendfixer/crwn-clothing-redux',
    url: 'https://crwn-clothing-redux.vercel.app',
    development: {
      language: [
        'firebase',
        'react',
        'typescript',
        'HTML',
        'CSS',
        'redux',
        'styled_components',
      ],
    },
    featured: true,
  },
  {
    id: 2,
    title: 'Open Table | Book a Table at Any Restaurant',
    description: 'This is a project 2',
    image: openTable,
    repo: 'https://github.com/frontendfixer/OpenTable-NextJS-App',
    url: 'https://open-table-next-js-app.vercel.app',
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
    },
    featured: true,
  },
  {
    id: 3,
    title: 'Admin Dashboard | Build with React',
    description: 'This is a project 2',
    image: adminDashboard,
    repo: 'https://github.com/frontendfixer/react-admin-ui',
    url: 'https://react-admin-dashboard-self.vercel.app/',
    development: {
      language: ['react', 'typescript', 'recharts', 'MUI', 'HTML', 'CSS'],
    },
    featured: true,
  },
  {
    id: 4,
    title: 'Forkify | Search Recipe with Ingredients',
    description: 'This is a project 4',
    image: forkifyRecipe,
    repo: 'https://github.com/frontendfixer/forkify-recipe-js',
    url: 'https://forkify-recipe-js.vercel.app/#5ed6604691c37cdc054bd00c',
    development: {
      language: ['javascript', 'SASS', 'MVP_Architecture', 'HTML', 'CSS'],
    },
    featured: true,
  },
  {
    id: 5,
    title: 'Electric Skateboards USA',
    description: 'This is a project 5',
    image: elctricSkateboards,
    repo: 'https://github.com/frontendfixer/electric-skateboards-USA',
    url: 'https://frontendfixer.github.io/electric-skateboards-USA/',
    development: {
      language: ['javascript', 'SASS', 'Static HTML', 'HTML', 'CSS'],
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
