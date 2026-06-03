const jwt = require("jsonwebtoken");

const protect = (req, res, next) => {

  let token = req.headers.authorization;

  if(!token){
    return res.status(401).json({ message: "No token, access denied" });
  }

  try {

    // Bearer token remove
    token = token.split(" ")[1];

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.admin = decoded;

    next();

  } catch (error) {
    res.status(401).json({ message: "Token invalid" });
  }

};

module.exports = protect;