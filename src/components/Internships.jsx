import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const internships = [
  {
    name: "Artificial Intelligence",
    period: "Feb 2025 – April 2025",
    company: "Skill Dunia",
    description: "Completed 2-month AI Internship provided by Skill Dunia.",
    link: "https://drive.google.com/file/d/1HLjBEOOv0OSR2giqgKUPjLzYKKgo37q7/view?usp=drivesdk",
  },
  {
    name: "MERN Stack Developer",
    period: "June 2025 – July 2025",
    company: "CSIR-CRRI, New Delhi",
    description: "Completed 1-month MERN Stack Internship provided by CSIR-CRRI, New Delhi.",
    link: "https://drive.google.com/file/d/1ZLjfkiK8OXnxUtu0weHA0eoUPX33k6g4/view?usp=drivesdk",
  },
  {
    name: "Artificial Intelligence",
    period: " June 2025 – August 2025",
    company: "Yhills",
    description: "Completed 2-month AI Internship provided by Skill Dunia.",
    link: "https://drive.google.com/file/d/12KxeAIhecyBq2A9kJWep0kty7LCQ2qza/view?usp=drivesdk",
  },
];

const Internships = () => {
  return (
    <section id="internships" className="max-w-6xl mx-auto px-4 py-16 bg-gray-50">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Internships</h2>

      <div className="grid md:grid-cols-2 gap-10">
        {internships.map((intn, idx) => (
          <div
            key={idx}
            style={{ animationDelay: `${idx * 0.2}s` }}
            className="relative bg-gradient-to-br from-white to-gray-100 rounded-xl shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl animate-fadeInUp group"
          >
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 group-hover:text-blue-500 transition">{intn.name}</h3>
              <span className="inline-block text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full mb-4 animate-pulse">
                {intn.period}
              </span>
              <br></br>
              <span className="inline-block text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full mb-4 animate-pulse">
                {intn.company}
              </span>
              <p className="text-gray-700 mb-4">{intn.description}</p>
              <a
                href={intn.link}
                target="_blank"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg shadow-md hover:from-blue-600 hover:to-indigo-700 hover:scale-105 transition transform"
              >
                <FaExternalLinkAlt /> Certificate
              </a>
            </div>
            {/* Subtle hover overlay for effect */}
            <div className="absolute inset-0 bg-blue-50 opacity-0 group-hover:opacity-20 transition duration-500 rounded-xl pointer-events-none"></div>
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

          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.6; }
          }
          .animate-pulse {
            animation: pulse 2s infinite;
          }
        `}
      </style>
    </section>
  );
};

export default Internships;
