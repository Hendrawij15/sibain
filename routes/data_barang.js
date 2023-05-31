const { Router } = require("express");
const barangRoute = Router();

const barangController = require("../controllers/barangController");

barangRoute.get("/", barangController.listbarang);
barangRoute.post("/tambah", barangController.tambahbarang);
barangRoute.get("/deskripsi/:barangId", barangController.getbarangbyId);
barangRoute.put("/update/:barangId", barangController.updatebarang);
barangRoute.delete("/delete/:barangid", barangController.deletebarang);

module.exports = barangRoute;
