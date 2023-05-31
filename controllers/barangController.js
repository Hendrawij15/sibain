const { data_barang } = require("../models");

class databarangController {
  static async listbarang(req, res) {
    try {
      let barang = await data_barang.findAll();
      res.json(barang);
    } catch (err) {
      res.json(err);
    }
  }

  static async tambahbarang(req, res) {}
  static async getbarangbyId(req, res) {}
  static async updatebarang(req, res) {}
  static async deletebarang(req, res) {}
}
module.exports = databarangController;
