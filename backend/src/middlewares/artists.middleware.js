const jwt = require("jsonwebtoken");

const isArtist = (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (decoded.role !== "artist") {
      return res.status(403).json({
        message: "You do not have permission",
      });
    }
    req.user = decoded;
    next();
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      message: "Failed to verify artist",
    });
  }
};

const isLoggedIn = (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!["artist", "user"].includes(decoded.role)) {
      return res.status(403).json({
        message: "You do not have permission",
      });
    }

    req.user = decoded;
    next();
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      message: "Failed to verify user",
    });
  }
};

module.exports = { isArtist, isLoggedIn };
