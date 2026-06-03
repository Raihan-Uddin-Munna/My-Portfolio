const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");

// public route
router.get("/", (req,res)=>{
  res.send("Admin Route Working");
});

// 🔐 protected route
router.get("/dashboard", protect, (req,res)=>{
  res.json({ message: "Welcome Admin Dashboard" });
});

module.exports = router;