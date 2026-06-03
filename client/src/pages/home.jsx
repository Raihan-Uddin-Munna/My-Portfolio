import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {

  const { darkMode } = useContext(ThemeContext);

  return (

    <div
      className={`min-h-screen transition-all duration-500
      ${darkMode
      ? "bg-[#0B1120] text-white"
      : "bg-white text-black"
      }`}
    >

      <Navbar />

      <Hero />

      <About />

      <Skills />

      <Projects />

      <Contact />

      <Footer />

    </div>
  );
};

export default Home;