const musicModel = require("../models/musics.model");
const jwt = require("jsonwebtoken");

const { uploadFile } = require("../services/storage.service");

async function createMusic(req, res) {
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

    const { title } = req.body;

    const file = req.file;

    if (!file) {
      return res.status(400).json({
        message: "Music file is required",
      });
    }

    const result = await uploadFile(file.buffer);

    const music = await musicModel.create({
      title,
      artist: decoded.id,
      url: result.url,
      fileId: result.fileId,
    });

    return res.status(201).json({
      message: "Music created successfully",
      music,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Failed to create music",
    });
  }
}

async function getAllMusics(req, res) {
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

    const musics = await musicModel.find().populate("artist", "username");

    return res.status(200).json({
      message: "Musics fetched successfully",
      musics,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      message: "Failed to fetch musics",
    });
  }
}

module.exports = { createMusic, getAllMusics };
