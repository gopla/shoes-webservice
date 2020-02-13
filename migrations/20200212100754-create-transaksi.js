'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Transaksis', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_transaksi: {
        type: Sequelize.STRING
      },
      id_user: {
        type: Sequelize.NUMBER
      },
      tanggal: {
        type: Sequelize.DATE
      },
      total: {
        type: Sequelize.NUMBER
      },
      id_retail: {
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
    return queryInterface.dropTable('Transaksis');
  }
};