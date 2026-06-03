const Project = require("../models/Project");

// CREATE
exports.createProject = async (req, res) => {
  try {
    const project = await Project.create({
      title: req.body.title,
      description: req.body.description,
      liveLink: req.body.liveLink,
      githubLink: req.body.githubLink,

      // ✅ CLOUDINARY IMAGE URL
      image: req.file ? req.file.path : ""
    });

    res.json(project);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

// GET
exports.getProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE
exports.deleteProject = async (req, res) => {
  try {
    await Project.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// UPDATE
exports.updateProject = async (req, res) => {
  try {
    const updateData = {
      title: req.body.title,
      description: req.body.description,
      liveLink: req.body.liveLink,
      githubLink: req.body.githubLink,
    };

    // ✅ Cloudinary image replace
    if (req.file) {
      updateData.image = req.file.path;
    }

    const updated = await Project.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    );

    res.json(updated);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};