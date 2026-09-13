const musicModel = require("../models/musics.model");

const { uploadFile } = require("../services/storage.service");
const albumModel = require("../models/albums.model");

async function createMusic(req, res) {
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
    artist: req.user.id,
    url: result.url,
    fileId: result.fileId,
  });

  return res.status(201).json({
    message: "Music created successfully",
    music,
  });
}

async function getAllMusics(req, res) {
  const musics = await musicModel.find().populate("artist", "username");

  return res.status(200).json({
    message: "Musics fetched successfully",
    musics,
  });
}

async function createAlbum(req, res) {
  const { title, musics } = req.body;

  const album = await albumModel.create({
    title,
    artist: req.user.id,
    musics,
  });
  await album.populate("artist", "username");

  return res.status(201).json({
    message: "Album created successfully",
    album,
  });
}

module.exports = { createMusic, getAllMusics, createAlbum };
