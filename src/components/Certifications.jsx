import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const certifications = [
  { title: "Tailwind CSS Bootcamp – June", link: "#" },
  { title: "Gemini AI Clone (HTML, CSS, JS) – June", link: "#" },
  { title: "Data Analytics Job Simulation by Deloitte – July", link: "#" },
  { title: "React + Redux – April 2025", link: "#" },
  { title: "JavaScript – April 2025", link: "#" },
  { title: "Java-core – Xtrude Engineering (Sept 2023)", link: "#" },
  { title: "Front-End Development – Xtrude Engineering (Nov 2024)", link: "#" },
  { title: "React.js – Xtrude Engineering (Aug 2025)", link: "#" },
];

const Certifications = () => {
  return (
    <section id="certifications" className="max-w-6xl mx-auto px-4 py-16 bg-gray-50">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Certifications</h2>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-10">
        {certifications.map((cert, idx) => (
          <div
            key={idx}
            style={{ animationDelay: `${idx * 0.15}s` }}
            className="relative bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl animate-fadeInUp group"
          >
            <div className="p-6">
              <h3 className="text-lg font-bold mb-4 group-hover:text-blue-500 transition-colors duration-300">
                {cert.title}
              </h3>

              <a
                href={cert.link}
                target="_blank"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg shadow-md hover:from-blue-600 hover:to-indigo-700 hover:scale-105 transition transform font-medium"
              >
                View Certificate <FaExternalLinkAlt />
              </a>
            </div>

            {/* Subtle hover overlay */}
            <div className="absolute inset-0 bg-blue-50 opacity-0 group-hover:opacity-20 transition duration-500 rounded-xl pointer-events-none"></div>

            {/* Decorative corner animation */}
            <div className="absolute top-0 right-0 w-5 h-5 bg-blue-300 rounded-bl-full animate-bounce opacity-40"></div>
          </div>
        ))}
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

          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-5px); }
          }
          .animate-bounce {
            animation: bounce 1.5s infinite;
          }
        `}
      </style>
    </section>
  );
};

export default Certifications;
