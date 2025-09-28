import React from "react";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

const Hero = () => {
  return (
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
            Passionate frontend developer specializing in React.js and modern web technologies. I love creating responsive and user-friendly web applications.
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
              href="https://www.linkedin.com/in/ayushkumar" 
              target="_blank" 
              className="bg-white text-blue-500 px-6 py-3 rounded-lg flex items-center gap-2 transform transition duration-300 hover:scale-110 hover:shadow-xl hover:bg-blue-100"
            >
              <FaLinkedin /> LinkedIn
            </a>
            <a 
              href="/Ayush_Kumar_Resume.pdf" 
              download 
              className="bg-blue-500 text-white px-6 py-3 rounded-lg transform transition duration-300 hover:scale-110 hover:shadow-xl hover:bg-blue-600"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* Image / Placeholder Section */}
        <div className="md:w-1/2 mb-8 md:mb-0 flex justify-center animate-fadeInRight">
          <div className="w-64 h-64 bg-white/20 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-xl transform transition duration-500 hover:scale-105 animate-bounce-slow">
            AY
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
  );
};

export default Hero;
