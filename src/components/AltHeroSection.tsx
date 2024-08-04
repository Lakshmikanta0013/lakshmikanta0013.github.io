import heroImage from '#assets/images/hero-alt.webp';
// import HeroIllustration from '#assets/images/hero-illustration.webp';

const AltHeroSection = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="my-16 flex flex-col items-center px-3 pb-6 sm:mb-20 sm:mt-20">
        <h1 className="mb-16 animate-text bg-gradient-to-r from-primary-600 via-rose-500 to-primary-600 bg-clip-text text-center text-5xl font-black text-transparent md:w-3/4 md:text-7xl  lg:text-9xl">
          FullStack Web Developer
        </h1>
        <p className="max-w-[52ch] text-center text-2xl text-dark-900 dark:text-white">
          Transforming Ideas into Immersive User Experiences with the Power of{' '}
          <strong>NodeJs</strong> and <strong>PHP</strong>
        </p>
      </div>
      <div>
        <img
          src={heroImage}
          alt="image of three people discussing their coding skill and development "
          aria-label="image of three people discussing their coding skill and development "
          className="mx-auto w-full md:w-2/3 lg:w-1/2"
        />
      </div>
    </div>
  );
};

export default AltHeroSection;
