const { transaksi } = require("../models");
class peminjamanController {
  static async listpeminjaman(req, res) {
    try {
      let peminjaman = await transaksi.findAll();
      res.json(peminjaman);
    } catch (err) {
      res.json(err);
    }
  }

  static async tambahpeminjaman(req, res) {}
}
module.exports = peminjamanController;
