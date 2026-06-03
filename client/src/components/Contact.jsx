import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Contact = () => {

  const { darkMode } = useContext(ThemeContext);

  return (

    <section id="contact" className="py-28 px-6">

      <div className="max-w-5xl mx-auto text-center">

        <h2 className="text-4xl font-bold mb-12">
          Contact Me
        </h2>

        <div className="flex flex-wrap justify-center gap-6">

          <a
            href="https://facebook.com"
            target="_blank"
            className={`text-4xl p-5 rounded-full transition hover:scale-110
            ${darkMode
            ? "bg-slate-900/40"
            : "bg-slate-100"
            }`}
          >
            <FaFacebook />
          </a>

          <a
            href="https://github.com"
            target="_blank"
            className={`text-4xl p-5 rounded-full transition hover:scale-110
            ${darkMode
            ? "bg-slate-900/40"
            : "bg-slate-100"
            }`}
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            className={`text-4xl p-5 rounded-full transition hover:scale-110
            ${darkMode
            ? "bg-slate-900/40"
            : "bg-slate-100"
            }`}
          >
            <FaLinkedin />
          </a>

          <a
            href="https://wa.me/8801XXXXXXXXX"
            target="_blank"
            className={`text-4xl p-5 rounded-full transition hover:scale-110
            ${darkMode
            ? "bg-slate-900/40"
            : "bg-slate-100"
            }`}
          >
            <FaWhatsapp />
          </a>

          <a
            href="mailto:yourmail@gmail.com"
            className={`text-4xl p-5 rounded-full transition hover:scale-110
            ${darkMode
            ? "bg-slate-900/40"
            : "bg-slate-100"
            }`}
          >
            <MdEmail />
          </a>

        </div>

      </div>

    </section>
  );
};

export default Contact;