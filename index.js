const express = require("express");
const app = express();
const port = 5000;
const pelangganRouter = require("./router/pelanggan");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");

//untuk menerima req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: "*",
  })
);

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "koneksi error"));
db.once("open", function () {
  console.log("berhasil terkoneksi ke mongodb");
});

app.use(pelangganRouter);

app.listen(port, () => {
  console.log("server berjalan pada port" + port);
});
