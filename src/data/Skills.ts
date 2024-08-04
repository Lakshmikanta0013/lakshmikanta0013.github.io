import BootstrapLogo from '#assets/images/icons/bootstrap.svg?react';
import CodeigniterLogo from '#assets/images/icons/codeigniter.svg?react';
import CssLogo from '#assets/images/icons/css.svg?react';
import ExpressLogo from '#assets/images/icons/express.svg?react';
import FigmaLogo from '#assets/images/icons/figma.svg?react';
import GitLogo from '#assets/images/icons/git.svg?react';
import HtmlLogo from '#assets/images/icons/html.svg?react';
import MysqlLogo from '#assets/images/icons/mysql.svg?react';
import NestJSLogo from '#assets/images/icons/nestjs.svg?react';
import NextjsLogo from '#assets/images/icons/nextjs.svg?react';
import NodeJSLogo from '#assets/images/icons/nodejs.svg?react';
import PhotoshopLogo from '#assets/images/icons/photoshop.svg?react';
import PhpLogo from '#assets/images/icons/php.svg?react';
import ReduxLogo from '#assets/images/icons/redux.svg?react';
import SassLogo from '#assets/images/icons/sass.svg?react';
import TailwindCssLogo from '#assets/images/icons/tailwindcss.svg?react';
import TypescriptLogo from '#assets/images/icons/typescript.svg?react';
import VscodeLogo from '#assets/images/icons/vscode.svg?react';

type PropsType = {
  id: string;
  name: string;
  Icon: React.FunctionComponent<React.SVGProps<SVGAElement>>;
  color: string;
};

export const languages = <PropsType[]>[
  {
    id: 'nodejs',
    name: 'Nodejs',
    Icon: NodeJSLogo,
    color: '#61DBFB',
  },
  {
    id: 'typescript',
    name: 'Typescript',
    Icon: TypescriptLogo,
    color: '#61DBFB',
  },
  {
    id: 'redux',
    name: 'Redux',
    Icon: ReduxLogo,
    color: '#61DBFB',
  },
  {
    id: 'php',
    name: 'PHP',
    Icon: PhpLogo,
    color: '#61DBFB',
  },
  {
    id: 'mysql',
    name: 'MySQL',
    Icon: MysqlLogo,
    color: '#61DBFB',
  },
  {
    id: 'html5',
    name: 'HTML5',
    Icon: HtmlLogo,
    color: '#61DBFB',
  },
  {
    id: 'css3',
    name: 'CSS3',
    Icon: CssLogo,
    color: '#61DBFB',
  },
  {
    id: 'sass',
    name: 'SASS',
    Icon: SassLogo,
    color: '#61DBFB',
  },
  {
    id: 'bootstarp',
    name: 'Bootstrap',
    Icon: BootstrapLogo,
    color: '#61DBFB',
  },
  {
    id: 'tailwindcss',
    name: 'TailwindCSS',
    Icon: TailwindCssLogo,
    color: '#61DBFB',
  },
];

export const frameworks = <PropsType[]>[
  {
    id: 'nextjs',
    name: 'Nextjs',
    Icon: NextjsLogo,
    color: '#61DBFB',
  },
  {
    id: 'nestjs',
    name: 'Nestjs',
    Icon: NestJSLogo,
    color: '#61DBFB',
  },
  {
    id: 'express',
    name: 'Express',
    Icon: ExpressLogo,
    color: '#61DBFB',
  },
  {
    id: 'codeigniter',
    name: 'Codeigniter',
    Icon: CodeigniterLogo,
    color: '#61DBFB',
  },
];

export const tools = <PropsType[]>[
  {
    id: 'vscpde',
    name: 'VSCode',
    Icon: VscodeLogo,
  },
  {
    id: 'git',
    name: 'Git',
    Icon: GitLogo,
  },
  {
    id: 'figma',
    name: 'Figma',
    Icon: FigmaLogo,
  },
  {
    id: 'photoshop',
    name: 'PhotoShop',
    Icon: PhotoshopLogo,
  },
];
