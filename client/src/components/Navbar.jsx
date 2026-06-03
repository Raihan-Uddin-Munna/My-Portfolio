// import { useContext, useEffect, useState } from "react";
// import { ThemeContext } from "../context/ThemeContext";
// import { HiMenuAlt3, HiX } from "react-icons/hi";
// import { MdDarkMode, MdLightMode } from "react-icons/md";

// const Navbar = () => {

//   const { darkMode, setDarkMode } = useContext(ThemeContext);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [active, setActive] = useState("home");

//   // 🔥 ACTIVE SECTION TRACK
//   useEffect(() => {

//     const sections = document.querySelectorAll("section");

//     const observer = new IntersectionObserver(
//       (entries) => {

//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setActive(entry.target.id);
//           }
//         });

//       },
//       { threshold: 0.6 }
//     );

//     sections.forEach((sec) => observer.observe(sec));

//     return () => observer.disconnect();

//   }, []);

//   const linkClass = (id) =>
//     `cursor-pointer transition hover:text-cyan-400 ${
//       active === id ? "text-cyan-400 font-bold" : ""
//     }`;

//   return (

//     <nav className={`fixed top-0 w-full z-50 backdrop-blur-xl border-b transition-all
//       ${darkMode
//         ? "bg-[#0B1120]/80 text-white border-slate-800"
//         : "bg-white/80 text-black border-slate-200"
//       }`}>

//       <div className="max-w-7xl mx-auto px-6 h-[80px] flex items-center justify-between">

//         {/* LOGO */}
//         <h1 className="text-2xl font-bold tracking-wide">
//           Raihan
//         </h1>

//         {/* DESKTOP MENU */}
//         <ul className="hidden md:flex gap-8 font-medium">

//           <a href="#home" className={linkClass("home")}>
//             Home
//           </a>

//           <a href="#about" className={linkClass("about")}>
//             About
//           </a>

//           <a href="#skills" className={linkClass("skills")}>
//             Skills
//           </a>

//           <a href="#projects" className={linkClass("projects")}>
//             Projects
//           </a>

//           <a href="#contact" className={linkClass("contact")}>
//             Contact
//           </a>

//         </ul>

//         {/* RIGHT SIDE */}
//         <div className="flex items-center gap-4">

//           {/* THEME TOGGLE */}
//           <button
//             onClick={() => setDarkMode(!darkMode)}
//             className="text-2xl hover:scale-110 transition"
//           >
//             {darkMode ? <MdLightMode /> : <MdDarkMode />}
//           </button>

//           {/* MOBILE MENU BUTTON */}
//           <button
//             onClick={() => setMenuOpen(!menuOpen)}
//             className="md:hidden text-3xl"
//           >
//             {menuOpen ? <HiX /> : <HiMenuAlt3 />}
//           </button>

//         </div>

//       </div>

//       {/* MOBILE MENU (IMPROVED) */}
//       <div
//         className={`md:hidden overflow-hidden transition-all duration-300
//         ${menuOpen ? "max-h-96 py-4" : "max-h-0"}
//         ${darkMode ? "bg-[#0B1120]" : "bg-white"}`}
//       >

//         <div className="flex flex-col gap-4 px-6 font-medium">

//           <a href="#home" onClick={() => setMenuOpen(false)} className={linkClass("home")}>
//             Home
//           </a>

//           <a href="#about" onClick={() => setMenuOpen(false)} className={linkClass("about")}>
//             About
//           </a>

//           <a href="#skills" onClick={() => setMenuOpen(false)} className={linkClass("skills")}>
//             Skills
//           </a>

//           <a href="#projects" onClick={() => setMenuOpen(false)} className={linkClass("projects")}>
//             Projects
//           </a>

//           <a href="#contact" onClick={() => setMenuOpen(false)} className={linkClass("contact")}>
//             Contact
//           </a>

//         </div>

//       </div>

//     </nav>
//   );
// };

// export default Navbar;







import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const Navbar = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  // 🔥 ACTIVE SECTION TRACKING
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((sec) => observer.observe(sec));

    return () => observer.disconnect();
  }, []);

  const linkClass = (id) =>
    `cursor-pointer transition ${
      active === id ? "text-cyan-400 font-bold" : "hover:text-cyan-400"
    }`;

  // 🔥 CLOSE MENU ON CLICK
  const handleClose = () => setMenuOpen(false);

  return (
    <nav
      className={`fixed top-0 w-full z-50 backdrop-blur-xl border-b transition-all
      ${
        darkMode
          ? "bg-[#0B1120]/80 text-white border-slate-800"
          : "bg-white/80 text-black border-slate-200"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-[80px] flex items-center justify-between">

        {/* LOGO */}
        <h1 className="text-2xl font-bold tracking-wide">Raihan</h1>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-8 font-medium">
          {["home", "about", "skills", "projects", "contact"].map((id) => (
            <a key={id} href={`#${id}`} className={linkClass(id)}>
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
        </ul>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">

          {/* THEME */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-2xl hover:scale-110 transition"
          >
            {darkMode ? <MdLightMode /> : <MdDarkMode />}
          </button>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-3xl"
          >
            {menuOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>

        </div>
      </div>

      {/* BACKDROP */}
      {menuOpen && (
        <div
          onClick={handleClose}
          className="fixed inset-0 bg-black/40 md:hidden"
        />
      )}

      {/* MOBILE DRAWER */}
      <div
        className={`fixed top-0 right-0 h-full w-2/3 sm:w-1/2 md:hidden z-50 transform transition-transform duration-300
        ${menuOpen ? "translate-x-0" : "translate-x-full"}
        ${darkMode ? "bg-[#0B1120] text-white" : "bg-white text-black"}
        shadow-2xl`}
      >
        <div className="flex flex-col gap-6 px-6 pt-20 font-medium">

          {["home", "about", "skills", "projects", "contact"].map((id) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={handleClose}
              className={linkClass(id)}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}

        </div>
      </div>
    </nav>
  );
};

export default Navbar;