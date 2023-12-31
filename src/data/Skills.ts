import BootstrapLogo from '../assets/images/icons/bootstrap.svg?react';
import CssLogo from '../assets/images/icons/css.svg?react';
import FigmaLogo from '../assets/images/icons/figma.svg?react';
import GitLogo from '../assets/images/icons/git.svg?react';
import HtmlLogo from '../assets/images/icons/html.svg?react';
import JavascriptLogo from '../assets/images/icons/javascript.svg?react';
import MysqlLogo from '../assets/images/icons/mysql.svg?react';
import NextjsLogo from '../assets/images/icons/nextjs.svg?react';
import PhotoshopLogo from '../assets/images/icons/photoshop.svg?react';
import PhpLogo from '../assets/images/icons/php.svg?react';
import ReactLogo from '../assets/images/icons/react.svg?react';
import ReduxLogo from '../assets/images/icons/redux.svg?react';
import SassLogo from '../assets/images/icons/sass.svg?react';
import TailwindCssLogo from '../assets/images/icons/tailwindcss.svg?react';
import VscodeLogo from '../assets/images/icons/vscode.svg?react';

type PropsType = {
  id: number;
  name: string;
  Icon: React.FunctionComponent<React.SVGProps<SVGAElement>>;
  color: string;
};

export const languages = <PropsType[]>[
  {
    id: 1,
    name: 'PHP',
    Icon: PhpLogo,
    color: '#61DBFB',
  },
  {
    id: 2,
    name: 'React',
    Icon: ReactLogo,
    color: '#61DBFB',
  },
  {
    id: 3,
    name: 'Redux',
    Icon: ReduxLogo,
    color: '#61DBFB',
  },
  {
    id: 4,
    name: 'Next JS',
    Icon: NextjsLogo,
    color: '#61DBFB',
  },
  {
    id: 5,
    name: 'MySQL',
    Icon: MysqlLogo,
    color: '#61DBFB',
  },
  {
    id: 6,
    name: 'Javascript',
    Icon: JavascriptLogo,
    color: '#61DBFB',
  },
  {
    id: 7,
    name: 'HTML5',
    Icon: HtmlLogo,
    color: '#61DBFB',
  },
  {
    id: 8,
    name: 'CSS3',
    Icon: CssLogo,
    color: '#61DBFB',
  },
  {
    id: 9,
    name: 'SASS',
    Icon: SassLogo,
    color: '#61DBFB',
  },
  {
    id: 10,
    name: 'Bootstrap',
    Icon: BootstrapLogo,
    color: '#61DBFB',
  },
  {
    id: 11,
    name: 'TailwindCSS',
    Icon: TailwindCssLogo,
    color: '#61DBFB',
  },
];

export const tools = <PropsType[]>[
  {
    id: 1,
    name: 'VSCode',
    Icon: VscodeLogo,
  },
  {
    id: 2,
    name: 'Git',
    Icon: GitLogo,
  },
  {
    id: 3,
    name: 'Figma',
    Icon: FigmaLogo,
  },
  {
    id: 4,
    name: 'PhotoShop',
    Icon: PhotoshopLogo,
  },
];
