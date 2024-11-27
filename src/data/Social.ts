import { IconProp } from '@fortawesome/fontawesome-svg-core';
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

export type SocialLink = {
  id: number;
  name: string;
  url: string;
  icon: IconProp;
};

export const socialLinks: SocialLink[] = [
  {
    id: 1,
    name: 'GutHub',
    url: 'https://github.com/frontendfixer',
    icon: faGithub,
  },
  {
    id: 2,
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/lakshmikanta',
    icon: faLinkedin,
  },
  {
    id: 3,
    name: 'Instagram',
    url: 'https://instagram.com/frontendfixer',
    icon: faInstagram,
  },
  {
    id: 4,
    name: 'Twitter',
    url: 'https://twitter.com/frontendfixer',
    icon: faTwitter,
  },
];
