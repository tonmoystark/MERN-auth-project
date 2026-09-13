const express = require("express");
const router = express.Router();
const multer = require("multer");
const {
  createMusic,
  getAllMusics,
} = require("../controllers/music.controller");

const upload = multer({ storage: multer.memoryStorage() });

router.post("/upload", upload.single("music"), createMusic);
router.get("/", getAllMusics);

module.exports = router;
