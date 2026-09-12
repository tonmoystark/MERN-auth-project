const cookieParser = require("cookie-parser");
const cors = require("cors");
const express = require("express");
const authRouter = require("./routes/auth.routes");
const musicRouter = require("./routes/music.routes");
const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use("/api/auth", authRouter);
app.use("/api/music", musicRouter);

module.exports = app;
