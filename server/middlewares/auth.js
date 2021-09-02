const jwt = require("jsonwebtoken");

exports.isAuthenticated = (req, res, next) => {
  try {
    const token = req.cookies.t;
    if (!token)
      return res.status(401).json({ error: true, message: "Unauthorized" });

    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified.user;
    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ error: true, message: "Unauthorized" });
  }
};

exports.isAdmin = (req, res, next) => {
  try {
    const role = req.cookies.role;
    if (!role && role !== "admin")
      return res.status(401).json({ error: true, message: "Unauthorized" });
    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ error: true, message: "Unauthorized" });
  }
};
