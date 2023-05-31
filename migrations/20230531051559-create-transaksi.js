'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('transaksis', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_user: {
        type: Sequelize.INTEGER
      },
      id_jenis: {
        type: Sequelize.INTEGER
      },
      id_barang: {
        type: Sequelize.INTEGER
      },
      no_inventaris: {
        type: Sequelize.STRING
      },
      tanggal_peminjaman: {
        type: Sequelize.STRING
      },
      tanggal_pengembalian: {
        type: Sequelize.STRING
      },
      keterangan: {
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
    await queryInterface.dropTable('transaksis');
  }
};