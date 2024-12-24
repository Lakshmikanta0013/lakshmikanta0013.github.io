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
    url: 'https://git.new/frontendfixer',
    icon: faGithub,
  },
  {
    id: 2,
    name: 'LinkedIn',
    url: 'https://dub.sh/lakshmikanta-linkedin',
    icon: faLinkedin,
  },
  {
    id: 3,
    name: 'Instagram',
    url: 'https://dub.sh/frontendfixer-insta',
    icon: faInstagram,
  },
  {
    id: 4,
    name: 'Twitter',
    url: 'https://dub.sh/frontendfixer-x',
    icon: faTwitter,
  },
];
