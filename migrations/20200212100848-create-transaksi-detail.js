'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('TransaksiDetails', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_transaksi: {
        type: Sequelize.STRING
      },
      id_sepatu: {
        type: Sequelize.NUMBER
      },
      jumlah: {
        type: Sequelize.NUMBER
      },
      harga: {
        type: Sequelize.NUMBER
      },
      subtotal: {
        type: Sequelize.NUMBER
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('TransaksiDetails');
  }
};