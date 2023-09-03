type PropsType = {
  id: number;
  name: string;
  icon: string;
  color: string;
};

const SKILLS = {
  languages: <PropsType[]>[
    {
      id: 1,
      name: 'React',
      icon: '/src/assets/images/icons/react.svg',
      color: '#61DBFB',
    },
    {
      id: 2,
      name: 'Redux',
      icon: '/src/assets/images/icons/redux.svg',
      color: '#61DBFB',
    },
    {
      id: 3,
      name: 'Next JS',
      icon: '/src/assets/images/icons/nextjs.svg',
      color: '#61DBFB',
    },
    {
      id: 4,
      name: 'Javascript',
      icon: '/src/assets/images/icons/javascript.svg',
      color: '#61DBFB',
    },
    {
      id: 5,
      name: 'HTML',
      icon: '/src/assets/images/icons/html.svg',
      color: '#61DBFB',
    },
    {
      id: 6,
      name: 'CSS',
      icon: '/src/assets/images/icons/css.svg',
      color: '#61DBFB',
    },
    {
      id: 7,
      name: 'SASS',
      icon: '/src/assets/images/icons/sass.svg',
      color: '#61DBFB',
    },
    {
      id: 8,
      name: 'Bootstrap',
      icon: '/src/assets/images/icons/bootstrap.svg',
      color: '#61DBFB',
    },
    {
      id: 9,
      name: 'TailwindCSS',
      icon: '/src/assets/images/icons/tailwindcss.svg',
      color: '#61DBFB',
    },
  ],

  tools: <PropsType[]>[
    {
      id: 1,
      name: 'VSCode',
      icon: '/src/assets/images/icons/vscode.svg',
    },
    {
      id: 2,
      name: 'Git',
      icon: '/src/assets/images/icons/git.svg',
    },
    {
      id: 3,
      name: 'Figma',
      icon: '/src/assets/images/icons/figma.svg',
    },
    {
      id: 4,
      name: 'PhotoShop',
      icon: '/src/assets/images/icons/photoshop.svg',
    },
  ],
};

export default SKILLS;
