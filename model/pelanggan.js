const mongoose = require("mongoose");

const pelangganSchema = new mongoose.Schema({
  kode: {
    required: true,
    type: String,
  },
  nama: {
    required: true,
    type: String,
  },
  alamat: {
    required: true,
    type: String,
  },
  items: [
    {
      kodeIkan: String,
      namaIkan: String,
      ukuran: String,
      kualitas: String,
    },
  ],
});

module.exports = mongoose.model("Pelanggan", pelangganSchema, "Pelanggan");
