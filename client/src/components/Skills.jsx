import { motion } from "framer-motion";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Tailwind",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Git",
  "GitHub",
];

const Skills = () => {

  const { darkMode } = useContext(ThemeContext);

  return (

    <section id="skills" className="py-28 px-6">

      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity:0, y:50 }}
          whileInView={{ opacity:1, y:0 }}
          transition={{ duration:0.7 }}
          className="text-4xl font-bold text-center mb-16"
        >
          Skills
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">

          {
            skills.map((skill, index) => (

              <motion.div
                key={index}
                initial={{ opacity:0, scale:0.8 }}
                whileInView={{ opacity:1, scale:1 }}
                transition={{ duration:0.4 }}
                whileHover={{ scale:1.08 }}
                className={`rounded-2xl p-6 text-center font-semibold border transition
                ${darkMode
                ? "bg-slate-900/40 border-slate-700"
                : "bg-slate-100 border-slate-300"
                }`}
              >

                {skill}

              </motion.div>

            ))
          }

        </div>

      </div>

    </section>
  );
};

export default Skills;