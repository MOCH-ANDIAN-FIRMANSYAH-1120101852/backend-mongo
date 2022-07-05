const pelanggan = require("../model/pelanggan");

module.exports = {
  getPelanggan: async (req, res) => {
    try {
      const result = await pelanggan.find();
      res.status(200).json(result);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  },

  insert: async (req, res) => {
    const data = new pelanggan({
      kode: req.body.kode,
      nama: req.body.nama,
      alamat: req.body.alamat,
    });
    try {
      const dataToSave = await data.save();
      res.status(200).json(dataToSave);
    } catch (error) {
      res.status(400).json({ massage: error.massage });
    }
  },

  insertBuy: async (req, res) => {
   
    const { kode } = req.params;
    try {
      await pelanggan.updateOne(
        { kode: kode },
        {
          $push: {
            items: {
              kodeIkan: req.body.kodeikan,
              namaIkan: req.body.namaikan,
              kualitas: req.body.kualitas,
              ukuran: req.body.ukuran,
            },
          },
        }
      );
      res.send("Items Ikan telah disimpan");
    } catch (error) {
      res.status(409).json({ message: error.message });
    }
  },

  getPelangganByKode: async (req, res) => {
    const kode = req.params.kode;
    try {
      const result = await pelanggan.find().where("kode").equals(kode);
      res.json(result);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  update: async (req, res) => {
    const filter = { kode: req.params.kode };
    const updateData = {
      nama: req.body.nama,
      alamat: req.body.alamat,
    };
    try {
      await pelanggan.updateOne(filter, updateData);
      res.send("Data telah terupdate");
    } catch (error) {
      res.status(409).json({ massage: error.message });
    }
  },

  delete: async (req, res) => {
    const filter = { kode: req.params.kode };
    try {
      await pelanggan.deleteOne(filter);
      res.send("data telah terhapus");
    } catch (error) {
      res.status(409).json({ message: error.message });
    }
  },
};
