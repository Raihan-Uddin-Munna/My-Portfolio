const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({

  title: String,
  description: String,
  liveLink: String,
  githubLink: String,

  // 🖼 NEW IMAGE FIELD
  image: String,

}, { timestamps: true });

module.exports = mongoose.model("Project", projectSchema);