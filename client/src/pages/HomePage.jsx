import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Code,
  Briefcase,
  Mail,
  X,
  ArrowRight,
  Sparkles,
  GitBranch,
} from "lucide-react";
import { Link } from "react-router-dom";
import IMAGE from "../assets/ROSHNI IMAGE2.0.jpeg";

const ProjectCategory = {
  BEGINNER: "beginner",
  INTERMEDIATE: "intermediate",
  ADVANCED: "advanced",
  ONGOING: "ongoing",
};

const HomePage = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedSkill, setSelectedSkill] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Dice Game",
      description: "Simple interactive dice rolling game",
      fullDescription:
        "A beginner-friendly dice game built with JavaScript where users can roll dice, generate random numbers, and display results dynamically on the UI.",
      technologies: ["JavaScript", "HTML5", "Bootstrap"],
      githubUrl:
        "https://github.com/roshni-parihar/RICRWebDevelopment/tree/main/JavaScript/dice%20game",
      liveUrl: "#",
      categories: [ProjectCategory.BEGINNER],
    },
    {
      id: 2,
      title: "Currency Converter",
      description: "Real-time currency conversion app",
      fullDescription:
        "An intermediate project that fetches real-time exchange rate data from an API and converts currencies with dynamic UI updates.",
      technologies: ["React", "API Integration", "Tailwind"],
      githubUrl:
        "https://github.com/roshni-parihar/RICRWebDevelopment/tree/main/React/CurrencyConvertor",
      liveUrl: "#",
      categories: [ProjectCategory.INTERMEDIATE],
    },

    {
      id: 3,
      title: "Student Learning Platform",
      description: "Online learning management platform",
      fullDescription:
        "An advanced student learning platform with user authentication, course management, progress tracking, and interactive content features.",
      technologies: ["React", "Node.js", "MongoDB"],
      githubUrl: "#",
      liveUrl: "#",
      categories: [ProjectCategory.ADVANCED, ProjectCategory.ONGOING],
    },
  ];

  const skills = [
    { id: 1, name: "React", level: 80, category: "Frontend" },
    { id: 2, name: "TailwindCSS", level: 90, category: "Frontend" },
    { id: 3, name: "Bootstrap", level: 90, category: "Frontend" },
    { id: 4, name: "JavaScript", level: 85, category: "Programming" },
    { id: 5, name: "Node.js", level: 75, category: "Backend" },
    { id: 6, name: "MongoDB", level: 70, category: "Database" },
    {
      id: 7,name: "Git",level: 85,category: "Tools"},
  ];

  return (
    <div className="min-h-screen">
      <section className="relative py-20 px-6 bg-linear-to-br from-emerald-50 via-teal-50 to-cyan-50 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow border mb-6">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span className="text-sm font-medium">
                Welcome to my portfolio
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900">
              Hi, I'm{" "}
              <span className="bg-linear-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Roshni
              </span>
            </h1>

            <p className="text-lg text-slate-600 mb-10">
              I build modern and scalable web applications using React and
              full-stack technologies.
            </p>

            <div className="flex gap-6 flex-wrap">
              <Link
                to="/projects"
                className="px-8 py-4 bg-slate-900 text-white rounded-xl flex items-center gap-2 shadow-lg hover:shadow-xl transition"
              >
                <Briefcase className="w-5 h-5" />
                View Projects
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/skills"
                className="px-8 py-4 bg-white border-2 border-slate-200 rounded-xl flex items-center gap-2 hover:shadow-lg transition"
              >
                <Code className="w-5 h-5" />
                View Skills
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            {/* Image */}
            <div className="relative w-80 h-80 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src={IMAGE}
                alt="Roshni"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="mt-6 flex gap-6">
              <a
                href="https://www.linkedin.com/in/roshni-parihar-6281b1257/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
              >
                LinkedIn
              </a>

              <a
                href="https://github.com/roshni-parihar"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-slate-900 text-white rounded-lg font-medium hover:bg-black transition"
              >
                GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <div>
              {" "}
              <h2 className="text-3xl font-bold text-slate-900">
                Technical Skills
              </h2>
              <p className="text-lg font-normal text-gray-600 p-2 ">
                Technologies I work with
              </p>
            </div>
            <Link
              to="/skills"
              className="text-emerald-600 font-medium flex items-center gap-2"
            >
              View All
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                onClick={() => setSelectedSkill(skill)}
                className="p-6 bg-slate-50 border rounded-2xl cursor-pointer hover:shadow-lg"
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-semibold text-lg text-slate-900">
                    {skill.name}
                  </h3>
                  <Code className="w-5 h-5 text-emerald-600" />
                </div>
                <p className="text-sm text-slate-600 mb-4">{skill.category}</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Proficiency</span>
                    <span className="font-semibold text-slate-900">
                      {skill.level}%
                    </span>
                  </div>
                </div>

                <div className="w-full bg-slate-200 h-2 rounded-full">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1 }}
                    className="bg-linear-to-r from-emerald-600 to-teal-600 h-2 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <div>
              {" "}
              <h2 className="text-3xl font-bold text-slate-900">
                Featured Projects
              </h2>
              <p className="text-lg font-normal text-gray-600 p-2">
                Showcasing my best work
              </p>
            </div>
            <Link
              to="/projects"
              className="text-emerald-600 font-medium flex items-center gap-2"
            >
              View All
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                onClick={() => setSelectedProject(project)}
                className="bg-white rounded-2xl border overflow-hidden cursor-pointer hover:shadow-xl"
              >
                <div className="h-48 bg-linear-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                  <Briefcase className="w-16 h-16 text-white" />
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    {" "}
                    <h3 className="font-bold text-xl mb-2">{project.title}</h3>
                    <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs rounded-full font-medium capitalize">
                      {project.categories.join(" | ")}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm pb-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-slate-100 text-slate-700 text-xs rounded-lg font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white p-8 rounded-3xl max-w-2xl w-full"
            >
              <div className="flex justify-between mb-6">
                <h2 className="text-2xl font-bold">{selectedProject.title}</h2>
                <button onClick={() => setSelectedProject(null)}>
                  <X />
                </button>
              </div>

              <p className="mb-6 text-slate-600">
                {selectedProject.fullDescription}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-slate-100 rounded-lg text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={selectedProject.githubUrl}
                  className="flex-1 bg-slate-900 text-white py-3 rounded-xl flex items-center justify-center gap-2"
                >
                  <GitBranch className="w-5 h-5" />
                  GitHub
                </a>

                <a
                  href={selectedProject.liveUrl}
                  className="flex-1 bg-emerald-600 text-white py-3 rounded-xl flex items-center justify-center gap-2"
                >
                  <ExternalLink className="w-5 h-5" />
                  Live
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {selectedSkill && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedSkill(null)}
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white p-8 rounded-3xl max-w-md w-full"
            >
              <div className="flex justify-between mb-6">
                <h2 className="text-2xl font-bold">{selectedSkill.name}</h2>
                <button onClick={() => setSelectedSkill(null)}>
                  <X />
                </button>
              </div>

              <p className="mb-4 text-slate-600">
                Category: {selectedSkill.category}
              </p>

              <div className="w-full bg-slate-200 h-3 rounded-full">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${selectedSkill.level}%` }}
                  transition={{ duration: 1 }}
                  className="bg-linear-to-r from-emerald-600 to-teal-600 h-3 rounded-full"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="py-20 px-6 bg-linear-to-r from-emerald-600 to-teal-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-6"
          >
            Let’s Work Together
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg mb-10 text-emerald-100"
          >
            I'm open to internships, freelance projects, and exciting
            collaborations. Let’s build something amazing!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-emerald-600 font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition"
            >
              <Mail className="w-5 h-5" />
              Contact Me
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
export default HomePage;
