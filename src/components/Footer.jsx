import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const sections = [
    { name: "Projects", path: "/projects" },
    { name: "Education", path: "/education" },
    { name: "Internships", path: "/internships" },
    { name: "Certifications", path: "/certifications" },
    
  ];

  return (
    <footer className="bg-gray-900 text-white py-16 mt-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-500 opacity-10 blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8 relative z-10">
        {/* Branding & Social */}
        <div className="flex flex-col space-y-4">
          <h2 className="text-2xl font-bold">Ayush Kumar</h2>
          <p className="text-gray-400">Full Stack Developer | MERN Enthusiast</p>
          <div className="flex gap-4 mt-2">
            {[
              { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/ayush-kumar-b87a8830b/", bg: "from-blue-500 to-indigo-600" },
              { icon: <FaGithub />, link: "https://github.com/code-withayush", bg: "from-gray-700 to-gray-900" },
              { icon: <FaEnvelope />, link: "mailto:ayush77373@gmail.com", bg: "from-red-500 to-pink-500" },
            ].map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full bg-gradient-to-r ${item.bg} transform transition duration-500 hover:scale-125 hover:rotate-6 hover:shadow-lg`}
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col space-y-2">
          <h3 className="font-semibold text-lg mb-2">Quick Links</h3>
          {sections.map((section, idx) => (
            <Link
              key={idx}
              to={section.path}
              className="text-gray-400 hover:text-blue-400 transition transform hover:scale-105 hover:underline"
            >
              {section.name}
            </Link>
          ))}
        </div>

        {/* Contact Info */}
        <div className="flex flex-col space-y-2">
          <h3 className="font-semibold text-lg mb-2">Contact</h3>
          <p>Email: <a href="mailto:ayush77373@gmail.com" className="text-blue-400 hover:underline">ayush77373@gmail.com</a></p>
          <p>Phone: +91-9528107569</p>
          <p>Location: Noida, Uttar Pradesh</p>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-500">
        © {new Date().getFullYear()} Ayush Kumar. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
