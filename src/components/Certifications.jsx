import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const certifications = [
  { title: "Tailwind CSS Bootcamp – June", link: "https://drive.google.com/file/d/1V7gU95VB8M4cYsMlAF3MjFB8fLgmwlBq/view" },
  { title: "Gemini AI Clone (HTML, CSS, JS) – June", link: "https://drive.google.com/file/d/1VFo-hd50KDoIe-uCfL5wt3-a27-WVE-o/view" },
  { title: "Data Analytics Job Simulation by Deloitte – July", link: "https://drive.google.com/file/d/1GAVygAEzpXK2PNB23f04-DIxspm1y2L_/view" },
  { title: "React + Redux – April 2025", link: "https://drive.google.com/file/d/1omuRNLpwoCUmDw-y8-ZUl2RdI4eaTvBj/view" },
  { title: "JavaScript – April 2025", link: "https://drive.google.com/file/d/1crr8t0ZW4wxMzj7KpE6KBaWPJE5eq2mo/view" },
  { title: "Java-core – Xtrude Engineering (Sept 2023)", link: "https://drive.google.com/file/d/1xXU4aG8mhh0UuumDoDgC3ub3sQRyz9_n/view" },
  { title: "Front-End Development – Xtrude Engineering (Nov 2024)", link: "https://drive.google.com/file/d/1Fl2mND_o4HgmzRK2agkVjVMCOS9B11ma/view" },
  { title: "React.js – Xtrude Engineering (Aug 2025)", link: "https://drive.google.com/file/d/1DUSaIDCjq_tGoL7MenL5mcw6osvW0ZDG/view" },
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
