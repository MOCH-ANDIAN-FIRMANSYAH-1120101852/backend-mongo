const express = require("express");
const routerPelanggan = express.Router();

const controllerPelanggan = require("../controller/pelanggan");

routerPelanggan
  .route("/pelanggan")
  .get(controllerPelanggan.getPelanggan)
  .post(controllerPelanggan.insert);

routerPelanggan
  .route("/pelanggan/:kode")
  .get(controllerPelanggan.getPelangganByKode)
  .delete(controllerPelanggan.delete);

routerPelanggan
  .route("/pelanggan/buy/:kode")
  .put(controllerPelanggan.insertBuy);

module.exports = routerPelanggan;
