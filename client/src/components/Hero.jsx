// import { TypeAnimation } from "react-type-animation";
// import { motion } from "framer-motion";

// const Hero = () => {

//   return (

//     <section  id="home" className="min-h-screen flex items-center justify-center px-6">

//       <div className="max-w-5xl mx-auto text-center">

//         <motion.h2
//           initial={{ opacity:0, y:-50 }}
//           animate={{ opacity:1, y:0 }}
//           transition={{ duration:1 }}
//           className="text-cyan-400 text-xl mb-4"
//         >
//           Hello, I'm
//         </motion.h2>

//         <motion.h1
//           initial={{ opacity:0 }}
//           animate={{ opacity:1 }}
//           transition={{ duration:1.2 }}
//           className="text-4xl md:text-7xl font-bold text-sky-600 mb-6"

          
//         >
//           Raihan
//         </motion.h1>

//         <TypeAnimation
//           sequence={[
//             "MERN Stack Developer",
//             2000,
//             "Frontend Developer",
//             2000,
//             "Future Software Engineer",
//             2000,
//           ]}
//           wrapper="span"
//           speed={50}
//           repeat={Infinity}
//           className="text-2xl md:text-4xl text-sky-700 font-semibold"
//         />

//         <motion.p
//           initial={{ opacity:0 }}
//           animate={{ opacity:1 }}
//           transition={{ delay:0.5 }}
//           className="max-w-2xl mx-auto mt-8 text-slate-400 text-lg"
//         >

//           I build modern, responsive and professional web applications
//           using MERN stack technologies.

//         </motion.p>

//         <motion.div
//           initial={{ opacity:0 }}
//           animate={{ opacity:1 }}
//           transition={{ delay:1 }}
//           className="flex gap-4 justify-center mt-10 flex-wrap"
//         >

//           <button className="px-8 py-3 bg-cyan-500 rounded-full font-semibold hover:scale-105 transition">

//             View Projects

//           </button>

//           <button className="px-8 py-3 border border-cyan-500 rounded-full font-semibold hover:bg-cyan-500/10 transition">

//             Contact Me

//           </button>

//         </motion.div>

//       </div>

//     </section>
//   );
// };

// export default Hero;


// import { TypeAnimation } from "react-type-animation";
// import { motion } from "framer-motion";
// import { useContext  } from "react";
// import { ThemeContext } from "../context/ThemeContext";

// import me from "../assets/me-removebg-preview.png";

// const Hero = () => {
//   const { darkMode } = useContext(ThemeContext);
//   // const [openMenu, setOpenMenu] = useState(false);

//   return (
//     <section
//       id="home"
//       className={`min-h-max flex items-center justify-center 
//       px-5 md:px-10 pt-[90px] md:pt-[0px] overflow-hidden relative transition-all duration-500 ${
//         darkMode ? "bg-[#0B0F19]" : "bg-[#F8FAFC]"
//       }`}
//     >
//       {/* Background Glow */}
//       <div className="absolute w-[240px] md:w-[500px] h-[240px] md:h-[500px] bg-cyan-500/10 blur-[100px] rounded-full top-[-120px] left-[-120px]"></div>
//       <div className="absolute w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-sky-500/10 blur-[90px] rounded-full bottom-[-100px] right-[-100px]"></div>

//       {/* MAIN */}
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-10 items-center relative z-10">

//         {/* LEFT */}
//         <motion.div
//           initial={{ opacity: 0, x: -40 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//           className="order-2 md:order-1 text-center md:text-left mt-20 md:mt-0"
//         >
//           <p
//             className={`text-sm sm:text-base leading-7 max-w-xs mx-auto md:mx-0 ${
//               darkMode ? "text-slate-400" : "text-slate-700"
//             }`}
//           >
//             Building intelligent systems, secure infrastructures and modern high-performance web experiences with clean and scalable technologies.
//           </p>
//         </motion.div>

//         {/* CENTER */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 1 }}
//           className="relative flex flex-col items-center justify-center order-1 md:order-2 -mt-15 md:-mt-0"
//         >
//           {/* TEXT */}
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1 }}
//             className="text-center z-20 mb-2 md:mb-10 md:-mt-5"
//           >
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
//           </motion.div>

//           {/* BLUE GLOW */}
//           <div className="absolute w-[170px] sm:w-[220px] md:w-[320px] h-[170px] sm:h-[220px] md:h-[320px] bg-sky-500/30 blur-3xl rounded-full top-[70px] md:top-[120px]"></div>

//           {/* BLUE CIRCLE */}
//           <div className="absolute w-[160px] sm:w-[300px] md:w-[300px] h-[160px] sm:h-[210px] md:h-[290px] bg-sky-500 rounded-full opacity-90 top-[80px] md:top-[120px]"></div>

//           {/* IMAGE */}
//           <img
//             src={me}
//             alt="hero"
//             className="relative z-10 w-[160px] sm:w-[180px] md:w-[280px] object-cover mt-3 md:mt-0 drop-shadow-[0_0_40px_rgba(56,189,248,0.35)]"
//           />
//         </motion.div>

//         {/* RIGHT */}
//         <motion.div
//           initial={{ opacity: 0, x: 40 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//           className="flex flex-row md:flex-col gap-4 justify-center md:justify-start items-center md:items-start order-3"
//         >
//           <button className="px-6 md:px-8 py-3 md:py-4 bg-sky-500 hover:bg-sky-400 text-white rounded-[14px] rotate-[-1deg] font-semibold transition duration-300 hover:scale-105 shadow-lg shadow-sky-500/20">
//             Show Projects
//           </button>

//           <button className="px-6 md:px-8 py-3 md:py-4 border border-sky-500 text-sky-500 rounded-[14px] rotate-[1deg] font-semibold hover:bg-sky-500/10 transition duration-300 hover:scale-105">
//             Show Resume
//           </button>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Hero;




import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

import me from "../assets/me-removebg-preview.png";

const Hero = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <section
      id="home"
      className={`min-h-screen flex items-center justify-center 
      px-5 md:px-10 pt-[90px] md:pt-[110px] overflow-hidden relative transition-all duration-500 ${
        darkMode ? "bg-[#0B0F19]" : "bg-[#F8FAFC]"
      }`}
    >
      {/* Background Glow */}
      <div className="absolute w-[240px] md:w-[500px] h-[240px] md:h-[500px] bg-cyan-500/10 blur-[100px] rounded-full top-[-120px] left-[-120px]"></div>
      <div className="absolute w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-sky-500/10 blur-[90px] rounded-full bottom-[-100px] right-[-100px]"></div>

      {/* MAIN */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-center relative z-10">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="order-2 md:order-1 text-center md:text-left mt-6 md:mt-0"
        >
          <p
            className={`text-sm sm:text-base leading-7 max-w-xs mx-auto md:mx-0 ${
              darkMode ? "text-slate-400" : "text-slate-700"
            }`}
          >
            Building intelligent systems, secure infrastructures and modern high-performance web experiences with clean and scalable technologies.
          </p>
        </motion.div>

        {/* CENTER */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative flex flex-col items-center justify-center order-1 md:order-2"
        >

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center z-20 mb-8 md:mb-10"
          >
            <h1
              className={`text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight ${
                darkMode ? "text-white" : "text-black"
              }`}
            >
              I’m <span className="text-sky-500">Raihan</span>
            </h1>

            <TypeAnimation
              sequence={[
                "Software Engineer",
                2000,
                "MERN Developer",
                2000,
                "AI Enthusiast",
                2000,
              ]}
              wrapper="div"
              speed={50}
              repeat={Infinity}
              className={`text-lg sm:text-xl md:text-2xl font-semibold mt-2 ${
                darkMode ? "text-slate-300" : "text-slate-700"
              }`}
            />
          </motion.div>

          {/* IMAGE AREA */}
          <div className="relative flex items-center justify-center">

            {/* GLOW */}
            <div className="absolute w-[240px] sm:w-[300px] md:w-[360px] h-[240px] sm:h-[300px] md:h-[360px] bg-sky-500/30 blur-3xl rounded-full"></div>

            {/* BLUE CIRCLE */}
            <div className="absolute w-[200px] sm:w-[300px] md:w-[320px] h-[200px] sm:h-[260px] md:h-[320px] bg-sky-500 rounded-full opacity-90"></div>

            {/* IMAGE */}
            <img
              src={me}
              alt="hero"
              className="relative z-10 w-[250px] sm:w-[280px] md:w-[300px] object-cover"
            />

          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-row md:flex-col gap-4 justify-center md:justify-start items-center md:items-start order-3"
        >
          <button className="px-6 md:px-8 py-3 md:py-4 bg-sky-500 hover:bg-sky-400 text-white rounded-[14px] rotate-[-1deg] font-semibold transition duration-300 hover:scale-105 shadow-lg shadow-sky-500/20">
            Show Projects
          </button>

          <button className="px-6 md:px-8 py-3 md:py-4 border border-sky-500 text-sky-500 rounded-[14px] rotate-[1deg] font-semibold hover:bg-sky-500/10 transition duration-300 hover:scale-105">
            Show Resume
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;