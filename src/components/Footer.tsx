import Logo from './Logo';
import SocialLinks from './SocialLinks';

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="flex flex-col items-center gap-10">
        <Logo large variant="dark" />

        <p className="max-w-sm text-center font-serif text-xl text-gray-300">
          Transforming Ideas into Immersive User Experiences with the Power of
          React
        </p>

        <SocialLinks inverted />
      </div>
      <div className="flex flex-col items-center gap-1">
        <p className="text-white">
          Made with <span className="text-xl text-red-600">&#9829;</span> by{' '}
          <a
            href="https://github.com/frontendfixer"
            className="underline hover:text-blue-400"
          >
            Lakshmikanta
          </a>
        </p>
        <p className="font-sm text-gray-500">&copy; All right reserved 2023</p>
      </div>
    </div>
  );
};

export default Footer;
