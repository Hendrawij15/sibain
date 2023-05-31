const { Router } = require("express");
const route = Router();

route.get("/", (req, res) => {
  res.json({
    message: "Sistem Inventaris UPT Teknologi Informasi dan Komunikasi",
  });
});
const databarangRoutes = require("./data_barang");
const jenisbarangRoutes = require("./jenis_barang");
const userRoutes = require("./user");
const peminjamanRoutes = require("./peminjaman");
const pengembalianRoutes = require("./pengembalian");

route.use("/data_", databarangRoutes);
route.use("/jenis_", jenisbarangRoutes);
route.use("/user_", userRoutes);
route.use("/peminjaman_", peminjamanRoutes);
route.use("/pengembalian_", pengembalianRoutes);
module.exports = route;
