// import { useEffect, useState } from "react";
// import API from "../api/api";

// const Projects = () => {

//   const [projects, setProjects] = useState([]);

//   useEffect(() => {

//     const fetchProjects = async () => {

//       try {

//         const res = await API.get("/projects");

//         setProjects(res.data);

//       } catch (error) {
//         console.log(error);
//       }

//     };

//     fetchProjects();

//   }, []);

//   return (

//     <section
//       id="projects"
//       className="py-28 px-6 bg-black text-white"
//     >

//       <h2 className="text-5xl font-bold text-center mb-16">
//         Projects
//       </h2>

//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

//         {projects.map((project) => (

//           <div
//             key={project._id}
//             className="bg-zinc-900 p-6 rounded-3xl border border-zinc-800"
//           >

//             <h3 className="text-2xl font-bold mb-4">
//               {project.title}
//             </h3>

//             <p className="text-zinc-400 mb-6">
//               {project.description}
//             </p>

//             <div className="flex gap-4">

//               <a
//                 href={project.liveLink}
//                 target="_blank"
//                 className="bg-white text-black px-5 py-2 rounded-xl"
//               >
//                 Live
//               </a>

//               <a
//                 href={project.githubLink}
//                 target="_blank"
//                 className="border border-white px-5 py-2 rounded-xl"
//               >
//                 GitHub
//               </a>

//             </div>

//           </div>

//         ))}

//       </div>

//     </section>
//   );
// };

// export default Projects;



import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";

import API from "../api/api";
import Modal from "react-modal";

Modal.setAppElement("#root");

const Projects = () => {

  const { darkMode } = useContext(ThemeContext);

  const [projects, setProjects] = useState([]);

  const [selected, setSelected] = useState(null);
  const [open, setOpen] = useState(false);

  const fetchProjects = async () => {

    const res = await API.get("/projects");

    setProjects(res.data);
  };

  useEffect(() => {

    const loadData = async () => {
      await fetchProjects();
    };

    loadData();

  }, []);

  const openModal = (project) => {
    setSelected(project);
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
    setSelected(null);
  };

  return (

    <section
      id="projects"
      className={`py-20 px-6 transition-all duration-500
      ${darkMode
        ? "bg-[#0B1120] text-white"
        : "bg-gray-100 text-black"
      }`}
    >

      <h2 className="text-4xl font-bold text-center mb-12">
        My Projects
      </h2>

      <div className="max-w-3xl mx-auto space-y-4">

        {projects.map((p) => (

          <div
            key={p._id}
            onClick={() => openModal(p)}
            className={`cursor-pointer p-4 rounded-xl text-xl font-semibold transition
            ${darkMode
              ? "bg-gray-900 hover:bg-gray-800"
              : "bg-white hover:bg-gray-200"
            }`}
          >

            {p.title}

          </div>

        ))}

      </div>

      {/* MODAL */}
      <Modal
        isOpen={open}
        onRequestClose={closeModal}
        className={`max-w-2xl mx-auto mt-20 p-6 rounded-2xl outline-none
        ${darkMode
          ? "bg-[#111827] text-white"
          : "bg-white text-black"
        }`}
        overlayClassName="fixed inset-0 bg-black/70 flex justify-center items-start"
      >

        {selected && (

          <div>

            {selected.image && (
              <img
                src={selected.image}
                className="w-full h-52 object-cover rounded mb-4"
              />
            )}

            <h2 className="text-2xl font-bold mb-2">
              {selected.title}
            </h2>

            <p className={`${darkMode ? "text-gray-300" : "text-gray-700"} mb-4`}>
              {selected.description}
            </p>

            <div className="flex gap-3">

              <a
                href={selected.liveLink}
                target="_blank"
                className="bg-cyan-500 px-4 py-2 rounded text-white"
              >
                Live
              </a>

              <a
                href={selected.githubLink}
                target="_blank"
                className={`border px-4 py-2 rounded
                ${darkMode
                  ? "border-white"
                  : "border-black"
                }`}
              >
                GitHub
              </a>

            </div>

            <button
              onClick={closeModal}
              className="mt-6 bg-red-500 text-white px-4 py-2 rounded"
            >
              Close
            </button>

          </div>

        )}

      </Modal>

    </section>
  );
};

export default Projects;