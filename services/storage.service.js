require("dotenv").config();

const { default: ImageKit } = require("@imagekit/nodejs");

const imageKit = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});

const uploadFile = async (buffer) => {
  try {
    const result = await imageKit.files.upload({
      file: buffer.toString("base64"),
      fileName: "profile-image.jpg",
    });

    return result;
  } catch (error) {
    console.error("ImageKit upload failed:", error);
    throw error;
  }
};

module.exports = {
  uploadFile,
};
