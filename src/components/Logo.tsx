import { Link } from 'react-router-dom';
import { twJoin } from 'tailwind-merge';

import { ReactComponent as LogoSvg } from '../assets/images/logo.svg';

const Logo = ({ large }: { large?: boolean }) => {
  return (
    <Link to="/">
      <LogoSvg
        className={twJoin('text-white', large ? 'w-48' : 'w-[7.5rem]')}
      />
    </Link>
  );
};

export default Logo;
