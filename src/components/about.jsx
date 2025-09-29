import React from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs } from "react-icons/fa";
import MyImage from "../assets/15.jpg";
import { TbBrandMysql } from "react-icons/tb";
import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";

const AboutMe = () => {
  const skills = [
    { name: "React.js", icon: <FaReact className="text-blue-500 text-3xl" />, level: 90 },
    { name: "JavaScript", icon: <FaJs className="text-yellow-500 text-3xl" />, level: 85 },
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500 text-3xl" />, level: 95 },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-600 text-3xl" />, level: 90 },
    { name: "Node.js", icon: <FaNodeJs className="text-green-600 text-3xl" />, level: 70 },
     { name: "Express.js", icon: <SiExpress className="text-green-600 text-3xl" />, level: 70 },
      { name: "Mongodb", icon: <DiMongodb  className="text-green-600 text-3xl" />, level: 70 },
       { name: "Sql", icon: <TbBrandMysql  className="text-green-600 text-3xl" />, level: 70 },
  ];

  return (
    <section id="about" className="relative bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 py-24">
      <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
        {/* Profile Image */}
        <div className="w-56 h-56 rounded-full overflow-hidden shadow-xl transform hover:scale-105 transition">
          <img
            src={MyImage}
            alt="Ayush Kumar"
            className="w-full h-full object-cover"
          />
        </div>

        {/* About Info */}
        <div className="flex-1 space-y-6">
          <h2 className="text-4xl font-bold text-gray-800 animate-fadeInUp">About Me</h2>
          <p className="text-gray-700 text-lg max-w-xl animate-fadeInUp delay-200">
            Hi! I'm <span className="font-semibold text-blue-600">Ayush Kumar</span>, a passionate frontend developer specializing in React.js and modern web technologies. I love crafting responsive and interactive web experiences that delight users.
          </p>

          {/* Skills */}
          <div className="grid sm:grid-cols-2 gap-6">
            {skills.map((skill, idx) => (
              <div
                key={idx}
                className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-2 hover:scale-105 transition flex flex-col gap-3 animate-fadeInUp"
                style={{ animationDelay: `${idx * 0.2}s` }}
              >
                <div className="flex items-center gap-3">
                  {skill.icon}
                  <span className="font-semibold text-gray-800">{skill.name}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-500 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Fun Facts */}
          <div className="mt-6 p-4 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition animate-fadeInUp delay-600">
            <h3 className="font-semibold text-lg mb-2">Fun Facts</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Love solving challenging coding problems</li>
              <li>Enjoys building creative UI designs</li>
              <li>Passionate about learning new technologies</li>
            </ul>
          </div>
        </div>
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
          .delay-200 { animation-delay: 0.2s; }
          .delay-600 { animation-delay: 0.6s; }
        `}
      </style>
    </section>
  );
};

export default AboutMe;
