const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");
const upload = require("../middleware/upload");

const {
  createProject,
  getProjects,
  deleteProject,
  updateProject
} = require("../controllers/projectController");

router.get("/", getProjects);

router.post("/", protect, upload.single("image"), createProject);

router.delete("/:id", protect, deleteProject);

router.put("/:id", protect, upload.single("image"), updateProject);

module.exports = router;