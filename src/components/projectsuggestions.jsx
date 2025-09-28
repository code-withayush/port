import React from "react";

const ProjectSuggestions = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const description = e.target.description.value;

    // For now, just alert. Later, integrate with backend or email API
    alert(`Project Suggestion Received!\nName: ${name}\nDescription: ${description}`);
    
    e.target.reset();
  };

  return (
    <section id="project-suggestions" className="bg-blue-50 py-20">
      <h2 className="text-4xl font-bold mb-6 text-center text-blue-900">
        Suggest a Project
      </h2>
      <p className="text-center mb-10 max-w-xl mx-auto text-gray-700">
        Have an idea for a project? Share it here and I might implement it in my portfolio!
      </p>

      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto bg-white shadow-lg p-8 rounded-lg flex flex-col gap-6 animate-fadeInUp"
      >
        <div>
          <label className="block text-gray-700 font-medium mb-2">Project Name</label>
          <input
            type="text"
            name="name"
            required
            placeholder="Enter project name"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">Project Description</label>
          <textarea
            name="description"
            required
            placeholder="Describe your project idea"
            rows={4}
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 hover:scale-105 transition transform font-semibold"
        >
          Send Suggestion
        </button>
      </form>

      {/* Animation style */}
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

export default ProjectSuggestions;
