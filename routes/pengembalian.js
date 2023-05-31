const { Router } = require("express");
const peminjamanRoute = Router();

const pengembalianController = require("../controllers/pengembalianController");

peminjamanRoute.get("/", pengembalianController.listpengembalian);
peminjamanRoute.post("/kembali", pengembalianController.pengembalian);
module.exports = peminjamanRoute;
