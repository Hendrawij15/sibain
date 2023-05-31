'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('data_barangs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      no_inventaris: {
        type: Sequelize.STRING
      },
      id_jenis: {
        type: Sequelize.INTEGER
      },
      nama: {
        type: Sequelize.STRING
      },
      tahun: {
        type: Sequelize.INTEGER
      },
      merk: {
        type: Sequelize.STRING
      },
      status_barang: {
        type: Sequelize.STRING
      },
      stok: {
        type: Sequelize.INTEGER
      },
      lokasi: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('data_barangs');
  }
};