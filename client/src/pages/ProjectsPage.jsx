import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GitBranch, ExternalLink, Briefcase, X, Filter } from "lucide-react";

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Dice Game",
      description: "Interactive dice rolling game",
      fullDescription:
        "A beginner-friendly JavaScript dice game where users roll virtual dice and generate random outcomes dynamically.",
      technologies: ["JavaScript", "HTML5", "Bootstrap"],
      githubUrl:
        "https://github.com/roshni-parihar/RICRWebDevelopment/tree/main/JavaScript/dice%20game",
      liveUrl: "#",
      category: "beginner",
    },
    {
      id: 2,
      title: "Currency Converter",
      description: "Real-time currency conversion app",
      fullDescription:
        "A React-based application that fetches real-time exchange rates from an API and converts currencies dynamically.",
      technologies: ["React", "API Integration", "Tailwind CSS"],
      githubUrl:
        "https://github.com/roshni-parihar/RICRWebDevelopment/tree/main/React/CurrencyConvertor",
      liveUrl: "#",
      category: "intermediate",
    },
    {
      id: 3,
      title: "Student Learning Platform",
      description: "Online learning management system",
      fullDescription:
        "An advanced platform with authentication, course management, and progress tracking using MERN stack.",
      technologies: ["React", "Node.js", "MongoDB"],
      githubUrl: "#",
      liveUrl: "#",
      category: "advanced",
    },
    {
      id: 4,
      title: "Age Calculator",
      description: "Calculate age from birth date",
      fullDescription:
        "A simple JavaScript application that calculates exact age in years, months, and days.",
      technologies: ["JavaScript", "HTML5", "CSS3"],
      githubUrl: "https://github.com/roshni-parihar/RICRWebDevelopment/tree/main/Assignments/Age%20Calculator",
      liveUrl: "#",
      category: "beginner",
    },
    {
      id: 5,
      title: "Electricity Bill Calculator",
      description: "Monthly electricity bill estimator",
      fullDescription:
        "A JavaScript app that calculates electricity bills based on units consumed and tariff rates.",
      technologies: ["JavaScript", "HTML5", "CSS3"],
      githubUrl: "https://github.com/roshni-parihar/RICRWebDevelopment/tree/main/Assignments/Electricity%20Bill%20Calculator",
      liveUrl: "#",
      category: "beginner",
    },
    {
      id: 6,
      title: "Guess the Number",
      description: "Number guessing game",
      fullDescription:
        "A fun interactive JavaScript game where users guess a randomly generated number.",
      technologies: ["JavaScript", "HTML5", "CSS3"],
      githubUrl: "https://github.com/roshni-parihar/RICRWebDevelopment/tree/main/Assignments/Guess%20the%20Number",
      liveUrl: "#",
      category: "beginner",
    },
    {
      id: 7,
      title: "Salary Calculator",
      description: "Net salary calculation tool",
      fullDescription:
        "A calculator that computes net salary after deductions and allowances.",
      technologies: ["JavaScript", "HTML5", "CSS3"],
      githubUrl: "https://github.com/roshni-parihar/RICRWebDevelopment/tree/main/Assignments/Salary%20Calculator",
      liveUrl: "#",
      category: "beginner",
    },
    {
      id: 8,
      title: "Tip Calculator",
      description: "Restaurant tip calculator",
      fullDescription:
        "A small web app that calculates tip amount and splits the bill among people.",
      technologies: ["JavaScript", "HTML5", "CSS3"],
      githubUrl: "https://github.com/roshni-parihar/RICRWebDevelopment/tree/main/Assignments/TIP%20Calculator",
      liveUrl: "#",
      category: "beginner",
    },
    {
      id: 9,
      title: "Travel Bill Calculator",
      description: "Trip expense calculator",
      fullDescription:
        "A calculator that estimates travel expenses including transport, stay, and food.",
      technologies: ["JavaScript", "HTML5", "CSS3"],
      githubUrl: "https://github.com/roshni-parihar/RICRWebDevelopment/tree/main/Assignments/Travel%20Bill%20Calculator",
      liveUrl: "#",
      category: "beginner",
    },
    {
      id: 10,
      title: "Joke App",
      description: "Random joke generator",
      fullDescription:
        "A JavaScript app that fetches random jokes from a public API and displays them dynamically.",
      technologies: ["JavaScript", "HTML5", "CSS3"],
      githubUrl: "https://github.com/roshni-parihar/RICRWebDevelopment/tree/main/AdvancedJavaScript/JokeApp",
      liveUrl: "#",
      category: "beginner",
    },
    {
      id: 11,
      title: "Calculator",
      description: "Basic arithmetic calculator",
      fullDescription:
        "A responsive calculator built with JavaScript and Bootstrap supporting basic operations.",
      technologies: ["JavaScript", "HTML5", "Bootstrap"],
      githubUrl: "https://github.com/roshni-parihar/RICRWebDevelopment/tree/main/JavaScript/calculator",
      liveUrl: "#",
      category: "beginner",
    },
    {
      id: 12,
      title: "Image Editor",
      description: "Basic browser image editor",
      fullDescription:
        "A web-based image editor allowing brightness and filter adjustments.",
      technologies: ["JavaScript", "HTML5", "Bootstrap"],
      githubUrl: "https://github.com/roshni-parihar/RICRWebDevelopment/tree/main/JavaScript/imageEditor",
      liveUrl: "#",
      category: "beginner",
    },
    {
      id: 13,
      title: "Password Manager",
      description: "Secure password storage app",
      fullDescription:
        "A simple password manager that stores credentials locally in browser storage.",
      technologies: ["JavaScript", "HTML5", "Bootstrap"],
      githubUrl: "https://github.com/roshni-parihar/RICRWebDevelopment/tree/main/JavaScript/password%20manager",
      liveUrl: "#",
      category: "beginner",
    },
    {
      id: 14,
      title: "Todo List",
      description: "Task management app",
      fullDescription:
        "A simple todo list application with add, delete, and mark-as-complete functionality.",
      technologies: ["JavaScript", "HTML5", "Bootstrap"],
      githubUrl: "https://github.com/roshni-parihar/RICRWebDevelopment/tree/main/JavaScript/ToDoList",
      liveUrl: "#",
      category: "beginner",
    },
    {
      id: 15,
      title: "Portfolio (HTML)",
      description: "Static personal portfolio",
      fullDescription:
        "A static portfolio website built using HTML, CSS, and Bootstrap.",
      technologies: ["HTML5", "Bootstrap", "CSS3"],
      githubUrl: "https://github.com/roshni-parihar/RICRWebDevelopment/tree/main/Bootstrap/portfolio",
      liveUrl: "#",
      category: "beginner",
    },
    {
      id: 16,
      title: "Portfolio (React)",
      description: "Modern React portfolio",
      fullDescription:
        "A modern portfolio built with React, Tailwind CSS, and Framer Motion animations.",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      githubUrl: "https://github.com/roshni-parihar/My_Portfolio",
      liveUrl: "#",
      category: "intermediate",
    },
    {
      id: 17,
      title: "Makeup Website",
      description: "E-commerce beauty platform",
      fullDescription:
        "A React-based makeup product website with API integration and responsive design.",
      technologies: ["React", "Tailwind CSS", "API Integration"],
      githubUrl: "https://github.com/roshni-parihar/RICRWebDevelopment/tree/main/React/Makeup-Api",
      liveUrl: "#",
      category: "intermediate",
    },
    {
      id: 18,
      title: "Image Forgery Detection",
      description: "AI-based image analysis system",
      fullDescription:
        "An advanced project that detects manipulated images using backend processing.",
      technologies: ["React", "Node.js", "Tailwind CSS"],
      githubUrl: "#",
      liveUrl: "#",
      category: "advanced",
    },
    {
      id: 19,
      title: "Cravings",
      description: "Food delivery application",
      fullDescription:
        "A full-stack food delivery platform with authentication and order management.",
      technologies: ["React", "Node.js", "Tailwind CSS"],
      githubUrl: "https://github.com/roshni-parihar/RICRWebDevelopment/tree/main/Cravings",
      liveUrl: "#",
      category: "advanced",
    },
  ];

  const categories = ["all", "beginner", "intermediate", "advanced"];

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen py-16 px-4 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            My{" "}
            <span className="bg-linear-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h1>
          <p className="text-slate-600 text-lg">
            Explore my development journey.
          </p>
        </motion.div>

        <div className="flex justify-center gap-3 flex-wrap mb-10">
          <Filter className="w-5 h-5 text-slate-600 mt-2" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-xl font-medium transition ${
                selectedCategory === cat
                  ? "bg-slate-900 text-white"
                  : "bg-white border border-slate-200 text-slate-700 hover:shadow"
              }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedProject(project)}
                className="bg-white rounded-2xl shadow-sm hover:shadow-xl border border-slate-200 cursor-pointer overflow-hidden"
              >
                <div className="h-40 bg-linear-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                  <Briefcase className="w-16 h-16 text-white" />
                </div>

                <div className="p-3 flex justify-between">
                  <div>
                    
                    <h3 className="font-bold text-xl mb-2">{project.title}</h3>
                    <p className="text-slate-600 text-sm mb-4">
                      {project.description}
                    </p>
                  </div>

                  <span className="text-xs px-3 py-2 h-fit rounded-2xl bg-gray-100 text-gray-600 capitalize">
                    {project.category}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 mb-3 px-2  ">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-green-100 text-slate-700 text-xs rounded-lg font-medium hover:bg-emerald-50 hover:text-emerald-600 transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-white rounded-3xl max-w-xl w-full p-8"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">{selectedProject.title}</h2>
                <button onClick={() => setSelectedProject(null)}>
                  <X />
                </button>
              </div>

              <p className="text-slate-600 mb-6">
                {selectedProject.fullDescription}
              </p>

              <div className="flex gap-4">
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-slate-900 text-white py-3 rounded-xl flex items-center justify-center gap-2"
                >
                  <GitBranch size={18} />
                  GitHub
                </a>

                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-emerald-600 text-white py-3 rounded-xl flex items-center justify-center gap-2"
                  >
                    <ExternalLink size={18} />
                    Live
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
