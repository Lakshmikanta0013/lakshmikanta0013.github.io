import bootstrapLogo from '../assets/images/icons/bootstrap.svg';
import cssLogo from '../assets/images/icons/css.svg';
import figmaLogo from '../assets/images/icons/figma.svg';
import gitLogo from '../assets/images/icons/git.svg';
import htmlLogo from '../assets/images/icons/html.svg';
import javascriptLogo from '../assets/images/icons/javascript.svg';
import nextjsLogo from '../assets/images/icons/nextjs.svg';
import photoshopLogo from '../assets/images/icons/photoshop.svg';
import reactLogo from '../assets/images/icons/react.svg';
import reduxLogo from '../assets/images/icons/redux.svg';
import sassLogo from '../assets/images/icons/sass.svg';
import tailwindcssLogo from '../assets/images/icons/tailwindcss.svg';
import vscodeLogo from '../assets/images/icons/vscode.svg';

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
      icon: reactLogo,
      color: '#61DBFB',
    },
    {
      id: 2,
      name: 'Redux',
      icon: reduxLogo,
      color: '#61DBFB',
    },
    {
      id: 3,
      name: 'Next JS',
      icon: nextjsLogo,
      color: '#61DBFB',
    },
    {
      id: 4,
      name: 'Javascript',
      icon: javascriptLogo,
      color: '#61DBFB',
    },
    {
      id: 5,
      name: 'HTML',
      icon: htmlLogo,
      color: '#61DBFB',
    },
    {
      id: 6,
      name: 'CSS',
      icon: cssLogo,
      color: '#61DBFB',
    },
    {
      id: 7,
      name: 'SASS',
      icon: sassLogo,
      color: '#61DBFB',
    },
    {
      id: 8,
      name: 'Bootstrap',
      icon: bootstrapLogo,
      color: '#61DBFB',
    },
    {
      id: 9,
      name: 'TailwindCSS',
      icon: tailwindcssLogo,
      color: '#61DBFB',
    },
  ],

  tools: <PropsType[]>[
    {
      id: 1,
      name: 'VSCode',
      icon: vscodeLogo,
    },
    {
      id: 2,
      name: 'Git',
      icon: gitLogo,
    },
    {
      id: 3,
      name: 'Figma',
      icon: figmaLogo,
    },
    {
      id: 4,
      name: 'PhotoShop',
      icon: photoshopLogo,
    },
  ],
};

export default SKILLS;
