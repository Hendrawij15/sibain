"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class jenis_barang extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  jenis_barang.init(
    {
      nama: {
        type: DataTypes.STRING,
        validate: {
          isNull: {
            message: "Silahkan isi nama jenis barang",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "jenis_barang",
    }
  );
  return jenis_barang;
};
