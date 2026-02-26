import { motion } from "framer-motion";
import {
  Target,
  Heart,
  Zap,
  
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const AboutPage = () => {
  const highlights = [
    {
      icon: Target,
      title: "Mission",
      description:
        "To create innovative and user-friendly web applications that solve real-world problems.",
      color: "from-emerald-600 to-teal-600",
    },
    {
      icon: Heart,
      title: "Passion",
      description:
        "Passionate about clean code, beautiful design, and continuous learning.",
      color: "from-pink-600 to-rose-600",
    },
    {
      icon: Zap,
      title: "Approach",
      description:
        "Agile mindset, collaboration, and delivering high-quality solutions.",
      color: "from-blue-600 to-cyan-600",
    },
  ];

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-4">
            About
            <span className="bg-linear-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Me
            </span>
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Passionate developer crafting exceptional digital experiences.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-xl border border-slate-200 p-10 mb-16"
        >
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-60 h-60 bg-linear-to-br from-emerald-500 to-teal-500 rounded-3xl flex items-center justify-center text-white text-5xl font-bold shadow-2xl">
                  RP
                </div>
               
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Hi, I'm Roshni Parihar
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                I build modern web applications with clean architecture and
                scalable solutions using React and modern technologies.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Constantly learning and improving to deliver high-quality
                products.
              </p>
            </div>
          </div>
        </motion.div>

       
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                className="bg-white p-8 rounded-2xl border border-slate-200 shadow-md hover:shadow-xl transition"
              >
                <div
                  className={`w-14 h-14 mb-4 rounded-xl bg-linear-to-br ${item.color} flex items-center justify-center shadow-lg`}
                >
                  <Icon className="text-white w-6 h-6" />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600">{item.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;
