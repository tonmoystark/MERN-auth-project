const mongoose = require("mongoose");

const musicSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  artist: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  fileId: { type: String, required: true },
});

const musicModel = mongoose.model("musics", musicSchema);

module.exports = musicModel;
