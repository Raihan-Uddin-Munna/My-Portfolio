import { motion } from "framer-motion";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const About = () => {

  const { darkMode } = useContext(ThemeContext);

  return (

    <section  id="about" className="py-28 px-6">

      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity:0, y:50 }}
          whileInView={{ opacity:1, y:0 }}
          transition={{ duration:0.7 }}
          className="text-4xl font-bold mb-14 text-center"
        >
          About Me
        </motion.h2>

        <div className={`rounded-3xl p-10 backdrop-blur-lg border
        ${darkMode
        ? "bg-slate-900/40 border-slate-700"
        : "bg-slate-100 border-slate-300"
        }`}>

          <p className={`text-lg leading-9
          ${darkMode ? "text-slate-300" : "text-slate-700"}`}>

            I am a passionate MERN Stack developer focused on building
            modern, scalable and user-friendly web applications.
            I love solving real-world problems through code and creating
            clean digital experiences with modern technologies.

          </p>

        </div>

      </div>

    </section>
  );
};

export default About;