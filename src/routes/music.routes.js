const express = require("express");
const router = express.Router();
const multer = require("multer");
const { createMusic } = require("../controllers/music.controller");

const upload = multer({ storage: multer.memoryStorage() });

router.post("/create-music", upload.single("music"), createMusic);

module.exports = router;
