const { user } = require("../models");
class userController {
  static async listuser(req, res) {
    try {
      let user = await user.findAll();
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async loginuser(req, res) {
    try {
      const { email, password } = req.body;

      let userFound = await user.findOne({
        where: { email },
      });
      if (userFound) {
        if (userFound.password === password) {
          res.status(200).json(userFound);
        } else {
          res.status(400).json({
            message: "Password Salah",
          });
        }
      } else {
        res.status(404).json({
          message: " User tidak ditemukan",
        });
      }
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async registeruser(req, res) {
    try {
      const { nama, email, password } = req.body;
      let result = await user.create({
        nama,
        email,
        password,
      });
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  static async getuserbyId(req, res) {}
  static async updateuser(req, res) {}
  static async deleteuser(req, res) {}
}
module.exports = userController;
