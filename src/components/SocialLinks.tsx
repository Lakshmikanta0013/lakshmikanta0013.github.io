import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { twJoin } from 'tailwind-merge';

import { SocialLink, socialLinks } from '../data/Social';

const SocialLinks = ({ inverted }: { inverted?: boolean }) => {
  return (
    <div className="flex items-center gap-4">
      {socialLinks.map((link: SocialLink) => (
        <Link to={link.url} key={link.id}>
          <FontAwesomeIcon
            icon={link.icon}
            className={twJoin(
              'h-8 w-8',
              inverted ? 'text-white' : 'text-dark-900',
              'shadow-sm transition-transform duration-300 ease-linear hover:-translate-y-1 hover:text-blue-600 dark:text-white dark:hover:text-blue-400',
            )}
          />
        </Link>
      ))}
    </div>
  );
};

export default SocialLinks;
