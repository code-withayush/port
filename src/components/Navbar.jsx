import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { HiMenu, HiX } from "react-icons/hi"; // Hamburger menu icons

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Close mobile menu when window is resized
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setNavOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sections = [
    { name: "Projects", id: "projects" },
    { name: "Education", id: "education" },
    { name: "Internships", id: "internships" },
    { name: "Certifications", id: "certifications" },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo / Name */}
        <div className="text-2xl font-bold text-blue-600 cursor-pointer">
          Ayush Kumar
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {sections.map((section) => (
            <Link
              key={section.id}
              to={section.id}
              smooth={true}
              duration={500}
              spy={true}
              offset={-80} // offset for sticky navbar
              className={`cursor-pointer hover:text-blue-500 transition ${
                activeSection === section.id ? "text-blue-600 font-semibold" : ""
              }`}
              onSetActive={() => setActiveSection(section.id)}
            >
              {section.name}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setNavOpen(!navOpen)}
            className="text-2xl focus:outline-none"
          >
            {navOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {navOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col px-4 py-4 space-y-3">
            {sections.map((section) => (
              <li key={section.id}>
                <Link
                  to={section.id}
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-80}
                  className="cursor-pointer block text-gray-700 hover:text-blue-500 transition"
                  onClick={() => setNavOpen(false)}
                >
                  {section.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
