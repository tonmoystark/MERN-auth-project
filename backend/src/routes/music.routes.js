const express = require("express");
const router = express.Router();
const multer = require("multer");
const {
  createMusic,
  getAllMusics,
  createAlbum,
} = require("../controllers/music.controller");
const { isArtist, isLoggedIn } = require("../middlewares/artists.middleware");

const upload = multer({ storage: multer.memoryStorage() });

router.post("/upload", isArtist, upload.single("music"), createMusic);
router.post("/create-album", isArtist, createAlbum);
router.get("/", isLoggedIn, getAllMusics);

module.exports = router;
