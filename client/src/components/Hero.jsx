// System-1

// import { TypeAnimation } from "react-type-animation";
// import { motion } from "framer-motion";
// import { useContext } from "react";
// import { ThemeContext } from "../context/ThemeContext";

// import me from "../assets/me-removebg-preview.png";

// const Hero = () => {
//   const { darkMode } = useContext(ThemeContext);

//   return (
//     <section
//       id="home"
//       className={`min-h-screen flex items-center justify-center 
//       px-5 md:px-10 pt-[90px] md:pt-[110px] overflow-hidden relative transition-all duration-500 ${
//         darkMode ? "bg-[#0B0F19]" : "bg-[#F8FAFC]"
//       }`}
//     >
//       {/* Background Glow */}
//       <div className="absolute w-[200px] md:w-[500px] h-[200px] md:h-[500px] bg-cyan-500/10 blur-[100px] rounded-full top-[-100px] left-[-100px]"></div>
//       <div className="absolute w-[180px] md:w-[400px] h-[180px] md:h-[400px] bg-sky-500/10 blur-[90px] rounded-full bottom-[-80px] right-[-80px]"></div>

//       {/* MAIN GRID */}
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-center relative z-10">

//         {/* LEFT TEXT */}
//         <motion.div
//           initial={{ opacity: 0, x: -40 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//           className="order-2 md:order-1 text-center md:text-left mt-6 md:mt-0"
//         >
//           <p
//             className={`text-sm sm:text-base leading-7 max-w-xs mx-auto md:mx-0 ${
//               darkMode ? "text-slate-400" : "text-slate-700"
//             }`}
//           >
//             Building intelligent systems, secure infrastructures and modern high-performance web experiences with clean and scalable technologies.
//           </p>
//         </motion.div>

//         {/* CENTER CONTENT */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 1 }}
//           className="order-1 md:order-2 flex flex-col items-center justify-center"
//         >

//           {/* TEXT */}
//           <div className="text-center z-20 mb-6 md:mb-8">
//             <h1
//               className={`text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight ${
//                 darkMode ? "text-white" : "text-black"
//               }`}
//             >
//               I’m <span className="text-sky-500">Raihan</span>
//             </h1>

//             <TypeAnimation
//               sequence={[
//                 "Software Engineer",
//                 2000,
//                 "MERN Developer",
//                 2000,
//                 "AI Enthusiast",
//                 2000,
//               ]}
//               wrapper="div"
//               speed={50}
//               repeat={Infinity}
//               className={`text-lg sm:text-xl md:text-2xl font-semibold mt-2 ${
//                 darkMode ? "text-slate-300" : "text-slate-700"
//               }`}
//             />
//           </div>

//           {/* IMAGE SECTION (FIXED RESPONSIVE) */}
//           <div className="relative flex items-center justify-center mt-4 md:mt-0">

//             {/* GLOW */}
//             <div className="absolute w-[200px] sm:w-[280px] md:w-[360px] h-[200px] sm:h-[280px] md:h-[360px] bg-sky-500/30 blur-3xl rounded-full"></div>

//             {/* BLUE CIRCLE */}
//             <div className="absolute w-[180px] sm:w-[260px] md:w-[320px] h-[180px] sm:h-[260px] md:h-[320px] bg-sky-500 rounded-full opacity-90"></div>

//             {/* IMAGE */}
//             <img
//               src={me}
//               alt="hero"
//               className="relative z-10 w-[180px] sm:w-[240px] md:w-[300px] object-cover"
//             />
//           </div>
//         </motion.div>

//         {/* RIGHT BUTTONS */}
//         <motion.div
//           initial={{ opacity: 0, x: 40 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//           className="order-3 flex flex-row md:flex-col gap-4 justify-center md:justify-start items-center md:items-start"
//         >
//           <button className="px-5 md:px-8 py-3 bg-sky-500 hover:bg-sky-400 text-white rounded-xl font-semibold transition hover:scale-105 shadow-lg">
//             Show Projects
//           </button>

//           <button className="px-5 md:px-8 py-3 border border-sky-500 text-sky-500 rounded-xl font-semibold hover:bg-sky-500/10 transition hover:scale-105">
//             Show Resume
//           </button>
//         </motion.div>

//       </div>
//     </section>
//   );
// };

// export default Hero;





// system-2

// import { TypeAnimation } from "react-type-animation";
// import { motion } from "framer-motion";
// import { useContext } from "react";
// import { ThemeContext } from "../context/ThemeContext";

// import me from "../assets/me-removebg-preview.png";

// const Hero = () => {
//   const { darkMode } = useContext(ThemeContext);

//   return (
//     <section
//       id="home"
//       className={`min-h-screen flex items-center justify-center px-6 md:px-12 pt-[90px] overflow-hidden transition-all duration-500 ${
//         darkMode ? "bg-[#0B0F19]" : "bg-[#F8FAFC]"
//       }`}
//     >
//       {/* BACKGROUNDS */}
//       <div className="absolute w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-sky-500/10 blur-[120px] rounded-full top-[-150px] left-[-150px]" />
//       <div className="absolute w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-cyan-500/10 blur-[120px] rounded-full bottom-[-150px] right-[-150px]" />

//       {/* MAIN GRID */}
//       <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-3 items-center gap-10 relative z-10">

//         {/* LEFT TEXT */}
//         <motion.div
//           initial={{ opacity: 0, x: -40 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-center md:text-left"
//         >
//           <h2 className="text-lg md:text-xl text-sky-400 font-medium mb-2">
//             Hello, I'm
//           </h2>

//           <h1
//             className={`text-4xl md:text-6xl font-extrabold leading-tight ${
//               darkMode ? "text-white" : "text-black"
//             }`}
//           >
//             Raihan
//           </h1>

//           <TypeAnimation
//             sequence={[
//               "Software Engineer",
//               2000,
//               "MERN Developer",
//               2000,
//               "UI/UX Lover",
//               2000,
//             ]}
//             wrapper="div"
//             speed={50}
//             repeat={Infinity}
//             className="text-lg md:text-2xl text-sky-500 font-semibold mt-2"
//           />

//           <p
//             className={`mt-5 text-sm md:text-base max-w-md mx-auto md:mx-0 ${
//               darkMode ? "text-gray-400" : "text-gray-600"
//             }`}
//           >
//             Building modern, scalable and high-performance web applications
//             with clean design and strong architecture.
//           </p>
//         </motion.div>

//         {/* CENTER IMAGE (FIXED OVERFLOW) */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8 }}
//           className="flex justify-center items-center relative"
//         >
//           {/* GLOW */}
//           <div className="absolute w-[220px] md:w-[320px] h-[220px] md:h-[320px] bg-sky-500/30 blur-3xl rounded-full" />

//           {/* CIRCLE */}
//           <div className="absolute w-[200px] md:w-[300px] h-[200px] md:h-[300px] bg-sky-500 rounded-full opacity-90" />

//           {/* IMAGE (NO OVERFLOW FIXED) */}
//           <img
//             src={me}
//             alt="hero"
//             className="relative z-10 w-[200px] md:w-[280px] object-contain drop-shadow-2xl"
//           />
//         </motion.div>

//         {/* RIGHT BUTTONS */}
//         <motion.div
//           initial={{ opacity: 0, x: 40 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           className="flex flex-row md:flex-col gap-4 justify-center md:justify-start items-center"
//         >
//           <button className="px-6 md:px-8 py-3 bg-sky-500 hover:bg-sky-400 text-white rounded-xl font-semibold transition hover:scale-105 shadow-lg shadow-sky-500/20">
//             Show Projects
//           </button>

//           <button className="px-6 md:px-8 py-3 border border-sky-500 text-sky-500 rounded-xl font-semibold hover:bg-sky-500/10 transition hover:scale-105">
//             Show Resume
//           </button>
//         </motion.div>

//       </div>
//     </section>
//   );
// };

// export default Hero;



// System-3

import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";

import me from "../assets/16dafcd7ff8441ceb8e82fde7677bce8-removebg-preview.png";

const Hero = () => {
  const { darkMode } = useContext(ThemeContext);

  // 🔗 LINKS (EDIT YOUR INFO HERE)
  const github = "https://github.com/Raihan-Uddin-Munna";
  const linkedin = "https://www.linkedin.com/in/mohammed-raihan-76505a318/";
  const whatsapp = "https://wa.me/8801882826691";
  const email = "mailto:raihanuddin1289@gmail.com";

  return (
    <section
      id="home"
      className={`relative min-h-screen overflow-hidden pt-28 ${darkMode
        ? "bg-[#050816] text-white"
        : "bg-[#F8FAFC] text-black"
        }`}
    >
      {/* BG Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-sky-500/10 blur-[150px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[150px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* HERO */}
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sky-600 font-medium">
              HI THERE
            </span>

            <h1 className="mt-4 text-5xl md:text-7xl font-extrabold">
              I'm{" "}
              <span className="text-sky-800">
                Raihan
              </span>
            </h1>

            <div className="mt-3 text-xl md:text-3xl font-semibold">
              <TypeAnimation
                sequence={[
                  "Network Engineering Enthusiast",
                  2000,
                  "Cyber Security Enthusiast",
                  2000,
                  "CCNA & MTCNA Learner",
                  2000,
                  "Future Network Security Engineer",
                  2000,
                  "MERN Stack Developer",
                  2000,
                ]}
                speed={50}
                repeat={Infinity}
              />
            </div>

            <p
              className={`mt-6 max-w-lg leading-8 ${darkMode
                ? "text-gray-300"
                : "text-gray-900"
                }`}
            >
              Dedicated to developing expertise in Cyber Security and Network
              Engineering, with a growing focus on secure network architecture,
              infrastructure management, threat mitigation, and modern security
              practices. Committed to continuous learning and professional growth
              in the field of information technology.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-4 mt-8">
              <button className="px-7 py-3 bg-sky-500 hover:bg-sky-400 rounded-xl text-white font-semibold transition">
                Show Projects
              </button>

              <button className="px-7 py-3 border border-sky-500 rounded-xl text-sky-500 hover:bg-sky-500/10 transition">
                Show Resume
              </button>
            </div>

            {/* SOCIALS */}

            <div className="flex gap-4 mt-8 flex-wrap">

              {/* GitHub */}
              <a href={github} target="_blank"
                className="w-11 h-11 flex items-center justify-center rounded-full border border-sky-500/40 hover:bg-sky-500 hover:text-white transition">
                <FaGithub />
              </a>

              {/* LinkedIn */}
              <a href={linkedin} target="_blank"
                className="w-11 h-11 flex items-center justify-center rounded-full border border-sky-500/40 hover:bg-sky-500 hover:text-white transition">
                <FaLinkedin />
              </a>

              {/* WhatsApp */}
              <a href={whatsapp} target="_blank"
                className="w-11 h-11 flex items-center justify-center rounded-full border border-sky-500/40 hover:bg-green-500 hover:text-white transition">
                <FaWhatsapp />
              </a>

              {/* Email */}
              <a href={email}
                className="w-11 h-11 flex items-center justify-center rounded-full border border-sky-500/40 hover:bg-red-500 hover:text-white transition">
                <FaEnvelope />
              </a>

            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            {/* OUTER RING */}
            <div className="absolute w-[380px] h-[380px] border-2 border-sky-500/50 rounded-full animate-pulse" />

            {/* MIDDLE RING */}
            <div className="absolute w-[320px] h-[320px] border border-sky-400 rounded-full" />

            {/* GLOW */}
            <div className="absolute w-[280px] h-[280px] bg-sky-500/30 blur-3xl rounded-full" />

            {/* IMAGE */}
            <img
              src={me}
              alt="Raihan"
              className="relative z-10 w-[300px] md:w-[450px] drop-shadow-[0_0_40px_rgba(14,165,233,0.6)]"
            />
          </motion.div>
        </div>



      </div>
    </section>
  );
};

export default Hero;



 