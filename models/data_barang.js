"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class data_barang extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  data_barang.init(
    {
      no_inventaris: {
        type: DataTypes.INTEGER,
        validate: {
          isNull: {
            message: "Silahkan isi no inventaris",
          },
          isNumeric: {
            message: "silahkan masukkan angka..",
          },
        },
      },
      id_jenis: DataTypes.INTEGER,

      nama: {
        type: DataTypes.STRING,
        validate: {
          isNull: {
            message: "Silahkan isi nama barang",
          },
        },
      },

      tahun: {
        type: DataTypes.INTEGER,
        validate: {
          isNull: {
            message: "Silahkan isi tahun barang",
          },
        },
      },

      merk: {
        type: DataTypes.STRING,
        validate: {
          isNull: {
            message: "Silahkan isi merk/type barang",
          },
        },
      },

      status_barang: {
        type: DataTypes.STRING,
        validate: {
          isNull: {
            message: "di isi dengan status barang saat ini",
          },
        },
      },

      stok: {
        type: DataTypes.INTEGER,
        validate: {
          isNull: {
            message: "Silahkan isi sesuai dengan stok yang tersedia",
          },
        },
      },
      lokasi: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "data_barang",
    }
  );
  return data_barang;
};
