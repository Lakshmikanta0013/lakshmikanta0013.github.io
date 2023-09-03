import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

import { ReactComponent as HeroIllustration } from '../assets/images/hero-illustration.svg';
import { SocialLink, socialLinks } from '../data/Social';

const HeroSection = () => {
  return (
    <div className="flex min-h-[80vh] w-full flex-col-reverse items-center md:min-h-[90vh] md:flex-row md:px-6">
      <div className="flex grow flex-col justify-center px-3 pb-6 md:w-1/2 md:px-6">
        <h1 className="mb-3 font-serif text-4xl font-black leading-[0.8] text-blue-600 dark:text-blue-400 md:text-6xl lg:text-7xl">
          <span className="block font-sans text-xl font-normal text-dark-900 dark:text-blue-100 md:text-3xl">
            Hello, I am
          </span>
          Lakshmikanta Patra
        </h1>
        <p className="text-xl text-dark-900 dark:text-white md:text-3xl">
          a passionate
          <strong className="relative mx-1 font-serif text-blue-600 before:absolute before:bottom-0 before:h-[2px] before:w-full before:bg-pink-600 before:content-[''] dark:text-blue-400 dark:before:bg-pink-400 md:before:h-1">
            React
          </strong>
          Developer
        </p>
        <div className="relative mt-10 flex flex-col pl-8 before:absolute before:left-0 before:h-full before:w-2 before:bg-blue-600 before:content-[''] dark:before:bg-blue-400">
          <h2 className="mb-4 font-serif text-xl font-medium text-dark-900 dark:text-white md:text-3xl">
            Connect with me
          </h2>
          <div className="flex items-center gap-4">
            {socialLinks.map((link: SocialLink) => (
              <Link to={link.url} key={link.id}>
                <FontAwesomeIcon
                  icon={link.icon}
                  className="h-8 w-8 text-dark-900 shadow-sm transition-transform duration-300 ease-linear hover:-translate-y-1 hover:text-blue-600 dark:text-white dark:hover:text-blue-400"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="grow">
        <HeroIllustration className="h-auto w-full" />
      </div>
    </div>
  );
};

export default HeroSection;
