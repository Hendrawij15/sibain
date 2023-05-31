const { Router } = require("express");
const jenisRoute = Router();

const jenisController = require("../controllers/jenisController");

jenisRoute.get("/", jenisController.listjenis);
jenisRoute.post("/tambah", jenisController.tambahjenis);
jenisRoute.get("/deskripsi/:jenisId", jenisController.getjenisbyId);
jenisRoute.put("/update/:jenisId", jenisController.updatejenis);
jenisRoute.delete("/delete/:jenisid", jenisController.deletejenis);

module.exports = jenisRoute;
