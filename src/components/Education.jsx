import React from "react";
import { FaGraduationCap } from "react-icons/fa";

const education = [
  {
    degree: "B.Tech – Computer Science and Engineering",
    college: "Dr. A.P.J. Abdul Kalam Technical University, Lucknow",
    year: "2022-26",
    cgpa: "8.3",
  },
  {
    degree: "Intermediate (12th)",
    college: "Udaishwar Public School, Haridwar Uttarakhand",
    year: "2021-22",
    cgpa: "70.33%",
  },
  {
    degree: "High School (10th)",
    college: "Udaishwar Public School, Haridwar Uttarakhand",
    year: "2019-20",
    cgpa: "79%",
  },
];

const Education = () => {
  return (
    <section id="education" className="max-w-6xl mx-auto px-4 py-16 bg-gray-50">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Education</h2>
      
      <div className="relative">
        {/* Vertical timeline line */}
        <div className="absolute left-5 top-0 w-1 h-full bg-blue-400 rounded"></div>

        <div className="space-y-10">
          {education.map((edu, idx) => (
            <div
              key={idx}
              style={{ animationDelay: `${idx * 0.2}s` }}
              className="relative pl-16 flex items-start transform transition duration-500 hover:-translate-y-2 hover:scale-105"
            >
              {/* Icon */}
              <div className="absolute left-0 mt-1 bg-blue-500 text-white w-10 h-10 rounded-full flex justify-center items-center shadow-lg animate-bounce">
                <FaGraduationCap />
              </div>

              {/* Card */}
              <div className="bg-white rounded-xl shadow-md p-6 w-full hover:shadow-2xl hover:scale-[1.03] transition transform animate-fadeInUp">
                <h3 className="text-xl font-semibold mb-2">{edu.degree}</h3>
                <p className="text-gray-500 mb-1">{edu.college}</p>
                <p className="text-gray-700 font-medium">{edu.year} | CGPA: {edu.cgpa}</p>
              </div>
            </div>
          ))}
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

export default Education;
