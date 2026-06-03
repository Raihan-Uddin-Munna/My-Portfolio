const Admin = require("../models/Admin");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// REGISTER ADMIN (one time use)
exports.registerAdmin = async (req,res) => {
  try {

    const { phone, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const admin = await Admin.create({
      phone,
      password: hashedPassword
    });

    res.json({ message: "Admin created", admin });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// LOGIN ADMIN
exports.loginAdmin = async (req,res) => {
  try {

    const { phone, password } = req.body;

    const admin = await Admin.findOne({ phone });

    if(!admin){
      return res.status(400).json({ message: "Admin not found" });
    }

    const isMatch = await bcrypt.compare(password, admin.password);

    if(!isMatch){
      return res.status(400).json({ message: "Invalid password" });
    }

    const token = jwt.sign(
      { id: admin._id },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.json({ message: "Login success", token });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};