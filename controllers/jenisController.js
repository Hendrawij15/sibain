const { jenis_barang } = require("../models");
class jenisController {
  static async listjenis(req, res) {
    try {
      let jenis = await jenis_barang.findAll();
      res.json(jenis);
    } catch (err) {
      res.json(err);
    }
  }

  static async tambahjenis(req, res) {}
  static async getjenisbyId(req, res) {}
  static async updatejenis(req, res) {}
  static async deletejenis(req, res) {}
}
module.exports = jenisController;
