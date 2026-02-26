import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code,
  Database,
  Wrench,
  Palette,
  Globe,
  Server,
  X,
  TrendingUp,
  Cpu,
} from "lucide-react";

export default function SkillsPage() {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const skills = [
    {
      id: 1,
      name: "React",
      level: 90,
      category: "Frontend",
      description:
        "Expert in building modern React applications using hooks and reusable components.",
    },
    {
      id: 2,
      name: "JavaScript",
      level: 95,
      category: "Programming",
      description:
        "Advanced knowledge of ES6+, async/await, and modern JS patterns.",
    },
    {
      id: 3,
      name: "Node.js",
      level: 80,
      category: "Backend",
      description:
        "Building REST APIs using Express and scalable backend architecture.",
    },
    {
      id: 4,
      name: "MongoDB",
      level: 75,
      category: "Database",
      description: "NoSQL database design and aggregation pipelines.",
    },
    {
      id: 5,
      name: "Git",
      level: 85,
      category: "Tools",
      description: "Version control and collaboration workflows.",
    },
    { id: 6, name: "TailwindCSS", level: 90, category: "Frontend" },
    { id: 7, name: "Bootstrap", level: 90, category: "Frontend" },
  ];

  const categories = [
    { value: "all", label: "All", icon: Globe },
    { value: "Frontend", label: "Frontend", icon: Palette },
    { value: "Backend", label: "Backend", icon: Server },
    { value: "Programming", label: "Programming", icon: Code },
    { value: "Database", label: "Database", icon: Database },
    { value: "Tools", label: "Tools", icon: Wrench },
    { value: "Design", label: "Design", icon: Cpu },
  ];

  const filteredSkills =
    selectedCategory === "all"
      ? skills
      : skills.filter((skill) => skill.category === selectedCategory);

  const getCategoryGradient = (category) => {
    switch (category) {
      case "Frontend":
        return "from-pink-600 to-rose-600";
      case "Backend":
        return "from-emerald-600 to-teal-600";
      case "Programming":
        return "from-blue-600 to-cyan-600";
      case "Database":
        return "from-violet-600 to-purple-600";
      case "Tools":
        return "from-orange-600 to-amber-600";
      case "Design":
        return "from-indigo-600 to-blue-600";
      default:
        return "from-slate-600 to-gray-600";
    }
  };

  return (
    <>
      <div className="min-h-screen py-16 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Technical{" "}
              <span className="bg-linear-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Skills
              </span>
            </h1>
            <p className="text-slate-600 text-lg">
              Overview of my technical expertise.
            </p>
          </motion.div>

          <div className="flex justify-center gap-3 flex-wrap mb-12">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.value}
                  onClick={() => setSelectedCategory(category.value)}
                  className={`px-4 py-2 rounded-xl flex items-center gap-2 transition ${
                    selectedCategory === category.value
                      ? "bg-slate-900 text-white"
                      : "bg-white border border-slate-200 text-slate-700 hover:shadow"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {category.label}
                </button>
              );
            })}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filteredSkills.map((skill, index) => (
                <motion.div
                  key={skill.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -4 }}
                  onClick={() => setSelectedSkill(skill)}
                  className="bg-white p-6 rounded-2xl border border-slate-200 cursor-pointer hover:shadow-lg"
                >
                  <h3 className="font-bold text-xl mb-2">{skill.name}</h3>
                  <p className="text-sm text-slate-600 mb-3">
                    {skill.category}
                  </p>

                  <div className="w-full bg-slate-200 rounded-full h-2 mb-3">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1 }}
                      className={`h-2 rounded-full bg-linear-to-r ${getCategoryGradient(
                        skill.category,
                      )}`}
                    />
                  </div>

                  {/* <div className="flex items-center gap-2 text-sm text-slate-600">
                  <TrendingUp className="w-4 h-4 text-emerald-600" />
                  {skill.yearsOfExperience} yrs experience
                </div> */}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        <AnimatePresence>
          {selectedSkill && (
            <motion.div
              className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedSkill(null)}
            >
              <motion.div
                className="bg-white rounded-3xl max-w-lg w-full p-8"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between mb-4">
                  <h2 className="text-2xl font-bold">{selectedSkill.name}</h2>
                  <button onClick={() => setSelectedSkill(null)}>
                    <X />
                  </button>
                </div>

                <p className="text-slate-600 mb-6">
                  {selectedSkill.description}
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
