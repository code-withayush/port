// LandingPage.jsx
import React from "react";
import { FaLaptopCode, FaUsers, FaStar, FaCheckCircle, FaExternalLinkAlt, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const LandingPage = () => {
  const features = [
    { icon: <FaLaptopCode size={30} />, title: "Interactive Courses", desc: "Learn coding with hands-on exercises and projects." },
    { icon: <FaUsers size={30} />, title: "Community Support", desc: "Join a vibrant coding community for peer help." },
    { icon: <FaStar size={30} />, title: "Expert Mentors", desc: "Get guidance from experienced developers." },
    { icon: <FaCheckCircle size={30} />, title: "Certifications", desc: "Earn certificates for completed courses." },
  ];

  const steps = [
    { step: "1", title: "Sign Up", desc: "Create your account to access courses and materials." },
    { step: "2", title: "Choose Course", desc: "Select the course you want to learn from the catalog." },
    { step: "3", title: "Start Learning", desc: "Start coding, complete exercises and track progress." },
  ];

  const testimonials = [
    { name: "Rohit Sharma", feedback: "This clone helped me understand real-world UI implementation in React!" },
    { name: "Neha Singh", feedback: "Loved the interactive features and the smooth animations." },
  ];

  const pricing = [
    { plan: "Basic", price: "$0", features: ["Access to 1 course", "Community support"] },
    { plan: "Pro", price: "$49", features: ["Access to all courses", "Certificate", "Mentor guidance"] },
    { plan: "Premium", price: "$99", features: ["Pro features + 1-on-1 mentoring", "Priority support"] },
  ];

  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 text-white text-center py-32">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-pulse">Master Coding Like a Ninja!</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-xl mx-auto">A fully interactive Coding Ninja Clone built with React & Tailwind CSS. Learn, code, and get certified!</p>
        <a href="#features" className="inline-block px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg shadow hover:bg-gray-100 hover:scale-105 transition transform">Explore Features</a>
      </section>

      {/* Features Section */}
      <section id="features" className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold mb-12 text-center">Features</h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, idx) => (
            <div key={idx} style={{ animationDelay: `${idx * 0.1}s` }}
              className="bg-white shadow-md p-6 rounded-lg transform transition duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl animate-fadeInUp text-center">
              <div className="mb-4 text-blue-500">{f.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section id="how" className="bg-gray-50 py-20">
        <h2 className="text-4xl font-bold mb-12 text-center">How It Works</h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
          {steps.map((s, idx) => (
            <div key={idx} style={{ animationDelay: `${idx * 0.15}s` }}
              className="bg-white shadow-md rounded-lg p-6 transform transition duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl animate-fadeInUp text-center">
              <div className="text-2xl font-bold text-blue-600 mb-2">{s.step}</div>
              <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold mb-12 text-center">Testimonials</h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} style={{ animationDelay: `${idx * 0.1}s` }}
              className="bg-blue-500 text-white p-6 rounded-lg transform transition duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl animate-fadeInUp">
              <p className="mb-4 italic">"{t.feedback}"</p>
              <p className="font-semibold text-right">- {t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="bg-gray-50 py-20">
        <h2 className="text-4xl font-bold mb-12 text-center">Pricing</h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
          {pricing.map((p, idx) => (
            <div key={idx} style={{ animationDelay: `${idx * 0.15}s` }}
              className="bg-white shadow-md p-6 rounded-lg transform transition duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl animate-fadeInUp text-center">
              <h3 className="text-xl font-semibold mb-2">{p.plan}</h3>
              <p className="text-3xl font-bold mb-4">{p.price}</p>
              <ul className="mb-4 space-y-2">
                {p.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2 justify-center"><FaCheckCircle className="text-green-500"/> {f}</li>
                ))}
              </ul>
              <a href="#!" className="inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow hover:bg-blue-600 hover:scale-105 transition transform">Get Started</a>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 mt-20 text-center">
        <h2 className="text-2xl font-bold mb-4">Coding Ninja Clone</h2>
        <p className="text-gray-400 mb-4">A React & Tailwind CSS project showcasing modern frontend design.</p>
        <div className="flex justify-center gap-4 mb-6">
          <a href="https://www.linkedin.com/in/ayushkumar" target="_blank" className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:scale-110 transition transform"><FaLinkedin /></a>
          <a href="https://github.com/ayushkumar" target="_blank" className="p-3 rounded-full bg-gradient-to-r from-gray-700 to-gray-900 hover:scale-110 transition transform"><FaGithub /></a>
          <a href="mailto:ayush77373@gmail.com" className="p-3 rounded-full bg-gradient-to-r from-red-500 to-pink-500 hover:scale-110 transition transform"><FaEnvelope /></a>
        </div>
        <p className="text-gray-500">© {new Date().getFullYear()} Ayush Kumar. All rights reserved.</p>
      </footer>

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
    </div>
  );
};

export default LandingPage;
