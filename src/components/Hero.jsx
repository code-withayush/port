// src/components/Hero.jsx
import React from "react";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import MyImage from "../assets/14.jpg"; // Image in src/assets
import ScrollReveal from "./ScrollReveal"; // ScrollReveal component

const Hero = () => {
  return (
    <ScrollReveal>
      <section className="relative py-24 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 text-white overflow-hidden">

        {/* Floating Background Circles */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/20 rounded-full animate-bounce-slow"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-white/10 rounded-full animate-bounce-slower"></div>

        <div className="relative max-w-6xl mx-auto px-4 flex flex-col-reverse md:flex-row items-center md:justify-between">

          {/* Text Section */}
          <div className="md:w-1/2 space-y-6 animate-fadeInUp">
            <h1 className="text-4xl md:text-5xl font-bold mb-2 leading-tight">
              Hi, I'm Ayush Kumar
            </h1>
            <p className="text-lg md:text-xl max-w-lg">
              I am a passionate Full-Stack Developer specializing in React.js, Node.js, and modern web technologies. I love building scalable, responsive, and user-friendly web applications that deliver seamless user experiences. From designing intuitive frontends with React to developing robust backend APIs with Node.js and managing databases with MongoDB, I enjoy working on end-to-end web solutions. I am constantly exploring new technologies and best practices to create efficient, maintainable, and high-performing applications.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-4">
              <a 
                href="mailto:ayush77373@gmail.com" 
                className="bg-white text-blue-500 px-6 py-3 rounded-lg flex items-center gap-2 transform transition duration-300 hover:scale-110 hover:shadow-xl hover:bg-blue-100"
              >
                <FaEnvelope /> Email Me
              </a>
              <a 
                href="https://www.linkedin.com/in/ayush-kumar-b87a8830b/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-blue-500 px-6 py-3 rounded-lg flex items-center gap-2 transform transition duration-300 hover:scale-110 hover:shadow-xl hover:bg-blue-100"
              >
                <FaLinkedin /> LinkedIn
              </a>
              <button
                onClick={() => {
                  if (window.confirm("Do you want to download the resume?")) {
                    const link = document.createElement("a");
                    link.href = "/Ayush_Kumar_resume.pdf";
                    link.download = "Ayush_Kumar_resume.pdf";
                    link.click();
                  }
                }}
                className="bg-blue-500 text-white px-6 py-3 rounded-lg transform transition duration-300 hover:scale-110 hover:shadow-xl hover:bg-blue-600"
              >
                Download Resume
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 mb-8 md:mb-0 flex justify-center animate-fadeInRight">
            <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl transform transition duration-500 hover:scale-105">
              <img
                src={MyImage} 
                alt="Ayush Kumar"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Tailwind Animations */}
        <style>
          {`
            @keyframes fadeInUp {
              0% { opacity: 0; transform: translateY(20px); }
              100% { opacity: 1; transform: translateY(0); }
            }
            @keyframes fadeInRight {
              0% { opacity: 0; transform: translateX(20px); }
              100% { opacity: 1; transform: translateX(0); }
            }
            @keyframes bounceSlow {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-20px); }
            }
            @keyframes bounceSlower {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-10px); }
            }
            .animate-fadeInUp { animation: fadeInUp 1s ease forwards; }
            .animate-fadeInRight { animation: fadeInRight 1s ease forwards; }
            .animate-bounce-slow { animation: bounceSlow 5s infinite ease-in-out; }
            .animate-bounce-slower { animation: bounceSlower 8s infinite ease-in-out; }
          `}
        </style>
      </section>
    </ScrollReveal>
  );
};

export default Hero;
