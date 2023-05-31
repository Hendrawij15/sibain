const { Router } = require("express");
const peminjamanRoute = Router();

const peminjamanController = require("../controllers/peminjamanController");

peminjamanRoute.get("/", peminjamanController.listpeminjaman);
peminjamanRoute.post("/tambah", peminjamanController.tambahpeminjaman);
module.exports = peminjamanRoute;
