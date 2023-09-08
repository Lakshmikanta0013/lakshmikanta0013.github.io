import heroImage from '../assets/images/hero-alt.webp';
// import HeroIllustration from '../assets/images/hero-illustration.webp';

const AltHeroSection = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mb-24 mt-32 flex flex-col px-3 pb-6 sm:mb-32 sm:mt-40">
        <h1 className="mb-6  text-center text-4xl font-black dark:text-primary-400 md:text-6xl">
          Frontend React Developer
        </h1>
        <p className="text-center text-xl text-dark-900 dark:text-white">
          Transforming Ideas into Immersive User Experiences with the Power of
          React
        </p>
      </div>
      <div>
        <img
          src={heroImage}
          alt=""
          aria-label=""
          className="mx-auto w-full md:w-2/3 lg:w-1/2"
        />
      </div>
    </div>
  );
};

export default AltHeroSection;
