import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    name: "Coding Ninja Clone",
    tech: ["React", "Tailwind CSS"],
    linkLive: "#",
    linkGit: "#",
    description: "Responsive clone of Coding Ninjas website with real-world UI.",
    image: "",
  },
  {
    name: "Social Media Website",
    tech: ["React", "Bootstrap"],
    linkLive: "#",
    linkGit: "#",
    description: "Dynamic post creation, tab navigation, context-based state management.",
    image: "",
  },
  {
    name: "Rock-Paper-Scissors Game",
    tech: ["HTML", "CSS", "JS"],
    linkLive: "#",
    linkGit: "#",
    description: "Interactive game with real-time scoring and dynamic UI.",
    image: "",
  },
  {
    name: "Calculator",
    tech: ["HTML", "CSS", "JS"],
    linkLive: "#",
    linkGit: "#",
    description: "Responsive web calculator with basic arithmetic and error handling.",
    image: "",
  },
  {
    name: "Coding Ninja Clone",
    tech: ["React", "Tailwind CSS"],
    linkLive: "#",
    linkGit: "#",
    description: "Responsive clone of Coding Ninjas website with real-world UI.",
    image: "",
  },
  {
    name: "Coding Ninja Clone",
    tech: ["React", "Tailwind CSS"],
    linkLive: "#",
    linkGit: "#",
    description: "Responsive clone of Coding Ninjas website with real-world UI.",
    image: "",
  },
  {
    name: "Coding Ninja Clone",
    tech: ["React", "Tailwind CSS"],
    linkLive: "#",
    linkGit: "#",
    description: "Responsive clone of Coding Ninjas website with real-world UI.",
    image: "",
  },
  {
    name: "Coding Ninja Clone",
    tech: ["React", "Tailwind CSS"],
    linkLive: "#",
    linkGit: "#",
    description: "Responsive clone of Coding Ninjas website with real-world UI.",
    image: "",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Projects</h2>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
        {projects.map((proj, idx) => (
          <div
            key={idx}
            style={{ animationDelay: `${idx * 0.2}s` }}
            className="relative group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md transform transition duration-500 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl"
          >
            {/* Optional Project Image */}
            {proj.image && (
              <img
                src={proj.image}
                alt={proj.name}
                className="w-full h-48 object-cover"
              />
            )}

            {/* Card content */}
            <div className="p-6 z-10 relative animate-fadeInUp">
              <h3 className="text-xl font-semibold mb-2">{proj.name}</h3>
              <p className="text-gray-500 dark:text-gray-300 mb-3">{proj.description}</p>

              {/* Tech badges */}
              <div className="flex flex-wrap gap-2 mb-4">
                {proj.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-sm px-3 py-1 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-white rounded-full shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons only visible on hover */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 flex justify-center items-center transition duration-500">
                <div className="opacity-0 group-hover:opacity-100 flex gap-4 transition duration-500">
                  <a
                    href={proj.linkLive}
                    target="_blank"
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded-lg shadow-lg hover:scale-105 hover:from-green-500 hover:to-blue-600 transition transform"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                  <a
                    href={proj.linkGit}
                    target="_blank"
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-700 to-black text-white font-semibold rounded-lg shadow-lg hover:scale-105 hover:from-gray-800 hover:to-black transition transform"
                  >
                    <FaGithub /> GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Fade-in animation */}
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
    </section>
  );
};

export default Projects;
