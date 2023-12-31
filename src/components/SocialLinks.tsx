import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { twJoin } from 'tailwind-merge';

import { SocialLink, socialLinks } from '#data/Social';

const SocialLinks = ({ inverted }: { inverted?: boolean }) => {
  return (
    <div className="flex items-center gap-4">
      {socialLinks.map((link: SocialLink) => (
        <a href={link.url} key={link.id} target="_blank">
          <FontAwesomeIcon
            icon={link.icon}
            className={twJoin(
              'h-8 w-8',
              inverted ? 'text-white-full' : 'text-dark',
              'shadow-sm transition-transform duration-300 ease-linear hover:-translate-y-1 hover:text-primary dark:text-white dark:hover:text-primary-400',
            )}
          />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
