const { transaksi } = require("../models");
class pengembalianController {
  static async listpengembalian(req, res) {
    try {
      let pengembalian = await transaksi.findAll();
      res.json(pengembalian);
    } catch (err) {
      res.json(err);
    }
  }

  static async pengembalian(req, res) {}
}
module.exports = pengembalianController;
