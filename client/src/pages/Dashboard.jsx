import { useEffect, useState } from "react";
import API from "../api/api";

const Dashboard = () => {

  const [form, setForm] = useState({
    title: "",
    description: "",
    liveLink: "",
    githubLink: "",
  });

  const [image, setImage] = useState(null);
  const [projects, setProjects] = useState([]);
  const [editId, setEditId] = useState(null);

  // 🔥 GET PROJECTS
  const fetchProjects = async () => {
    try {
      const res = await API.get("/projects");
      setProjects(res.data);
    } catch (error) {
      console.log("Fetch error:", error.message);
    }
  };

 useEffect(() => {

  const loadData = async () => {
    await fetchProjects();
  };

  loadData();

}, []);

  // 🔥 INPUT CHANGE
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 🔥 SUBMIT (CREATE / UPDATE)
  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    if (!token) {
      alert("Unauthorized ❌");
      return;
    }

    try {

      const formData = new FormData();

      Object.keys(form).forEach((key) => {
        formData.append(key, form[key]);
      });

      if (image) {
        formData.append("image", image);
      }

      if (editId) {
        await API.put(`/projects/${editId}`, formData, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        });

        alert("Project Updated ✅");

      } else {
        await API.post("/projects", formData, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        });

        alert("Project Added ✅");
      }

      // RESET
      setForm({
        title: "",
        description: "",
        liveLink: "",
        githubLink: "",
      });

      setImage(null);
      setEditId(null);

      fetchProjects();

    } catch (error) {
      console.log("Submit error:", error.response?.data || error.message);
    }
  };

  // 🔥 DELETE
  const handleDelete = async (id) => {

    const token = localStorage.getItem("token");

    if (!token) return alert("Unauthorized ❌");

    const confirmDelete = window.confirm("Are you sure to delete?");
    if (!confirmDelete) return;

    try {

      await API.delete(`/projects/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      alert("Deleted ✅");
      fetchProjects();

    } catch (error) {
      console.log("Delete error:", error.message);
    }
  };

  // 🔥 EDIT
  const handleEdit = (project) => {
    setEditId(project._id);

    setForm({
      title: project.title || "",
      description: project.description || "",
      liveLink: project.liveLink || "",
      githubLink: project.githubLink || "",
    });
  };

  return (

    <div className="min-h-screen bg-[#0b0f1a] text-white px-6 py-10 flex flex-col items-center">

      {/* FORM */}
      <div className="w-full max-w-2xl bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl shadow-xl">

        <h1 className="text-3xl font-bold mb-6 text-center">
          Admin Dashboard
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Project Name"
            className="w-full p-3 bg-gray-900 rounded"
          />

          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Description"
            className="w-full p-3 bg-gray-900 rounded"
          />

          <input
            name="liveLink"
            value={form.liveLink}
            onChange={handleChange}
            placeholder="Live Link"
            className="w-full p-3 bg-gray-900 rounded"
          />

          <input
            name="githubLink"
            value={form.githubLink}
            onChange={handleChange}
            placeholder="GitHub Link"
            className="w-full p-3 bg-gray-900 rounded"
          />

          <input
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
            className="w-full"
          />

          <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 py-3 rounded-xl font-bold hover:scale-[1.02] transition">
            {editId ? "Update Project" : "Add Project"}
          </button>

        </form>
      </div>

      {/* PROJECT LIST */}
      <div className="mt-12 w-full max-w-5xl grid md:grid-cols-2 gap-8">

        {projects.map((p) => (

          <div
            key={p._id}
            className="bg-white/5 backdrop-blur-md border border-white/10 
            p-5 rounded-2xl shadow-lg hover:scale-[1.02] transition"
          >

            {p.image && (
              <img
                src={p.image}
                alt={p.title}
                className="rounded-xl mb-4 h-44 w-full object-cover"
              />
            )}

            <h2 className="text-2xl font-bold">{p.title}</h2>

            <p className="text-gray-400 text-sm mt-2 line-clamp-3">
              {p.description}
            </p>

            <div className="flex gap-3 mt-5">

              <button
                onClick={() => handleEdit(p)}
                className="bg-yellow-500 px-4 py-1 rounded-lg font-semibold"
              >
                Edit
              </button>

              <button
                onClick={() => handleDelete(p._id)}
                className="bg-red-500 px-4 py-1 rounded-lg font-semibold"
              >
                Delete
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
};

export default Dashboard;