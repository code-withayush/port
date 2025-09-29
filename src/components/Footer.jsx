import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16 mt-20 relative overflow-hidden">
      {/* Background gradient glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-500 opacity-10 blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8 relative z-10">
        {/* Branding */}
        <div className="flex flex-col space-y-4 animate-fadeInUp" style={{ animationDelay: "0s" }}>
          <h2 className="text-2xl font-bold">Ayush Kumar</h2>
          <p className="text-gray-400">Full Stack Developer | Mern Enthusiast</p>
          <div className="flex gap-4 mt-2">
            {[{
              icon: <FaLinkedin />,
              link: "https://www.linkedin.com/in/ayush-kumar-b87a8830b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
              bg: "from-blue-500 to-indigo-600"
            },
            {
              icon: <FaGithub />,
              link: "https://github.com/code-withayush",
              bg: "from-gray-700 to-gray-900"
            },
            {
              icon: <FaEnvelope />,
              link: "mailto:ayush77373@gmail.com",
              bg: "from-red-500 to-pink-500"
            }].map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                target="_blank"
                className={`p-3 rounded-full bg-gradient-to-r ${item.bg} transform transition duration-500 hover:scale-125 hover:rotate-6 hover:shadow-lg`}
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Navigation */}
        <div className="flex flex-col space-y-2 animate-fadeInUp" style={{ animationDelay: "0.2s" }}>
          <h3 className="font-semibold text-lg mb-2">Quick Links</h3>
          {["projects","education","internships","certifications"].map((section, idx) => (
            <Link
              key={idx}
              to={section}
              smooth={true}
              duration={500}
              className="hover:text-blue-400 cursor-pointer transition transform hover:scale-105"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          ))}
        </div>

        {/* Contact Info */}
        <div className="flex flex-col space-y-2 animate-fadeInUp" style={{ animationDelay: "0.4s" }}>
          <h3 className="font-semibold text-lg mb-2">Contact</h3>
          <p>Email: <a href="mailto:ayush77373@gmail.com" className="text-blue-400 hover:underline">ayush77373@gmail.com</a></p>
          <p>Phone: <span className="text-gray-300">+91-9528107569</span></p>
          <p>Location: <span className="text-gray-300">Noida, Uttar Pradesh</span></p>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-500 animate-fadeInUp" style={{ animationDelay: "0.6s" }}>
        © {new Date().getFullYear()} Ayush Kumar. All rights reserved.
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes fadeInUp {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeInUp {
            opacity: 0;
            animation: fadeInUp 0.8s ease forwards;
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;
