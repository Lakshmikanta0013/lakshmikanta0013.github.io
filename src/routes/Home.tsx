import Container from '../components/Container';
import HeroSection from '../components/HeroSection';
import LanguageAndTool from '../components/LanguageAndTool';

const Home = () => {
  return (
    <main className="bg-gray-50 dark:bg-dark-900">
      <section
        id="hero"
        className="bg-[url('/src/assets/images/hero-pattern.svg')] bg-cover bg-no-repeat"
      >
        <Container>
          <HeroSection />
        </Container>
      </section>
      <section id="skills" className="pb-16">
        <div className="bg-blue-400 pb-40 pt-24">
          <h2 className="text-center font-serif text-4xl font-bold text-white drop-shadow-md lg:text-7xl">
            Skills
          </h2>
        </div>
        <Container>
          <LanguageAndTool />
        </Container>
      </section>
    </main>
  );
};

export default Home;
