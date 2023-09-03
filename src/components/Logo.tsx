import { Link } from 'react-router-dom';

import { ReactComponent as LogoSvg } from '../assets/images/logo.svg';

const Logo = () => {
  return (
    <Link to="/">
      <LogoSvg className="w-[7.5rem] text-white" />
    </Link>
  );
};

export default Logo;
