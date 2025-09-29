// App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Internships from "./components/Internships";
import Certifications from "./components/Certifications";
import Footer from "./components/Footer";
import ProjectSuggestions from "./components/projectsuggestions";
import AboutMe from "./components/about";
import Contact from "./components/Contact";
import ScrollReveal from "./components/ScrollReveal"; // ✅ Correct import

function App() {
  return (
    <BrowserRouter>
      <div className="bg-gray-50 text-gray-800">
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                {/* Wrap Hero with ScrollReveal */}
                <ScrollReveal>
                  <Hero />
                </ScrollReveal>

                {/* Other components can also use ScrollReveal */}
                <ScrollReveal>
                  <AboutMe />
                </ScrollReveal>

                <ScrollReveal>
                  <ProjectSuggestions />
                </ScrollReveal>

                <ScrollReveal>
                  <Footer />
                </ScrollReveal>
              </>
            }
          />
          <Route path="/projects" element={<Projects />} />
          <Route path="/education" element={<Education />} />
          <Route path="/internships" element={<Internships />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
