import AltHeroSection from '../components/AltHeroSection';
import BackToTop from '../components/BackToTop';
import Contact from '../components/Contact';
import ContactCapsule from '../components/ContactCapsule';
import Container from '../components/Container';
import Footer from '../components/Footer';
import Intro from '../components/Intro';
// import HeroSection from '../components/HeroSection';
import LanguageAndTool from '../components/LanguageAndTool';
import RecentWork from '../components/RecentWork';

const Home = () => {
  return (
    <>
      <BackToTop />
      <main className="bg-white dark:bg-dark-900">
        <section id="hero">
          <Container>
            <AltHeroSection />
          </Container>
        </section>
        <section id="about" className=" pb-16">
          <div className=" bg-primary-700 pb-40 pt-24">
            <div className="px-2 pb-16">
              <Intro />
            </div>
            <h2 className="text-center text-4xl font-bold text-white drop-shadow-md lg:text-6xl">
              Development Skills
            </h2>
          </div>
          <Container>
            <LanguageAndTool />
          </Container>
        </section>
        <section className="pb-16 pt-24" id="projects">
          <Container>
            <h2 className="mb-16 text-center text-4xl font-bold capitalize text-dark-900 drop-shadow-md dark:text-gray-50 lg:text-6xl">
              My recent projects
            </h2>
            <RecentWork />
          </Container>
        </section>
        <section id="contact" className="mt-40 bg-secondary/20 pb-16">
          <Container>
            <div className="relative -top-20">
              <ContactCapsule />
            </div>
            <div>
              <Contact />
            </div>
          </Container>
        </section>
      </main>
      <footer className="bg-dark-900 pb-6 pt-24">
        <Container>
          <Footer />
        </Container>
      </footer>
    </>
  );
};

export default Home;
