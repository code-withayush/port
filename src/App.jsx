import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Internships from "./components/Internships";
import Certifications from "./components/Certifications";
import Footer from "./components/Footer";
import ScrollReveal from "./components/ScrollReveal";
import LandingPage from "./components/landing1";
import ProjectSuggestions from "./components/projectsuggestions";
import AboutMe from "./components/about";
function App() {
  return (
    <div className="bg-gray-50 text-gray-800">

      <Navbar />

      <ScrollReveal>
        <Hero />
      </ScrollReveal>
<AboutMe></AboutMe>
      <ScrollReveal>
        <Projects />
      </ScrollReveal>

      <ScrollReveal>
        <Education />
      </ScrollReveal>

      <ScrollReveal>
        <Internships />
      </ScrollReveal>
      <ProjectSuggestions/>
      <ScrollReveal>
        <Certifications />
      </ScrollReveal>

      <ScrollReveal>
        <Footer />
      </ScrollReveal>
    </div>
  );
}

export default App;
