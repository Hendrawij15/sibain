"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class transaksi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      transaksi.belongsTo(models.data_barang);
      transaksi.belongsTo(models.user);
    }
  }
  transaksi.init(
    {
      id_user: DataTypes.INTEGER,
      id_jenis: DataTypes.INTEGER,
      id_barang: DataTypes.INTEGER,
      no_inventaris: DataTypes.STRING,
      tanggal_peminjaman: DataTypes.STRING,
      tanggal_pengembalian: DataTypes.STRING,
      keterangan: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "transaksi",
    }
  );
  return transaksi;
};
