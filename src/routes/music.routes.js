const express = require("express");
const router = express.Router();
const multer = require("multer");

const upload = multer({ storage: multer.memoryStorage() });

router.post("/upload", upload.single("file"), uploadMusic);

module.exports = router;
