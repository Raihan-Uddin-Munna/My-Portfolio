// import { motion } from "framer-motion";
// import { useContext } from "react";
// import { ThemeContext } from "../context/ThemeContext";

// const About = () => {

//   const { darkMode } = useContext(ThemeContext);

//   return (

//     <section id="about" className="py-12 px-6">

//       <div className="max-w-6xl mx-auto">

//         <motion.h2
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           className="text-4xl font-bold mb-14 text-center"
//         >
//           About Me
//         </motion.h2>

//         <div className={`rounded-3xl p-10 backdrop-blur-lg border
//         ${darkMode
//             ? "bg-slate-900/40 border-slate-700"
//             : "bg-slate-100 border-slate-300"
//           }`}>

//           <p className={`text-lg leading-9
//           ${darkMode ? "text-slate-300" : "text-slate-700"}`}>

//             I am a passionate MERN Stack developer focused on building
//             modern, scalable and user-friendly web applications.
//             I love solving real-world problems through code and creating
//             clean digital experiences with modern technologies.

//           </p>

//         </div>

//       </div>

//       {/* STATS */}
//       <div
//         className={`mt-5 rounded-3xl backdrop-blur-lg border ${darkMode
//           ? "bg-white/5 border-white/10"
//           : "bg-white border-gray-200"
//           }`}
//       >
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8">

//           <div className="text-center">
//             <h3 className="text-3xl font-bold text-sky-500">
//               10+
//             </h3>
//             <p className="text-sm text-gray-400">
//               Projects Completed
//             </p>
//           </div>

//           <div className="text-center">
//             <h3 className="text-3xl font-bold text-green-500">
//               2+
//             </h3>
//             <p className="text-sm text-gray-400">
//               Years Experience
//             </p>
//           </div>

//           <div className="text-center">
//             <h3 className="text-3xl font-bold text-purple-500">
//               20+
//             </h3>
//             <p className="text-sm text-gray-400">
//               Happy Clients
//             </p>
//           </div>

//           <div className="text-center">
//             <h3 className="text-3xl font-bold text-yellow-500">
//               1000+
//             </h3>
//             <p className="text-sm text-gray-400">
//               Hours of Coding
//             </p>
//           </div>

//         </div>
//       </div>

//     </section>
//   );
// };

// export default About;


// System -2

// import { motion } from "framer-motion";
// import { useContext } from "react";
// import { ThemeContext } from "../context/ThemeContext";

// const About = () => {
//   const { darkMode } = useContext(ThemeContext);

//   return (
//     <section id="about" className="py-24 px-6">

//       <div className="max-w-6xl mx-auto">

//         {/* TITLE */}
//         <motion.h2
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           viewport={{ once: true }}
//           className="text-4xl md:text-5xl font-bold text-center mb-14"
//         >
//           About Me
//         </motion.h2>

//         {/* ABOUT CARD */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className={`rounded-3xl p-8 md:p-12 backdrop-blur-xl border shadow-xl
//           ${darkMode
//               ? "bg-slate-900/40 border-slate-700"
//               : "bg-white border-slate-300"
//             }`}
//         >

//           {/* BADGE */}
//           <div className="inline-flex items-center px-4 py-2 mb-8 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-sm font-medium">
//             Network Engineering • Cyber Security • Web Technologies
//           </div>

//           {/* ABOUT TEXT */}
//           <p
//             className={`text-lg md:text-xl leading-9 text-justify
//             ${darkMode
//                 ? "text-slate-300"
//                 : "text-slate-700"
//               }`}
//           >
//             I am an aspiring Network Engineering and Cyber Security
//             professional with a strong interest in building secure,
//             reliable, and efficient digital infrastructures.
//             My journey began with web development, where I gained
//             experience in modern technologies and software development
//             practices.

//             <br />
//             <br />

//             Today, my primary focus is on networking, system
//             administration, infrastructure management, and information
//             security. I enjoy understanding how networks operate,
//             identifying potential security challenges, and exploring
//             technologies that support resilient and high-performance
//             environments.

//             <br />
//             <br />

//             Currently, I am advancing my knowledge through
//             <span className="text-sky-500 font-semibold">
//               {" "}CCNA, MTCNA, and Cyber Security studies
//             </span>,
//             while continuously developing practical skills through
//             hands-on learning, technical projects, and continuous
//             self-improvement.

//             <br />
//             <br />

//             My long-term goal is to become a skilled Network Security
//             Engineer capable of designing, securing, and managing modern
//             enterprise infrastructures and digital ecosystems.
//           </p>

//         </motion.div>

//         {/* STATS */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2 }}
//           viewport={{ once: true }}
//           className={`mt-8 rounded-3xl border backdrop-blur-xl
//           ${darkMode
//               ? "bg-white/5 border-white/10"
//               : "bg-white border-slate-200"
//             }`}
//         >

//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8">

//             <div className="text-center">
//               <h3 className="text-3xl font-bold text-sky-500">
//                 10+
//               </h3>
//               <p className="text-sm text-gray-400 mt-2">
//                 Projects Built
//               </p>
//             </div>

//             <div className="text-center">
//               <h3 className="text-3xl font-bold text-green-500">
//                 CCNA
//               </h3>
//               <p className="text-sm text-gray-400 mt-2">
//                 Cisco Networking
//               </p>
//             </div>

//             <div className="text-center">
//               <h3 className="text-3xl font-bold text-purple-500">
//                 MTCNA
//               </h3>
//               <p className="text-sm text-gray-400 mt-2">
//                 MikroTik Networking
//               </p>
//             </div>

//             <div className="text-center">
//               <h3 className="text-3xl font-bold text-yellow-500">
//                 Cyber
//               </h3>
//               <p className="text-sm text-gray-400 mt-2">
//                 Security Focus
//               </p>
//             </div>

//           </div>

//         </motion.div>

//       </div>

//     </section>
//   );
// };

// export default About;


// system-3


import { motion } from "framer-motion";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const About = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <section
      id="about"
      className={`relative py-24 overflow-hidden ${darkMode
          ? "bg-[#050816] text-white"
          : "bg-[#F8FAFC] text-black"
        }`}
    >
      {/* BG GLOW */}
      <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-sky-500/10 blur-[140px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-cyan-500/10 blur-[140px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-sky-500 font-semibold tracking-widest uppercase">
            Know More
          </span>

          <h2 className="mt-3 text-4xl md:text-5xl font-extrabold">
            About Me
          </h2>

          <div className="w-24 h-1 bg-sky-500 mx-auto rounded-full mt-4"></div>
        </motion.div>

        {/* MAIN CARD */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={`rounded-3xl p-8 md:p-12 backdrop-blur-xl border shadow-2xl ${darkMode
              ? "bg-white/5 border-white/10"
              : "bg-white border-slate-200"
            }`}
        >
          <p
            className={`text-justify text-base md:text-lg leading-9 ${darkMode
                ? "text-slate-300"
                : "text-slate-700"
              }`}
          >
            I am a Computer Science and Engineering student with a
            strong interest in Network Engineering, Cyber Security,
            and modern computing technologies. My goal is to build a
            professional career in secure network infrastructure,
            network defense, system administration, and security
            operations.

            <br />
            <br />

            Alongside my academic journey, I have gained practical
            experience in web development using the MERN Stack,
            which helped me strengthen my problem-solving skills,
            logical thinking, and understanding of software systems.

            <br />
            <br />

            Currently, I am focusing on developing professional
            networking and security skills through continuous
            learning, hands-on practice, and industry-standard
            technologies. I am actively preparing for
            <span className="text-sky-500 font-semibold">
              {" "}
              CCNA, MTCNA, and Cyber Security
            </span>{" "}
            pathways to build expertise in network design,
            infrastructure management, routing, switching,
            security implementation, and threat mitigation.

            <br />
            <br />

            I believe in continuous improvement, lifelong learning,
            and creating secure, efficient, and reliable technology
            solutions that can make a meaningful impact.
          </p>
        </motion.div>

        {/* STATS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10"
        >
          <div
            className={`rounded-2xl p-6 text-center border backdrop-blur-lg ${darkMode
                ? "bg-white/5 border-white/10"
                : "bg-white border-slate-200"
              }`}
          >
            <h3 className="text-3xl font-bold text-sky-500">
              10+
            </h3>
            <p className="mt-2 text-sm text-gray-400">
              Projects Completed
            </p>
          </div>

          <div
            className={`rounded-2xl p-6 text-center border backdrop-blur-lg ${darkMode
                ? "bg-white/5 border-white/10"
                : "bg-white border-slate-200"
              }`}
          >
            <h3 className="text-3xl font-bold text-green-500">
              MERN
            </h3>
            <p className="mt-2 text-sm text-gray-400">
              Development Experience
            </p>
          </div>

          <div
            className={`rounded-2xl p-6 text-center border backdrop-blur-lg ${darkMode
                ? "bg-white/5 border-white/10"
                : "bg-white border-slate-200"
              }`}
          >
            <h3 className="text-3xl font-bold text-purple-500">
              CCNA & MTCNA
            </h3>
            <p className="mt-2 text-sm text-gray-400">
              Networking Learning Path
            </p>
          </div>

          <div
            className={`rounded-2xl p-6 text-center border backdrop-blur-lg ${darkMode
                ? "bg-white/5 border-white/10"
                : "bg-white border-slate-200"
              }`}
          >
            <h3 className="text-3xl font-bold text-yellow-500">
               Cyber Security
            </h3>
            <p className="mt-2 text-sm text-gray-400">
              Network Security & Digital Infrastructure
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;